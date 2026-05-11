#!/bin/bash
# One-shot screenshot helper. Not intended to be committed.
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUTDIR="/Users/jjb_imac/aiprojects/yodacom-site/screenshots"
BASE="http://localhost:5181"

"$CHROME" --headless --disable-gpu --hide-scrollbars --window-size=1440,3600 --screenshot="$OUTDIR/about-desktop.png" --virtual-time-budget=4000 "$BASE/about"
"$CHROME" --headless --disable-gpu --hide-scrollbars --window-size=390,900 --screenshot="$OUTDIR/about-mobile-hero.png" --virtual-time-budget=4000 "$BASE/about"
"$CHROME" --headless --disable-gpu --hide-scrollbars --window-size=1440,1200 --screenshot="$OUTDIR/home-desktop.png" --virtual-time-budget=4000 "$BASE/"
ls -la "$OUTDIR"
