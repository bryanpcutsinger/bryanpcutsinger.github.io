---
title: "Factor Markets and Labor, Part B: Coalitions and Constraints"
topic: "T10 — Factor Markets and Labor (Part B)"
course: "Principles of Microeconomics (FAU)"
sessions: ["Fall 2026 — content session 22 (Thu 11/5)"]
ue_anchors: ["UE 20 (analytic monopsony mechanism)", "UE 40", "UE 41", "UE 39 (gender-earnings sections)"]
be_anchors: []
ep_anchors: ["E&P 15 — closed monopsony (interns; NCAA) and featherbedding", "E&P 13 — rent dissipation via qualifying", "E&P 17 pp. 369–380 — job search, disguised unemployment, and layoffs versus wage cuts", "E&P Fig 14-7 — wage floor and ceiling"]
univecon_anchors: ["University Economics (1994) ch. 21 pp. 416–417 — specific versus general on-the-job training and who pays"]
word_target: "2500-3900"
word_budget: 3222
  # word_budget 3900 -> 3983 (+83): For Further Reading section added 2026-07-22
  # word_budget 3983 -> 3900 (-83): BE->A&A redraft 2026-07-23 — BE evidence (medallion series, apartheid, chemists/foreign-owned, youth-unemployment, survivorship survey) moved to extensions.md; licensing re-grounded on E&P 13 tobacco-acre / $50k NY taxi. Measured body 3849, headroom 51.
  # word_budget 3900 -> 3222 (-678): 2026-08-10 UE-E&P source audit; measured body 3171, prior 51-word headroom preserved
status: approved        # E&P integration M2 sign-off 2026-07-19 (prior: Stage-2 2026-06-15)
audience: students
note: "Self-contained — assumes no access to the textbooks. Part B of the two-part T10 (unions, the minimum wage, discrimination, and licensing); Part A (topics/t10a-factor-demand-and-earnings) builds the VMP engine and covers earnings. Source-of-truth for the deck; section headers are claims that map to slide titles."
# brief: ../t10-factor-markets-labor/brief.md
---

# Factor Markets and Labor, Part B: Coalitions and Constraints

In Part A we built one tool and used it on the demand side of factor markets: the *value of marginal product* (VMP), the value of what one more worker adds. In a competitive market a worker tends to be paid that value, because paying less lets a rival bid him away and paying more loses the firm money. **Hire each worker up to the point where the value he adds equals the wage you must pay him.** Diminishing returns made the demand for labor slope down; substitution and the lump-of-labor fallacy showed that costly inputs get economized on without destroying the total pool of work; and earnings gaps traced to ability and the cost of acquiring skills.

Now we turn that same engine on the most heated arguments in all of economics. What happens when a group of workers, or a licensed profession, organizes to keep its own pay high by limiting who else may compete? Does a minimum wage help the people it names? Does a competitive market make prejudice cheaper to indulge, or more expensive? Each answer follows from the VMP rule in Part A, plus one new ingredient: political economy, the study of why a policy that hurts many but helps an organized few gets passed and stays passed. A single lens runs through the whole part. Call it *insiders versus outsiders*.

<aside class="econ-callout econ-objectives">
<p class="econ-callout__label">Learning objectives</p>
<p>By the end of this post you should be able to:</p>
<ul>
<li>Distinguish unions' representation and contract-enforcement functions from cases in which unions or occupational licenses restrict entry, and interpret the price of a transferable license as the capitalized value of a protected rent.</li>
<li>Derive the analytic monopsony rule: when hiring one more worker requires raising incumbent wages too, marginal wage cost exceeds the wage and the buyer hires fewer workers.</li>
<li>Use competitive and monopsony models to identify when a wage floor reduces or increases employment, and explain the conditions under which an applicant surplus can make discrimination cheaper.</li>
</ul>
</aside>

## Unions Combine Representation With Legally Structured Bargaining Power

A labor union is a coalition that represents employees in negotiations and contract enforcement. In the course's *closed-monopoly* model, it can also become an arrangement that eliminates competition among workers over the wage at which they sell their labor. These are distinct functions. Representation can reduce the cost of bargaining, monitoring promises, and resolving grievances; entry restrictions can raise insiders' wages by limiting rival labor. In either case competition does not vanish. It can reappear through seniority, apprenticeship queues, organizing, substitution, or firms' product-market choices.

Be precise about the institution. A *closed* monopoly is protected by a legal barrier that keeps rivals out; an *open* one merely happens to be large and can be challenged by entry. U.S. labor law does not make every union a literal monopoly over an occupation. It does give a majority-selected union exclusive authority to bargain over wages, hours, and working conditions for everyone in its bargaining unit, and it requires the employer to bargain with that representative ([National Labor Relations Act §9](https://www.nlrb.gov/guidance/key-reference-materials/national-labor-relations-act)). Craft admission rules, licensing, or a collectively enforced agreement can close additional margins. The analytical question is always: which alternatives are legally or contractually excluded?

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Closed Monopoly</dt><dd>A seller protected by a legal barrier that keeps rivals out.</dd></div>
<div><dt>Open Monopoly</dt><dd>A large seller that anyone may still challenge by entering.</dd></div>
</dl>
</aside>

One route to a union wage premium is restricting the labor that may compete for covered jobs. A craft union can control apprenticeships or admission; an industry agreement can standardize terms across participating firms. If fewer workers can offer the covered service, insiders may gain while excluded or displaced workers search elsewhere. This is why a single lens runs through the whole part: *insiders versus outsiders*. The mechanism is conditional, not a complete description of every union. Productivity, bargaining services, working conditions, worker selection, and product-market competition also affect observed union and nonunion pay.

The lens generates testable questions without assigning motives in advance. Would an immigration restriction, apprenticeship limit, tariff, or industry-wide wage rule reduce the alternatives available to outsiders? Would it raise rivals' costs as well as members' pay? Who gains a seat in the negotiation, and who does not? Strikes require an additional legal distinction. Employers may hire temporary replacements, and economic strikers may under some conditions be replaced permanently; workers striking over an unfair labor practice have stronger reinstatement rights ([NLRB guide](https://www.nlrb.gov/strikes)). The law structures bargaining power, but it does not simply bar all replacements.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>Organized labor has often pushed to restrict immigration while employers pushed the other way. Using the insiders-versus-outsiders lens, who are the insiders here, and which outsiders does the restriction keep from competing for the jobs?</p>
</aside>

A union can also police an employer's promises, aggregate information, and resolve grievances that would be costly for workers to pursue separately. That role can make the employment relationship more valuable to both sides. A serious institutional comparison therefore asks what unions produce through representation as well as what restrictions redistribute toward insiders.

Two points round this out. First, when a privileged position can be transferred, its advantage is capitalized into the price of getting in, so later buyers pay up front and may earn only an ordinary return on what they paid. A nontransferable union job need not work this way: competition may instead appear in queues, training, connections, or organizing costs. For a transferable license, however, the verbal result is exact: **the gain is already priced into the value of the position today.** Present value will make it precise, and that is one of the threads the next topic picks up.

Second, buyer power comes in more than one form. A draft or an employer agreement can suppress competition by legal or collective restraint. *Analytic monopsony* is narrower: a buyer faces an upward-sloping labor supply and recognizes that expanding employment raises its wage bill. A volunteer force makes labor cost visible in the budget and permits workers to sort by alternatives; a draft compels service and is better understood as a tax in kind than as proof that every dominant buyer follows the same model. Where many employers compete and workers can move cheaply, an employer that persistently underpays productive workers risks losing them to rivals. Search frictions, moving costs, noncompete terms, and differentiated jobs can weaken that discipline.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Monopsony</dt><dd>A single dominant buyer of a good or of labor, the mirror image of a monopoly seller.</dd></div>
</dl>
</aside>

The buyer-side mechanism mirrors the price-searcher seller. Suppose a monopsonist faces an upward-sloping labor supply, so attracting one more worker requires a higher wage. If that higher wage must also be paid to the workers already employed, the cost of the next hire exceeds that worker's wage: the *marginal wage cost* includes both the new worker's pay and the raises for incumbents. The monopsonist hires only until the next worker's value of marginal product equals this higher marginal wage cost, not merely the posted wage. Compared with competing employers, it therefore employs fewer workers and pays a lower wage. The result needs both ingredients, market power on the buying side and an upward-sloping supply; a lone employer facing perfectly mobile workers cannot create it.

College sports supplies a documented buyer-coalition example. NCAA member schools agreed to and enforced limits on athlete compensation. In *NCAA v. Alston*, the Supreme Court described those horizontal restraints as depressing compensation for at least some athletes below the competitive level, while ruling specifically on education-related benefits ([2021 opinion](https://www.supremecourt.gov/opinions/20pdf/20-512_new_7mi8.pdf)). After later litigation and settlement, NCAA rules permitted participating Division I schools to provide direct financial benefits under a year-one cap of about $20.5 million ([NCAA, June 2025](https://www.ncaa.org/media-center-a-letter-from-ncaa-president-charlie-baker/)). This is a coalition mechanism, not the upward-sloping-supply monopsony model. It shows how common rules and enforcement can restrain buyers' competition, and how rivalry shifts into scholarships, facilities, recruiting, and other margins when cash pay is constrained.

Training costs also depend on who can capture the return. *Specific training* helps only the current employer, so the worker cannot sell it elsewhere; the employer pays for it, since he captures the gain and wants to keep the worker. *General training* is portable, so the worker pays, often by taking a lower wage while learning and a higher market wage afterward. Specific training therefore predicts lower turnover than general training, since either side would lose a relationship-specific investment if the match ended.

Union membership also differs sharply by sector. In 2025, 10.0 percent of U.S. wage and salary workers were union members; the rates were 32.9 percent in the public sector and 5.9 percent in the private sector ([BLS](https://www.bls.gov/news.release/union2.nr0.htm)). Product-market competition and financing rules may contribute to that gap, but the comparison alone does not identify the cause. Public-sector bargaining law, occupational mix, employer size, history, and political institutions differ too.

## A Wage Floor Has Different Effects in Competitive and Monopsony Models

Now apply the hiring rule to the most debated labor policy of all. A minimum wage is a legal floor on the wage an employer may pay.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Minimum Wage</dt><dd>A legal floor on the wage an employer may pay.</dd></div>
</dl>
</aside>

In the competitive model from Part A, the owner hires a worker only if the value he adds is at least the wage. Set a floor above a worker's VMP and that job is no longer profitable at the mandated wage. Employers may reduce employment or hours, substitute equipment or higher-productivity workers, raise prices, accept lower profit, or improve organization. Workers who remain can earn more; some covered jobs can disappear. The result is strongest when the floor is far above the wage that would otherwise clear that particular market.

The monopsony model supplies an important exception. A dominant buyer may initially pay below the competitive wage and hire too few workers because marginal wage cost exceeds the posted wage. A moderate floor can prevent the buyer from holding down the wage and make additional hiring profitable; a sufficiently high floor eventually reduces employment. Theory therefore identifies mechanisms and thresholds, not the magnitude in a particular place. Empirical studies disagree over employment effects at historically observed increases, while larger increases create more uncertainty; CBO's 2021 analysis, for example, projected both higher pay and poverty reduction for many workers and reduced employment for others ([CBO](https://www.cbo.gov/publication/56975)).

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t10b-labor-coalitions-and-constraints/figures/t10b-ep14-7-wage-bounds-interactive.html" title="Interactive wage floor and ceiling: drag the wage line above the market wage to create a surplus of labor (unemployment), or below it to create a shortage. Employment is always the short side." loading="lazy" style="width:100%; max-width:480px; aspect-ratio:5/6; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t10b-labor-coalitions-and-constraints/figures/t10b-ep14-7-wage-bounds-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t10b-labor-coalitions-and-constraints/figures/t10b-ep14-7-wage-bounds.svg">view the static version</a>.</p></iframe>
<figcaption><strong>In the competitive model, employment is the short side.</strong> Fix the wage above the market rate and more people want jobs than employers will hire: a surplus of labor. Fix it below and employers want more hours than workers offer: a shortage. This diagram holds productivity and market structure fixed; the monopsony case in the text has a different starting point.</figcaption>
</figure>


In the competitive model, the most exposed jobs are those whose output value lies closest to the new floor, often entry-level positions. That does not establish that every affected worker loses: retained workers receive a raise, turnover may fall, and firms adjust on several margins. A sound policy assessment asks how binding the floor is, which model fits the labor market, and how wages, hours, employment, prices, training, and firm entry all respond.

A floor can also affect firms unevenly. If one producer is capital-intensive and a rival relies heavily on low-wage labor, the same wage rule raises the rival's costs more. That *raising-rivals'-costs* mechanism is a reason to inspect who supports a policy, but support does not prove the motive: an advocate may care about worker income, competition, fairness, or several goals at once. Political-economy analysis maps interests and alternatives; it does not read minds.

Coverage rules create additional margins. In a stylized taxi market, a wage floor applying to employee drivers but not owner-operators predicts a shift toward owner-driven cabs, other things equal. Whether that shift occurs in practice depends on contracting rules, vehicle ownership, enforcement, and demand. The example illustrates substitution outside a covered employment relation; it is not evidence that every displaced worker finds equally good self-employment.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>In the stylized taxi example, what assumptions make a wage floor shift work from employee drivers toward owner-operators, and which real-world rules could weaken that prediction?</p>
</aside>

## Applicant Surpluses Can Reduce the Private Cost of Discrimination

Now hold productivity constant and isolate one more mechanism. If a binding floor creates many qualified applicants for few jobs, an employer can reject one applicant and hire another at the same wage. The immediate output cost of indulging prejudice may therefore be smaller than when workers are scarce. This does not imply that accepting discriminatory pay is a worker's only competitive tool, nor does it establish that wage floors increase discrimination in every setting. Search frictions, recruitment, reputation, enforcement, and antidiscrimination law all matter; U.S. law prohibits covered employers from discriminating in pay and employment on protected grounds ([EEOC](https://www.eeoc.gov/equal-employment-opportunity-laws)).

The general mechanism remains important: **in a competitive market, discrimination can be costly to the discriminator.** An employer who refuses productive workers from a group he dislikes forgoes the value they would add, and a rival who hires them can gain an edge. But competition is a pressure, not a guarantee. Market power, customer or coworker prejudice, weak information, search costs, networks, and institutional discrimination can sustain gaps. The mechanism tells us what force pushes against prejudice and what conditions weaken that force.

Observed average pay gaps do not by themselves identify prejudice, productivity, job characteristics, bargaining, care responsibilities, occupational sorting, or market power. Conversely, controlling for measured characteristics does not prove that the remainder has a single cause. For this course, the assessed claim is narrower: competitive pressure raises the private cost of taste-based discrimination, while institutions that insulate choices from that cost can weaken the pressure.

In the competitive diagram, a floor creates an applicant surplus and a ceiling creates a shortage. Holding enforcement and all other margins fixed, the surplus gives an employer more same-wage alternatives, while a shortage makes rejecting a productive worker more costly. That conditional prediction is worth testing. It should not be mistaken for an empirical verdict on any particular wage law or for an argument against enforcing equal-employment rights.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A wage floor leaves a line of equally productive applicants; a wage ceiling leaves jobs unfilled. Holding law and reputation fixed, in which case is rejecting one applicant over prejudice less costly to the employer, and why?</p>
</aside>

## Occupational Licensing Can Protect Consumers and Restrict Entry

The union entry mechanism reappears in occupational licensing. A license is a legal requirement to obtain permission before practicing a trade. Licensing can reduce consumers' information costs and protect health or safety when competence is hard to observe. It can also raise entry costs, thin competition, and support incumbent incomes, especially when requirements exceed what the risk justifies. The FTC's review reaches a deliberately conditional conclusion: licensing sometimes protects consumers, often raises prices, and must be assessed occupation by occupation rather than presumed beneficial or harmful ([FTC](https://www.ftc.gov/reports/costs-benefits-occupational-regulation)).

The mechanism is the labor-market version of the producer protections studied
under market power. An import quota keeps foreign sellers out; a license keeps
unqualified or unauthorized workers out. Both can close entry and create rents,
but a licensing rule may also produce information or safety benefits. The right
comparison is the incremental benefit against the entry, price, enforcement, and
choice costs, including less restrictive alternatives such as certification.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Occupational Licensing</dt><dd>A legal requirement to obtain permission before practicing a trade.</dd></div>
</dl>
</aside>

The sharpest illustration is a transferable license. Picture a scheme that licenses the right to farm a certain crop on a designated acre. If the restriction creates an annual rent, the licensed land jumps in value when the policy is announced. The initial owner receives the windfall; a later buyer pays for the expected income stream in the purchase price. Thus the rent is capitalized into the entry price, and the buyer earns only an ordinary return if expectations are fulfilled. The size of a taxi, liquor, or production license's market price can likewise reveal the expected value of restricted entry, though it can also reflect scarcity, location, and other legal privileges. Concentrated gains and dispersed costs can help a restriction persist, but consumer benefits and political beliefs may matter too.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>When a government first announces that only licensed acres may grow a crop, the price of licensed land jumps at once. What does that jump measure, and who captures it, the owner at the moment of the announcement or a farmer who buys in years later?</p>
</aside>

When entry depends on qualification rather than purchase, prospective rents can induce people to spend more on schooling, exams, waiting, lobbying, or repeated applications. Some of that expenditure builds productive skill; some may be competition merely to clear the gate. Medical training shows why the distinction cannot be inferred from cost alone. The median education debt among the medical-school class of 2025 was $215,000 ([AAMC](https://students-residents.aamc.org/financial-aid-resources/you-can-afford-medical-school)), and 54,699 people applied for 23,440 entering places in 2025 ([AAMC](https://www.aamc.org/news/us-medical-schools-enroll-record-number-students-2025)). Those facts establish costly and selective entry, not how much is necessary quality assurance or rent dissipation. That causal division requires separate evidence.

One thread ran under every case in this part and connects back to our earlier
property-rights topic. The people who attend hardest to the market value of a
resource are its owners: the boat owner in Part A who beached the boat rather
than overpay, the employer here who loses money by indulging prejudice. When a
resource is owned, the owner keeps the gains from using it well and bears the
losses from using it badly, so ownership concentrates the incentive to attend
to market value while its absence dilutes that incentive.

## For Further Reading

Want to explore the source material? This lecture draws on the following chapters from two books by Armen A. Alchian and William R. Allen:

- *Universal Economics* (Liberty Fund, 2018): Ch. 20, “Price-Searcher Pricing”; Ch. 39, “Your Earnings: How and When”; Ch. 40, “Labor-Market Coalitions”; Ch. 41, “Labor-Market Constraints”.
- *Exchange and Production*, 3rd ed. (Wadsworth, 1983): Ch. 13, “Restricted Access to Markets”; Ch. 14, “Income from Personal Services”; Ch. 15, “Labor-Market Institutions”; Ch. 17, “Unemployment and Idle Resources”.

<div class="econ-review">
<section class="econ-review__section">
<h3>Key takeaways</h3>
<ul>
<li><strong>Representation and entry restriction are distinct functions.</strong> A union can enforce contracts and, in some settings, it lifts members' wages by limiting the outsiders who could compete for the jobs. Licensing can protect consumers or restrict entry; a transferable license price capitalizes the expected rent of being let in.</li>
<li><strong>Monopsony makes the next hire cost more than the wage.</strong> Because attracting one more worker requires raising incumbent wages too, marginal wage cost exceeds the posted wage and a dominant buyer hires fewer workers.</li>
<li><strong>A wage floor's effects depend on market structure and its level.</strong> In the competitive model, a floor above a job's VMP can reduce employment; in monopsony, a moderate floor can raise wages and employment. An applicant surplus can reduce the private cost of prejudice, but law and other institutions matter.</li>
</ul>
</section>
</div>