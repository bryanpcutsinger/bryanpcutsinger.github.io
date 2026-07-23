---
title: "The Competitive Firm: How a Price-Taker Decides"
topic: "T7 — Competitive Markets (Part A)"
course: "Principles of Microeconomics (FAU)"
sessions: ["Fall 2026 — content session 14 (Thu 10/8)"]
ue_anchors: ["UE 16"]
be_anchors: []
ep_anchors: ["E&P Fig 10-8 (ch. 10, p. 211) — profits competed away by bidding up the responsible input", "E&P Fig 10-3 (ch. 10, p. 205) — total variable cost as the area under marginal cost", "E&P Fig 10-7 (ch. 10, p. 210) — adjustment of supply to a demand shift: short-run overshoot, long-run settle via entry", "E&P ch. 10 (p. 216) — 'sick industries': persistent losses are not market failure"]
word_target: "3400-3800"
word_budget: 3861
  # word_budget 3800 -> 3861 (+61): For Further Reading section added 2026-07-22
status: approved        # scope-reduction R4 done-gate 2026-07-21; E&P integration M5 done-gate 2026-07-20; prior approval 2026-07-01
audience: students
note: "Self-contained — assumes no access to the textbooks. Part A of t07-competitive-markets (split at the Exam-2 seam to clear the 6,000-word cap); Part B (t07b-tax-incidence-and-quasi-rent) covers UE 17/18 + BE. Source-of-truth for the T7a deck; section headers are claims that map to slide titles. Assumes T6 (costs, marginal cost, the firm's cost curves) is already taught and does NOT re-derive cost curves."
# brief: ../t07-competitive-markets/brief.md
---

# The Competitive Firm: How a Price-Taker Decides

In T6 we built the cost side of the firm: marginal cost rises as output climbs, and average cost traces a U. What we never did was put a price next to those costs. A cost curve alone cannot tell a firm how much to make, whether to make anything at all, or whether it will survive. For that we need the market price. Part A adds it.

We will study the simplest and most important case: a seller so small relative to its market that it has no power over price. It must take the going price as given and decide only how much to produce. Economists call such a seller a *price-taker*, and the markets full of them are what we usually mean by "competition." This is the first of two installments on competitive markets. Part A stays inside a single firm and the industry it belongs to: how a price-taking firm picks its output, how thousands of them together generate a market supply curve, why competition produces the industry's output as cheaply as possible, and why profits in such a market get driven toward an ordinary return. Part B puts this machinery to work on taxes, timing, and how burdens move as firms and resources adjust.

<aside class="econ-callout econ-objectives">
<p class="econ-callout__label">Learning objectives</p>
<p>By the end of this post you should be able to:</p>
<ul>
<li>Determine a price-taker's profit-maximizing output using the rule to produce until marginal cost rises to price, and use minimum average variable cost and minimum average total cost as the short-run shutdown and long-run break-even thresholds; explain why summing every firm's supply gives an upward-sloping market supply curve.</li>
<li>Explain why competition drives every firm's marginal cost toward the same number, producing the industry's output at the lowest possible total cost, and why survival, not conscious calculation, is what makes firms behave as if they maximize profit.</li>
<li>Explain how competition turns profits into costs by capitalizing an asset's earnings into its price, why current value rather than historical cost governs, and how a genuine profit differs from a transfer engineered by blocking competition.</li>
</ul>
</aside>

**Figure focus.** Required: market-to-firm price and firm cost/output. Others are references unless assigned.

## A Price-Taker Faces a Horizontal Demand Curve at the Market Price

Start with a wheat farmer. Wheat sells for $2 a bushel and the whole market trades ten million bushels, of which he grows a thousand. Can he push the price up by withholding his crop? No: a thousand bushels against ten million moves the price by nothing anyone could measure. Can he charge $2.01? Also no. His wheat is identical to everyone else's, so the instant he asks a penny more, every buyer walks to a rival selling the same grain at $2. And he has no reason to sell for less, since he can already sell every bushel he has at the full $2.

So the farmer can sell as much or as little as he likes, but only at the one price the market hands him. Draw the demand curve facing him alone and it is not the familiar downward slope; it is a flat horizontal line at $2. That flat line is the signature of a price-taker: he takes the market price as fixed and chooses only a quantity along it.

<aside class="econ-callout econ-def">
<p class="econ-callout__label">Definition</p>
<p>A price-taker is a seller so small relative to its market that it must accept the going market price and can choose only how much to produce.</p>
</aside>

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-market-firm-interactive.html" title="Drag the market demand curve up or down to watch the clearing price change and the price-taking firm's flat demand line move to meet it." loading="lazy" style="width:100%; max-width:640px; aspect-ratio:16/10; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-market-firm-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-market-firm.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>The market sets the price; the firm just takes it.</strong> Left: market demand meets market supply at the clearing price. Right: that same price is the flat, horizontal demand line facing one price-taking firm, which can sell any quantity at that price, so it chooses a quantity, not a price. Drag the market demand curve up or down and watch the clearing price move, and the firm's flat line move to meet it. If the frame does not load, <a href="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-market-firm-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-market-firm.svg">view the static figure</a>.</figcaption>
</figure>

What makes a seller a price-taker is not the raw number of competitors at any moment; it is two conditions together. First, the product is *homogeneous*: buyers treat one seller's units as interchangeable with another's, so no one can command a premium. Second, entry is quick and cheap, so a price that rose far above cost would draw newcomers in and get competed back down. A market can have only a handful of sellers today and still discipline each like a price-taker, as long as outsiders can jump in fast. Homogeneity plus easy entry, not a head count, is what strips a seller of power over price.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>Our wheat farmer holds back his thousand bushels to push the price up, then tries charging $2.01. Why does neither move work? What two conditions, not the number of rivals, make him a price-taker?</p>
</aside>

Set aside, for now, a different kind of seller: one that faces a downward-sloping demand for its own product, so that to sell more it must cut its price. Such a seller does not take a price; it searches for one. We study those *price-searchers* in a later topic.

### For a Price-Taker, Marginal Revenue Is Just the Market Price

Because our farmer can sell any quantity at the same $2, the revenue from one more bushel is easy to find: sell one more and revenue rises by exactly $2, with no hidden cost from a lower price on everything else, since selling more does not move the price. The extra revenue from one more unit is what we call *marginal revenue*. For a price-taker, marginal revenue equals the price.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Marginal Revenue</dt><dd>The extra revenue a firm gets from selling one more unit.</dd></div>
</dl>
</aside>

That is precisely what fails for a price-searcher, who must cut its price to move extra units and so earns less than the price on each new sale, since the cut bites into the units it was already selling. For that seller marginal revenue falls below price. Competition behaves so cleanly because, for a price-taker, marginal revenue and price are the same number.

### The Firm's Supply Curve Is Its Rising Marginal Cost

Now we can answer the first decision: at a given price, how much should the firm make? Run the marginal logic from T6: as long as one more unit brings in more than it costs, make it. The price-taker's marginal revenue is the price, so the rule becomes keep producing until marginal cost rises to meet the price. Produce less and you leave units on the table that would have earned more than they cost; produce more and each extra unit costs more than it fetches.

Put numbers on it with a single producer's cost schedule, the same figures from T6, now with a market price attached.

| Daily rate of production | Marginal cost | Average variable cost | Average total cost |
|---|---|---|---|
| 0 | — | — | — |
| 1 | 9 | 9.0 | 19.0 |
| 2 | 8 | 8.5 | 13.5 |
| 3 | 6 | 7.7 | 11.0 |
| 4 | 5 | 7.0 | 9.5 |
| 5 | 7 | 7.0 | 9.0 |
| 6 | 13 | 8.0 | 9.7 |
| 7 | 22 | 10.0 | 11.4 |
| 8 | 30 | 12.5 | 13.8 |
| 9 | 40 | 15.5 | 16.7 |
| 10 | 51 | 19.1 | 20.1 |
| 11 | 65 | 23.3 | 24.2 |
| 12 | 80 | 28.0 | 28.8 |

Suppose the market price is $25. Where does marginal cost meet it? At seven units. The seventh unit costs $22 to make and sells for $25, so it is worth producing. The eighth would cost $30 and still fetch only $25, so making it would shrink profit by $5. Seven units is the profit-maximizing rate, found without ever consulting average cost; the marginal comparison alone pins down the rate.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-firm-cost-interactive.html" title="Drag the output handle to watch profit peak where marginal cost meets the $25 price, or drag the price line down to find the loss floor at $9 and the shut-down floor at $7." loading="lazy" style="width:100%; max-width:520px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-firm-cost-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-firm-cost.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Produce where marginal cost meets the price.</strong> A price-taking firm faces a flat price line ($25 = marginal revenue) and maximizes profit where rising marginal cost meets that price: here, 7 units, with the shaded rectangle from average total cost up to the price as the profit. Drag the output handle to see profit peak at 7 units, then drag the price line down to watch the firm keep producing at a loss above the $7 shut-down floor and stop below it. If the frame does not load, <a href="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-firm-cost-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-firm-cost.svg">view the static figure</a>.</figcaption>
</figure>

Read the table the other way and the firm's supply curve falls right out of it. At $25 the firm offers seven units; at a higher price it would push to eight, nine, ten, climbing its marginal-cost schedule. What the firm is willing to supply at each price is read straight off its rising marginal cost. That is the deep result: above a certain floor, the firm's marginal-cost curve is its supply curve. We pin down that floor next.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>The market price is $25 and the firm makes seven units. Why is making the eighth a mistake? If the price instead rose to $40, would the firm want to produce more or fewer units?</p>
</aside>

### Shut Down or Keep Going Depends on Whether Price Covers the Right Cost

Finding the best rate is only half the decision; the other half is whether to produce at all, and a famous slogan does the work: marginal cost guides how much to produce, while average cost tells you whether to produce. Confusing the two is one of the most common mistakes in economics. Marginal cost versus price sets the rate, as we just saw; whether running at all earns or loses money compares price with average cost. But there are two average costs, one for each time horizon, each with its own threshold.

In the short run, the firm has already sunk money into its building and machinery. That money is gone whether the firm produces or not, so it should not enter a decision about today's output; what matters is only the cost that changes with production, the *average variable cost*. As long as price covers average variable cost, every unit pays its own running expenses and chips in something toward the sunk investment, so the firm keeps going. In our table average variable cost bottoms out at $7: above $7 the firm keeps producing with the equipment it has, below $7 it shuts down.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-ep10-3-tvc-under-mc-interactive.html" title="Drag the output handle to watch the total-variable-cost area under the marginal-cost curve grow unit by unit, and drag the price line down to the $7 shutdown floor where the revenue rectangle just fills that area." loading="lazy" style="width:100%; max-width:560px; aspect-ratio:13/11; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-ep10-3-tvc-under-mc-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-ep10-3-tvc-under-mc.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Total variable cost is the area under the marginal-cost curve.</strong> Add up the marginal cost of every unit up to the chosen output and you get the firm's total variable cost, the shaded region beneath the marginal-cost curve; at the chosen output, the area between the price line and marginal cost is operating profit. At $25 the firm produces 7 units, where marginal cost rises to meet the price. Drag the output handle to watch that area grow unit by unit, then drag the price line to the $7 shutdown floor, the lowest point of average variable cost, where the revenue rectangle exactly fills the variable-cost area; below it part of the running cost goes uncovered, so the firm stops. If the frame does not load, <a href="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-ep10-3-tvc-under-mc-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-ep10-3-tvc-under-mc.svg">view the static figure</a>.</figcaption>
</figure>

The long run is a different decision program, not the same one stretched out. Once the equipment finally wears out, buying new machinery is a fresh, avoidable cost rather than a sunk one. Now the relevant figure is *average total cost*, which includes the cost of capacity. It bottoms out at $9 in our table, so the firm reinvests and stays in business only if the expected price covers at least $9; below $9 it runs the equipment it has until it dies, then exits.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Average Variable Cost</dt><dd>The cost that changes with output, averaged over each unit produced.</dd></div>
<div><dt>Average Total Cost</dt><dd>All cost, including the cost of capacity, averaged over each unit produced.</dd></div>
</dl>
</aside>

There is the floor we promised. The firm's marginal-cost curve serves as its supply curve only above the lowest average variable cost, $7; below that it produces nothing. And the lowest average total cost, $9, is the price below which it will not stay in the industry permanently. Same firm, two break-even prices, because the short run and the long run are two different production plans, each carrying its own cost.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>Suppose the market price settles at $8. In the short run, does the firm keep producing or shut down? When its equipment finally wears out, will it buy new machinery and stay in the business? Point to the cost each answer depends on.</p>
</aside>

## Add Up Every Firm's Supply and You Get the Market Supply Curve

One firm's supply curve is its marginal cost above the shutdown point, and a market is full of such firms. To get the supply curve for the whole market, ask at each possible price how much every firm would produce and add those quantities together. That horizontal sum, across all firms, is the market supply curve.

It slopes upward for two reasons. Each firm's marginal cost rises with output, and a higher price draws in firms that were sitting on the sidelines. Picture a price climbing from low to high: at first only the lowest-cost producers find it worth operating; as the price rises, each expands along its marginal-cost curve while higher-cost firms clear their own break-even and switch on, adding fresh marginal-cost curves to the sum. Entry is the market's own margin: the individual firm adjusts its rate, the industry adjusts the number of firms, and both push the same way, so the market offers more as the price rises.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-market-supply-interactive.html" title="Toggle between the lower and higher demand curve to watch the market-clearing price rise, firm C enter, and the equalized-marginal-cost construction shift from $20 to $30." loading="lazy" style="width:100%; max-width:520px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-market-supply-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-market-supply.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Market supply is the horizontal sum of every firm's marginal cost.</strong> Three firms' marginal-cost curves add up, quantity by quantity, into the bold market-supply curve: B's curve enters the sum once the price reaches its $18 cost floor, C's once the price reaches $28. Toggle Lower demand ($20, where only A and B produce) to Higher demand ($30, where all three produce) and watch each firm's output ride up its own MC curve to the new equalized price, with C entering along the way. If the frame does not load, <a href="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-market-supply-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-market-supply.svg">view the static figure</a>.</figcaption>
</figure>

### Competition Pushes Every Firm's Marginal Cost Toward the Same Number

Here is a quiet marvel that nobody plans. Every price-taker, whatever its circumstances, expands until its own marginal cost equals the one market price. They all face the same price, so they all end up with the same marginal cost, and that uniformity is what produces the industry's total output as cheaply as possible.

To see why, suppose it were not so. One more unit of some good costs $5 worth of resources in one firm but $6 in another. Then society is wasting something: shift resources from the costlier producer to the cheaper one and get the same output for less. As long as marginal costs differ across producers, that cheap rearrangement is available; resources flow out of the lower-valued use and into the higher-valued one until the marginal cost of one more unit is the same everywhere, and only then is no further saving possible. Competition performs that reshuffling automatically, with no planner computing anything, simply because every firm is independently chasing the same price. The cleanest version of the old idea: competition serves the consumer without anyone intending to.

### Survival, Not Conscious Optimizing, Is What Competition Selects For

I have been talking as though each owner equates marginal cost to price on a spreadsheet. Real managers rarely know their costs that precisely; they have hunches about pushing output higher or pulling it back, but the exact marginal cost of the next unit is usually a fog. Does the analysis collapse?

It does not, and the reason is one of the most important ideas in the course. The market does not require anyone to calculate the optimum; it only rewards those who land near it and punishes those who stray far. A firm that consistently produces too much, or carries costs that are too high, fails to cover them and is competitively winnowed out; a firm that happens to operate near the profit-maximizing rate survives and grows. Over time the survivors are the ones behaving roughly as if they had solved the problem, whether or not they ever consciously did. Profit-maximizing is better understood as a result selection produces than as a goal every manager pursues; the marginal conditions describe the firms that last, not the arithmetic each owner performs.

## Profits Turn Into Costs as Rivals Bid for Whatever Earns Them

Now to the engine that drives competitive profits toward an ordinary return. The usual story says competition "competes profits away" but rarely explains the mechanism, which is that profits get converted into costs.

Follow a single machine. An investor pays $10,000 for it, expecting 5,000 units of output at $1 per unit in other inputs, and hopes to sell the product for $3, just covering the machine. Then luck breaks his way and the product sells for $4. Each unit now clears $3 over the other-input cost, so over its life the machine throws off $15,000 instead of the $10,000 it cost, and the owner is sitting on a $5,000 profit. Watch what happens to it. The moment everyone can see the machine earns $15,000, that is what it is worth; anyone who wants the business must pay $15,000. The profit has been *capitalized* into the machine's price, and whoever buys it at $15,000 now earns only an ordinary return, no windfall. The same happens if the resource responsible is a patent, a prime location, or a talented employee: rivals bid up its price or salary until the extra it earns is fully reflected in what it costs to obtain. The owner of that resource grows richer; the firm using it is left with a normal return.

The table tracks the machine as the product price moves.

| Case | Product price | Net unit earnings (after $1 other inputs) | Machine's value in use (= net unit × 5,000) | Cost of using the machine, per unit | Outcome |
|---|---|---|---|---|---|
| A | $4.00 | $3.00 | $15,000 | $3.00 | Invest; profit of $5,000 over the $10,000 paid |
| B | $3.50 | $2.50 | $12,500 | $2.50 | Produce; profit of $2,500 |
| C | $2.00 | $1.00 | $5,000 | $1.00 | Keep producing; profit of $0 |
| D | below $1 | near zero | about zero | — | Terminate; the machine is worth scrapping |

Two lessons live in that table. First, the cost of using the machine is not the $2 per unit computed from its $10,000 purchase price; it is whatever the machine is currently worth, spread over its output. When the product sells for $4, the true cost of using the machine is $3 a unit, because that is what you sacrifice by using it rather than selling it. The historical price paid is irrelevant; only current value counts. That kills a stubborn fallacy, that new firms can undercut old ones because the old are "burdened" with obsolete equipment. They are not: old equipment is continuously revalued to whatever level lets it keep competing, and at that lower value it competes on equal footing with anything new. What a firm once paid for its capital is dead history.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A rival claims it can undercut an old firm because that firm is stuck with expensive, outdated equipment. Using the machine example, explain why the old equipment is not a burden, and why what the firm originally paid for it no longer matters.</p>
</aside>

Be precise about what these profits are. A genuine profit of this kind is an increase in wealth: someone created value worth more than the resources it consumed and for a while captured the difference. That is entirely different from the gain a firm collects by getting the government to block its rivals; money squeezed out of consumers by restricting competition is a transfer engineered by force, not a profit in our sense, and competition cannot erode it because competition has been forbidden. Competition drives to normal only the wealth-creating kind, the kind that draws in imitators precisely because it is real.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-ep10-8-profits-competed-away-interactive.html" title="Drag firm A's average-cost curve upward, as rivals bid its superior input up, and watch firm A's profit box shrink to zero while the marginal firm B always just breaks even at the same market price." loading="lazy" style="width:100%; max-width:640px; aspect-ratio:16/10; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-ep10-8-profits-competed-away-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-ep10-8-profits-competed-away.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>The profit lasts only until rivals bid up the input responsible for it.</strong> The machine example drawn as two firms, both price-takers facing the same $10 price. Firm B is the marginal firm: its lowest average cost is exactly $10, so it just breaks even. Firm A earns a profit only because a superior input, whether better land, equipment, or people, is still underpriced. Drag A's average-cost curve upward, playing the rivals bidding the input up, and watch the profit box vanish as it is capitalized into the price of the resource responsible, while the marginal firm keeps breaking even. If the frame does not load, <a href="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-ep10-8-profits-competed-away-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t07a-competitive-firm/figures/t07a-ep10-8-profits-competed-away.svg">view the static figure</a>.</figcaption>
</figure>

When rivals bid up the price of a profit-earning asset, what they pay for is its stream of future earnings squeezed into a single price today. Collapsing a future flow into a present price is *capitalization*, and we will make its arithmetic explicit when we reach present value and capital later. For now the verbal version is enough: tomorrow's profit gets baked into today's asset price, leaving the new owner only a normal return.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Capitalization</dt><dd>Collapsing an asset's stream of future earnings into a single present price.</dd></div>
</dl>
</aside>

### Is Producing Where Price Equals Marginal Cost Socially Desirable?

Competition pushes each firm to produce where price equals marginal cost, and economists have long argued this outcome is, in a specific sense, a good one, and the argument can be made entirely in words.

At the competitive output, the last unit produced is worth at least its price to the buyer who takes it, since he was willing to pay that price, and the price equals marginal cost, the worth of the other things society gave up to make that unit. So the last unit is worth as much to the person who gets it as the resources sacrificed to produce it. Push output lower and you skip units buyers value more than they cost; push it higher and you make units that cost more than they are worth to anyone. Producing right where price meets marginal cost is the point where the total personal worth created, across everyone, is as large as it can be — the sense in which the competitive result is efficient.

## For Further Reading

Want to explore the source material? This lecture draws on the following chapters from two books by Armen A. Alchian and William R. Allen:

- *Universal Economics* (Liberty Fund, 2018): Ch. 16, “Market Supply and Price with Price-Takers”.
- *Exchange and Production*, 3rd ed. (Wadsworth, 1983): Ch. 10, “Price Takers’ Supply and Price Response to Consumer Demand”.

<div class="econ-review">
<section class="econ-review__section">
<h3>Key takeaways</h3>
<ul>
<li><strong>The firm's supply curve is its rising marginal cost above the shutdown floor.</strong> A price-taker produces until marginal cost climbs to meet the price; minimum average variable cost is the short-run shutdown floor, minimum average total cost the long-run break-even price, and summing every firm's supply, with entry drawing new firms in as price rises, gives an upward-sloping market supply curve.</li>
<li><strong>Competition equalizes marginal cost and rewards survival, not calculation.</strong> Every firm expands until its marginal cost meets the one market price, so the industry's output is produced as cheaply as possible with no planner directing it; the market winnows firms that stray far from the profit-maximizing rate and keeps those that land near it, so survivors behave as if they had solved the problem.</li>
<li><strong>Competition turns profits into costs.</strong> Rivals bid up the price of whatever earns a profit until it is capitalized into a cost, leaving an ordinary return; current value, not historical cost, is what matters, and a genuine profit is created wealth, not a transfer won by blocking competition.</li>
</ul>
</section>
</div>