---
title: "Financial Markets, Futures, and Uncertainty"
topic: "T12 — Risk, Insurance, and Financial Markets (Part B)"
course: "Principles of Microeconomics (FAU)"
sessions: ["Fall 2026 — content session 26 (Thu 11/19)"]
ue_anchors: ["UE 35 (arbitrage, random walk, intermediation)", "UE 37 (futures, options, uncertainty)"]
be_anchors: ["BE 13 (speculation and inventories)", "BE 15 (uncertainty)"]
word_target: "2500-5500"
status: approved
audience: students
note: "Self-contained — assumes no access to the textbooks. Part B of T12: speculation and inventories, futures and options, arbitrage, information in asset prices, financial intermediation, and the boundary between measurable risk and uncertainty. Final content session."
# brief: ../t12-risk-insurance-futures/brief.md
---

# Financial Markets, Futures, and Uncertainty

Part A separated measurable risk from deeper uncertainty and showed how pooling and diversification narrow the range of outcomes. Part B asks what financial markets do with risks that arise from changing prices and with information about a future no one can know in advance. The institutions can look like paper shuffling—speculators, brokers, futures exchanges, options, mutual funds—but each solves a concrete coordination problem.

A producer wants protection from a price move without abandoning production. A saver wants safety and access while an entrepreneur needs long-term commitment. A market needs a public estimate of future scarcity even though no individual forecast is reliable. Futures, arbitrage, and intermediation connect those different needs; uncertainty explains why the result can be the best available estimate without ever being a guaranteed prediction.

<aside class="econ-callout econ-objectives">
<p class="econ-callout__label">Learning objectives</p>
<p>By the end of this post you should be able to:</p>
<ul>
<li>Explain how futures contracts and options transfer price risk through a two-sided hedge, and calculate an option's break-even price.</li>
<li>Explain how speculation and inventories smooth consumption between harvests.</li>
<li>Explain why arbitrage pulls risk-adjusted returns together and makes competitive prices incorporate known information.</li>
<li>Explain the random-walk result and why diversification is more reliable than trying to outguess news.</li>
<li>Explain how financial intermediaries reconcile savers' demand for safety and liquidity with borrowers' need for long-term capital.</li>
<li>Distinguish a best forecast under uncertainty from a certain prediction, and explain why banning organized futures trading removes information rather than uncertainty.</li>
</ul>
</aside>

## Futures Contracts Let People Hand Off a Price Risk

Insurance handles the risk that something bad happens to a thing you own. The other great risk-shifting institution handles a different danger, that the price of something moves against you before you are done with it, and the politician's complaint that speculators just gamble and destabilize prices has the story backward.

A *futures contract* is an agreement made now in which a buyer agrees to pay a seller a set price at a set future date for a set quantity of some good. Settle the vocabulary first. The *futures price* is the price written into the contract today for later delivery; the *future price* is the spot price that will actually form when that later date arrives. A September futures price quoted in May is not a guess about the weather; it is a contractual price you can lock in today for September delivery.

The buyer and seller do not have to find each other or trust one another to perform months later. A futures exchange, historically called a board of trade, stands between them: the buyer contracts with the exchange, the seller contracts with the exchange, and the exchange standardizes the terms and guarantees performance on both sides. That intermediation turns thousands of scattered private promises into one organized market with a public price.

See how it transfers risk. A miller in January promises bakers a fixed price for summer flour, based on wheat costing him, say, ten dollars a bushel. He is not in the business of betting on wheat; he wants to earn his living milling. So he buys a July wheat futures contract at ten dollars. If wheat rises to eleven, he loses on the flour but gains an offsetting amount on the futures contract; if wheat falls to nine, he gains from buying cheaper wheat but loses an offsetting amount when the futures contract settles. Either way, the two positions together leave him near the ten-dollar cost he locked in. On the other side stands someone with the opposite exposure, often a grain-elevator operator holding wheat, who loses if the price falls; he sells the July contract, giving up his chance at a price rise for protection against a fall. That two-sided surrender, each party giving up the gains from a favorable move to be shielded from an unfavorable one, is what makes a futures contract a *hedge*, an arrangement that makes an unfortunate event automatically trigger an offsetting favorable one, like betting heads with one person and tails with another on the same coin toss.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Futures Price</dt><dd>The contractual price agreed today for delivery at a specified future date.</dd></div>
<div><dt>Future Price</dt><dd>The spot price that actually forms when that later date arrives.</dd></div>
<div><dt>Hedge</dt><dd>A position that offsets an existing exposure to an unfavorable price move.</dd></div>
</dl>
</aside>

The same machinery works on any opposed exposures. An American importer who owes yen for cars and an American apple exporter who will be paid in yen can take opposite sides of a yen futures contract, and without knowing each other the two have swapped their currency risks and both are protected. Two rival parking-lot owners, one near each of two ballclubs that might host the next round, can cross-bet the same way, each buying a share of the other's lot so each collects no matter which team wins, narrowing both their ranges of wealth. For stocks and bonds, the futures idea takes the form of puts and calls.

## Puts and Calls Are Insurance Against a Price Move

Options are easiest to understand as insurance, because that is what they are. A *put* is the right, but not the obligation, to *sell* a stock at a set *strike price* within some period, no matter how far the price falls. A *call* is the right, but not the obligation, to *buy* a stock at the strike price within the period, no matter how high it climbs. You pay an up-front premium for either.

A put is insurance against a fall. If you own a share worth its strike price and buy a put for a small premium, then no matter how far the share sinks you can still force the other party to buy it from you at the strike. The premium works like a deductible: you absorb the first slice of any decline, and the put covers losses beyond it. If the price instead rises, you do not exercise the put and you have lost only the premium, and, as with any insurance, never needing the payout does not mean the protection was wasted.

A call is insurance against a rise, useful to someone who has committed to buy. The break-even logic trips students up, so make it a rule: with a call you do not profit until the price clears the strike plus the premium you paid. Buy a call with a strike of fifty for a premium of six dollars a share, and the stock has to rise past fifty-six before you are ahead. And you never exercise an option that is "out of the money": if a call lets you buy at fifty but the market price is forty-nine, you let it expire and buy cheaper on the market. Run those two rules and the arithmetic of any option problem falls out.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>You buy a call with a strike of forty dollars for a three-dollar-a-share premium. Above what market price do you start to make money? If the stock sits at thirty-nine, do you exercise the call or let it expire?</p>
</aside>

## Speculators Smooth Consumption Between Harvests

So far the people in our story are hedgers, businesses laying off a risk they do not want. Who takes the other side? Often a *speculator*, willing to hold the price risk in hopes of a profit, and far from being a parasite he performs a genuine social service.

No central planner decides how much of this year's harvest to hold back so consumption is smooth until the next one. Yet it gets done, and futures markets are how. Suppose word spreads that frost has damaged next year's coffee crop. Owners of this year's beans now expect higher prices next year, so they hold beans back rather than sell them all now. That withholding raises today's price, even though not a single bean has yet been lost, and the predictable cry goes up that greedy speculators are gouging consumers. The speculator's honest defense is that we did not cause the frost. There will be less coffee next year no matter what; the only question is when the shortfall is felt. Either we keep drinking today as if nothing were wrong and suffer the whole shortage next year, or we trim a little now, carry some over, and spread the scarcity across both years. By bidding up today's price and easing next year's, speculators do the second, and most people prefer a modest squeeze spread over time to a sudden, sharp shortage, so this smoothing is a service, not a swindle.

A few corollaries follow. First, the work is mostly done by profit-seekers, not by farsighted households canning their own preserves; the self-interested speculator accomplishes for the whole economy what individual prudence accomplishes for one family. Second, speculators respond to *news*, not events: the price jumps when the rumor of frost changes everyone's expectations, not on the distant day the beans would have been harvested. So the claim that speculators "push up" prices, evidenced by prices rising before any actual change in supply, gets the causation backward. Third, *storability* governs how big the swing is. A good that stores cheaply can be carried across the harvest, so its price barely dips when the new crop arrives; a perishable good cannot be carried, so its in-season price collapses when fresh supply floods in. The harder a good is to store, the wilder its seasonal price swing.

This also separates commodity speculation from gambling, even though both bet on an unknown future. A casino bet creates a risk for its own sake; nothing is allocated better because the dice rolled. Commodity speculation reallocates a real, scarce, storable good across time toward its higher-valued uses. The gambler manufactures risk; the speculator carries an existing one and, in doing so, improves how a scarce good is spread over time.

## The Futures Price Is the Market's Best Forecast

One more service falls out of all this competition. Because traders profit by buying low and selling high, any gap between the futures price and the price people expect at delivery gets competed away: if the futures price sat below the expected delivery-date price, traders would buy futures until they bid it up; if above, they would sell until they drove it down. What is left is a futures price pinned to the *best available estimate of the future spot price*. Individual futures prices are wrong all the time, but their errors run both ways and average out, so over many contracts they track realized prices closely, and no other forecasting method reliably beats them. Because the forecast is already baked in, there is no sure profit in simply trading futures; the contract's real value is as a hedge and as a public prediction. You can even read a table of futures prices as a forecast: if the contract for one month sits below the others, the market is telling you it expects more supply around then, a good sign the new harvest lands in that month.

Which is why banning a futures market is worse than useless. Speculation about the future is universal; people speculate, hedge, and hoard against bad fortune everywhere, with or without an organized exchange, so prohibiting the exchange does not end speculation, it only strips away the cheap, public version. Outlaw potato futures and you do not stop anyone from betting on potato prices; you remove the hedging that lets farmers and processors offload risk, you degrade the public price forecast, and you leave supplies to lurch around more erratically. And ask who lobbies for such a ban: often a handful of insiders whose private information about crop conditions is worth more to them when there is no open futures market broadcasting it to everyone else. A concentrated few gain; the dispersed many lose. Again, economics tells you what the policy will do, not whether someone's notion of fairness is satisfied.


## All Rates of Return Get Pulled Into Line, and Prices Follow a Random Walk

Pull the threads together and a synthesis appears. The productivity of investment, people's time preference, the yield on bonds, the implicit return built into capital-good prices, these are not separate rates. Competition brings them all to a single common interest rate: if any asset offered a higher risk-adjusted return, buyers would pile in until its price rose and its return fell back into line. So when a question asks whether the interest rate is any one of these, the answer is that it is all of them at once, held equal by competition.

That equalization has a striking consequence for asset prices, and it is central to this topic. If all known information is already reflected in an asset's price, then today's price is the *unbiased estimator* of tomorrow's: the best single guess of any future price is the current one. Price changes come only from genuine *news*, and news, by definition, is unpredictable; if it were foreseeable it would already be in the price. So successive prices follow a *random walk*, wandering up and down with no exploitable pattern. Flip this around and several puzzles dissolve. After a hundred coin-toss bets, the best prediction of your accumulated winnings is wherever you happen to stand right now, not zero and not the starting point; the past sequence tells you nothing about the next step. If half the brokers say a stock is too high and half say too low, that is exactly what a sensible market price looks like: the price sits right at the dividing line of opinion, and only new information moves it. Knowing that one stock rose 10 percent last month and another fell 10 percent gives you no edge in picking the next winner, because that history is already in both prices.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t12b-financial-markets-and-uncertainty/figures/t11-ue35-1-interactive.html" title="Drag the step scrubber to watch seven random walks fan out from a common start; re-roll for a fresh set." loading="lazy" style="width:100%; max-width:480px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t12b-financial-markets-and-uncertainty/figures/t11-ue35-1-interactive.html">Open the interactive figure directly</a>.</p></iframe>
<figcaption><strong>No path tends back to where it started.</strong> Seven equal-odds coin-flip walks begin at the same value and fan out over fifty steps, with no tendency to return to the start or to each other. The same logic explains why today's asset price is the best available estimate of tomorrow's: whichever series leads at any moment leads because of news and chance, not a pattern in the earlier steps. Drag the step scrubber or use the arrow keys to watch the fan grow, and use Re-roll for a fresh set of coin flips.</figcaption>
</figure>

Two practical lessons follow. First, you cannot have high returns with no risk; the relative who wants "a high return and no chance of loss" is asking for something the market will not sell, because higher average returns are precisely the payment for bearing more variability. The most reliable advice is to *diversify*, to hold a broad basket so that the ups and downs of individual assets partly cancel, and a broad market-index portfolio is hard for anyone to beat consistently. This mean-versus-variance trade-off is not special to finance; it is the same scarcity-driven trade-off that runs through every choice in this course, you give up some of one good thing (safety) to get more of another (return). Second, proposals to "suspend trading on bad news" mostly backfire: they do not stop the news from being bad, they just trap holders who would like to sell and prevent the price from telling everyone the truth quickly.

Part A's distinction between measurable risk and deeper uncertainty now pays off. Diversification can narrow exposure to many independent risks, but it cannot reveal news that no one yet knows. Financial intermediaries sit between those two facts: they pool and redistribute risks that can be combined while leaving genuine uncertainty for owners and entrepreneurs to bear.

And those intermediaries are not the parasites they are sometimes accused of being. A bank, a broker, or a mutual fund earns a spread by moving savings from the many who have it to the few who can put it to productive use, reconciling savers who want safety and quick access with borrowers who need long-term commitment. They create wealth by matching capital to talent. Sowell reminds us that great American fortunes often began with almost none of the founder's own money, Hewlett and Packard in a rented garage, and that poor countries stay poor in part because they lack the institutions to gather up scattered savings and channel them to entrepreneurs. The "paper-shuffling" of finance is, done well, the circulatory system of a productive economy.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>Savers want safe, liquid claims while a new firm needs capital committed for years. What does a financial intermediary do to reconcile those incompatible time horizons?</p>
</aside>


## Uncertainty Remains After Markets Use All Available Information

A futures price or current asset price is not a promise that the future will match it. It is the price that survives after people willing to buy on higher estimates and sell on lower estimates have acted on what they know. Errors remain because the next relevant fact is news, and genuine news cannot already be known. That is uncertainty: not a measurable lottery with a stable distribution, but a future whose important possibilities may not yet be imaginable.

This distinction explains why market forecasts can be both useful and frequently wrong. Competition can remove predictable bias and expose private information through trades; it cannot manufacture knowledge that does not exist. Suppressing a market because its price moved before an event, or because its forecast missed, discards the public signal while leaving the underlying uncertainty untouched.

<div class="econ-review">
<section class="econ-review__section">
<h3>Key takeaways</h3>
<ul>
<li><strong>Futures and options transfer price risk.</strong> A hedge trades away part of a favorable move for protection against an unfavorable one.</li>
<li><strong>Speculators move goods across time.</strong> Inventory held back today smooths consumption across harvests rather than creating the scarcity.</li>
<li><strong>Arbitrage pulls returns together.</strong> A known superior risk-adjusted return attracts buyers until its price rises and the advantage disappears.</li>
<li><strong>Prices incorporate known information.</strong> News moves them unpredictably, so broad diversification beats a claim to forecast the next surprise.</li>
<li><strong>Intermediaries match unlike needs.</strong> Banks, brokers, funds, and insurers connect dispersed savings with productive long-term uses.</li>
<li><strong>A best forecast is not certainty.</strong> Markets aggregate available knowledge; they do not abolish uncertainty.</li>
</ul>
</section>
</div>