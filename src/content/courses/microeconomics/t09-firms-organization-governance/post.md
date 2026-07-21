---
title: "Firms: Organization, Contracts, and Governance"
topic: "T9 — Firms: Organization, Contracts, and Governance"
course: "Principles of Microeconomics (FAU)"
sessions: ["Fall 2026 — content session 18 (Thu 10/22)"]
ue_anchors: ["UE 22", "UE 23", "UE 24", "UE 25", "UE 27", "UE 28"]
be_anchors: ["BE 7 (partial)"]
ep_anchors: ["E&P ch. 9 (Business Firms: Ownership, Control, Profits) — the regression fallacy: a single result is part skill, part luck, and good luck regresses to normal (100-identical-salespersons); treating one lucky result as durable ability is the regression fallacy, but 'the market does not commit regression fallacies' — bidders who overpay for a lucky year lose wealth to those who can tell luck from ability, and superior ability, once revealed, is bid into higher prices/rents/wages"]
word_target: "3000-6000"
word_cap_waiver: "review-pass-2026-08"
status: approved        # M11 done gate 2026-07-20 (§10 A+B PASS); prior Stage-2 2026-06-15
audience: students
note: "Self-contained — assumes no access to the textbooks. Source-of-truth for the T9 deck; section headers are claims that map to slide titles. T9 = why firms exist (team production, non-separability, moral hazard), the residual claimant as owner-monitor, protecting specific investments against hold-up, the corporate form + market for corporate control, and the contract-grounded shareholder-vs-stakeholder application."
---

# Firms: Organization, Contracts, and Governance

So far this course has treated the economy as a web of trades between separate people. You sell your labor, a baker sells bread, and prices steer the whole thing. But most production does not happen that way. It happens inside firms: a restaurant, an airline, a software company, a hospital. Inside those walls a boss tells people what to do, output is shared rather than individually sold, and nobody negotiates a fresh price for every task. If markets and prices are so good at coordinating strangers, why does so much of economic life take place inside organizations that suppress the price mechanism and replace it with command?

That is the puzzle here, and we answer it in pieces: why teams produce more than scattered individuals, why that tempts slacking, who owns a firm and why that person has the strongest reason to police it, how people protect investments that leave them exposed to a partner, and how the corporation lets strangers pool wealth. Threaded through it all is a political-economy question: what happens to behavior when the link between authority and responsibility is cut?

<aside class="econ-callout econ-objectives">
<p class="econ-callout__label">Learning objectives</p>
<p>By the end of this post you should be able to:</p>
<ul>
<li>Explain why team output exceeds separate efforts and cannot be divided among members.</li>
<li>Explain why unmetered team output tempts shirking, making monitoring a real job.</li>
<li>Identify the residual claimant and why he has the strongest reason to monitor.</li>
<li>Explain how tips, premium wages, and deferred pay curb shirking cheaply.</li>
<li>Explain how a specific investment creates dependence and invites hold-up.</li>
<li>Describe how integration, hostages, contracts, and reputation shield a dependent party.</li>
<li>Explain how limited liability and transferable shares let a corporation pool wealth.</li>
<li>Explain how salable shares make control contestable and discipline managers.</li>
<li>Distinguish a shareholder's contractual claim from a stakeholder's unilateral dependence.</li>
<li>Explain why stockholders and bondholders clash over risk, a general conflict.</li>
</ul>
</aside>

## Firms Exist Because Team Output Cannot Be Divided Up

Start with the gain that makes firms worth forming. People can produce more of some things together than apart. Suppose Jack working alone produces output worth $5 and Jill alone produces $7. Apart, they make $12 between them. Put them on the same team and they produce $15. Working together created $3 of value neither could have made solo.

That extra value is the whole point of a team. But it brings a problem that does not exist when people each make their own thing and trade. How should the $15 be split? You might say "pay each person what they add to the total." Try it. Jack's presence raises team output by $15 minus $5, or $10; Jill's by $15 minus $7, or $8. Add those and you get $18, more than the $15 there is to divide. The arithmetic is impossible.

| Jack and Jill | Value produced |
|---|---|
| Jack, working alone | $5 |
| Jill, working alone | $7 |
| Total, working separately | $12 |
| Jack and Jill, working together | $15 |
| Jack's "marginal product" in the team ($15 − $5) | $10 |
| Jill's "marginal product" in the team ($15 − $7) | $8 |
| Sum of the two marginal products | $18 |

The table makes the trap visible. The two contributions sum to more than the joint output because the output is genuinely *joint*. It is non-separable: there is no honest way to slice the $15 and say "this part is Jack's doing, that part is Jill's." The gain from teamwork belongs to neither one alone.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>The two marginal products sum to $18, but the team produced only $15. Why can't a firm pay each teammate the value he adds to the total?</p>
</aside>

This is why "you are paid the value of what you produce" is, inside a team, a futile claim. The B-17 bomber crews of the Second World War make the point. A crew of ten specialists flew each mission together; ask which one mattered most and the question dissolves, because the plane either completed its run or it did not, and the result was the crew's.

So if pay cannot track each person's slice of an unsliceable total, what sets it? Competition. Each team member earns roughly what he could get on his best alternative team elsewhere; that outside option is the real cost of keeping him, and pay must at least match it. If the whole team produces less than the sum of what its members could earn elsewhere, it will not form or will not last. (How much a worker is worth to an employer, and why chasing "what you add to the total" leads nowhere, connects to the demand for labor, our next topic.)

## When Contributions Can't Be Metered, People Are Tempted to Shirk

The non-separability that makes teams valuable also makes them vulnerable. If no one can measure exactly what you contributed, you can ease off and let the others carry you, collecting your share while supplying less than your effort. Economists call this *shirking*, and the general problem it belongs to is *moral hazard*: when someone can capture the gains from cutting corners while others bear the cost, and the cutting is hard to detect, expect more of it.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Moral Hazard</dt><dd>The temptation to take less care when others bear the cost and the conduct is hard to detect.</dd></div>
</dl>
</aside>

Moral hazard is everywhere, not just on the shop floor. An employee paid by the hour, a manager spending other people's money, a depositor whose account is guaranteed by the government, all face some version of the temptation to take less care than if they bore the full consequences. The B-17 crew is the rare team where shirking barely arises: at 20,000 feet under fire, no one is tempted to loaf, because everyone's survival rides on everyone's effort.

Because shirking is the cost of team production, somebody must watch for it, and *monitoring is itself a job that creates value*. This answers a puzzle about sports: the coach never plays, the conductor never makes a sound, so what do they contribute? They monitor. A player executing his own assignment at full tilt cannot also evaluate his teammates and bench the ones who slack; the coach can. The conductor adds nothing to the noise and everything to the music by judging each musician's performance.

## The Owner Is the Residual Claimant, and That Is Why He Monitors

If monitoring is so important, who does it, and why? You cannot literally "own a firm"; a firm is a bundle of people and contracts. What you own is the firm-specific resources whose value rises and falls most with how well the firm does. The person holding those resources is the *owner*, and he has a special claim: after everyone else has been paid their agreed wages, rents, and interest, whatever is left, profit or loss, is his. We call him the *residual claimant*.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Residual Claimant</dt><dd>The owner who keeps whatever is left after all fixed claims are paid, and bears any loss.</dd></div>
</dl>
</aside>

This is no accident; it solves the monitoring problem. The residual claimant keeps every dollar saved by stopping a shirker and eats every dollar lost to one, so no one has a sharper incentive to watch the team. He gets the authority to direct, hire, and fire, and bears the residual in return: authority and responsibility are bolted together.

Bearing the residual means bearing risk, so it is worth pausing on risk itself. We cannot outlaw risk. Misfortune happens, careful behavior only lowers the odds, and the consequences always land on someone. The open question is who. A society can let losses fall on whoever they strike, the homeowner whose roof a storm tears off; it can let people *pool* their risks through *insurance*, each paying a small predictable premium so that the unlucky few are made whole from the common fund; and it can have government cushion the weakest against the worst blows. Our law sorts these cases with a rough but useful line between losses caused by someone's *negligence*, which we charge to the careless party, and "acts of God" no one could prevent, which we treat as nobody's fault. The firm's owner is one answer: by accepting the residual claim, he volunteers to absorb a bundle of business risk for the profit that comes with it. And this risk can be shifted by rewriting the contract. A boat owner who hires fishermen for a fixed wage keeps the residual and bears the risk of a thin catch himself; but if instead he rents the boat out for a fixed daily fee, he has taken the fixed claim, and now the renters bear that day's risk, because they owe the rent whether the fish bite or not. Whoever holds the fixed claim has pushed the residual onto the other side.

T12 will formalize the three risk tools previewed here: pooling independent losses, adverse selection over who joins a pool, and moral hazard when protection changes behavior.

Notice what this does to "the boss." We think the boss commands because he can order people around. Not really. The boss directs the team because he pays it; the employee, in turn, can "fire the boss" by quitting and taking his labor elsewhere. The relationship is a knot of voluntary contracts, not a chain of command.

The residual claim explains a great deal once you look for it. Consider a charter school versus an ordinary public school. People debate whether charters are "better," but the structural difference is plain: a charter must compete for students it can lose, and someone bears the cost when it falls short, whereas a traditional public school faces neither real competition nor an owner who loses personally when quality slips. The discipline of losable value, not superior virtue, drives quality where it exists. The same logic exposes the "firm" with no real owner: in not-for-profits, government enterprises, and cooperatives, no one holds a tradable residual claim, so no one captures the gains from running the place better. The slack shows up in more than laziness. A manager who pays no personal price for a worse-run organization can also indulge his own tastes in hiring, screening applicants by race or religion rather than by who would do the job best, because the profit he sacrifices by passing over the better worker is not coming out of his pocket. A for-profit owner bears that cost directly and so has a money reason to hire the best person regardless of his prejudices; strip out the residual claim and you should expect more discrimination, not less.

Our property-rights and public-goods topic takes these ownerless organizations up directly, tracing how nonprofit and government enterprises behave when no one stands to gain or lose as residual claimant.

The history of socialist experiments demonstrates this. In the former Yugoslavia, factories were nominally "employee-owned," and the result was predictable: workers neglected maintenance and skimped on new equipment, because, unable to sell their ownership share, they could never capture the future earnings good upkeep would produce. Ownership you cannot transfer is barely ownership, a point the Soviet leadership missed when, in the dying days of the USSR, they boasted of the world's highest rate of "home ownership" while still forbidding anyone to buy or sell a home. Real ownership means exclusive use *plus* the right to transfer that use to someone else; strip out the right to sell and the certificate means little.

That points to the political-economy lesson. Under private property, the owner bears the swings in value directly and can adjust what he holds, selling out of a venture he sours on and into one he believes in. Under state or collective control, profits and losses are borne indirectly, through political office and the power to tax, by people who cannot pocket the gains or sell their stake. That severed link between who decides and who bears the consequences blunts the incentive to husband resources well. We saw it in the property-rights topic's tragedy of the commons, where a resource no one owns gets overused and degraded because each user reaps the gain from taking more while the cost of depletion falls on everyone, and it appears again in public choice.

## Monitoring Devices Align Incentives Where Watching Is Costly

Watching every worker every minute is expensive, so firms lean on devices that make people want to behave even when no one is looking, each tying a worker's future to his current conduct. The simplest is to let someone else monitor for free: a restaurant cannot easily watch whether a waiter is attentive, but the customer can, and the *tip* turns the customer into an unpaid monitor whose reward tracks the service he just got. A second is the premium wage: pay a worker noticeably more than he could earn elsewhere, and getting fired now costs him that extra stream of pay for years, so the threat of losing a good thing keeps him honest more cheaply than constant supervision would. Up-or-out promotion, deferred compensation, and tenure run on the same principle: load part of the reward into the future, payable only to those not caught slacking.

## Specific Investments Create Dependence, and Dependence Invites Hold-Up

The next problem arises between a firm and a partner, the moment someone sinks money or effort into an asset worth far more in one particular relationship than anywhere else. Economists call this a *specific* or *dependent* investment.

Picture a sailor who buys a custom mast cut to fit one boat, a refinery erected next to the one pipeline that can feed it, or a worker who spends years learning skills useful only to his current employer. Once the investment is sunk, its owner is exposed: the partner he depends on can demand better terms, threatening to walk unless he renegotiates. This is the *hold-up* problem, having you over a barrel because you cannot cheaply take your investment elsewhere. How far can it go? Only as far as the value you would lose by relocating. If moving your refinery to another pipeline would cost a fortune, your partner can squeeze you nearly that far before you walk. The gap between what your asset is worth here and in its next-best use is the prize you fight over.

Notice that the worker who learns firm-specific skills is exposed to hold-up from the *other* direction: having sunk that investment, he now earns more here than anywhere else, so the employer can threaten to cut his pay toward his outside option and pocket the difference. The devices we met as ways to deter shirking double as shields against this employer opportunism. Up-or-out promotion forces the firm to decide rather than string an underpaid junior along; tenure and seniority guarantee a dependent employee that his firm-specific value will not be confiscated once he can no longer credibly leave. The institution that disciplines the worker also protects him.

The same dependence runs through ordinary commerce wherever two things are worth more together than apart. A ballpark and the parking lot beside it are complements: each is more valuable because the other is there. If they have different owners their interests clash, since each would like the other to charge less so that more fans show up. Manufacturers, wholesalers, and retailers along a chain of distribution disagree about pricing for the same reason; their revenues come from different places, and each worries the others will not hold up their end. The conflict is reciprocal, not one-sided. (One classic remedy, a manufacturer setting the minimum price a retailer may charge, follows the same logic: it can stop a bare-bones discounter from free-riding on the showrooms, demonstrations, and knowledgeable staff of full-service retailers, then undercutting them after the customer has used the service, which would drive the service out. The full analysis of such vertical restraints belongs with our treatment of market power.)

## Reputation, Contracts, and Hostages Protect the Dependent Party

Because hold-up is a predictable danger, people have invented several ways to defuse it. The cleanest is *integration*: bring both interdependent assets under one owner. If the same company owns the ballpark and the parking lot, or the refinery and the pipeline, there is no one to hold up, because squeezing yourself accomplishes nothing. When full integration is impractical, a second route makes the dependence mutual through an *exchange of hostages*: if I can hurt you but you can hurt me back just as badly, neither of us will start. Oil companies routinely swap supplies and facilities so each holds something the other needs. A third route is the long-term or exclusive contract that locks in terms before the investment is sunk and the leverage shifts. Baseball's old reserve clause, which bound a player to one team, and the multi-year contracts that bind aspiring actors both protect an investor about to spend heavily developing someone whose proven value would otherwise let him walk.

It is no accident that performers and athletes are the standard examples of trying to tear up a signed deal once they make it big, far more than doctors, lawyers, or engineers. The difference is the shape of the career. A star's high earnings arrive in a short burst of a few years, so the value of the whole career is bunched into that brief window, and the pressure to cash in while still hot is enormous. A doctor or engineer earns a good living spread evenly across decades, so the temptation to blow up a contract for a one-time gain is far weaker. The longer the earning horizon, the less reason to grab.

That short-window logic explains the studio contract too. A studio signs an unknown to a five-year deal. She becomes a star and feels cheated, locked into yesterday's pay while drawing tomorrow's crowds. But the studio signed many unknowns, and most never became stars. The contract must pay enough early, when failure is likely, to make the whole gamble worth taking, which means the rare winner is "overpaid" at first and "underpaid" later. The late underpayment is not exploitation; it is the offset that funded all the bets that flopped. Without the bundle, no one would back unknowns at all.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A studio's one breakout star feels cheated by her five-year deal. Why is her later "underpayment" not exploitation, given the many unknowns the studio also signed?</p>
</aside>

The most powerful protection is written in no contract. It is *reputation*: other people's belief about how you will behave in the future, valuable because it lets them rely on you without inspecting everything you do. A *brand name* is reputation made portable. Far from being empty advertising propaganda, a brand lets a shopper predict quality and judge whether a price is fair without costly investigation, which is why a traveler in a strange city chooses the familiar chain over the unknown diner next door. What makes a brand trustworthy is that the seller has put up a hostage of his own: building a brand is expensive, and that investment evaporates the instant he is caught cheating. A brand is thus a self-enforcing promise; the seller behaves well not out of virtue but because misbehaving would forfeit the future earnings the brand exists to capture. Advertising is a sibling mechanism, equally maligned without cause: by telling buyers who sells what, an advertisement lowers the customer's cost of finding a seller, so it serves the shopper as much as the seller. A tire ad is worthless on the many days you need no tires and valuable on the rare day you do. *Franchising* scales this up. The franchiser supplies and polices a predictable brand, "no surprises" from one town to the next, while the franchisee pays a fee and posts a sign that act as a hostage the franchiser can seize if the franchisee free-rides on the shared name by skimping on quality. The relationship is mutual dependence, not tribute paid to a useless headquarters.

Whether reputation actually disciplines a seller depends on whether his customers have somewhere else to go. A private firm exposed to competition is ruined by a bad name, because buyers simply leave. An organization shielded from competition can carry a terrible reputation for years and survive, because its customers have no alternative; a legally protected postal monopoly or a department of motor vehicles is not undone by complaints the way a restaurant would be. Reputation bites only where exit is real.

One last, light point. Where law cannot reach, ethics and shame still restrain people from reneging, which lowers the cost of relying on others; a society whose members feel bound by their word can support more cooperation and trade than one whose members cheat whenever they can. Professional codes of conduct work the same way, though they can also shade into devices that protect insiders, a tension we revisit under policy.

## The Corporation Pools Vast Wealth Through Limited Liability and Tradable Shares

Now look at the legal form that lets firms grow enormous. There are three basic ways to own a business. A *proprietorship* has a single owner; a *partnership* has several; a *corporation* is a separate legal entity, distinct from the people who own it, and it carries two features that change everything: limited liability and freely transferable shares.

*Limited liability* means an owner can lose only what he put in, never more. A proprietor's entire personal wealth, his house and savings, stands behind the firm's debts; a corporate shareholder risks only the money he used to buy his shares. That is why even a one-person corporation differs from a proprietorship: the corporation walls off the owner's other wealth. The wall matters most when it is absent. During the First World War, Herbert Hoover organized a vast charitable enterprise to ship food to starving Europe. A banker he recruited asked whether it was a limited-liability organization; told it was not, he resigned on the spot, because if donations fell short of the food bought, his life savings could be wiped out. Without limited liability, capable people refuse to join large, risky ventures.

The second feature, *transferable shares*, lets an owner sell his stake to anyone, at any time, without disrupting the firm. Here corporations differ from teams of employees. A worker cannot sell his job, because team members' obligations are interlocked and changing the roster requires the boss's power to hire and fire. Stockholders are not an interlocked team; one shareholder selling to another changes no one else's rights or duties, so shares change hands freely. That salability also gives the corporation a kind of immortality: shares pass to heirs or buyers without anyone's permission, so the firm survives the death of any owner, unlike older partnership forms (the classical Islamic partnership) that dissolved when a partner died.

Put the two features together and you see why the corporation became the dominant form for assembling large pools of capital. A railroad or an airline costs more than any handful of rich investors would risk on a single throw. But spread that cost across thousands or millions of small savers, each shielded by limited liability so none risks more than a modest stake, each able to sell out whenever he likes, and the money can be raised. About half the American population now owns corporate stock, much of it indirectly through pension funds. The corporation is, at bottom, an efficient machine for letting strangers share the risks and rewards of an investment too large for any one of them. (It need not even be a business: the first American one was the Harvard Corporation, formed in the seventeenth century to govern a college.)

The corporate form does not bear a corporate tax as though it were a person. T7 traced the burden to incumbent shareholders at announcement and, over time, to whichever people and resources cannot shift away from the taxed form.

The rise of large firms prompts a common complaint worth answering: "decades ago there were dozens of small producers, now a few giants dominate, so consumers have fewer places to buy." It sounds plausible and gets the result backwards. The number of *firms* is not the number of *choices* a buyer has. Picture an old world of a thousand isolated towns, each with five local sellers nobody outside could reach. That is five thousand firms, yet any one shopper can buy from only the five in his own town. Now let cheap, fast transportation and communication knock down the walls between towns. The total number of firms may collapse, but each shopper can now reach sellers in town after town, so the number of suppliers actually competing for his business goes up. Fewer, larger firms have meant more sources of supply, not fewer, because the reach of every buyer widened. (Why firms settle at the sizes they do, we take up later under costs and market power.)

One wrong reason for why firms exist is worth heading off: "people lack the wealth to buy their own equipment, so they band together." Pooling money for equipment is real, and the corporate form helps with it, but it is not why firms exist. Firms exist because organizing interrelated tasks under one roof, negotiating once and monitoring jointly rather than haggling over every transaction, is cheaper than coordinating the same people through endless separate market deals. The legal form for raising capital is a separate question from the reason a firm exists at all.

## The Market for Corporate Control Disciplines Managers

The corporation raises an old worry: the scattered shareholders who own it are not the managers who run it. Critics call this the "separation of ownership and control" and treat it as a defect. It is better understood as beneficial *specialization*. Most small savers neither have nor want the expertise to run a company; they would happily invest in a talented manager's venture while giving up day-to-day control, just as you might put money into a capable friend's business without wanting to mind the store. Division of labor between owning and managing is no stranger than any other, and control by holders of well under half the stock is normal, not a scandal.

But specialization reintroduces moral hazard at the top. Managers spending other people's money may slack, empire-build, or feather their own nests, the same temptation a hired hand faces, scaled up. What checks them is that shares are salable, which makes control *contestable*. Run a company poorly and its share price sags, because the price already reflects the firm's long-run prospects. A low price is then an invitation: outsiders who think they can do better buy up the shares, take control, and install new managers, capturing the gain when the firm's value recovers. This is the *market for corporate control*, working through takeovers, tender offers, and leveraged buyouts, and the threat of being bought out disciplines managers even when no buyout comes.

This reframes the much-maligned "corporate raider." Because today's share price already capitalizes the firm's expected future earnings, a buyer who pays a premium to seize a sagging company is not grabbing a quick illusory profit; he is recognizing real future gains current management is failing to realize. It also explains an odd fact: why would anyone pay to acquire a money-losing subsidiary rather than be paid to take it off the seller's hands? Because the buyer may be more optimistic about a turnaround, or may treat prior overspending as a *sunk cost* irrelevant today, and bids a modest price he expects to recover later. (Valuing those future earnings properly is the machinery, present and expected value, we take up later.)

That premium is a bet on durable ability, and here a subtle trap waits for the careless bidder. A single good year is part skill and part luck, and luck does not last. This is the regression to the mean we met in the first topic, now applied to firm performance: among a hundred roughly equal salespeople, whoever tops the board one week is likely closer to the pack the next, because part of that lead was luck that will not repeat. To treat one lucky year as proof of lasting superior ability is to commit the *regression fallacy*. A raider who overpays for a firm's fluke, valuing it as if the good fortune were skill, hands wealth to the buyers who can tell luck from genuine ability; those buyers, in turn, snap up firms whose real quality others have written off as luck. Because the careful bidders win and the careless ones lose their stake, market prices come to reflect ability rather than luck. The market does not commit regression fallacies, even when the people in it do.

Managers facing this discipline fight back, and where they fight is revealing. One tool is the proxy, the right to cast an absent shareholder's vote, which incumbent managers can gather in bulk to keep themselves in place. Critics treat this as proof that owners are powerless, but it shows less than it seems. That management stays put in ordinary times does not mean shareholders are suffering losses; stable management usually goes with performance owners find acceptable, which is why no one mounts a fight to replace it. Nor should a lone small shareholder be able to throw out the management single-handedly; we hold votes precisely so that no single person's will overrides everyone else's. And when a "minority" group wins control by collecting a majority of the votes, that is a majority ruling through the group it has chosen to vote for it, the way Congress is a few hundred people exercising authority delegated by hundreds of millions.

Other times managers reach past the firm to the state. Threatened managements lobby state legislatures for anti-takeover laws that entrench them against the very owners they serve, a political-economy pattern we will see again: an inside group using state power to shield itself from competition. The same lens reframes "corporate social responsibility." When activists urge a company to pursue goals other than serving its owners, they are attempting a takeover without buying any shares; if a goal commands genuine support, the honest route is to persuade shareholders to donate, not to commandeer the company.

A note on the "facts" in these debates: it is often claimed that very few corporations lose money. In any given year a substantial share of them do, and even a firm earning a positive profit below what investors expected has imposed a loss on its owners, because the value of their shares falls. The residual claimant bears every disappointment, not only the disasters.

## A Shareholder's Claim Rests on a Contract; a Stakeholder's Does Not

This brings us to a distinction that matters enormously in public argument and turns entirely on contract. A *shareholder* acquired his claim by a prior agreement: he bought in, on terms, from the owners. A *stakeholder*, in the loose modern sense, is anyone whose fortunes depend on the firm, the grocery store across the street that caters to its employees, say, but who made that dependent investment unilaterally, without any promise. The grocer has a stake, but was promised nothing.

The difference is not a quibble. Management cannot put a non-contractual stakeholder's interests ahead of the shareholders' without breaking the agreement the shareholders are owed. That is the core of the answer to "shouldn't corporations serve all their stakeholders?" They are bound by their actual promises, no more and no less. And those promises bind where they exist: employees promised pensions, deferred pay, or health benefits, and lenders who advanced money on agreed terms, are *contractual* stakeholders with claims as solid as the shareholders' own. A firm that fired workers days before their pensions vested would be breaking a real commitment. The line is not "owners versus everyone else"; it is between obligations the firm undertook and dependencies others assumed without one.

The evidence on governance design is humbling for anyone sure more shareholder "democracy" always helps. The United Kingdom gives shareholders unusually strong rights, to call meetings, remove boards, vote on executive pay, and force through hostile bids, yet British firms are notably underrepresented among the world's largest corporations; more voting power for owners is not obviously the same as better-run companies. Relatedly, when corporations are owned by a few large financial institutions risking their own money, those CEOs are paid the highest salaries of all, which cuts against the story that careless boards overpay executives with other people's cash. Owners with real money at stake set high pay deliberately, because a bad chief executive costs far more than the salary.

That answers a question people find infuriating: why pay a failed CEO millions to leave? Because keeping a failing chief executive can cost the company far more, billions in bad decisions, than the severance does, and dragging the firing through internal fights or the courts costs more still. The "golden parachute" is the price of ending a costly relationship fast. Which brings us to a distinction worth stating plainly: *a cost is not the same as a waste*. Severance is a cost; so are the jobs lost when a merger eliminates duplicate positions. Those losses are real and fall hard on identifiable people. But a change that makes the combined enterprise more productive raises total wealth even as it imposes that concentrated pain, and refusing it would leave society poorer. The pain is concentrated and visible; the benefits spread thin across consumers and investors who never notice. That asymmetry, concentrated costs against dispersed benefits, is why efficiency-raising changes are so often resisted politically, a theme we develop under the political economy of policy.

## Conflicts Among Owners and Lenders Are the General Problem, Not a Corporate Flaw

One last twist shows the tensions inside a corporation are not special to it. A firm's owners differ in their appetite for risk: stockholders, as residual claimants, capture the upside if a gamble pays off, while bondholders, who hold a fixed claim, get the same repayment whether the firm does brilliantly or merely adequately. So stockholders generally prefer *more* risk than bondholders would choose, and shifting toward a riskier strategy after the loan is made can transfer wealth from the lenders to the owners. Suppose a firm worth $10 is financed by $1 of the owners' money and $9 borrowed from a lender, and the managers switch to a riskier venture with a fifty-fifty chance of leaving the firm worth $20 or nothing.

| Investor | Initial value | Value if it fails | Value if it succeeds | Expected value | Gain or loss |
|---|---|---|---|---|---|
| Stockholders | $1.00 | $0 | $11.00 | $5.50 | +$4.50 |
| Lender | $9.00 | $0 | $9.00 | $4.50 | −$4.50 |

Read the rows in plain words. If the gamble succeeds, the firm is worth $20; the lender is repaid his $9 and the stockholders keep the remaining $11. If it fails, everyone gets nothing. Since the two outcomes are equally likely, the lender's expected repayment is half of $9, or $4.50, an expected loss of $4.50 on a loan once worth $9. The stockholders' expected take is half of $11, or $5.50, against the $1 they put in, an expected gain of $4.50. The riskier strategy quietly moved $4.50 from the lender to the owners. (This is the one place in this post where we lean on *expected value*, a payoff weighted by how likely it is; the tools for valuing uncertain future money arrive later.)

This same conflict, anticipated in advance, explains which firms are financed by which kind of money. The harder it is to watch what a firm does with the funds, the more it is financed by stock rather than by bonds. A research lab, a software shop, or a law firm runs on mental work no lender can supervise, so its backers must accept the residual claim and bear the risk as owners; a power utility or a railroad, whose routine operations are easy to monitor, can safely attract bondholders content with a fixed, low-risk return. Monitoring difficulty sorts investors into owners and lenders before any gamble is taken.

That is moral hazard between classes of investors rather than between owner and worker, and lenders, knowing the danger, guard against it in advance with higher interest rates and covenants restricting what the borrower may do. The same logic explains the savings-and-loan debacle: when the government guaranteed depositors against loss, they stopped caring how recklessly their institutions invested, since the gains would be private and the losses socialized. These conflicts among dependent parties are not defects peculiar to the corporate form; they are the same problem we met on the shop floor, whenever one party can capture a gain while another bears the cost and the conduct is hard to police.

After all the talk of shareholders, managers, and raiders, the firm's ultimate controller is none of them; it is the consumer. The market for corporate control disciplines managers from above, but consumer demand disciplines the whole firm from below: a firm whose product no one will buy dies, unless it can secure a government subsidy or a law banning people from buying from competitors. The buy-or-walk-away decision is the one discipline no boardroom maneuver can repeal.

<div class="econ-review">
<section class="econ-review__section">
<h3>Key takeaways</h3>
<ul>
<li><strong>Teams create non-separable value.</strong> Joint output exceeds separate effort but belongs to no member alone.</li>
<li><strong>Non-separability tempts shirking.</strong> Unmetered effort invites slacking, so watching for it is a paid job.</li>
<li><strong>The residual claimant monitors.</strong> Keeping what is left after fixed claims gives the sharpest reason to monitor.</li>
<li><strong>Devices economize on watching.</strong> Tips, premium wages, and deferred pay curb shirking when supervision is costly.</li>
<li><strong>Specific investments invite hold-up.</strong> A sunk, relationship-specific asset leaves its owner exposed to a partner's squeeze.</li>
<li><strong>Several devices defuse hold-up.</strong> Integration, hostages, long-term contracts, and reputation protect the dependent party.</li>
<li><strong>The corporation pools wealth.</strong> Limited liability and transferable shares let strangers share huge ventures.</li>
<li><strong>Control is contestable.</strong> A sagging share price invites a takeover that disciplines managers.</li>
<li><strong>Contracts bind, dependence does not.</strong> A shareholder's claim rests on a prior promise; a firm owes only its actual commitments.</li>
<li><strong>Investor conflicts are general.</strong> Stockholders want more risk than bondholders wherever one gains while another bears the cost.</li>
</ul>
</section>
</div>+ table rows ^|), WITHIN the 6,000 hard
cap (12 words headroom). §6 voice on the body: em-dashes 0 (budget <=~12); "quiet*" 1
("quietly moved $4.50"; budget <=2) — both within budget; the three adds introduced no em-dashes
(the one "quietly valuable" draft phrasing was reworded out to hold the count at 1). The §10
record below is updated with the Stage-2 second-pass result + the B-1 disagreement trail.

STAGE-2 LIGHT TRIM (2026-06-15): a LIGHT, LOSSLESS density pass on the body (no §10 re-run)
to open healthy headroom below the 6,000 cap, since the second pass had left only 12 words of
margin. COVERAGE-NEUTRAL: every must-keep was inventoried first from this §7 block (each
covered/partial Q&M verbatim anchor, every [REG]/closed-gap anchor, both recreated tables +
their numbers, every forward-hook concept+claim, every section header) and held VERBATIM; only
prose density was trimmed — redundant restatement tails, wordy connectives/appositives, two
double-examples (the gas-fired-power-plant instance in the hold-up list, kept the refinery+
pipeline + firm-specific-skill anchors; a decorative "renege now or never" tail), and a couple
of pure cross-reference asides ("We will meet the bank case again at the end"; "Guarantee
someone against the consequences of risk and you get more risk-taking" restating the S&L
sentence). NO concept, Q&M answer, table, forward hook, or header dropped. PINNED BODY COUNT
NOW 5,800 (same strip method), ~200 words of headroom below the cap (was 12). A 73-anchor
grep-style verification (all §7 verbatim anchors incl. the 4 Stage-2 adds + both section-header
claims + table-number anchors $15 / +$4.50) re-passed 0 misses after the trim. §6 voice held:
em-dashes 0 (<=~12); "quiet*" 1 ("quietly moved $4.50", untouched; <=2). The body now runs ~800
above the ~5,000 soft target (an optional further trim toward 5,000 could still move a LIGHT
strand — UE25 ethics/shame Q5 or the monitoring-devices catalog — to live lecture, but those
were again left INTACT here to stay coverage-neutral; the post is genuinely a 6-anchor superset
in which nearly every remaining sentence carries a distinct Q&M answer or core idea, so a deeper
cut would cross from density-trim into content-cut). Both verified tables untouched (numbers +
cells unchanged). The §10 record below is unchanged by this pass (no findings, no re-review).

COVERAGE MAP (post section -> source key-points delivered)
- "Firms Exist Because Team Output Cannot Be Divided Up": UE22 (team output > sum of
  solo; non-separable joint product; Table 22.1 Jack&Jill; MPs sum to MORE than total ->
  can't separate contributions; "paid what you add to total" is futile inside a team;
  B-17 crew; competition pays each member ~best alternative elsewhere). Forward gesture
  to T10 (VMP/labor demand).
- "When Contributions Can't Be Metered ... Shirk": UE22/23 (shirking; moral hazard
  generalized to employees/managers/depositors; monitoring is a distinct value-adding
  job; coach/conductor; B-17 = low shirk temptation).
- "The Owner Is the Residual Claimant ... Monitors": UE23 (can't own a firm; owner =
  holder of firm-specific resources; residual claimant; strongest incentive to monitor
  -> authority to direct/hire/fire; the boss directs because he pays, employee can fire
  the boss by quitting; nexus of voluntary contracts; charter vs public schools;
  not-for-profit/government/coop no-owner; Yugoslav neglect; Soviet "home ownership" =
  exclusive use w/o transfer; ownership = exclusive use PLUS right to transfer).
  + political-economy contrast private vs collective/state risk-bearing (UE22 Q2).
- "Monitoring Devices Align Incentives": UE23 (tips = customer monitors; premium/
  efficiency wages + termination threat; up-or-out / deferred comp / tenure).
- "Specific Investments Create Dependence ... Hold-Up": UE24 (specific/dependent
  investment; sailor's mast / gas-fired plant / refinery-next-to-pipeline / firm-
  specific skill; hold-up; bound by relocation-loss; ballpark+parking complements;
  manufacturer/wholesaler/retailer reciprocal pricing conflict). + one-line RPM forward
  hook -> T8. + REVERSE-HOLD-UP (UE23 §"Restraining Employer Opportunism," ADDED Stage-2
  2026-06-15, Reviewer-B B-4): the firm-specific-skilled worker is exposed from the OTHER
  side too — the employer can threaten to cut his pay toward his outside option and pocket
  the firm-specific rent; up-or-out, tenure/seniority, and sticky wages therefore double
  as protections of the dependent EMPLOYEE against employer expropriation, not only as
  shirking-monitors. ANCHOR: "the worker who learns firm-specific skills is exposed to
  hold-up from the *other* direction" + "tenure and seniority guarantee a dependent
  employee that his firm-specific value will not be confiscated". No graded Q&M row tests
  this (it is the UE23 reverse-hold-up core idea, not a Section-B item).
- "Reputation, Contracts, and Hostages Protect ...": UE24/25 (integration; hostage
  exchange / oil-company swaps; exclusive/long-term contracts; reserve clause; actor
  5-yr contract bundles winners w/ failures = overpaid early/underpaid late;
  reputation = belief about future behavior; brand reduces prepurchase info/search cost;
  brand-as-self-enforcing-hostage; ADVERTISING reduces buyers' SEARCH costs [ADDED Stage-2
  2026-06-15, Reviewer-B B-3; UE25 §"ADVERTISING—REDUCING SEARCH COSTS"]: advertising is a
  sibling mechanism to brand names, valuable to BOTH sides because it lowers the customer's
  cost of finding sellers/offerings — the tire-ad example, worthless most days and valuable
  on the rare buying day. ANCHOR: "an advertisement lowers the customer's cost of finding a
  seller, so it serves the shopper as much as the seller". No graded Q&M row tests it (UE25
  core idea, not a Section-B item). franchising / franchisee posts hostage; reputation
  bites only where competition/exit exists [USPS/DMV survive bad rep]; ethics & shame
  self-enforce; professional codes + licensing tension).
- "The Corporation Pools Vast Wealth ...": UE27 + BE7 (three legal forms; limited
  liability = lose only stake [one-person corp still differs from proprietorship];
  Hoover relief-fund banker; transferable shares; can't-sell-a-job vs can-sell-shares;
  continuity beyond owner's death / Islamic-partnership contrast; pooling capital from
  many small savers; "about half" own stock incl. via pensions; Harvard Corp; firms
  exist for org/transaction-cost reasons not merely to pool money for equipment).
- "The Market for Corporate Control Disciplines Managers": UE28 + BE7 (separation of
  ownership/control = beneficial specialization; invest-in-a-friend's-firm; minority
  control normal; manager moral hazard; salable shares -> contestable control; price
  capitalizes long-run prospects; takeovers/tender offers/LBOs; raider recognizes real
  future gains; pay-for-money-losing-subsidiary via optimism + sunk cost; anti-takeover
  legislation = entrenchment; CSR = indirect takeover / charity-better-than-coercion;
  "few corps lose money" rebutted, below-expected earnings = loss to owners [qualitative]).
- "A Shareholder's Claim Rests on a Contract ...": UE28 + BE7 (shareholder = prior
  contract vs stakeholder = unilateral dependence; mgmt can't subordinate shareholders
  w/o breaching contract; contractual stakeholders [pensions, deferred pay, lenders] are
  binding; UK strong shareholder rights vs underrepresentation among largest firms;
  financier-owned CEOs paid highest [residual-claimant incentive]; golden parachute /
  cost-is-not-waste; job-cutting mergers concentrated-costs/dispersed-benefits -> T13).
- "Conflicts Among Owners and Lenders ...": UE28 (stockholders [residual] prefer more
  risk than bondholders [fixed]; Table 28.1 risk-shift transfers $4.50 bondholder->
  stockholder; expected value stated verbally; lenders guard via rates + covenants; S&L
  guarantees -> moral hazard; conflicts among dependent parties are general, not a
  corporate flaw). + EQUITY-VS-DEBT SELECTION PRINCIPLE (UE24 §"OWNING A FIRM OR LENDING
  TO IT," ADDED Stage-2 2026-06-15, Reviewer-B B-2): the PRIOR sorting rule behind the
  risk-shift conflict — the harder a firm's activity is to monitor (research/software/law,
  mental work no lender can supervise), the more it is financed by equity (owners who bear
  the risk) rather than bonds; easily-monitored routine activity (utilities, railroads)
  safely attracts lenders. ANCHOR: "The harder it is to watch what a firm does with the
  funds, the more it is financed by stock rather than by bonds". No graded Q&M row tests it
  (UE24 core idea, not a Section-B item). + CONSUMER-SOVEREIGNTY CAPSTONE (UE28 §"Managers and Consumers,"
  ADDED Stage-2 2026-06-15): consumers are the firm's ultimate controllers; corporate
  control disciplines managers from above, consumer demand disciplines the whole firm
  from below; a firm whose product no one buys dies absent subsidy or a law banning
  competitors; caps the authority-and-responsibility through-line. No Q&M row (Reviewer-B
  core idea, not a Section-B item).
- "What's Next": recap + bridge to T10 (factor markets / VMP / how income is divided).

§3 QUESTIONS & MEDITATIONS COVERAGE (audited against UE 22-28 + BE Part II disc;
UE prints model answers after each Q). Legend: + covered | ~ partial | X exempt (logged).
Each covered/partial row carries a VERBATIM body anchor (a phrase grep -F finds in the body).

UE Ch22 (8 Qs): 1+ 2+ 3+ 4+ 5X 6+ 7X 8X
  1+ FIXED (was 1X silent drop). Risk cannot be outlawed; consequences always borne by
     someone; pooling via insurance; government cushions the weak; negligence vs acts of
     God. ANCHOR: "We cannot outlaw risk." + "let people *pool* their risks through
     *insurance*" + "the careless party" / "\"acts of God\" no one could prevent"
  2+ private vs collective risk-bearing. ANCHOR: "Under private property, the owner bears
     the swings in value directly and can adjust what he holds"
  3+ right to buy/sell reallocates profit & loss. ANCHOR: "buy up the shares, take control,
     and install new managers"
  4+ selective/discretionary risk bearing via choosing holdings + transferability.
     ANCHOR: "selling out of a venture he sours on and into one he believes in"
  5X race-horse hobby-loss (wealth- vs personal-worth maximizing) -> T1 recall / lecture aside.
  6+ FIXED (was borderline-partial). Fixed-fee boat rental: taking the fixed claim shifts
     that day's residual risk onto the renter. ANCHOR: "if instead he rents the boat out
     for a fixed daily fee, he has taken the fixed claim, and now the renters bear that
     day's risk" + "Whoever holds the fixed claim has pushed the residual onto the other side"
  7X open-access vs private lake / overfishing -> T5 (commons).
  8X optimal congestion -> T5.

UE Ch23 (8 Qs): 1+ 2+ 3+ 4+ 5+ 6+ 7+ 8+
  1+ "the boss is boss because he can tell people what to do" evaluated. ANCHOR: "the
     employee, in turn, can \"fire the boss\" by quitting"
  2+ measurement problem in joint teamwork. ANCHOR: "there is no honest way to slice the
     $15 and say \"this part is Jack's doing, that part is Jill's.\""
  3+ employees can't sell jobs but stockholders can sell shares. ANCHOR: "one shareholder
     selling to another changes no one else's rights or duties"
  4+ coaches/conductors never in the game: monitoring. ANCHOR: "The conductor adds nothing
     to the noise and everything to the music"
  5+ Soviet "home ownership" with sale banned. ANCHOR: "Real ownership means exclusive use
     *plus* the right to transfer that use to someone else"
  6+ charter vs public schools without investor-owner. ANCHOR: "a charter must compete for
     students it can lose"
  7+ B-17 crew, which most important. ANCHOR: "ask which one mattered most and the question
     dissolves"
  8+ Yugoslav employee-owned neglect. ANCHOR: "they could never capture the future earnings
     good upkeep would produce"

UE Ch24 (6 Qs): 1+ 2X 3+ 4+ 5+ 6X
  1+ FIXED (was answering UE25 Q3 instead). Now delivers the short-earning-window /
     "cash in while hot" reasoning AND the contrast with long-career professions. ANCHOR:
     "A star's high earnings arrive in a short burst of a few years ... the pressure to
     cash in while still hot is enormous" + "A doctor or engineer earns a good living
     spread evenly across decades ... so the temptation to blow up a contract for a
     one-time gain is far weaker". Capital value kept verbal per soft-PV.
  2X free-riding on retailer presale services (RPM) -> T8b, DELIVERED in the 2026-07-20
     course-review pass.
  3+ reputation = future-reliability indicator; legal monopolies survive bad rep. ANCHOR:
     "a legally protected postal monopoly or a department of motor vehicles is not undone
     by complaints"
  4+ ballpark + adjoining parking lot pricing conflict / integration. ANCHOR: "A ballpark
     and the parking lot beside it are complements"
  5+ interdependent firms at different distribution stages disagree on pricing. ANCHOR:
     "Manufacturers, wholesalers, and retailers along a chain of distribution disagree
     about pricing"
  6X government-established monopolies (patents/utilities/defense) -> T8.

UE Ch25 (5 Qs): 1+ 2+ 3+ 4X 5+
  1+ "brand names are superficial propaganda" rebutted. ANCHOR: "a brand lets a shopper
     predict quality and judge whether a price is fair"
  2+ franchisees paying tribute to HQ? (codependence/hostage). ANCHOR: "The relationship
     is mutual dependence, not tribute paid to a useless headquarters"
  3+ young performer signed 5 yrs becomes star, exploited? ANCHOR: "the rare winner is
     \"overpaid\" at first and \"underpaid\" later"
  4X price stability vs flexibility / sticky prices / queue rationing -> T4a, DELIVERED
     in the 2026-07-20 course-review pass.
  5+ do ethics/Good-Samaritan observations belong in economics? ANCHOR: "ethics and shame
     still restrain people from reneging, which lowers the cost of relying on others"

UE Ch27 (5 Qs): 1+ 2+ 3+ 4+ 5+
  1+ FIXED (was 1~ with mis-cited anchors). The in-scope CORE rebuttal — fewer/larger
     firms give consumers MORE sources of supply, not fewer, because cheap transport and
     communication widen each buyer's reach — is now in the body, with the 1,000-towns
     illustration. ANCHOR: "Fewer, larger firms have meant more sources of supply, not
     fewer, because the reach of every buyer widened" + "cheap, fast transportation and
     communication knock down the walls between towns". The precise firm-size-vs-cost
     arithmetic still forwards to T6/T8 (logged); the central rebuttal is delivered.
  2+ one-person corporation = proprietorship? ANCHOR: "even a one-person corporation
     differs from a proprietorship: the corporation walls off the owner's other wealth"
  3+ continuity: corporation survives owners' death. ANCHOR: "the firm survives the death
     of any owner"
  4+ why corporation dominant for very large wealth pools. ANCHOR: "an efficient machine
     for letting strangers share the risks and rewards of an investment too large for any
     one of them"
  5+ "firms exist because people lack wealth to own equipment" evaluated. ANCHOR: "Pooling
     money for equipment is real ... but it is not why firms exist"

UE Ch28 (8 Qs): 1+ 2+ 3+ 4+ 5+ 6+ 7+ 8+
  1+ invest 40% giving up control in friend's firm? (specialization). ANCHOR: "just as you
     might put money into a capable friend's business without wanting to mind the store"
  2+ dispersed/minority control a disadvantage? ANCHOR: "control by holders of well under
     half the stock is normal, not a scandal"
  3+ FIXED (was partial; only proxy/entrenchment landed). All three sub-answers now in
     the body: (a) stability ordinarily implies ACCEPTABLE performance, not losses; (b)
     a lone small stockholder should not single-handedly oust management (voting exists
     to prevent that); (c) a vote-gathering minority means the MAJORITY controls through
     it (Congress analogy). ANCHOR: "stable management usually goes with performance owners
     find acceptable" + "no single person's will overrides everyone else's" + "a majority
     ruling through the group it has chosen to vote for it, the way Congress is a few
     hundred people exercising authority delegated by hundreds of millions". The author's
     prior self-waiver of the Congress analogy is withdrawn (§10 forbids self-waivers).
  4+ "very few corporations lose money" agree? ANCHOR: "even a firm earning a positive
     profit below what investors expected has imposed a loss on its owners, because the
     value of their shares falls" (magnitudes qualitative).
  5+ nonprofit/regulated vs for-profit; lethargy AND discrimination. ANCHOR (lethargy):
     "no one holds a tradable residual claim, so no one captures the gains from running
     the place better". ANCHOR (discrimination, FIXED — was missing): "indulge his own
     tastes in hiring, screening applicants by race or religion ... because the profit he
     sacrifices ... is not coming out of his pocket" + "strip out the residual claim and
     you should expect more discrimination, not less".
  6+ why pay for a money-losing subsidiary? (optimism + sunk cost). ANCHOR: "may treat
     prior overspending as a *sunk cost*"
  7+ S&L deposit guarantees: full protection or moral hazard? ANCHOR: "when the government
     guaranteed depositors against loss, they stopped caring how recklessly their
     institutions invested"
  8+ job-cutting mergers wasteful? ANCHOR: "a cost is not the same as a waste" +
     "concentrated costs against dispersed benefits"

BE Part II discussion (mapped via _discussion-questions.md; in-scope rows for BE 7):
  PII-Q1+ why pay millions in severance to a failed exec? ANCHOR: "keeping a failing
     chief executive can cost the company far more, billions in bad decisions, than the
     severance does"
  PII-Q7+ what facilitates/impedes pooling millions of people's money for a huge project?
     ANCHOR: "spread that cost across thousands or millions of small savers, each shielded
     by limited liability" + the Hoover-banker paragraph.
  (BE Part II Q14 apple-juice/monopoly -> T8, exempt. BE Part IV Q7 bus-company/managers-
   diverting-funds is BE14-anchored not BE7 -> forward-by-design; the residual-claim/
   stock-price-reaction principle IS delivered via UE28, so a student could answer it.)

DELIBERATE OMISSIONS / SCOPE (the brief's surgical cuts + destinations)
- UE22 "Saga of Codlandia" VMP derivation (Table 22.2, marginal-product schedule, social
  marginal product, Episodes 1-3/5, wage=MP) -> T10. Ch22 used ONLY for teamwork/non-
  separability/moral-hazard/owner + (lightly) Episode-4 dependent-investment, which is
  delivered through the UE24 hold-up section.
- UE22 commons Episodes 6-7 (nationalization, tragedy of the commons, congestion) + Q7,
  Q8 -> T5. UE22 "National Development" + Episode 8 (profit dissipation) -> T6/T7.
- UE24 RPM/vertical-restraint tail (max retail price, RPM/free-riding, Coors mechanics,
  exclusive territories) -> T8b and DELIVERED 2026-07-20; natural-monopoly/public-utility
  sections + Q6 were already delivered in T8b. The one-line RPM forward hook remains here.
- UE25 sticky/predictable-price, queue-rationing, preferred-customers, blind-blocks,
  De Beers, anti-gouging + Q4 -> T4a and DELIVERED 2026-07-20. Kept here only brand/goodwill-hostage/franchising/
  reputation/advertising-as-search-cost/ethics & shame/professional-codes.
- UE27 corporate-tax-incidence sections -> T7b and DELIVERED 2026-07-20. Size-economics ("large vs small firms,"
  "why very large firms") -> T6/T8 (UE27 Q1 core delivered, detail logged). Financial-
  statements APPENDIX incl. Tables 27.1 & 27.2 -> DROPPED entirely per brief.
- BE7 "Monopolies and Cartels" half (apple-juice monopoly, Indian licensing, railroad/
  steel cartels, antitrust) + BE Part II Q14 -> T8.
- UE22 Q5 (race-horse hobby loss) -> T1 maximizing recall / optional lecture example.

INTEGRITY / NUMBERS
- No verbatim UE/BE prose; all examples rewritten in own words. No on-page quotations in
  this post (the Adam-Smith-doubted-survival point is paraphrased, not quoted).
- The two recreated tables use UE's own illustrative HYPOTHETICAL numbers, rebuilt as
  original Markdown, never cropped:
    * Jack&Jill table: $5 / $7 / $12 / $15; MPs $10 + $8 = $18 (matches UE Table 22.1,
      printed p.346, verified against ch-22 source).
    * Risk-shift table: Stockholders $1.00 / 0 / $11.00 / $5.50 / +$4.50; Lender $9.00 /
      0 / $9.00 / $4.50 / -$4.50; firm $10 = $1 equity + $9 debt; riskier venture .5 chance
      of $20 or $0 (matches UE Table 28.1, printed p.441, verified against ch-28 source).
- "about half the American population" own stock (BE7) kept qualitative/illustrative.
  UK "largest firms" comparison kept qualitative (no firm counts asserted as data).
  "very few corporations lose money" rebuttal kept qualitative (no % asserted). Capital
  value of short careers (UE24 Q1) and all PV/expected-value references stated VERBALLY.
- SOFT PV-PREREQ (brief): UE27/28 + Table 28.1 use present/expected value before T11/T12.
  Stated verbally throughout ("lower expected future profits" idiom; "worth more than its
  expected future profits justify"; "expected value, meaning a payoff weighted by how
  likely it is"); one-line forward pointer to the later valuation machinery is present in
  the corporate-control and risk-shift sections.

FIGURES / TABLES (§4 mandate + §3.5 Ledger B): UE 22-28 body markers =
Table 22.1 (recreated, team section), Table 22.2 (-> T10, out-of-scope by brief),
Tables 27.1/27.2 (Ch27 financial-statements APPENDIX -> DROPPED), Table 28.1 (recreated,
risk-shift section). Both in-body in-scope tables are recreated as original Markdown this
pass. NO DIAGRAMS owed in this topic (no [Figure] markers in any T9 anchor chapter; both
in-scope visuals are data tables). Optional future figure-pass candidate (NOT required by
§4): a simple "residual claimant vs fixed claimant" or "specific vs general resource"
schematic.

STYLE CHECK (verbal-marginal / no forbidden apparatus): PASS. No indifference curves,
budget lines, utility maximization, measured deadweight-loss triangles, or game theory.
The one numeric expected-value step (Table 28.1) is framed verbally as probability-
weighted value, the soft-PV the brief permits. Welfare/efficiency reasoning verbal.

WORD COUNT / §4 CAP NOTE (WITHIN cap; fresh pinned count, STAGE-2 LIGHT TRIM 2026-06-15):
student-facing body runs 5,800 words by the §4 pinned count (strip front-matter + the <!-- -->
notes block + table rows ^|). WITHIN the §4 6,000-word hard cap (~200 words of headroom) but ~800
above the ~5,000 soft target. The 2026-06-15 second pass left the body at 5,988 (only 12 words of
margin); a subsequent LIGHT, LOSSLESS density trim (this pass) removed ~188 words of prose density
— redundant restatement tails, wordy connectives/appositives, two double-examples (gas-fired plant
in the hold-up list; a decorative tail), and two cross-reference asides — to open healthy headroom,
landing at 5,800. The three Reviewer-B adds (equity-vs-debt selection, advertising-as-search-cost,
reverse-hold-up) had initially pushed the body to 6,255 (OVER cap); the second-pass trim brought it
to 5,988 and this light trim to 5,800. NO in-scope Q&M strand, table, or forward hook was cut in
either pass; the LIGHT trim candidates (UE25 ethics/shame Q5; monitoring-devices catalog) were
tightened, not gutted. The standing OPTIONAL trim path (move a LIGHT strand to live lecture)
remains available toward the ~5,000 soft target, but was NOT taken here to stay coverage-neutral —
this is a 6-anchor superset in which nearly every remaining sentence carries a distinct Q&M answer
or core idea, so a deeper cut would cross from density-trim into content-cut. The
predecessor body was 5,860 by the same pinned method (earlier prose-only counts had cited
~5,985–6,170). It grew from ~4,800 to ~5,860 in the 2026-06-07
revision because
fixing the six in-scope §10 defects REQUIRED adding the missing reasoning (risk/insurance/
negligence; short-career renegotiation; the more-sources-of-supply rebuttal; UE28 Q3 (a)/
(b)/(c); discrimination; fixed-claim risk shift) — §3 Q&M coverage (binding) outranks the
§4 target, and Reviewer A explicitly predicted that resolving the not-answerable gaps would
add words. This is a 6-anchor superset topic (UE 22/23/24/25/27/28 + BE 7); it was already
triaged hard via six surgical scope cuts (Codlandia VMP -> T10; commons -> T5; RPM/natural-
monopoly -> T8; sticky-price/queue -> T4; corporate-tax -> T4; financial-statements
appendix dropped; BE monopoly half -> T8) moving roughly half the source out. The remaining
prose is the irreducible in-scope core. Under the 6,000 hard cap the post is within budget, so
no split is required; an OPTIONAL trim toward the ~5,000 soft target could move one in-scope-but-
light strand to live lecture (candidates flagged LIGHT: UE25 ethics/shame/professional-codes
[Q5]; the monitoring-devices catalog [tips/up-or-out, no graded Q&M anchor]); a split across two
sessions remains available for a 6-anchor topic. Do NOT silently gut Q&M coverage to chase the
soft target. This pass PRIORITIZED Q&M sufficiency over the word target per the brief; with the
cap raised to 6,000 the §4 tension is resolved (within cap, but near it — re-confirm the count).

VOICE CHECK (§6): AI-tell audit RUN on the body (H1 through "What's Next"); RE-RUN
Stage-2 2026-06-15 SECOND PASS after the three Reviewer-B adds + trim (the adds introduced
no em-dashes; a draft "quietly valuable" in the advertising add was reworded out to keep
"quiet*" at 1). ACTUAL: em-dashes 0 (budget <=~12; asides are
commas/parentheses/new sentences); "quiet*" 1 (<=2, "quietly moved $4.50" in the
risk-shift section); stress-
italics reserved for technical term first-use (shirking, moral hazard, owner, residual
claimant, specific/dependent investment, hold-up, integration, exchange of hostages,
reputation, brand name, franchising, proprietorship, partnership, corporation, limited
liability, transferable shares, separation of ownership/control, contestable, market for
corporate control, sunk cost, shareholder, stakeholder, expected value, insurance,
negligence, pool) plus the genuine contrasts (firms vs *choices*; *more* risk; exclusive
use *plus* transfer; "cost is not the same as a waste"). Three decorative stress-italics
introduced/surviving the revision were de-italicized in the thinning pass (*up*, *pay*,
*highest*). Headers carry no em-dashes. Section openers varied. PASS.

§10 ADVERSARIAL-REVIEW RECORD
- Reviewer A (Questions-&-Meditations coverage, authoritative §3 audit): RAN. 42 items
  audited (all 40 UE Q&M across Ch 22/23/24/25/27/28 + 2 in-scope BE Part II discussion
  questions mapped to BE 7). Result: DO NOT BLESS on the reviewed draft — FIVE in-scope
  defects (3 not-answerable, 2 partial) + 1 minor borderline-partial; the §9 grep gate
  proves anchor strings exist but not that they supply the model answer, which is A's job.
  The remaining 33 in-scope items answerable; the 6 exemptions (UE22 Q5/Q7/Q8, UE24 Q2/Q6,
  UE25 Q4) correctly logged with destinations. Separately noted the ~5.9k-word body; it is
  within the §4 6,000-word hard cap after the 2026-06-14 raise, near it (a §4/instructor
  matter, not a Q&M defect; resolving the gaps adds words).
- Reviewer B (core-ideas coverage, blinded; §7 stripped before hand-off): RAN. Built 27
  load-bearing ideas from the source first; all 27 DEVELOPED with citable passages.
  Scope cuts judged consistent with the brief, no in-scope core-ideas gaps. TWO defects,
  both in forward hooks: commons hook named the concept but did not state its core claim
  (scored missing/effectively dropped); RPM hook named+previewed the concept but omitted
  the free-riding-on-retailer-services rationale (scored present-but-partial). The other
  three forward hooks (expected/present value, VMP/labor demand, concentrated-costs vs
  dispersed-benefits) each name the concept AND state its claim.

- AUTHOR REVISION PASS (2026-06-07, ONE pass, in response to A + B). Every in-scope
  defect fixed in the body; no author self-waivers (per §10):
  * A-1 / UE22 Q1 (not-answerable, silent 1X drop) -> FIXED. Added a risk passage to the
    residual-claimant section: risk can't be outlawed; consequences always borne by
    someone; pooling via insurance; government cushions the weak; negligence vs acts of God.
  * A-2 / UE24 Q1 (not-answerable) -> FIXED. Added the short-earning-window "cash in while
    hot" reasoning plus the explicit contrast with decades-long doctor/lawyer/engineer
    careers, in the actor/contract paragraph.
  * A-3 / UE27 Q1 (not-answerable; ledger over-claimed "partial," anchors belonged to Q5)
    -> FIXED. Added the central rebuttal: fewer/larger firms = MORE sources of supply, not
    fewer, because cheap transport/communication widen each buyer's reach (1,000-towns
    illustration). The precise firm-size-vs-cost arithmetic still forwards to T6/T8 (logged).
  * A-4 / UE28 Q3 (partial; author had self-waived the Congress analogy) -> FIXED. Added
    (a) stability => acceptable performance not losses; (b) one small holder shouldn't
    single-handedly oust mgmt (that's what voting prevents); (c) vote-gathering minority =
    majority controlling through it (Congress analogy). Self-waiver withdrawn.
  * A-5 / UE28 Q5 (partial) -> FIXED. Added the discrimination prediction: firms shielded
    from the profit constraint show MORE race/religion hiring discrimination because the
    manager bears little cost for indulging personal criteria.
  * A-6 / UE22 Q6 (minor borderline-partial) -> FIXED. Worked the specific reversal: taking
    the fixed claim (fixed-fee boat rental) pushes that period's residual risk onto the renter.
  * B-1 / commons forward hook (effectively dropped) -> FIXED. Added the core claim: a
    resource no one owns gets overused/degraded because each user reaps the gain from
    taking more while the cost falls on everyone ("tragedy of the commons," T5).
  * B-2 / RPM forward hook (partial) -> FIXED. Added the free-riding rationale: RPM stops a
    bare-bones discounter from free-riding on full-service retailers' presale services.
- DISAGREEMENT / WAIVER TRAIL: none unresolved. A's UE27 Q1 "not-answerable vs the ledger's
  partial" dispute resolved in A's favor (rebuttal added, not waived). No A/B disagreement.
  No instructor waiver invoked; the author's two prior self-waivers (UE28 Q3 Congress
  analogy; UE22 Q1 "1X exempt") are withdrawn and the content delivered instead. All fixes
  landed in ONE revision pass; NOT re-run through §10 (cap = 2 rounds; a confirmation
  re-review of the body is the remaining step before sign-off).
- WORD-COUNT NOTE (no longer a blocking escalation): the body is ~5,860 by the §4 pinned count
  (the §7 variously cites ~5,985/~6,170 prose-only after the six in-scope additions; was ~4,800) —
  WITHIN the 6,000 hard cap after the 2026-06-14 raise, but near it; confirm. See WORD COUNT / §4 CAP NOTE.
- Forward hooks (verified present, each names concept + states core claim): expected/present
  value -> T11/T12; vertical restraints/RPM (+free-riding rationale) -> T8; tragedy of the
  commons (+overuse/degradation core claim) -> T5; VMP/labor demand -> T10; concentrated-
  costs/dispersed-benefits -> T13.

§10 STAGE-2 SECOND-PASS RECORD (2026-06-15, brief-driven Reviewer-B targeted revision)
- Reviewer A (Q&M coverage): brief supplied Reviewer A in-scope gaps = [] (none). The full
  Q&M set carried forward unchanged; N = 42 Section-B items remain the audited universe (40
  UE Q&M Ch 22/23/24/25/27/28 + 2 in-scope BE Part II), all still answerable from the body —
  no Q&M row was added, reclassified, or regressed this pass, and the §9 grep gate re-passed
  (58/58 anchors verbatim, 0 misses). Result: NO new A defect; A clean.
- Reviewer B (core-ideas): brief supplied FOUR findings (1 "missing", 3 "thin"). Adjudication:
  * B-2 (UE24 owning-vs-lending: monitoring difficulty -> equity-vs-debt choice) — GENUINE,
    in-scope (no scope cut covers this section). FIXED: added the selection principle to the
    risk-shift section. ANCHOR: "The harder it is to watch what a firm does with the funds,
    the more it is financed by stock rather than by bonds".
  * B-3 (UE25 advertising reduces buyers' search costs) — GENUINE, in-scope (coverage map
    already PROMISED "advertising-as-search-cost"; the predecessor under-delivered it). FIXED:
    added advertising's own search-cost role as a sibling to brand names. ANCHOR: "an
    advertisement lowers the customer's cost of finding a seller, so it serves the shopper as
    much as the seller".
  * B-4 (UE23 reverse hold-up: firm-specific EMPLOYEE investment protected by tenure/seniority)
    — GENUINE, in-scope (UE23 §"Restraining Employer Opportunism" is in scope; the predecessor
    delivered only the worker-side and the monitoring-side, not the loop). FIXED: added the
    reverse-hold-up loop in the hold-up section. ANCHOR: "the worker who learns firm-specific
    skills is exposed to hold-up from the *other* direction" + "tenure and seniority guarantee
    a dependent employee that his firm-specific value will not be confiscated".
  * B-1 (UE24 natural-monopoly / public-utility regulation as protection of dependent
    customers) — DECLINED as OUT OF SCOPE. Reviewer B's observation is factually right (the
    only natural-monopoly mention is the passing postal monopoly), but the natural-monopoly /
    public-utility sections of UE24 are an INSTRUCTOR-LOCKED scope cut routed to T8 (regression-
    checklist §3 + DELIBERATE OMISSIONS). Per the brief, an out-of-scope finding is recorded,
    not acted on, and an instructor lock is not self-waived. Importing it would also breach the
    6,000 cap. ESCALATION (parked for instructor, not a self-waiver): the dependent-CUSTOMER
    rationale for utility price regulation IS a clean application of this post's hold-up/
    dependent-investment frame, so the instructor may wish to plant a one-line forward hook here
    (-> T8) on the next pass; that is a scope-boundary judgment for the instructor, deliberately
    left to them rather than decided here.
- DISAGREEMENT / WAIVER TRAIL (Stage-2 second pass): one declined finding (B-1), recorded above
  with its instructor lock and an escalation note; NOT self-waived. No A/B disagreement (A
  supplied no gaps). No instructor waiver invoked. The three acted findings are Reviewer-B core
  ideas with NO graded Section-B row, so they are logged as coverage-map additions, not new Q&M
  "+/~" rows. This is the ONE revision pass the brief allows; not re-run through §10 (a
  confirmation re-review of the three added beats + the trimmed body is the remaining step before
  sign-off).
- REGRESSION VERDICT (Stage-2 vs committed predecessor post.md + regression-checklist.md): PASS.
  No §10-closed gap, verified table number, instructor-tuned scope call, or forward-hook payoff
  regressed (58/58 anchors verbatim; both tables untouched; six locked scope cuts + soft-PV
  accommodation preserved; B-1's locked cut respected). The revision is a strict IMPROVEMENT: it
  closes the three brief-flagged in-scope core-idea gaps (B-2/B-3/B-4) the predecessor lacked,
  while staying within the 6,000 cap and the §6 voice budgets.
=================================================================== -->
