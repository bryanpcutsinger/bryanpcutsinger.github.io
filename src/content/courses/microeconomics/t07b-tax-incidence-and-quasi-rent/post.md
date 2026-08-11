---
title: "Taxes, Time, and the Quasi-Rent"
topic: "T7 — Competitive Markets (Part B)"
course: "Principles of Microeconomics (FAU)"
sessions: ["Fall 2026 — content session 15 (Tue 10/13)"]
ue_anchors: ["UE 11 (fixed-land incidence and amenity capitalization)", "UE 17", "UE 18", "UE 27 (corporate-tax incidence across time)"]
be_anchors: []
  # be_anchors ["BE 5","BE 9 (partial)"] -> [] (2026-07-23 BE→A&A redraft, ruling R6): the BE 5/9 material left the body in the R3 rebuild and lives only in extensions.md (ext-churn-survival-01, ext-losses-discipline-01, ext-reputation-01) via mig-t07b-011/012/013; BE provenance is preserved in those cards and the migration records, so no live post pin is owed.
ep_anchors: ["E&P Fig 4-6 (ch. 4, p. 66) — a tax on fixed land: consumer price unchanged, owner bears all, legal side irrelevant", "E&P ch. 4 & ch. 11 — tax political economy: immobile bases taxed, mobile bases escape", "E&P ch. 18 pp. 394–398 — graduated-income-tax rationales, implicit housing rent, and federal revenue sharing"]
word_target: "2700-3400"
word_budget: 3127
  # word_budget 3400 -> 3482 (+82): For Further Reading section added 2026-07-22
  # word_budget 3482 -> 3127: UE–E&P targeted audit 2026-08-10; measured body 3072 -> 2717, prior 410-word headroom retained; target floor aligned
status: approved        # E&P integration M5 done-gate 2026-07-20; prior approval 2026-07-01
audience: students
note: "Self-contained — assumes no access to the textbooks. Part B of T7, rebuilt (F2) into a focused tax-incidence lecture. Owns UE 17 general two-sided tax incidence, sunk cost/quasi-rent; integrates UE 11 fixed-land incidence as the zero-supply-elasticity case. Deeper policy applications and the UE-18/BE competition-in-motion tail live in extensions.md (lecture channel)."
# brief: ../t07-competitive-markets/brief.md
---

# Taxes, Time, and the Quasi-Rent

In Part A we worked out how a single price-taker behaves and how a market of them fits together. Recall the core results, because this post leans on them. A *price-taker* is a seller too small to move the market price, so it faces a horizontal own-demand at that price and chooses only a quantity, producing where its marginal cost rises to meet the price. Above its shutdown floor, the firm's marginal-cost curve is its supply curve; add up every firm's and you get an upward-sloping market supply. Competition pushes each firm to the same marginal cost and drives profits toward an ordinary return by capitalizing them into the price of whatever earns them.

All of that described a market sitting still. Now we set it in motion to answer one question: when the government drops a tax on a competitive market, who actually ends up paying it? The answer surprises almost everyone and is our main Exam 2 target. First we add time and watch the room to adjust grow. Then we trace who bears a broad tax, find the limiting case in fixed land and the politics that follow from it, contrast that with a tax on a single seller, and follow the burden as it travels over the short and long run. Along the way we name the surplus a resource already in place earns, the quasi-rent. By the end you should be able to predict how a tax's burden splits and shifts over time.

<aside class="econ-callout econ-objectives">
<p class="econ-callout__label">Learning objectives</p>
<p>By the end of this post you should be able to:</p>
<ul>
<li>Under equivalent enforcement and coverage, explain why statutory remittance does not determine economic incidence, and use relative elasticities to predict the split while recognizing that compliance and salience can differ.</li>
<li>Apply the elasticity rule to a tax on pure fixed-land rent, including capitalization, and treat immobility as one political consideration rather than a complete theory of tax choice.</li>
<li>Trace a broad industry's tax as adjustment changes relative elasticities, using quasi-rent and capitalization to explain when burdens move and why a later buyer does not bear a fully anticipated, capitalized old tax.</li>
</ul>
</aside>

## Adjustments Take Time, So Demand and Supply Get More Elastic the Longer We Wait

Before we tax anything, one fact about timing makes the rest click into place. People and firms do not respond to a price change all at once. They respond a little immediately, more over the following months, and most fully over years. Economists slice this into the *immediate run*, the *short run*, and the *long run*, each longer horizon allowing more adjustment.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Immediate Run</dt><dd>The period so short that buyers and sellers can barely adjust to a price change.</dd></div>
<div><dt>Short Run</dt><dd>A period long enough for some adjustment but not a full one.</dd></div>
<div><dt>Long Run</dt><dd>A period long enough for buyers and sellers to adjust as fully as they will.</dd></div>
</dl>
</aside>

Longer horizons usually open additional adjustment margins, making demand and supply more elastic than in the immediate run. Gasoline users can carpool, change vehicles, or relocate; sellers can alter capacity, entry, and technology. How much each side's elasticity changes is an empirical question, and incidence moves only if their responsiveness changes relative to one another.

## It Doesn't Matter Who Writes the Check

Now the centerpiece. Suppose the government puts a tax of ten cents on each gallon of gasoline. In the competitive model with the same transactions covered, compliance, and enforcement either way, the surprising answer is that the legal side of the tax does not matter.

Tax sellers and their net return falls by the wedge; tax buyers and their gross cost rises by the same wedge. With identical coverage and enforcement, either version reaches the same quantity, buyer price, and seller net. Statutory design can still affect filing costs, evasion, liquidity, salience, and enforcement. Naming the remitter simply does not by itself settle who ultimately bears the economic burden.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t07b-tax-incidence-and-quasi-rent/figures/t07b-tax-incidence-interactive.html" title="Drag the tax wedge to see that taxing sellers (supply shifts up) or taxing buyers (demand shifts down) reaches the identical price and quantity." loading="lazy" style="width:100%; max-width:640px; aspect-ratio:16/10; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t07b-tax-incidence-and-quasi-rent/figures/t07b-tax-incidence-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t07b-tax-incidence-and-quasi-rent/figures/t07b-tax-incidence.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Who writes the check to the government does not decide who actually pays.</strong> A $0.10 tax on sellers (left) raises supply cost; the identical $0.10 tax on buyers (right) reduces what demand is worth to sellers. Either way, the buyer price, the seller's net, and the quantity traded end up the same. Drag the tax wedge to change the tax amount, or toggle demand between steeper and flatter to see how the split between buyers and sellers shifts. If the frame does not load, <a href="/teaching/microeconomics/t07b-tax-incidence-and-quasi-rent/figures/t07b-tax-incidence-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t07b-tax-incidence-and-quasi-rent/figures/t07b-tax-incidence.svg">view the static figure</a>.</figcaption>
</figure>

So who ends up paying? In the gasoline example the dime tax raises the price buyers pay by three cents and lowers the price sellers keep by seven cents. The tax splits, with neither side bearing all of it. What sets the split is which side can more easily back away from the deal, the relative responsiveness of demand and supply: the side that can dodge the tax more easily, by cutting back or switching to something else, pushes more of the burden onto the side that is stuck.

That is exactly the error in a case worth remembering. Pittsburgh once put a 20 percent tax on the gross receipts of private parking lots while exempting the city's own lots. The Supreme Court upheld it and reasoned that, because parking was "in short supply," operators could pass the whole tax on to drivers, so customers would bear all of it. The economics is wrong. How much of a tax buyers bear has nothing to do with whether something is called a shortage; it depends on the relative elasticities of demand and supply. If drivers can switch to buses, trolleys, or parking elsewhere, the lot operators cannot pass the full tax along and must eat a share of it.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A state taxes each gallon of gasoline ten cents. Drivers can easily carpool or switch to buses, but sellers cannot quickly cut output. Which side ends up bearing more of the tax, and why does it not matter whether the law names the buyer or the seller as the taxpayer?</p>
</aside>

One more effect escapes the price split. In the competitive benchmark with no unpriced harm, the tax blocks some gallons buyers valued above their resource cost, creating a *deadweight loss* beyond the revenue transfer. If gasoline use imposes pollution or congestion costs absent from its price, a well-designed tax can instead correct part of an existing distortion. The wedge diagram alone cannot tell which case applies.

Who finally gains is a separate question. We can say with confidence who pays, but not who gains from the tax until we know what the government does with the money it collects. The revenue might fund a bridge, a tax cut elsewhere, or a giveaway to some favored group, and each spends the proceeds on different people. The same caveat is why we cannot pronounce the whole arrangement a net loss to society: the buyers and the specific-resource owners clearly lose, but whether their loss is outweighed depends entirely on the value of whatever the proceeds buy, which the tax analysis by itself does not tell us.

## Fixed Land Is the Limiting Case: Its Owner Bears the Whole Tax

The elasticity rule includes a clean extreme. For a permanent, anticipated tax on *pure land rent*, with improvements and alternative uses held separate, the relevant supply is vertical: acreage and the gross rent users pay do not change, so the tax is carved out of the owner's net return. Taxes on buildings, transactions, or particular uses need not share this result.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Economic Rent</dt><dd>A payment to a resource whose quantity and use do not change when the payment changes.</dd></div>
<div><dt>Capitalization</dt><dd>The immediate change in an asset's price when a permanent change in its future earnings is gathered into present value.</dd></div>
</dl>
</aside>

Because a buyer values land by the future income it will yield, a permanent tax lowers the land's selling price as soon as it is anticipated. Whoever owns the land at that moment bears the loss; a later buyer pays the already-reduced price and earns an ordinary return from there. The acres do not disappear, and the user price does not rise. The burden shows up as a one-time decline in asset value.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t07b-tax-incidence-and-quasi-rent/figures/t04c-land-incidence-interactive.html" title="Drag the tax handle to see a fixed-land tax reduce the owner's return while user rent and acreage stay fixed." loading="lazy" style="width:100%; max-width:480px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t07b-tax-incidence-and-quasi-rent/figures/t04c-land-incidence-interactive.html">Open the interactive figure directly</a>.</p></iframe>
<figcaption><strong>A tax on fixed, immobile land falls on the landowner.</strong> Raise the tax and the owner's net rent shrinks while users' rent and the acres in use stay put. The case makes the general rule visible: the side least able to adjust bears the burden.</figcaption>
</figure>

The fixed-land result is the sharp edge of the elasticity rule. Pure land cannot flee, so its owner absorbs the tax through a capitalized fall in value. That is exactly why governments gravitate toward taxing immobile, place-bound bases like land. This is one pressure, not a complete account of tax systems: administration, benefit links, distribution, law, and coalitions also matter. Henry George's “single tax” made the limiting-case logic a reform program; the incidence result itself does not decide whether that program is desirable.

The converse is the political economy of the whole subject. A base that can move answers a tax increase by leaving, and how much it actually leaves depends on how mobile it is, which varies enormously from one base to the next. The most footloose high earners respond strongly: tracking <a href="https://www.aeaweb.org/articles?id=10.1257/aer.20150508">star scientists through their patents</a>, Moretti and Wilson (2017) found that a state letting these scientists keep 1 percent more of their income drew about 1.8 percent more of them over the long run. The average millionaire, by contrast, stays put. When <a href="https://ideas.repec.org/a/ntj/journl/v64y2011i2p255-83.html">New Jersey raised its top rate</a> by 2.6 points to 8.97 percent in 2004, the wealthy as a whole barely budged and the tax still raised roughly a billion dollars a year (Young and Varner 2011), with only the mobile slices, retirees and people living on investment income, tending to leave. When a base can exit, the taxing government cannot load the full burden onto it, and the burden slides toward whatever stays put. Land, which cannot move at all, is the base that stays put no matter what.

## A Tax on a Single Price-Taker Falls Entirely on Him

Change the experiment. Instead of taxing all gasoline, tax exactly one tiny seller, say one peanut farmer out of thousands, a penny a pound on his crop alone. What happens to the market price and quantity? Essentially nothing; his output barely registers in the total, so the market price does not budge. But he cannot raise his own price either, because he is a price-taker, and the market price is set by everyone else. So he sells at the same price as before yet now hands a penny a pound to the government on every pound. The entire burden lands on him, specifically on his specialized land and equipment, whose value drops because they now earn less. It is the mirror image of the broad tax: a tax on everyone splits between buyers and sellers, but a tax on one helpless price-taker is borne wholly by that one seller's specific resources, since he has no price-setting power to share it.

## In the Short Run the Tax Lands on Immobile Resources; in the Long Run on Consumers

Go back to taxing the whole peanut industry and watch the burden travel over time. In the short run, almost nothing can move. The land is planted, the harvesting equipment is bought and specialized to peanuts, the farmers are committed. Because so little can escape, the immediate burden falls heavily on these immobile resources: their value drops, since they now earn less after tax and cannot quickly shift to other work. But the land and the equipment fall by different amounts, and the reason is worth pausing on. The harvesting, shelling, and roasting equipment is built for peanuts and almost nothing else, so a tax that lowers peanut earnings lowers its value sharply; it has no good second life. The land is not so trapped. It can grow other crops, so it falls in value only to the extent it was worth more for peanuts than for its next-best use. Redeployable resources lose just their use-specific edge; fully specialized ones can lose almost everything. Quantity and price each move only a little at first, so producers absorb most of the hit on these fixed, specific assets.

Over the long run, marginal farmers can exit and redeploy resources. If supply becomes more elastic relative to demand, output contracts, the buyer price rises further, and consumers bear a larger share. Specific assets absorb more initially because they cannot move; surviving assets may recover as exit tightens supply, while exiting owners realize capital losses. “The burden moves to consumers” is conditional on the relative long-run elasticities shown in the figure, not a universal rule that time always favors producers.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t07b-tax-incidence-and-quasi-rent/figures/t07b-tax-sr-lr-interactive.html" title="Drag the Short run / Long run toggle to see who bears a per-unit tax" loading="lazy" style="width:100%; max-width:640px; aspect-ratio:16/10; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t07b-tax-incidence-and-quasi-rent/figures/t07b-tax-sr-lr-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t07b-tax-incidence-and-quasi-rent/figures/t07b-tax-sr-lr.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Steep short-run supply keeps most of the burden on producers; flatter long-run supply shifts most of it onto consumers.</strong> Both runs start at the same price and quantity and impose the same two-unit tax. In the short run, the buyer price rises by two-thirds while the seller's net price falls by four-thirds, and quantity barely moves. In the long run, supply has flattened much more than demand: the buyer price rises by four-thirds, the seller's net falls by two-thirds, and quantity falls much more. Tap Short run / Long run to compare, or use the arrow keys once it is focused. If the frame does not load, <a href="/teaching/microeconomics/t07b-tax-incidence-and-quasi-rent/figures/t07b-tax-sr-lr-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t07b-tax-incidence-and-quasi-rent/figures/t07b-tax-sr-lr.svg">view the static figure</a>.</figcaption>
</figure>

That carries a corollary about latecomers. If a permanent tax was fully anticipated and capitalized, a later buyer pays the reduced asset price and earns a normal expected return from there; the announcement loss fell on the prior owner. The result weakens when the tax may change, capitalization is incomplete, or buyers misforecast. Likewise, “tax businesses, not households” does not identify incidence: owners, workers, consumers, and suppliers are the people who adjust. Which group bears how much depends on relative elasticities and timing, not the business label.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A peanut tax was imposed years ago, and today an investor buys a peanut farm at its going market price. How much of that old tax does he bear, and why does the answer stay the same no matter how high the tax was?</p>
</aside>

## A Resource in Place Earns a Quasi-Rent

The peanut story leans on an idea worth naming. A resource already in place, with its cost sunk, earns what economists call a *quasi-rent*: a temporary surplus over its bare operating cost.

<aside class="econ-callout econ-def">
<p class="econ-callout__label">Definition</p>
<p>A quasi-rent is the temporary surplus a resource already in place earns over its bare operating cost.</p>
</aside>

You can reduce that surplus without immediately driving the resource out because its original cost is sunk; shutdown depends on operating and redeployment alternatives. For labor, the gap between current earnings and the best available alternative is analogous, but contracts, morale, bargaining, search, and future retention affect what an employer can capture. Quasi-rent explains short-run exposure, not unlimited power over an immobile resource.

## For Further Reading

Want to explore the source material? This lecture draws on the following chapters from two books by Armen A. Alchian and William R. Allen:

- *Universal Economics* (Liberty Fund, 2018): Ch. 11, “Illustrative Applications of Demand Principles”; Ch. 17, “Timing of Adjustments”; Ch. 18, “Facts of Life”; Ch. 27, “The Corporate Firm”.
- *Exchange and Production*, 3rd ed. (Wadsworth, 1983): Ch. 4, “Market Prices as Social Coordinators”; Ch. 11, “Price Searchers”; Ch. 18, “The Domestic and Political Economies”.

<div class="econ-review">
<section class="econ-review__section">
<h3>Key takeaways</h3>
<ul>
<li><strong>Relative elasticity determines economic incidence.</strong> Under equivalent coverage and enforcement, statutory remittance does not decide the burden; compliance and salience can still depend on legal design.</li>
<li><strong>Pure fixed-land rent is the limiting case.</strong> A permanent anticipated tax capitalizes into the owner's asset value, while immobility is one political reason to choose the base rather than a complete tax theory.</li>
<li><strong>Tax burdens can move and capitalize.</strong> Time matters when relative elasticities change; a later buyer avoids an old announcement loss only when a permanent tax was fully anticipated and capitalized.</li>
</ul>
</section>
</div>
<!-- UE–E&P TARGETED SOURCE AUDIT (2026-08-10)
Authoritative memo: revision/ue-ep-source-memo-wave-b-2026-08.md.

- Statutory-incidence equivalence now requires matched coverage/compliance/enforcement;
  corrective-tax and legal-design margins are explicit.
- The land case is a permanent anticipated tax on pure rent; mobility is one political
  mechanism rather than a complete tax theory.
- Long-run burden movement and late-buyer insulation require relative-elasticity change
  and full anticipation/capitalization; labor quasi-rent capture is qualified.
- Three objectives, six Core/eighteen coverage anchors, figures, extensions, and both
  cross-post migration destinations remain.
-->
