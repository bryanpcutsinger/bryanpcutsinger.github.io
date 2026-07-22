---
title: "Present Value and the Interest Rate"
topic: "T11 — Capital, Interest, and Time (Part A)"
course: "Principles of Microeconomics (FAU)"
sessions: ["Fall 2026 — content session 23 (Tue 11/10)"]
ue_anchors: ["UE 30", "UE 31", "UE 36 (front half)"]
be_anchors: ["BE 13 (PV/intermediation — partial)"]
ep_anchors: ["E&P ch. 6 (Capital Values and Interest) — usury as an ambiguous pejorative for interest; early Christian dogma, the Koran, and Communist doctrine each condemned it yet readmitted it under euphemism (Church 'discount', Communist 'efficiency index', Treasury 'discount')", "E&P ch. 16 (Wealth, Saving, and Investing) — Aristotle's 'sterile money'; interest paid before and after each condemnation because the demand for savings exceeded supply at a zero price; the Papacy charged interest as 'fees'/'gratuities'; Christians borrowed from Jews"]
univecon_anchors: ["University Economics (1994) ch. 11 p. 187 — Feather River project's low-discount-rate political-economy example"]
word_target: "3300-3700"
word_budget: 3700
status: approved        # scope-reduction R4 2026-07-21 (word_budget applied); M8 done gate 2026-07-20 (§10 A+B PASS); prior Stage-2 2026-06-15
audience: students
note: "Self-contained — assumes no access to the textbooks. Part A of two on Capital, Interest, and Time; Part B (Capital Values, Profit, and the Political Economy of Time) covers durable assets, wealth, profit, the rate package, and the political economy of time. This half builds the present-value tool and the determinants of the interest rate. Source-of-truth for the Part-A deck; section headers are claims that map to slide titles. UE 36 front half only (loan market); the money-supply/central-bank half is macro and out of scope. The consumer-finance applications are [EXPAND]/lecture-deferred but covered here (logged in §7)."
# brief: ../t11-capital-interest-time/brief.md
---

# Present Value and the Interest Rate

Almost every decision worth making spans time. You spend money now to earn a degree that pays off for decades. A firm builds a factory this year to sell goods for years. A government borrows today and taxes tomorrow. In all of these, costs and benefits land at different dates, which raises a problem we have so far ignored: how do you compare a dollar today with a dollar next year, or thirty years from now? You cannot just add them up. A thousand dollars promised long ago and a thousand dollars in your pocket today are not the same thing, and treating them as equal is one of the most common and expensive mistakes people make.

This topic gives you the tool that solves it. It is called *present value*, and it puts amounts arriving at different times onto a single ruler so they can be compared. This is the capitalization tool the course has been promising since T7, when future profit first got baked into today's asset price. Out of that one idea comes a surprising amount: what interest really is and where it comes from, how to price a loan, and why a future payment is worth less than a present one. We build the arithmetic first in this post, then point it at durable assets, your own earnings, and profit in the next. Everything here is one tool used over and over; state it clearly now and the rest of the topic falls out of it.

<aside class="econ-callout econ-objectives">
<p class="econ-callout__label">Learning objectives</p>
<p>By the end of this post you should be able to:</p>
<ul>
<li>Use P × (1 + r) = F to compound and P = F ÷ (1 + r) to discount, explain why present value shrinks as the horizon lengthens or the rate rises, and apply the Rule of 72 to reduce payoffs at different dates to one comparable figure.</li>
<li>Explain where interest comes from, the productivity of investment and time preference, and how the loan market sets it as the price of current income.</li>
<li>Value a stream of payments as an annuity or a perpetuity, show how a level loan payment splits into interest and principal, and use capital value to judge a multi-year venture even when nothing was borrowed.</li>
</ul>
</aside>

## A Future Dollar Is Worth Less Than a Present Dollar

Start with the most basic move. If you put $100 in an account paying 6 percent a year, in a year you have $106. The thing that turned $100 into $106 is the *rate of interest*, the rate at which a present amount grows into a future one. Write it as a formula and the whole topic unfolds from it:

P × (1 + r) = F

Here P is the present amount, r is the interest rate, and F is the future amount. With P = $100 and r = 0.06, F comes out to $106. This forward direction, present to future, is *compounding*: each year's interest itself earns interest, so growth does more than beginners expect. The table below shows what $1 grows to over time at various rates. Read it as a multiplier: at 7 percent for ten years, $1 becomes $1.97, so $350 becomes about $690.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Interest Rate</dt><dd>The rate at which a present amount grows into a future one.</dd></div>
<div><dt>Compounding</dt><dd>Growth in which each period's interest itself earns interest.</dd></div>
</dl>
</aside>

**Future value of $1 (what a present $1 grows to).** Selected rates and years.

| Years | 3% | 4% | 5% | 6% | 7% | 8% | 10% | 12% | 15% | 20% |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 1.03 | 1.04 | 1.05 | 1.06 | 1.07 | 1.08 | 1.10 | 1.12 | 1.15 | 1.20 |
| 3 | 1.09 | 1.13 | 1.16 | 1.19 | 1.23 | 1.26 | 1.33 | 1.41 | 1.52 | 1.73 |
| 5 | 1.16 | 1.22 | 1.28 | 1.34 | 1.40 | 1.47 | 1.61 | 1.76 | 2.01 | 2.49 |
| 10 | 1.34 | 1.48 | 1.63 | 1.79 | 1.97 | 2.16 | 2.59 | 3.11 | 4.05 | 6.19 |
| 15 | 1.56 | 1.80 | 2.08 | 2.40 | 2.76 | 3.17 | 4.18 | 5.47 | 8.14 | 15.41 |
| 20 | 1.81 | 2.19 | 2.65 | 3.21 | 3.87 | 4.66 | 6.73 | 9.65 | 16.37 | 38.34 |
| 30 | 2.43 | 3.24 | 4.32 | 5.74 | 7.61 | 10.0 | 17.4 | 30.0 | 66.21 | 237.4 |

A couple of entries are worth noting. Put $250 in at 7 percent for three years and you have about $306 ($250 × 1.23). And notice how fast money doubles: at 5 percent, $1 grows past $2 in about fourteen years; at 10 percent, in about seven. That regularity has a handy shortcut called the *Rule of 72*: divide 72 by the interest rate and you get the rough number of years it takes money to double. At 7 percent, 72 ÷ 7 is about ten years. At 12 percent, about six — a good enough approximation to do in your head.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>At 8 percent, about how many years does it take a sum of money to double? Work it out with the Rule of 72, then check your answer against the future-value table above.</p>
</aside>

Compounding also explains how modest-looking sums become large fortunes. A piece of land bought for $5,000 and worth $85,000 thirty years later has grown seventeenfold; the thirty-year row shows a seventeenfold gain at about 10 percent a year, the kind of return a broad stock-market investment has historically delivered. Compounding is quiet but relentless. The same arithmetic runs in a barnyard: a population of rabbits, or a stored stock of grain that is planted and harvested, grows by a net percentage each year, and that physical growth rate is just an interest rate wearing a different coat. Whenever something compounds at a steady percentage, you are looking at the rate at which a present amount grows into a future one.

## Present Value Reverses the Arithmetic

Now run the formula backward. If a future amount F is worth P × (1 + r) when it arrives, then an amount arriving in the future is worth less today, and we recover today's value by dividing instead of multiplying:

P = F ÷ (1 + r)

Take $220 due one year from now at 10 percent. Its present value is $220 ÷ 1.10 = $200. We say the future $220 has been *discounted* back to a present value of $200. The number you multiply by, 1 ÷ (1 + r), is the *discount factor*; here it is 0.909, so $220 × 0.909 = $200. This is the single most useful operation in finance, because it lets you take any amount arriving at any future date and express it in today's dollars, where it can be compared with anything else.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Present Value</dt><dd>Today's worth of an amount arriving in the future, found by discounting.</dd></div>
<div><dt>Discount Factor</dt><dd>The multiplier 1 ÷ (1 + r) that converts a future dollar into its present value.</dd></div>
</dl>
</aside>

The table below gives the discount factors directly: the present value of $1 received after the listed number of years (simply the reciprocals of the table above).

**Present value of $1 (today's value of $1 received in a future year).** Selected rates and years.

| Years | 3% | 4% | 5% | 6% | 7% | 8% | 10% | 12% | 15% | 20% |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 0.97 | 0.96 | 0.95 | 0.94 | 0.94 | 0.93 | 0.91 | 0.89 | 0.87 | 0.83 |
| 3 | 0.92 | 0.89 | 0.86 | 0.84 | 0.82 | 0.79 | 0.75 | 0.71 | 0.66 | 0.58 |
| 5 | 0.86 | 0.82 | 0.78 | 0.75 | 0.71 | 0.68 | 0.62 | 0.57 | 0.50 | 0.40 |
| 10 | 0.74 | 0.68 | 0.61 | 0.56 | 0.51 | 0.46 | 0.39 | 0.32 | 0.25 | 0.16 |
| 15 | 0.64 | 0.56 | 0.48 | 0.42 | 0.36 | 0.32 | 0.24 | 0.18 | 0.12 | 0.07 |
| 20 | 0.55 | 0.46 | 0.38 | 0.31 | 0.26 | 0.22 | 0.15 | 0.10 | 0.06 | 0.03 |

Two patterns in this table are themselves economic lessons. First, hold the rate fixed and read down a column: the farther into the future an amount lies, the smaller its present value. At 4 percent, $2,500 due in five years is worth $2,500 × 0.82 = $2,050, but the same $2,500 due in ten years is worth only $2,500 × 0.68 = $1,700. Distance in time eats into value, because over a longer wait, a smaller present sum could have grown to the target on its own. Second, hold the year fixed and read across a row: the higher the interest rate, the smaller the present value. That same $2,500 in five years is worth $1,950 at 5 percent but only $1,700 at 8 percent. A higher rate discounts future amounts more heavily.

Once you can do this, comparing options that pay off at different times becomes routine. Suppose someone offers you either $30,000 in ten years or $40,000 in fifteen years. Which is better? It depends on the rate. Discount each back to today and compare. At 6 percent, $30,000 in ten years is worth about $16,800 (0.56) and $40,000 in fifteen years about $16,800 (0.42), a near tie; at 4 percent the longer, larger prize pulls ahead. The lesson is not the particular answer but the method: reduce every alternative to its present value, then they sit on the same ruler. A subsidized loan reveals the same logic from the other side. A college "loan" of $1,000 at no interest, repaid years later, is partly a gift: the present value of the repayment is less than $1,000, and the difference is what the lender has handed you. The gap between the face amount and its present value is the real subsidy.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>Someone offers you either $30,000 in ten years or $40,000 in fifteen years. Why can't you say which is better until you settle on an interest rate, and what do you do to each amount to put them on the same ruler?</p>
</aside>

## Interest Is the Price of Current Income, Set Where Saving Meets Investment

We have used the interest rate as a given. Where does it come from, and why is it positive at all?

There are two reasons, and you should keep them distinct. The first is the *productivity of investment*. Resources set aside and put to work can yield more later: grapes left to ferment become wine worth more than the juice; grain stored and planted yields a larger harvest; grapes dried into raisins are worth more than the fresh fruit. (Here "more" means more value, not necessarily more physical stuff, a pile of raisins weighs less than the grapes it came from.) Investing simply means giving up some consumption now to get something more valuable later. Painting your own house instead of spending the weekend gaming is an investment, because you sacrifice leisure now for a preserved, more valuable house later. Because such opportunities exist, current resources are worth more than future ones.

But not every roundabout, time-consuming method pays off. The claim that "more roundabout production is always more productive" is false. Only the right methods in the right amounts add to wealth. So the productivity of investment is real but not automatic.

The second reason is *time preference*. People generally prefer goods sooner rather than later, partly from impatience, partly because the future is uncertain. Given the choice between a feast today and the same feast a year from now, most take it today. That preference, too, makes current income command a premium over future income.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key terms</p>
<dl class="econ-term-list">
<div><dt>Productivity of Investment</dt><dd>The capacity of resources put to work now to yield more value later.</dd></div>
<div><dt>Time Preference</dt><dd>The general preference for goods sooner rather than later.</dd></div>
</dl>
</aside>

Put these together in a market and the interest rate is a price like any other, set by supply and demand, the *price of current income in terms of future income*. People who want current income they don't yet have, to invest or to consume, demand it; people willing to part with current income in exchange for more future income supply it. The buyers and sellers meet in what we can call the loan market, and the price that clears it is the interest rate. If $100 today trades for a promise of $105 next year, the rate is 5 percent: r = (F − P) ÷ P = (105 − 100) ÷ 100.

In that market, the words run backward from ordinary usage. A *lender* is buying a future income (you hand over money now to buy the borrower's promise to pay later), and a *borrower* is selling future income (selling a claim on next year's money to get cash now). The demand for current income slopes down: at a lower interest rate, more investment projects clear the bar and more current income is demanded. The supply slopes up: a higher rate coaxes out more saving.

<figure class="econ-figure" style="margin:1.5em 0;">
<iframe src="/teaching/microeconomics/t11a-present-value-and-interest/figures/t11a-loan-market-interactive.html" title="Drag the horizontal interest-rate line up or down to see savers' offered current income and borrowers' wanted current income converge on the five-percent rate that clears the loan market." loading="lazy" style="width:100%; max-width:520px; aspect-ratio:4/5; border:1px solid #e3ddd3; border-radius:4px; background:#f7f4ef; display:block; margin:0 auto;"><p><a href="/teaching/microeconomics/t11a-present-value-and-interest/figures/t11a-loan-market-interactive.html">Open the interactive figure directly</a> or <a href="/teaching/microeconomics/t11a-present-value-and-interest/figures/t11a-loan-market.svg">view the static figure</a>.</p></iframe>
<figcaption><strong>The interest rate is the price of current income, and it settles where borrowing and saving match.</strong> Demand for more current income (from borrowers) slopes down; supply of current income offered (from savers) slopes up. Above the five-percent equilibrium rate, savers offer more than borrowers want and the surplus pushes the rate down; below it, borrowers want more than savers offer and the shortage pushes the rate up. Drag the rate line (or use the arrow keys) to see the gap close at the market-clearing rate. If the frame does not load, <a href="/teaching/microeconomics/t11a-present-value-and-interest/figures/t11a-loan-market-interactive.html">open the interactive figure directly</a> or <a href="/teaching/microeconomics/t11a-present-value-and-interest/figures/t11a-loan-market.svg">view the static figure</a>.</figcaption>
</figure>

It does not matter whether the current income is wanted for consumption or for investment; both wants press on the same market and help set the same rate. And though we often say that saving equals investment by definition, the economy still has to coordinate the people who save with the people who invest, because they are usually different people acting for different reasons. The saver setting aside money for retirement and the entrepreneur building a plant never meet, yet the interest rate brings their plans into line, rationing current income to its most valued uses, exactly as any price coordinates strangers.

One warning about what interest is not: it is not "the price of money." Printing more money does not push the interest rate down for long; mostly it raises the price level. The interest rate is the price of current versus future income, a real thing, and we are deliberately leaving the money-supply machinery to a later course.

## An Annuity Is a Stream, and a Perpetuity Lasts Forever

Most real decisions involve not a single future amount but a *stream* of them: a pension, a loan repaid in installments, a building that throws off rent for decades. A level stream of equal annual payments is an *annuity*. Its present value is just the sum of the discounted individual payments, but summing a column of discount factors by hand is tedious, so we tabulate the totals. The table below gives the present value of $1 received at the end of each year for the listed number of years, an *annuity factor*: multiply it by the annual payment to get the whole stream's present value.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Annuity</dt><dd>A level stream of equal payments made at the end of each year.</dd></div>
</dl>
</aside>

**Present value of $1 received at the end of each year (annuity factors).** Selected rates and years.

| Years | 3% | 4% | 5% | 6% | 7% | 8% | 10% | 12% | 15% | 20% |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 0.97 | 0.96 | 0.95 | 0.94 | 0.94 | 0.93 | 0.91 | 0.89 | 0.87 | 0.83 |
| 3 | 2.83 | 2.78 | 2.72 | 2.67 | 2.62 | 2.58 | 2.49 | 2.40 | 2.28 | 2.11 |
| 5 | 4.58 | 4.45 | 4.33 | 4.21 | 4.10 | 3.99 | 3.79 | 3.61 | 3.35 | 2.99 |
| 10 | 8.53 | 8.11 | 7.72 | 7.36 | 7.02 | 6.71 | 6.15 | 5.65 | 5.02 | 4.19 |
| 15 | 11.94 | 11.12 | 10.38 | 9.71 | 9.11 | 8.56 | 7.61 | 6.81 | 5.85 | 4.68 |
| 20 | 14.88 | 13.59 | 12.46 | 11.47 | 10.59 | 9.82 | 8.51 | 7.47 | 6.26 | 4.87 |
| 30 | 19.60 | 17.29 | 15.37 | 13.77 | 12.41 | 11.26 | 9.43 | 8.06 | 6.57 | 4.98 |

This one table does enormous work. A three-year annuity of $1,000 at 8 percent is worth $1,000 × 2.58 = $2,580. If your rich uncle buys you fifteen years of $50,000 a year, beginning next year, at a 10 percent rate the gift is worth $50,000 × 7.61 = $380,500 today, not the $750,000 you will eventually collect; that gap between the headline sum and the present value is exactly the point of the exercise, and it is the same gap that turns a no-interest "loan" or a below-market employee-stock loan into a partial gift. The factor also runs in reverse to find an implied rate. If $500,000 today buys you a fifteen-year stream of equal payments and you want to know the built-in interest rate, divide and search the table: $500,000 ÷ 7.61 ≈ $65,700 a year at 10 percent. The same reverse lookup answers questions like "my grandparents sold their house for a stream of payments; what interest rate is built in?", divide the price by the per-dollar annuity factor and read the rate off the table.

The same machinery prices an ordinary loan, and it clears up something most borrowers never notice. Taking out a mortgage or car loan repaid in equal yearly (or monthly) installments means selling the lender an annuity: the loan amount is the present value, and the level payment is whatever annual figure makes that stream's present value equal the sum you borrowed. Run the annuity table in reverse to find it. Borrow $80,000 over twenty years at 5 percent, and the twenty-year, 5 percent annuity factor (about 12.46) says the level payment is roughly $80,000 ÷ 12.46, about $6,400 a year.

Every one of those level payments splits into two pieces, interest on the balance still owed plus a repayment of principal, and the mix shifts over the life of the loan. Early on, you owe a lot, so most of the payment is interest and little goes to principal; as the balance falls, the interest piece shrinks and more of each payment chips away at principal. Your *equity*, the part of the asset you actually own free and clear, therefore builds slowly at first and then accelerates. The table below traces the first two years of that $80,000 loan.

**How a level loan payment splits into interest and principal (first two years).** $80,000 borrowed at 5%, level payment $6,400/year.

| Year | Balance owed at start | Interest (5% of balance) | Principal repaid (payment − interest) | Equity built this year |
|---|---|---|---|---|
| 1 | $80,000 | $4,000 | $2,400 | $2,400 |
| 2 | $77,600 | $3,880 | $2,520 | $2,520 |

In the first year, $4,000 of the $6,400 payment just covers interest, leaving $2,400 to build equity. In the second year, you owe less ($77,600), so interest falls to $3,880 and $2,520 of the same payment goes to principal. The payment never changes, but its composition does, which is why equity builds faster over time. It is the present-value arithmetic of an annuity, read one year at a time.

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>Your loan payment is the same dollar figure every year, yet your equity builds faster and faster over time. Why does the interest piece of each payment keep shrinking as the years pass?</p>
</aside>

Streams need not be level. When the yearly amounts vary, you discount each separately and add. The next table works a six-year stream at 8 percent. Multiply each future amount by its discount factor, then sum the present-value column.

**Present value of a six-year varying annuity at 8%.**

| Year | Future amount | Discount factor (8%) | Present value |
|---|---|---|---|
| 1 | $1,000 | 0.926 | $926 |
| 2 | $2,000 | 0.857 | $1,714 |
| 3 | $3,000 | 0.794 | $2,382 |
| 4 | $3,000 | 0.735 | $2,205 |
| 5 | $2,000 | 0.681 | $1,362 |
| 6 | $1,000 | 0.630 | $630 |
| **Total** | | | **$9,219** |

This table delivers a deeper lesson: a present value changes the instant expectations about the future change, not when the future arrives. Suppose news today doubles the expected receipts in years five and six to $4,000 and $2,000. The present value jumps immediately from $9,219 to $11,211. Nothing has actually happened yet in years five or six; only the anticipation changed. The same is true of an anticipated future tax cut or any other foreseen change: today's value moves the moment the expectation forms. We will come back to this in Part B, when we talk about politics and about profit.

Now stretch the stream out forever. An annuity that pays a constant amount in every future year, without end, is a *perpetuity*, and it has a simple value:

P = A ÷ r

The present value of a perpetuity is just the annual amount divided by the interest rate. A perpetuity of $1 a year at 5 percent is worth $1 ÷ 0.05 = $20. That seems impossibly small for an endless stream, until you see why: invest $20 at 5 percent, collect the $1 of interest each year, spend it, and the $20 is still there to repeat the trick forever. The distant future barely adds anything, because those far-off dollars are discounted to almost nothing. The next table makes this concrete by splitting a perpetuity into its first fifty years and everything after.

<aside class="econ-callout econ-termset">
<p class="econ-callout__label">Key term</p>
<dl class="econ-term-list">
<div><dt>Perpetuity</dt><dd>A stream that pays a constant amount every year forever.</dd></div>
</dl>
</aside>

**How much of a perpetuity's value comes from the distant future.**

| Interest rate | Present value of first 50 years | Present value of year 51 onward | Present value of entire perpetuity | Share beyond year 50 |
|---|---|---|---|---|
| 3% | $25.70 | $7.30 | $33.33 | about 22% |
| 5% | $18.30 | $1.70 | $20.00 | about 8.5% |
| 10% | $9.91 | $0.09 | $10.00 | under 1% |

At 10 percent, everything beyond the first fifty years is worth nine cents on a ten-dollar claim. This is why a thousand-year stream is worth barely more than a perpetuity.

## Interest Is a Cost Even When You Never Borrow

A costly mistake in business is thinking that if you don't borrow, interest costs you nothing. Interest is the cost of *waiting*: the cost of having something later rather than sooner, and that cost is there whether or not a loan is involved.

Suppose a venture spends $1,000 at the start of year one and collects $1,300 at the end of year two, with nothing left over. Is it profitable? You cannot just subtract $1,000 from $1,300 and declare a $300 profit, because those amounts sit two years apart. You have to capitalize both to a common date using the interest rate. The table below values everything at both dates, start and end, with the same result.

**Capitalizing costs and receipts to a common date, at a 7% interest rate.**

| | Capitalized to start of year 1 | Capitalized to end of year 2 |
|---|---|---|
| Outlay ($1,000 at start of year 1) | $1,000 | $1,000 × 1.07 × 1.07 = $1,145 |
| Receipts ($1,300 at end of year 2) | $1,300 ÷ (1.07 × 1.07) = $1,136 | $1,300 |
| Result | $1,136 − $1,000 = **$136 profit** | $1,300 − $1,145 = **$155 profit** |

At 7 percent the venture earns a profit (the two figures, $136 and $155, are the same profit measured at different dates). But the answer depends on the interest rate. Redo it at 15 percent and the project turns into a loss:

**The same venture at a 15% interest rate.**

| | Capitalized to start of year 1 | Capitalized to end of year 2 |
|---|---|---|
| Outlay ($1,000 at start of year 1) | $1,000 | $1,000 × 1.15 × 1.15 = $1,322 |
| Receipts ($1,300 at end of year 2) | $1,300 ÷ (1.15 × 1.15) = $983 | $1,300 |
| Result | $983 − $1,000 = **$17 loss** | $1,300 − $1,322 = **$22 loss** |

No money was borrowed in either case, yet the interest rate decides whether the venture makes money. This is why a firm flush with its own cash is not immune to interest rates: it can always lend its funds out at the market rate instead of tying them up in a project, so the market rate still binds. Ignore interest and you will count phantom profits by adding up dollars from different years as if they were the same dollars. That is also why a lottery paying "$1,000,000" as $100,000 a year for ten years is not really a million-dollar prize: its present value is smaller, because the later payments are worth less today. Capital value, costs and receipts discounted to one date, is therefore the honest measure of cost in any decision that spans time. (Why this is also the honest measure of *profit*, and what profit precisely means, is a thread we pick up in Part B.)

<aside class="econ-callout econ-check">
<p class="econ-callout__label">Pause and check</p>
<p>The venture spends only its own cash and borrows nothing, yet at a 15 percent interest rate it runs a loss. If no loan was ever taken out, where does the interest cost come from?</p>
</aside>

<div class="econ-review">
<section class="econ-review__section">
<h3>Key takeaways</h3>
<ul>
<li><strong>A present dollar beats a future one.</strong> P × (1 + r) = F compounds forward and P = F ÷ (1 + r) discounts back; present value shrinks the farther off the horizon lies and the higher the rate, and the Rule of 72 tells you roughly how fast a sum doubles.</li>
<li><strong>Interest is the price of current income.</strong> It comes from the productivity of investment and time preference, and the loan market sets it where saving meets investment.</li>
<li><strong>A stream has one present value, and waiting has a real cost.</strong> An annuity multiplies the payment by a table factor, a perpetuity is just A ÷ r, a level loan payment splits into interest and principal, and capital value discounted to one date is the honest way to judge a multi-year choice, even when you never borrow.</li>
</ul>
</section>
</div>