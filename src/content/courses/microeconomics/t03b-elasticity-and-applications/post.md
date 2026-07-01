---
title: "Elasticity and the Applications of Demand"
topic: "T3 — Elasticity and the Applications of Demand"
course: "Principles of Microeconomics (FAU)"
sessions: ["Fall 2026 — content session 5 (Tue 9/8)"]
ue_anchors: ["UE 8", "UE 9"]
be_anchors: []
word_target: "2800-3800"
status: approved        # one-per-lecture split; approved 2026-07-01
audience: students
note: "Self-contained — assumes no access to the textbooks. Source-of-truth for the session-5 deck; section headers are claims that map to slide titles. Verbal-marginal throughout: no indifference curves, no measured surplus triangles, no elasticity algebra in the body. Follows the session-4 demand post; a short foundational intro re-establishes the downward-sloping demand curve and marginal worth so this post stands on its own."
# brief: ../t03-demand-consumer-behavior/brief.md
---

# Elasticity and the Applications of Demand

The previous post established the machinery this one puts to work. The *first law of demand* says that at a higher price people buy a smaller quantity of a good, and at a lower price a larger one, holding everything else the same. Plotted with price up the vertical axis and quantity along the horizontal, that traces a demand curve sloping downward to the right and never upward. Why does it slope down? Because of *marginal personal worth*: the most you would pay for one more unit falls as you already have more, so each additional unit is worth less than the one before, and the curve that plots worth against quantity tilts downward. That diminishing worth is the engine under the whole law.

None of this assumes buyers carry a numerical schedule in their heads or do arithmetic at the register; the law describes how people behave when their options change, not what they consciously think. What the first law does *not* tell us is how much quantity moves when price changes, what that does to a seller's revenue, why time changes the answer, or why the same dollar charge can send the better grade of a good to the far side of the country. Those are this post's questions.

## Elasticity Measures How Sharply Quantity Responds to Price

The first law tells us which way quantity moves when price changes, not by how much. For that we need *elasticity*: the percentage change in quantity demanded divided by the percentage change in price. If a 1 percent rise in price brings a 3 percent drop in quantity, elasticity is 3. When that ratio is greater than one, demand is *elastic*, meaning quantity is highly responsive; when it is less than one, demand is *inelastic*, meaning quantity barely budges.

Two wording traps are worth disarming now. First, elasticity is a ratio of *percentages*, not an absolute amount. "The percentage change in quantity for a one-cent change in price" is wrong twice over: it should be a one-*percent* change in price, and a ratio of two percentage changes, never a per-penny figure. Second, elasticity measures movement along a curve. So "a 3 percent decrease in demand" is sloppy; it should be a 3 percent decrease in *quantity demanded*. Elasticity says nothing about a shift of the whole curve, only about sliding along one, so it pays to be exact.

Here is a demand schedule with the elasticity between successive points worked out, plus the market value (price times quantity) at each.

| Price | Quantity | Market value | Going down one row: % price cut | % quantity rise | Elasticity |
|---|---|---|---|---|---|
| $10 | 1 | $10 | — | — | — |
| $9 | 2 | $18 | 10% | 100% | 10 |
| $8 | 3 | $24 | 11.1% | 50% | 4.5 |
| $7 | 4 | $28 | 12.5% | 33% | 2.6 |
| $6 | 5 | $30 | 14.3% | 25% | 1.7 |
| $5 | 6 | $30 | 16.7% | 20% | 1.2 |
| $4 | 7 | $28 | 20% | 17% | 0.85 |
| $3 | 8 | $24 | 25% | 14% | 0.56 |
| $2 | 9 | $18 | 33% | 12.5% | 0.38 |
| $1 | 10 | $10 | 50% | 11.1% | 0.22 |

Two features jump out. First, elasticity changes as you move along a straight-line curve: large at high prices near the top, small at low prices near the bottom, passing through one somewhere in the middle. So you cannot speak of "the" elasticity of a demand curve as a single number; you have to say at what price. Second, and this is the most common student error, elasticity is not the slope. Two curves can have the very same slope yet different elasticities, and two curves with different slopes can share an elasticity at some price, so a flat-looking curve is not automatically the more elastic one. ("Inelastic," by the way, does not mean quantity fails to respond at all; that extreme is zero or perfect inelasticity. Inelastic just means the response is less than proportional.)

## Whether a Price Cut Helps a Seller Depends on Elasticity

Elasticity matters because it decides what happens to a seller's *total revenue* when the price changes. You can read the rule straight off the market-value column above.

When demand is elastic (greater than one), quantity responds more than proportionally, so a price cut raises total revenue and a price rise lowers it. The quantity effect wins. When demand is inelastic (less than one), quantity barely responds, so a price cut lowers total revenue and a price rise raises it. The price effect wins. At unit elasticity (equal to one), revenue is unchanged either way; it sits at its peak, the flat $30 stretch around the middle of the table. The whole thing fits in a small grid.

| | Demand elastic (e > 1) | Unit elastic (e = 1) | Demand inelastic (e < 1) |
|---|---|---|---|
| **Price rises** | Total revenue falls | Unchanged | Total revenue rises |
| **Price falls** | Total revenue rises | Unchanged | Total revenue falls |

This is why you can never say in the abstract whether a seller should raise or lower price to make more money. It depends entirely on where the seller is on the demand curve, which is to say on the elasticity there. It also lands on a point worth carrying forward: a seller raising revenue by exploiting inelastic demand is not the same as buyers being better off.

One caution to carry forward. Elasticity describes movement along an unchanged demand curve, the kind of price change driven by a shift in supply. If instead the price moved because the demand curve itself shifted, the elasticity of the old curve does not describe what happened. Always ask first whether you are sliding along a curve or watching one move.

![Two panels side by side: the left panel shows a supply curve shifting along a fixed demand curve so that elasticity applies; the right panel shows the demand curve itself shifting, with the supply curve fixed, where the old elasticity does not describe the new price-quantity outcome.](/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03-elasticity-shifts.svg)

*Left: a supply shift moves the equilibrium along a fixed demand curve. Elasticity of demand tells you how much quantity adjusts relative to the price change. Right: a demand shift moves the whole curve; the old elasticity is irrelevant because quantity changed for a different reason. The two cases require different analysis.*

## Demand Becomes More Elastic the Longer People Have to Adjust

There is a *second law of demand*, and it concerns time: demand is more elastic the longer the interval since a price change. People need time to find substitutes, rearrange their lives, and replace equipment, so the full response to a price change builds up gradually.

Gasoline is the standard case. Double the price overnight and consumption falls only a little at first; people still have the same cars and the same commutes. But over a year or three, they buy more efficient cars, move closer to work, carpool, and carmakers redesign their fleets. So consumption falls more after three years than after one. A common objection runs, "a 10 percent gas price rise won't change how much I drive tomorrow, so the law of demand is bogus." It is not. The law never promised an instant or universal response. Some people respond right away, more respond over time, and the market as a whole responds because some people do, even if you personally do not.

The neat way to picture this: any single demand curve is one member of a *fan* of curves radiating from the original price-quantity point. The short-run curve through that point is steep, because little adjustment has happened yet; the long-run curve through the same point is flatter, because more adjustment has accumulated. That fan is the visual signature of the second law.

![A fan of demand curves all radiating from a single initial price-quantity point, with the curve growing progressively flatter from the steep short-run curve through to the flat long-run curve, illustrating that demand becomes more elastic the longer the adjustment period.](/teaching/microeconomics/t03b-elasticity-and-applications/figures/t03-elasticity-fan.svg)

*The elasticity fan. All curves pass through the same initial price-quantity point, but the short-run curve (steep) shows little adjustment, while progressively flatter curves represent responses after more time has elapsed. The flattest curve is the long-run demand — the fullest adjustment. Any price change is associated with a different elasticity depending on the time horizon.*

## Three Different Demands, and Why the Difference Matters

We have to keep three demands straight, because they answer different questions. There is the *individual's demand*, one buyer's schedule, like the price-quantity schedule we started with. There is the *market demand*, the sum of all individual demands at each price, which determines a good's overall price. And there is the *demand facing a single seller*, the schedule of how much that one seller can sell at each price it might charge.

The last is subtle, and a bridge to a later topic, so I will preview it now. When such a seller wants to sell one more unit, it usually has to lower its price, and that lower price applies to all the units it sells, not just the extra one. So the extra revenue from that unit, its marginal revenue, is less than the price received. Later, when we study firms with some power over their price, this seller-facing demand is what the firm chooses a point on, weighing that gap between marginal revenue and price. File the idea away; it will do heavy lifting when we reach market power.

## A Higher Price Pushes You Away, but If You Own a Lot It Also Makes You Richer

When a good's price changes, two distinct forces act on how much you buy, worth separating in words even though we will not draw the apparatus some textbooks use to split them.

The first is the *substitution effect*. When a good gets more expensive relative to others, you lean away from it toward the now-relatively-cheaper alternatives. This force always pushes the same way: a higher own-price means less of the good. The second is the *wealth effect*, and its direction depends on your situation. A higher price for something you buy makes you a bit poorer in real terms, since your money buys less, which usually nudges you toward a little less of most goods. But here is the twist: if you own a lot of the good whose price rose, the higher price makes you richer, and that can push you toward consuming more.

The classic puzzle: you own a dairy farm and the price of milk rises. Do you drink more milk or less? Substitution says less, because milk is now dear relative to other drinks. But you are a big milk owner, so the higher price has made you wealthier, which pulls toward more. The net effect is genuinely ambiguous. For ordinary buyers, who do not own large stocks of the good, the substitution effect dominates and the wealth effect is too small to overturn the law, which is why demand curves reliably slope downward.

This wealth effect, when someone holds a large stock of the good whose price changes, is the nearest thing to a genuine exception to the law of demand, and even it is a shift of the curve, not an upward-sloping one. The supposed exceptions people more often raise turn out not to be exceptions at all. Consider prestige goods, the champagne and designer bags and luxury cars the well-off compete over. People sometimes claim the high price is itself the draw, so demand slopes upward. It does not. Wanting prestige raises the demand for the good, shifting its whole curve up and pushing the price higher, which is a higher demand curve leading to a higher price, not a curve that slopes the wrong way. Raise the price high enough and people still buy less; otherwise nothing would stop its price from climbing forever. A related case is a buyer who hesitates at a suspiciously low price, suspecting the item is fake or defective because cheapness signals poor quality. That is sensible, since price often does track quality, a genuine Rolex outsells a sidewalk knockoff. But it is not a violation: hold the buyer's belief about quality fixed, and a lower price still draws more purchases. The low price changed their estimate of quality, not their willingness to buy a good of given quality more cheaply.

This is also the place to define how income itself shifts demand. For a *normal good*, higher income shifts the whole demand curve right; you buy more as you get richer (a *superior good* is the strong case, where demand rises more than in proportion to income). For an *inferior good*, higher income shifts demand left; you buy less as you get richer, switching to better alternatives. So a rise in your income raises your demand for gasoline if gasoline is a normal good for you, shifting that curve outward. Notice this is a shift, driven by income, not a slide driven by the gas price.

## The Real Price Is the Relative Price

A good's dollar tag is not the price that governs your choice. What matters is its *relative price*: how much of other goods you give up to get it, not its figure in isolation. That distinction has a sharp consequence.

A good's price can fall relative to others even when its dollar price rises. Suppose candy goes from $4 to $5 while ice cream goes from $2 to $3. In dollars, candy got more expensive. But ice cream rose by a larger *percentage*, so candy is now relatively cheaper than it was: in terms of ice cream forgone, a candy bar costs less than before. When you hear "the price of X went up," always ask "relative to what?" A rising dollar price can hide a falling real one.

The same lens dissolves a seeming paradox. Why do people wait in line for small, run-down apartments while bigger, better ones sit available with no waiting list? Not because anyone prefers cramped to spacious. The better apartments are *priced* higher, which reduces the quantity demanded for them and clears the line, while the cheap ones are priced low enough to draw a crowd. The preference for more and better is intact; the price did the work.

## "Basic Needs" and "Priceless" Things Are Not Real Exceptions

One last set of supposed exceptions comes dressed in the language of urgency. People label some goods "basic needs" or call others "invaluable," as if the law of demand stopped at the door. It does not, and the language hides the choices actually being made.

When a city report says it "needs more golf courses because people don't play as often as they'd like," it has simply ignored price; at a price, the quantity people will use is finite, and golf courses are no different in kind from filet mignon or champagne in this respect. When officials announce that defense, schools, education, or energy are "basic needs," they are skipping the only real question, how much of each, given what must be given up to get it. Labeling a good essential does not exempt it from the trade-off; it only puts the trade-off out of sight.

The same incoherence infects "invaluable" and "priceless." If those words mean infinite value, they are empty, because everything in fact trades at a finite price and people make finite trade-offs every day. A student who calls a textbook "priceless" usually means only that it is hard to replace, not that they would surrender everything they own for it. Value is real but always finite, and always personal: you buy a newspaper only because the paper is worth more to you than the dollar, while the seller parts with it only because the dollar is worth more to him. If value were a fixed, objective property of the thing, nobody would ever trade, since no exchange could make both sides better off. The whole engine of the previous topic depended on value being subjective and differing across people.

## Adding the Same Charge to Two Goods Sends the Better One Away

I want to close with a striking application that shows the relative-price idea doing real work and has a memorable name: the "shipping the good apples out" theorem, due to Alchian and Allen.

Here is the puzzle. Why do the regions that grow the best produce so often ship their finest grade away and keep the ordinary stuff, so that you find better Maine lobster in Chicago than in Maine? The answer is pure relative price. Suppose California grows choice grapes that sell there for $1.00 a pound and standard grapes for $0.50 a pound. Now ship both to New York at the same transport cost of $0.50 a pound, regardless of quality.

| | California price | + transport | = New York price |
|---|---|---|---|
| Choice grapes | $1.00 | $0.50 | $1.50 |
| Standard grapes | $0.50 | $0.50 | $1.00 |

Look at the relative prices. In California, a pound of choice costs two pounds of standard ($1.00 versus $0.50). In New York, a pound of choice costs only 1.5 pounds of standard ($1.50 versus $1.00). Adding the same dollar charge to both grades has made the choice grapes *relatively cheaper* in New York. By the first law of demand, New Yorkers therefore buy a larger fraction of choice grapes than Californians do, with no appeal to differences in "taste." The fancy stuff gets shipped out because the transport charge lowers its relative price wherever it lands.

The mechanism is general: adding a constant amount to a high price and a low price shrinks the ratio between them. High and low meat at $10 and $5 stand in a 2-to-1 ratio; add $10 to each, making $20 and $15, and the ratio falls to 1.33-to-1, so the high grade becomes relatively cheaper. The same arithmetic explains a homier puzzle. Why is a couple with infants more likely to splurge on expensive theater than a childless couple? Because both face a fixed babysitter cost on top of the ticket, and that common charge shrinks the price ratio between the dear theater and the cheap movie, lowering the relative price of the expensive night out. Whenever a fixed charge rides on top of two options of different quality, it tilts choices toward the higher-quality one.

## What's Next

Step back and this half of the topic ties together. Elasticity tells us how sharply quantity responds to a price change, and therefore what that change does to a seller's revenue: a price cut helps only where demand is elastic. The response grows with time, which is the second law and its fan of curves. And the relative-price lens, capped by the good-apples theorem, shows that the real price of anything is always a price in terms of other goods.

We have studied only one blade of the scissors. We watched price drive quantity *demanded*, but treated price as if it just appeared. There is no fixed *supply* either, because how much gets produced also depends on price. Oil too costly to pump at $40 a barrel becomes worth pumping at $60. Next we turn to where price actually comes from, how the decisions of buyers and sellers meet in a market to settle on a price and a quantity together, and what happens when someone tries to override that price by law. Bring the slide-versus-shift distinction with you. You will need it the moment supply enters the room.