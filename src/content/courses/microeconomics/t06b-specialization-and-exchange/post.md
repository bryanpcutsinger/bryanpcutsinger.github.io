---
title: "Specialization and Exchange"
topic: "T6 — Production, Costs, and Specialization (Part B)"
course: "Principles of Microeconomics (FAU)"
sessions: ["Fall 2026 — content session 13 (Tue 10/6)"]
ue_anchors: ["UE 15 (Specialization and Exchange)"]
be_anchors: []
ep_anchors: ["E&P Fig 7-9 (ch. 7, p. 148) — gains from specialized production and exchange at a common market price"]
word_target: "2900-3600"
word_budget: 3433
  # word_budget 3600 -> 3652 (+52): For Further Reading section added 2026-07-22
  # word_budget 3652 -> 3612 (-40): BE->lecture redraft 2026-07-23 (Ford Model T sentence -> ext-t06b-ford-01)
  # word_budget 3612 -> 3433 (-179): UE–E&P Wave-C verification 2026-08-10; prior 208-word headroom retained
status: approved        # scope-reduction R4 pass 2026-07-21; E&P integration M7 done-gate 2026-07-20; prior approval 2026-06-15
audience: students
note: "Self-contained — assumes no access to the textbooks. Part B of T6 core: comparative advantage, the cheaper newcomer, blocking entry via occupational licensing, and the two meanings of specialization plus market size (UE 15). Diseconomies of scale and the firms-specialize/middleman material are lecture-only content in this topic's extensions.md. Part A covers UE 7's marginal toolkit plus UE 14 production/cost and BE 10. UE 17 is owned by T7."
# brief: ../t06-production-costs-specialization/brief.md
---

# Specialization and Exchange

Part A built the machinery: cost is opportunity cost, the best thing you give up, and marginal cost rises in Adam's short-run schedule as he bakes faster, so a self-producer makes a good only up to where its worth meets its cost. It also turned up a loose thread. In the two-person, two-good model, cost in one good is the flip side of cost in the other: if one person has the lower relative cost of one good, the other has it in the other good. That resolves the puzzle from the exchange topic: you can be worse at producing everything than the person next to you and still have something worth selling to them. With many people and goods, however, a particular person need not be the lowest-cost supplier of anything in that market.

Part B pulls that thread. We take the gap in costs and watch how specialization and exchange can make both participants better off even when one is worse at making everything. We then ask what survives outside the two-person model: who gains and loses from entry, when specialization lowers cost, and what must be true before an entry restriction can be judged harmful.

<aside class="econ-callout econ-objectives">
<p class="econ-callout__label">Learning objectives</p>
<p>By the end of this post you should be able to:</p>
<ul>
<li>Explain why two people can both gain from specialization and trade even when one is worse at producing everything, and use specified marginal costs, marginal worths, and feasible trade prices to identify the mutually beneficial extra unit.</li>
<li>Trace who gains and who loses when a cheaper producer enters, distinguish transfers from newly released resources, and evaluate an entry restriction only after asking whether it supplies an offsetting quality, information, safety, or rights-enforcement benefit.</li>
<li>Distinguish sorting work to the lower-cost producer from learning by doing, and explain why larger markets can support finer specialization and lower-cost methods without assuming that every task, firm, or community benefits equally.</li>
</ul>
</aside>

**Figure focus.** Required: comparative costs and the Ana/Ben PPF. Others are references unless assigned.

## Specialization by Comparative Advantage Makes Two People Richer Together

Here is the payoff. People differ in what it costs them to make things; watch what that lets them do. Bring back Adam, the cake-maker from Part A, and introduce Baker, the less talented of the two: working alone, he makes fewer cakes per day than Adam and fewer of the other goods, the basket whose dollar value we bundled together and called Y, as well. Adam has an *absolute advantage* in both. By the lazy intuition, Baker has nothing to offer.

He does. Put their cost tables side by side. Recall Adam's first: each row is a production rate in cakes per day, with the cost in Y he gives up and the most Y he would give up to have one more cake.

| Cakes per day | Adam's total cost (in Y) | Adam's marginal cost (next cake, in Y) | Adam's average cost (per cake, in Y) | Adam's marginal worth of the cake (in Y) |
|---|---|---|---|---|
| 0 | – | – | – | – |
| 1 | 0.90 | 0.90 | 0.90 | 1.15 |
| 2 | 1.90 | 1.00 | 0.95 | 1.05 |
| 3 | 3.00 | 1.10 | 1.00 | 0.95 |
| 4 | 4.20 | 1.20 | 1.05 | 0.85 |
| 5 | 5.50 | 1.30 | 1.10 | 0.75 |
| 6 | 6.90 | 1.40 | 1.15 | 0.65 |
| 7 | 8.40 | 1.50 | 1.20 | 0.55 |
| 8 | 10.00 | 1.60 | 1.25 | 0.45 |

*Table A. Adam's cost of cakes, the same schedule built in Part A, now lined up against Baker's below. His marginal cost of a cake rises as he bakes faster, and the worth of each additional cake to him falls.*

Now Baker's.

| Cakes per day | Baker's total cost (in Y) | Baker's marginal cost (next cake, in Y) | Baker's average cost (per cake, in Y) | Baker's marginal worth of the cake (in Y) |
|---|---|---|---|---|
| 0 | – | – | – | – |
| 1 | 0.40 | 0.40 | 0.40 | 0.90 |
| 2 | 1.00 | 0.60 | 0.50 | 0.80 |
| 3 | 1.80 | 0.80 | 0.60 | 0.70 |
| 4 | 2.80 | 1.00 | 0.70 | 0.60 |
| 5 | 4.00 | 1.20 | 0.80 | 0.50 |
| 6 | 5.40 | 1.40 | 0.90 | 0.40 |
| 7 | 7.00 | 1.60 | 1.00 | 0.30 |
| 8 | 8.80 | 1.80 | 1.10 | 0.20 |

*Table 5. Baker is absolutely worse than Adam, yet over the first five cakes his marginal cost of a cake is lower than Adam's. He is the cheaper maker of the early cakes; Adam, whose marginal cost rises more slowly at higher rates, becomes the cheaper maker only past six cakes a day.*

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-baker-costs-interactive.html" title="Drag the handle along the x-axis (or use the arrow keys) to see Baker's marginal cost and marginal worth at each whole cake, and find where he stops baking for himself." loading="lazy" style="width:100%; max-width:520px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-baker-costs-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-baker-costs.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Baker stops baking for himself at 2 cakes a day.</strong> Baker's marginal cost of baking rises with each cake, while his marginal worth for another cake (his own demand) falls. The two cross near 2.7 cakes, but Baker can only bake whole cakes, so a self-sufficient Baker stops at 2 -- the last cake whose worth to him still meets or beats its cost; the 3rd cake would cost him 0.80Y but is worth only 0.70Y. Drag the handle (or use the arrow keys) to check the cost and worth at each whole cake from 1 to 8. If the frame does not load, <a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-baker-costs-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-baker-costs.svg">view the static figure</a>.</figcaption>
</figure>

Compare the marginal-cost columns. For the first cake, Baker gives up 0.40Y while Adam gives up 0.90Y. Baker is the cheaper cake-maker over the early units, even though he is worse at everything. His marginal cost climbs faster than Adam's, and the two cross at six cakes a day; beyond that, Adam is cheaper. But in the range where the early cakes get made, Baker is the low-cost producer. There it is again: worse at everything, yet the cheaper maker of something. Do not read that as Baker out-producing Adam: being the cheaper maker of a cake and being able to make more cakes are separate questions. Cost per unit tells you what a producer gives up for the next unit, not how many units he can turn out, and Baker's own daily totals stay lower than Adam's throughout.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-comparative-cost-interactive.html" title="Drag the quantity of cakes per day to compare Baker's and Adam's marginal costs — below six cakes Baker is cheaper, above six Adam is, and they are exactly equal at six." loading="lazy" style="width:100%; max-width:560px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-comparative-cost-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-comparative-cost.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>The low-cost maker changes with the quantity.</strong> Baker's marginal cost starts lower but rises steeply; Adam's starts higher but rises more gently. Below six cakes a day Baker is the cheaper maker; above six, Adam is — and at exactly six cakes both cost 1.40Y, the crossover that opens the door to trade. Drag the quantity handle (or use the arrow keys) to compare who is cheaper at each rate of output. If the frame does not load, <a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-comparative-cost-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-comparative-cost.svg">view the static figure</a>.</figcaption>
</figure>

Left alone, each man makes two cakes for himself, where his rising cost catches up to his falling worth. Now let them cooperate. Adam would dearly like a third cake, but making it himself would cost 1.10Y while it is worth only 0.95Y to him, so he forgoes it. Baker would not bake a third for himself either, since it would cost him 0.80Y and be worth only 0.70Y. But here is the opening: Baker can make that third cake for 0.80Y and sell it to Adam, for whom it is worth 0.95Y. At any price between those two numbers both gain; say they settle on 0.90Y. Baker collects 0.90 for a cake that cost him 0.80; Adam pays 0.90 for a cake worth 0.95 to him. On their own the two of them made and ate four cakes; by specializing and trading, they enjoy five. No new talent appeared. They simply let the lower-cost producer make the extra unit. That gap in their marginal costs is the engine, exactly as a gap in their worths drove the trades we studied earlier. People trade on differences, whether the difference is in what they value or in what it costs them to produce.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-gains-exchange-interactive.html" title="Drag the quantity handle to see Baker's cost and Adam's worth at each cake, and whether a gain from trade remains" loading="lazy" style="width:100%; max-width:480px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-gains-exchange-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-gains-exchange.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Both gain from trade — up to a point.</strong> Baker's rising marginal cost of baking and Adam's rising marginal worth of buying meet at 3.5 cakes; every cake before that, sold at the going price of 0.90Y, pays Baker more than it costs him and asks Adam less than it's worth. Drag the quantity handle along the x-axis (or tap and use the arrow keys) to see the cost, the worth, and the gain at any cake — and watch the gain disappear once the marginal cost passes the marginal worth. If the frame does not load, <a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-gains-exchange-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-gains-exchange.svg">view the static figure</a>.</figcaption>
</figure>

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>Adam values a third cake at 0.95Y but would spend 1.10Y to bake it himself, so he skips it. Baker can bake that same cake for 0.80Y. Explain why a sale at 0.90Y leaves both men better off, and why Baker, not Adam, is the one who should make it.</p>
</aside>

What actually tells each producer which good to specialize in is the comparison of relative prices to relative marginal costs. Picture a farmer who can grow oats or soybeans and gives up five oats for every soybean, so a soybean costs him five oats to make. If a soybean sells for more than five times the price of oats, the stated comparison favors soybeans; if it sells for less, it favors oats. He switches at the price ratio equal to his cost ratio. With rising costs he may produce some of both rather than specialize completely, and capacity, trade costs, risk, joint production, or other constraints can change the feasible pattern. Relative prices still coordinate the benchmark choice without assigning him a crop, but comparative advantage identifies a potential direction of gain, not a unique real-world production plan by itself.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Absolute Advantage</dt><dd>Producing more of a good than another person can from the same resources.</dd></div>
<div><dt>Comparative Advantage</dt><dd>The good you can make by giving up the least of other goods, so you produce it at a lower cost than others do.</dd></div>
</dl>
</aside>

A frontier diagram makes the same point in a different register.

![Two production-possibility frontiers, Ana's and Ben's, with trade lines that let each consume at a point beyond his or her own frontier.](/teaching/microeconomics/t06b-specialization-and-exchange/figures/t02-comparative-advantage.svg)

*Trade lets each person consume beyond his own production frontier. Ana is better at making both goods, yet Ben, who is worse at everything, still gains: by specializing in what he gives up least to make and trading for the rest, each ends up at a consumption point outside the boundary he could reach alone.*

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-ep7-9-specialization-gains-interactive.html" title="Interactive specialization figure: toggle between two producers each self-sufficient and both trading at one common market price. The price pulls each producer's marginal cost into line with it, the low-cost producer sells to the other, and both capture a gain from specialization." loading="lazy" style="width:100%; max-width:720px; aspect-ratio:30/19; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-ep7-9-specialization-gains-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-ep7-9-specialization-gains.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>A single market price does the coordinating in this benchmark.</strong> The earlier gains figure showed the two parties splitting the gain from one trade; this one shows how a market price organizes the whole arrangement. Each price-taking producer bakes up to where rising marginal cost meets price and buys up to where falling marginal worth meets it, so the low-cost producer produces a surplus and sells it while the other buys the difference. Among active producers with an interior choice, the common price brings marginal costs into line: the efficient result predicted by the equimarginal rule when the product is comparable, relevant costs are counted, rights are secure, and transaction costs or spillovers do not overturn the comparison. Toggle between each producer on his own and both trading at the common price to watch the gains appear. If the frame does not load, <a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-ep7-9-specialization-gains-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-ep7-9-specialization-gains.svg">view the static figure</a>.</figcaption>
</figure>

## A Cheaper Newcomer Spreads Gains Across the Whole Economy

So far it is two people. To isolate entry while holding the other conditions fixed, add a third producer, Carter, to the Adam-and-Baker world. Carter can make a third cake more cheaply than Baker can; where Baker's third cake costs 0.80Y, Carter's costs less. If the cakes are comparable and switching is not too costly, Carter can offer Adam a cake below Baker's cost and Adam buys from him.

| Cakes per day | Carter's total cost (in Y) | Carter's marginal cost (next cake, in Y) | Carter's average cost (per cake, in Y) | Carter's marginal worth of the cake (in Y) |
|---|---|---|---|---|
| 0 | – | – | – | – |
| 1 | 0.20 | 0.20 | 0.20 | 0.50 |
| 2 | 0.60 | 0.40 | 0.30 | 0.40 |
| 3 | 1.20 | 0.60 | 0.40 | 0.30 |
| 4 | 2.00 | 0.80 | 0.50 | 0.20 |
| 5 | 3.00 | 1.00 | 0.60 | 0.10 |

*Table 6. Carter can make the early cakes more cheaply than Baker, so when he is allowed in, he undercuts Baker on the cake sold to Adam.*

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-carter-costs-interactive.html" title="Drag the output handle to see Carter's marginal cost and marginal worth of cakes" loading="lazy" style="width:100%; max-width:480px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-carter-costs-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-carter-costs.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Carter undercuts Baker's third cake.</strong> Carter's rising marginal cost crosses his falling marginal worth (demand) at two cakes — his own self-sufficiency stop — but his third cake still costs him only 0.60Y, below Baker's cost for the same cake, making the newcomer the low-cost supplier of that unit. Drag the output handle (or tap and use the arrow keys) to see the two margins at any output from one to five cakes. If the frame does not load, <a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-carter-costs-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-carter-costs.svg">view the static figure</a>.</figcaption>
</figure>

Trace who wins and who loses, because this is where economics earns its reputation for uncomfortable truths. In the stated model, Adam gains: he gets his cake at a lower price. Carter gains: he earns income he did not have before. Baker loses: he is pushed back to two cakes and gives up the income he earned on the third. Part of Adam's gain is a transfer from Baker, one person's loss becoming another's saving. The net addition is the value of what Baker's released resources can produce elsewhere, minus transition, search, transaction, and any omitted quality or spillover costs. It is positive in this numerical example because those costs are assumed away; that does not mean every affected person gains.

The people who get hurt are always the existing producers, the competitors of the newcomer, and their loss is real. If Baker's freed-up resources are people, they have to find new work, perhaps at lower pay for a while. That is why the next idea is the seed of nearly everything we will say about policy.

And before we get there, notice what can happen to the newcomer's profit. If the method can be copied, entry is open, and capacity can expand, competition among suppliers tends to pull price toward sustainable cost and pass more of the saving to buyers. Patents, scarce inputs, switching costs, scale economies, or slow entry can make that process incomplete or delayed. Exactly how competition works is a story this course takes up when we turn to the competitive firm.

## Blocking a Cheaper Producer Protects the Few at the Expense of the Many

What if Baker can stop Carter from entering? He has an incentive to try, and he can dress it up nicely: "Keep the jobs at home." "Don't let cheap outsiders flood the market." Suppose he persuades the authorities to bar Carter, whether Carter is a foreign seller or a newcomer down the street. In the model, the result is a higher price for Adam, protected income for Baker, and loss of the output Carter's lower cost would have released. That is a net loss when the restriction supplies no offsetting benefit. A real policy comparison must also count any credible effect on safety, quality information, rights, enforcement, or other spillovers, then compare it with less restrictive ways to obtain that benefit.

This is the logic behind occupational licensing, licensing's most common form in the chapter's examples. A rule that grants a license only when existing supply is judged "inadequate" directly protects incumbents by conditioning entry on their market position. Training, examination, or disclosure requirements can instead help buyers assess quality or reduce harm, but they also raise entry and compliance costs; whether their benefit justifies those costs is an empirical and institutional question. The design matters. A narrowly tailored certification or inspection regime may preserve more entry than a blanket prohibition, while an incumbent-controlled board has a stronger route to protection.

There is a political puzzle buried here that runs through the rest of the course. When a cheaper producer is blocked, incumbents may each have a large stake while buyers each bear a small one, making the former easier to organize. That mechanism does not guarantee victory: salience, institutions, evidence, ideology, and countervailing groups also matter. It does explain why some costly protections can persist. In the benchmark, a cheaper entrant differs from a thief because the entrant releases resources for other production rather than merely transferring an existing good; whether a particular entrant creates a net gain depends on counting all relevant effects.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A state lets you sell hair-braiding services only after hundreds of hours of licensed training, and grants a license only when existing salons are judged adequate. Name who this rule helps and who it hurts, and explain why the handful it protects fight harder to keep it than the many it costs fight to repeal it.</p>
</aside>

## Specialization Has Two Meanings, and Both Make Us Richer

So far "specialization" has meant one thing: letting the lower-cost producer make a good rather than each person making a little of everything. Specializing means producing more of some things than you personally use and obtaining the rest from others. When exchange is reliable and its full cost is below the opportunity-cost saving, this avoids costly self-sufficiency. Dependence on suppliers, disruption risk, bargaining exposure, and adjustment costs are real counterweights, so the economic question is how far to specialize, not whether maximum specialization is always best.

But specialization has a second meaning. Doing the same task over and over makes you better at it in the source's simplified statement; more precisely, repetition can improve performance at a suitable task through *learning by doing*. The surgeon who performs one operation many times can develop expertise a generalist lacks, and a printer can spread specialized equipment over many customers. The effect is not automatic: fatigue, narrow skill, coordination failures, or a changing technology can offset it. Learning is therefore a possible source of falling cost, distinct from initially sorting work by comparative advantage.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Learning By Doing</dt><dd>Becoming more productive at a task by repeating it many times.</dd></div>
</dl>
</aside>

## Bigger Markets Allow Finer Specialization and Cheaper Production

Market size is one condition governing how far specialization can go. The bigger the market you can sell into, the more finely you can specialize in the benchmark, because there may be enough customers to cover a narrow specialty's fixed investment. Transport, communication, contracting, and trust determine how much of the nominal market is actually reachable.

Picture a small town with one doctor. The local patient base may not keep a knee specialist busy, while a large city can fill several specialists' schedules. Density and access can therefore deepen specialization. They do not prove that every specialist is better than every generalist or that size alone caused an economy's income; selection, institutions, capital, knowledge, and infrastructure also matter.

Larger volume can also make a high-fixed-cost, low-marginal-cost technique worthwhile. That is why standardized products are often cheaper than custom ones. But scale economies can be exhausted or reversed by coordination cost, congestion, or capacity limits. A law forbidding car sales across state lines would tend to sacrifice some volume and specialization if it genuinely fragmented the market; the size of the price effect would depend on existing plant scale, trade costs, and substitution among sellers.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>Suppose a law forbids selling cars across state lines. Give the two separate reasons the price of cars would rise, and connect each reason to a source of low cost that the larger market had provided.</p>
</aside>

## For Further Reading

Want to explore the source material? This lecture draws on the following chapters from two books by Armen A. Alchian and William R. Allen:

- *Universal Economics* (Liberty Fund, 2018): Ch. 15, “Specialization and Exchange”.
- *Exchange and Production*, 3rd ed. (Wadsworth, 1983): Ch. 7, “Production with Specialization”.

<div class="econ-review">
<section class="econ-review__section">
<h3>Key takeaways</h3>
<ul>
<li><strong>Comparative advantage identifies potential gains from a different production pattern.</strong> In the two-person example, the lower-cost producer makes an extra unit and trades it at a price between cost and marginal worth; both gain even though one is worse at everything.</li>
<li><strong>Entry has both efficiency and distributional effects.</strong> A lower-cost entrant can release resources for other output while hurting incumbents. An entry restriction is a net loss only after any credible quality, information, safety, rights, or enforcement benefit is counted.</li>
<li><strong>Specialization has benefits and limits.</strong> Sorting by comparative advantage, learning by doing, and a market large enough to support specialized methods can lower cost; dependence, transaction costs, risk, capacity, and coordination determine how far specialization should go.</li>
</ul>
</section>
</div>