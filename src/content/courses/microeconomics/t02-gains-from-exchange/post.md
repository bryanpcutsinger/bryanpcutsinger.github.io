---
title: "Gains from Exchange"
topic: "T2 — Gains from Exchange (Pure Reallocation)"
course: "Principles of Microeconomics (FAU)"
sessions: ["Fall 2026 — content session 5 (Tue 9/8)"]
ue_anchors: ["UE 4"]
be_anchors: []
ep_anchors: ["E&P 3 — Fig 3-1 Gains From Exchange", "E&P 4 — Pareto-Optimal Allocations"]
univecon_anchors: ["University Economics (1994) ch. 4 pp. 41–43 — refugee-camp licensing cartel and franchise-fee capitalization"]
word_target: "2000-6000"
word_budget: 4230
  # word_budget 3307 -> 3364 (+57): For Further Reading section added 2026-07-22
  # word_budget 3364 -> 3900 (+536): A&A figure-suite redesign 2026-08-06 (two new
  #   figures + walkthrough paragraphs and lead-ins; stripped count 3870)
  # word_budget 3900 -> 3980 (+80): round-2 feedback pass 2026-08-06 (figcaptions
  #   rewritten, wedge walkthrough + wall sentence; stripped count 3951)
  # word_budget 3980 -> 4030 (+50): round-3 endowment-start pass 2026-08-06
  #   (figcaptions for moving worth lines + the wall opening; stripped count 3995)
  # word_budget 4030 -> 4187 (+157): rigor pass 2026-08-07 (physical accounting,
  #   ex-ante gains, Pareto conditions, fee/cost/profit separation; count 3952 -> 4109)
  # word_budget 4187 -> 4230 (+43): UE–E&P Wave-C verification 2026-08-10;
  #   licensing/nonprice qualifications added, prior 53-word headroom preserved
status: approved        # E&P integration M1 sign-off 2026-07-19 (prior: Stage-2 2026-06-15)
audience: students
note: "Self-contained — assumes no access to the textbooks. Source-of-truth for the T2 deck; section headers are claims that map to slide titles. UE 4 only (pure reallocation); specialization/comparative advantage move to T6."
---

# Gains from Exchange

The opening topic ended with a list of ways a society can decide who gets a scarce thing, and I said this course mostly studies one of them: exchange. Here we make good on that promise, and we start with a puzzle. In a simple trade, no new bread is baked and no new car rolls off a line. The same goods just change hands. So where does the gain come from? If trading only moves existing things around, how can both people walk away better off?

The short answer is that wealth is not the same as stuff. What you own is worth more when it sits in the hands that value it most, and trade is how scarce things find those hands. Once you see wealth that way, a lot of heated talk about commerce and middlemen starts to look different. Let me build the case in steps.

<aside class="econ-callout econ-objectives">
<p class="econ-callout__label">Learning objectives</p>
<p>By the end of this post you should be able to:</p>
<ul>
<li>Explain how voluntary exchange creates wealth without creating new goods, distinguish expected positive-sum gains from zero-sum haggling, and use personal worth to state when a deal is possible.</li>
<li>Explain when free exchange pushes toward Pareto-optimality, and distinguish this allocation test from productive efficiency and from a moral endorsement of the result.</li>
<li>Explain how middlemen can lower the real cost of trading, distinguish their fee from cost and profit, and identify when competition and reputation discipline them.</li>
</ul>
</aside>

## Trade Creates Wealth Without Creating New Goods

Picture a relief camp after a hurricane. Each family receives the same monthly parcel: say, twenty bottles of water and twenty granola bars. Everyone starts with an identical basket, so on paper no one is richer than anyone else. Then a newcomer who got no parcel starts arranging trades. He notices that Sam would happily give up several granola bars to get more water, while Joe would gladly part with water for just a granola bar or two. The newcomer carries water from Joe to Sam and granola from Sam to Joe, and keeps a small cut for his trouble.

Here is the part that surprises people. After the dust settles, Sam and Joe together hold fewer goods than before, because the newcomer now holds two of their granola bars as payment. Across all three people, however, no good vanished. Nothing was manufactured. The same bottles and bars exist. What changed is that each item moved to the person who valued it more, and that movement is itself the gain. Sam would have paid as many as eight granola bars for the water he got, and paid only seven, so the trade was worth as much to him as a gift of one granola bar. Joe would have accepted as few as four bars to give up that water and got five, so he too came out ahead by the equivalent of one bar. For this first accounting example, suppose arranging the trade used no time or resources the newcomer valued elsewhere. His two-bar payment is then also a two-bar net gain, making four bars of new value across the three people. We can total that gain cleanly in granola bars, the thing all three traded in common, but not in bottles of water, because we never learned what the newcomer's water was worth to him. If his work did have an opportunity cost, we would subtract that cost from his payment to find his net gain. Either way, the fee transfers two existing bars to him; it does not reduce the total quantity of goods.

The two tables put numbers on it. Each man moves from his starting basket A to a basket B2 he likes better, even though, between them, they end up holding two fewer granola bars.

| Sam's basket | Water | Granola | How it compares with A |
|---|---|---|---|
| A (start) | 20 | 20 | his starting point |
| B1 | 30 | 12 | just as good as A (he would pay up to 8 granola for 10 bottles of water) |
| B2 (after the trade) | 30 | 13 | better than A (he paid only 7) |

| Joe's basket | Water | Granola | How it compares with A |
|---|---|---|---|
| A (start) | 20 | 20 | his starting point |
| B1 | 10 | 24 | just as good as A (he would accept as few as 4 granola for 10 bottles of water) |
| B2 (after the trade) | 10 | 25 | better than A (he received 5) |

That result is why economists call trade a *positive-sum* activity: it can make every participant better off at once. The claim runs against a stubborn intuition that says one person's gain must be another's loss. That intuition fits a poker game, where the chips on the table are fixed and what you win I lose. It does not fit an informed voluntary exchange: each side chooses to hand over something it values less to get something it expects to value more. Voluntary choice therefore reveals an expected gain at the time of the deal, not a guarantee against every later disappointment. In this simple model, the goods are as described and the trade occurs as promised, so those expectations prove correct and both sides climb.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Positive-Sum</dt><dd>A trade in which every participant can come out better off at once.</dd></div>
</dl>
</aside>

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>After the trades, Sam and Joe hold two fewer granola bars between them, yet both end up better off. How can a group end up with less total stuff and still be richer?</p>
</aside>

## The Trade Is Positive-Sum, but the Haggling Is Zero-Sum

If trade benefits both sides, why does it so often feel like a contest? Because every trade settles two questions at once, and they pull in opposite directions. Whether to trade at all is the positive-sum part. Both people expect to end up better off than if they had walked away, so on that question their interests line up. But the *terms* of the trade, the exact price, are a tug-of-war. Every granola bar the seller gains on the price is one the buyer loses. That haggling over how to split the gains is genuinely zero-sum, and it is the loud, visible part, so people mistake it for the whole story.

Keep the two separate and a common error dissolves. You will sometimes read that trade between two regions "developed because each produced a surplus" of something. That gets it backward. No one had a true surplus, in the sense of more than they could ever use. What differed was relative value. People sitting on a lot of olive oil came to value one more jar of it less than people who had little; people sitting on a lot of silver valued one more unit of it less than those who had none. Different relative values, not leftover piles, set goods in motion. Trade does not drain off a surplus. It moves each good toward whoever prizes it most.

## A Trade Happens When Two People Value the Same Thing Differently

Let me bring back the engine under the demand curve and add its missing half: the seller. Your *personal worth* of a good is the most of other things you would give up to get one more unit of it, or the least you would accept to part with one you already hold. For a buyer, it is the marginal personal worth that gives a demand curve its height. For a seller, it is the worth of the unit they would have to surrender. It is not a feeling or a wish. Talk is cheap, and saying you would "do anything" for something proves nothing. Personal worth shows up only in what you are actually willing and able to pay. Two people can want a good for completely different reasons, or even think each other foolish for wanting it, and none of that matters to whether they can trade. What matters is only that their personal worths differ.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Personal Worth</dt><dd>The most of other things you would give up for one more unit of a good, or the least you would accept to part with one you hold.</dd></div>
</dl>
</aside>

When they do differ, a mutually agreeable trade exists. Whoever places the higher worth on water buys it; whoever places the lower worth sells. Put the buyer and the seller in one picture and a clean rule appears: a trade happens only when the buyer's personal worth of the good sits above the price and the seller's sits below it. The price lands somewhere between the two worths, and that gap is the gain the trade creates. The buyer pays less than the good is worth to him; the seller collects more than it is worth to her. Each side passes its own test and expects to come out ahead; in the model, accurate information and delivery as promised turn those expected gains into realized gains.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t02-gains-from-exchange/figures/t02-ep3-1-gains-from-exchange-interactive.html" title="Interactive gains-from-exchange figure: two panels, one for Sam and one for Joe, each starting with the same 20 bottles of water. Two dashed lines spanning both panels mark what a bottle is worth to each man right now; they start 0.8 granola bars apart. Drag either brass dot to trade bottle by bottle and watch the two lines close in on each other and meet at 0.6, where the gains run out." loading="lazy" style="width:100%; max-width:640px; aspect-ratio:720/510; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t02-gains-from-exchange/figures/t02-ep3-1-gains-from-exchange-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t02-gains-from-exchange/figures/t02-ep3-1-gains-from-exchange.svg">view the static version</a>.</p></iframe>
<figcaption><strong>Same starting basket, different valuations, so both sides gain.</strong> Sam and Joe each start with 20 bottles, but one more bottle is worth 1.0 granola bars to Sam and only 0.2 to Joe. The two dashed lines track those worths across both panels, and the gap between them is the reason to trade. Drag either brass dot: Sam buys and his worth of the next bottle falls; Joe sells and his rises; the lines meet at 0.6 bars per bottle, with Sam holding 30 bottles and Joe 10, and no gainful trade left. The shaded areas are the gains, 2 granola bars apiece; the worth lines are the demand curves you met in the last two lectures.</figcaption>
</figure>

Put numbers on the picture. At 20 bottles apiece, one more bottle is worth a full granola bar to Sam and only a fifth of a bar to Joe. Let them trade at a price of 0.6 bars per bottle. Sam buys his way from 20 bottles up to 30 as the worth of each added bottle slides down to 0.6; Joe sells his way from 20 down to 10 as the worth of each remaining bottle climbs up to 0.6. Sam's shaded gain comes to 2 granola bars, and so does Joe's: 4 bars of new value in all, the same total the newcomer's trades created. The split depends on the haggling, but the total does not.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>Suppose you would pay up to $40 for a used jacket and the seller would let it go for as little as $25. If it sells for $32, how much does each side gain, and why must the two worths straddle the price for a trade to happen?</p>
</aside>

As the trade proceeds, the gap narrows on its own. Recall diminishing marginal personal worth from the demand topic: the more of something you already have, the less you would give up for one more unit of it. So as Sam accumulates water, he moves down his demand curve and his worth of the next bottle falls; as Joe runs low, he moves up his curve and his worth of each remaining bottle rises. Trading slides both people toward the point where their valuations meet, and there it stops, because no further swap would help either one. The buyer's gain is the consumer surplus you already know, the gap between what the good was worth to him and what he paid. The seller's gain is the mirror image, the gap between the price received and what the bottle was worth to him. Put the two together and you get the model's plain result: both sides realize a gain when each gets what he expected and values it more than what he gave up.

The next figure packs the same trade into one frame. Lay the two worth lines over each other, with Sam's bottles counted from the left edge and Joe's from the right, and the crossing point does double duty: it marks the one price at which the two men's offers agree, and the allocation at which trading stops.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t02-gains-from-exchange/figures/t02-ep3-2-superimposed-interactive.html" title="Interactive figure: Sam's and Joe's personal-worth lines superimposed on one frame holding all 40 bottles. Both start at 20 bottles each, where their worths differ. Drag either dot along its worth line to trade: both dots move together until the worths meet at the crossing, 0.6 granola bars per bottle, with Sam holding 30 and Joe 10. Drag past the crossing to see why they stop there." loading="lazy" style="width:100%; max-width:640px; aspect-ratio:720/510; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t02-gains-from-exchange/figures/t02-ep3-2-superimposed-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t02-gains-from-exchange/figures/t02-ep3-2-superimposed.svg">view the static version</a>.</p></iframe>
<figcaption><strong>Trade slides both men along their worth lines until the worths meet.</strong> All 40 bottles sit on one base line: Sam's holdings count from the left edge, Joe's from the right, so Joe's falling worth line appears to rise. Both start at 20 bottles, where a bottle is worth 1.0 bars to Sam and 0.2 to Joe. Drag either dot: each bottle traded slides Sam down his line and Joe up his own, and the shaded bowtie fills until the lines cross at 0.6 bars per bottle, with Sam holding 30 bottles and Joe 10. These personal-worth schedules are the valuations beneath the demand curves from the last two posts, drawn against each man's own holdings. Drag past the crossing and the next bottle hurts both men, which is why they stop.</figcaption>
</figure>

The stopping point has a name. When Sam and Joe quit trading, every reallocation that could help one of them without hurting the other has already happened. Economists call such an allocation *Pareto-optimal*, after Vilfredo Pareto, the Italian economist who first put the idea to work. This is the allocation test previewed in the opening topic, not the PPF's productive-efficiency test. Productive efficiency asks whether resources are wasted in production; Pareto-optimality asks whether the goods already produced can be rearranged for a mutual gain.

The result has maintained conditions. In this two-person model, rights to the goods are recognized, both men choose voluntarily with accurate information, the deal has no unpriced effects on outsiders, and arranging a trade uses no scarce resources. Under those conditions, any allocation that is not yet Pareto-optimal still contains a trade both sides would accept, so exchange pushes all the way to the crossing point. Positive transaction costs change the stopping rule: trade continues only while the remaining gain covers the resources required to arrange it, and may stop short of the no-cost crossing. Be careful with the label, though. Calling an allocation Pareto-optimal is not a moral endorsement. The criterion takes each person as the judge of what is best for himself, and that assumption is not accepted everywhere: we do not let children make every choice for themselves, and some goods with willing buyers and willing sellers are banned outright even for adults. Pareto-optimality tells you that no further mutual gain is left on the table. Whether the result is fair is a different question, and it stays yours to answer.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Pareto-Optimal Allocation</dt><dd>An allocation where no feasible reallocation can help one person without hurting another. A statement about exhausted gains from trade, not about productive efficiency or fairness.</dd></div>
</dl>
</aside>

## When Trade Is Forbidden, the Gains Do Not Vanish

Because an informed voluntary trade that works as both sides expect leaves both better off, blocking one destroys something real. Yet blocking does not erase the value of controlling the scarce thing. It changes the form in which that value gets collected.

Suppose your college gives you a permit for one of its scarce parking spaces, and gives a friend a desk in the library stacks, and each of you would rather have the other's. The college almost always forbids the swap. Why would it? The people who run it cannot pocket money from selling those spots, because the spots are not theirs to sell. Yet the power to decide who gets a scarce space is itself valuable, and that value does not disappear just because no money may change hands. It may be captured in nonmonetary forms instead: in favors, in goodwill, or in the discretion to reward whoever the administration prefers. In this simple case, the competition for it moves into nonmonetary channels, and someone still captures its value. More generally, queueing, lobbying, compliance, and search can consume resources, so some of the value may be dissipated rather than captured intact.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A resident adviser decides who gets the last available single dorm room but cannot legally sell it. The room's value does not disappear. Name one nonmonetary form that value might take instead.</p>
</aside>

None of this says trade is good and bans are bad. Economics tells you what will happen if people are allowed to trade, and what will happen if they are stopped. Whether a given result is good is a separate, normative question you settle with your own values. Keep the earlier positive-normative line in view: the analysis gives you the "is," and the "should" is yours to add.

## Middlemen Can Lower the Cost of Trading

In the relief camp, none of the good trades happened until the newcomer showed up to arrange them. That is not a detail. Most trades do not occur directly between the people who finally want the goods, because trading is itself costly. Finding someone who has what you want and wants what you have, judging quality, traveling, and making sure the other side delivers use time and other scarce resources. Those are *real transaction costs*: their value is unavailable for other uses. The wholesaler, retailer, and broker can create value when they do that work at lower real cost than their customers could.

Keep the cost separate from the payment. A middleman's fee, or the spread between what the buyer pays and the seller receives, transfers goods or money to him. It is not by itself a social loss. Part of the fee may cover the middleman's own opportunity cost and other resources used in arranging the deal; whatever remains is profit. To see why the service can be valuable, imagine buying food straight from farmers, shoes from the factory, and milk from a dairy. You would spend your life shopping. Cutting out the middleman does not eliminate the work; it shifts that work back to you. Sometimes doing it yourself is cheaper, and then you should. Often it is not. Sometimes the real cost is so high that the trade simply does not happen. The gain available on the camp's ten bottles is four granola bars, so if arranging the swap used time and resources worth six, no one would bother. The cost would exceed the gain. High real transaction costs can become a wall that blocks the deal entirely.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t02-gains-from-exchange/figures/t02-ep3-3-middlemen-interactive.html" title="Interactive figure: Sam's and Joe's personal-worth lines with a draggable cost wedge, two dashed price lines around the crossing. The figure opens where arranging a trade costs 0.8 granola bars a bottle, as big as the whole gap between their worths, so no one trades and both men sit at their 20-bottle start. Drag the wedge tighter, cheaper and cheaper middlemen, and watch trade carry both men toward the crossing." loading="lazy" style="width:100%; max-width:640px; aspect-ratio:720/510; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t02-gains-from-exchange/figures/t02-ep3-3-middlemen-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t02-gains-from-exchange/figures/t02-ep3-3-middlemen-web.svg">view the static version</a>.</p></iframe>
<figcaption><strong>Real transaction costs form a wedge, and a more efficient middleman can narrow it.</strong> This model treats the entire per-bottle wedge as resources used to arrange each trade. The cost drives Sam's full price above what Joe nets, so only bottles whose gap in worths covers it change hands. The figure opens at the wall: at 0.8 bars a bottle, no bottle moves. Drag the wedge tighter: at 0.4, 5 bottles move; at 0.2, 7.5 move; at zero, all 10 gainful bottles move. The gray band is lost value only because the model defines the wedge as a real cost. If it were merely a fee, the band would be payment to the middleman, and only his underlying costs would reduce the total gain.</figcaption>
</figure>

The opening story and this figure answer different questions. The story fixes a ten-bottle block deal and uses the newcomer's two-bar fee to show how the gain is divided. The figure instead lets the number of bottles adjust and treats 0.2 bars per bottle as a constant *real cost*. It therefore predicts 7.5 bottles traded, not 10. The same number, 0.2, connects the examples, but a fee in a fixed bundle and a marginal cost that changes quantity are not the same economic assumption.

The figure opens at the wall. If arranging a swap uses resources worth 0.8 bars per bottle, the whole gap between the starting worths, no bottle moves. At a real cost of 0.4 bars per bottle, Sam's full price is 0.8 and Joe's net is 0.4; only 5 bottles have a worth gap large enough to cover that cost. At 0.2, Sam's full price falls to 0.7, Joe's net rises to 0.5, and 7.5 bottles move. A middleman who can do the work at lower real cost releases gains that higher costs would have destroyed. How his fee divides those gains is a separate question.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Transaction Costs</dt><dd>The value of time and other resources used to find a partner, judge quality, and carry out a trade. A fee pays for arranging; only the resources actually used are a real cost.</dd></div>
</dl>
</aside>

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A friend tells you to buy your groceries straight from farmers and cut out the middleman to save money. What work would you take on yourself, and when would cutting him out actually leave you worse off?</p>
</aside>

How large can that cut get? The very gap that makes the trade worthwhile sets the ceiling. A lone middleman who faces no rival can charge as much as the whole gross gain from the trade: he can pay Joe barely enough to coax the water loose and charge Sam just short of what the water is worth to him. In the camp that fee ceiling is four granola bars; the newcomer keeps two and leaves the other two for Sam and Joe. What he cannot do is charge more than the whole gain, because then one side would rather walk away. So the most a middleman can ever extract is the entire gain the trade makes possible, and no more. That is a ceiling on his fee, not his profit: his own opportunity cost and other real costs must still be paid from it.

Competition can keep a middleman's cut well below that ceiling when rivals are free to enter and buyers and sellers can compare their terms. Back in the camp, a second trader can offer Sam a lower price and Joe a higher one, shrinking the first trader's margin. With continued entry and observable terms, rivalry trims the spread toward the opportunity cost of doing the job. The numbers show the first step: once a second dealer enters, Sam pays a little less and Joe receives a little more, each gaining the equivalent of another half granola bar.

The camp story has a political sequel. The two traders can try to preserve their margin by persuading the camp manager to admit only licensed, "approved" middlemen, with the existing traders deciding who is properly trained and ethical. Licensing can help buyers when requirements credibly screen quality or supply useful information. It can also block capable rivals, especially when incumbents control admission. Which effect matters more is an empirical question, not something the label *consumer protection* settles. Once the licenses create a protected stream of earnings, the manager discovers that he can charge a franchise fee for them. If that protection is credible, durable, and transferable, the fee can capitalize the expected net earnings, adjusted for risk. Early recipients may gain; later licensees who pay the full capitalized value may expect only an ordinary risk-adjusted return. Those results weaken when the restriction is temporary, uncertain, nontransferable, or incorrectly priced.

| After competition among dealers | Water | Granola |
|---|---|---|
| Sam, before trading | 20 | 20 |
| Sam, with one dealer | 30 | 13 |
| Sam, with a second dealer | 30 | 13.5 |
| Joe, before trading | 20 | 20 |
| Joe, with one dealer | 10 | 25 |
| Joe, with a second dealer | 10 | 25.5 |

You might expect a middleman to grab the goods and never return, or to water down the granola and keep the difference. Reputation restrains that behavior when customers can observe or credibly report cheating and the trader expects repeat business. Under those conditions, a trader who cheats risks a bad name that costs more future business than the one-time gain is worth. A good reputation is then an asset worth protecting, so repeat dealing can keep a middleman honest even without direct policing of every trade.

We leaned the whole time on one source of gains: people differ in how much they *value* things. There is a deeper source we have not touched. People also differ in what it *costs* them to make things, and those cost differences let people specialize and produce more together than they ever could apart. We will work that out when we get to production and costs, and it turns out to be the most surprising result in the course: you can be worse at making everything and still have something worth selling.

One question remains. Sam and Joe could haggle face to face, and a single newcomer was middleman enough for a camp. Feeding a city takes millions of trades among strangers who never meet, arranged by more middlemen than anyone could count, with no one in charge of the whole. What coordinates them is the same instrument that did the sorting between Sam and Joe: a price. Next we scale the story up and watch market prices carry information, prod people to act, and ration scarce goods across an economy nobody runs.

## For Further Reading

Want to explore the source material? This lecture draws on the following chapters from two books by Armen A. Alchian and William R. Allen:

- *Universal Economics* (Liberty Fund, 2018): Ch. 4, “Gains from Exchange”.
- *Exchange and Production*, 3rd ed. (Wadsworth, 1983): Ch. 3, “Exchange”; Ch. 4, “Market Prices as Social Coordinators”.

<div class="econ-review">
<section class="econ-review__section">
<h3>Key takeaways</h3>
<ul>
<li><strong>Trade creates wealth from differing personal worths.</strong> A buyer and seller voluntarily trade when each expects to gain; with accurate information and delivery as promised, both realize gains even though bargaining over their division is zero-sum.</li>
<li><strong>Costless trade stops at Pareto-optimality.</strong> With recognized rights, informed voluntary choice, no unpriced effects on outsiders, and no transaction costs, exchange exhausts mutual gains; positive transaction costs can stop trade sooner. This allocation test differs from productive efficiency and says nothing by itself about fairness.</li>
<li><strong>Middlemen can earn their keep.</strong> A fee is a payment, while real transaction costs use resources and profit is what remains; entry and observable terms can narrow the cut, and observable conduct plus repeat business can make reputation valuable.</li>
</ul>
</section>
</div>