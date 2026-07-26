<script lang="ts">
	// Stablecoin comparison chart — ported from Sabine's standalone HTML/CSS
	// (Knowledge_Base/visual-assets/stablecoin-comparison-2026-07/stablecoin-comparison-chart-2026-07-25.html).
	// Theme toggle uses Svelte state instead of an inline <script>/addEventListener,
	// since this app's CSP is script-src 'self' (no unsafe-inline) — this compiles
	// into the normal JS bundle instead of an inline script tag.
	let themeOverride = $state<'light' | 'dark' | null>(null);

	function toggleTheme() {
		if (themeOverride === 'dark') themeOverride = 'light';
		else if (themeOverride === 'light') themeOverride = null;
		else themeOverride = 'dark';
	}
</script>

<div class="sc-chart" data-theme={themeOverride}>
	<div class="sc-head">
		<div>
			<p class="sc-eyebrow">Stablecoin Comparison &middot; Mid-2026</p>
			<h2 class="sc-title">Five stablecoins, side by side</h2>
			<p class="sc-subtitle">
				Issuer structure, liquidity tier, and the risk that actually matters &mdash; not a
				ranking, a reference.
			</p>
		</div>
		<button class="sc-theme-btn" type="button" aria-label="Toggle light/dark theme" onclick={toggleTheme}>
			Toggle theme
		</button>
	</div>

	<div class="sc-legend">
		<span class="sc-legend-item"
			><span class="sc-legend-swatch" style="background:var(--accent-blue)"></span>Centralized issuer</span
		>
		<span class="sc-legend-item"
			><span class="sc-legend-swatch" style="background:var(--accent-teal)"></span>Decentralized
			/ DAO-governed</span
		>
		<span class="sc-legend-item"
			><span class="sc-legend-swatch" style="background:var(--meter-fill)"></span>Liquidity meter =
			market-cap tier (1 = smallest, 5 = largest)</span
		>
		<span class="sc-legend-item"
			><span class="sc-legend-swatch" style="background:var(--accent-red)"></span>Regulatory
			exposure: Low / Moderate / High</span
		>
	</div>

	<div class="sc-scroll">
		<table class="sc-table">
			<colgroup>
				<col class="sc-w-coin" />
				<col class="sc-w-structure" />
				<col class="sc-w-liquidity" />
				<col class="sc-w-backing" />
				<col class="sc-w-risk" />
				<col class="sc-w-reg" />
				<col class="sc-w-bestfor" />
			</colgroup>
			<thead>
				<tr>
					<th class="sc-sticky">Stablecoin</th>
					<th>Structure</th>
					<th>Liquidity (mid-2026)</th>
					<th>Backing</th>
					<th>Key risk</th>
					<th>Regulatory exposure</th>
					<th>Best for</th>
				</tr>
			</thead>
			<tbody>
				<!-- USDT -->
				<tr>
					<th scope="row" class="sc-sticky">
						<span class="sc-ticker">USDT</span>
						<span class="sc-coin-name">Tether</span>
						<span class="sc-issuer">Tether Ltd. &middot; offshore, El Salvador-licensed</span>
					</th>
					<td>
						<span class="sc-badge sc-badge-centralized">
							<svg width="12" height="12" viewBox="0 0 16 16" fill="none"
								><rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" stroke-width="1.4" /><path
									d="M5 7V5a3 3 0 0 1 6 0v2"
									stroke="currentColor"
									stroke-width="1.4"
								/></svg
							>
							Centralized
						</span>
					</td>
					<td>
						<div class="sc-meter" aria-label="Liquidity tier 5 of 5, dominant">
							<span class="sc-meter-bar filled" style="height:8px"></span>
							<span class="sc-meter-bar filled" style="height:11px"></span>
							<span class="sc-meter-bar filled" style="height:14px"></span>
							<span class="sc-meter-bar filled" style="height:17px"></span>
							<span class="sc-meter-bar filled" style="height:20px"></span>
						</div>
						<span class="sc-cap-figure">~$184&ndash;190B</span>
						<span class="sc-cap-label">Tier 5 &middot; Dominant (~58% share)</span>
					</td>
					<td>
						<span class="sc-backing-text"
							>~80% U.S. Treasuries/repo + cash, plus ~$8B gold, ~$7B BTC, secured loans</span
						>
					</td>
					<td>
						<div class="sc-risk-headline">
							<svg width="13" height="13" viewBox="0 0 16 16" fill="none"
								><path
									d="M8 2.2 L14.5 13.5 H1.5 Z"
									stroke="currentColor"
									stroke-width="1.3"
									stroke-linejoin="round"
								/><line x1="8" y1="6.3" x2="8" y2="9.6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" /><circle
									cx="8"
									cy="11.6"
									r="0.9"
									fill="currentColor"
								/></svg
							>
							No independent audit, ever
						</div>
						<span class="sc-risk-detail"
							>Quarterly attestations only, not a full audit; reserves carry non-cash-equivalent
							BTC/gold exposure</span
						>
					</td>
					<td>
						<span class="sc-reg-badge sc-reg-high">
							<svg width="12" height="12" viewBox="0 0 16 16" fill="none"
								><path
									d="M8 2.2 L14.5 13.5 H1.5 Z"
									stroke="currentColor"
									stroke-width="1.3"
									stroke-linejoin="round"
								/><line x1="8" y1="6.3" x2="8" y2="9.6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" /><circle
									cx="8"
									cy="11.6"
									r="0.9"
									fill="currentColor"
								/></svg
							>
							High
						</span>
						<span class="sc-reg-detail">Delisted/restricted on MiCA-licensed EU exchanges as of July 2026</span>
					</td>
					<td>
						<span class="sc-bestfor-text"
							>Maximum liquidity, CEX trading pairs, non-EU/emerging-market transfer (Tron rails)</span
						>
					</td>
				</tr>

				<!-- USDC -->
				<tr>
					<th scope="row" class="sc-sticky">
						<span class="sc-ticker">USDC</span>
						<span class="sc-coin-name">Circle USD</span>
						<span class="sc-issuer">Circle Internet Group &middot; NYSE: CRCL, OCC-chartered</span>
					</th>
					<td>
						<span class="sc-badge sc-badge-centralized">
							<svg width="12" height="12" viewBox="0 0 16 16" fill="none"
								><rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" stroke-width="1.4" /><path
									d="M5 7V5a3 3 0 0 1 6 0v2"
									stroke="currentColor"
									stroke-width="1.4"
								/></svg
							>
							Centralized
						</span>
						<span class="sc-structure-note">Publicly traded, national-trust-chartered</span>
					</td>
					<td>
						<div class="sc-meter" aria-label="Liquidity tier 4 of 5, major">
							<span class="sc-meter-bar filled" style="height:8px"></span>
							<span class="sc-meter-bar filled" style="height:11px"></span>
							<span class="sc-meter-bar filled" style="height:14px"></span>
							<span class="sc-meter-bar filled" style="height:17px"></span>
							<span class="sc-meter-bar" style="height:20px"></span>
						</div>
						<span class="sc-cap-figure">~$73&ndash;77B</span>
						<span class="sc-cap-label">Tier 4 &middot; Major (~24% share)</span>
					</td>
					<td>
						<span class="sc-backing-text"
							>Cash + short-dated U.S. Treasuries (Circle Reserve Fund); Deloitte-attested monthly</span
						>
					</td>
					<td>
						<div class="sc-risk-headline">
							<svg width="13" height="13" viewBox="0 0 16 16" fill="none"
								><path
									d="M8 2.2 L14.5 13.5 H1.5 Z"
									stroke="currentColor"
									stroke-width="1.3"
									stroke-linejoin="round"
								/><line x1="8" y1="6.3" x2="8" y2="9.6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" /><circle
									cx="8"
									cy="11.6"
									r="0.9"
									fill="currentColor"
								/></svg
							>
							SVB de-peg to $0.87 (Mar 2023)
						</div>
						<span class="sc-risk-detail"
							>Repegged in ~3 days once regulators guaranteed SVB depositors &mdash; banking-counterparty
							risk isn't zero</span
						>
					</td>
					<td>
						<span class="sc-reg-badge sc-reg-low">
							<svg width="12" height="12" viewBox="0 0 16 16" fill="none"
								><circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.3" /><path
									d="M5.2 8.2 L7.2 10.2 L11 5.8"
									stroke="currentColor"
									stroke-width="1.4"
									stroke-linecap="round"
									stroke-linejoin="round"
								/></svg
							>
							Low
						</span>
						<span class="sc-reg-detail">OCC-chartered national trust bank; closely pre-aligned with GENIUS Act</span>
					</td>
					<td>
						<span class="sc-bestfor-text"
							>Regulatory safety, institutional and agent-payment (x402) settlement rails</span
						>
					</td>
				</tr>

				<!-- USDS + DAI -->
				<tr>
					<th scope="row" class="sc-sticky">
						<span class="sc-ticker">USDS + DAI</span>
						<span class="sc-coin-name">Sky Protocol</span>
						<span class="sc-issuer">formerly MakerDAO &middot; two coexisting tokens</span>
					</th>
					<td>
						<span class="sc-badge sc-badge-decentralized">
							<svg width="12" height="12" viewBox="0 0 16 16" fill="none"
								><circle cx="8" cy="3.2" r="1.6" fill="currentColor" /><circle
									cx="3.2"
									cy="12.5"
									r="1.6"
									fill="currentColor"
								/><circle cx="12.8" cy="12.5" r="1.6" fill="currentColor" /><path
									d="M8 4.8L4.4 11M8 4.8l3.6 6.2M4.8 12.5h6.4"
									stroke="currentColor"
									stroke-width="1.1"
								/></svg
							>
							Decentralized
						</span>
						<span class="sc-structure-note">DAO-governed &mdash; RWA collateral adds a custodian asterisk</span>
					</td>
					<td>
						<div class="sc-meter" aria-label="Liquidity tier 3 of 5, established">
							<span class="sc-meter-bar filled" style="height:8px"></span>
							<span class="sc-meter-bar filled" style="height:11px"></span>
							<span class="sc-meter-bar filled" style="height:14px"></span>
							<span class="sc-meter-bar" style="height:17px"></span>
							<span class="sc-meter-bar" style="height:20px"></span>
						</div>
						<span class="sc-cap-figure">~$13B combined</span>
						<span class="sc-cap-label">Tier 3 &middot; Established (USDS ~$6.6&ndash;8.7B + DAI ~$4.7&ndash;4.9B)</span>
					</td>
					<td>
						<span class="sc-backing-text"
							>ETH, wBTC, tokenized RWA/Treasuries, USDC held in the Peg Stability Module</span
						>
					</td>
					<td>
						<div class="sc-risk-headline">
							<svg width="13" height="13" viewBox="0 0 16 16" fill="none"
								><path
									d="M8 2.2 L14.5 13.5 H1.5 Z"
									stroke="currentColor"
									stroke-width="1.3"
									stroke-linejoin="round"
								/><line x1="8" y1="6.3" x2="8" y2="9.6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" /><circle
									cx="8"
									cy="11.6"
									r="0.9"
									fill="currentColor"
								/></svg
							>
							RWA custodian &amp; governance risk
						</div>
						<span class="sc-risk-detail"
							>Growing share of collateral is tokenized Treasuries held by off-chain custodians;
							SKY-vote governance concentrates power</span
						>
					</td>
					<td>
						<span class="sc-reg-badge sc-reg-moderate">
							<svg width="12" height="12" viewBox="0 0 16 16" fill="none"
								><circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.3" /><line
									x1="5"
									y1="8"
									x2="11"
									y2="8"
									stroke="currentColor"
									stroke-width="1.6"
									stroke-linecap="round"
								/></svg
							>
							Moderate
						</span>
						<span class="sc-reg-detail"
							>DAO governance + RWA custodians add counterparty exposure outside pure crypto
							collateral</span
						>
					</td>
					<td>
						<span class="sc-bestfor-text"
							>DeFi holding + native yield (Sky Savings Rate), censorship-resistant balances</span
						>
					</td>
				</tr>

				<!-- GHO -->
				<tr>
					<th scope="row" class="sc-sticky">
						<span class="sc-ticker">GHO</span>
						<span class="sc-coin-name">Aave Protocol</span>
						<span class="sc-issuer">Aave DAO &middot; governance-launched Jul 2023</span>
					</th>
					<td>
						<span class="sc-badge sc-badge-decentralized">
							<svg width="12" height="12" viewBox="0 0 16 16" fill="none"
								><circle cx="8" cy="3.2" r="1.6" fill="currentColor" /><circle
									cx="3.2"
									cy="12.5"
									r="1.6"
									fill="currentColor"
								/><circle cx="12.8" cy="12.5" r="1.6" fill="currentColor" /><path
									d="M8 4.8L4.4 11M8 4.8l3.6 6.2M4.8 12.5h6.4"
									stroke="currentColor"
									stroke-width="1.1"
								/></svg
							>
							Decentralized
						</span>
					</td>
					<td>
						<div class="sc-meter" aria-label="Liquidity tier 2 of 5, niche">
							<span class="sc-meter-bar filled" style="height:8px"></span>
							<span class="sc-meter-bar filled" style="height:11px"></span>
							<span class="sc-meter-bar" style="height:14px"></span>
							<span class="sc-meter-bar" style="height:17px"></span>
							<span class="sc-meter-bar" style="height:20px"></span>
						</div>
						<span class="sc-cap-figure">~$500&ndash;600M</span>
						<span class="sc-cap-label">Tier 2 &middot; Niche</span>
					</td>
					<td>
						<span class="sc-backing-text"
							>Multi-collateral via Aave V3/V4 borrow-mint, plus the Anchor USDC swap facility</span
						>
					</td>
					<td>
						<div class="sc-risk-headline">
							<svg width="13" height="13" viewBox="0 0 16 16" fill="none"
								><path
									d="M8 2.2 L14.5 13.5 H1.5 Z"
									stroke="currentColor"
									stroke-width="1.3"
									stroke-linejoin="round"
								/><line x1="8" y1="6.3" x2="8" y2="9.6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" /><circle
									cx="8"
									cy="11.6"
									r="0.9"
									fill="currentColor"
								/></svg
							>
							Thin liquidity moves the peg
						</div>
						<span class="sc-risk-detail"
							>Smallest major stablecoin by supply; 4 facilitator modules (borrow, GSM, Anchor,
							FlashMinter) each carry their own contract risk</span
						>
					</td>
					<td>
						<span class="sc-reg-badge sc-reg-low">
							<svg width="12" height="12" viewBox="0 0 16 16" fill="none"
								><circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.3" /><path
									d="M5.2 8.2 L7.2 10.2 L11 5.8"
									stroke="currentColor"
									stroke-width="1.4"
									stroke-linecap="round"
									stroke-linejoin="round"
								/></svg
							>
							Low, direct
						</span>
						<span class="sc-reg-detail">Fully dependent on Aave protocol governance and health, not on a named regulator</span>
					</td>
					<td>
						<span class="sc-bestfor-text">Aave ecosystem borrowing at a discount (stkAAVE rate reduction)</span>
					</td>
				</tr>

				<!-- fxUSD -->
				<tr>
					<th scope="row" class="sc-sticky">
						<span class="sc-ticker">fxUSD</span>
						<span class="sc-coin-name">f(x) Protocol</span>
						<span class="sc-issuer">Ethereum-native DAO, DeFi-only</span>
					</th>
					<td>
						<span class="sc-badge sc-badge-decentralized">
							<svg width="12" height="12" viewBox="0 0 16 16" fill="none"
								><circle cx="8" cy="3.2" r="1.6" fill="currentColor" /><circle
									cx="3.2"
									cy="12.5"
									r="1.6"
									fill="currentColor"
								/><circle cx="12.8" cy="12.5" r="1.6" fill="currentColor" /><path
									d="M8 4.8L4.4 11M8 4.8l3.6 6.2M4.8 12.5h6.4"
									stroke="currentColor"
									stroke-width="1.1"
								/></svg
							>
							Decentralized
						</span>
					</td>
					<td>
						<div class="sc-meter" aria-label="Liquidity tier 1 of 5, minimal">
							<span class="sc-meter-bar filled" style="height:8px"></span>
							<span class="sc-meter-bar" style="height:11px"></span>
							<span class="sc-meter-bar" style="height:14px"></span>
							<span class="sc-meter-bar" style="height:17px"></span>
							<span class="sc-meter-bar" style="height:20px"></span>
						</div>
						<span class="sc-cap-figure">~$55M</span>
						<span class="sc-cap-label">Tier 1 &middot; Minimal &mdash; orders of magnitude below the rest</span>
					</td>
					<td>
						<span class="sc-backing-text"
							>stETH (Lido staked ETH) + wBTC only &mdash; two volatile assets, no RWA/cash</span
						>
					</td>
					<td>
						<div class="sc-risk-headline">
							<svg width="13" height="13" viewBox="0 0 16 16" fill="none"
								><path
									d="M8 2.2 L14.5 13.5 H1.5 Z"
									stroke="currentColor"
									stroke-width="1.3"
									stroke-linejoin="round"
								/><line x1="8" y1="6.3" x2="8" y2="9.6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" /><circle
									cx="8"
									cy="11.6"
									r="0.9"
									fill="currentColor"
								/></svg
							>
							Tiny liquidity, real exit risk
						</div>
						<span class="sc-risk-detail"
							>Smallest of the five by a wide margin; slippage risk on exit; Ethereum-only, most
							complex mechanism of the group</span
						>
					</td>
					<td>
						<span class="sc-reg-badge sc-reg-low">
							<svg width="12" height="12" viewBox="0 0 16 16" fill="none"
								><circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.3" /><path
									d="M5.2 8.2 L7.2 10.2 L11 5.8"
									stroke="currentColor"
									stroke-width="1.4"
									stroke-linecap="round"
									stroke-linejoin="round"
								/></svg
							>
							Low, direct
						</span>
						<span class="sc-reg-detail">Fully dependent on f(x) Protocol and Ethereum, not on a named regulator</span>
					</td>
					<td>
						<span class="sc-bestfor-text"
							>Advanced DeFi users wanting leverage-linked efficiency + built-in de-peg circuit
							breaker</span
						>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<p class="sc-scroll-hint">swipe to see more &rarr;</p>

	<div class="sc-footer">
		<strong>Figures verified as of mid-2026 &middot; point-in-time snapshot, not real-time.</strong>
		Stablecoin market caps, yields, and regulatory status change rapidly &mdash; verify current
		figures before acting. Educational content only, not financial, investment, or tax advice.
	</div>
</div>

<style>
	/* ============================================================
	   THEME TOKENS
	   Default = light. Switches to dark automatically via
	   prefers-color-scheme, or force with data-theme="dark" /
	   data-theme="light" (controlled by the toggle button above).
	============================================================ */
	.sc-chart {
		--bg: #fafaf7;
		--surface: #ffffff;
		--surface-alt: #f3f1ea;
		--border: #e3dfd3;
		--text: #14171c;
		--text-muted: #5b6472;
		--text-faint: #8a8f99;
		--accent-gold: #96690e;
		--accent-blue: #2f5fa8;
		--accent-teal: #1c7c74;
		--accent-green: #157a4e;
		--accent-green-bg: #e8f5ee;
		--accent-amber: #9a6200;
		--accent-amber-bg: #fbf0da;
		--accent-red: #b0392e;
		--accent-red-bg: #fbeae7;
		--meter-fill: #96690e;
		--meter-track: #e3dfd3;
		--shadow-edge: rgba(20, 23, 28, 0.08);
		color-scheme: light;
	}
	@media (prefers-color-scheme: dark) {
		.sc-chart:not([data-theme='light']) {
			--bg: #0c1f3d;
			--surface: #10294d;
			--surface-alt: #0d2040;
			--border: rgba(249, 246, 239, 0.12);
			--text: #f9f6ef;
			--text-muted: rgba(249, 246, 239, 0.68);
			--text-faint: rgba(249, 246, 239, 0.4);
			--accent-gold: #c8973a;
			--accent-blue: #5a8fc4;
			--accent-teal: #4fc3b8;
			--accent-green: #10b981;
			--accent-green-bg: rgba(16, 185, 129, 0.14);
			--accent-amber: #c8973a;
			--accent-amber-bg: rgba(200, 151, 58, 0.14);
			--accent-red: #e05555;
			--accent-red-bg: rgba(224, 85, 85, 0.14);
			--meter-fill: #c8973a;
			--meter-track: rgba(249, 246, 239, 0.14);
			--shadow-edge: rgba(0, 0, 0, 0.35);
			color-scheme: dark;
		}
	}
	.sc-chart[data-theme='dark'] {
		--bg: #0c1f3d;
		--surface: #10294d;
		--surface-alt: #0d2040;
		--border: rgba(249, 246, 239, 0.12);
		--text: #f9f6ef;
		--text-muted: rgba(249, 246, 239, 0.68);
		--text-faint: rgba(249, 246, 239, 0.4);
		--accent-gold: #c8973a;
		--accent-blue: #5a8fc4;
		--accent-teal: #4fc3b8;
		--accent-green: #10b981;
		--accent-green-bg: rgba(16, 185, 129, 0.14);
		--accent-amber: #c8973a;
		--accent-amber-bg: rgba(200, 151, 58, 0.14);
		--accent-red: #e05555;
		--accent-red-bg: rgba(224, 85, 85, 0.14);
		--meter-fill: #c8973a;
		--meter-track: rgba(249, 246, 239, 0.14);
		--shadow-edge: rgba(0, 0, 0, 0.35);
		color-scheme: dark;
	}

	.sc-chart {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
		background: var(--bg);
		color: var(--text);
		max-width: 1180px;
		margin: 0 auto;
		padding: 28px 20px 24px;
		border-radius: 14px;
		box-sizing: border-box;
	}
	.sc-chart :global(*) {
		box-sizing: border-box;
	}
	.sc-head {
		padding: 0 4px 18px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: 16px;
		flex-wrap: wrap;
	}
	.sc-eyebrow {
		font-size: 11.5px;
		font-weight: 700;
		letter-spacing: 0.11em;
		color: var(--accent-gold);
		text-transform: uppercase;
		margin: 0 0 8px;
	}
	.sc-title {
		font-size: 26px;
		font-weight: 800;
		margin: 0 0 6px;
		letter-spacing: -0.01em;
	}
	.sc-subtitle {
		font-size: 14.5px;
		color: var(--text-muted);
		margin: 0;
		max-width: 640px;
		line-height: 1.45;
	}
	.sc-theme-btn {
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		background: var(--surface);
		color: var(--text-muted);
		border: 1px solid var(--border);
		border-radius: 999px;
		padding: 7px 14px;
		cursor: pointer;
		white-space: nowrap;
	}
	.sc-theme-btn:hover {
		color: var(--text);
		border-color: var(--accent-gold);
	}

	/* Legend */
	.sc-legend {
		display: flex;
		flex-wrap: wrap;
		gap: 18px;
		font-size: 12px;
		color: var(--text-muted);
		padding: 12px 14px;
		margin: 0 4px 16px;
		background: var(--surface-alt);
		border: 1px solid var(--border);
		border-radius: 10px;
	}
	.sc-legend-item {
		display: flex;
		align-items: center;
		gap: 6px;
	}
	.sc-legend-swatch {
		width: 11px;
		height: 11px;
		border-radius: 3px;
		flex: none;
	}

	/* Scroll container */
	.sc-scroll {
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
		border: 1px solid var(--border);
		border-radius: 12px;
		background: var(--surface);
		position: relative;
	}
	table.sc-table {
		border-collapse: separate;
		border-spacing: 0;
		width: 100%;
		min-width: 1360px;
		table-layout: fixed;
	}
	.sc-table th,
	.sc-table td {
		text-align: left;
		vertical-align: top;
		padding: 16px 18px;
		border-bottom: 1px solid var(--border);
	}
	.sc-table thead th {
		font-size: 10.5px;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-faint);
		background: var(--surface-alt);
		padding-top: 14px;
		padding-bottom: 14px;
		border-bottom: 1px solid var(--border);
	}
	.sc-table tbody tr:last-child td,
	.sc-table tbody tr:last-child th {
		border-bottom: none;
	}

	/* Sticky first column */
	.sc-table .sc-sticky {
		position: sticky;
		left: 0;
		z-index: 2;
		background: var(--surface);
		box-shadow: 3px 0 6px -2px var(--shadow-edge);
	}
	thead .sc-sticky {
		background: var(--surface-alt);
		z-index: 3;
	}

	.sc-w-coin {
		width: 200px;
	}
	.sc-w-structure {
		width: 150px;
	}
	.sc-w-liquidity {
		width: 190px;
	}
	.sc-w-backing {
		width: 230px;
	}
	.sc-w-risk {
		width: 260px;
	}
	.sc-w-reg {
		width: 210px;
	}
	.sc-w-bestfor {
		width: 220px;
	}

	.sc-ticker {
		font-size: 16px;
		font-weight: 800;
		letter-spacing: -0.01em;
	}
	.sc-coin-name {
		display: block;
		font-size: 12px;
		font-weight: 600;
		color: var(--text-muted);
		margin-top: 2px;
	}
	.sc-issuer {
		display: block;
		font-size: 11px;
		color: var(--text-faint);
		margin-top: 3px;
		line-height: 1.35;
	}

	.sc-badge {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		font-size: 11.5px;
		font-weight: 700;
		letter-spacing: 0.01em;
		padding: 5px 10px 5px 8px;
		border-radius: 999px;
		white-space: nowrap;
	}
	.sc-badge :global(svg) {
		flex: none;
	}
	.sc-badge-centralized {
		background: rgba(47, 95, 168, 0.1);
		color: var(--accent-blue);
		border: 1px solid rgba(47, 95, 168, 0.35);
	}
	.sc-badge-decentralized {
		background: rgba(28, 124, 116, 0.1);
		color: var(--accent-teal);
		border: 1px solid rgba(28, 124, 116, 0.35);
	}
	.sc-structure-note {
		display: block;
		font-size: 11px;
		color: var(--text-faint);
		margin-top: 7px;
		line-height: 1.4;
	}

	.sc-meter {
		display: flex;
		align-items: flex-end;
		gap: 3px;
		height: 20px;
		margin-bottom: 8px;
	}
	.sc-meter-bar {
		width: 8px;
		border-radius: 2px;
		background: var(--meter-track);
	}
	.sc-meter-bar.filled {
		background: var(--meter-fill);
	}
	.sc-cap-figure {
		display: block;
		font-size: 14px;
		font-weight: 700;
	}
	.sc-cap-label {
		display: block;
		font-size: 11px;
		color: var(--text-muted);
		margin-top: 2px;
	}

	.sc-backing-text,
	.sc-bestfor-text {
		font-size: 12.5px;
		line-height: 1.5;
		color: var(--text);
	}

	.sc-risk-headline {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 12.5px;
		font-weight: 700;
		color: var(--text);
		margin-bottom: 5px;
	}
	.sc-risk-headline :global(svg) {
		color: var(--accent-amber);
		flex: none;
	}
	.sc-risk-detail {
		font-size: 11.5px;
		color: var(--text-muted);
		line-height: 1.45;
	}

	.sc-reg-badge {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		font-size: 11.5px;
		font-weight: 700;
		padding: 4px 10px;
		border-radius: 999px;
		margin-bottom: 7px;
	}
	.sc-reg-badge :global(svg) {
		flex: none;
	}
	.sc-reg-low {
		background: var(--accent-green-bg);
		color: var(--accent-green);
	}
	.sc-reg-moderate {
		background: var(--accent-amber-bg);
		color: var(--accent-amber);
	}
	.sc-reg-high {
		background: var(--accent-red-bg);
		color: var(--accent-red);
	}
	.sc-reg-detail {
		display: block;
		font-size: 11.5px;
		color: var(--text-muted);
		line-height: 1.45;
	}

	.sc-scroll-hint {
		display: none;
		font-size: 11px;
		color: var(--text-faint);
		text-align: right;
		padding: 8px 6px 0;
	}

	.sc-footer {
		padding: 16px 6px 2px;
		font-size: 11px;
		color: var(--text-faint);
		line-height: 1.6;
		border-top: 1px solid var(--border);
		margin-top: 18px;
	}
	.sc-footer :global(strong) {
		color: var(--text-muted);
	}

	@media (max-width: 640px) {
		.sc-chart {
			padding: 20px 12px 18px;
		}
		.sc-title {
			font-size: 21px;
		}
		.sc-legend {
			font-size: 11px;
			gap: 12px;
		}
		.sc-scroll-hint {
			display: block;
		}
		table.sc-table {
			min-width: 1180px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.sc-chart * {
			transition: none !important;
		}
	}
</style>
