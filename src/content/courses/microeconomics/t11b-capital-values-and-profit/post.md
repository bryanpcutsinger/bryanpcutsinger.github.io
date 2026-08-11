---
title: "Capital Values and Profit"
topic: "T11 — Capital, Interest, and Time (Part B)"
course: "Principles of Microeconomics (FAU)"
sessions: ["Fall 2026 — content session 24 (Thu 11/12)"]
ue_anchors: ["UE 32", "UE 33", "UE 36 (front half — interest-rate equalization)"]
be_anchors: []
ep_anchors: ["E&P ch. 13 (Restricted Access to Markets) — tobacco-quota monopoly rent capitalized: a licensed acre nets $400/yr ≈ $4,000 at 10% vs $100/yr ≈ $1,000 unlicensed; the $3,000 difference is the capitalized rent; the windfall accrues once to the holder at announcement, later buyers earn only a normal return", "E&P ch. 6 §8 (Arab Oil Policy) — a rise in oil's expected future value pulls its present price up, rationing oil away from low-value current uses toward higher-valued future ones (the conservation reading); whoever out-forecasts the market gets rich", "E&P ch. 9 pp. 194–195 — profit-rhetoric fallacies: markup versus profit, profits-before-taxes, return on sales versus return on capital, and 'excessive' as a pejorative"]
word_target: "2500-3600"
word_budget: 2680
  # word_budget 3800 -> 3886 (+86): For Further Reading section added 2026-07-22
  # word_budget 3886 -> 3350 (-536): BE→A&A redraft 2026-07-23 (four BE passages → extensions.md; measured stripped body 3302 + 48 headroom)
  # word_budget 3350 -> 2680 on 2026-08-10: Wave-B source audit; stripped 3302 -> 2632 while preserving the prior 48-word headroom
status: approved        # R4 scope-reduction rebuild 2026-07-21 (plan §7.1/§7.2/§7.4); prior M8 done gate 2026-07-20 (§10 A+B PASS); Stage-2 2026-06-15
audience: students
note: "Self-contained — assumes no access to the textbooks. Part B of T11, held to three assessed objectives: durable-good/bond valuation and harvest timing, wealth and standard income, and profit as unexpected wealth growth (the capitalization payoff). The interest-rate package remains Core but is not an additional assessed objective. Known-reserves/conservation, the relative-price/valuation-channel material, and the political economy of time are lecture-only content in extensions.md. The 1801 asset-return comparison, the equity-shares-in-human-capital financing arrangement, the ninety-year-old-planting-trees illustration, and the 'unearned income' label critique moved to extensions.md in the 2026-07-23 BE→A&A redraft (be_anchors now empty; the profit-as-reward-for-risk-bearing idea remains Core in the T12 bridge blockquote). UE 35 asset pricing, diversification, random walk, and intermediation are owned by T12."
# brief: ../t11-capital-interest-time/brief.md
---

# Capital Values and Profit

In the first half of this topic we built one tool. *Present value* puts amounts arriving at different times onto a single ruler so they can be compared: a future amount F is worth P = F ÷ (1 + r) today, where r is the *rate of interest*, the rate at which a present amount grows into a future one. That is the whole kit. In this half we start using it.

<aside class="econ-callout econ-objectives">
<p class="econ-callout__label">Learning objectives</p>
<p>By the end of this post you should be able to:</p>
<ul>
<li>Value a durable good from its expected net services using an appropriate discount rate, and apply the simplified harvest rule while identifying its maintained assumptions.</li>
<li>Distinguish net worth from human wealth, calculate standard income in the perpetuity benchmark, and identify limits on consumption smoothing.</li>
<li>Distinguish accounting and economic profit from unexpected wealth growth, and state the conditions under which a newly created rent capitalizes to an incumbent owner.</li>
</ul>
</aside>

## Every Durable Good Is Worth the Present Value of Its Future Services

We have valued promises to pay money. The same arithmetic values any *durable good*, any asset that yields services over time, from a bond to a house to a machine to an apple tree. **The capital value of any such thing is the present value of the whole stream** of expected *net* services that ownership conveys. Forecasts, maintenance, taxes, risk, control rights, and the discount rate therefore enter the price; present value is not an intrinsic physical property of the object.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Durable Good</dt><dd>An asset that yields a stream of services over time.</dd></div>
<div><dt>Capital Value</dt><dd>The present value of the whole stream of future services an asset will provide.</dd></div>
</dl>
</aside>

An asset's total holding return has two nonoverlapping pieces: services or cash received while holding it, plus the change in its market value. Physical growth or quality improvement can cause either piece, but should not be counted a third time. A stock can create a gain without a dividend if its price rises; a painting can deliver enjoyment as well as appreciation. Compare the complete return, net of costs and adjusted for risk, with the best feasible alternative. A painting appreciating 5 percent is not necessarily inferior to a 6 percent financial return if its services, taxes, costs, or risk differ.

Because a durable good's value is the present value of its services, and because a stream of equal services is just an annuity, the bond table prices bonds directly. The table below shows the market price of $1,000 bonds that pay a fixed 5 percent coupon ($50 a year), at various maturities and market interest rates.

**Market price of fixed-coupon $1,000 bonds (5% coupon), at alternative market rates and maturities.**

| Life of bond | Coupon | 3% | 5% | 7% | 10% |
|---|---|---|---|---|---|
| 1 year | 5% | $1,020 | $1,000 | $982 | $954 |
| 5 years | 5% | $1,092 | $1,000 | $918 | $810 |
| 10 years | 5% | $1,170 | $1,000 | $859 | $692 |
| 20 years | 5% | $1,299 | $1,000 | $788 | $573 |

Holding promised payments fixed, a bond's price moves inversely to the market yield: when the yield exceeds the coupon rate, the bond sells below face value. A discount bond's *yield to maturity* exceeds its coupon rate because the holder receives coupons plus the movement toward face value, assuming payment as promised. Longer bonds are more price-sensitive to a given yield change. That duration exposure can contribute to a term premium, but long yields need not exceed short yields: expected future short rates, inflation, liquidity, risk, and supply also shape the yield curve. When a building or stock falls, ask whether expected net receipts fell, the applicable discount rate rose, or both; a bond comparison may help, but does not identify the cause by itself.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>In the table, a 5% coupon bond sells for $918 when the market rate is 7%, below its $1,000 face value. Is the return you actually earn on it above or below the 5% coupon, and why?</p>
</aside>

## The Observed Interest Rate Is a Package, Not One Number

People say “the” interest rate, but a quoted rate reflects several terms. In the benchmark, the *pure rate of interest* is **the underlying price of current over future income, the same for everyone** comparing otherwise identical, certain claims. Actual contracts differ. The table is a stylized accounting illustration, not an empirical formula: components can interact, and fees may appear outside the stated annual rate.

**The nominal interest rate as a package of add-ons.**

| Component | Borrower A (bank loan) | Borrower B (credit card, higher risk) |
|---|---|---|
| Pure interest rate | 5% | 5% |
| Transactions and record-keeping | 1 | 2 |
| Enforcement contingencies | 1 | 2 |
| Risk of payment default | 1 | 3 |
| Anticipated inflation | 5 | 5 |
| **Nominal interest package** | **13%** | **17%** |

In the illustration, the packages differ because of add-ons. A borrower without a repayment record may face a larger default premium, but an observed age correlation alone does not establish the lender's reason or whether a legal classification is permissible. A high small-loan annual percentage rate can reflect fixed processing costs, default risk, market power, regulation, and the short term over which fees are annualized. When new bonds offer 9 percent while old ones paid 7 percent, possible causes include changed default risk, expected inflation, maturity, liquidity, or contract features.

Under otherwise like terms, default risk helps **safe and risky instruments line up in a predictable order** of promised yields. The historical table illustrates that mechanism: Aaa corporate debt paid less than Baa debt in each shown year. Across instrument types, maturity, liquidity, taxes, embedded options, regulation, and measurement also differ, so the rows do not identify one causal premium.

**A selection of interest rates on financial instruments, by year (illustrative historical values).**

| Instrument | 1996 | 2002 | 2012 |
|---|---|---|---|
| 3-month Treasury bill | 5.20% | 1.74% | 0.07% |
| 1-year Treasury bill | 5.39% | 4.52% | 0.17% |
| 10-year Treasury bond | 5.60% | 5.20% | 1.47% |
| 6-month certificate of deposit | 5.28% | 1.85% | 0.48% |
| Aaa corporate bonds | 6.81% | 6.55% | 3.64% |
| Baa corporate bonds | 7.47% | 7.87% | 5.02% |
| Bank prime loan rate | 8.25% | 4.25% | 3.25% |

A lower promised yield can therefore be preferable. A Treasury bond at 4 percent may dominate a venture bond at 7 percent for an investor who values its lower default risk and easier resale. The extra promised yield is compensation for bearing risk, not a guaranteed extra realized return.

*Interest-rate risk* is the possibility that market yields move while a bond is held; longer-duration bonds are usually more price-sensitive. A *liquidity* benefit can lower the yield investors accept on an easily traded claim. The stated *nominal rate* is measured in dollars, while the *real rate* tracks **what those dollars actually buy after inflation, roughly the nominal rate minus the rate of inflation**. The exact relation is multiplicative, but subtraction is a good approximation at modest rates. Expected inflation can enter the contracted nominal rate; unexpected inflation changes the realized real return and redistributes purchasing power relative to what borrower and lender anticipated. An inflation-indexed bond reduces that exposure but may differ in taxes, liquidity, and other terms. These components do not form one fixed recipe for every security.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t11b-capital-values-and-profit/figures/t11-ue33-1-interactive.html" title="Drag or use the arrow keys to compare whether realized real returns are broadly positive, negative, or near zero across periods in this qualitative redraw." loading="lazy" style="width:100%; max-width:480px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t11b-capital-values-and-profit/figures/t11-ue33-1-interactive.html">Open the interactive figure directly</a>.</p></iframe>
<figcaption><strong>Realized real returns swing with surprise inflation.</strong> This qualitative redraw of the source figure shows returns moving above and below zero, turning negative when inflation outran expectations. Move across the timeline to compare broad positive, negative, or near-zero episodes; do not read the curve as a table of exact annual observations.</figcaption>
</figure>

## Hold an Asset Only While It Grows Faster Than the Interest Rate

The capital-value idea answers a question that puzzles people: when is the best time to sell a growing asset, a stand of timber, a barrel of aging whiskey, a cellar of wine? Letting it grow adds value, so why ever stop?

In the stripped-down case, **Keep holding the asset as long as its value is growing faster than the interest rate** and harvest when the net growth rate falls to the return on the best comparable alternative. This rule assumes no interim service is forgone, all maintenance and storage costs are netted out, risk is treated consistently, and harvest does not change other land or replacement opportunities. A tree adding 8 percent to net lumber value is worth holding against a comparable 5 percent alternative; when the rates meet, the owner is indifferent at the margin. With services, costs, replanting, taxes, or ecological effects, compare the asset's complete marginal return and cost instead.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A stand of timber is adding 6% a year to its value while the interest rate is 4%. Should the owner cut it now or keep waiting? At what growth rate should he finally cut?</p>
</aside>

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t11b-capital-values-and-profit/figures/t11b-tree-cutting-interactive.html" title="Drag the interest-rate slider (or use the arrow keys) to sweep the tangent line and see the wealth-maximizing harvest age shift." loading="lazy" style="width:100%; max-width:480px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t11b-capital-values-and-profit/figures/t11b-tree-cutting-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t11b-capital-values-and-profit/figures/t11b-tree-cutting.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Cut when the tree's growth rate falls to the interest rate.</strong> Tangency to the lumber-value curve marks the wealth-maximizing harvest: 50 years at 4%, 60 at 3%.</figcaption>
</figure>

The timing rule also requires an institution that lets the decision maker capture enough of the future payoff. Individual ownership is one arrangement. A community with enforceable access rules, a concession, a lease, or public management can also restrain premature harvest. Open access, by contrast, can induce a race to cut before another user does. That is the commons mechanism from T5, not a claim that only private title can support long horizons.

> **Recall property rights and the commons (T5).** Long-horizon investment requires sufficiently secure claims to future benefits. Private title, community governance, leases, concessions, and public rules can each supply them with different information, enforcement, and political costs. Open access is the dangerous case: users may race to harvest before others do. The timing rule assumes the decision maker can capture the relevant future payoff.

## Your Wealth Is the Present Value of Everything You Will Earn

Now turn the tool on yourself. Financial *net worth* is the market value of assets minus liabilities. *Human wealth* is the present value of expected future labor earnings net of the costs needed to earn them; it reflects human capital but is not identical to the skills themselves. **The largest piece of most people's wealth is not a bank balance or a house** in this broader lifetime-resource sense, though the statement's magnitude varies by age, occupation, health, debt, and asset ownership. Human wealth cannot generally be sold or pledged like a bond, so it belongs on an economic lifetime balance sheet, not an ordinary financial statement.

In a perpetual, constant-rate benchmark, *standard income* is the maintainable flow that leaves wealth intact. If wealth is W and the net rate is r, the flow is r × W. Thus $100,000 earning a constant net 10 percent supports $10,000 a year; a perpetual $5,000 flow at 10 percent capitalizes to $50,000. The rule changes for finite lives, changing rates, inflation, taxes, risk, depreciation, bequests, and human capital that is used up over a career. It is a benchmark for separating consumption from drawing down wealth, not a universal spending prescription.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Human Capital</dt><dd>Productive capacities embodied in a person through ability, education, training, health, and experience.</dd></div>
<div><dt>Standard Income</dt><dd>The constant-rate perpetuity flow that leaves an initial stock of wealth intact.</dd></div>
</dl>
</aside>

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>Someone has $200,000 of wealth and the interest rate is 5%. How much can he spend each year without shrinking that wealth, and what is that flow called?</p>
</aside>

This reframes *saving* and *consumption*. People often try to smooth consumption across predictable earnings changes by borrowing when young, saving in higher-earning years, and drawing assets down in retirement. A temporary earnings change need not move lifetime resources much, whereas news about permanent earning ability can. Credit constraints, uncertainty, precautionary motives, taxes, and bequests limit smoothing. A permanent $20-a-month raise can therefore affect spending differently from a one-time $4,000 gift, but the response is empirical rather than mechanically equal to either payment's present value.

## Profit Is Wealth Growth Nobody Saw Coming

There are several legitimate profit concepts. *Accounting profit* subtracts recorded expenses from revenue. *Economic profit* also subtracts opportunity costs, including the normal risk-adjusted return on invested resources. In a competitive asset-pricing benchmark with broad information and low trading barriers, a known superior risk-adjusted return attracts bids until the advantage is capitalized into price. **Profit, in short, is unexpected wealth growth: the part the market did not anticipate** when we use the narrower Alchian–Allen surprise-profit definition. Information costs, financing constraints, illiquidity, market power, and nontraded assets limit how quickly that benchmark works.

That definition exposes several common rhetorical tricks. A retailer's *markup*, the gap between wholesale and retail prices, is not profit: it must cover the store, inventory, sales labor, security, returns, and every other retail service. "Profits before taxes" is equally selective; taxes are costs just as wages are, and the phrase is no more revealing than "profits before wages." Nor does profit as a percentage of sales measure the return on invested wealth. Invest $1, sell the product a day later for $1.01, and repeat: the one-cent margin is only 1 percent of sales each turn but roughly 365 percent over a year on the dollar repeatedly invested. Finally, "excessive profit" is a judgment, not a measurement, until the speaker states excessive relative to what alternative return, risk, and invested wealth.

For a traded asset, a price change alters marked-to-market wealth before sale. A stock rising from $100 to $150 creates a $50 unrealized gain; a later fall to $125 creates a $25 loss from that new benchmark. Sale still matters for taxes, liquidity, transaction costs, and whether the quoted price can actually be obtained. The original purchase price is sunk for the forward-looking hold-or-sell decision. Compare expected returns, risk, taxes, and costs from today's position rather than waiting merely to recover the historical price.

A worked example fixes the mechanism. Suppose a transferable, permanent, fully credible crop license raises an acre's expected net income from $100 to $400 a year. At 10 percent that stream capitalizes to roughly $4,000 ($400 ÷ 0.10), versus $1,000 without the license. Under those assumptions, the $3,000 rent is capitalized into land value. The owner at the unexpected announcement receives the windfall; a later buyer who pays the correctly adjusted price expects only the normal risk-adjusted return. If the rule was anticipated, temporary, nontransferable, risky, taxed, or only partly credible, the timing and size differ. **That is the licensing thread from the last topic made exact: it is already priced into what a later holder pays** only to the extent those expectations are in the purchase price.

The former federal tobacco-quota program illustrates the mechanism. <a href="https://ers.usda.gov/sites/default/files/_laserfiche/publications/41156/14951_aer789_1_.pdf">USDA economists</a> modeled quota value as the discounted rent stream and documented that many quota owners leased rights to growers. When Congress ended the program in 2004, the <a href="https://nationalaglawcenter.org/wp-content/uploads/assets/crs/RS22046.pdf">transition program</a> specified payments of $7 per pound to quota owners and $3 per pound to growers, estimated at about $9.6 billion over ten years. Those payments and market evidence are consistent with valuable quota rights; they do not by themselves prove that every dollar of observed land value came only from the license.

> **Looking ahead to risk and entrepreneurship (T12).** Surprise profits and losses accrue to residual claimants who commit resources before outcomes are known. Foresight can improve the odds; luck also matters. Bearing priced risk ordinarily earns an *expected* risk premium, while unexpected profit is the realized surprise relative to what the market had already priced. Whether a gain is deserved is a normative question that cannot be settled by labeling it profit. T12 studies how risk is measured, transferred, pooled, and retained.

## For Further Reading

Want to explore the source material? This lecture draws on the following chapters from two books by Armen A. Alchian and William R. Allen:

- *Universal Economics* (Liberty Fund, 2018): Ch. 32, “Wealth, Income, and Interest”; Ch. 33, “A Package Called the Rate of Interest”; Ch. 36, “Determinants of the Interest Rate”.
- *Exchange and Production*, 3rd ed. (Wadsworth, 1983): Ch. 6, “Capital Values, Future Yields, and Interest”; Ch. 9, “Business Firms: Ownership, Control, and Profits”; Ch. 13, “Restricted Access to Markets”.

<div class="econ-review">
<section class="econ-review__section">
<h3>Key takeaways</h3>
<ul>
<li><strong>Every durable good is worth the present value of its future services</strong> in the benchmark, using expected net services and an appropriate rate. The simple harvest rule additionally assumes no omitted services, costs, or spillovers.</li>
<li><strong>Net worth and human wealth are distinct.</strong> Standard income equals r × W in a constant-rate perpetuity; finite lives, risk, inflation, and constraints change the rule.</li>
<li><strong>Surprise profit is one profit concept.</strong> A credible permanent rent capitalizes toward the incumbent asset's price, but anticipation, transferability, duration, risk, and taxes determine who gains and by how much.</li>
</ul>
</section>
</div>