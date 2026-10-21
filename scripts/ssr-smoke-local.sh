#!/usr/bin/env bash
#
# ssr-smoke-local.sh — run the SSR crawlability smoke test against a LOCAL
# build, so the check runs pre-push, not just against production after a
# regression is already live.
#
# yodacom-site uses @sveltejs/adapter-static (fully prerendered, output in
# build/). `vite build` + `vite preview` serves that static output with no
# extra runtime/bindings needed.
#
# Usage:
#   pnpm test:ssr-smoke:local
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"
# Ask the OS for a free port. A fixed port let a foreign dev server (another
# repo's `vite preview` on 4173) answer in place of ours: our strictPort preview
# exited, the readiness curl hit the stranger, and the smoke test then failed
# with misleading 404s against the wrong site.
PORT="$(node -e "const s=require('net').createServer();s.listen(0,'127.0.0.1',()=>{console.log(s.address().port);s.close()})")"
BASE_URL="http://localhost:${PORT}"

cd "$REPO_ROOT"

echo "ssr-smoke-local: building..."
pnpm build

pnpm exec vite preview --port "$PORT" --strictPort >/tmp/yodacom-ssr-smoke-preview.log 2>&1 &
PREVIEW_PID=$!

cleanup() {
	kill "$PREVIEW_PID" >/dev/null 2>&1 || true
	wait "$PREVIEW_PID" 2>/dev/null || true
}
trap cleanup EXIT

ready=0
for _ in $(seq 1 20); do
	if ! kill -0 "$PREVIEW_PID" 2>/dev/null; then
		echo "ssr-smoke-local: preview server exited early (port $PORT)."
		cat /tmp/yodacom-ssr-smoke-preview.log || true
		exit 1
	fi
	if curl -s -o /dev/null "$BASE_URL"; then
		ready=1
		break
	fi
	sleep 1
done

if [ "$ready" -ne 1 ]; then
	echo "ssr-smoke-local: preview server did not come up on $BASE_URL within 20s."
	echo "Preview server log:"
	cat /tmp/yodacom-ssr-smoke-preview.log || true
	exit 1
fi

SMOKE_BASE_URL="$BASE_URL" node scripts/ssr-smoke.mjs
