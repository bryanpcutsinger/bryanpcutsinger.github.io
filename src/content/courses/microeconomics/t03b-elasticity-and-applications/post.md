---
title: "Elasticity and the Applications of Demand"
topic: "T3 — Demand and Consumer Behavior (Part B)"
course: "Principles of Microeconomics (FAU)"
sessions: ["Fall 2026 — content session 4 (Thu 9/3)"]
order: 160   # slug-derived 302 would sort AFTER t02 (200); keeps t03b before t02 — reorder 2026-07-22
ue_anchors: ["UE 8", "UE 9"]
be_anchors: []
ep_anchors: ["E&P Fig 2-4 (ch. 2, p. 23) — marginal revenue as gain minus loss on inframarginal units", "E&P Fig 2-11 (ch. 2, p. 35) — endowment vs substitution effect (relocated from t03a)"]
word_target: "2800-3600"
word_budget: 4438
  # word_budget 3600 -> 3661 (+61): For Further Reading section added 2026-07-22
  # word_budget 3661 -> 4051 (+390): midpoint-formula pass 2026-07-25 (instructor-directed) — formula display + worked example + table recompute prose + ue8-1 figure-intuition paragraph (same-session feedback)
  # word_budget 4051 -> 3959 (-92): ue8-3 rectangular-hyperbola figure cut 2026-07-26 (instructor) — figcaption words removed; headroom preserved
  # word_budget 3959 -> 4240 (+281): UE 8.4A/B faithful-rebuild pass 2026-07-26 (instructor: "don't worry so much about hard caps... get the content right") — gas-stocks prose expansion around the shifts figure; instructor may revisit length later
  # word_budget 4240 -> 4201 (-39): shifts figure made static 2026-07-26 (instructor) — figcaption shortened (no interaction/fallback text); headroom preserved
  # word_budget 4201 -> 4438 (+237): income-elasticity section added 2026-07-26 (instructor-directed; length caveat still standing) — new H2 lead-in to the substitution/wealth section per UE Ch 8's own order
status: approved        # scope-reduction R4 2026-07-21 (word_budget applied); E&P integration M6 done-gate 2026-07-20; prior approval 2026-07-01
audience: students
note: "Self-contained — assumes no access to the textbooks. Source-of-truth for the session-4 deck; section headers are claims that map to slide titles. Verbal-marginal throughout: no indifference curves, no measured surplus triangles; the ONE sanctioned piece of algebra is the midpoint elasticity formula (instructor-directed 2026-07-25). Follows the session-3 demand post and precedes gains from exchange in session 5; a short foundational intro re-establishes the downward-sloping demand curve and marginal worth so this post stands on its own."
# brief: ../t03-demand-consumer-behavior/brief.md
---

# Elasticity and the Applications of Demand

The previous post established the machinery this one puts to work. The *first law of demand* says that at a higher price people buy a smaller quantity of a good, and at a lower price a larger one, holding everything else the same. Plotted with price up the vertical axis and quantity along the horizontal, that traces a demand curve sloping downward to the right and never upward. Why does it slope down? Because of *marginal personal worth*: the most you would pay for one more unit falls as you already have more, so each additional unit is worth less than the one before, and the curve that plots worth against quantity tilts downward. That diminishing worth is the engine under the whole law.

None of this assumes buyers carry a numerical schedule in their heads or do arithmetic at the register; the law describes how people behave when their options change, not what they consciously think. What the first law does not tell us is how much quantity moves when price changes, what that does to a seller's revenue, why time changes the answer, or why the same dollar charge can send the better grade of a good to the far side of the country. Those are this post's questions.

<aside class="econ-callout econ-objectives">
<p class="econ-callout__label">Learning objectives</p>
<p>By the end of this post you should be able to:</p>
<ul>
<li>Define elasticity as the percentage change in quantity demanded divided by the percentage change in price, calculate it between two points with the midpoint formula, tell elastic from inelastic demand, explain why elasticity varies along a curve rather than equaling its slope, and use it to predict what a price change does to a seller's total revenue.</li>
<li>State the second law of demand and use the fan of demand curves to explain why demand grows more elastic the longer people have to adjust.</li>
<li>Explain why a good's real price is its price relative to other goods, so its dollar price can rise while its relative price falls, and apply the Alchian and Allen theorem that adding the same charge to two grades makes the higher grade relatively cheaper wherever it lands.</li>
</ul>
</aside>

**Figure focus.** Required: elasticity along a line; supply shift versus demand shift. Others are references unless assigned.

## Elasticity Measures How Sharply Quantity Responds to Price

The first law tells us which way quantity moves when price changes, not by how much. For that we need *elasticity*.

<aside class="econ-callout econ-def">
<p class="econ-callout__label">Definition</p>
<p>Elasticity is the percentage change in quantity demanded divided by the percentage change in price.</p>
</aside>

If a 1 percent rise in price brings a 3 percent drop in quantity, elasticity is 3. When that ratio is greater than one, demand is *elastic*, meaning quantity is highly responsive; when it is less than one, demand is *inelastic*, meaning quantity barely budges.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Elastic</dt><dd>Quantity responds more than proportionally to a price change, so elasticity is greater than one.</dd></div>
<div><dt>Inelastic</dt><dd>Quantity responds less than proportionally to a price change, so elasticity is less than one.</dd></div>
</dl>
</aside>

Two wording traps are worth disarming now. First, elasticity is a ratio of *percentages*, not an absolute amount: "the percentage change in quantity for a one-cent change in price" is wrong twice over, since it should be a one-*percent* change in price, and a ratio of two percentages, never a per-penny figure. Second, elasticity measures movement along a curve, so "a 3 percent decrease in demand" is sloppy; it should be a 3 percent decrease in *quantity demanded*, not a shift of the whole curve.

One practical question remains before you can calculate anything: a percentage change measured from which base? A price cut from $10 to $9 is a 10 percent fall, but the same step run backward, from $9 up to $10, is an 11.1 percent rise. To keep the answer from depending on the direction of travel, measure each change against the *midpoint*, the average of the two endpoints. That convention is the *midpoint formula*, and it is the version to use in this course whenever you calculate an elasticity between two points on a demand curve.

<div class="econ-equation" style="margin:1.4em auto; text-align:center; overflow-x:auto;">
<p style="margin:0 0 1.1em; white-space:nowrap;">elasticity&nbsp;<em>e</em>&nbsp;=&nbsp;<span style="display:inline-block; vertical-align:middle; text-align:center;"><span style="display:block; padding:0 .45em .12em; border-bottom:1.5px solid currentColor;">percentage change in quantity demanded</span><span style="display:block; padding:.12em .45em 0;">percentage change in price</span></span></p>
<p style="margin:0; white-space:nowrap;">%&#916;Q&nbsp;=&nbsp;<span style="display:inline-block; vertical-align:middle; text-align:center;"><span style="display:block; padding:0 .45em .12em; border-bottom:1.5px solid currentColor;">Q<sub>2</sub>&nbsp;&#8722;&nbsp;Q<sub>1</sub></span><span style="display:block; padding:.12em .45em 0;">(Q<sub>1</sub>&nbsp;+&nbsp;Q<sub>2</sub>)&nbsp;&#247;&nbsp;2</span></span>&nbsp;&#215;&nbsp;100&emsp;&emsp;%&#916;P&nbsp;=&nbsp;<span style="display:inline-block; vertical-align:middle; text-align:center;"><span style="display:block; padding:0 .45em .12em; border-bottom:1.5px solid currentColor;">P<sub>2</sub>&nbsp;&#8722;&nbsp;P<sub>1</sub></span><span style="display:block; padding:.12em .45em 0;">(P<sub>1</sub>&nbsp;+&nbsp;P<sub>2</sub>)&nbsp;&#247;&nbsp;2</span></span>&nbsp;&#215;&nbsp;100</p>
</div>

Here (Q&#8321;, P&#8321;) and (Q&#8322;, P&#8322;) are the two points you are comparing, and the sign is ignored as usual. Try it on one step: price falls from $6 to $5 while quantity rises from 5 to 6. The quantity change of 1, measured against the midpoint quantity of 5.5, is 18.2 percent; the price change of $1, measured against the midpoint price of $5.50, is also 18.2 percent. So e = 18.2/18.2 = 1: unit elastic, exactly.

Here is a demand schedule with the elasticity between successive points worked out with the midpoint formula, plus the market value (price times quantity) at each.

| Price | Quantity | Market value | Going down one row: % price cut (midpoint) | % quantity rise (midpoint) | Elasticity |
|---|---|---|---|---|---|
| $10 | 1 | $10 | — | — | — |
| $9 | 2 | $18 | 10.5% | 66.7% | 6.3 |
| $8 | 3 | $24 | 11.8% | 40% | 3.4 |
| $7 | 4 | $28 | 13.3% | 28.6% | 2.1 |
| $6 | 5 | $30 | 15.4% | 22.2% | 1.4 |
| $5 | 6 | $30 | 18.2% | 18.2% | 1.0 |
| $4 | 7 | $28 | 22.2% | 15.4% | 0.69 |
| $3 | 8 | $24 | 28.6% | 13.3% | 0.47 |
| $2 | 9 | $18 | 40% | 11.8% | 0.29 |
| $1 | 10 | $10 | 66.7% | 10.5% | 0.16 |

Two features jump out. First, elasticity changes as you move along a straight-line curve: large at high prices near the top, small at low prices near the bottom, passing through one right at the step where the market-value column flattens at its peak. So you cannot speak of "the" elasticity of a demand curve as a single number; you have to say at what price.

Why does the same straight line give different elasticities? Because a percentage depends on its base. The figure below lets you watch this happen. The two dots mark a one-unit step on the line: between them, price falls by $1 and quantity rises by 1. The readout underneath runs the midpoint formula on that step, just as we did above. Near the top of the line, a $1 cut is a small percentage of a high price, while one more unit is a large percentage of a small quantity, so the ratio is large. Near the bottom, the same $1 and the same one unit are set against a low price and a large quantity, so the ratio is small. The step itself never changes; only the bases the percentages are measured against do.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ue8-1-interactive.html" title="Drag the point along the straight demand line and watch the midpoint-formula elasticity change: elastic near the top, unit-elastic where the step straddles the midpoint, inelastic near the bottom." loading="lazy" style="width:100%; max-width:520px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ue8-1-interactive.html">Open the interactive figure directly</a>.</p></iframe>
<figcaption><strong>Same line, different responsiveness at every price.</strong> On a single straight demand curve, elasticity is not constant: it is large near the top (a price cut raises revenue), passes through one near the middle, and is small near the bottom, which is why you must always say "elastic at what price." Drag the point (or tap and use the arrow keys) to slide a one-unit price step along the line: the readout recalculates the midpoint-formula elasticity between the two marked points at every position, so you can watch the percentages, the elasticity, and the revenue verdict all change together. If the frame does not load, <a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ue8-1-interactive.html">open the interactive figure directly</a>.</figcaption>
</figure>

Second, and this is the most common student error, elasticity is not the slope: two curves can share the very same slope yet differ in elasticity, and two curves with different slopes can share an elasticity at some price, so a flat-looking curve is not automatically the more elastic one. ("Inelastic" does not mean quantity fails to respond at all; that extreme is zero elasticity. It just means the response is less than proportional.) In the figure below, the two demand curves are exactly parallel, yet the readout, running the same midpoint arithmetic on one shared price step, gives them different elasticities at every price; at the opening price, one is elastic while the other is inelastic. The percentages, not the steepness, decide.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ue8-2-interactive.html" title="Two parallel demand curves compared: drag the $1 price step and watch the midpoint-formula elasticity differ at every price even though the slopes are identical" loading="lazy" style="width:100%; max-width:480px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ue8-2-interactive.html">Open the interactive figure directly</a>.</p></iframe>
<figcaption><strong>Elasticity is not slope.</strong> These two demand curves are exactly parallel, yet they do not share an elasticity at any common price. The readout runs the midpoint formula on the same $1 price step for both: the quantity responses are identical, but curve 2's response is measured against a bigger base quantity, so its percentage change is smaller and its elasticity lower (at the opening price, e = 1.33 versus e = 0.67, one elastic and one inelastic). Drag the price step up or down the axis (or use the arrow keys) to see that the verdict holds at every price. A flat-looking curve is not automatically the more elastic one, and an identical slope does not mean an identical elasticity. If the frame does not load, <a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ue8-2-interactive.html">open the interactive figure directly</a>.</figcaption>
</figure>

## Whether a Price Cut Helps a Seller Depends on Elasticity

Elasticity matters because it decides what happens to a seller's *total revenue* when the price changes. You can read the rule straight off the market-value column above.

When demand is elastic (greater than one), quantity responds more than proportionally, so a price cut raises total revenue and a price rise lowers it. When demand is inelastic (less than one), quantity barely responds, so a price cut lowers total revenue and a price rise raises it. At unit elasticity (equal to one), revenue is unchanged either way; it sits at its peak, the flat $30 stretch around the middle of the table.

The whole thing fits in a small grid.

| | Demand elastic (e > 1) | Unit elastic (e = 1) | Demand inelastic (e < 1) |
|---|---|---|---|
| **Price rises** | Total revenue falls | Unchanged | Total revenue rises |
| **Price falls** | Total revenue rises | Unchanged | Total revenue falls |

This is why you can never say in the abstract whether a seller should raise or lower price to make more money; it depends entirely on where the seller sits on the demand curve. It also lands on a point worth carrying forward: a seller raising revenue by exploiting inelastic demand is not the same as buyers being better off.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A transit agency finds that riders barely change their trips when the fare moves, so its demand is inelastic. To collect more revenue, should it raise the fare or cut it? Walk through the revenue rule to justify your answer.</p>
</aside>

One caution matters enough to spell out: elasticity is a measure of movements along a demand schedule, not of shifts in the schedule. Every price change we have discussed so far was a slide along one fixed curve. But prices also change because the whole schedule moves, and when that happens, the old curve's elasticity cannot tell you what will happen to quantity or to the seller's revenue.

Gasoline makes the difference concrete. The stock of gasoline available in a given week is whatever it is; buyers cannot change it, so supply is a vertical line at that week's quantity. When stocks are low, the market clears at a high price. When stocks are moderate, it clears at a middle price, and when stocks are plentiful, at a low one. Through all three episodes the demand curve never moves: the price changes because supply changed, and each new price is simply a different point on the same demand curve. That is the kind of price change elasticity is built for, since it tells you exactly how sharply quantity adjusts as the market slides along the curve.

Now run the other experiment. Hold the week's stocks fixed and let demand itself rise, say a holiday weekend that puts more drivers on the road. The whole demand curve shifts to a higher one, and the price rises with no change in quantity at all: the market moves from where the old curve crossed the fixed supply to where the new curve crosses it. Nobody slid along a demand curve, so no elasticity of demand describes this price change.

<figure class="econ-figure" style="margin:1.5em 0;">
<img src="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03-elasticity-shifts-web.svg" alt="Two panels. Left panel, supply changes with demand unchanged: one straight demand line crossed by three vertical supply lines for low, moderate, and high gas stocks, with dotted price lines showing the price highest under low stocks and lowest under high stocks, and dashed arrows running alongside the demand line. Right panel, demand changes with supply unchanged: one vertical supply line crossed by a lower and a higher demand line, with the price rising from the lower crossing to the higher one at the same quantity." style="width:100%; max-width:760px; display:block; margin:0 auto; background:#f7f4ef; border:1px solid #e3ddd3; border-radius:4px; padding:12px; box-sizing:border-box;" />
<figcaption><strong>A price change from a supply shift is not the same as one from a demand shift.</strong> In the left panel, supply changes and demand does not: each stock level is a vertical supply line, and the price slides from its highest level under low stocks to its lowest under high stocks, always along the same demand line, which is why the dashed arrows run alongside the curve. In the right panel, stocks are fixed and demand itself shifts from the lower line to the higher one: the price rises at the very same quantity, and no movement along any curve occurs.</figcaption>
</figure>

So always ask first whether you are sliding along a curve or watching one move. A price change from a supply shift traces out the demand curve; a price change from a demand shift replaces it.

## Demand Becomes More Elastic the Longer People Have to Adjust

There is a *second law of demand*, and it concerns time: demand is more elastic the longer the interval since a price change. People need time to find substitutes, rearrange their lives, and replace equipment, so the full response to a price change builds up gradually.

Gasoline is the standard case. Double the price overnight and consumption falls only a little at first; people still have the same cars and the same commutes. But over a year or three, they buy more efficient cars, move closer to work, carpool, and carmakers redesign their fleets. So consumption falls more after three years than after one. A common objection runs, "a 10 percent gas price rise won't change how much I drive tomorrow, so the law of demand is bogus." It is not. The law never promised an instant or universal response. Some people respond right away, more respond over time, and the market as a whole responds because some people do, even if you personally do not.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>Someone insists a 10 percent gas-price rise will not change how much he drives next week, so the law of demand must be broken. Where is the flaw in that reasoning, and what would you expect his driving to look like after three years?</p>
</aside>

The neat way to picture this: any single demand curve is one member of a *fan* of curves radiating from the original price-quantity point. The short-run curve through that point is steep, because little adjustment has happened yet; the long-run curve through the same point is flatter, because more adjustment has accumulated. That fan is the visual signature of the second law.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03-elasticity-fan-interactive.html" title="Drag the time slider from short run to long run to sweep the active demand curve from steepest to flattest and watch the quantity response to the price fall grow." loading="lazy" style="width:100%; max-width:520px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03-elasticity-fan-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03-elasticity-fan.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Demand grows more elastic the longer you wait.</strong> One demand curve is a snapshot; the full picture is a fan of curves through one starting point, each flatter for a longer adjustment period, so the same price cut draws out a bigger quantity response over time. Drag the slider from short run to long run to sweep the active curve and see the quantity at the new price move from X₁ out to the much larger X_L. If the frame does not load, <a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03-elasticity-fan-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03-elasticity-fan.svg">view the static figure</a>.</figcaption>
</figure>

## Three Different Demands, and Why the Difference Matters

We have to keep three demands straight, because they answer different questions. There is the *individual's demand*, one buyer's schedule, like the price-quantity schedule we started with. There is the *market demand*, the sum of individual demands at each price. And there is the *demand facing a single seller*, how much that seller can sell at each price it might charge.

The last is the subtlest, and it bridges to a later topic. When such a seller wants to sell one more unit, it usually has to lower its price, and that lower price applies to all the units it sells, not just the extra one. So the extra revenue from that unit, its marginal revenue, is less than the price received. Later, when we study firms with real power over their price, this seller-facing demand is the curve the firm chooses a point on, weighing that gap between marginal revenue and price.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ep2-4-marginal-revenue-interactive.html" title="Interactive marginal-revenue figure: drag the quantity handle to sell one more unit and watch the gain rectangle (the new unit at the new price) fight the loss rectangle (the price cut on every earlier unit)." loading="lazy" style="width:100%; max-width:480px; aspect-ratio:1/1; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ep2-4-marginal-revenue-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ep2-4-marginal-revenue.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Selling one more unit brings in its price but gives up revenue on every unit already sold.</strong> When a seller must lower its price to sell one more unit, the lower price applies to every unit, not just the extra one. So the marginal revenue from that unit is the price it fetches (the gain rectangle) minus the revenue given up on the units already being sold (the loss rectangle). Selling the second unit at $9 brings in $9 but costs $1 of revenue on the first unit, so marginal revenue is $8, below the $9 price. Drag the handle to sell one more unit and watch the two rectangles, and see marginal revenue fall further, and eventually turn negative, as the price cut spreads over more and more units. If the frame does not load, <a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ep2-4-marginal-revenue-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ep2-4-marginal-revenue.svg">view the static figure</a>.</figcaption>
</figure>

## Income Shifts Demand, and Income Elasticity Measures by How Much

A change in price moves buyers along a demand curve. A change in income moves the curve itself. For most goods, higher income raises demand, shifting the whole curve rightward roughly in proportion to the income gain; economists call these *normal* goods. Some goods respond more than proportionally, called *superior* goods, and some less than proportionally, called *inferior* goods. The same good can even switch categories as you climb: cheap wine may be a superior good at a low income, while at a higher income your wine spending moves to better bottles instead.

How much an income change moves demand is measured exactly the way we measured price responsiveness, with a ratio of percentage changes:

<div class="econ-equation" style="margin:1.4em auto; text-align:center; overflow-x:auto;">
<p style="margin:0; white-space:nowrap;">income elasticity of demand&nbsp;=&nbsp;<span style="display:inline-block; vertical-align:middle; text-align:center;"><span style="display:block; padding:0 .45em .12em; border-bottom:1.5px solid currentColor;">percentage change in quantity demanded</span><span style="display:block; padding:.12em .45em 0;">percentage change in income</span></span></p>
</div>

If a 10 percent rise in income raises the quantity demanded at each price by 20 percent, income elasticity is 2 over that range, the mark of a superior good. One refinement matters: which income? A raise you expect to keep changes what you buy; a one-time windfall barely does. What moves your demand is your expected, lasting income, not this month's lucky bonus.

Income is one force that moves the whole curve. The next question is stranger: sometimes a price change itself changes your wealth, moving the curve and your position on it at the same time.

## A Higher Price Pushes You Away, but If You Own a Lot It Also Makes You Richer

When a good's price changes, two distinct forces act on how much you buy, worth separating in words even though we will not draw the apparatus some textbooks use to split them.

The first is the *substitution effect*. When a good gets more expensive relative to others, you lean away from it toward the now-relatively-cheaper alternatives. This force always pushes the same way: a higher own-price means less of the good. The second is the *wealth effect*, and its direction depends on your situation. A higher price for something you buy makes you a bit poorer in real terms, since your money buys less, which usually nudges you toward a little less of most goods. But here is the twist: if you own a lot of the good whose price rose, the higher price makes you richer, and that can push you toward consuming more.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Substitution Effect</dt><dd>The move away from a good toward now cheaper alternatives when its relative price rises.</dd></div>
<div><dt>Wealth Effect</dt><dd>The change in how much you buy that comes from a price change making you richer or poorer in real terms.</dd></div>
</dl>
</aside>

The classic puzzle: you own a dairy farm and the price of milk rises. Do you drink more milk or less? Substitution says less, because milk is now dear relative to other drinks. But you are a big milk owner, so the higher price has made you wealthier, which pulls toward more. The net effect is genuinely ambiguous. For ordinary buyers, who do not own large stocks of the good, the substitution effect dominates and the wealth effect is too small to overturn the law, which is why demand curves reliably slope downward.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ep2-11-endowment-effect-interactive.html" title="Interactive endowment-effect figure: toggle between before and after a price rise on a good the consumer owns. The substitution effect moves her up the original demand curve; the endowment effect shifts the whole curve right, and here she ends up consuming more." loading="lazy" style="width:100%; max-width:480px; aspect-ratio:1/1; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ep2-11-endowment-effect-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ep2-11-endowment-effect.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>A price rise can leave the owner consuming more, yet demand still slopes down.</strong> A dairy farmer owns a great deal of milk, so a rise in the milk price does two things at once. The substitution effect nudges her up the original demand curve toward less milk, the ordinary law-of-demand response. But the higher price also makes her richer, the wealth effect from the section above, and because she owns so much of the good, that shifts her whole demand curve up and to the right; this owner's version of the wealth effect is called the endowment effect. Here the endowment effect wins, so at the higher price she actually consumes more, four units up to six. It looks like an exception to the law of demand, but notice both curves still slope down: this is a shift of demand, not a curve that slopes the wrong way. Toggle between before and after the price rise to see the substitution move and the endowment shift in turn. If the frame does not load, <a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ep2-11-endowment-effect-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ep2-11-endowment-effect.svg">view the static figure</a>.</figcaption>
</figure>

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>You own a large vineyard and the price of grapes jumps. Which way does the substitution effect push your own grape buying, and which way does the wealth effect push it? Why is the net direction unclear for you but not for an ordinary shopper?</p>
</aside>

This wealth effect, when someone holds a large stock of the good whose price changes, is the nearest thing to a genuine exception to the law of demand, and even it is a shift of the curve, not an upward-sloping one.

## The Real Price Is the Relative Price

A good's dollar tag is not the price that governs your choice. What matters is its *relative price*: how much of other goods you give up to get it. That distinction has a sharp consequence.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Relative Price</dt><dd>How much of other goods you give up to get one unit of a good.</dd></div>
</dl>
</aside>

A good's price can fall relative to others even when its dollar price rises. Suppose candy goes from $4 to $5 while ice cream goes from $2 to $3. In dollars, candy got more expensive. But ice cream rose by a larger *percentage*, so candy is now relatively cheaper than it was: in terms of ice cream forgone, a candy bar costs less than before. When you hear "the price of X went up," always ask "relative to what?"

The same lens dissolves a seeming paradox. Why do people wait in line for small, run-down apartments while bigger, better ones sit available with no waiting list? Not because anyone prefers cramped to spacious. The better apartments are *priced* higher, which reduces the quantity demanded for them and clears the line, while the cheap ones are priced low enough to draw a crowd. The preference for more and better is intact; the price did the work.

This relative-price idea does real work in a striking, memorably named application: the "shipping the good apples out" theorem, due to Alchian and Allen.

### Adding the Same Charge to Two Goods Sends the Better One Away

Here is the puzzle. Why do the regions that grow the best produce so often ship their finest grade away and keep the ordinary stuff, so that you find better Maine lobster in Chicago than in Maine? The answer is pure relative price. Suppose California grows choice grapes that sell there for $1.00 a pound and standard grapes for $0.50 a pound. Now ship both to New York at the same transport cost of $0.50 a pound, regardless of quality.

| | California price | + transport | = New York price |
|---|---|---|---|
| Choice grapes | $1.00 | $0.50 | $1.50 |
| Standard grapes | $0.50 | $0.50 | $1.00 |

Look at the relative prices. In California, a pound of choice costs two pounds of standard ($1.00 versus $0.50). In New York, a pound of choice costs only 1.5 pounds of standard ($1.50 versus $1.00). Adding the same dollar charge to both grades has made the choice grapes *relatively cheaper* in New York. By the first law of demand, New Yorkers therefore buy a larger fraction of choice grapes than Californians do, with no appeal to differences in "taste." The fancy stuff gets shipped out because the transport charge lowers its relative price wherever it lands.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A $6 steak and a $3 burger each get the same flat $3 shipping charge added. Work out the two new prices and the new ratio between them. Which cut becomes relatively cheaper at the destination, and why does the fixed charge do that?</p>
</aside>

The mechanism is general: adding a constant amount to a high price and a low price shrinks the ratio between them. High and low meat at $10 and $5 stand in a 2-to-1 ratio; add $10 to each, making $20 and $15, and the ratio falls to 1.33-to-1, so the high grade becomes relatively cheaper. The same arithmetic explains why a couple with infants is more likely to splurge on expensive theater than a childless couple: both face a fixed babysitter cost on top of the ticket, and that common charge shrinks the price ratio between the dear theater and the cheap movie. Whenever a fixed charge rides on top of two options of different quality, it tilts choices toward the higher-quality one.

With the demand tools now in hand, we turn next to exchange: why buyers and sellers can both gain from trading the same good.

## For Further Reading

Want to explore the source material? This lecture draws on the following chapters from two books by Armen A. Alchian and William R. Allen:

- *Universal Economics* (Liberty Fund, 2018): Ch. 8, “More Features of Demand”; Ch. 9, “Some Implications of the Laws of Demand”.
- *Exchange and Production*, 3rd ed. (Wadsworth, 1983): Ch. 2, “Consumer Demand”.

<div class="econ-review">
<section class="econ-review__section">
<h3>Key takeaways</h3>
<ul>
<li><strong>Elasticity decides how a price change affects revenue.</strong> It is the percentage change in quantity demanded divided by the percentage change in price, calculated between two points with the midpoint formula, it varies along a curve rather than equaling the slope, and where demand is elastic a price cut raises total revenue while where it is inelastic a price cut lowers it, with revenue peaking at unit elasticity.</li>
<li><strong>Demand grows more elastic the longer people have to adjust.</strong> The second law says the full response builds as people find substitutes and replace equipment, shown by the fan of curves flattening from short run to long run.</li>
<li><strong>The real price is the relative price.</strong> What you give up in other goods, not the dollar figure, governs your choice, so a good's dollar price can rise while its relative price falls, and adding the same fixed charge to two grades of a good shrinks the ratio between them, making the finer grade relatively cheaper wherever it lands.</li>
</ul>
</section>
</div>