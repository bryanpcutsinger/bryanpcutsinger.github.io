---
title: "Factor Markets and Labor, Part B: Coalitions and Constraints"
topic: "T10 — Factor Markets and Labor (Part B)"
course: "Principles of Microeconomics (FAU)"
sessions: ["Fall 2026 — content session 22 (Thu 11/5)"]
ue_anchors: ["UE 20 (analytic monopsony mechanism)", "UE 40", "UE 41", "UE 39 (gender-earnings sections)"]
be_anchors: ["BE 11", "BE 12 (partial)"]
ep_anchors: ["E&P 15 — closed monopsony (interns; NCAA) and featherbedding", "E&P 13 — rent dissipation via qualifying", "E&P 17 pp. 369–380 — job search, disguised unemployment, and layoffs versus wage cuts", "E&P Fig 14-7 — wage floor and ceiling"]
univecon_anchors: ["University Economics (1994) ch. 21 pp. 416–417 — specific versus general on-the-job training and who pays"]
word_target: "2500-3900"
word_budget: 3900
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
<li>Explain how unions and occupational licenses raise insiders' earnings by restricting entry, identify the outsiders excluded, and interpret a license price as a capitalized rent.</li>
<li>Derive the analytic monopsony rule: when hiring one more worker requires raising incumbent wages too, marginal wage cost exceeds the wage and the buyer hires fewer workers.</li>
<li>Use the hiring rule to explain why a binding minimum wage prices low-value workers out and why the same floor can make discrimination cheaper.</li>
</ul>
</aside>

## Unions Are Legislatively Sanctioned Monopolies That Raise Insiders' Wages by Restricting the Supply of Labor

A labor union, analyzed plainly, is a *monopoly*: an arrangement that eliminates competition among workers over the wage at which they sell their labor. That is not name-calling; a former Secretary of Labor and union counsel said as much, calling a union "technically" a monopoly "in the limited sense" that it ends competition among workers for the available jobs. A union does not abolish competition; it redirects it. With wage competition off the table, workers compete instead through seniority, through who gets in the apprenticeship line, through nonwage maneuvering. The rivalry changes form rather than vanishing.

Be precise about the kind of monopoly. A *closed* monopoly is protected by a legal barrier that keeps rivals out; an *open* one merely happens to be large and can be challenged by anyone who enters. A union backed by labor law is a closed monopoly, because the law restricts who may compete to supply that labor. A big firm like a steelmaker, by contrast, is usually an open one, exposed to new entrants and imports. In the United States this protection came through labor legislation in the 1930s that sanctioned collective bargaining and created a federal board to enforce it.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Closed Monopoly</dt><dd>A seller protected by a legal barrier that keeps rivals out.</dd></div>
<div><dt>Open Monopoly</dt><dd>A large seller that anyone may still challenge by entering.</dd></div>
</dl>
</aside>

How does a union raise its members' wages? In the end, by restricting the supply of labor competing for the jobs. A craft union does it most directly, by controlling apprenticeships and admission so fewer trained workers chase the work; a wise craft leader, the saying goes, does not need to strike, he controls who gets in. Shrink the supply and the wage of those inside rises, exactly as a smaller harvest raises a crop's price. This is why the central lens for the whole part is *insiders versus outsiders*. A coalition raises the pay of its members, the insiders, by limiting the ability of outsiders to compete for the same work, and the outsiders kept out are usually the younger, less-experienced, and less-advantaged workers who could only have competed by offering to work for less.

This lens explains a string of puzzling stances. Organized labor has historically pushed for limits on immigration while employers objected; cutting the supply of competing workers raises members' wages, which is why workers favor it and employers resist. A union head may champion lower prices for the public while opposing the removal of tariffs that protect his members' product. The two positions serve different constituencies: lower domestic prices help consumers, while cheaper imports threaten members' jobs. Some employers even welcome a strong union, because a union that prices low-wage rivals out of the labor market can knock out the low-cost competing firms that relied on them, protecting the higher-cost incumbent. A strike, where the law bars hiring replacements, is the same logic enforced: it blocks willing outsiders from selling their labor at the open-market wage. When a panel of union, employer, and "public" representatives settles a strike, the group with no seat at the table is precisely the nonunion outsider who would gladly take the job at the going rate.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>Organized labor has often pushed to restrict immigration while employers pushed the other way. Using the insiders-versus-outsiders lens, who are the insiders here, and which outsiders does the restriction keep from competing for the jobs?</p>
</aside>

A union also serves, secondarily, to police an employer's promises, since a single worker has trouble holding a firm to commitments made over a long career. That monitoring role is real, but it is not the main story for wages and does not change the supply-restriction logic.

Two points round this out. First, a contrived wage gain is not a stream of easy money forever. Once a privileged position can be passed on or sold, its advantage gets capitalized into the price of getting in, so later holders pay up front and earn only an ordinary return on what they paid. We lack the tool to make this precise, but the verbal version suffices: **the gain is already priced into the value of the position today.** Present value will make it exact, and that is one of the threads the next topic picks up.

Second, the mirror image of a union, a single dominant buyer of labor, is *monopsony*. The cleanest example is the military draft. People defended conscription as "cheap" because the budget cost of paying draftees was low, but that figure hid the real cost: the value of what conscripts gave up, forced into service at below-market pay, plus the waste of assigning people poorly. A volunteer force paid by wages reveals the true cost in the budget and tends to lower it, because wages sort people toward the jobs they fit best. The claim that a lone worker is helpless therefore needs qualification wherever many employers compete. An employer who lowballs a productive worker loses him to a rival who offers more. Competition among employers, not a coalition, is what ordinarily protects the individual worker.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Monopsony</dt><dd>A single dominant buyer of a good or of labor, the mirror image of a monopoly seller.</dd></div>
</dl>
</aside>

The buyer-side mechanism mirrors the price-searcher seller. Suppose a monopsonist faces an upward-sloping labor supply, so attracting one more worker requires a higher wage. If that higher wage must also be paid to the workers already employed, the cost of the next hire exceeds that worker's wage: the *marginal wage cost* includes both the new worker's pay and the raises for incumbents. The monopsonist hires only until the next worker's value of marginal product equals this higher marginal wage cost, not merely the posted wage. Compared with competing employers, it therefore employs fewer workers and pays a lower wage. The result needs both ingredients, market power on the buying side and an upward-sloping supply; a lone employer facing perfectly mobile workers cannot create it.

The draft was a monopsony run by the government. Private employers have tried the same trick by agreement. A lone hospital cannot hold intern pay far below what an intern adds, because a rival hospital would bid the intern away. So hospitals did not act alone: their association capped intern salaries, and the cap held because a hospital that broke it risked its top-grade accreditation, the seal it needs to attract students and funding. Notice who keeps the savings. Cheap interns do not lower the price of hospital care by some automatic mechanism; the margin shows up as higher incomes for the people already inside.

College sports ran the same play for over a century, on a bigger stage. NCAA colleges are employers buying athletic labor, and their amateurism rules were a collective agreement not to pay for it, enforced the same way as the intern cap: a college that paid players risked its athletes' eligibility and its own standing. With money banned, competition for stars resurfaced in scholarships, facilities, and covert payments; rivalry changes form, it does not die. The agreement finally cracked in court. Justice Kavanaugh wrote that the NCAA's business model <a href="https://www.law.cornell.edu/supremecourt/text/20-512">"would be flatly illegal in almost any other industry in America,"</a> and once athletes could earn from their <a href="https://www.cbssports.com/college-football/news/ncaa-approves-interim-name-image-and-likeness-policy-removing-restrictions-for-college-athletes-to-earn-money/">name, image, and likeness</a> in 2021 and colleges could pay them directly under the 2025 <a href="https://www.espn.com/college-sports/story/_/id/45467505/judge-grants-final-approval-house-v-ncaa-settlement">House settlement</a> (up to roughly $20.5 million per school, with nearly $2.8 billion in back pay), the suppressed wages appeared almost overnight; <a href="https://frontofficesports.com/the-year-schools-paid-their-players/">310 schools opted in</a> the first year. Recall the cartel lesson from market power: a cartel survives only where cheating is cheap to detect and punish, and an accreditation body that doubles as the cartel's enforcement arm is exactly that machinery.

Training costs also depend on who can capture the return. *Specific training* helps only the current employer, so the worker cannot sell it elsewhere; the employer pays for it, since he captures the gain and wants to keep the worker. *General training* is portable, so the worker pays, often by taking a lower wage while learning and a higher market wage afterward. Specific training therefore predicts lower turnover than general training, since either side would lose a relationship-specific investment if the match ended.

The pattern of who still unionizes says the same thing from another angle. Union membership has fallen from near a third of the American workforce in the 1950s to little more than a tenth, almost entirely on the private side: government workers now unionize near 40 percent, private workers under 7 percent. A private employer paying above-market wages must cover them from sales revenue while rivals do not, and tends to shrink or disappear; a government agency pays from taxes, and taxpayers tolerate above-market wages longer than customers do.

## The Minimum Wage Prices Out the Workers Whose Value Is Below the Floor

Now apply the hiring rule to the most debated labor policy of all. A minimum wage is a legal floor on the wage an employer may pay.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Minimum Wage</dt><dd>A legal floor on the wage an employer may pay.</dd></div>
</dl>
</aside>

On the boat in Part A, the owner hired a worker only if the value he added was at least the wage. Set a floor above some workers' VMP and those workers can no longer be hired at a wage that makes sense for the employer. They are not paid more; they are not paid at all in covered jobs. The higher the floor, the more workers it prices out, which is why "the higher the minimum wage, the greater the unemployment among the least-skilled" is sound.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t10b-labor-coalitions-and-constraints/figures/t10b-ep14-7-wage-bounds-interactive.html" title="Interactive wage floor and ceiling: drag the wage line above the market wage to create a surplus of labor (unemployment), or below it to create a shortage. Employment is always the short side." loading="lazy" style="width:100%; max-width:480px; aspect-ratio:5/6; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t10b-labor-coalitions-and-constraints/figures/t10b-ep14-7-wage-bounds-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t10b-labor-coalitions-and-constraints/figures/t10b-ep14-7-wage-bounds.svg">view the static version</a>.</p></iframe>
<figcaption><strong>One diagram, both mistakes.</strong> Fix the wage above the market rate and more people want jobs than employers will hire: a surplus of labor, which is unemployment. Fix it below and employers want more hours than anyone will offer: a shortage. The ceiling half returns later in this post: a shortage of labor makes discrimination costly for an employer to indulge.</figcaption>
</figure>


Who are those workers? Disproportionately the young, the inexperienced, and the least-skilled, the very people the policy is meant to help, because their value to an employer has not yet risen above the floor. The damage shows up across countries: where minimum wages are high, youth unemployment runs far above the general rate, sometimes above 20 or even 40 percent against a general rate near 10. In the United States, black labor-force participation was slightly higher than whites' before the federal minimum-wage laws of the 1930s; black youth unemployment climbed in the era that followed.

Notice, too, who campaigns for a higher floor. Workers already earning far above the minimum, and firms running the latest labor-saving equipment, are among its most reliable advocates. Raising the minimum raises the costs of their labor-intensive rivals, and customers then drift toward the capital-intensive firm and its high-wage workforce. The unionized garment industry pressed hard for minimum-wage enforcement against small immigrant-staffed shops for exactly this reason. Whatever the advocate's motive, the policy also raises labor-intensive rivals' costs; the same rule can therefore help some high-wage workers and capital-intensive firms while excluding lower-value workers.

The escape routes confirm the mechanism. Where a floor binds, work shifts toward margins it cannot reach. The share of owner-driven cabs rises relative to employee-driven ones, because a person working for himself pays himself no legal minimum; push a taxi-driver minimum to an absurd level and you would see almost nothing but owner-operators. Self-employment and uncovered sectors absorb the workers the covered sector can no longer afford.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>Push a taxi-driver minimum wage high enough and the share of owner-driven cabs rises. Which workers does the floor price out of the employee-driven jobs, and where does their work go instead?</p>
</aside>

A warning about evidence. Suppose someone surveys firms before and after a minimum-wage hike and adds up the employment changes at the surviving firms. That procedure is broken, because it counts only firms that lived to be surveyed. It misses the firms that closed and, worse, the jobs and firms that never came into existence because the floor made them unprofitable from the start. The disemployment shows up exactly where this method does not look.

## A Wage Floor Makes Discrimination Cheap, a Shortage Makes It Costly

The minimum wage has a darker consequence that overturns a common intuition. People assume a wage floor protects vulnerable workers from exploitation. In a competitive market it can do the opposite, and the cleanest case is the most painful. Under apartheid, white-run unions in South Africa backed minimum-wage and "equal pay" rules precisely because they grasped the mechanism: if a black worker could no longer offer to work for less, the employer's incentive to hire him over a white worker disappeared. Forced to pay the same wage regardless, employers indulged their prejudice freely, even hiring abroad rather than employ the surplus of black workers a floor had created. A wage floor strips less-favored workers of their one competitive weapon, the willingness to accept lower pay, and so it can raise, not lower, the discrimination they face. (Triple the floor and you would only sharpen the effect.)

The general principle: **in a competitive market, discrimination is costly to the discriminator.** An employer who refuses productive workers from a group he dislikes forgoes the value they would add, and a rival who hires them gains an edge and can undersell him. The market punishes prejudice by making it expensive. History bears this out: before civil-rights laws, black chemists and other skilled minority workers were more often hired by profit-seeking firms than by nonprofits, because the profit-seeker paid a price for prejudice that the nonprofit, insulated from competition, did not. Foreign-owned firms operating where local prejudice ran strong often paid higher wages to hire the workers locals shunned, chasing profit rather than conforming to bias.

The same rule reaches the most-discussed pay gap of all, the one between men and women. An employer who could hire equally productive women at a lower wage and refused to, paying men more for the same output, would be throwing away profit, and a rival who hired those women would gain an edge; so competition steadily erodes a gap that rests on pure prejudice. That does not mean every observed difference in average pay is prejudice. Part of it traces to differences in the cost of employing a worker and to choices workers make: women have on average borne more of the cost of childbearing and child-rearing and have more often chosen occupations whose skills do not depreciate during a career interruption, which shows up as a difference in measured earnings without anyone being underpaid relative to what they add. The honest summary is that competitive markets push against the prejudice component, that the gap has narrowed where competition and women's qualifications have grown, and that the part of it which reflects voluntary choice and cost differences is not discrimination at all. The size of what remains is disputed, so we assert no number; the analytical point is that the same discrimination-is-costly logic applies here as everywhere else.

Wage controls reverse the discipline. A floor creates a surplus, more applicants than jobs, and when employers pick from a line out the door, turning some away costs nothing; discrimination becomes cheap. A ceiling does the opposite: it creates a shortage, and an employer scrambling to fill positions cannot afford to refuse a productive worker over prejudice; discrimination becomes expensive. The mechanism therefore complicates claims that wage regulation necessarily reduces discrimination: competition makes prejudice costly, while a surplus of applicants can make it cheap.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A wage floor leaves a line of applicants at the door; a wage ceiling leaves jobs unfilled. In which case can an employer turn away a productive worker over prejudice at no cost to himself, and why?</p>
</aside>

## Occupational Licensing Restricts Entry to Protect Incumbents, Not Consumers

The union logic, restrict the supply to raise insiders' pay, reappears in a respectable suit as occupational licensing. A license is a legal requirement to obtain permission before practicing a trade, sold to the public as protection against incompetents. Sometimes that is part of the story. But notice who lobbies for these rules: overwhelmingly the incumbents already in the trade, not the consumers they claim to protect. Licensing laws routinely *grandfather* existing practitioners, exempting them from the new requirements. Grandfathering shows that the rule protects incumbents as well as screening entrants. Its effect is to raise entry costs, thin competitors, and support incumbent incomes; the weight placed on consumer protection versus incumbent protection varies by rule. The same logic explains why a bar association's fixed minimum fees for routine legal work help established lawyers far more than a beginner hungry for clients.

The mechanism is the labor-market version of the producer protections studied
under market power. An import quota keeps foreign sellers out; a license keeps
would-be workers out. Both close entry, restrict supply, and direct the rent
toward incumbents; only the stated objective differs.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Occupational Licensing</dt><dd>A legal requirement to obtain permission before practicing a trade.</dd></div>
</dl>
</aside>

The sharpest illustration is a numerical cap on licenses. New York City has limited the number of taxi licenses since 1937, issuing "medallions" that authorize a cab to operate. The artificial scarcity drove the price of a medallion from $10 when the system began to roughly $80,000 by the 1980s and past a million dollars by 2011. That price is the market's measure of the monopoly value of being allowed in, created not by serving riders better but by keeping competitors out. The political economy is the same insiders-versus-outsiders story as the union: the gains are concentrated on a small group of incumbents who fight hard to keep them, while the losses, higher prices and fewer choices for riders and lost opportunities for would-be drivers, are spread thin across millions who never organize to oppose them. That asymmetry helps explain why licensing persists even when its entry costs exceed its consumer-protection benefits.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A New York taxi medallion rose from $10 to past a million dollars while the number of cabs stayed capped. What does that price measure, and who ultimately pays for it?</p>
</aside>

The medallion price shows what happens when a privileged position can be bought: the rent is capitalized into the entry price, and the buyer earns only an ordinary return. When the position must be qualified for instead, the same rent gets eaten in the qualifying. <a href="https://obamawhitehouse.archives.gov/sites/default/files/docs/licensing_report_final_nonembargo.pdf">About a quarter of American workers</a> now need a government license to do their jobs, up from under five percent in the early 1950s, and medicine shows where the toll goes. The typical indebted medical graduate leaves school <a href="https://students-residents.aamc.org/media/12846/download">owing about $205,000</a>, then works several more years of residency at a first-year stipend near $65,000, having beaten out most of the <a href="https://www.aamc.org/news/us-medical-schools-enroll-record-number-students-2025">54,699 applicants who competed for 23,440 medical-school seats</a>. Add up the tuition, debt, and years of forgone earnings, and the license's apparent monopoly rent mostly disappears: the entrant nets roughly a normal return. The windfall was collected once, by whoever already held a license when the gate closed, which is why incumbents defend these restrictions so fiercely; repeal would hand them a capital loss, not just a smaller income.

One thread ran under every case in this part and connects back to our earlier
property-rights topic. The people who attend hardest to the market value of a
resource are its owners: the boat owner in Part A who beached the boat rather
than overpay, the employer here who loses money by indulging prejudice. When a
resource is owned, the owner keeps the gains from using it well and bears the
losses from using it badly, so ownership concentrates the incentive to attend
to market value while its absence dilutes that incentive.

<div class="econ-review">
<section class="econ-review__section">
<h3>Key takeaways</h3>
<ul>
<li><strong>Entry restrictions create insider rents.</strong> A union backed by labor law is a closed monopoly: it lifts members' wages by limiting the outsiders who could compete for the jobs. Licensing uses the same exclusion, and a license price capitalizes the value of being let in.</li>
<li><strong>Monopsony makes the next hire cost more than the wage.</strong> Because attracting one more worker requires raising incumbent wages too, marginal wage cost exceeds the posted wage and a dominant buyer hires fewer workers.</li>
<li><strong>A wage floor can exclude workers and cheapen discrimination.</strong> A floor above a worker's value prices that worker out and removes the low-wage margin through which competition would otherwise punish prejudice.</li>
</ul>
</section>
</div>