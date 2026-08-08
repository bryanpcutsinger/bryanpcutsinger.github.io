---
title: "Markets and Coordination"
topic: "T4 — Markets, Prices, and Coordination (Part A)"
course: "Principles of Microeconomics (FAU)"
sessions: ["Fall 2026 — content session 6 (Thu 9/10)"]
ue_anchors: ["UE 6", "UE 10", "UE 11 (marketing arrangements, Q8 derived-cost price web, and Q9 universal allocation)", "UE 25 (predictable prices, voluntary queues, preferred customers, and blind blocks)"]
be_anchors: []
ep_anchors: ["E&P Fig 4-1 (ch. 4) — market demand as horizontal sum of individual demands", "E&P Fig 4-4 (ch. 4) — supply elasticity and input generality", "E&P ch. 4 (Figs 4-2/4-3) — reduction in supply, reallocation of a fixed stock, and the anti-'gouging' price-ceiling case (a car destroyed by fire)", "E&P ch. 5 pp. 88–90 — inventories, reserve capacity, stable prices, and queues as information-cost economizers"]
word_budget: 3610
  # word_budget 3600 -> 3687 (+87): For Further Reading section added 2026-07-22
  # word_budget 3687 -> 3660 (-27): BE→A&A redraft 2026-07-24 — Thatcher/three-jobs (BE 2) + hurricane/1906-earthquake (BE 3) → lecture cards; opener/§4 coordination/§6/§7 re-grounded on E&P 4 (signals-and-rewards, car-fire anti-gouging, reduction-vs-shortage) + UE 11 Q8 price web; be_anchors []. Measured stripped 3,646.
  # word_budget 3660 -> 3758 (+98): ep4-1 widget round-2 rebuild 2026-08-07 — figure now carries the full E&P Fig 4-1/4-2/4-3 sequence (scenario buttons); figcaption rewritten + three prose echo pointers (new-buyer lesson, car-burns rerun, two-cars-arrive clearing). Measured stripped 3,744; 14-word headroom preserved.
  # word_budget unchanged (3758): ep4-1 round-3 + ep4-4 round-2 figcaption edits 2026-08-07 (drag sentences replaced by button/old-price sentences). Measured stripped 3,718; 40-word headroom.
  # word_budget 3758 -> 3610 (-148): ep4-4 figure PULLED AND BANKED 2026-08-07 (instructor: supply not yet taught at session 6; re-host in T7) — embed + figcaption removed, lecture card ext-t04a-supply-elasticity-10 added. Measured stripped 3,570; 40-word headroom preserved.
  # word_budget unchanged (3610): econ-writing round 2 2026-08-07 (10 line edits). Measured stripped 3,541.
  # word_budget unchanged (3610): sequence-alignment review 2026-08-08 — transaction-cost accounting, reservation demand, fixed-stock interpretation, allocation assumptions, ceteris-paribus demand, and persistent-control terminology tightened. Measured stripped 3,521; 89-word headroom.
word_target: "3400-3600"
status: approved        # E&P integration M4 done-gate 2026-07-20; prior approval 2026-07-01
audience: students
note: "Self-contained — assumes no access to the textbooks. Source-of-truth for the T4 session-6 deck; section headers are claims that map to slide titles. First of three T4 session posts; the price-controls post (session 7) and the tax-incidence post (session 8) follow."
# brief: ../t04-markets-prices-coordination/brief.md
---

# Markets and Coordination

A modern economy is a bewildering thing. Millions of people who never meet and never coordinate on purpose somehow produce, ship, and sell the food, fuel, and clothing each of the others wants, in roughly the right amounts and the right places, with no authority computing anyone's share. No one plans how much bread to bake or where to send the milk, yet the groceries stay stocked. How do all those separate decisions add up to a working whole instead of chaos, and when goods do run short, what has gone wrong?

That is the puzzle this post takes up, and the answer runs through prices. An ordered flow of signals and rewards guides the seeming chaos, with no one in charge: a price at once tells people how scarce a thing is, rewards those who supply more of it and economize on using it, and steers each scarce good toward whoever values it most. This post builds up that machinery: where trade stops and why, what makes a market open or closed, how a price settles at the level that matches buyers to goods, and how a single number coordinates an economy no one is running. Once that machinery is in hand, the posts that follow ask what happens when a law forbids the price to move.

<aside class="econ-callout econ-objectives">
<p class="econ-callout__label">Learning objectives</p>
<p>By the end of this post you should be able to:</p>
<ul>
<li>Explain why the full price of a trade is the money price plus every nonmoney cost of completing it, and why a middleman who shrinks those costs can raise the seller's net while lowering the buyer's full price.</li>
<li>Distinguish an open market from a closed one, explain why closing a market by restricting entry transfers wealth to protected insiders without creating any, and tell freedom of competition apart from freedom from competition.</li>
<li>Construct market demand as the horizontal sum of individual demands, identify the market-clearing price that matches the amount demanded to a fixed available quantity, and explain why, under the model's assumptions, a rising price reallocates that stock regardless of who held it first — distinguishing a price-controlled shortage or surplus from physical scarcity.</li>
</ul>
</aside>

## Trade Runs on the Full Price, Not Just the Money Price

As the previous post showed, informed voluntary trade makes both sides expect gains, realized when they understand the terms and each delivers as promised. Yet trade stops before every otherwise-beneficial swap because finding a partner, judging goods, haggling, hauling, and enforcing delivery all consume resources. Those *transaction costs* stop the remaining trades once their expected gains no longer cover the costs. So the *full price* of a thing is the money price plus all the nonmoney costs of completing the trade. A used car listed at five thousand dollars can cost considerably more once you add weekends spent searching, time arranging an inspection, and the risk of being cheated.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Transaction Costs</dt><dd>The time, effort, and risk of finding a trading partner, judging quality, haggling, and making sure the deal is carried out.</dd></div>
<div><dt>Full Price</dt><dd>The money price of a good plus all the nonmoney costs of completing the trade.</dd></div>
</dl>
</aside>

Middlemen exist to shrink these costs. A *middleman* stands between the original seller and final buyer: a wholesaler or broker can search, sort, and vouch at lower cost, raising the seller's net while lowering the buyer's full price. The cash spread between what he collects and pays compensates him for those services; profit is only what remains after his own real costs.

The table below traces the gain for a single egg. Without a middleman, the buyer pays eight cents in cash plus a penny of his own trouble, a full price of nine cents; the seller collects eight cents but bears half a cent of selling costs, netting seven and a half. A specialist handles the messy parts. Now the buyer pays eight and a half cents in cash but nothing in extra trouble, and the seller nets seven and three-quarter cents. The buyer's full price falls and the seller's take rises, even though the cash price the buyer hands over goes up.

| Buying one egg | Money | Nonmoney | Full price |
|---|---|---|---|
| **Without a middleman** | | | |
| Buyer pays | 8.0¢ | 1.0¢ | 9.0¢ (paid) |
| Seller gets | 8.0¢ | 0.5¢ | 7.5¢ (received) |
| | | total do-it-yourself cost | 1.5¢ |
| **With a middleman** | | | |
| Buyer pays | 8.5¢ | 0 | 8.5¢ (paid) |
| Seller gets | 7.75¢ | 0 | 7.75¢ (received) |
| | | specialized service cost | 0.75¢ |

*The three-quarter-cent spread pays for the intermediary's service, which this example treats as a real cost rather than pure profit. It replaces 1.5 cents of do-it-yourself costs: the buyer saves half a cent and the seller gains a quarter-cent. That is why "buy direct and eliminate the middleman's cost" is usually a confusion.*

A discount store boasts that it "cuts out the middleman" so you save, but eliminating the middleman does not eliminate the work he was doing; it just hands that work back to you. Do it yourself, and the cost has not vanished, only changed hands. Sometimes doing it yourself is cheaper; often the specialist is, which is why he has a business.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A discount store boasts that it "cuts out the middleman" so you save. If the searching, sorting, and hauling he did still has to happen, who takes it on, and when would buying direct actually leave you worse off?</p>
</aside>

### Open Markets Have Free Entry; Closed Markets Are Walled Off

A market is *open* when anyone may enter it to buy or sell, with no contrived barriers blocking the way. It is *closed* when access is restricted, when some would-be sellers are kept out by force, collusion among insiders, or law. The distinction matters because nearly every arrangement that protects existing sellers is a way of closing a market.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Open Market</dt><dd>A market anyone may enter to buy or sell, with no contrived barriers to entry.</dd></div>
<div><dt>Closed Market</dt><dd>A market whose access is restricted by force, by collusion among insiders, or by law.</dd></div>
</dl>
</aside>

Consider the standard tools for keeping competitors out: occupational licensing (a government permit to work in a trade, so insiders can lobby to make it hard to get), compulsory certification, pure-food rules written stricter than safety requires, and old bans on Sunday sales. Each raises the cost of entering, thinning out competition for those already inside, and each can be defended on other grounds. But measured strictly by whether it keeps entry free, every one of them is a step away from an open market and toward a closed one.

An open market presumes a few things we rarely notice: that people are legally free to make the trade, that private property rights exist so what is traded is actually yours to sell and stays yours after you buy it, and that people are looking to improve their situation. Strip away any of these and the market stops working as one.

### Restricting Entry Transfers Wealth; It Does Not Create It

Why would anyone bother to close a market? Because being protected from competition is worth money. The only licensed taxi operator in a city can charge more than he could if anyone with a car could pick up fares. So firms compete for the privilege of being shielded: they lobby, donate, and campaign for the right to be the favored seller. Economists call this *rent-seeking*, spending real resources to obtain a government-granted advantage rather than to produce something. The effort is not wasted from the lobbyist's view, since he may win a valuable monopoly. It is wasted from society's, because nothing new gets made; wealth is merely moved from consumers and excluded rivals into the protected firm.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Rent-Seeking</dt><dd>Spending real resources to win a government-granted advantage rather than to produce something.</dd></div>
</dl>
</aside>

Suppose a city grants one company the exclusive right to sell liquor, and a politician is tempted to hand that right to a campaign supporter. The lesson is grim: once political power can create such privileges, they tend to flow to whoever helped the people in power. Consumers as a whole lose more than the favored firm gains, because the protection forces prices up and chokes off trades. But consumers are scattered and each loses only a little, while the monopolist is concentrated and gains a lot, so he will outspend the public to keep the privilege. That asymmetry, concentrated winners against dispersed losers, is a theme that returns across the rest of the course.

A confusion runs through the politics of protection. A president might praise free markets in one breath and defend an import limit that shields domestic producers in the next, seeing no contradiction, because he blurs two different freedoms. *Freedom of competition* means open entry: anyone may try to win customers. *Freedom from competition* means being protected against rivals: favored sellers keep customers they might otherwise lose. The first enlarges the pie; the second carves a bigger slice for insiders, and a policy that "protects" an industry trades the first freedom for the second, even though the incumbents' gain is smaller than the loss it imposes on everyone else.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Freedom of Competition</dt><dd>Open entry, where anyone may try to win customers.</dd></div>
<div><dt>Freedom From Competition</dt><dd>Protection against rivals, where favored sellers keep customers they might otherwise lose.</dd></div>
</dl>
</aside>

## Prices Coordinate an Economy No One Is Running

Return now to the puzzle of coordination. An unplanned economy can feed itself because its prices are an ordered set of signals and rewards, and they do their work without anyone intending it.

A price is a *signal*: it summarizes many competing demands and the available supply in one number. It does not reveal by itself which condition changed, but a pileup tends to lower the price and stronger competition for what is available tends to raise it, spreading the message without a memo.

A price is also a *reward*. A higher price at once restrains what buyers ask for and, when output can respond, gives suppliers both the revenue and the reason to provide more. Where that reward is missing, waste follows: a producer charged nothing for its inputs has no reason to husband them, while one that pays their real cost economizes.

And a price *rations*, steering each scarce good toward whoever will give up the most for it. The rationing runs in every direction at once because one seller's price becomes the next producer's cost: the price meatpackers charge for beef becomes a cost to butchers and part of the price of a steak, so a surge in demand for beef ripples along a whole chain of prices no central planner could map by hand.

Demand and supply also help explain how a scarce resource gets parceled among rival uses. In opportunity-cost terms, its value in one use generates demand there, while its value elsewhere affects what must be paid to draw it away. This is not yet a firm's supply curve, which a later session derives from marginal cost. Every system for deciding who gets what discriminates, because something must ration the good. Under private property and open markets, that something is mostly money; suppress money competition, as a control does, and rationing shifts to nonmoney criteria: connections, persuasion, political pull, cultural fit. No system escapes a criterion; the question is which one.

## A Market-Clearing Price Balances What Buyers Want With What Is Available

When trade is free, competition drives the price toward the level where the quantity demanded equals the quantity available or supplied. That is the *market-clearing price*, or equilibrium price. In the fixed-stock car model below, the relevant demand is how many cars people want to own. Above the clearing price, their total desired holdings fall short of the stock; below it, their desired holdings exceed the stock. Only at the clearing price do the two match.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Market-Clearing Price</dt><dd>The price at which the quantity demanded equals the quantity available or supplied.</dd></div>
</dl>
</aside>

To see where that price comes from, build *market demand*, which is just the sum of every individual's demand at each price. The table below imagines a society of four people, A through D, and seven cars. Each person, at each possible price, wants to own some number of cars; add those across all four and you get the market demand in the right-hand column.

| Price | A wants | B wants | C wants | D wants | Market demand |
|---|---|---|---|---|---|
| $10,000 | 1 | 0 | 1 | 1 | 3 |
| $9,000 | 1 | 1 | 1 | 2 | 5 |
| $8,000 | 2 | 1 | 1 | 2 | 6 |
| **$7,000** | **2** | **1** | **2** | **2** | **7  (clears)** |
| $6,000 | 2 | 2 | 2 | 2 | 8 |
| $5,000 | 2 | 2 | 2 | 2 | 8 |
| $4,000 | 2 | 2 | 2 | 3 | 9 |
| $3,000 | 3 | 2 | 2 | 3 | 10 |
| $2,000 | 3 | 3 | 2 | 3 | 11 |
| $1,000 | 4 | 4 | 2 | 4 | 14 |

*Market demand is the sum of the four individual demands at each price. With seven cars to go around, the market clears at $7,000, where the total wanted exactly equals the total available.*

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t04a-markets-coordination/figures/t04a-ep4-1-market-demand-sum-interactive.html" title="Interactive market-clearing figure: four individual step-demands sum sideways into the market demand staircase and meet the fixed stock of seven cars, and scenario buttons burn a car, let two more arrive, or bring in a new buyer, each showing the old $7,000 price failing and the new clearing price." loading="lazy" style="width:100%; max-width:600px; aspect-ratio:640/600; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t04a-markets-coordination/figures/t04a-ep4-1-market-demand-sum-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t04a-markets-coordination/figures/t04a-ep4-1-market-demand-sum.svg">view the static market-demand figure</a>.</p></iframe>
<figcaption><strong>One staircase, three experiments.</strong> The figure opens with the table drawn as a picture: each buyer's whole-number demand adds sideways at every price into the market staircase T = A + B + C + D, the fixed stock of seven cars stands as the vertical line S, and the two meet at the clearing point, $7,000. The buttons then rerun the market. Burn a car and the unchanged staircase meets a six-car stock at $8,000; let two more cars arrive and nine clear at $4,000; let a new buyer join and the staircase itself shifts right, so the same seven cars re-clear at $8,000. Each experiment also marks the old $7,000 price and the excess demand or supply that puts pressure on it to move. If the frame does not load, <a href="/teaching/microeconomics/t04a-markets-coordination/figures/t04a-ep4-1-market-demand-sum-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t04a-markets-coordination/figures/t04a-ep4-1-market-demand-sum.svg">view the static market-demand figure</a>.</figcaption>
</figure>

Two lessons fall out of this table. First, the price settles where the quantity demanded equals the quantity available: with seven cars, the clearing price is $7,000, the row where market demand reads seven. If demand rose, the clearing price would rise too; press "A new buyer joins" to watch buyer E shift the staircase right so the same seven cars re-clear at $8,000. Second, in this stripped-down model, the cars reach the same final owners no matter who starts with them. That result assumes informed voluntary trade, enforceable ownership, negligible transaction costs, and transfers too small to shift demand through a wealth effect. Under those assumptions, each person buys while another car is worth more than its price and sells when it is worth less. The *initial allocation* does not determine the *final allocation*.

At this stage, read the vertical line S as the total stock available to be held, not as a firm's supply curve. Current owners' willingness to keep or release cars is already included in their individual demands to own. A later session derives each firm's supply from marginal cost.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>The seven cars clear at $7,000. If more people wanted a car at every price, which way would the clearing price move, and, under the model's assumptions, why do the cars end up with the same final owners?</p>
</aside>

Two smaller points sharpen the picture. "The price" of a car means the price actually agreed to in real transactions, not the sticker on the windshield or the optimistic figure in an ad. And the law that people buy more at a lower price than at a higher one, holding other relevant conditions fixed, is more dependable than any particular market outcome. A legal ceiling can prevent price adjustment from clearing a market, but it cannot repeal people's response to price. The law of demand remains in force while the market-clearing result is blocked.

### A Higher Price Rations Even a Supply That Cannot Grow

People often grant that prices should rise when more can be produced, but bristle when a price jumps for something whose supply is fixed, calling it immoral or an unearned windfall. The objection misses what the higher price is doing. Even when not one extra unit can be made, a higher price still performs its rationing job: it steers the existing stock toward those who value it most and away from lower-valued uses.

The clearest case brings back the seven cars from the last section. Suppose one is destroyed by fire, so six remain and no new car can be built. The person who lost his car still wants one, so at the old price more cars are wanted than exist, and competitive bidding raises the price, steering the smaller stock toward whoever values a car most. The figure above reruns this experiment: press "A car burns," and the demand staircase, which has not moved, meets the six-car stock at $8,000. It can look unfair that the remaining cars become more valuable after another owner's misfortune, but forbidding the price to rise does not undo the fire. The man who lost his car may or may not replace it; at the controlled price, luck, lines, or some other rule must settle the competing claims. A ceiling meant to stop "gouging" or "profiteering from another's misfortune" puts no burned car back on the road; it manufactures a shortage and shifts the rationing elsewhere.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>One of a fixed number of cars is destroyed by fire, and none can be built to replace it. If the price is free to rise, how does that ration the cars that remain, and what does a price ceiling at the old level leave to do the rationing instead?</p>
</aside>

### A Shortage Is Not Scarcity, and a Surplus Is Not Abundance

We need three words kept apart, because newspapers and politicians blur them constantly.

*Scarcity* is the condition we met on day one: less exists than people would want at a price of zero, and it never goes away. A *reduction in supply* is a physical fall in the amount available, as when a crop fails or a fire destroys housing. A *shortage* is the gap that persists when a price is held below clearing, so the amount demanded exceeds the amount offered. In the legal-control case studied here, it is a price phenomenon, not a physical fact, and it is created by a law, not by nature. A temporary stockout while prices or inventories adjust need not be this persistent controlled shortage.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Scarcity</dt><dd>The permanent condition in which less of a thing exists than people would want at a price of zero.</dd></div>
<div><dt>Reduction in Supply</dt><dd>A fall in the physical amount of a good available, as when a crop fails or a fire destroys housing.</dd></div>
<div><dt>Shortage</dt><dd>The gap that persists when a price is held below the clearing level, so buyers want more than is offered.</dd></div>
</dl>
</aside>

A reduction in supply and a shortage come apart in both directions. The fire that cut the stock to six was a real reduction in supply, yet it produced no shortage, because the price was free to rise. And had the supply instead risen to nine, a price pinned below where nine would clear (the figure's "Two cars arrive" scenario puts that clearing price at $4,000) would still produce a shortage, with more cars wanted at that low price than exist. What makes the persistent shortage in this example is not the stock's size but the law holding price below clearing.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A fire cut the car supply to six yet produced no shortage, while a price capped below clearing would produce a shortage even when the supply had risen to nine. What makes the difference in each case?</p>
</aside>

The controlled *surplus* is the mirror image: the gap that persists when a price is held above the clearing level, so the amount offered exceeds the amount anyone will buy. It is not physical abundance, and it can sit alongside real want because a floor keeps the price too high for the market to clear.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Surplus</dt><dd>The gap that persists when a price is held above the clearing level, so more is offered than anyone will buy.</dd></div>
</dl>
</aside>

## For Further Reading

Want to explore the source material? This lecture draws on the following chapters from two books by Armen A. Alchian and William R. Allen:

- *Universal Economics* (Liberty Fund, 2018): Ch. 6, “The Extent of Exchange”; Ch. 10, “Markets and Prices as Social Coordinators”; Ch. 11, “Illustrative Applications of Demand Principles”; Ch. 25, “Dependency Assurance by Reputation and Predictable Price”.
- *Exchange and Production*, 3rd ed. (Wadsworth, 1983): Ch. 4, “Market Prices as Social Coordinators”; Ch. 5, “Information Costs and Achievement of Exchanges”.

<div class="econ-review">
<section class="econ-review__section">
<h3>Key takeaways</h3>
<ul>
<li><strong>Trade runs on the full price.</strong> The full price is the money price plus every nonmoney cost of completing a trade, and a middleman can be paid for shrinking those costs, raising the seller's net while lowering the buyer's full price; his profit is what remains after his own real costs.</li>
<li><strong>Closing a market moves wealth; it does not make it.</strong> An open market has free entry, while licensing and similar rules close one by raising the cost of entry; the protection this buys insiders is rent-seeking, a gain smaller than the loss it imposes on everyone else, the difference between freedom of competition and freedom from competition.</li>
<li><strong>Prices coordinate an economy no one is running.</strong> Acting as signals and rewards, they guide an unplanned economy with no one in charge; market demand is the horizontal sum of individual demands, and the clearing price matches the amount wanted to a fixed stock, so a rise in demand pushes that price up, the model's assumptions make initial ownership irrelevant to final ownership, a higher price still rations even a supply that cannot grow, and a controlled shortage or surplus is not physical scarcity.</li>
</ul>
</section>
</div>