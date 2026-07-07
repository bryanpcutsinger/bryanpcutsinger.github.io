---
title: "Specialization and Exchange"
topic: "T6 — Production, Costs, and Specialization (Part B)"
course: "Principles of Microeconomics (FAU)"
sessions: ["Fall 2026 — content session 13 (Tue 10/6)"]
ue_anchors: ["UE 15 (Specialization and Exchange)"]
be_anchors: ["BE 6 (specialization / economies of scale / middleman block)"]
word_target: "2500-6000"
status: approved        # Stage-2 sign-off 2026-06-15
audience: students
note: "Self-contained — assumes no access to the textbooks. Part B of t06-production-costs-specialization: comparative advantage, the cheaper newcomer, blocking entry, the two meanings of specialization, market size, diseconomies of scale, and middlemen (UE 15 + BE 6). Part A (production & costs) covers UE 14 + UE 17 sunk-cost/quasi-rent/SR-LR + BE 10. Source-of-truth for the Part-B deck; section headers are claims that map to slide titles. Continues the one Adam/Baker worked example begun in Part A; pays off T2's promise/puzzle."
# brief: ../t06-production-costs-specialization/brief.md
---

# Specialization and Exchange

Last session we built the machinery: cost is opportunity cost, the best thing you give up, and marginal cost rises as you produce faster, so a producer makes a good only up to where its worth meets its cost. We also turned up a loose thread. No one is the low-cost producer of everything, because cost in one good is the flip side of cost in the other, which means everyone is the cheaper producer of something. That was the resolution to the puzzle I left you with back when we studied trade: you can be worse at producing everything than the person next to you and still have something worth selling to them.

Today we pull that thread. We take the gap in costs and watch it do its work, letting people and firms specialize, undercut one another, and grow rich together even when one of them is worse at making everything. By the end you will see why specialization makes a society rich, why blocking a cheaper producer hurts almost everyone, and why "cut out the middleman" and "make it at home" are usually bad advice.

<aside class="econ-callout econ-objectives">
<p class="econ-callout__label">Learning objectives</p>
<p>By the end of this post you should be able to:</p>
<ul>
<li>Explain why two people can both grow richer by specializing and trading even when one is worse at producing everything, and use the gap in their marginal costs to say who should make each additional unit.</li>
<li>Trace who gains and who loses when a cheaper producer enters, and explain why the displaced incumbent's loss is partly a transfer while the net effect is new wealth.</li>
<li>Explain why blocking a cheaper producer, as occupational licensing does, protects a few incumbents at the expense of buyers and the broader economy.</li>
<li>Distinguish the two meanings of specialization, sorting work to the lower-cost producer and growing more productive by learning through doing, and explain why self-sufficiency makes a person or a nation poorer.</li>
<li>Explain why a bigger market allows finer specialization and cheaper production, so shrinking the market raises costs on both counts.</li>
<li>Explain why cost per unit eventually rises with size once monitoring and coordination break down, and why the cheapest size differs from one business to the next.</li>
<li>Explain why firms specialize across the stages of production, so that eliminating the middleman does not remove his work but dumps it back on you.</li>
</ul>
</aside>

## Specialization by Comparative Advantage Makes Two People Richer Together

Here is the payoff. People differ in what it costs them to make things; watch what that lets them do. Bring back Adam, the cake-maker from last session, and introduce Baker, the less talented of the two: working alone, he makes fewer cakes per day than Adam and fewer of the other goods, the basket whose dollar value we bundled together and called Y, as well. Adam has an *absolute advantage* in both. By the lazy intuition, Baker has nothing to offer.

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

*Table A (after UE Table 14.2 / 15.2). Adam's cost of cakes, the same schedule we built last session, now lined up against Baker's below. His marginal cost of a cake rises as he bakes faster, and the worth of each additional cake to him falls.*

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

*Table 5 (after UE Table 15.1). Baker is absolutely worse than Adam, yet over the first five cakes his marginal cost of a cake is lower than Adam's. He is the cheaper maker of the early cakes; Adam, whose marginal cost rises more slowly at higher rates, becomes the cheaper maker only past six cakes a day.*

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-baker-costs-interactive.html" title="Drag the handle along the x-axis (or use the arrow keys) to see Baker's marginal cost and marginal worth at each whole cake, and find where he stops baking for himself." loading="lazy" style="width:100%; max-width:520px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-baker-costs-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-baker-costs.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Baker stops baking for himself at 2 cakes a day.</strong> Baker's marginal cost of baking rises with each cake, while his marginal worth for another cake (his own demand) falls. The two cross near 2.7 cakes, but Baker can only bake whole cakes, so a self-sufficient Baker stops at 2 -- the last cake whose worth to him still meets or beats its cost; the 3rd cake would cost him 0.80Y but is worth only 0.70Y. Drag the handle (or use the arrow keys) to check the cost and worth at each whole cake from 1 to 8. If the frame does not load, <a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-baker-costs-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-baker-costs.svg">view the static figure</a>.</figcaption>
</figure>

Compare the marginal-cost columns. For the first cake, Baker gives up 0.40Y while Adam gives up 0.90Y. Baker is the cheaper cake-maker over the early units, even though he is worse at everything. His marginal cost climbs faster than Adam's, and the two cross at six cakes a day; beyond that, Adam is cheaper. But in the range where the early cakes get made, Baker is the low-cost producer. There it is again: worse at everything, yet the cheaper maker of something.

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

What actually tells each producer which good to specialize in is the comparison of relative prices to relative costs. Each person makes the good whose selling price is highest relative to what that good costs him, and he switches the moment the price ratio crosses his cost ratio. Picture a farmer who can grow oats or soybeans and gives up five oats for every soybean, so a soybean costs him five oats to make. If a soybean sells for more than five times the price of oats, he grows soybeans; if it sells for less, he grows oats. He switches to soybeans exactly when the price of oats falls below one-fifth the price of a soybean. Nobody has to assign him a crop. The relative prices he sees, set against his own relative costs, tell each producer where his comparative advantage pays best.

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

## A Cheaper Newcomer Spreads Gains Across the Whole Economy

So far it is two people. Real economies have millions, and the same logic scales without changing. Drop a third producer, Carter, into the Adam-and-Baker world. Carter can make a third cake more cheaply than Baker can; where Baker's third cake costs 0.80Y, Carter's costs less. So Carter offers Adam a cake below Baker's cost, and Adam, naturally, buys from whoever is cheapest.

| Cakes per day | Carter's total cost (in Y) | Carter's marginal cost (next cake, in Y) | Carter's average cost (per cake, in Y) | Carter's marginal worth of the cake (in Y) |
|---|---|---|---|---|
| 0 | – | – | – | – |
| 1 | 0.20 | 0.20 | 0.20 | 0.50 |
| 2 | 0.60 | 0.40 | 0.30 | 0.40 |
| 3 | 1.20 | 0.60 | 0.40 | 0.30 |
| 4 | 2.00 | 0.80 | 0.50 | 0.20 |
| 5 | 3.00 | 1.00 | 0.60 | 0.10 |

*Table 6 (after UE Table 15.3). Carter can make the early cakes more cheaply than Baker, so when he is allowed in, he undercuts Baker on the cake sold to Adam.*

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-carter-costs-interactive.html" title="Drag the output handle to see Carter's marginal cost and marginal worth of cakes" loading="lazy" style="width:100%; max-width:480px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-carter-costs-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-carter-costs.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Carter undercuts Baker's third cake.</strong> Carter's rising marginal cost crosses his falling marginal worth (demand) at two cakes — his own self-sufficiency stop — but his third cake still costs him only 0.60Y, below Baker's cost for the same cake, making the newcomer the low-cost supplier of that unit. Drag the output handle (or tap and use the arrow keys) to see the two margins at any output from one to five cakes. If the frame does not load, <a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-carter-costs-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t06b-specialization-and-exchange/figures/t06b-carter-costs.svg">view the static figure</a>.</figcaption>
</figure>

Trace who wins and who loses, because this is where economics earns its reputation for uncomfortable truths. Adam gains: he gets his cake at a lower price. Carter gains: he earns income he did not have before. Baker loses: he is pushed back to two cakes and gives up the income he earned on the third. Part of Adam's gain is simply a transfer from Baker, one man's loss becoming another's saving. But not all of it. The resources Baker no longer uses to bake that third cake do not vanish; they move to producing other goods, Y, and that extra output is brand-new wealth that did not exist before Carter showed up. The net effect across everyone is a gain, even though one identifiable person is worse off.

The people who get hurt are always the existing producers, the competitors of the newcomer, and their loss is real. If Baker's freed-up resources are people, they have to find new work, perhaps at lower pay for a while. That is why the next idea is the seed of nearly everything we will say about policy.

And before we get there, notice what happens to the newcomer's profit. The gains do not stay with Carter. He may pocket a profit at first, but as others copy his cheaper method, competition among them drives the price down toward cost, and the savings pass to consumers as lower prices. How long Carter keeps his profit depends on how fast others can imitate him. The same drama plays out constantly: rival chip-makers pour their profits into cheaper, better processors, and competing grocery chains shave their margins against each other so that shoppers, not the stores, capture most of the gain. Profit is the prize for finding a cheaper way; competition is what hands that prize, eventually, to everyone else. This also disposes of a famous error, the idea that producing for profit is somehow different from producing what people value. It is not. The way you earn a profit is by finding a cheaper way to give people what they want; the profit is the signal that you did, and a loss is the signal that someone else can do it cheaper.

## Blocking a Cheaper Producer Protects the Few at the Expense of the Many

What if Baker can stop Carter from entering? He has every incentive to try, and he can dress it up nicely: "Keep the jobs at home." "Don't let cheap outsiders flood the market." Suppose he persuades the authorities to bar Carter, whether Carter is a foreign seller or a newcomer down the street. The result is a higher price for Adam, a protected income for Baker, and the loss of all the new wealth Carter's entry would have created. Blocking a cheaper producer makes no one better off on net; it shields the incumbent at the expense of buyers and the broader economy.

This is the logic behind occupational licensing, licensing's most common form. A rule that says you may not sell a service unless the state grants you a license, and grants it only when existing supply is judged "inadequate," works exactly like blocking Carter: it keeps newcomers out and props up the incumbents' prices. There are hundreds of these; in various places you need a license, sometimes hundreds of hours and dollars of training, to braid hair or to give decorating advice. Apprenticeship rules that forbid you from working as a "qualified" carpenter or meat-cutter until you have served years under someone do the same thing by a different route. Any rule that delays or blocks entry has the same effect: fewer competitors, higher prices, protected insiders.

There is a political puzzle buried here that runs through the rest of the course. When a cheaper producer is blocked, the handful who would lose, the Bakers, each lose a great deal and fight ferociously to keep the rule, while the crowd who would gain each gain only a little and mostly stay home. The few beat the many, and inefficient protections survive even when almost everyone would be better off without them. We will take that apart when we get to political economy. For now, register that a cheaper newcomer who displaces incumbents is the opposite of a thief: a thief only transfers wealth, while a better, cheaper producer creates it, even as he hurts the people he undercuts.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A state lets you sell hair-braiding services only after hundreds of hours of licensed training, and grants a license only when existing salons are judged adequate. Name who this rule helps and who it hurts, and explain why the handful it protects fight harder to keep it than the many it costs fight to repeal it.</p>
</aside>

## Specialization Has Two Meanings, and Both Make Us Richer

So far "specialization" has meant one thing: letting the lower-cost producer make a good rather than each person making a little of everything. That basic meaning explains a great deal. A self-sufficient person, who consumes only what he makes with his own hands, is condemned to be poor, because he must do everything himself, including the things he is worst at. Specializing means producing far more of one thing than you personally use and buying the rest from others who are cheaper at making it. Cutting yourself off from that, in the name of "independence," does not make you independent. It makes you poorer. The same goes for a country that walls itself off from cheaper foreign goods: buying from the lower-cost producer abroad frees your own resources for what you do best, and refusing to is just self-sufficiency on a national scale, with the same result.

But specialization has a second meaning. Doing the same task over and over makes you better at it, not just cheaper relative to others but more productive in absolute terms. This is *learning by doing*, and it means specialization does not merely sort existing talent to its best use; it grows the talent. The surgeon who does one operation a thousand times becomes someone no generalist can match. And specializing lets a society avoid wasteful duplication: you do not buy your own printing press for one flyer; you hire a printer who already owns one and runs it all day, so expensive tools get concentrated where they will be used hard.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Learning By Doing</dt><dd>Becoming more productive at a task by repeating it many times.</dd></div>
</dl>
</aside>

## Bigger Markets Allow Finer Specialization and Cheaper Production

How far specialization can go depends on how big the market is, and this single idea explains a great deal about why cities and large economies are rich. The bigger the market you can sell into, the more finely you can specialize, because a narrow specialty only pays if there are enough customers to support it.

Picture a small town with one doctor. He has to be a generalist, handling everything from broken arms to fevers, because the town cannot keep a knee specialist busy. Move to a large city and you find specialists in knees, ankles, and feet, each doing nothing else, each better at his sliver than any generalist could be, because the city is big enough to fill their schedules. The size of the market set the depth of specialization, and that is part of why large, open economies out-produce small, closed ones.

Market size drives cost down through scale as well, because a large volume unlocks cheaper methods. This is why we make a few standardized models in enormous quantities rather than countless custom ones: the public would rather have a low-cost standard product than a pricey bespoke one, and the volume of a standard model is exactly what makes mass production cheap. Henry Ford's assembly line slashed the labor in building a car and brought the price within reach of ordinary families precisely because he committed to producing the same model in staggering numbers, spreading huge fixed investments over millions of units. Now imagine a law forbidding car sales across state lines. Prices would jump for two reasons: you would lose the volume that makes mass production cheap, and the room to specialize that only a large market provides. Shrink the market and you give up both engines of low cost at once.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>Suppose a law forbids selling cars across state lines. Give the two separate reasons the price of cars would rise, and connect each reason to a source of low cost that the larger market had provided.</p>
</aside>

## Past Some Size, Coordination Breaks Down: Diseconomies of Scale

Bigger is cheaper, but only up to a point. Push an enterprise past the size where people can be watched and coordinated, and cost per unit starts rising again. These are *diseconomies of scale*, and they are the reason the world is not one giant firm.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Diseconomies of Scale</dt><dd>The rise in cost per unit that sets in once an enterprise grows too large to monitor and coordinate.</dd></div>
</dl>
</aside>

The clearest illustration comes from Soviet collective farms, many times the size of a typical American farm. Tractor drivers, paid whether or not they did good work and impossible to monitor across such vast fields, plowed deep, careful furrows near the road where inspectors could see them and shallow, useless furrows out in the middle where no one would ever check. An owner-farmer plowing his own land has no such problem, because the person who bears the cost of a bad job is the same one doing it. The contrast also answers a famous question. When Soviet officials touring American farms asked who tells the farmers how much of each crop to grow, the answer baffled them: no one directs the farmers. Each one owns his land and watches the market prices of the crops he could plant, and those prices tell him what is worth growing. The coordination is real, but no planner produces it; we will see exactly how prices pull this off when we study how markets work. Monitoring is itself a cost, and past some size it overwhelms the savings from being big. It is why restaurants are small and steel mills are large: a restaurant needs an owner on-site watching the details, while a steel mill's processes can be standardized and supervised at scale. Cost per unit falls with size, then rises; somewhere in between sits the size that is actually cheapest, and it differs from one business to the next.

Capacity utilization works the same way, which is why prices sometimes look upside down. Filling an off-season cruise cabin or an empty airline seat costs the operator almost nothing extra, so it pays to discount deeply to flexible travelers, which is how retirees get cut-rate fares. By the same logic, a luxury hotel with vacancies can end up charging less for a night than a budget hotel that has filled up first. What drives the day's price is how full you are, not the stars on the sign.

## Firms Specialize Too, Which Is Why "Eliminate the Middleman" Fails

Everything we have said about people specializing applies to firms. A company does only the few stages of production it does most cheaply and buys the rest from others who are cheaper at their stages. General Motors builds millions of cars without making a single tire, because Goodyear and Michelin make tires more cheaply than GM could. This is specialization across firms, and it is everywhere.

It also reframes the perennial cry to "eliminate the middleman." The wholesaler, the trucker, the distributor, and the retailer are all specialists in a stage of getting goods from maker to user, and they survive because they do that stage more cheaply than you could, not because they are parasites. In some markets the chain is long: a trader in West Africa gathers groundnuts from many small farmers into a single truckload, and petty sellers break bulk back down, selling ten matches or half a cigarette to customers who cannot afford a whole pack. Each link does its job cheaper than the next person in line could. Cut out the middleman and you do not eliminate his work; you dump it back on yourself. We met this with trade already; now we see why it holds, because middlemen are specialists, cheaper at their stage by the same logic as everyone else. When suppliers cannot be relied on, a firm is forced to do everything itself, and that is costly. Soviet enterprises, unable to count on deliveries, made their own components at several times the specialists' cost and sometimes even made their own bricks. A firm that can trust its suppliers holds almost no inventory; Toyota famously kept only a few hours' worth of parts on hand, while Soviet industry stockpiled nearly a year's worth, idle inventory held only because a stoppage for want of a part was worse. Reliable specialization lets you carry little; unreliable supply forces you to hoard.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A friend says you can save money by cutting out the wholesaler and the trucker and buying straight from the factory. Explain why removing the middleman usually does not lower your cost, and what happens to the work he was doing.</p>
</aside>

<div class="econ-review">
<section class="econ-review__section">
<h3>Key takeaways</h3>
<ul>
<li><strong>Comparative advantage makes both sides richer.</strong> Because everyone is the cheaper maker of something, letting the lower-cost producer make each additional unit lets two people enjoy more together than they could apart, even when one is worse at everything.</li>
<li><strong>A cheaper newcomer creates net new wealth.</strong> His entry lowers the price for buyers and frees resources for other goods; the incumbent he displaces truly loses, but part of that loss is a transfer and the rest is wealth that did not exist before.</li>
<li><strong>Blocking a cheaper producer protects the few.</strong> Licensing and other entry barriers keep newcomers out and prop up incumbents' prices, helping no one on net at the expense of buyers and the broader economy.</li>
<li><strong>Specialization sorts talent and grows it.</strong> It lets the lower-cost producer make a good and makes people more productive through learning by doing, so cutting yourself off in the name of independence only makes you poorer.</li>
<li><strong>Bigger markets lower costs.</strong> A larger market supports finer specialization and the volume that makes mass production cheap, so shrinking the market gives up both engines of low cost at once.</li>
<li><strong>Past some size, coordination breaks down.</strong> When people can no longer be watched and coordinated, cost per unit rises again, which is why the cheapest size differs from one business to the next and the world is not one giant firm.</li>
<li><strong>Firms specialize too.</strong> Each does only the stages it performs most cheaply and buys the rest, so eliminating the middleman does not remove his work; it dumps it back on you.</li>
</ul>
</section>
</div>