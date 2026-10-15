# Red Arse – How to Play

Race all 4 of your marbles from your **BASE**, once around the board, and into your **HOME** column. The first player with all 4 marbles home wins.

Rules marked *(house rule)* can be switched off on the setup screen; everything else is always on.

## Boards
- **6-player hex:** 6 sections, 84-hole track, 2–6 players.
- **4-player hex:** 4 sections, 56-hole track, 2–4 players. Same rules, shorter race.

## Your turn
- Roll the die and move one marble that many holes, clockwise.
- You can jump over other players' marbles, but **you can't jump over or land on your own**. (Star hops are the exception — see Stars.)
- If no move is possible, your turn ends (a 6 still gets you another roll).
- Dotted arrows show every move you can make. Tap a marble, or tap a landing spot to move straight there.
- If only one move is possible it's played automatically (can be switched off).

## Getting out of base
- Roll a **1** or a **6** to put a marble on your start hole (the colored ring next to your base). Switch off "Leave base on 1 or 6" to make it 6 only.

## Getting home
- After a full lap, turn into your home column. You need the exact count, and you can't jump your own marbles in home.
- **Locked in:** a home marble is safe only when it and every slot above it, starting from the top of the column, are filled with your own marbles, with no gaps. Locked marbles can't move and can't be killed.
- Home marbles that **aren't** locked in can still move: forward inside home, or back out of home on a 4.

## Kills ("aggravating")
- Land exactly on an opponent to send that marble back to their base.
- Backward moves and moves into the center can kill too.
- **Raid a home** *(house rule)*: when a move reaches another player's home entry, you may turn into their home column with the rest of the roll — forward, or backward on a 4 — but only to land exactly on one of their marbles that **isn't locked in**. Your marble then stays in their home and can only leave by backing out with a 4. The owner can kill it while it's there.

## Roll again when you…
- Roll a **6**.
- Get a **kill** *(house rule)*.
- End a move on an **inside corner** *(house rule)*: the corner holes on either side of any home column. Your own start hole counts when you back onto it with a 4, but not when a marble comes out of base onto it.
- One extra roll per move, even if more than one of these happens at once.

## Stars
- A marble that **starts its turn on a star** can hop clockwise from star to star, one star per pip.
- The whole roll must be used on stars: a 3 means exactly 3 stars, with no extra steps onto the track or into the center.
- Hops can pass over any marble on the stars in between (yours included), but can't land on your own.
- You can't hop past your own color's star.
- Stars only go clockwise. Backward moves never hop stars.

## Center hole
- A roll whose last step comes off a star can finish in the center. Examples: a 6 from your start hole, or a 1 from a star.
- Leave the center only on a **1**, to any star you choose.

## Backward 4 *(house rule)*
- 4 is the only roll that can move backward: 4 holes counter-clockwise instead of forward.
- If no forward move is possible on a 4, you **must** move backward.
- Backward moves follow the track one hole at a time: no star hops, can't go straight into your home, can't jump your own marbles. They can drop into the center and can kill.
- Home marbles that aren't locked in can back out of home.
- **Back-past-start shortcut** *(house rule)*: backing up behind your own start hole parks that marble just outside your home, ready to go in.

## Bots
- **Easy:** random legal moves (likes kills sometimes).
- **Medium:** scores every move (kills, getting home, leaving base, progress, corners) with a little randomness.
- **Hard:** same scoring, no randomness, and avoids ending next to opponents who could kill it.
- **Gang up on the leader:** Medium and Hard bots play "not to lose". The further a player pulls ahead in chance to win, the more the bots value killing that player's marbles, and Hard bots also try to sit 1–6 holes behind the leader's marbles, ready to strike.
- All bots roll the same fair die as humans.

## Chance to win
After every move the game plays the rest of the match out 300 times with medium-strength bots and shows each player's share of wins, next to their base on the board and in the player list.

## Move review
- Whenever a human player has a real choice (two or more moves that lead to different positions), the game plays the rest of the match out from every option, hundreds of times each, using the same dice for every option so they're compared fairly. It keeps going until the gap between your move and the best one is known to within about 1.5 points.
- Each move is graded by how much chance to win it gave up compared with the best option:
  - **Best:** under 1 point
  - **Good:** under 3
  - **Inaccuracy:** under 6
  - **Mistake:** under 12
  - **Blunder:** 12 or more
- **Stats** (rail and Stats window):
  - **Acc:** share of Best and Good moves.
  - **Blunders** and **Mistakes**.
  - **Missed kills:** a kill was the better move but wasn't taken.
  - **Lost to moves:** points of chance to win given up by moves that cost 3 or more, added up.
- **End-of-game review**, for each human player:
  - A chart of every player's chance to win over the game.
  - Grade counts and a one-line verdict: was it the moves, or the dice and the other players?
  - The 3 costliest moves with the better play, each with **Show on board** to see both moves drawn on the position.
- Bots aren't graded. Moves auto-played for an away player online aren't graded either. In online games every device grades the same moves the same way.
- The review runs in the background, so it never slows the game down.

## Online rooms
- Create a room for a 4-letter code and invite link; the host picks the board, adds bots and sets the turn timer.
- Run out of time and your turn is auto-played; miss two turns and you're auto-played until you tap **I'm back**.
- If someone leaves, their marbles are auto-played; if the host leaves, the next player becomes host.
