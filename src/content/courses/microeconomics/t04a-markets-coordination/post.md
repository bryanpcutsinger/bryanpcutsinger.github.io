---
title: "Markets and Coordination"
topic: "T4 — Markets, Prices, and Coordination"
course: "Principles of Microeconomics (FAU)"
sessions: ["Fall 2026 — content session 6 (Thu 9/10)"]
ue_anchors: ["UE 6", "UE 10", "UE 11 (marketing arrangements and Q9 universal allocation)", "UE 25 (predictable prices, voluntary queues, preferred customers, and blind blocks)"]
be_anchors: ["BE 2", "BE 4 (incremental-vs-categorical; shortage≠scarcity)"]
ep_anchors: ["E&P Fig 4-1 (ch. 4) — market demand as horizontal sum of individual demands", "E&P Fig 4-4 (ch. 4) — supply elasticity and input generality", "E&P ch. 5 pp. 88–90 — inventories, reserve capacity, stable prices, and queues as information-cost economizers"]
word_budget: 3600
word_target: "3400-3600"
status: approved        # E&P integration M4 done-gate 2026-07-20; prior approval 2026-07-01
audience: students
note: "Self-contained — assumes no access to the textbooks. Source-of-truth for the T4 session-6 deck; section headers are claims that map to slide titles. First of three T4 session posts; the price-controls post (session 7) and the tax-incidence post (session 8) follow."
# brief: ../t04-markets-prices-coordination/brief.md
---

# Markets and Coordination

Late in the Soviet era, a senior official is said to have asked Margaret Thatcher how Britain made sure its people got fed. The honest answer was that she did not. No one in London drew up a plan for how much bread to bake or where to ship the milk. Yet Britain's groceries stayed stocked, while the Soviet Union, which did plan all of that, kept running short of food it could not deliver even after a century of trying. So how does a place with no one in charge of feeding it end up better fed than a place with a ministry for exactly that job?

That puzzle is the subject of this post. A modern economy coordinates the work of millions of strangers who never meet and never coordinate on purpose. It does this through prices. Prices are not just numbers on a tag; they are signals that carry information, light fires under people to act, and parcel out scarce goods to the people who value them most. This post builds up that machinery: where trade stops and why, what makes a market open or closed, how a price settles at a level that matches buyers to goods, and how a single number coordinates an economy no one is running. Once that machinery is in hand, the posts that follow take up what happens when a law forbids that price from moving.

<aside class="econ-callout econ-objectives">
<p class="econ-callout__label">Learning objectives</p>
<p>By the end of this post you should be able to:</p>
<ul>
<li>Explain why the full price of a trade is the money price plus every nonmoney cost of completing it, and why a middleman who shrinks those costs can raise the seller's net while lowering the buyer's full price.</li>
<li>Distinguish an open market from a closed one, explain why closing a market by restricting entry transfers wealth to protected insiders without creating any, and tell freedom of competition apart from freedom from competition.</li>
<li>Explain how prices coordinate an economy no one is running by transmitting information, motivating action, and rationing scarce goods; show how summing individual demands yields a market-clearing price; explain why a higher price still rations a good whose supply cannot grow; and distinguish a shortage or surplus, creatures of price control, from scarcity, a permanent fact of nature.</li>
</ul>
</aside>

## Trade Runs on the Full Price, Not Just the Money Price

Trade makes both sides better off: each hands over something worth less to get something worth more. But trade does not continue until every last beneficial swap is made, because trading itself is costly: finding someone who has what you want, judging the goods, haggling, hauling them home, and making sure the other side delivers all eat up time and effort. Those are *transaction costs*, and they are as real as the price on the tag. So the *full price* of a thing is the money price plus all the nonmoney costs of completing the trade. A used car listed at five thousand dollars can cost considerably more once you add the weekends spent searching, the inspection fee, and the risk of being cheated.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Transaction Costs</dt><dd>The time, effort, and risk of finding a trading partner, judging quality, haggling, and making sure the deal is carried out.</dd></div>
<div><dt>Full Price</dt><dd>The money price of a good plus all the nonmoney costs of completing the trade.</dd></div>
</dl>
</aside>

Intermediaries exist for exactly this reason. A *middleman* stands between the original seller and the final buyer and lowers the cost of the trade for both: a wholesaler or broker can search, sort, and vouch at far lower cost than you could on your own, so he raises the price the seller pockets while lowering the full price the buyer pays. Both sides come out ahead, and his cut comes out of the gain he creates by shrinking the transaction costs.

The table below traces this for a single egg. Without a middleman, the buyer pays eight cents in cash plus a penny of his own trouble, a full price of nine cents; the seller collects eight cents but bears half a cent of selling costs, netting seven and a half. A specialist handles the messy parts. Now the buyer pays eight and a half cents in cash but nothing in extra trouble, and the seller nets seven and three-quarter cents. The buyer's full price fell and the seller's take rose, even though the cash price the buyer hands over went up.

| Buying one egg | Money | Nonmoney | Full price |
|---|---|---|---|
| **Without a middleman** | | | |
| Buyer pays | 8.0¢ | 1.0¢ | 9.0¢ (paid) |
| Seller gets | 8.0¢ | 0.5¢ | 7.5¢ (received) |
| | | total do-it-yourself cost | 1.5¢ |
| **With a middleman** | | | |
| Buyer pays | 8.5¢ | 0 | 8.5¢ (paid) |
| Seller gets | 7.75¢ | 0 | 7.75¢ (received) |
| | | total transaction cost | 0.75¢ |

*The middleman earned three-quarters of a cent per egg by cutting the buyer's and seller's combined transaction costs in half. The buyer's full price still fell, and the seller's net rose, which is why "buy direct and eliminate the middleman's cost" is usually a confusion.*

That last line is worth dwelling on. A discount store boasts that it "cuts out the middleman" so you save, but eliminating the middleman does not eliminate the work he was doing; it just hands that work back to you. Do it yourself, and the cost has not vanished, only changed hands. Sometimes doing it yourself is genuinely cheaper; often the specialist is, which is why he had a business.

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

Suppose a city grants one company the exclusive right to sell liquor, and a politician is tempted to hand that right to a campaign supporter. The lesson is grim and predictable: once political power can create such privileges, they will tend to flow to whoever helped the people in power. Consumers as a whole lose more than the favored firm gains, because the protection forces prices up and chokes off trades. But consumers are scattered and each loses only a little, while the monopolist is concentrated and gains a lot, so he will outspend the public to keep the privilege. That asymmetry, concentrated winners against dispersed losers, is a theme that returns across the rest of the course.

A confusion runs through the politics of this. A president might praise free markets in one breath and defend an import limit that shields domestic producers in the next, seeing no contradiction, because it blurs two different freedoms. *Freedom of competition* means open entry: anyone may try to win customers. *Freedom from competition* means being protected against rivals: favored sellers keep customers they might otherwise lose. The first enlarges the pie; the second carves a bigger slice for insiders, and a policy that "protects" an industry trades the first freedom for the second, even though incumbents' gain is smaller than the loss it imposes on everyone else.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Freedom of Competition</dt><dd>Open entry, where anyone may try to win customers.</dd></div>
<div><dt>Freedom From Competition</dt><dd>Protection against rivals, where favored sellers keep customers they might otherwise lose.</dd></div>
</dl>
</aside>

## Prices Coordinate an Economy No One Is Running

Now back to Thatcher's puzzle. The reason an unplanned economy can feed itself is that prices do three jobs at once, and they do them without anyone intending it.

First, prices *transmit information*. A price compresses facts that no single person could ever gather: how badly people want a thing, how scarce it is, how costly it is to produce, all squeezed into one number anyone can read. A market drops that price the moment a good piles up unsold, and the message reaches everyone who might supply it without anyone sending a memo.

Second, prices *motivate action*. The hope of profit pulls resources toward what people want, and the threat of loss pushes them away from what they do not. Where that discipline is missing, waste creeps in: a producer charged little or nothing for its inputs has no reason to use them sparingly. A firm that buys its inputs at their real cost and answers to a profit-and-loss statement has every reason to economize.

Third, prices *ration and allocate*. They guide each scarce good toward the person willing to give up the most for it, a rough but powerful test of who values it most. This allocation runs in every direction at once, because one buyer's price is another's cost: the price dairies pay for milk becomes the cost faced by everyone who wants to make cheese, ice cream, or yogurt, so a surge in demand for one ripples into the prices of the others. Seemingly unrelated goods are linked this way by a web of prices no central planner could map by hand.

Demand and supply are not just a story about shopping; they are a tool for thinking about how any scarce resource gets parceled out among the rival uses competing for it. For any one use, the resource's value in that use is its *demand*; its value in all the other uses it could go to instead is its *supply*. Every system for deciding who gets what is discriminatory in this sense, because something always has to do the rationing. Under private property and open markets, that something is mostly money; suppress money competition, as a control does, and the rationing does not stop, it just shifts to nonmoney criteria: connections, persuasion, political pull, cultural fit. No system escapes having a criterion; the only question is which one.

## A Market-Clearing Price Balances What Buyers Want With What Is Available

When trade is free, competition drives the price toward the level where the amount people want to buy equals the amount available. That is the *market-clearing price*, or equilibrium price. At any higher price, sellers cannot find enough buyers; at any lower price, buyers cannot find enough goods; only at the clearing price do the two match.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Market-Clearing Price</dt><dd>The price at which the amount buyers want to purchase equals the amount available.</dd></div>
</dl>
</aside>

To see where it comes from, build *market demand*, which is just the sum of every individual's demand at each price. The table below imagines a society of four people, A through D, and seven cars. Each person, at each possible price, wants to own some number of cars; add those across all four and you get the market demand in the right-hand column.

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
<iframe src="/teaching/microeconomics/t04a-markets-coordination/figures/t04a-ep4-1-market-demand-sum-interactive.html" title="Interactive market-demand figure: drag a horizontal price line to watch four individual step-demands sum sideways into the market demand staircase, and find the price at which the staircase meets the fixed stock of seven cars." loading="lazy" style="width:100%; max-width:560px; aspect-ratio:13/11; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t04a-markets-coordination/figures/t04a-ep4-1-market-demand-sum-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t04a-markets-coordination/figures/t04a-ep4-1-market-demand-sum.svg">view the static market-demand figure</a>.</p></iframe>
<figcaption><strong>Market demand is the individual demands added sideways.</strong> This is the table above drawn as a picture. Each buyer's whole-number demand adds across at every price: at $7,000, A wants 2 cars, B wants 1, C wants 2, and D wants 2, so the market wants 7, exactly the seven cars available. Drag the price line to watch the four step-demands sum sideways into the market staircase T = A + B + C + D, and see the clearing point where that staircase meets the fixed stock. If the frame does not load, <a href="/teaching/microeconomics/t04a-markets-coordination/figures/t04a-ep4-1-market-demand-sum-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t04a-markets-coordination/figures/t04a-ep4-1-market-demand-sum.svg">view the static market-demand figure</a>.</figcaption>
</figure>

Two lessons fall out of this table. First, the price settles where the quantity demanded equals the quantity available: with seven cars, the clearing price is seven thousand dollars, the row where market demand reads seven. If demand rose, the clearing price would rise too, because the fixed seven cars would have to be rationed among hungrier buyers. Second, it does not matter who starts with the cars: voluntary trading shuffles them to the same final owners, because each person keeps buying as long as a car is worth more to him than its price and keeps selling whenever it is worth less. The *initial allocation* does not determine the *final allocation*; the cars end up with whoever values them most regardless of who held them first.

At this stage, supply is a market-level description of willingness to sell from the existing stock, including what current owners require before giving up a unit. A later session derives each firm's supply from marginal cost. For now, read supply as what is available for sale at each price.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>The seven cars clear at $7,000. If more people wanted a car at every price, which way would the clearing price move, and why do the cars end up with the same final owners no matter who held them first?</p>
</aside>

Two smaller points sharpen this. "The price" of a car means the price actually agreed to in real transactions, not the sticker on the windshield or the optimistic figure in an ad. And the law that people buy more of a thing at a lower price than at a higher one is more dependable than any particular market outcome: a government can suspend a market by freezing its price, but it cannot repeal the fact that people respond to prices. The law of demand always holds, while the tidy market-clearing result can be blocked by a law that forbids the price from moving.

### A Higher Price Rations Even a Supply That Cannot Grow

People often grant that prices should rise when more can be produced, but bristle when a price jumps for something whose supply is fixed, calling it immoral or an unearned windfall. The objection misses what the higher price is doing. Even when not one extra unit can be made, a higher price still performs its rationing job: it steers the existing stock toward those who value it most and away from lower-valued uses.

The clearest case is a disaster. After a hurricane, the supply of bottled water, plywood, and hotel rooms cannot expand overnight. When prices are allowed to rise, a family that would have grabbed two hotel rooms and a dozen flashlights "just in case" takes one room and one flashlight, leaving the rest for others; high prices also pull supplies toward the disaster, because it suddenly pays to truck water in. Anti-price-gouging laws forbid exactly this: with prices frozen, the early arrivals clear the shelves and the family an hour behind finds nothing. The point is not that high prices are pleasant; it is that with supply fixed, the choice is between rationing by price and rationing by luck, hoarding, and empty shelves.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t04a-markets-coordination/figures/t04a-ep4-4-supply-elasticity-interactive.html" title="Interactive supply-elasticity figure: drag the demand curve rightward and compare how the same demand increase raises price a little on an elastic (flat) supply and a lot on an inelastic (steep) supply." loading="lazy" style="width:100%; max-width:480px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t04a-markets-coordination/figures/t04a-ep4-4-supply-elasticity-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t04a-markets-coordination/figures/t04a-ep4-4-supply-elasticity.svg">view the static supply-elasticity figure</a>.</p></iframe>
<figcaption><strong>The same jump in demand raises price by very different amounts.</strong> What decides the split between a higher price and more quantity is how easily suppliers can bring more to market, and that turns on how general a good's inputs are. When the inputs are general and easy to redeploy, supply is elastic (the flat curve) and price barely moves; when they are specialized, supply is inelastic (the steep curve) and the demand increase shows up almost entirely as a higher price. The disaster case above, where the stock cannot grow at all, is the steep extreme of this same spectrum. Drag the demand curve rightward to compare the two. If the frame does not load, <a href="/teaching/microeconomics/t04a-markets-coordination/figures/t04a-ep4-4-supply-elasticity-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t04a-markets-coordination/figures/t04a-ep4-4-supply-elasticity.svg">view the static supply-elasticity figure</a>.</figcaption>
</figure>

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>After a hurricane the stock of bottled water cannot grow overnight. If its price is free to rise, how does that change what one family grabs off the shelf, and what does an anti-gouging law leave to do the rationing instead?</p>
</aside>

### A Shortage Is Not Scarcity, and a Surplus Is Not Abundance

We need three words kept rigorously apart, because newspapers and politicians blur them constantly.

*Scarcity* is the permanent condition we met on day one: less of a thing exists than people would want at a price of zero, and it never goes away. A *reduction in supply* is a fall in the amount available, a real, physical change, as when a crop fails or a fire destroys housing. A *shortage* is something else entirely: the gap that opens when a price is held below the clearing level, so that the amount people want to buy exceeds the amount offered. A shortage is a price phenomenon, not a physical fact, and it is created by a law, not by nature.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Scarcity</dt><dd>The permanent condition in which less of a thing exists than people would want at a price of zero.</dd></div>
<div><dt>Reduction in Supply</dt><dd>A fall in the physical amount of a good available, as when a crop fails or a fire destroys housing.</dd></div>
<div><dt>Shortage</dt><dd>The gap that opens when a price is held below the clearing level, so buyers want more than is offered.</dd></div>
</dl>
</aside>

The difference is easiest to see when the two come apart. The 1906 San Francisco earthquake destroyed something like half the city's housing, a sudden, massive increase in physical scarcity. Yet there was no housing shortage: rents were free to rise, and people economized on space until everyone fit. A huge jump in scarcity, no shortage. The reverse happened after the Second World War: the ratio of housing to people had not worsened, yet American cities suffered a notorious housing "shortage," because wartime rent control had pinned prices below their clearing level. When the controls were lifted, the shortage melted away before a single new building went up, as people made do with less space once the price gave them a reason to. No real scarcity, but a fierce shortage, conjured entirely by a price control.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>The 1906 earthquake destroyed half of San Francisco's housing yet produced no shortage, while postwar cities suffered a shortage with no drop in housing per person. What made the difference in each case?</p>
</aside>

Surpluses are the mirror image: a *surplus* is the gap that opens when a price is held above the clearing level, so the amount offered exceeds the amount anyone will buy. Like a shortage, it is a creature of price control, not of physical abundance, and it can sit alongside real want, because a floor keeps the price too high for the market to clear.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Surplus</dt><dd>The gap that opens when a price is held above the clearing level, so more is offered than anyone will buy.</dd></div>
</dl>
</aside>

<div class="econ-review">
<section class="econ-review__section">
<h3>Key takeaways</h3>
<ul>
<li><strong>Trade runs on the full price.</strong> The full price is the money price plus every nonmoney cost of completing a trade, and a middleman earns his cut by shrinking those costs, raising the seller's net while lowering the buyer's full price.</li>
<li><strong>Closing a market moves wealth; it does not make it.</strong> An open market has free entry, while licensing and similar rules close one by raising the cost of entry; the protection this buys insiders is rent-seeking, a gain smaller than the loss it imposes on everyone else, the difference between freedom of competition and freedom from competition.</li>
<li><strong>Prices coordinate an economy no one is running.</strong> They transmit information, motivate action, and ration scarce goods; summing individual demands gives a market-clearing price that a rise in demand pushes up regardless of who held the goods first; a higher price still rations even a fixed supply; and a shortage or surplus is a creature of price control, not scarcity, which is a permanent fact of nature.</li>
</ul>
</section>
</div>