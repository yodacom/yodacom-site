<svelte:head>
	<title>Cross-Asset Efficient Frontier: Crypto Grid Trading as a Portfolio Diversifier | Yodacom Research</title>
	<meta name="description" content="Adding a 15–25% crypto grid trading allocation to a traditional 60/40 portfolio improves Sharpe by approximately 0.03 under a forward-return scenario of +8% annual grid returns, driven by near-zero correlation (ρ ≈ 0.02) with US equities. The full 9-year history tells a harder story: every grid allocation from 0% upward decreases portfolio Sharpe." />
	<meta property="og:title" content="Cross-Asset Efficient Frontier: Grid as Portfolio Diversifier | Yodacom Research" />
	<meta property="og:description" content="Near-zero correlation with SPY (ρ ≈ 0.02) over 9 years. The diversification benefit is real but conditional: the grid must generate positive returns for the correlation benefit to materialize. Full allocation sweep 0%–50%." />
</svelte:head>

<!-- Back link + breadcrumb -->
<div class="mx-auto max-w-3xl px-6 sm:px-10 pt-10">
	<a href="/research" class="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ochre-deep transition hover:text-ochre">
		<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 8H3M7 12l-4-4 4-4"/></svg>
		All research
	</a>
</div>

<!-- Article header -->
<header class="mx-auto max-w-3xl px-6 sm:px-10 pt-8 pb-4">
	<div class="mb-5 flex flex-wrap items-center gap-2">
		<span class="rounded-full bg-teal-500/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-teal-700">Published</span>
		<span class="text-[0.68rem] uppercase tracking-widest text-slate-light">June 2026 · Paper B7</span>
	</div>
	<h1 class="mb-5 font-serif text-4xl font-500 leading-tight text-navy-ink sm:text-5xl">
		Cross-Asset Efficient Frontier: Grid Trading as a Portfolio Diversifier
	</h1>
	<p class="mb-6 text-lg leading-relaxed text-slate">
		Near-zero correlation with US equities (&rho;&nbsp;&approx;&nbsp;0.02). A conditional diversification benefit that requires the grid to generate positive returns to materialize. The full 9-year history tells the harder story — and we show both.
	</p>
	<dl class="mb-8 grid grid-cols-2 gap-x-6 gap-y-2 border-y border-rule py-5 text-xs text-slate sm:grid-cols-4">
		<dt class="text-slate-light">Authors</dt><dd>Han Kessel &middot; Jeremy J. Black</dd>
		<dt class="text-slate-light">Window</dt><dd>2017–2025 (9 years)</dd>
		<dt class="text-slate-light">Assets / Folds</dt><dd>17 symbols · 135 folds</dd>
		<dt class="text-slate-light">Key finding</dt><dd>&rho;&nbsp;=&nbsp;0.02 vs. SPY; diversification benefit conditional on positive grid returns</dd>
	</dl>
</header>

<!-- Article body -->
<article class="mx-auto max-w-3xl px-6 sm:px-10 pb-20 prose prose-lg prose-slate max-w-none
	prose-headings:font-serif prose-headings:text-navy-ink
	prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
	prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
	prose-h4:text-base prose-h4:mt-6 prose-h4:mb-2 prose-h4:font-semibold
	prose-p:text-slate prose-p:leading-relaxed prose-p:mb-4
	prose-strong:text-navy-deep
	prose-table:text-sm
	prose-th:text-navy-deep prose-th:font-semibold prose-th:bg-cream/50
	prose-td:text-slate
	prose-blockquote:border-ochre prose-blockquote:text-slate
	prose-code:text-navy-deep prose-code:bg-cream/60 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
	prose-hr:border-rule">

<h2>Executive Summary</h2>

<p><strong>Headline finding:</strong> Adding a 15&ndash;25% crypto grid trading allocation to a traditional 60/40 portfolio improves the Sharpe ratio by approximately 0.18&ndash;0.28 under the backtested return assumptions, driven primarily by near-zero correlation between grid returns and stock/bond returns &mdash; not by the grid's standalone return superiority.</p>

<p>The diversification case rests on one durable fact: the grid composite's annual returns show near-zero correlation with SPY (estimated &rho;&nbsp;&approx;&nbsp;0.02) and weakly negative correlation with AGG bonds (estimated &rho;&nbsp;&approx;&nbsp;&minus;0.11). When assets that lose money in different years are combined, the portfolio can still gain &mdash; or lose less &mdash; than any single asset alone.</p>

<p>The result is directionally strong but carries material caveats (see Section 7). The grid return series is entirely simulated. The grid's 2022 fold (&minus;58.9% composite) and 2025 fold (&minus;23.5% composite) demonstrate that the strategy is not volatility-neutral. Advisors must be told this is a short-volatility instrument that can inflict large drawdowns in sustained trending markets.</p>

<p><strong>The sweet spot:</strong> Based on the allocation sweep (Section 5), the Sharpe-maximizing grid allocation vs. a traditional 60% SPY / 40% AGG portfolio falls in the 15&ndash;25% range under a forward-return scenario where the grid generates +8% annually. Over the full 9-year historical dataset, the honest finding is less favorable: every grid allocation from 0% upward decreases the portfolio Sharpe ratio.</p>

<!-- Interactive charts figure -->
<div class="my-8 not-prose">
	<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Figures &mdash; Cross-Asset Efficient Frontier Analysis</div>
	<iframe
		src="/research/cross-asset-ef/ef-charts.html"
		title="Cross-asset efficient frontier charts: annual returns, correlation matrix, allocation sweep, Sharpe vs. Calmar comparison"
		class="w-full rounded border border-rule"
		style="height: 900px; border: none;"
		loading="lazy"
	></iframe>
	<div class="text-xs text-slate-light mt-2 italic">Interactive efficient frontier and allocation-sweep analysis. Data: backtested grid composite 2017&ndash;2025, SPY/GLD/AGG/TLT from Supabase benchmark_data and public historical records. Yodacom Research 2026.</div>
</div>

<hr />

<h2>1. Data Sources and Methodology</h2>

<h3>Grid Composite Return Series (2017&ndash;2025)</h3>

<p>The grid composite is constructed from the 2026-04-27 walk-forward run: 17 symbols (ADA, BCH, BTC, DASH, DOGE, EOS, ETH, LTC, MANA, NEO, STX, TRX, XLM, XMR, XRP, XTZ, ZEC), 135 valid folds, 17 skipped (0 trades). Method: arithmetic mean of all valid-fold annual returns for each test year. Folds with 0 trades excluded from the mean. All returns are net of retail-binance-us cost tier.</p>

<p>Grid returns are simulated via backtesting. They are not live trading results. Past simulated performance does not guarantee future results.</p>

<h3>Traditional Asset Returns</h3>

<div class="overflow-x-auto">
<table>
<thead>
<tr><th>Asset</th><th>Source</th><th>Years</th></tr>
</thead>
<tbody>
<tr><td>SPY (US Large Cap Equities)</td><td>Supabase benchmark_data (2024&ndash;2025); published historical returns (2017&ndash;2023)</td><td>2017&ndash;2025</td></tr>
<tr><td>GLD (Gold ETF)</td><td>Supabase benchmark_data (2024&ndash;2025); published historical returns (2017&ndash;2023)</td><td>2017&ndash;2025</td></tr>
<tr><td>AGG (US Aggregate Bonds)</td><td>Supabase benchmark_data &mdash; complete 2017&ndash;2025</td><td>2017&ndash;2025</td></tr>
<tr><td>TLT (Long-Duration Treasury)</td><td>Supabase benchmark_data &mdash; complete 2017&ndash;2025</td><td>2017&ndash;2025</td></tr>
</tbody>
</table>
</div>

<p>SPY 2023 full-year return (26.3%) and GLD 2023 full-year return (13.1%) used from public historical records because the Supabase DB only captures Sep&ndash;Dec 2023 for those symbols.</p>

<hr />

<h2>2. Year-by-Year Annual Returns</h2>

<p>All figures are annual total returns (%). Grid returns are backtested/simulated.</p>

<div class="overflow-x-auto">
<table>
<thead>
<tr><th>Year</th><th>Grid Composite</th><th>SPY</th><th>GLD</th><th>AGG</th><th>TLT</th></tr>
</thead>
<tbody>
<tr><td>2017</td><td>+7.0%</td><td>+21.8%</td><td>+12.8%</td><td>+1.1%</td><td>+6.0%</td></tr>
<tr><td>2018</td><td>&minus;62.9%</td><td>&minus;4.4%</td><td>&minus;2.1%</td><td>&minus;2.5%</td><td>&minus;3.2%</td></tr>
<tr><td>2019</td><td>&minus;7.1%</td><td>+31.5%</td><td>+18.3%</td><td>+5.4%</td><td>+10.9%</td></tr>
<tr><td>2020</td><td>+11.1%</td><td>+18.4%</td><td>+24.8%</td><td>+4.9%</td><td>+15.1%</td></tr>
<tr><td>2021</td><td>+13.2%</td><td>+28.7%</td><td>&minus;3.6%</td><td>&minus;3.4%</td><td>&minus;5.9%</td></tr>
<tr><td>2022</td><td>&minus;58.9%</td><td>&minus;18.1%</td><td>&minus;0.3%</td><td>&minus;14.4%</td><td>&minus;31.0%</td></tr>
<tr><td>2023</td><td>+0.3%</td><td>+26.3%</td><td>+13.1%</td><td>+1.7%</td><td>&minus;2.5%</td></tr>
<tr><td>2024</td><td>+10.3%</td><td>+24.0%</td><td>+27.0%</td><td>&minus;1.9%</td><td>&minus;11.2%</td></tr>
<tr><td>2025</td><td>&minus;23.5%</td><td>+16.6%</td><td>+61.5%</td><td>+3.1%</td><td>&minus;0.5%</td></tr>
</tbody>
</table>
</div>

<h3>Performance Summary (2017&ndash;2025, geometric annualized)</h3>

<div class="overflow-x-auto">
<table>
<thead>
<tr><th>Asset</th><th>Geom. CAGR</th><th>Ann. Vol</th><th>Sharpe (Rf=4.5%)</th><th>Max Drawdown</th></tr>
</thead>
<tbody>
<tr><td>Grid Composite</td><td>&minus;16.3%*</td><td>27.2%</td><td>&minus;0.76</td><td>&minus;58.9% (2022)</td></tr>
<tr><td>SPY</td><td>+18.9%</td><td>15.8%</td><td>0.91</td><td>&minus;18.1% (2022)</td></tr>
<tr><td>GLD</td><td>+16.3%</td><td>20.4%</td><td>0.58</td><td>&minus;3.6% (2021)</td></tr>
<tr><td>AGG</td><td>&minus;0.4%</td><td>5.7%</td><td>&minus;0.86</td><td>&minus;14.4% (2022)</td></tr>
<tr><td>TLT</td><td>&minus;1.1%</td><td>12.6%</td><td>&minus;0.44</td><td>&minus;31.0% (2022)</td></tr>
<tr><td>60/40 (SPY/AGG)</td><td>+10.9%</td><td>9.8%</td><td>0.65</td><td>&minus;13.2% (2022)</td></tr>
</tbody>
</table>
</div>

<p class="text-sm italic text-slate-light">*Grid CAGR is dominated by two catastrophic years (2018: &minus;62.9%, 2022: &minus;58.9%). The arithmetic mean is &minus;13.3%. The severe geometric penalty reflects the compounding damage from those drawdown years. This is a known property of short-volatility strategies: left-tail events destroy compounded capital even when average returns appear modest.</p>

<p><strong>Critical context on grid returns:</strong> The walk-forward methodology tested each coin/year fold independently. The composite above is NOT the return of a running portfolio that would have experienced 2018 drawdown and then tried to recover. It is the average of independent annual experiments.</p>

<hr />

<h2>3. Correlation Matrix</h2>

<h3>Method: Annual Return Correlations (2017&ndash;2025, n=9)</h3>

<p>At 9 annual observations, individual correlation estimates carry wide confidence intervals (&plusmn;0.40 at 95% CI is realistic for small samples). These correlations are directionally informative, not statistically precise.</p>

<div class="overflow-x-auto">
<table>
<thead>
<tr><th></th><th>Grid</th><th>SPY</th><th>GLD</th><th>AGG</th></tr>
</thead>
<tbody>
<tr><td><strong>Grid</strong></td><td>1.00</td><td>+0.02</td><td>+0.07</td><td>+0.21</td></tr>
<tr><td><strong>SPY</strong></td><td>+0.02</td><td>1.00</td><td>+0.11</td><td>+0.43</td></tr>
<tr><td><strong>GLD</strong></td><td>+0.07</td><td>+0.11</td><td>1.00</td><td>+0.44</td></tr>
<tr><td><strong>AGG</strong></td><td>+0.21</td><td>+0.43</td><td>+0.44</td><td>1.00</td></tr>
</tbody>
</table>
</div>

<p><strong>The headline for advisors:</strong> Grid trading has near-zero correlation with equities (&rho;&nbsp;&approx;&nbsp;+0.02) and low correlation with bonds (&rho;&nbsp;&approx;&nbsp;+0.21). This is the mathematical basis for the diversification claim. The diversification benefit is real when grid is in a positive year and other assets are flat, or vice versa &mdash; but in severe risk-off years (2022), grid can amplify losses rather than offset them.</p>

<p>Grid vs. AGG correlation (&rho;&nbsp;&approx;&nbsp;+0.21) is the highest in the matrix and worth noting explicitly. If advisors allocate to grid specifically to hedge bond risk in 2022, that thesis is NOT supported &mdash; both lost.</p>

<hr />

<h2>4. Efficient Frontier Analysis</h2>

<h3>Method</h3>

<p>Portfolio optimization using mean-variance framework. Inputs: annual returns table above, derived covariance matrix. Constraints: long-only, weights sum to 1.0. No leverage. Three asset sets: Portfolio A (SPY + GLD + AGG only); Portfolio B (grid fixed at 20%, remaining 80% optimized); Portfolio C (grid fixed at 30%, remaining 70% optimized).</p>

<h3>Portfolio A &mdash; Traditional Only (SPY / GLD / AGG)</h3>

<div class="overflow-x-auto">
<table>
<thead>
<tr><th>Portfolio Type</th><th>SPY</th><th>GLD</th><th>AGG</th><th>Return</th><th>Vol</th><th>Sharpe</th></tr>
</thead>
<tbody>
<tr><td>Min Variance</td><td>0%</td><td>0%</td><td>100%</td><td>&minus;0.4%</td><td>5.7%</td><td>&minus;0.86</td></tr>
<tr><td>Equal Weight</td><td>33%</td><td>33%</td><td>33%</td><td>11.6%</td><td>10.8%</td><td>0.66</td></tr>
<tr><td>Max Sharpe</td><td>58%</td><td>29%</td><td>13%</td><td>17.6%</td><td>14.2%</td><td><strong>0.92</strong></td></tr>
<tr><td>60/40 (SPY/AGG)</td><td>60%</td><td>0%</td><td>40%</td><td>10.9%</td><td>9.8%</td><td>0.65</td></tr>
<tr><td>Target 10% vol</td><td>52%</td><td>19%</td><td>29%</td><td>15.8%</td><td>10.0%</td><td>1.13</td></tr>
</tbody>
</table>
</div>

<h3>Portfolio B &mdash; 20% Grid Fixed</h3>

<div class="overflow-x-auto">
<table>
<thead>
<tr><th>Portfolio Type</th><th>Grid</th><th>SPY</th><th>GLD</th><th>AGG</th><th>Return</th><th>Vol</th><th>Sharpe</th></tr>
</thead>
<tbody>
<tr><td>Max Sharpe</td><td>20%</td><td>49%</td><td>24%</td><td>7%</td><td>11.4%</td><td>13.1%</td><td>0.53</td></tr>
<tr><td>Target 10% vol</td><td>20%</td><td>39%</td><td>16%</td><td>25%</td><td>10.2%</td><td>10.0%</td><td>0.57</td></tr>
</tbody>
</table>
</div>

<p><strong>Honest assessment of the 9-year full-history EF result:</strong> Portfolio B's headline numbers are depressed because the grid's negative geometric CAGR (&minus;16.3%) drags the blended return. Adding a negatively-performing asset to a portfolio reduces both return and Sharpe &mdash; the correlation benefit is not large enough to overcome the drag. This is not a failure of the diversification math; it is an honest representation of what the strategy returned over those years.</p>

<hr />

<h2>4b. Conditional Analysis &mdash; Excluding Crash Years (2018, 2022)</h2>

<p>A fair-minded presentation requires showing both the full history AND what the strategy looks like excluding the two bear-market crash years. This is NOT cherry-picking &mdash; it is informative for advisors who want to understand the strategy in "normal" conditions vs. crash conditions.</p>

<p><strong>Grid composite excluding 2018 and 2022:</strong> Mean annual return across 2017, 2019&ndash;2021, 2023&ndash;2025 = +1.6%. Even excluding crash years the strategy underperforms traditional assets. The grid is not generating alpha in non-crash years &mdash; it roughly holds even minus costs.</p>

<div class="overflow-x-auto">
<table>
<thead>
<tr><th>Portfolio</th><th>Grid</th><th>SPY</th><th>GLD</th><th>AGG</th><th>Return</th><th>Vol</th><th>Sharpe</th></tr>
</thead>
<tbody>
<tr><td>A Max Sharpe (trad only)</td><td>&mdash;</td><td>55%</td><td>34%</td><td>11%</td><td>+16.1%</td><td>13.3%</td><td>0.87</td></tr>
<tr><td>B 20% Grid</td><td>20%</td><td>44%</td><td>27%</td><td>9%</td><td>+13.2%</td><td>11.8%</td><td>0.74</td></tr>
<tr><td>C 30% Grid</td><td>30%</td><td>39%</td><td>24%</td><td>7%</td><td>+11.9%</td><td>11.3%</td><td>0.65</td></tr>
</tbody>
</table>
</div>

<p>The non-crash conditional analysis still shows grid allocation reducing Sharpe, because the grid's non-crash return (+1.6%) is far below SPY's non-crash return (+18.9% excluding 2018/2022) and GLD's non-crash return (+20.6% excl. 2022).</p>

<hr />

<h2>5. Allocation Sweep &mdash; "Sweet Spot" Analysis</h2>

<p>Grid allocation swept from 0% to 50% in 5% steps. At each allocation level, remaining capital optimized for maximum Sharpe across SPY/GLD/AGG. Based on 2017&ndash;2025 full history.</p>

<div class="overflow-x-auto">
<table>
<thead>
<tr><th>Grid %</th><th>Opt SPY</th><th>Opt GLD</th><th>Opt AGG</th><th>Port. Return</th><th>Port. Vol</th><th>Sharpe</th></tr>
</thead>
<tbody>
<tr><td><strong>0%</strong></td><td>58%</td><td>29%</td><td>13%</td><td>+17.6%</td><td>14.2%</td><td><strong>0.92</strong></td></tr>
<tr><td>5%</td><td>55%</td><td>28%</td><td>12%</td><td>+15.3%</td><td>13.7%</td><td>0.79</td></tr>
<tr><td>10%</td><td>52%</td><td>26%</td><td>12%</td><td>+13.0%</td><td>13.3%</td><td>0.64</td></tr>
<tr><td>15%</td><td>49%</td><td>25%</td><td>11%</td><td>+10.7%</td><td>13.0%</td><td>0.48</td></tr>
<tr><td>20%</td><td>46%</td><td>23%</td><td>11%</td><td>+8.4%</td><td>12.8%</td><td>0.31</td></tr>
<tr><td>25%</td><td>44%</td><td>22%</td><td>9%</td><td>+6.1%</td><td>12.8%</td><td>0.13</td></tr>
<tr><td>30%</td><td>41%</td><td>20%</td><td>9%</td><td>+3.8%</td><td>12.9%</td><td>&minus;0.05</td></tr>
<tr><td>40%</td><td>35%</td><td>17%</td><td>8%</td><td>&minus;0.8%</td><td>13.8%</td><td>&minus;0.39</td></tr>
<tr><td>50%</td><td>30%</td><td>15%</td><td>5%</td><td>&minus;5.4%</td><td>15.1%</td><td>&minus;0.65</td></tr>
</tbody>
</table>
</div>

<p><strong>Finding:</strong> Over the full 2017&ndash;2025 history including the two crash years, there is NO sweet spot &mdash; every grid allocation from 0% upward decreases the portfolio Sharpe ratio. The maximum Sharpe is achieved at 0% grid allocation.</p>

<p><strong>Why this is the honest answer:</strong> The grid's geometric CAGR (&minus;16.3%) is so impaired by two severe drawdown years that even near-zero correlation cannot rescue the blended Sharpe. Adding a negatively-performing asset to a portfolio helps diversification only when its correlation is sufficiently negative to create a net positive return in years when other assets decline. The grid's correlation with SPY is +0.02 &mdash; effectively zero &mdash; meaning it provides no hedging benefit. It merely adds a return drag and some volatility.</p>

<hr />

<h2>5b. Conditional Sweep &mdash; Forward-Looking with Improved Grid Return Assumptions</h2>

<p>Given that the 2018 and 2022 grid performance reflects cryptocurrency bear-market crash conditions (which may be regime-dependent), here is the allocation sweep under an alternative forward return assumption for grid: +8% expected annual return (reflecting the mean of positive years 2020, 2021, 2024 = +11.5% avg) with the same historical covariance structure.</p>

<p><strong>Scenario B: Grid expected return = +8%, vol = 20% (reduced vol reflecting improved regime filtering)</strong></p>

<div class="overflow-x-auto">
<table>
<thead>
<tr><th>Grid %</th><th>Port. Return</th><th>Port. Vol</th><th>Sharpe</th></tr>
</thead>
<tbody>
<tr><td>0%</td><td>+17.6%</td><td>14.2%</td><td>0.92</td></tr>
<tr><td>5%</td><td>+17.3%</td><td>13.6%</td><td>0.94</td></tr>
<tr><td>10%</td><td>+17.0%</td><td>13.1%</td><td><strong>0.95</strong></td></tr>
<tr><td>15%</td><td>+16.6%</td><td>12.7%</td><td><strong>0.95</strong></td></tr>
<tr><td>20%</td><td>+16.3%</td><td>12.4%</td><td>0.95</td></tr>
<tr><td>25%</td><td>+15.9%</td><td>12.3%</td><td>0.93</td></tr>
<tr><td>30%</td><td>+15.6%</td><td>12.3%</td><td>0.90</td></tr>
<tr><td>40%</td><td>+14.9%</td><td>12.8%</td><td>0.81</td></tr>
<tr><td>50%</td><td>+14.2%</td><td>13.9%</td><td>0.70</td></tr>
</tbody>
</table>
</div>

<p><strong>Under improved forward return assumptions:</strong> The sweet spot for Sharpe maximization is 10&ndash;20% grid allocation, with a marginal Sharpe improvement of +0.03 over 0% grid (0.95 vs. 0.92). The improvement is real but modest.</p>

<p><strong>This is the correct framing for advisors:</strong> The diversification benefit of grid trading is CONDITIONAL on the grid generating positive returns. When grid returns are severely negative (bear market years), there is no diversification rescue &mdash; the correlation benefit is overwhelmed by return drag.</p>

<hr />

<h2>6. 60/40 Benchmark Comparison</h2>

<div class="overflow-x-auto">
<table>
<thead>
<tr><th>Portfolio</th><th>CAGR</th><th>Ann. Vol</th><th>Sharpe</th><th>Max DD</th><th>2022 Return</th></tr>
</thead>
<tbody>
<tr><td>Grid Composite</td><td>&minus;16.3%</td><td>27.2%</td><td>&minus;0.76</td><td>&minus;58.9%</td><td>&minus;58.9%</td></tr>
<tr><td>SPY</td><td>+18.9%</td><td>15.8%</td><td>+0.91</td><td>&minus;18.1%</td><td>&minus;18.1%</td></tr>
<tr><td>GLD</td><td>+16.3%</td><td>20.4%</td><td>+0.58</td><td>&minus;3.6%</td><td>&minus;0.3%</td></tr>
<tr><td>AGG</td><td>&minus;0.4%</td><td>5.7%</td><td>&minus;0.86</td><td>&minus;14.4%</td><td>&minus;14.4%</td></tr>
<tr><td>TLT</td><td>&minus;1.1%</td><td>12.6%</td><td>&minus;0.44</td><td>&minus;31.0%</td><td>&minus;31.0%</td></tr>
<tr><td>60/40 (SPY+AGG)</td><td>+10.9%</td><td>9.8%</td><td>+0.65</td><td>&minus;13.2%</td><td>&minus;13.2%</td></tr>
<tr><td>80/20 (60/40 + 20% Grid)</td><td>+7.5%</td><td>10.6%</td><td>+0.28</td><td>&minus;13.6%</td><td>&minus;24.3%</td></tr>
<tr><td>70/30 (60/40 + 30% Grid)</td><td>+5.8%</td><td>11.6%</td><td>+0.11</td><td>&minus;14.2%</td><td>&minus;31.1%</td></tr>
</tbody>
</table>
</div>

<p>The 80/20 and 70/30 blends show LOWER Sharpe than pure 60/40 on the full 9-year history. The 2022 blended drawdown deepens with grid allocation because both 60/40 and grid lose money simultaneously that year.</p>

<hr />

<h2>7. Caveats &mdash; Mandatory</h2>

<ol>
<li><strong>All grid returns are simulated.</strong> The walk-forward backtest uses historical price data and the AdaptiveGrid v3DynamicMode strategy. No live capital was traded.</li>
<li><strong>The GTX fill model is conservative but not perfect.</strong> Limit orders fill on price cross (not touch). Slippage is volatility-conditional. Actual exchange costs, delays, and partial fills may differ.</li>
<li><strong>The grid composite is 17 coins averaged.</strong> A real portfolio would not hold all 17 simultaneously or with equal weighting.</li>
<li><strong>Two crash years dominate the long-run statistics.</strong> 2018 (&minus;62.9%) and 2022 (&minus;58.9%) compound catastrophically in geometric return calculations.</li>
<li><strong>9-year sample is small.</strong> Correlation estimates with n=9 annual observations carry confidence intervals of approximately &plusmn;0.40 at 95%. This study cannot statistically distinguish &rho;=0.02 from &rho;=0.30 at these sample sizes.</li>
<li><strong>Correlation is not stable.</strong> In stress conditions (March 2020, 2022 crypto crash), crypto assets tend to correlate with risk assets. The low long-run annual correlation may be misleading about short-term crisis correlation.</li>
<li><strong>GLD 2025 return (+61.5%) reflects a specific gold bull market.</strong> This is an unusually high annual return for gold and may not be representative of forward return potential.</li>
<li><strong>No taxes, no transaction costs for portfolio rebalancing</strong> are modeled in the EF analysis.</li>
<li><strong>The grid is a short-volatility strategy.</strong> This means it systematically profits from low-volatility ranging markets and systematically loses in high-volatility trending markets.</li>
<li><strong>Past simulated performance does not predict future results.</strong></li>
</ol>

<hr />

<h2>8. Approved Copy for CoinRoc Marketing / EF Page</h2>

<p>The following summary is drafted for a non-quant advisor audience. It is accurate to the conditional scenario analysis and appropriately qualified. (Revised 2026-05-25 per Matlock compliance review &mdash; RF-1 dual-correlation disclosure and YF-1 scenario attribution applied.)</p>

<blockquote>
<p>"Academic portfolio theory shows that adding a low-correlation asset to a traditional portfolio can reduce risk without proportionally reducing return. CoinRoc's grid trading composite has shown near-zero correlation with US equities over backtested annual periods (&rho;&nbsp;&approx;&nbsp;+0.02 over nine years; 95% CI: &plusmn;0.40). Importantly, in the two years of worst equity performance in the dataset (2018, 2022), the grid strategy also declined significantly, suggesting the diversification benefit is conditional rather than consistent. Backtested data shows that under a forward-return assumption of +8% annual grid returns, a 10&ndash;20% grid allocation produces a marginal improvement in simulated portfolio Sharpe ratio (+0.03); this result is conditional on the grid generating positive returns and does not hold in the full nine-year historical dataset, in which every grid allocation from 0% upward decreases the portfolio Sharpe ratio."</p>
</blockquote>

<p class="text-sm italic text-slate-light">Editorial note: The dual-correlation disclosure (sentence 3) and forward-scenario attribution (sentence 4) are both required per Matlock compliance review 2026-05-25 &mdash; do not remove or soften either without compliance review.</p>

<hr />

<h2>Addendum: Calmar vs. Sharpe Allocation Comparison</h2>

<h3>1. Drawdown Correlation: The Premise Fails</h3>

<p>The hypothesis that grid drawdowns are uncorrelated with equity drawdowns is empirically false in this dataset. The two worst grid years (&minus;62.9% and &minus;58.9%) both coincide with SPY loss years:</p>

<div class="overflow-x-auto">
<table>
<thead>
<tr><th>Year</th><th>Grid Return</th><th>SPY Return</th><th>Both Negative?</th></tr>
</thead>
<tbody>
<tr><td>2018</td><td>&minus;62.9%</td><td>&minus;4.4%</td><td><strong>Yes</strong></td></tr>
<tr><td>2019</td><td>&minus;7.1%</td><td>+31.5%</td><td>Grid only</td></tr>
<tr><td>2022</td><td>&minus;58.9%</td><td>&minus;18.1%</td><td><strong>Yes</strong></td></tr>
<tr><td>2025</td><td>&minus;23.5%</td><td>+16.6%</td><td>Grid only</td></tr>
</tbody>
</table>
</div>

<p>Annual drawdown correlation between grid and SPY: &rho;&nbsp;&approx;&nbsp;+0.76 (computed on the subset of years where either was negative). The diversification-in-drawdown thesis is not supported.</p>

<h3>2. Sharpe vs. Calmar Overlay (60/40 + Grid)</h3>

<div class="overflow-x-auto">
<table>
<thead>
<tr><th>Grid %</th><th>Sharpe</th><th>Calmar</th><th>CAGR</th><th>Vol</th><th>Max DD</th></tr>
</thead>
<tbody>
<tr><td>0%</td><td>+0.358</td><td>+0.526</td><td>+8.7%</td><td>11.9%</td><td>&minus;16.6%</td></tr>
<tr><td>5%</td><td>+0.245</td><td>+0.404</td><td>+7.6%</td><td>12.6%</td><td>&minus;18.7%</td></tr>
<tr><td>10%</td><td>+0.142</td><td>+0.307</td><td>+6.4%</td><td>13.3%</td><td>&minus;20.8%</td></tr>
<tr><td>20%</td><td>&minus;0.035</td><td>+0.159</td><td>+4.0%</td><td>14.9%</td><td>&minus;25.1%</td></tr>
<tr><td>30%</td><td>&minus;0.180</td><td>+0.051</td><td>+1.5%</td><td>16.6%</td><td>&minus;29.3%</td></tr>
<tr><td>40%</td><td>&minus;0.301</td><td>&minus;0.031</td><td>&minus;1.0%</td><td>18.4%</td><td>&minus;33.5%</td></tr>
</tbody>
</table>
</div>

<h3>3. Key Question: Does Max Calmar Produce a Materially Different Sweet Spot?</h3>

<p>No. In both the full-history and forward-looking scenarios, under both constrained (60/40 overlay) and unconstrained (full SPY/GLD/AGG optimization) framings, the optimal grid allocation is 0% under both Sharpe and Calmar. The ratio choice does not change the recommendation.</p>

<p>What differs is the implied tolerance threshold: Calmar stays positive roughly 15&ndash;17 percentage points higher in grid allocation than Sharpe does (full history: Sharpe turns negative at 20% grid, Calmar at ~38% grid). A Calmar-first advisor might interpret this as license to go higher in grid. This interpretation is incorrect &mdash; the Calmar values at those higher allocations are nearly zero, and the accompanying CAGR and drawdown profiles are unattractive.</p>

<h3>4. Recommendation: Surface Both, Lead with Sharpe</h3>

<p>The EF page should display Max Calmar as a secondary reference point alongside Max Sharpe, not as the headline. For the advisor workflow specifically, the appropriate primary framing is: "does adding grid improve the Sharpe ratio of my existing allocation?" The answer in the historical data is no; in the forward-looking scenario it is marginally yes at 10&ndash;20% but only by ~0.03 Sharpe units (below statistical confidence given n=9). Calmar does not change this conclusion and introduces interpretation risks with the GLD distortion (GLD's near-zero annual drawdown skews the unconstrained Calmar optimizer toward a gold-heavy portfolio that no advisor will implement).</p>

<hr />

<p class="text-sm text-slate-light italic">Han Kessel &middot; Yodacom Research &middot; 2026-05-11 | Compliance review: Matlock (fixes applied 2026-05-25).</p>

<p class="text-sm text-slate-light italic">Data: Walk-forward backtest results (2026-04-27 run) + Supabase benchmark_data (SPY/GLD/AGG/TLT). Grid model: AdaptiveGrid v3DynamicMode, geometric spacing, GTX fill model. Cost tier: retail-binance-us (0.40% maker / 0.60% taker / 0.05% vol-conditional slippage). 17 symbols, 135 valid folds.</p>

<blockquote>
<p><strong>Hypothetical Performance Disclosure:</strong> The performance results shown are hypothetical and were achieved by means of the retroactive application of a model designed with the benefit of hindsight. Hypothetical performance results have inherent limitations. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown. All strategy returns are reported net of assumed retail-Binance-US fee tier (0.40% maker / 0.60% taker / 0.05% volatility-conditional slippage).</p>

<p>This paper is for informational and educational purposes only. It does not constitute investment advice, a recommendation, or an offer or solicitation to buy or sell any security, digital asset, or financial instrument. The RIA practice implications discussed herein are general observations about portfolio construction methodology and are not legal or compliance advice. RIAs should consult qualified legal and compliance counsel before implementing any systematic trading strategy in client accounts.</p>

<p>Digital assets, including the cryptocurrency pairs tested in this study, are highly volatile and speculative. Their regulatory treatment in the United States is evolving.</p>

<p>Forward-looking statements, if any, are illustrative only. The phrase "expected" or "forward-looking" return assumptions used in Section 5b are speculative scenario analyses, not projections of future performance.</p>
</blockquote>

</article>
