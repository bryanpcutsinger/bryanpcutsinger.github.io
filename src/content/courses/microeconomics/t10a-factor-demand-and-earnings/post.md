---
title: "Factor Markets and Labor, Part A: What an Extra Worker Is Worth"
topic: "T10 — Factor Markets and Labor (Part A)"
course: "Principles of Microeconomics (FAU)"
sessions: ["Fall 2026 — content session 21 (Tue 11/3)"]
ue_anchors: ["UE 29", "UE 39", "UE 22 (Codlandia; National Development)"]
ep_anchors: ["E&P Fig 8-1 — team marginal products", "E&P Fig 14-6 — demand for labor services"]
be_anchors: []
word_target: "2500-3600"
word_budget: 3601
  # word_budget 3600 -> 3672 (+72): For Further Reading section added 2026-07-22
  # word_budget unchanged 2026-07-23: BE->A&A re-ground of the §1 context-dependence paragraph on UE 29 (Social and Cultural Resources as Productive Inputs) + UE 22 (National Development); measured stripped 3130 -> 3217, ample headroom retained
  # word_budget 3672 -> 3613 on 2026-08-10: Wave-B source audit; stripped 3217 -> 3158 while preserving the prior 455-word headroom
  # word_budget 3613 -> 3601 on 2026-08-10: three-block course read corrected the T9→T10 transition; prior 455-word headroom retained
status: approved        # Stage-2 sign-off 2026-06-15
audience: students
note: "Self-contained — assumes no access to the textbooks. Part A of the two-part T10 (factor demand, VMP, earnings); Part B (topics/t10b-labor-coalitions-and-constraints) covers unions, the minimum wage, discrimination, and licensing. Source-of-truth for the deck; section headers are claims that map to slide titles."
# brief: ../t10-factor-markets-labor/brief.md
---

# Factor Markets and Labor, Part A: What an Extra Worker Is Worth

So far we have studied consumers, product markets, production, and the organizations that hire inputs. Now turn directly to the input markets. The same people who buy groceries also sell something to earn the money that buys them. Most of us sell labor services; some also sell the use of land, machines, or savings. These are the *factors of production*, the inputs firms hire to make everything else, and the markets where they get hired and priced are *factor markets*.

A huge amount of public argument turns on these markets. Why does a surgeon earn more than a cashier? Why does the same job pay differently in different countries? Both questions turn on a single idea we will build from scratch here: the value of what an extra worker adds. Get that straight and the rest falls into place.

This is the first of two parts. Here in Part A we build that central idea and use it to explain how labor demand works, how machines reorganize labor demand, and why people's earnings differ. Part B takes the same engine into the most heated policy fights of all: unions, the minimum wage, discrimination, and occupational licensing.

<aside class="econ-callout econ-objectives">
<p class="econ-callout__label">Learning objectives</p>
<p>By the end of this post you should be able to:</p>
<ul>
<li>Explain why the demand for labor services is a derived demand built from the value of marginal product, and use the competitive-benchmark hiring rule to explain why labor demand slopes down.</li>
<li>Explain how a higher input price pushes firms to substitute toward other inputs, and distinguish a machine's task-level displacement from its wider effects on product demand, complementary jobs, and total employment.</li>
<li>Explain why wages differ across people using productivity, skill-acquisition costs, working conditions, entry constraints, and labor-market institutions, and explain both the portability and the limits of human capital.</li>
</ul>
</aside>

## Demand for Labor Services Comes From What They Help Produce

This section is about the market demand for a person's specified *labor services*, not the person's dignity or human worth. A firm hires those services because they help produce something customers will pay for. Economists therefore call the demand for any input a *derived demand*: it is derived from demand for the product the input helps make. There is no demand for autoworkers' production services apart from demand for cars, or for cooks' production services apart from demand for meals.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Derived Demand</dt><dd>Demand for an input that comes from the demand for the product the input helps make.</dd></div>
</dl>
</aside>

This quietly settles a great deal. It means the value of a worker is not a fixed personal trait you carry around like your height. More precisely, the market value of an hour of labor service depends on what it helps produce and what buyers will pay for that output. The same person can therefore generate different market value in different settings. Drop a skilled mechanic into an economy with few tools, unreliable transport, or weak contract enforcement, and the value of the mechanic's work may fall, not because the mechanic became less capable but because cooperating inputs changed. Tools, coworkers, infrastructure, law, finance, management, and market access all matter. Economists sometimes call part of that surrounding productive stock *social capital*. This mechanism helps explain cross-country productivity and wage differences, but it is not a complete causal ranking: technology, education, health, geography, history, policy, bargaining institutions, and the prices of what workers produce also matter. The next section isolates one part of that larger system.

When we ask "what is a worker worth," then, we are really asking "how much does this worker add to what the firm can sell." To answer that precisely we need a tool.

## A Worker's Pay Traces to the Value of What One More Worker Adds

Once you have the central construct, the policy questions almost answer themselves. Start with a puzzle about teams.

Working alone, Jack produces output worth $5 a day and Jill $7. Teamed up they produce $15, three dollars more than their solo sum, because they help each other.

| | Output value |
|---|---|
| Jack, working alone | $5 |
| Jill, working alone | $7 |
| Jack and Jill together | $15 |

So how much did Jack add? Without him the team would have had only Jill's $7, so Jack added $15 − $7 = $8. By the same logic Jill added $15 − $5 = $10. Those sum to $18, more than the $15 the team produced. Both counterfactual comparisons are correct, and they cannot both be paid. Team output cannot be cleanly sliced into uniquely attributable personal products. In a competitive benchmark, outside offers and replacement alternatives place bounds on pay; contracts, bargaining, information, market power, and team-specific investments help determine where pay falls within those bounds.

To see how the value of an added worker drives hiring, we need a cleaner setting. Picture a small island, Codlandia. A thousand people live there, and at first everyone fishes from shore, catching 8 fish a day each. Then someone finds a boat, far more productive than the shore but with limited room, and that limit is what makes the example work. Here is the catch as more people climb aboard.

| People on the boat | Total catch | Extra catch from the last person (marginal product) | Average catch per person |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 1 | 12 | 12 | 12.0 |
| 2 | 30 | 18 | 15.0 |
| 3 | 46 | 16 | 15.3 |
| 4 | 58 | 12 | 14.5 |
| 5 | 66 | 8 | 13.2 |
| 6 | 70 | 4 | 11.7 |
| 7 | 72 | 2 | 10.3 |
| 8 | 64 | −8 | 8.0 |

The third column is the heart of the topic. The *marginal product* of a worker is the extra output the firm gets from adding one more, holding everything else fixed. The first person aboard adds 12 fish; the second adds 18, more than the first, because two can work the boat better than one. But after that the third adds 16, the fourth 12, the fifth 8. Past the second worker, each new person adds less than the one before. That is the *law of diminishing marginal returns*: as you keep adding one input to a fixed amount of others, the extra output from each new unit eventually falls. There is only so much boat, and crowding sets in.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Marginal Product</dt><dd>The extra output a firm gets from adding one more worker while everything else stays fixed.</dd></div>
</dl>
</aside>

Diminishing marginal returns is not the same as falling output. Through the seventh worker the total catch is still rising; it just rises in smaller steps. Total output turns down only once marginal product goes negative, at the eighth worker, who gets in everyone's way and cuts the catch by 8. So a firm can keep gaining from added workers long after each adds less than the last.

This also fixes where a sensible employer operates. Nobody stops hiring in the rising stretch from the first to the second worker, where each adds more than the last; you would always want one more. And nobody hires into the region where an extra worker shrinks total output. A profit-seeker operates in the middle, the region of diminishing but still positive marginal product.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t10a-factor-demand-and-earnings/figures/t10a-product-curves-interactive.html" title="Drag the point along the total-product curve to sweep total, marginal, and average product together, and watch marginal product cross zero exactly where total product peaks." loading="lazy" style="width:100%; max-width:480px; aspect-ratio:5/7; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t10a-factor-demand-and-earnings/figures/t10a-product-curves-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t10a-factor-demand-and-earnings/figures/t10a-product-curves.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>Marginal product turns negative exactly where total product peaks, and it cuts average product from above exactly where average product peaks.</strong> Total product (top) keeps rising as long as marginal product (gold) is positive, and stops rising the instant marginal product hits zero. Average product (black) climbs while marginal is above it and falls once marginal drops below it — three stages of hiring in one figure. Drag the point (or use the arrow keys) to sweep the number of workers through both plots. If the frame does not load, <a href="/teaching/microeconomics/t10a-factor-demand-and-earnings/figures/t10a-product-curves-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t10a-factor-demand-and-earnings/figures/t10a-product-curves.svg">view the static figure</a>.</figcaption>
</figure>

Put a price on the fish and the construct is finished. Suppose each fish is worth one unit and the boat's extra catch does not change that price. Then the marginal product column is also the *value of marginal product* (VMP): the extra output from one more worker, valued at the output price. In this competitive product-market benchmark, VMP is the boat's demand schedule for labor services; it tells the employer the most each successive worker is worth paying. A seller with market power instead asks how the added output changes revenue, so its corresponding rule uses *marginal revenue product*.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Value of Marginal Product</dt><dd>A worker's marginal product valued at the price the output sells for, which is the firm's demand for labor.</dd></div>
</dl>
</aside>

| People on the boat | Marginal product (fish) | Value of marginal product |
|---|---|---|
| 1 | 12 | 12 |
| 2 | 18 | 18 |
| 3 | 16 | 16 |
| 4 | 12 | 12 |
| 5 | 8 | 8 |
| 6 | 4 | 4 |
| 7 | 2 | 2 |

Now the punch line, the benchmark hiring rule: **hire each worker up to the point where the value he adds equals the wage you must pay him.** A worker could catch 8 fish on shore, so to lure that worker aboard you must pay 8 fish. The owner keeps hiring as long as the next worker adds at least 8 in value. The fifth adds exactly 8, so the owner hires five and stops; a sixth would cost 8 to add only 4. If the going wage rises to 12 fish, the owner hires only to the fourth worker, whose VMP is 12. Holding the boat, output price, and other inputs fixed, a higher wage means fewer workers demanded. That is why this labor-demand schedule slopes down. Part B adds cases in which the wage or hiring conditions are shaped by buyer power, coalitions, law, or bargaining.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>Shore fishing pays a wage of 8 fish. Using the VMP table, how many workers does the boat owner hire, and how does that change if the going wage rises to 12? State the hiring rule you used.</p>
</aside>

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t10a-factor-demand-and-earnings/figures/t10a-ep8-1-team-mp-interactive.html" title="Interactive team-production figure: step through crew sizes and compare each member's marginal product on the boat with the product he could add on shore. Hiring stops where the two meet." loading="lazy" style="width:100%; max-width:480px; aspect-ratio:5/6; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t10a-factor-demand-and-earnings/figures/t10a-ep8-1-team-mp-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t10a-factor-demand-and-earnings/figures/t10a-ep8-1-team-mp.svg">view the static version</a>.</p></iframe>
<figcaption><strong>The boat hires while a member adds more aboard than ashore.</strong> Each bar is what one more crew member adds to the catch; the red line is what that person could produce on shore. The gap above the line is the gain from bringing him aboard; the gap below is the loss. The rule stops the crew at five, where the last member adds exactly what he gives up.</figcaption>
</figure>


Two results follow within this benchmark. First, VMP helps determine how many workers the boat hires. With many employers and workers able to move, outside bids push pay toward the value of the marginal service, though teamwork prevents us from treating that wage as a unique moral or causal measure of one person's contribution. Second, the contract assigns the catch left after promised payments to the boat owner, who supplies a specialized asset and bears the residual gain or loss. That residual claim can strengthen monitoring incentives; it does not prove that every residual dollar was produced by the owner alone or that every observed contract is competitive. If the wage rose so high that the boat no longer covered all opportunity costs, the owner would beach it. A firm that persistently promises more than its revenue cannot survive without some outside subsidy, but how the feasible total is divided depends on institutions as well as marginal products.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t10a-factor-demand-and-earnings/figures/t10a-ep14-6-vmp-demand-interactive.html" title="Interactive labor-demand curve: drag a point along the curve to read, at each wage, how many hours of labor services employers hire." loading="lazy" style="width:100%; max-width:480px; aspect-ratio:9/10; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t10a-factor-demand-and-earnings/figures/t10a-ep14-6-vmp-demand-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t10a-factor-demand-and-earnings/figures/t10a-ep14-6-vmp-demand.svg">view the static version</a>.</p></iframe>
<figcaption><strong>Smooth the hiring rule across many employers and you get a demand curve for labor.</strong> The height of the curve at any quantity is the value one more hour of labor services adds; at a lower wage, hours that did not pay before now do. This is the same picture as the boat, drawn for a whole market.</figcaption>
</figure>


That is the engine. The rest of the topic applies it to real arguments.

## Higher Input Prices Induce Substitution, but Machines Can Substitute for Some Tasks and Complement Others

The VMP picture has a second blade. When an input gets more expensive, firms do not just hire less of it; they shift toward other inputs that now deliver more value per dollar. A gardener whose wage doubles because fewer gardeners are available does not simply price himself into idleness. Homeowners switch to power equipment that lets one person do the work of several, or to rock gardens and low-maintenance plants. If you wonder what the substitutes for a costly input are, watch what its competitors sell: the makers of riding mowers and gravel will gladly show you.

This runs even when a firm seems locked into a fixed recipe. Suppose a tool needs exactly one handle per blade. Make handles costlier and the tool costs more; at the higher price consumers buy fewer tools, so fewer handles get used. The substitution happened, just out among the products rather than inside the factory. And these adjustments deepen over time, so demand for an input is more elastic in the long run than in the short run.

Technology can substitute for some tasks and complement others. A robot may reduce the marginal product of an additional assembly worker while raising the marginal product of programmers, maintainers, designers, or workers using the cheaper output. The robot, its software, and its sensors were also made with labor, so counting only the on-site jobs misses part of the adjustment. The one-person bus is a clean example: a fare box and automatic door can replace a conductor, while workers elsewhere make and maintain the equipment. None of this guarantees that the displaced worker, the original occupation, or even total employment rises after a particular innovation. The effect depends on how strongly the machine displaces the original tasks, complements other tasks, lowers the product price, and expands demand for the product.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>A factory installs a robot that performs three workers' former tasks. Identify one substitution effect, one complementary-labor effect, and the demand condition that determines whether the industry's employment rises or falls.</p>
</aside>

## The Number and Composition of Jobs Are Not Fixed

The substitution point exposes the *lump-of-labor fallacy*: the belief that the economy contains a fixed stock of tasks, so one person's or machine's gain must permanently remove an equal number of jobs elsewhere.

Scarcity means there are always additional wants and possible tasks, but a possible task becomes a job only when someone expects its value to cover its opportunity cost. When a refrigerator eliminates an iceman's route or a robot eliminates an assembly task, workers and resources can move toward other tasks, including producing and maintaining the new equipment. In the long-run competitive benchmark, **The total number of jobs is not reduced, because the amount of work worth doing was never fixed** and wages and other prices adjust. That statement rejects a fixed quota; it is not a theorem that every innovation leaves aggregate employment unchanged at every date. Search costs, retraining, location, contracts, policy, and weak demand can make adjustment slow, unequal, or incomplete.

A ruling framed around preserving railroad jobs illustrates the fixed-stock temptation. The relevant comparison also includes jobs and output created elsewhere and the costs borne during transition. Capital is produced and maintained with labor, but that fact alone does not show how many jobs exist afterward.

The fallacy is not the claim that displacement never hurts. A productivity-improving innovation can enlarge total output while imposing concentrated losses on workers whose skills, homes, or relationships are tied to the old activity. Whether aggregate employment rises, falls, or recovers is an empirical question about the adjustment mechanisms just named. The analytical lesson is narrower and stronger: do not infer a one-for-one permanent loss of jobs from the disappearance of a task.

## Earnings Differ Because People and the Cost of Acquiring Skills Differ

Now we can explain part of why wages differ across people, not just places. Productivity and product demand shape employers' willingness to pay. On the supply side, people differ in abilities, preferences, opportunities, and the *cost of acquiring* skills. A surgeon's high earnings may reflect valuable services and a long, costly training path that restricts supply. Working conditions, risk, location, hours, discrimination, bargaining power, licensing, networks, and luck can also create or sustain differences. A money wage is therefore neither a complete measure of job quality nor a verdict on personal merit.

This gives a useful competitive tendency, not a hard ceiling. **A wage gap between two jobs cannot stay much larger than the cost of acquiring the higher-paying skill** when people can enter the training, finance it, complete it with similar probability, and compete for the resulting jobs. If the expected lifetime gain exceeded the full cost, entry would expand and press the gap downward. Ability differences, credit constraints, limited training slots, licensing, uncertainty, and job-specific rents can weaken or block that response. Training cost limits supply; it does not by itself prove how productive a credential is.

The same logic explains why we all teach ourselves to read, write, drive, and cook but hire out our medicine and our lawsuits. Generalized skills like reading are cheap to acquire, useful almost anywhere, and durable, so it pays each of us to own them. Specialized skills like surgery or tax law are expensive, narrow, and can lose value when the situation changes, so it pays to buy them from a specialist only when we need them.

## Human Capital Is Portable Wealth, but Its Return Can Be Blocked or Lost

It helps to think of skills as a form of wealth. Economists call it *human capital*: the productive capacity stored in a person through education, training, and experience. Like a machine, it takes resources to build and can yield services over time. Unlike a machine or bank account, the skill itself cannot simply be detached from its holder and handed to someone else. That makes it relatively portable and physically harder to seize.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Human Capital</dt><dd>The productive capacity stored in a person through education, training, and experience.</dd></div>
</dl>
</aside>

But human capital is not invulnerable. Illness, technological change, time away from practice, or war can depreciate it. Licensing, discrimination, migration restrictions, incarceration, or coercion can block where and whether it earns a return. And because a lender generally cannot repossess a person's future labor, financing education can be harder than financing a saleable machine. Human capital is wealth with distinctive control and financing limits, not property beyond institutional reach. That insight ties directly to Part B.

## For Further Reading

Want to explore the source material? This lecture draws on the following chapters from two books by Armen A. Alchian and William R. Allen:

- *Universal Economics* (Liberty Fund, 2018): Ch. 22, “Teamwork and Firms”; Ch. 29, “The Demand for Productive Resources”; Ch. 39, “Your Earnings: How and When”.
- *Exchange and Production*, 3rd ed. (Wadsworth, 1983): Ch. 8, “Production by Firms”; Ch. 14, “Income from Personal Services”.

<div class="econ-review">
<section class="econ-review__section">
<h3>Key takeaways</h3>
<ul>
<li><strong>Labor demand is derived demand.</strong> In the competitive benchmark, a firm hires until the value of the marginal service equals its wage; product-market power, bargaining, law, and team production require added steps.</li>
<li><strong>Technology reorganizes labor demand rather than drawing from a fixed job quota.</strong> Machines can substitute for some tasks and complement others; product-demand and adjustment conditions determine industry and aggregate employment.</li>
<li><strong>Earnings and human capital reflect several margins.</strong> Productivity and skill costs matter, but so do working conditions, entry constraints, institutions, and bargaining; skills are portable and hard to seize physically, yet they can depreciate or be prevented from earning a return.</li>
</ul>
</section>
</div>