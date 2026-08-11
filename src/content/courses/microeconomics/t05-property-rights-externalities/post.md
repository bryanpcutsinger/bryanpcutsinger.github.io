---
title: "Property Rights and Externalities"
topic: "T5 — Property Rights, Externalities, and Public Goods (Part A)"
course: "Principles of Microeconomics (FAU)"
sessions: ["Fall 2026 — content session 8 (Thu 9/17)"]
ue_anchors: ["UE 13", "UE 3 (externalities section)", "UE 17 (negative-externality section)"]
be_anchors: []
ep_anchors: ["E&P Fig 5-1 (ch. 5) — optimal tradeoff between steel and clean water (nonzero optimal pollution)"]
word_target: "3300-3700"
word_budget: 3465
  # word_budget 3700 -> 3766 (+66): For Further Reading section added 2026-07-22
  # word_budget 3766 -> 3465 (-301): 2026-08-10 UE-E&P source audit; 130-word headroom preserved
status: approved        # M10 done gate 2026-07-20 (tie-in PASS); prior Stage-2 2026-06-15
audience: students
note: "Self-contained — assumes no access to the textbooks. Part A of T5: property rights, externalities, environmental trade-offs, Coasean bargaining, and tradable permits. Part B covers public goods, clubs, commons, and institutional choice."
---

# Property Rights and Externalities

Apples on a tree in a public park get picked before they ripen. Public beaches end up littered. Garbage gets dumped in rivers, and the air over a big city fills with smog. People reach for an easy label when they see these things: the market has failed, commerce fouls the commons, and the government must step in.

The label is not yet a diagnosis. In each case, ask first who holds the relevant right, what that right includes, and how costly it is to specify, defend, or exchange. Sometimes nobody owns the resource. Sometimes ownership exists on paper, but the right to emit smoke, make noise, take fish, or exclude users is incomplete, disputed, or too costly to enforce. That property-rights test does not prove that government must act, or that it must not. It identifies the institutional problem we have to compare remedies for. By the end of this post you should be able to define an externality, diagnose absent, incomplete, or costly rights, and compare bargaining, taxes, regulation, and tradable permits. This is also where a thread from the opening topic pays off: owning something means holding several powers at once, and now we build that idea out.

<aside class="econ-callout econ-objectives">
<p class="econ-callout__label">Learning objectives</p>
<ul>
<li>Explain what makes a property right salable, and why suppressing its price only changes how the scarce thing gets rationed.</li>
<li>Define an externality and apply the compensation test, including cases in which rights are absent, incomplete, or costly to exchange.</li>
<li>Apply the Coase benchmark when rights are clear and bargaining is cheap, and explain how permit trading reallocates emissions under a fixed cap.</li>
</ul>
</aside>

## A Property Right Rests on Control and Specification, and Those Make It Salable

Start with what a private property right actually is, since everything else hangs on it. To own a resource is to hold an enforceable claim to control it, to enjoy what it yields, and to transfer it to someone else. That last power has a legal name: *alienability*, the lawyer's word for salable. A right you cannot sell is a stunted thing, and alienability does not come for free. It rests on two pillars.

The first is *control*. A property right is only as real as your ability to govern the resource and the services it provides. Ask what it would mean to own the North Star, or a particular whale last seen somewhere in the North Pacific. You could hold a deed, but you could not govern the thing, so the "right" would be empty. Control is also why a concert pianist cannot simply own the music she makes. The moment she plays, the sound spills out to everyone in the room. What she can control is the room, so she rents seats and ties the music to the ticket: pay to be in the hall, and the playing comes "free." People invest in control, with locks, fences, and title companies, when the resource is worth the bother, and the higher its value, the more it is worth spending to control it.

The second pillar is *specification*. Even a well-guarded resource cannot trade smoothly unless the rights to it are clearly defined and verifiable. A buyer needs to know exactly what is being sold, that the seller really holds it, and that no hidden claim by a creditor or co-owner will surface later. The clearer that specification, the more cheaply the right changes hands. Much of what we call the cost of a transaction is the work of pinning down who owns what, which is why deeds to land and titles to cars sit in public registries backed by title insurance.

Put the two together and you get an alienable right. When the gain from exchange exceeds the cost of arranging it, alienability lets a resource move toward its highest market-valued use among the parties able to trade. That is an allocation claim, not a judgment about whether the starting distribution is fair. One more caution belongs here. Owning a thing does not mean no one can affect it. Others affect the value of what you own all the time, simply by changing their minds about what they will pay, and you are not entitled to make them keep paying. Ownership is a bundle of enforceable powers over a thing, not a guarantee about its price.

## Suppressing a Property Right Does Not Erase Its Value, It Changes the Rationing

Here is a question worth sitting with. Why would an institution limit alienable claims even when transfer can improve allocation? Your own college is a useful case. The organization legally owns buildings, equipment, and financial assets, but neither students nor administrators hold a transferable residual claim comparable to a shareholder's stock. A nonprofit instead relies on a board, its mission, donor restrictions, law, and reputation to constrain decision makers. Those arrangements may serve purposes other than maximizing distributable profit, but they do not make scarcity disappear. When an authority cannot personally pocket a price, you do not abolish the value of the scarce thing it controls. You force that value to be collected in some other coin.

You see the same thing when a college blocks two students from swapping a parking permit for a library desk. The administrators cannot sell the spots, since the spots are not theirs to sell, yet the power to decide who gets a scarce space is valuable all the same, and the college is giving away something of value it could have charged for. That value gets captured in favors, goodwill, and the discretion to reward whoever the administration prefers. Suppress the money price, and competition for the scarce thing moves into nonmonetary channels, where someone still collects the value.

Consider a stylized comparison. Suppose a public campground holds its fee below the level that would match demand to its fixed number of sites, while a nearby private motel adjusts its room price toward clearing. The campground fills first and uses reservations, lotteries, or queues; the motel can have vacancies at its higher price. That pattern would not by itself prove that public ownership caused every difference: amenities, capacity, access goals, and reservation rules matter too. But if those other features are held fixed, the suppressed price predicts excess demand and nonprice rationing. The same conditional logic applies to public and private golf courses or other facilities. The ownership form matters because it changes who may charge, who receives the proceeds, and what objective the manager is instructed to pursue.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A free public campground overflows while the private motel next door has vacancies. Why does the public site fill up first?</p>
</aside>

## An Externality Is an Effect on Others for Which No Agreeable Compensation Is Made

We are allowed to act in ways that spill over onto other people, and economists call those spillovers *externalities*: effects on others for whom no mutually agreeable compensation is made. The compensation clause is the whole definition. If you pay the other person and she agrees, the effect is a purchase, not an externality, which is why theft has an external effect but buying the same item does not.

Externalities come in two flavors. A *positive externality* benefits others who never paid you for it: a pretty garden the neighbors enjoy, or living among people who can all read and write the same language. Positive spillovers are one reason often offered for subsidizing education and vaccination, though the size of the spillover and the best policy still have to be established. A *negative externality* harms others without compensating them: blasting your stereo at the neighbors, tossing litter on their land, or eating a raw-onion sandwich in close conversation. Many small negative effects are handled by custom, etiquette, liability, or regulation rather than a market transaction. The institutional question is which arrangement reduces the harm at a cost worth bearing.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Positive Externality</dt><dd>A benefit others enjoy without paying for it.</dd></div>
<div><dt>Negative Externality</dt><dd>A harm imposed on others without compensating them.</dd></div>
</dl>
</aside>

The deep point is why these spillovers remain outside the actor's calculation. Sometimes the damaged resource is literally unowned. More often, a river or parcel has an owner while a particular use right—how much smoke may cross a boundary, who may withdraw water, or who must prove the harm—is incomplete, disputed, or expensive to monitor and enforce. A polluter then uses part of an environmental sink without facing its full marginal cost. If affected parties could defend and exchange a clear right cheaply, a payment could force the polluter to weigh that cost. The cost would be *internalized*, borne by the actor who created it. But ownership is not magic: liability rules, taxes, permits, direct regulation, and social norms can also internalize costs, and each has information, enforcement, and political costs of its own.

That lets us be sharp about the difference between *private cost* and *social cost*. Every cost is ultimately borne by some person, so the social cost of an action is the sum of all the private costs it imposes, on whoever bears them. When the actor bears all of those costs himself, his private cost already equals the social cost, and his decision takes everything into account. Holding other margins fixed, an unpriced external cost makes social cost exceed the private cost he feels, so he tends to do too much of the activity. A working remedy loads more of the missing cost back onto him. Existing liability, standards, reputation, or norms may already do part of that work, which is why diagnosis comes before prescription. That is all "internalizing" means.

One more distinction keeps you out of a common trap. The harms above are *physical* externalities, real effects on people or resources outside an agreed exchange. A *pecuniary externality* is a change in someone's market value caused by other people's voluntary market choices. When a better textbook drains sales from a rival, that price effect by itself does not establish inefficiency or a claim to compensation. It transmits information and helps preferred goods displace less-preferred ones. A price effect can accompany fraud, breach of contract, or a physical spillover, but those are separate mechanisms. Treating every competitive loss as if it were pollution would erase that distinction.

## Economics Versus the Environment Is a False Issue

People talk as if there were a war between the economy and the environment, with one side bound to win and the other to lose. There is no such war. Everyone would like cleaner air and safer surroundings, and everyone would also like more income and the goods it buys. The honest question is never which side should triumph. It is the trade-off: more of one means less of the other, and we have to choose where to stand.

Polluting production can create two things at once: valued output and harm to others. Cars provide transportation and exhaust; steel provides useful material and can degrade water or air. Neither side of the ledger settles the policy question by itself. The relevant comparison is marginal: what is one more unit of output worth, and what additional environmental harm accompanies it? At some levels the harm may exceed the output's value; at others the reverse may be true. Rights and distribution remain separate questions even after that comparison is made.

One possible response is a price that makes polluters bear more of the marginal harm. Put a price on polluting and people pollute less wherever the gain from the activity is worth less than the harm. A hypothetical price of zero ignores the external cost; a hypothetical price high enough to eliminate every emission treats the last unit of cleanup as worth any sacrifice. A tax, permit system, liability rule, or standard can instead target an intermediate result. Economics does not choose how clean the world should be: it clarifies the trade-off, the information required, and who bears the costs under each rule.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t05-property-rights-externalities/figures/t05-ep5-1-optimal-pollution-interactive.html" title="Drag the quantity marker along the steel axis to compare the marginal value of more steel with the marginal value of the clean water forsaken; the two balance at the optimal allocation X." loading="lazy" style="width:100%; max-width:600px; aspect-ratio:14/11; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t05-property-rights-externalities/figures/t05-ep5-1-optimal-pollution-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t05-property-rights-externalities/figures/t05-ep5-1-optimal-pollution.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Within the diagram's assumptions, the wealth-maximizing amount of pollution is X, a positive amount, not zero.</strong> DD is the falling marginal value of steel as more water is used up in steelmaking; WW is the rising marginal value of the clean water thereby forsaken. They cross at X, the allocation that maximizes the combined value of steel plus clean water. Left of X, another unit of steel is worth more than the water it costs; right of X, the water is worth more than the steel. The result depends on these schedules representing the relevant marginal values and harms. Drag the marker (or use the arrow keys) to compare the two margins at any allocation. If the frame does not load, <a href="/teaching/microeconomics/t05-property-rights-externalities/figures/t05-ep5-1-optimal-pollution-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t05-property-rights-externalities/figures/t05-ep5-1-optimal-pollution.svg">view the static figure</a>.</figcaption>
</figure>

## Coase: With Clear Rights and Cheap Bargaining, the Higher-Valued Use Wins

Suppose you want to put up a building that will block the view from my apartments next door. We could fight it out in court, or settle it ourselves with a trade, but only once we know who holds the right to the view. Say the law gives the view to me. If your profit from building exceeds the view's worth to me, you buy the right from me, and the building goes up. Now say the law gives the right to build to you. If the view is worth more to me than your profit, I pay you to refrain, and the view stays. In whichever world the right starts, the building goes up when, and only when, it is worth more than the view. Which use of the land wins is the same either way; the initial assignment changes only who ends up richer, not what happens to the resource.

That is the Coasean benchmark: if rights are clear and enforced, parties are informed, and bargaining costs are negligible relative to the gains, the parties reach the value-maximizing use, and the *use* that results does not depend on *who* received the right first. The initial assignment still decides who pays and who gains. With positive transaction costs it can also affect the use itself, because some bargains never occur. Coase emphasized this benchmark to direct attention toward the real comparison among legal rules, firms, markets, and regulation, all of which are costly institutions ([University of Chicago Law School](https://www.law.uchicago.edu/lawecon/coaseinmemoriam/problemofsocialcost); [Coase's Nobel lecture](https://www.nobelprize.org/prizes/economic-sciences/1991/coase/lecture/)). When a refinery's odor affects thousands of scattered households, identifying harms, organizing the group, and enforcing separate deals can make private bargaining prohibitively expensive. The next question is which alternative institution performs better, not whether any institution is free.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A builder values a new floor at $200,000 and neighboring tenants value the preserved view at $120,000. If rights are clear and bargaining is cheap, what use wins under either initial assignment, and what does the assignment still change?</p>
</aside>

## Tradable Pollution Rights Apply the Gains From Exchange to the Right to Emit

When bargaining one-on-one is too costly, a regulator can build a market by defining an emissions cap, monitoring emissions, issuing credits, and allowing firms to trade them. Southern California's South Coast Air Quality Management District adopted RECLAIM in 1993 for participating stationary sources of nitrogen-oxide and sulfur-oxide emissions. Facilities received declining annual credit allocations and had to hold credits matching their emissions; the credits could be traded ([South Coast AQMD program overview](https://www.aqmd.gov/home/programs/business/business-detail?title=reclaim); [2024 program audit](https://www.aqmd.gov/docs/default-source/reclaim/reclaim-annual-report/2024-reclaim-report.pdf)). This is a regulated market: public rules supply the cap, the unit of account, monitoring, and enforcement, while exchange reallocates the credits.

Watch what that market does, since you have seen it before. Picture two firms, a paint maker and a refiner, each starting with the same allowance, say twenty units of pollution apiece. The paint maker can earn enough from expanding output that producing more is worth more to him than the price of the rights he would need. The refiner sits in the opposite position: the rights are worth more to him sold than the extra output he would give up to keep them. So the paint maker buys, the refiner sells, and each keeps trading until the value of one more unit of output just matches the common price of a pollution right. Under a fixed, enforced cap and a competitive credit market, that trade meets the cap at lower forgone-output cost than an equal quota would. Whether the cap itself is best is a separate question.

It is the gains-from-exchange logic from earlier in the course, where two people each end up better off by swapping until their valuations meet, with one change of label: there it was personal worths of a good, here the marginal market values of output. Trading rights to pollute is exchange applied to the right to emit. With negligible transaction costs, accurate monitoring, and damages that do not depend materially on where emissions occur, the final allocation is independent of the initial credit assignment. The assignment still affects wealth, and departures from those assumptions can affect allocation too. The mechanism therefore answers a precise question—how to allocate emissions cost-effectively under a chosen cap—not every question about fairness, local exposure, enforcement, or the cap's level.

A tax can do related work. A levy on gasoline makes drivers bear part of the pollution their driving creates, nudging consumption down toward the point where the worth of the last gallon burned matches its full cost, cleaner air included. Keep in view what even an imperfect tax is doing: putting a price on the use of a resource, the air, that would otherwise be used as if it were free. That is the same move as the permit market, reached by a blunter instrument.

We are reasoning verbally here, the way we have all term, not drawing supply-and-demand machinery for the tax or measuring its welfare loss as a shaded triangle. The intuition is what you owe: a price on an external harm, permit or tax, makes the actor bear the cost he was escaping and lets the right end up where it is worth most.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t05-property-rights-externalities/figures/t05-pollution-rights-interactive.html" title="Drag the trade handle to move pollution rights from a refiner to a paint maker and watch both firms' marginal output values converge on the common price — trade stops when the paint maker holds 30 units and the refiner holds 10, where both marginal values equal the rights price." loading="lazy" style="width:100%; max-width:640px; aspect-ratio:16/10; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t05-property-rights-externalities/figures/t05-pollution-rights-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t05-property-rights-externalities/figures/t05-pollution-rights.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Rights trade until each firm's marginal output value equals the price.</strong> The paint maker starts at 20 units of pollution where its marginal value of output is above the common price of a right; the refiner starts at 20 units where its marginal value is below that price. Dragging rights from the refiner to the paint maker (or using the arrow keys) raises the refiner's marginal value and lowers the paint maker's until both equal the price, at 30 units and 10 units respectively — the same equilibrium regardless of who held the rights first. Total pollution is fixed; only who holds the rights and what gets produced changes. If the frame does not load, <a href="/teaching/microeconomics/t05-property-rights-externalities/figures/t05-pollution-rights-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t05-property-rights-externalities/figures/t05-pollution-rights.svg">view the static figure</a>.</figcaption>
</figure>

This first half has stayed with harms and benefits that can be tied to identifiable users. Part B asks what changes when use is shared, exclusion is difficult, or the resource is open to everyone.

## For Further Reading

Want to explore the source material? This lecture draws on the following chapters from two books by Armen A. Alchian and William R. Allen:

- *Universal Economics* (Liberty Fund, 2018): Ch. 3, “Choice and Cost”; Ch. 13, “Markets and Property Rights”; Ch. 17, “Timing of Adjustments”.
- *Exchange and Production*, 3rd ed. (Wadsworth, 1983): Ch. 5, “Information Costs and Achievement of Exchanges”.

<div class="econ-review">
<section class="econ-review__section">
<h3>Key takeaways</h3>
<ul>
<li><strong>Property rights must be salable, and suppressing a price does not erase value.</strong> Control and specification make a right salable; suppress the price and the value resurfaces as queues and favors.</li>
<li><strong>An externality is an uncompensated spillover, not necessarily a literally unowned resource.</strong> The relevant right may be absent, incomplete, disputed, or too costly to enforce and exchange.</li>
<li><strong>The Coase result and tradable permits are conditional gains-from-exchange mechanisms.</strong> Cheap bargaining can make use independent of the initial assignment; under a chosen cap, trading can move credits toward higher-valued uses at lower cost.</li>
</ul>
</section>
</div>