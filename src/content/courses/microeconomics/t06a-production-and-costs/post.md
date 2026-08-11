---
title: "Marginal Analysis, Production, and Costs"
topic: "T6 — Production, Costs, and Specialization (Part A)"
course: "Principles of Microeconomics (FAU)"
sessions: ["Fall 2026 — content session 12 (Thu 10/1)"]
ue_anchors: ["UE 7 (totals, marginals, averages, equimarginal allocation)", "UE 14 (Productivity and Costs)", "UE 18 (rate versus volume, learning curves, common costs of joint products)", "UE 29 (input substitution at the margin; substitutes and complements among inputs) — capital-labor framing only"]
be_anchors: []
ep_anchors: ["E&P Figs 7-1 & 7-3 (ch. 7) — producer production-possibility frontiers; marginal cost as the frontier's slope", "E&P ch. 7 'Inefficiency by Authority?' — 1974–1981 crude-oil entitlements program / small-refiner bias vs price coordination (equimarginal), via card EP-EX-07"]
word_target: "2400-3700"
word_budget: 3670
  # word_budget 3700 -> 3767 (+67): For Further Reading section added 2026-07-22
  # word_budget 3767 -> 3670 (-97): UE–E&P Wave-C verification 2026-08-10;
  #   equimarginal/MC/stopping/input-mix claims conditioned, prior 253-word headroom preserved
status: approved        # E&P integration M7 done-gate 2026-07-20; prior approval 2026-07-01
audience: students
note: "Self-contained — assumes no access to the textbooks. Part A of T6: UE 7's general marginal toolkit followed by UE 14 production and cost. Part B covers specialization and exchange. UE 17 is owned by T7 and is not pre-taught here."
# brief: ../t06-production-costs-specialization/brief.md
---

# Marginal Analysis, Production, and Costs

Back when we studied trade, I left you with a promise and a puzzle. The promise was a second, deeper source of gains from exchange that we had not yet touched. We had explained how trading makes everyone richer because people value the same goods differently, and I said something else was going on too: people also differ in what it costs them to make things. The puzzle was a claim that sounds impossible: you can be worse at producing everything than the person next to you and still have something worth selling to them.

We make good on both across this two-part topic. Part A first builds the total/marginal/average and equimarginal tools, then asks a question that seems too simple to bother with: what does it actually cost to produce something? The honest answer is surprising, and once we have it the rest follows, including a first glimpse of why a less talented person can still be the cheaper producer of something (Part B works out the full case) and a handful of cost ideas that will do real work throughout the course. Part B puts this machinery to use on specialization and exchange.

<aside class="econ-callout econ-objectives">
<p class="econ-callout__label">Learning objectives</p>
<p>By the end of this post you should be able to:</p>
<ul>
<li>Distinguish totals, marginals, and averages, and use the equimarginal principle to allocate a fixed divisible resource across separable uses under a common objective.</li>
<li>Explain why cost is the best alternative given up, not merely the invoice or clock time, and why marginal cost eventually rises when output rate increases with some inputs fixed and variable-input price held constant.</li>
<li>Apply the marginal stopping rule: a self-producer compares marginal worth with marginal cost, a competitive price-taker compares price with marginal cost, and a price-searcher compares marginal revenue with marginal cost.</li>
</ul>
</aside>

**Figure focus.** Required: equimarginal allocation and Adam's marginal-cost schedule. Others are references unless assigned.

## Totals, Marginals, and Averages Answer Different Questions

Production gives us the right home for a general toolkit that we will reuse for cost, output, revenue, and hiring. For any quantity, the *total* is the running sum, the *marginal* is the change in that total caused by one more unit, and the *average* is the total divided by the number of units. They travel together, but they answer different questions.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Total</dt><dd>The running sum across all units.</dd></div>
<div><dt>Marginal</dt><dd>The change in the total when one more unit is added.</dd></div>
<div><dt>Average</dt><dd>The total divided by the number of units.</dd></div>
</dl>
</aside>

Suppose a worker scores 80 on a first quality check, 86 on a second, and 89 on a third. The three marginal observations are 80, 86, and 89; the totals are 80, 166, and 255; and the averages are 80, 83, and 85. The new observation pulls the average toward itself. A marginal above the current average raises the average; a marginal below it lowers the average; and a marginal equal to it leaves the average unchanged. This marginal-average rule is arithmetic, not a special feature of test scores. It governs average product and average cost too.

The decision-relevant number is usually marginal. A store's sales rise from $1,000 with one clerk to $1,800 with two. The second clerk's marginal contribution is $800, the change in the store's total, even if that clerk personally rings up a different amount. The same reasoning applies to a factory deciding whether to add a shift: compare what the next shift adds with what it costs. An average summarizes all units already chosen; the marginal tells you what changes if you choose one more.

Revenue uses the same arithmetic. Suppose a chair seller can sell one chair for $110 but must cut the price to $100 to sell two. Total revenue rises from $110 to $200, so the second chair's marginal revenue is $90, not its $100 selling price: the lower price also costs the seller $10 on the first chair. Average revenue is $100 per chair. The details of how a price-setting seller uses marginal revenue belong to market power; the general lesson here is that a marginal is always the change in the total, not merely the amount attached to the newest unit.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A plant's average cost is $12 per unit and the next unit costs $15. What happens to average cost if the plant makes it? What if the next unit instead costs $9?</p>
</aside>

### Efficient Allocation Equalizes Marginal Returns Across Uses

The toolkit becomes most useful when a producer has a fixed resource and several places to put it. Suppose ten machine-hours can be split between production lines A and B. Line A's first hours are very productive but its marginal return falls quickly; line B begins lower but declines slowly. Sending every hour to whichever line has the larger *total* return is the wrong comparison. The producer should assign each next hour to the line offering the largest remaining marginal return.

In the worked schedule, the best split assigns four hours to A and six to B. That combination produces a total return of 150.5, more than putting all ten into A (110) or all ten into B (127.5). At the best integer split, the last hours assigned to the two lines have nearly equal returns. Moving an hour from one line to the other would give up more at the source than it adds at the destination.

<aside class="econ-callout econ-def">
<p class="econ-callout__label">Definition</p>
<p>The equimarginal principle says that a fixed resource produces the largest total return when it is allocated across separable uses so their marginal returns are equal, or as close to equal as indivisible units permit, under a common objective and with no additional constraint binding.</p>
</aside>

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t06a-production-and-costs/figures/t03-equimarginal-interactive.html" title="Drag the split of ten units between two production lines to compare total output and marginal returns." loading="lazy" style="width:100%; max-width:640px; aspect-ratio:16/10; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t06a-production-and-costs/figures/t03-equimarginal-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06a-production-and-costs/figures/t03-equimarginal.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Allocate the resource until marginal returns are as equal as the units allow.</strong> Line A starts higher but falls faster, so four units in A and six in B maximize the combined total. Drag the split to see why favoring the larger total or average leaves gains unrealized. The mirror-image cost rule is equally important: a firm minimizes the cost of a fixed output by equalizing marginal cost across its plants.</figcaption>
</figure>

This principle connects a production schedule to a decision. The same scarce hour cannot be in both factories, so its opportunity cost in one use is the marginal return forgone in the other. If uses interact, units differ, or a constraint binds, compare the full incremental effect instead of mechanically equalizing two reported marginals. The general test is unchanged: no feasible reallocation should raise the stated total.

## The Cost of Producing Something Is the Best Thing You Give Up to Make It

Ask a businessperson what a product costs and you will hear a number: so much for materials, labor, and machines. That accounting figure has its uses, but it is not what an economist means by cost. The cost of making something is the most valuable other thing those same resources could have produced instead. This is the same idea we met on the first day, *opportunity cost*, now pointed at production rather than personal choices. Every cost is a sacrificed opportunity. The dollars on the invoice matter only because they measure what those resources would have fetched in their best other use.

This is why we do not measure costs in labor hours, tempting as that is. An hour is not an hour. A surgeon's hour and a shelf-stocker's hour command wildly different pay because they can produce wildly different value elsewhere. An hour is worth its best alternative use, not the reading on the clock, so "it took 200 hours to make" tells you almost nothing about cost until you know what those hours could otherwise have done.

One more confusion controls everything that follows. Being more productive at making something is not the same as being a lower-cost producer of it. A baker who churns out twice as many loaves per day as her neighbor is more productive, but that does not yet tell us her loaves are cheaper, because the cost of a loaf is the soup or pies she gives up to bake it, and we have not asked what she gives up. Productive ability is about how much you can make; cost is about what you forgo to make it.

### No One Can Be the Low-Cost Producer of Everything

In the two-person, two-good comparison developed in Part B, one good's opportunity-cost ratio is the inverse of the other's. One person therefore cannot have the lower opportunity cost in both goods, and someone less productive in both can still have a comparative advantage in one. With many people and goods, however, not every person must be the lowest-cost producer of something. Comparative advantage is a relationship within specified alternatives, not a personal entitlement to a market niche.

## Marginal Cost Rises as You Produce Faster

So far, cost held flat: giving up one good for another cost the same amount no matter how many units were already made. Real production is rarely that tidy. To see how costs actually behave, meet Adam, who spends his days making cakes and could instead be making a whole basket of other goods. We will bundle everything else he could produce and call its dollar value Y, so we never have to track which particular other goods he forgoes. The cost of a cake, then, is the value of Y he gives up to bake it.

Two cost ideas need separating. The *average cost* of cakes is total cost divided by the number of cakes. The *marginal cost* is the addition to total cost from making one more cake, the cost of the next one specifically. They answer different questions, and confusing them causes no end of trouble.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Marginal Cost</dt><dd>The addition to total cost from making one more unit.</dd></div>
<div><dt>Average Cost</dt><dd>Total cost divided by the number of units produced.</dd></div>
</dl>
</aside>

| Cakes per day | Total cost (in Y) | Marginal cost (next cake, in Y) | Average cost (per cake, in Y) | Other goods Y still producible | Marginal worth of the cake (in Y) |
|---|---|---|---|---|---|
| 0 | — | — | — | 13.50 | — |
| 1 | 0.90 | 0.90 | 0.90 | 12.60 | 1.15 |
| 2 | 1.90 | 1.00 | 0.95 | 11.60 | 1.05 |
| 3 | 3.00 | 1.10 | 1.00 | 10.50 | 0.95 |
| 4 | 4.20 | 1.20 | 1.05 | 9.30 | 0.85 |
| 5 | 5.50 | 1.30 | 1.10 | 8.00 | 0.75 |
| 6 | 6.90 | 1.40 | 1.15 | 6.60 | 0.65 |
| 7 | 8.40 | 1.50 | 1.20 | 5.10 | 0.55 |
| 8 | 10.00 | 1.60 | 1.25 | 3.50 | 0.45 |
| 9 | 11.70 | 1.70 | 1.30 | 1.80 | 0.35 |
| 10 | 13.50 | 1.80 | 1.35 | 0.00 | 0.25 |

*Table 2. Adam's cost of cakes. Read down the marginal-cost column: each successive cake costs more Y than the one before. The marginal worths in the last column fall as he eats more cake. Adam stops where they cross.*

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t06a-production-and-costs/figures/t06a-adam-costs-interactive.html" title="Step the cake marker across Adam's daily output to see the marginal-cost bars up to that output sum to the total cost, with the average cost rising behind them." loading="lazy" style="width:100%; max-width:540px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t06a-production-and-costs/figures/t06a-adam-costs-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06a-production-and-costs/figures/t06a-adam-costs.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>The marginal costs sum to the total cost.</strong> Each extra cake costs a little more than the last, so the marginal-cost bars rise and drag the average-cost line up behind them; the bars up to any output stack to the total cost of producing at that rate. Step the cake marker across outputs 1 to 10 (tap a bar or use the arrow keys) to watch the running total build. If the frame does not load, <a href="/teaching/microeconomics/t06a-production-and-costs/figures/t06a-adam-costs-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06a-production-and-costs/figures/t06a-adam-costs.svg">view the static figure</a>.</figcaption>
</figure>

Look at the marginal-cost column. The first cake costs Adam 0.90 of Y; the second costs 1.00; the sixth costs 1.40. Marginal cost rises as he produces faster. Two relationships are baked into this table. First, the marginal costs add up to the total: the total cost of six cakes (6.90Y) is exactly the sum of the marginal cost of each of the first six. Second, marginal cost pulls average cost along with it. When the next unit costs more than the current average, it drags the average up; when it costs less, it pulls the average down; when it equals the average, the average holds still.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t06a-production-and-costs/figures/t06a-ep7-1-7-3-producer-ppf-interactive.html" title="Interactive producer-frontier figure: step a marker along a concave production-possibility frontier to read each cake's marginal cost off the slope, then toggle between two producers with different marginal costs." loading="lazy" style="width:100%; max-width:520px; aspect-ratio:1/1; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t06a-production-and-costs/figures/t06a-ep7-1-7-3-producer-ppf-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06a-production-and-costs/figures/t06a-ep7-1-7-3-producer-ppf.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>The drop in other goods for the next cake is its marginal cost.</strong> A producer's frontier shows the other goods he could still make at each rate of baking, and the height he gives up for one more cake is that cake's marginal cost. Because the frontier bows outward, each cake costs a little more of other goods than the last, so marginal cost rises as he bakes faster. Step the marker along Producer A's frontier to read the marginal cost of each cake straight off the slope, then toggle to Producer B, a second illustrative producer, to see different marginal costs obey the same rule. If the frame does not load, <a href="/teaching/microeconomics/t06a-production-and-costs/figures/t06a-ep7-1-7-3-producer-ppf-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06a-production-and-costs/figures/t06a-ep7-1-7-3-producer-ppf.svg">view the static figure</a>.</figcaption>
</figure>

A running back illustration makes that stick. He averages five yards a carry coming into the game, breaks off a six-yard run, and his average ticks up, though not all the way to six. Then he gets stuffed for two yards and his average slips back down. The most recent carry, the marginal one, tugs the average in its own direction. Cost works the same way, which is why a rising marginal cost eventually drags average cost up behind it.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A baker's average cost per cake is 1.05 of Y. The next cake she bakes costs 1.30. Does making it push her average cost up or down, and would a next cake costing only 0.90 do the opposite?</p>
</aside>

### Diminishing Marginal Returns Is Why Faster Costs More

Why does marginal cost eventually rise as you produce faster while some inputs remain fixed? The maintained short-run production regularity is the *law of diminishing marginal returns*. Holding technique and the quantity and quality of other inputs fixed, adding equal units of one homogeneous input eventually yields less extra output from each added unit. Marginal product may rise first, and the law does not say where the decline begins.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Law of Diminishing Marginal Returns</dt><dd>As you add more of one input to a fixed amount of the others, the extra output from each additional unit eventually falls, holding technique and input quality fixed.</dd></div>
</dl>
</aside>

| Units of the variable input | Total product | Marginal product (next unit) | Average product (per unit) |
|---|---|---|---|
| 0 | 0 | — | — |
| 1 | 6 | 6 | 6.0 |
| 2 | 16 | 10 | 8.0 |
| 3 | 24 | 8 | 8.0 |
| 4 | 30 | 6 | 7.5 |
| 5 | 34 | 4 | 6.8 |
| 6 | 36 | 2 | 6.0 |
| 7 | 36 | 0 | 5.1 |
| 8 | 32 | −4 | 4.0 |
| 9 | 27 | −5 | 3.0 |
| 10 | 21 | −6 | 2.1 |

*Table 3. Adding more of one input to fixed others. The marginal product climbs at first, peaks at the second unit, then falls, and eventually goes negative so that total product itself drops. Notice the same marginal-pulls-average rule: once marginal product sinks below the average, it drags the average down.*

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t06a-production-and-costs/figures/t06a-diminishing-returns-interactive.html" title="Drag the input marker across total, marginal, and average product to see marginal product peak at input 2, cross average product at its maximum at input 3, and hit zero right as total product peaks at input 7." loading="lazy" style="width:100%; max-width:520px; aspect-ratio:23/32; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t06a-production-and-costs/figures/t06a-diminishing-returns-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06a-production-and-costs/figures/t06a-diminishing-returns.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Marginal product rises, peaks, then falls below zero, and total product follows.</strong> As more of the variable input is added, marginal product first rises, peaks at input 2, then falls, crossing average product exactly at average product's own maximum (input 3). Once marginal product hits zero, total product stops rising (input 7); beyond that, extra input actually destroys output. Drag the input marker (or use the arrow keys) to sweep all three curves together. If the frame does not load, <a href="/teaching/microeconomics/t06a-production-and-costs/figures/t06a-diminishing-returns-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06a-production-and-costs/figures/t06a-diminishing-returns.svg">view the static figure</a>.</figcaption>
</figure>

If returns never diminished, one flowerpot could grow all the world's wheat by adding seeds and fertilizer. The fixed soil instead becomes a constraint. A kitchen similarly strains its oven and floor space as its output rate rises. If equal units of the variable input have a constant opportunity price, falling marginal product makes marginal cost rise. Changing input prices, input quality, technique, learning, or all inputs together is a different experiment.

That distinction matters. Suppose you could exactly clone all of Adam's inputs, doubling the kitchen, oven, and labor at once. That move need not raise the cost of a cake, because nothing is being crowded; you have simply built a second identical operation. Diminishing returns bites only when you add more of one thing to a fixed amount of the rest. It does not come from input prices rising.

### A Producer Stops Where the Next Unit's Worth Falls to Its Cost

Here is the production-side version of a rule you already know from demand. How many cakes should Adam make if he is on his own, both baking and eating them?

Look at the last column of Table 2, the marginal worth of each cake to Adam, the most Y he would give up to have it. As we saw on the first day, the more cake he already has, the less he will give up for one more, so those worths fall: 1.15, 1.05, 0.95. His marginal costs, meanwhile, rise: 0.90, 1.00, 1.10. Adam keeps baking while the next cake is worth more to him than it costs. The first is worth 1.15 and costs 0.90; the second is worth 1.05 and costs 1.00; the third would cost 1.10 but is worth only 0.95, so he stops at two cakes a day.

That is Adam's stopping rule: choose another unit while its marginal worth exceeds marginal cost. A competitive price-taking firm uses the parallel profit rule, producing while price, which equals marginal revenue in that benchmark, exceeds marginal cost. A price-searcher instead compares marginal revenue with marginal cost because selling more can require cutting price on earlier units. Fixed or startup costs, indivisible output, uncertainty, constraints, and spillovers can also affect the complete decision.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t06a-production-and-costs/figures/t06a-mc-vs-mw-interactive.html" title="Drag the point along Adam's marginal-worth line to see where it meets marginal cost" loading="lazy" style="width:100%; max-width:480px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t06a-production-and-costs/figures/t06a-mc-vs-mw-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06a-production-and-costs/figures/t06a-mc-vs-mw.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Adam bakes until marginal worth falls to meet marginal cost.</strong> Marginal cost rises with each cake baked (the bars); marginal worth falls (the line). Worth still exceeds cost through the second cake, but cost overtakes worth on the third, so Adam stops at two. Drag or arrow-key the point along the marginal-worth line to compare the two schedules at each quantity. If the frame does not load, <a href="/teaching/microeconomics/t06a-production-and-costs/figures/t06a-mc-vs-mw-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06a-production-and-costs/figures/t06a-mc-vs-mw.svg">view the static figure</a>.</figcaption>
</figure>

### Capital and Labor Substitute, and "Efficiency" Has No Meaning Until You Name the Goal

Tools and workers can substitute on some tasks and complement one another on others. When a wage rises, a firm may automate substitutable tasks, add equipment that raises remaining workers' productivity, change output, or combine those responses; adjustment costs and time matter. Wood, steel, plaster, and plastic likewise substitute only for specified uses. The cheapest feasible input mix follows relative prices, technology, output requirements, and complementarities rather than a universal capital-for-labor rule.

That brings us to a word people throw around as if it were obvious: *efficiency*. Because the cheapest mix depends on which input is scarce and costly, you cannot call a method wasteful just because it uses a great deal of some input; a method that leans hard on a cheap, abundant input may be exactly the right one. There is no efficiency in the abstract, only efficiency relative to a goal, the same lesson we drew on the first day when we called efficiency a no-waste test that cannot, by itself, tell you which point to aim for. Name the goal first; only then does "efficient" mean anything.

Once a goal is named, we can say precisely what efficient production means, and there are two ways to say the same thing. One: production is efficient when the output of one good is as large as it can be for whatever amounts of the other goods you have chosen to make. Two: production is efficient when you cannot make more of one good without making less of another. The two phrasings are equivalent. Each says that nothing is being wasted, that you have squeezed everything possible out of the resources, so the only way to get more of one thing is to give up some of another. Notice that this definition does not assume anyone has perfect knowledge. Efficient production uses the knowledge that actually exists and lets it be tested against results; knowledge is itself a costly resource, so being ignorant of something is not always wasteful or irrational, since gathering the information would have had its own cost.

## For Further Reading

Want to explore the source material? This lecture draws on the following chapters from two books by Armen A. Alchian and William R. Allen:

- *Universal Economics* (Liberty Fund, 2018): Ch. 7, “Keep Your Eye on the Marginals”; Ch. 14, “Productivity and Costs of Production”; Ch. 18, “Facts of Life”; Ch. 29, “The Demand for Productive Resources”.
- *Exchange and Production*, 3rd ed. (Wadsworth, 1983): Ch. 7, “Production with Specialization”.

<div class="econ-review">
<section class="econ-review__section">
<h3>Key takeaways</h3>
<ul>
<li><strong>Marginals govern the next choice.</strong> Totals accumulate and averages summarize; a fixed divisible resource maximizes a common objective by equalizing marginal returns across separable uses, while interactions or constraints require the full incremental comparison.</li>
<li><strong>Cost is opportunity cost, and fixed inputs eventually make faster production costlier.</strong> Holding technique, input quality, other inputs, and variable-input price fixed, diminishing marginal product raises marginal cost; learning, price changes, and long-run input adjustment are different experiments.</li>
<li><strong>The relevant marginal benefit meets marginal cost.</strong> A self-producer uses marginal worth, a competitive price-taker uses price, and a price-searcher uses marginal revenue; indivisibilities, fixed commitments, uncertainty, constraints, and spillovers complete the decision.</li>
</section>
</div>