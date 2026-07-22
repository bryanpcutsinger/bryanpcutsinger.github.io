---
title: "Capital Values and Profit"
topic: "T11 — Capital, Interest, and Time (Part B)"
course: "Principles of Microeconomics (FAU)"
sessions: ["Fall 2026 — content session 24 (Thu 11/12)"]
ue_anchors: ["UE 32", "UE 33", "UE 36 (front half — interest-rate equalization)"]
be_anchors: ["BE 13", "BE 14 (partial)", "BE 15"]
ep_anchors: ["E&P ch. 13 (Restricted Access to Markets) — tobacco-quota monopoly rent capitalized: a licensed acre nets $400/yr ≈ $4,000 at 10% vs $100/yr ≈ $1,000 unlicensed; the $3,000 difference is the capitalized rent; the windfall accrues once to the holder at announcement, later buyers earn only a normal return", "E&P ch. 6 §8 (Arab Oil Policy) — a rise in oil's expected future value pulls its present price up, rationing oil away from low-value current uses toward higher-valued future ones (the conservation reading); whoever out-forecasts the market gets rich", "E&P ch. 9 pp. 194–195 — profit-rhetoric fallacies: markup versus profit, profits-before-taxes, return on sales versus return on capital, and 'excessive' as a pejorative"]
word_target: "2800-3800"
word_budget: 3800
status: approved        # R4 scope-reduction rebuild 2026-07-21 (plan §7.1/§7.2/§7.4); prior M8 done gate 2026-07-20 (§10 A+B PASS); Stage-2 2026-06-15
audience: students
note: "Self-contained — assumes no access to the textbooks. Part B of T11, held to three assessed objectives: durable-good/bond valuation and harvest timing, wealth and standard income, and profit as unexpected wealth growth (the capitalization payoff). The interest-rate package remains Core but is not an additional assessed objective. Known-reserves/conservation, the relative-price/valuation-channel material, and the political economy of time are lecture-only content in extensions.md. UE 35 asset pricing, diversification, random walk, and intermediation are owned by T12."
# brief: ../t11-capital-interest-time/brief.md
---

# Capital Values and Profit

In the first half of this topic we built one tool. *Present value* puts amounts arriving at different times onto a single ruler so they can be compared: a future amount F is worth P = F ÷ (1 + r) today, where r is the *rate of interest*, the rate at which a present amount grows into a future one. That is the whole kit. In this half we start using it.

<aside class="econ-callout econ-objectives">
<p class="econ-callout__label">Learning objectives</p>
<p>By the end of this post you should be able to:</p>
<ul>
<li>Value a durable good as the present value of its future services and decide when to harvest a growing asset by comparing its growth rate with the interest rate.</li>
<li>Explain why wealth is the present value of everything you will earn, including human capital, and calculate standard income as the maintainable flow from that wealth.</li>
<li>Define profit as unexpected wealth growth and use capitalization to identify who captures a newly created rent.</li>
</ul>
</aside>

## Every Durable Good Is Worth the Present Value of Its Future Services

We have valued promises to pay money. The same arithmetic values any *durable good*, any asset that yields a stream of services over time, from a bond to a house to a machine to an apple tree. The capital value of any such thing is the present value of the whole stream of future services it will provide. That is the unifying idea behind the whole topic: a bond, a rental building, and a fruit orchard are all just streams of future value discounted to the present.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Durable Good</dt><dd>An asset that yields a stream of services over time.</dd></div>
<div><dt>Capital Value</dt><dd>The present value of the whole stream of future services an asset will provide.</dd></div>
</dl>
</aside>

That means a good can yield income in three forms, and they all count equally. There are the *services* it throws off (the rent, the fruit, the coupon payment); there is *physical or quality growth* (the tree gets bigger, the wine improves); and there is *growth in market value*. A stock that pays no dividend but rises in price has still given you income, because income is the increase in your wealth, and your wealth rose. By the same logic, when you hold a painting that appreciates 5 percent a year while money invested elsewhere would have earned 6 percent, owning the painting costs you something even though it is gaining value: you are forgoing the higher return. That forgone return is a real cost of holding any asset.

Because a durable good's value is the present value of its services, and because a stream of equal services is just an annuity, the bond table prices bonds directly. The table below shows the market price of $1,000 bonds that pay a fixed 5 percent coupon ($50 a year), at various maturities and market interest rates.

**Market price of fixed-coupon $1,000 bonds (5% coupon), at alternative market rates and maturities.**

| Life of bond | Coupon | 3% | 5% | 7% | 10% |
|---|---|---|---|---|---|
| 1 year | 5% | $1,020 | $1,000 | $982 | $954 |
| 5 years | 5% | $1,092 | $1,000 | $918 | $810 |
| 10 years | 5% | $1,170 | $1,000 | $859 | $692 |
| 20 years | 5% | $1,299 | $1,000 | $788 | $573 |

Read this table and the central facts about bonds fall out. A bond's price moves inversely to the interest rate: when the market rate sits above the coupon, the bond sells below its $1,000 face value; below the coupon, it sells above face. So if a bond trades below face value, its *yield to maturity*, the return you actually earn, exceeds the coupon rate, because you collect the coupons plus the rise to face value at the end. And longer bonds swing far more than shorter ones, because the longer the stream, the more its present value is whipped around by changes in the rate: a one-year bond barely moves when rates jump from 5 to 10 percent (from $1,000 to $954), but a twenty-year bond plunges (from $1,000 to $573). That extra exposure is why long bonds tend to carry a higher rate to begin with. The same logic answers what changed when a building's or a stock's value falls: you have to ask which part of the package changed, a rise in the rate that discounts every future receipt more heavily, or a fall in the expected receipts themselves, and you read it off bonds.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>In the table, a 5% coupon bond sells for $918 when the market rate is 7%, below its $1,000 face value. Is the return you actually earn on it above or below the 5% coupon, and why?</p>
</aside>

## The Observed Interest Rate Is a Package, Not One Number

People say "the" interest rate, but the rate a particular borrower pays is built up from parts. There is a single *pure rate of interest*, the underlying price of current over future income, the same for everyone. On top of it sit add-ons that differ by borrower and by loan. The table below shows the build-up for two borrowers: a solid bank customer and a riskier credit-card borrower.

**The nominal interest rate as a package of add-ons.**

| Component | Borrower A (bank loan) | Borrower B (credit card, higher risk) |
|---|---|---|
| Pure interest rate | 5% | 5% |
| Transactions and record-keeping | 1 | 2 |
| Enforcement contingencies | 1 | 2 |
| Risk of payment default | 1 | 3 |
| Anticipated inflation | 5 | 5 |
| **Nominal interest package** | **13%** | **17%** |

Notice that both borrowers pay the same pure rate; the packages differ because of the add-ons. This answers several puzzles. When a young person is quoted 15 percent and an established uncle gets 12 percent, that is not age discrimination, it is a larger default-risk premium on the borrower with no track record. When a pawnshop charges 40 percent, most of that is not pure interest at all but compensation for tiny loans, high default risk, and the costs of running the operation. And when new bonds must offer 9 percent while old ones paid 7 percent, you have to ask which part of the package changed: a worse credit rating (a bigger default premium) or higher expected inflation (a bigger inflation premium) would both raise the number for different reasons.

The *default-risk* premium is why safe and risky instruments line up in a predictable order. The table below lists rates on real instruments at three dates. Compare like instruments down each year's column: among corporate bonds, Aaa debt pays less than Baa debt in every year shown because Baa carries more default risk. Comparisons across Treasury maturities, certificates of deposit, and bank loans also reflect differences in maturity and liquidity, so they are not a pure default-risk ranking. (These are the source's own historical figures, illustrating the mechanism, not current data.)

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

This ordering explains why a lender might rationally accept a lower yield. A Treasury bond at 4 percent can be a better buy than a venture company's bond at 7 percent, once you account for the venture bond's higher default risk and the Treasury's easier resale; the extra yield on the risky bond is compensation for risk being taken on, not a free lunch. The same point cuts the other way. Sowell reports that a dollar invested in 1801 was worth, in inflation-adjusted terms by the late 1990s, around a thousand dollars in bonds but several hundred thousand in stocks, and less than a dollar in gold. Stocks' higher average return is payment for their wilder ride; over a long horizon, the asset that feels "risky" year to year was the one that built wealth.

The second add-on worth a note is for *market risk*, the danger that rates will move while you hold a long bond and shove its price around. Long bonds swing most when rates change, so lenders demand an extra premium to hold them, which is part of why long-term rates usually exceed short-term ones. Running the other way is a *subtraction* for *liquidity*: very short, very safe, easily sold instruments like Treasury bills double as a near-substitute for cash, and that convenience yield lets them pay a bit less. There is also an *inflation premium*, the part of the rate that compensates lenders for the dollar losing value. The stated rate on a loan is the *nominal rate*, the percentage in dollars; the *real rate* is what those dollars actually buy after inflation, roughly the nominal rate minus the rate of inflation. A lender quoting a nominal rate is really demanding some desired real return plus a cushion for the inflation expected over the life of the loan. So if you fear inflation, an inflation-indexed bond, whose payments rise with the price level, is attractive even at a lower stated rate, while someone confident that prices will stay flat would rather hold an ordinary fixed-dollar note at a higher number. The crucial wrinkle is that lenders set the premium for the inflation they expect, and actual inflation can differ. When it runs higher than expected, the *realized real rate*, what the interest truly bought after the fact, can fall to zero or even go negative: the lender is paid back in dollars worth less than the cushion anticipated, an unannounced transfer of wealth from lender to borrower. Realized real rates have dipped below zero this way during wars and supply shocks, when inflation outran what lenders had priced in.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t11b-capital-values-and-profit/figures/t11-ue33-1-interactive.html" title="Drag or use the arrow keys to compare whether realized real returns are broadly positive, negative, or near zero across periods in this qualitative redraw." loading="lazy" style="width:100%; max-width:480px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t11b-capital-values-and-profit/figures/t11-ue33-1-interactive.html">Open the interactive figure directly</a>.</p></iframe>
<figcaption><strong>Realized real returns swing with surprise inflation.</strong> This qualitative redraw of the source figure shows returns moving above and below zero, turning negative when inflation outran expectations. Move across the timeline to compare broad positive, negative, or near-zero episodes; do not read the curve as a table of exact annual observations.</figcaption>
</figure>

## Hold an Asset Only While It Grows Faster Than the Interest Rate

The capital-value idea answers a question that puzzles people: when is the best time to sell a growing asset, a stand of timber, a barrel of aging whiskey, a cellar of wine? Letting it grow adds value, so why ever stop?

The rule is clean. Keep holding the asset as long as its value is growing faster than the interest rate. The moment its growth rate slows to the interest rate, sell, because from that point the money would grow faster invested elsewhere. A tree that adds 8 percent to its lumber value this year is worth holding when the interest rate is 5 percent; once its growth slows to 5 percent, cutting and reinvesting does just as well, and any slower and you lose ground by holding. So the wealth-maximizing harvest age is wherever the tree's own growth rate falls to the market rate, and a lower interest rate means you wait longer (the bar the tree must clear is lower). The same logic governs whiskey: age it while its value climbs faster than the rate, bottle it when the climb slows.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A stand of timber is adding 6% a year to its value while the interest rate is 4%. Should the owner cut it now or keep waiting? At what growth rate should he finally cut?</p>
</aside>

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t11b-capital-values-and-profit/figures/t11b-tree-cutting-interactive.html" title="Drag the interest-rate slider (or use the arrow keys) to sweep the tangent line and see the wealth-maximizing harvest age shift." loading="lazy" style="width:100%; max-width:480px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t11b-capital-values-and-profit/figures/t11b-tree-cutting-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t11b-capital-values-and-profit/figures/t11b-tree-cutting.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Cut when the tree's growth rate falls to the interest rate.</strong> Tangency to the lumber-value curve marks the wealth-maximizing harvest: 50 years at 4%, 60 at 3%.</figcaption>
</figure>

This optimal-timing rule has a sharp condition attached: it only works when someone owns the asset securely. An owner gains by leaving a tree standing while it still outgrows the interest rate, because the future value is his. But an unowned tree, in a forest open to all, gets cut as soon as its lumber is worth anything at all, because whoever waits loses it to whoever does not. The race to grab an unowned resource destroys the patient, value-maximizing strategy that secure ownership makes possible, the commons problem we studied in T5.

> **Recall property rights and the commons (T5).** Secure private property is what makes long-horizon investment and optimal timing possible: an owner profits by not harvesting a resource that is still growing faster than the interest rate, while an unowned, common resource gets used up prematurely as everyone races to claim it before someone else does. This premature-use problem is the heart of the "tragedy of the commons." The elegant timing rule above tacitly assumes an owner who can capture the future payoff.

## Your Wealth Is the Present Value of Everything You Will Earn

Now turn the tool on yourself. *Wealth* is the present value of all your future income, from every source. The largest piece of most people's wealth is not a bank balance or a house. It is *human capital*: the present value of your own future earnings. If you imagined a balance sheet listing everything you own, the biggest asset on it would be "Me", the discounted stream of every paycheck you will ever collect. That is why a question like "are you worth more than $500,000?" is not absurd: discount a few decades of salary back to the present and a typical career easily clears that bar. A ninety-year-old who plants fruit trees that mature in twenty years is not being foolish. The land is worth more the day the trees go in, because its present value rises immediately, and he can sell it tomorrow and move to the Bahamas; part of today's wealth is always food not yet grown, to be eaten by people not yet born.

*Income* is best understood as the maintainable flow you can take without shrinking your wealth, what we call *standard income*. If your wealth is W and the interest rate is r, your standard income is r × W: the amount you can consume each year and still leave your wealth intact, exactly like spending only the interest on a perpetuity and never touching the principal. Someone with $100,000 of wealth can maintainably consume nothing extra at a 0 percent rate but $10,000 a year at 10 percent. Run it the other way and a steady $5,000 a year of income, at 10 percent, corresponds to wealth of $50,000 ($5,000 ÷ 0.10), the perpetuity formula again, now read as *capitalizing* an income into the wealth that backs it. If you consume exactly your standard income for two years, your wealth at the end is unchanged; consume more and you are dissaving, eating into the principal.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Human Capital</dt><dd>The present value of your own future earnings.</dd></div>
<div><dt>Standard Income</dt><dd>The maintainable flow you can take each year without shrinking your wealth, equal to r times your wealth.</dd></div>
</dl>
</aside>

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>Someone has $200,000 of wealth and the interest rate is 5%. How much can he spend each year without shrinking that wealth, and what is that flow called?</p>
</aside>

This reframes *saving* and *consumption*. No one gears consumption strictly to this year's earnings. People smooth: they borrow when young and earning little, save through their prime years, and spend down in retirement. They can do this because human wealth, the present value of a whole working life, barely moves when a single year's earnings wobble. A bad year is one small dip in a long discounted stream. So consumption tracks expected lifetime wealth, not the current paycheck, which is why a one-time $4,000 gift and a permanent $20-a-month raise can affect spending very differently: the raise, small as it sounds per month, is a stream, and the present value of a lifetime stream can dwarf a single windfall.

There is also a "stocks-versus-bonds" choice hidden in human capital. When you raise money against your future earnings, you can do it bond-style (borrow a fixed sum and repay it whatever happens) or stock-style (give someone a *share* of your future earnings). The share arrangement pools risk, which is why it appears where future earnings are wildly uncertain: boxing managers and Hollywood agents take a percentage of a young fighter's or actor's future income, and labor contractors take a cut of immigrant workers' pay. Most such bets do not pay off, so a fixed loan would be too risky for the lender; an equity-like share lets the winners cover the losers. (Yale once tried lending to students against a share of future income, but the future doctors and lawyers who expected high earnings opted out, which tells you who finds such deals attractive.)

## Profit Is Wealth Growth Nobody Saw Coming

We can now define *profit* precisely, and the definition is sharper than the everyday one. Your wealth cannot be expected to grow faster than the interest rate (plus whatever you save), because if some asset were known to grow faster, everyone would bid for it until its price rose and its expected return fell back to the going rate. So any wealth growth above that expected, no-surprise level is profit, and any shortfall is a loss. Profit, in short, is unexpected wealth growth: the part the market did not anticipate.

That definition exposes several common rhetorical tricks. A retailer's *markup*, the gap between wholesale and retail prices, is not profit: it must cover the store, inventory, sales labor, security, returns, and every other retail service. "Profits before taxes" is equally selective; taxes are costs just as wages are, and the phrase is no more revealing than "profits before wages." Nor does profit as a percentage of sales measure the return on invested wealth. Invest $1, sell the product a day later for $1.01, and repeat: the one-cent margin is only 1 percent of sales each turn but roughly 365 percent over a year on the dollar repeatedly invested. Finally, "excessive profit" is a judgment, not a measurement, until the speaker states excessive relative to what alternative return, risk, and invested wealth.

And it is captured the instant an asset's market value changes, not when you sell. If you buy a stock at $100 and it rises to $150, you have a $150 − $100 = $50 profit the moment the price moves, whether or not you cash out; if it then falls to $125, you have taken a $25 loss from the peak, again whether or not you sell. (Selling matters for taxes, not for whether the gain is real.) This also disposes of a stubborn fallacy: "I'll hold this losing stock until it climbs back to what I paid, so I don't take a loss." The loss already happened when the price fell; your wealth is the current market value, full stop. What you originally paid is a *sunk cost*, gone and irrelevant, exactly as we discussed at the very start of the course. The only sensible question is whether this asset, at today's price, will do better going forward than the alternatives.

A worked example fixes it. Suppose the government licenses the right to grow a crop, so a licensed acre nets about $400 a year. At 10 percent that stream capitalizes to roughly $4,000 ($400 ÷ 0.10), while the same land unlicensed, netting $100 a year, is worth about $1,000. Those figures are illustrative, but the logic is exact: the $3,000 gap is the monopoly rent the license creates, capitalized straight into the price of the favored land. The whole gain lands once, on whoever owns the land when the scheme is announced, an unforeseen wealth jump, a profit in the sense just defined; a later buyer pays the full $4,000 and earns only the going return. That is the licensing thread from the last topic made exact: it is already priced into what a later holder pays.

American tobacco was this asset. A federal quota to market a pound of tobacco was itself a capital asset, and <a href="https://ers.usda.gov/sites/default/files/_laserfiche/publications/41156/14951_aer789_1_.pdf">USDA economists put the arithmetic in print</a>: a quota was worth its yearly rent divided by the interest rate. The rent went to the quota owners, many of them non-farming landlords who leased to the growers. When Congress ended the 1938 program in 2004, it <a href="https://nationalaglawcenter.org/wp-content/uploads/assets/crs/RS22046.pdf">bought the rent out</a>: owners received $7 a pound and growers $3, about $9.6 billion over ten years, proof that the value lived in the license, not the plow.

This is also the place to clear up a loaded label. Returns that arrive without current labor, interest on a loan, dividends on a share, the gain when an asset's price rises, are sometimes called *unearned income*, on the theory that the recipient did nothing this year to deserve them. The term is a misnomer. These returns are earned, just not in the period they arrive. They are the payoff to two genuine services rendered earlier: deferring consumption (handing over resources now so someone else can use them) and bearing risk (committing those resources to an uncertain future before anyone knew how it would turn out). The factory that finally pays dividends was financed years before, when the outcome was in doubt and the money could have been spent or lent elsewhere. That the contribution is invisible by the time the reward shows up does not make it absent, and a great deal of bad policy, from condemnations of money-lenders to laws that make debts hard to collect, has grown out of mistaking deferred earnings for unearned income.

> **Looking ahead to risk and entrepreneurship (T12).** This profit-as-surprise idea is the bridge to our next topic. If profit is unexpected wealth growth, then the people who earn it are the ones who *bear risk and exercise foresight that others would not*, committing resources to an uncertain future before anyone knows how it turns out. That is why even "lucky" profits are not undeserved windfalls: they are the reward for a genuine service, bearing a risk that others declined to bear. The full treatment of risk, uncertainty, insurance, and speculation, including how markets transfer existing risks and narrow each holder's exposure through pooling, is the heart of the next topic; here we only establish what profit is and that risk-bearing is its source.

<div class="econ-review">
<section class="econ-review__section">
<h3>Key takeaways</h3>
<ul>
<li><strong>Every durable good is worth the present value of its future services.</strong> Its price moves opposite the interest rate, and a growing asset should be held only while its value grows faster than that rate.</li>
<li><strong>Wealth is the present value of everything you will earn.</strong> Standard income is the flow you can take without shrinking that wealth.</li>
<li><strong>Profit is unexpected wealth growth.</strong> A newly created rent capitalizes into the asset price at once, rewarding the current owner while a later buyer earns only the normal return.</li>
</ul>
</section>
</div>