---
title: "Market Power I: Price-Searchers and How They Price"
topic: "T8 — Market Power (Part A)"
course: "Principles of Microeconomics (FAU)"
sessions: ["Fall 2026 — content session 16 (Thu 10/15)"]
ue_anchors: ["UE 19", "UE 20 (Q1–Q6, Q8)", "UE 21", "UE 26 (Q2/Q5/Q6 cartels+stadium)"]
be_anchors: []
ep_anchors: ["E&P Fig 13-1 (p. 282) — monopoly rent / Ricardian rent / social loss", "E&P Fig 11-4 (p. 239) — lost consumer value", "E&P ch. 11 pp. 256–257 — Denver versus San Francisco rail rates as demand-based pricing constrained by water competition"]
word_target: "3200-3800"
word_budget: 3698
  # word_budget 3800 -> 3870 (+70): For Further Reading section added 2026-07-22
  # word_budget 3870 -> 3850 (-20): BE->lecture redraft 2026-07-23 (railroad-cartel + cruise/hotel excess-capacity moved to extensions; measured stripped 3838)
  # word_budget 3850 -> 3698 (-152): UE–E&P Wave-C verification 2026-08-10; prior 12-word headroom retained
status: approved        # one-per-lecture split; approved 2026-07-01 (M3 E&P figure embeds 2026-07-19; R4 scope-reduction pass 2026-07-21)
audience: students
note: "Self-contained — assumes no access to the textbooks. First of two market-power posts (session 16); session 17 covers antitrust and regulation."
# brief: ../t08-market-power/brief.md
---

# Market Power I: Price-Searchers and How They Price

So far we have mostly studied a seller who has no choice about price. A wheat farmer takes whatever the market offers; if he asks a penny more, buyers walk to the next stall, and he can sell all he wants without ever cutting it. That farmer is a *price-taker*. Most firms you actually deal with are not like that. The coffee shop on your corner sets its own prices and changes them. Each one searches for the price that serves it best.

That gap between searching for a price and simply taking one drives almost everything in this topic: why a sold-out concert can mean the promoter priced too low, why a student pays less than a business traveler for the very same seat, why a locked taxi medallion is worth a fortune, and why firms that agree to hold prices up keep secretly undercutting each other anyway. Part A builds the tool and turns it on how price-searchers actually price and on why cartels tend to fall apart on their own. Part B turns it on the policies meant to police market power: antitrust law and economic regulation.

<aside class="econ-callout econ-objectives">
<p class="econ-callout__label">Learning objectives</p>
<p>By the end of this post you should be able to:</p>
<ul>
<li>For a uniform-price seller facing downward-sloping demand, explain why marginal revenue lies below price after the first unit, use marginal revenue and marginal cost to find the profit-maximizing discrete output, and state the consumer-worth assumptions behind the unmade-unit benchmark.</li>
<li>Explain how actual and potential entry can discipline a seller, identify legal, technological, and strategic barriers that weaken it, and distinguish monopoly rent from innovation returns, risk compensation, and scarcity rent.</li>
<li>Under separable buyer groups and limited resale, use marginal-revenue equalization to explain differential pricing, distinguish it from cost-based price differences, and explain why its output, distribution, and welfare effects are not all the same question.</li>
</ul>
</aside>

**Figure focus.** Required: MR below demand and MR=MC output. Others are references unless assigned.

## A Price-Searcher Faces a Downward-Sloping Demand Curve

A price-taker faces a flat demand for its own output: at the market price it can sell all it wants without ever cutting the price. A uniform-price *price-searcher* faces a demand curve that slopes downward, so to sell one more unit it has to lower the price; nobody hands it a price, it has to find one. A seller able to quote different prices to different buyers may expand one segment without marking down every earlier unit.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Price-Taker</dt><dd>A seller that must accept the going market price and can sell all it wants without cutting it.</dd></div>
<div><dt>Price-Searcher</dt><dd>A seller that faces a downward-sloping demand curve for its own output and must set its own price.</dd></div>
</dl>
</aside>

Why does any seller face a demand curve of its own? Because buyers do not see all sellers as identical: one gas station is closer to your route, one drugstore has a pharmacist you trust. These differences can be small, but they let a seller raise its price a little and lose some customers, not all.

This is also where brand names and advertising earn their keep, and the case cuts both ways. One view says advertising manufactures fake differences and pushes people to overpay for the same thing. The other says brand names and advertising lower the cost of finding out which sellers are actually reliable, so buyers can be more discriminating, not less. Both contain some truth: an ad can mislead, but strip away all advertising and you have not made buyers smarter, only made it harder for them to learn who delivers. A trademark, in particular, lets a customer reward a producer who keeps quality up and punish one who lets it slip. A brand preference can be genuine and still be slight: if a near-identical substitute is a dollar cheaper, switching to it is not fickleness, it is good sense. So almost every real seller is a price-searcher in this narrow sense, which will tempt you to call almost every firm a "monopoly." We draw that line later.

### A Price-Searcher Heeds Marginal Revenue, Which Is Less Than Price

One fact does the heavy lifting all topic. When a price-searcher cuts the price to sell one more unit, it cuts the price on every unit it sells, not just that one. So the extra money it takes in from selling one more unit is not the price of that unit; it is that price minus the revenue given up by marking down everything else.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Marginal Revenue</dt><dd>The extra revenue a seller takes in from selling one more unit.</dd></div>
</dl>
</aside>

| Price | Daily quantity | Total revenue | Marginal revenue |
|---|---|---|---|
| $1.00 | 1 | $1.00 | $1.00 |
| .90 | 2 | 1.80 | .80 |
| .80 | 3 | 2.40 | .60 |
| .70 | 4 | 2.80 | .40 |
| .60 | 5 | 3.00 | .20 |
| .50 | 6 | 3.00 | .00 |
| .40 | 7 | 2.80 | −.20 |
| .30 | 8 | 2.40 | −.40 |
| .20 | 9 | 1.80 | −.60 |
| .10 | 10 | 1.00 | −.80 |

Look at the move from 2 units to 3. To sell the third bottle the seller drops the price from $.90 to $.80, yet total revenue rises by only $.60, from $1.80 to $2.40. The missing $.20 is the markdown taken on the two bottles that would have sold at $.90. That is the gap between price and marginal revenue, and it widens as you go down the table.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t08a-price-searchers/figures/t08-mr-demand-interactive.html" title="Drag the point along demand to compare price and marginal revenue" loading="lazy" style="width:100%; max-width:480px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t08a-price-searchers/figures/t08-mr-demand-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t08a-price-searchers/figures/t08-mr-demand.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>With linear demand and one uniform price, marginal revenue lies below price after the first unit.</strong> Drag the point along the demand (average-revenue) line. The gap is the markdown on units already sold when output expands. For this linear schedule, and only this functional form, MR cuts the horizontal distance from the price axis to demand in half; a curved demand has a different MR shape. If the frame does not load, <a href="/teaching/microeconomics/t08a-price-searchers/figures/t08-mr-demand-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t08a-price-searchers/figures/t08-mr-demand.svg">view the static figure</a>.</figcaption>
</figure>

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>Look again at the table. To sell the fourth bottle the seller drops the price from $.80 to $.70, but total revenue climbs by only $.40. The fourth bottle itself sold for $.70, so where did the other $.30 go?</p>
</aside>

Two puzzles resolve here. Why not price much higher? Quantity demanded would shrink so much that revenue falls. Where is revenue largest? At six units, where marginal revenue hits zero; push further and it turns negative, so a seller pays, in markdowns, for the privilege of selling more. The responsiveness of buyers to a price change is *elasticity*: demand is elastic when a price cut raises total revenue, inelastic when a price cut lowers it, and *unit-elastic* right where marginal revenue is zero.

### A Price-Searcher Produces Where Marginal Revenue Equals Marginal Cost

Revenue is only half the story. The extra cost of producing one more unit is its *marginal cost*. An interior, smoothly divisible choice maximizes profit not where average cost is lowest, but where the last unit's extra revenue just covers its extra cost. With whole units, produce another while marginal revenue exceeds marginal cost and stop before the next unit reverses that comparison. Average cost determines the resulting profit and matters for entry or exit, but not which extra unit raises profit once operating. Add this water-seller's costs to the demand and the choice appears.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Marginal Cost</dt><dd>The extra cost of producing one more unit.</dd></div>
</dl>
</aside>

| Price | Quantity | Total revenue | Marginal revenue | Marginal cost | Total cost | Profit |
|---|---|---|---|---|---|---|
| $1.00 | 1 | $1.00 | $1.00 | $0.10 | $0.30 | $0.70 |
| .90 | 2 | 1.80 | .80 | .20 | .50 | 1.30 |
| .80 | 3 | 2.40 | .60 | .30 | .80 | 1.60 |
| .70 | 4 | 2.80 | .40 | .40 | 1.20 | 1.60 |
| .60 | 5 | 3.00 | .20 | .50 | 1.70 | 1.30 |
| .50 | 6 | 3.00 | .00 | .60 | 2.30 | .70 |
| .40 | 7 | 2.80 | −.20 | .70 | 3.00 | −.20 |
| .30 | 8 | 2.40 | −.40 | .80 | 3.80 | −1.40 |

Profit reaches $1.60 at either three or four bottles: the fourth adds $.40 of revenue and $.40 of cost, so the seller is indifferent, while the fifth lowers profit. Marginal revenue and marginal cost identify the output increment; demand gives the associated uniform price, and average cost tells whether that output earns profit.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t08a-price-searchers/figures/t08-price-searcher-interactive.html" title="Drag the output handle to see a price-searcher produce where marginal revenue equals marginal cost" loading="lazy" style="width:100%; max-width:480px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t08a-price-searchers/figures/t08-price-searcher-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t08a-price-searchers/figures/t08-price-searcher.svg">open the static figure</a>.</p></iframe>
<figcaption><strong>A price-searcher produces where marginal revenue equals marginal cost.</strong> At five units, marginal revenue and marginal cost both equal $11, the profit-maximizing output. Reading price up from there to the demand curve gives $16, one dollar above the $15 average cost. A sixth unit would cost only about $12 to make but is worth about $16 to buyers; it goes unmade because marginal revenue, not price, guides the seller's decision. Drag the output handle (or tap and drag on a touch screen) to see price, average cost, and the marginal-revenue/marginal-cost gap track any output level. If the frame does not load, <a href="/teaching/microeconomics/t08a-price-searchers/figures/t08-price-searcher-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t08a-price-searchers/figures/t08-price-searcher.svg">open the static figure</a>.</figcaption>
</figure>

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>Using the water-seller's table, the fifth bottle still sells at a positive price, yet making it lowers profit. Compare that unit's marginal revenue with its marginal cost, and explain why the seller stops at the third bottle.</p>
</aside>

One consequence follows directly. For an incumbent that continues operating, a flat annual license fee changes neither marginal revenue nor marginal cost, so it leaves the short-run output comparison unchanged and reduces profit. A large enough fee can prevent entry or induce exit, so industry output can change later. A *per-unit* tax shifts marginal cost and changes the firm's output comparison directly.

The same logic clears up real puzzles: a concert selling out months early, a tutor always booked solid, and idle capacity that is not automatically overpriced are all readable once you know a price-searcher cannot look up its demand curve, it searches by trial and error, and a price far from the profit-maximizing one invites rivals to undercut the margin or grab the business it drove away.

### Market Power Distorts Output Because Marginal Revenue Sits Below Price

Because a uniform-price seller stops where marginal revenue equals marginal cost, and marginal revenue sits below price, it stops where the price still sits above marginal cost. Under the consumer-worth benchmark, units for which willingness and ability to pay exceed the opportunity cost of production go unmade.

Suppose marginal revenue equals marginal cost at five units, sold at sixteen dollars. A sixth unit would cost only about twelve dollars to make, and some buyer values it near sixteen; it does not get made. That forgone gain is what economists mean by the *distortion* of market power; we are not measuring a deadweight-loss triangle here, only noting that valuable units go unproduced.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t08a-price-searchers/figures/t08a-ep11-4-lost-consumer-value-interactive.html" title="Drag the output handle to widen or shrink the band of consumer value lost when price sits above marginal cost" loading="lazy" style="width:100%; max-width:480px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t08a-price-searchers/figures/t08a-ep11-4-lost-consumer-value-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t08a-price-searchers/figures/t08a-ep11-4-lost-consumer-value.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>The picture shows the loss the words describe, without measuring it.</strong> The shaded band is the gap between what buyers would pay along demand, up near $16, and what each unit costs along marginal cost, rising from about $11, over the output the seller leaves unmade. A sixth unit worth about $15 to a buyer costs only about $12 to make, yet goes unproduced. Economists call this triangle the deadweight loss; here we only point to where it lives. The band vanishes at the price-taking benchmark, where price falls to meet marginal cost. Drag the output handle to widen or shrink it. If the frame does not load, <a href="/teaching/microeconomics/t08a-price-searchers/figures/t08a-ep11-4-lost-consumer-value-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t08a-price-searchers/figures/t08a-ep11-4-lost-consumer-value.svg">view the static figure</a>.</figcaption>
</figure>

Three cautions keep this honest. Willingness and ability to pay reflect wealth, rights, and access, not a complete judgment about need or fairness. All relevant production, search, quality, and spillover costs must be counted. Differentiated products may also carry variety or information benefits that the identical-product benchmark omits. The diagram diagnoses a specified consumer-worth loss; whether it persists or is outweighed is a separate empirical question.

## What Matters Is Whether the Market Is Open or Closed, Not the Number of Sellers

Here is where loose talk about "monopoly" goes wrong. Almost every seller has some downward-sloping demand and a sliver of pricing discretion, so by that test a corner grocery is a "monopoly" and so is a doctor's practice. The distinction that earns its keep is whether the market is *open* or *closed*.

A market is more open when potential competitors can enter on roughly the same legal terms; it is more closed when law or control of an essential right excludes them. The number of sellers today is not the issue; what disciplines a seller is the threat of who could enter tomorrow, together with rivalry from firms already present. Entry works faster when methods are copyable, finance and inputs are available, switching is feasible, and scale, network, reputation, or regulatory costs are not prohibitive. “Open” and “closed” are useful endpoints, not a claim that every market fits a binary box.

So “the grocery business is a monopoly” and “medicine is a monopoly” require evidence about barriers, substitutes, geography, switching, and entry. Physician licensing can restrict entry, but it may also screen competence or support safety; its net effect and the feasibility of certification, inspection, or narrower alternatives cannot be inferred from the existence of a license alone.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A grocery and a physician's practice both face a downward-sloping demand curve, yet only one sits in a genuinely closed market. Which one is closed, and what settles it: the number of sellers, or something else?</p>
</aside>

Two refinements matter. Closing a market does not automatically turn a price-taker into a price-searcher: restricted wheat or tobacco growers can stay too numerous and too small to budge the price even under a capped acreage. And a price rise driven by higher costs is not market power at all: if everyone's input prices rise, every producer's price rises with them, and no one is "wielding" anything, even though the two look alike on a receipt.

When an artificial quantity or entry restriction raises a protected seller's return above the relevant opportunity cost, that increment is a *monopoly rent*. A taxi medallion, output license, or exclusive stadium grant can create one when exclusion, rather than improved service or a scarce productive input, causes the increment. Accounting profit alone does not identify monopoly rent: innovation returns, risk compensation, temporary quasi-rent, and Ricardian scarcity rent have different sources.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Monopoly Rent</dt><dd>The surplus a protected seller collects because entry into its market is artificially restricted.</dd></div>
</dl>
</aside>

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t08a-price-searchers/figures/t08a-ep13-1-rents-and-loss-interactive.html" title="Drag the licensed-output line to restrict an industry of price-takers and split the receipts into monopoly rent, Ricardian rent, and social loss" loading="lazy" style="width:100%; max-width:480px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t08a-price-searchers/figures/t08a-ep13-1-rents-and-loss-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t08a-price-searchers/figures/t08a-ep13-1-rents-and-loss.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>A closed gate on an industry of price-takers splits the receipts three ways.</strong> This is the refinement above made visible: restricted wheat or tobacco growers stay price-takers, yet a licensed-output gate on the whole industry still lifts the price. Drag the licensed-output line left of the open-market 6,000 units and the price read off demand rises. The suppliers' extra receipts divide into a monopoly rent, the rectangle the restriction manufactures, and a Ricardian rent, the higher return better or better-located land earns in any open market because its services are worth more, not because entry is blocked. The social-loss triangle beyond them is value nobody collects, from units worth more to buyers than they cost to make that now go unmade. If the frame does not load, <a href="/teaching/microeconomics/t08a-price-searchers/figures/t08a-ep13-1-rents-and-loss-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t08a-price-searchers/figures/t08a-ep13-1-rents-and-loss.svg">view the static figure</a>.</figcaption>
</figure>

### Long-Run Entry Drives a Price-Searcher's Profit Toward Zero

If imitation is feasible, entry is legally open, customers can switch, and inputs or capacity can expand, a price-searcher's profit attracts rivals who chip away at its demand. In the long-run competitive-entry benchmark, entry pushes that profit down toward zero, where the price just covers full average cost. Innovation, risk, scarce inputs, patents, scale or network effects, and slow adjustment can delay or prevent that endpoint.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t08a-price-searchers/figures/t08a-ue19-5-interactive.html" title="Drag the imitative-entry slider to see a price searcher's demand curve shrink until it just touches average cost, driving long-run profit to zero" loading="lazy" style="width:100%; max-width:480px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t08a-price-searchers/figures/t08a-ue19-5-interactive.html">Open the interactive figure directly</a>.</p></iframe>
<figcaption><strong>In the constructed benchmark, imitative entry erases profit.</strong> Entry shrinks the demand facing the seller until it just grazes average cost, while the firm still applies marginal revenue equals marginal cost. This slider holds the displayed MR = MC quantity at five to isolate the profit rectangle; that fixed point is a feature of the illustration, not a general prediction about entry. <a href="/teaching/microeconomics/t08a-price-searchers/figures/t08a-ue19-5-interactive.html">Open the interactive figure directly</a> if the embed does not load; there is no separate static image for this figure.</figcaption>
</figure>

Where did the profit go in that benchmark? Partly into lower prices, and partly into input values: competitors bid up the price of that scarce ingredient until the extra earnings show up as a cost of hiring it. Sustained profit is evidence worth investigating, not proof of closure; it can also reflect innovation, risk, scarce talent, favorable surprises, or measurement error.

### Cartels Are Unstable Because Every Member Has a Reason to Cheat

Now suppose several firms try to behave like a single monopolist by agreeing to hold output down and prices up. That is a *cartel*. Each member has an incentive to cheat, but instability is a mechanism, not a guarantee that every cartel quickly collapses.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Cartel</dt><dd>A group of firms that agree to hold output down and prices up.</dd></div>
</dl>
</aside>

To work, a cartel has to do several hard things at once: identify all the producers and get them to join, agree on how much each will cut, block new firms from undercutting the propped-up price, and police *non*-price competition, since members barred from cutting prices compete on service and quality instead. Above all it must detect and punish cheating, because every single member has a powerful private incentive to cheat. If the cartel holds the price high, any one member can quietly shave its price, win new business, and pocket the gain while the others keep restricting; the holdout captures the extra sales precisely because everyone else is behaving, so the reward for defecting is large and immediate, the punishment slow and uncertain, and members chisel.

More members, hidden transactions, heterogeneous costs, and outside substitutes make enforcement harder. Repeated dealings, concentrated membership, observable sales, credible punishment, vertical control, or legal support can make coordination more durable. The framework predicts which conditions matter; the prevalence and duration of collusion require evidence.

One support is a way to make cheating visible, such as funneling sales through a central pool. Government can make coordination more durable by compelling participation or restricting entry, but private monitoring and repeated interaction can also matter. That opens the political-economy question: which institutions stabilize the restriction, who gains, and what evidence distinguishes agreement from parallel responses to common conditions?
## Price Discrimination Is Marginal-Revenue Equalization, Not a Moral Failing

Price discrimination means charging different buyers different prices for essentially the same good when the difference is not explained by incremental cost. With separable groups, limited resale, usable information about demand, and the same relevant marginal cost, a seller shifts units toward the buyer with higher marginal revenue until group marginal revenues are equal, then compares that common margin with marginal cost. The mechanism predicts profit maximization; it does not by itself settle fairness or total welfare.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Price Discrimination</dt><dd>Charging different buyers different prices for essentially the same good.</dd></div>
</dl>
</aside>

| Price | A's quantity | A's total revenue | A's marginal revenue | B's quantity | B's total revenue | B's marginal revenue |
|---|---|---|---|---|---|---|
| $12 | 1 | 12 | $12 | 0 | 0 | — |
| 11 | 2 | 22 | 10 | 0 | 0 | — |
| 10 | 3 | 30 | 8 | 0 | 0 | — |
| 9 | 4 | 36 | 6 | 0 | 0 | — |
| 8 | 5 | 40 | 4 | 1 | 8 | 8 |
| 7 | 6 | 42 | 2 | 2 | 14 | 6 |
| 6 | 7 | 42 | 0 | 3 | 18 | 4 |
| 5 | 8 | 40 | −2 | 4 | 20 | 2 |
| 4 | 9 | 36 | −4 | 5 | 20 | 0 |

Suppose the seller is charging both customers $7. From A it sells 6 units; from B, 2. But the last unit sold to A brings in only $2 at the margin, while the last to B brings in $6, so the seller can do better. Raise A's price to $8 and A buys 5 instead of 6, costing $2 of revenue; take that freed-up unit and sell it to B by dropping B's price to $6, where B buys 3, adding $4. The $4 gained beats the $2 lost, total revenue rises, and the two marginal revenues now sit at $4 apiece. That is the rule: shift units toward the buyer with the higher marginal revenue until the margins are equal. The different prices are the result, not the goal.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t08a-price-searchers/figures/t08-price-discrimination-interactive.html" title="Drag the shared marginal-revenue level to see price discrimination equalize it across two buyers" loading="lazy" style="width:100%; max-width:640px; aspect-ratio:16/10; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t08a-price-searchers/figures/t08-price-discrimination-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t08a-price-searchers/figures/t08-price-discrimination.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Price discrimination equalizes marginal revenue across buyers; the price gap is the result, not the goal.</strong> Drag the shared marginal-revenue level up or down. Because one level sets the quantity in both panels at once, Customer A's and Customer B's marginal revenues always move together, equal to each other, and, at the profit-maximizing level of $4, equal to marginal cost too. At that point Customer A (the less price-sensitive buyer) pays $8 for 5 units while Customer B pays only $6 for 3, the same marginal-revenue-equals-marginal-cost rule as any other output choice, applied twice. If the frame does not load, <a href="/teaching/microeconomics/t08a-price-searchers/figures/t08-price-discrimination-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t08a-price-searchers/figures/t08-price-discrimination.svg">view the static figure</a>.</figcaption>
</figure>

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>Back in the two-buyer table, the seller charges both A and B $7, and the last unit sold to A brings in $2 at the margin while the last sold to B brings in $6. Which buyer should face a higher price to raise total revenue, and where do the two marginal revenues end up once the seller finishes adjusting?</p>
</aside>

Everyday price differences require diagnosis. Senior or student discounts, coupons, and scholarships can sort buyers by demand when resale is hard; off-peak prices may also reflect lower congestion or capacity cost. International price gaps may reflect demand, transport, tariffs, taxes, regulation, quality, or strategic pricing. A price below average accounting cost is not proof of loss: the relevant test is incremental revenue against incremental opportunity cost, including effects across linked products and periods. Differential pricing can expand output, redistribute surplus, exclude some buyers, or do several at once.

One condition makes all of this possible: the low-price buyers must not be able to resell to the high-price buyers, or they would buy cheap, undercut the seller, and collapse the two prices into one. That is why discrimination thrives where resale is hard: on services, on personalized deals, on tickets tied to an ID.


## For Further Reading

Want to explore the source material? This lecture draws on the following chapters from two books by Armen A. Alchian and William R. Allen:

- *Universal Economics* (Liberty Fund, 2018): Ch. 19, “Price-Searchers”; Ch. 20, “Price-Searcher Pricing”; Ch. 21, “Pricing and Marketing Tactics”; Ch. 26, “Prohibited Marketing Tactics”.
- *Exchange and Production*, 3rd ed. (Wadsworth, 1983): Ch. 11, “Price Searchers”; Ch. 13, “Restricted Access to Markets”.

<div class="econ-review">
<section class="econ-review__section">
<h3>Key takeaways</h3>
<ul>
<li><strong>Uniform pricing creates the MR-below-price wedge.</strong> A seller with downward-sloping demand compares marginal revenue with marginal cost; the unmade-unit result is a consumer-worth benchmark whose welfare interpretation requires stated cost, rights, wealth, and spillover assumptions.</li>
<li><strong>Entry pressure is conditional, and profit has more than one source.</strong> Potential rivals discipline sellers when imitation, finance, inputs, switching, and scale permit; monopoly rent must be distinguished from innovation, risk, quasi-rent, and scarce-input returns.</li>
<li><strong>Differential pricing requires diagnosis.</strong> With separable groups and limited resale, a seller equalizes group marginal revenues, but observed price gaps may also reflect cost, quality, timing, tax, or regulation, and their output, distribution, and welfare effects can differ.</li>
</ul>
</section>
</div>