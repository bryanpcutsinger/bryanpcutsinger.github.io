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
word_budget: 4508
  # word_budget 3600 -> 3661 (+61): For Further Reading section added 2026-07-22
  # word_budget 3661 -> 4051 (+390): midpoint-formula pass 2026-07-25 (instructor-directed) — formula display + worked example + table recompute prose + ue8-1 figure-intuition paragraph (same-session feedback)
  # word_budget 4051 -> 3959 (-92): ue8-3 rectangular-hyperbola figure cut 2026-07-26 (instructor) — figcaption words removed; headroom preserved
  # word_budget 3959 -> 4240 (+281): UE 8.4A/B faithful-rebuild pass 2026-07-26 (instructor: "don't worry so much about hard caps... get the content right") — gas-stocks prose expansion around the shifts figure; instructor may revisit length later
  # word_budget 4240 -> 4201 (-39): shifts figure made static 2026-07-26 (instructor) — figcaption shortened (no interaction/fallback text); headroom preserved
  # word_budget 4201 -> 4438 (+237): income-elasticity section added 2026-07-26 (instructor-directed; length caveat still standing) — new H2 lead-in to the substitution/wealth section per UE Ch 8's own order
  # word_budget 4438 -> 4582 (+144): fan-figure walkthrough paragraph added 2026-07-26 (instructor-directed) — gasoline P1->P2 reading of UE Fig 8.5 in the body; figcaption X->Q relabel (same pass relabeled the widget + static to Q and fixed the Long Run label overlap)
  # word_budget 4582 -> 4587 (+5): fan figcaption lead reworded 2026-07-26 (instructor) — "the longer you wait" implied waiting causes elasticity; now "the longer a price change has been in effect" per UE 8.5's own framing
  # word_budget 4587 -> 4626 (+39): ep2-4 section-alignment pass 2026-07-26 (instructor ruled keep standalone) — echo sentence added tying the MR figure to the earlier elasticity line (same picture, seller's question)
  # word_budget 4626 -> 4734 (+108): ep2-11 redesign 2026-07-26 (instructor) — walkthrough paragraph added (figure now explained in prose) + figcaption rewritten to the two-scenario wealth-vs-substitution framing
  # word_budget 4734 -> 4508 (-226): 2026-08-07 rigor/sequence review — price-elasticity sign convention repaired; later-topic previews compressed and subordinated; 52-word headroom preserved
status: approved        # scope-reduction R4 2026-07-21 (word_budget applied); E&P integration M6 done-gate 2026-07-20; prior approval 2026-07-01
audience: students
note: "Self-contained — assumes no access to the textbooks. Source-of-truth for the session-4 deck; section headers are claims that map to slide titles. Verbal-marginal throughout: no indifference curves, no measured surplus triangles; the ONE sanctioned piece of algebra is the midpoint elasticity formula (instructor-directed 2026-07-25). Follows the session-3 demand post and precedes gains from exchange in session 5; a short foundational intro re-establishes the downward-sloping demand curve and marginal worth so this post stands on its own."
# brief: ../t03-demand-consumer-behavior/brief.md
---

# Elasticity and the Applications of Demand

The previous post established the machinery this one puts to work. The *first law of demand* says that at a higher price people buy a smaller quantity of a good, and at a lower price a larger one, holding everything else the same. Plotted with price up the vertical axis and quantity along the horizontal, that fixed demand schedule slopes downward to the right. Why does it slope down? Because of *marginal personal worth*: the most you would pay for one more unit falls the more you already have, so each additional unit is worth less than the one before, and the curve that plots worth against quantity tilts downward. That diminishing worth is the engine under the whole law.

None of this assumes buyers carry a numerical schedule in their heads or do arithmetic at the register; the law describes how people behave when their options change, not what they consciously think. What the first law does not tell us is how much quantity moves when price changes, what that does to a seller's revenue, why time changes the answer, or why the same dollar charge can send the better grade of a good to the far side of the country. Those are this post's questions.

<aside class="econ-callout econ-objectives">
<p class="econ-callout__label">Learning objectives</p>
<p>By the end of this post you should be able to:</p>
<ul>
<li>Define price elasticity of demand as the magnitude of the percentage change in quantity demanded divided by the percentage change in price, calculate it between two points with the midpoint formula, tell elastic from inelastic demand, explain why elasticity varies along a straight-line curve rather than equaling its slope, and use it to predict what a price change does to a seller's total revenue.</li>
<li>State the second law of demand and use the fan of demand curves to explain why demand grows more elastic the longer people have to adjust.</li>
<li>Explain why a good's real price is its price relative to other goods, so its dollar price can rise while its relative price falls, and apply the Alchian and Allen theorem that adding the same charge to two grades makes the higher grade relatively cheaper wherever it lands.</li>
</ul>
</aside>

**Figure focus.** Required: elasticity along a line; supply shift versus demand shift. Others are references unless assigned.

## Elasticity Measures How Sharply Quantity Responds to Price

The first law tells us which way quantity moves when price changes, not by how much. For that we need *elasticity*.

<aside class="econ-callout econ-def">
<p class="econ-callout__label">Definition</p>
<p>Price elasticity of demand is the absolute value of the percentage change in quantity demanded divided by the percentage change in price. We therefore report it as a nonnegative magnitude.</p>
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
<p style="margin:0 0 1.1em; white-space:nowrap;">elasticity&nbsp;<em>e</em>&nbsp;=&nbsp;&#124;<span style="display:inline-block; vertical-align:middle; text-align:center;"><span style="display:block; padding:0 .45em .12em; border-bottom:1.5px solid currentColor;">percentage change in quantity demanded</span><span style="display:block; padding:.12em .45em 0;">percentage change in price</span></span>&#124;</p>
<p style="margin:0; white-space:nowrap;">%&#916;Q&nbsp;=&nbsp;<span style="display:inline-block; vertical-align:middle; text-align:center;"><span style="display:block; padding:0 .45em .12em; border-bottom:1.5px solid currentColor;">Q<sub>2</sub>&nbsp;&#8722;&nbsp;Q<sub>1</sub></span><span style="display:block; padding:.12em .45em 0;">(Q<sub>1</sub>&nbsp;+&nbsp;Q<sub>2</sub>)&nbsp;&#247;&nbsp;2</span></span>&nbsp;&#215;&nbsp;100&emsp;&emsp;%&#916;P&nbsp;=&nbsp;<span style="display:inline-block; vertical-align:middle; text-align:center;"><span style="display:block; padding:0 .45em .12em; border-bottom:1.5px solid currentColor;">P<sub>2</sub>&nbsp;&#8722;&nbsp;P<sub>1</sub></span><span style="display:block; padding:.12em .45em 0;">(P<sub>1</sub>&nbsp;+&nbsp;P<sub>2</sub>)&nbsp;&#247;&nbsp;2</span></span>&nbsp;&#215;&nbsp;100</p>
</div>

Here (Q&#8321;, P&#8321;) and (Q&#8322;, P&#8322;) are the two points you are comparing. Because price and quantity demanded move in opposite directions along a demand curve, the raw ratio is negative; the absolute-value bars turn it into the nonnegative magnitude we report. Try it on one step: price falls from $6 to $5 while quantity rises from 5 to 6. The quantity change, measured against the midpoint quantity of 5.5, is 18.2 percent; the price change, measured against the midpoint price of $5.50, is &#8722;18.2 percent. So e = |18.2/&#8722;18.2| = 1: unit elastic, exactly.

Here is a demand schedule with the elasticity between successive points computed by the midpoint formula, plus the market value (price times quantity) at each.

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

Two features jump out. First, elasticity changes as you move along a straight-line curve: large at high prices near the top, small at low prices near the bottom, passing through one right at the step where the market-value column flattens at its peak. So for this straight-line schedule, you cannot speak of "the" elasticity as a single number; you have to say at what price. Specially shaped constant-elasticity curves do exist, but constancy is not a property of demand curves in general.

Why does the same straight line give different elasticities? Because a percentage depends on its base. The figure below lets you watch the bases do the work. The two dots mark a one-unit step on the line: between them, price falls by $1 and quantity rises by 1. The readout underneath runs the midpoint formula on that step, just as we did above. Near the top of the line, a $1 cut is a small percentage of a high price, while one more unit is a large percentage of a small quantity, so the ratio is large. Near the bottom, the same $1 and the same one unit are set against a low price and a large quantity, so the ratio is small. The step itself never changes; only the bases the percentages are measured against do.

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

So you can never say in the abstract whether a seller should raise or lower price to make more money; the answer depends entirely on where the seller sits on the demand curve. Carry one point forward: a seller raising revenue by exploiting inelastic demand is not the same as buyers being better off.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A transit agency finds that riders barely change their trips when the fare moves, so its demand is inelastic. To collect more revenue, should it raise the fare or cut it? Walk through the revenue rule to justify your answer.</p>
</aside>

One caution: elasticity measures movements along a demand schedule, not shifts in the schedule. Every price change we have discussed so far was a slide along one fixed curve. But prices also change because the whole schedule moves, and when that happens, the old curve's elasticity cannot tell you what will happen to quantity or to the seller's revenue.

Gasoline makes the difference concrete, with one supply idea previewed before we study supply formally. Suppose the quantity available for sale this week is fixed regardless of the week's price. The vertical line in the figure records that fixed quantity. Where it crosses demand is the *market-clearing price*: the price at which buyers want exactly the amount available. Low stocks imply a high clearing price; moderate stocks, a middle price; plentiful stocks, a low price. Across these cases demand never moves. A change in the available stock moves the vertical supply line and selects a new point on the same demand curve, precisely the movement elasticity describes.

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

The neat way to picture the buildup: any single demand curve is one member of a *fan* of curves radiating from the original price-quantity point. The short-run curve through that point is steep, because little adjustment has happened yet; the long-run curve through the same point is flatter, because more adjustment has accumulated. Normally, flatness alone does not identify elasticity. This comparison is informative because it is tightly controlled: every curve passes through the same starting point and is tested with the same price change. The curve that produces the larger percentage change in quantity is more elastic; in this particular fan, that curve is also flatter.

To read the figure below, start at the point where every curve meets: gasoline sells at the price P₁, and drivers buy the quantity Q. Then the price falls to P₂. In the first weeks the steep curve 1 is the one that applies, so quantity moves only from Q out to Q₁. As the months pass, the operative curve flattens through 2, 3, and 4, and the quantity bought at that same price P₂ climbs to Q₂, then Q₃, then Q₄. Once every adjustment has run its course, the flattest curve L takes over, and purchases settle at Qₗ, far to the right of where they began. The price fell once, but the response to it keeps building for years. That is what it means for demand to grow more elastic with time.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03-elasticity-fan-interactive.html" title="Drag the time slider from short run to long run to sweep the active demand curve from steepest to flattest and watch the quantity response to the price fall grow." loading="lazy" style="width:100%; max-width:520px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03-elasticity-fan-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03-elasticity-fan.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Demand becomes more elastic the longer a price change has been in effect.</strong> One demand curve is a snapshot; the full picture is a fan of curves through one starting point, each flatter for a longer adjustment period, so the same price cut draws out a bigger quantity response over time. Drag the slider from short run to long run to sweep the active curve and see the quantity at the new price move from Q₁ out to the much larger Qₗ. If the frame does not load, <a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03-elasticity-fan-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03-elasticity-fan.svg">view the static figure</a>.</figcaption>
</figure>

## Two Short Previews Connect These Tools to Later Topics

The post's three main objectives remain elasticity, adjustment over time, and relative price. The next two ideas are short previews: they preserve connections we will develop later, but they are not additional main objectives for this session.

### A Seller Faces a Demand of Its Own

There is the *individual's demand*, one buyer's schedule, like the price-quantity schedule we started with. *Market demand* adds all buyers' quantities at each price. A third schedule, the *demand facing one seller*, shows how much that seller can sell at each price it might charge.

The third schedule previews our later study of firms with power over price. To sell one more unit, such a seller usually must cut the price on every unit, including those it was already selling. So the extra revenue from that unit, its marginal revenue, is less than the price received. The figure records the gain on the new unit and the loss on the earlier ones; for now, keep only that accounting idea.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ep2-4-marginal-revenue-interactive.html" title="Interactive marginal-revenue figure: drag the quantity handle to sell one more unit and watch the gain rectangle (the new unit at the new price) fight the loss rectangle (the price cut on every earlier unit)." loading="lazy" style="width:100%; max-width:520px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ep2-4-marginal-revenue-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ep2-4-marginal-revenue.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Selling one more unit brings in its price but gives up revenue on every unit already sold.</strong> When a seller must lower its price to sell one more unit, the lower price applies to every unit, not just the extra one. So the marginal revenue from that unit is the price it fetches (the gain rectangle) minus the revenue given up on the units already being sold (the loss rectangle). Selling the second unit at $9 brings in $9 but costs $1 of revenue on the first unit, so marginal revenue is $8, below the $9 price. Drag the handle to sell one more unit and watch the two rectangles, and see marginal revenue fall further, and eventually turn negative, as the price cut spreads over more and more units. If the frame does not load, <a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ep2-4-marginal-revenue-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ep2-4-marginal-revenue.svg">view the static figure</a>.</figcaption>
</figure>

### Income and Ownership Can Shift Demand

A change in a good's own price moves buyers along a demand curve; a change in income can shift the curve. Modern principles courses call a good *normal* when higher income raises its demand and *inferior* when higher income lowers its demand. Among normal goods, a positive income elasticity above one is often called a *luxury*, while one between zero and one is a *necessity*. Alchian and Allen use different labels: their “superior” means more-than-proportional growth and their “inferior” means less-than-proportional growth, even when demand still rises. We will use the modern terminology to avoid confusing a necessity with an inferior good. Unlike own-price elasticity, income elasticity retains its sign because that sign tells us which category the good occupies; this is a preview, not a calculation target for this session.

Income is one force that moves the whole curve. A price change can do so too when the buyer owns a large stock of the good whose price changes.

When a good's price changes, two forces can act on an owner. We can separate them in words without adding a new consumer-choice apparatus.

The first is the *substitution effect*. When a good gets more expensive relative to others, you lean away from it toward the now-relatively-cheaper alternatives. This force always pushes the same way: a higher own-price means less of the good. The second is the *wealth effect*, and its direction depends on your situation. A higher price for something you buy makes you a bit poorer in real terms, since your money buys less, which usually nudges you toward a little less of most goods. But here is the twist: if you own a lot of the good whose price rose, the higher price makes you richer, and that can push you toward consuming more.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Substitution Effect</dt><dd>The move away from a good toward now cheaper alternatives when its relative price rises.</dd></div>
<div><dt>Wealth Effect</dt><dd>The change in how much you buy that comes from a price change making you richer or poorer in real terms.</dd></div>
</dl>
</aside>

Suppose you own a dairy farm and the price of milk rises. Substitution pushes you toward drinking less because milk is now dearer relative to other drinks. Ownership makes you wealthier and can push toward more. Which force wins is ambiguous for a large owner. For an ordinary shopper without a large stock, the ownership channel is absent and the usual downward-sloping demand relationship remains.

In the figure, the higher milk price moves the farmer along a curve while the added wealth shifts her curve right. Use the buttons to compare a large shift, where the wealth effect wins and Q₂ exceeds Q₁, with a small shift, where substitution wins and Q₂ falls below Q₁. Every curve still slopes down; the unusual result comes from a shift, not from an upward-sloping demand curve.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ep2-11-endowment-effect-interactive.html" title="Interactive wealth-vs-substitution figure: two buttons choose which effect wins. When the wealth effect wins, the price rise shifts the owner's demand curve far right and quantity rises; when the substitution effect wins, the shift is small and quantity falls." loading="lazy" style="width:100%; max-width:520px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ep2-11-endowment-effect-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ep2-11-endowment-effect.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Which effect wins decides whether the owner consumes more or less at the higher price.</strong> In both scenarios the price of a good the buyer owns rises from P₁ to P₂, and because the higher price makes her wealthier, her whole demand curve shifts right from D₁ to D₂; when the owner holds a large stock, this owner's version of the wealth effect is called the endowment effect. If the wealth effect outweighs the substitution effect, the shift is large and quantity rises from Q₁ to a larger Q₂. If the substitution effect outweighs the wealth effect, the shift is small and quantity falls to a Q₂ below Q₁. Both curves slope down in both scenarios: a shift of demand, not an upward-sloping curve. If the frame does not load, <a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ep2-11-endowment-effect-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03b-ep2-11-endowment-effect.svg">view the static figure</a> (the wealth-effect-wins case).</figcaption>
</figure>

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>You own a large vineyard and the price of grapes jumps. Which way does the substitution effect push your own grape buying, and which way does the wealth effect push it? Why is the net direction unclear for you but not for an ordinary shopper?</p>
</aside>

For someone holding a large stock of the good whose price changes, the wealth effect is the nearest thing to a genuine exception to the law of demand, and even it is a shift of the curve, not an upward-sloping one. With those previews parked for later, return now to the post's main thread.

## The Real Price Is the Relative Price

A good's dollar tag does not by itself govern your choice. What matters is its *relative price*: how much of other goods you give up to get it. As the previous post showed, one dollar price can rise while a good becomes cheaper relative to another. Suppose candy rises from $4 to $5 while ice cream rises from $2 to $3. Candy costs more dollars, but less ice cream than before because ice cream's price rose by a larger percentage. Always ask, “relative to what?”

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Relative Price</dt><dd>How much of other goods you give up to get one unit of a good.</dd></div>
</dl>
</aside>

The relative-price idea does real work in a memorably named application: the "shipping the good apples out" theorem, due to Alchian and Allen.

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
<li><strong>Elasticity decides how a price change affects revenue.</strong> It is the absolute value of the percentage change in quantity demanded divided by the percentage change in price, calculated between two points with the midpoint formula; it varies along a straight-line curve rather than equaling the slope. Where demand is elastic a price cut raises total revenue, while where it is inelastic a price cut lowers it, with revenue peaking at unit elasticity.</li>
<li><strong>Demand grows more elastic the longer people have to adjust.</strong> The second law says the full response builds as people find substitutes and replace equipment, shown by the fan of curves flattening from short run to long run.</li>
<li><strong>The real price is the relative price.</strong> What you give up in other goods, not the dollar figure, governs your choice, so a good's dollar price can rise while its relative price falls, and adding the same fixed charge to two grades of a good shrinks the ratio between them, making the finer grade relatively cheaper wherever it lands.</li>
</ul>
</section>
</div>