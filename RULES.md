# Red Arse – How to Play

Race all 4 of your marbles from your **BASE**, once around the board, and into your **HOME** column. The first player with all 4 marbles home wins.

Every rule can be switched on or off on the setup screen. Rules marked *(house rule)* aren't in the original written rules.

## Boards
- **6-player hex:** 6 sections, 84-hole track, 2–6 players.
- **4-player hex:** 4 sections, 56-hole track, 2–4 players. Same rules, shorter race.

## Who goes first
- Everyone rolls at the start; the highest roll goes first, and tied players roll again. Play then goes clockwise. (Switch off "Highest roll goes first" to let the first seat start.)

## Your turn
- Roll the die and move one marble that many holes, clockwise.
- You can jump over other players' marbles, but **you can't jump over or land on your own**. (Inside-corner hops are the exception — see Inside corners.)
- If no move is possible, your turn ends (a 6 still gets you another roll).
- Dotted arrows show every move you can make. Tap a marble, or tap a landing spot to move straight there.
- If only one move is possible it's played automatically (can be switched off).
- **Turn timer:** human players have 30 seconds (adjustable on the setup screen, or Off) to roll, and again to move. When it runs out the game rolls and moves for them. Moves played by the timer aren't graded in the move review.
- **Game clock:** total game time shows in the turn panel and on the winner screen.

## Getting out of base
- Roll a **1** or a **6** to put a marble on your start hole (the colored ring next to your base). Switch off "Leave base on 1 or 6" to make it 6 only.

## Getting home
- After a full lap, turn into your home column. You need the exact count, and you can't jump your own marbles in home.
- **Locked in:** a home marble is safe only when it and every slot above it, starting from the top of the column, are filled with your own marbles, with no gaps. Locked marbles can't move and can't be killed.
- Home marbles that **aren't** locked in can still move: forward inside home, or back out of home on a 4.

## Kills ("aggravating")
- Land exactly on an opponent to send that marble back to their base.
- Backward moves and moves into the center can kill too.
- **Raid a home**: when a move reaches another player's home entry, you may turn into their home column with the rest of the roll — forward, or backward on a 4 — but only to land exactly on one of their marbles that **isn't locked in**. Your marble then stays in their home and can only leave by backing out with a 4. The owner can kill it while it's there.

## Roll again when you…
- Roll a **6**.
- Get a **kill**.
- End a move on an **outside corner**: the corner holes on the board's edge, on either side of any home column. Your own start hole counts when you back onto it with a 4, but not when a marble comes out of base onto it.
- One extra roll per move, even if more than one of these happens at once.
- **Claim it** (human players): you have **5 seconds** to roll again. Nothing reminds you; miss it and your turn passes. Missed re-rolls show in the feed and your stats. (Switch off "Claim your re-rolls" to roll again automatically.)

## Inside corners (the stars)
- A marble that **starts its turn on an inside corner** may hop clockwise from corner to corner, one corner per pip, instead of moving along the track.
- The whole roll must be used on corners: a 3 means exactly 3 corners, with no extra steps onto the track or into the center.
- Hops can pass over any marble on the corners in between (yours included), but can't land on your own.
- You can't hop past your own color's inside corner (the one before your home).
- **Backward hop on a 4** (6-player board): instead of hopping forward, a marble on an inside corner can hop exactly **4 inside corners counter-clockwise**. Going backward it **can** pass your own home corner. If that takes it behind your start, the back-past-start shortcut applies. It can kill, but can't land on your own marble. On the 4-player board 4 corners back is a full circle, so there's no backward hop there.

## Center hole
- A roll whose last step comes off an inside corner can finish in the center. Examples: a 6 from your start hole, or a 1 from an inside corner.
- Leave the center on a **1** or a **6**, to any inside corner you choose (a 6 still rolls again).

## Backward 4
- On a **4** you choose: forward, or 4 holes counter-clockwise. 4 is the only roll that can move backward.
- If no forward move is possible on a 4, you **must** move backward.
- Backward moves follow the track one hole at a time (except the backward inside-corner hop above), can't go straight into your home, can't jump your own marbles. They can drop into the center and can kill.
- Home marbles that aren't locked in can back out of home.
- **Back-past-start shortcut** *(house rule)*: backing up behind your own start hole parks that marble just outside your home, ready to go in.

## Bots
- **Bot speed:** Normal, Fast or Turbo, on the setup screen or under the die during a game. It only speeds up bots' turns; humans always play at normal pace.
- **Easy:** random legal moves (likes kills sometimes).
- **Medium:** scores every move (kills, getting home, leaving base, progress, corners) with a little randomness.
- **Hard:** same scoring, no randomness, and avoids ending next to opponents who could kill it.
- **Gang up on the leader:** Medium and Hard bots play "not to lose". The further a player pulls ahead in chance to win, the more the bots value killing that player's marbles, and Hard bots also try to sit 1–6 holes behind the leader's marbles, ready to strike.
- All bots roll the same fair die as humans.

## Chance to win
After every move the game plays the rest of the match out 300 times with medium-strength bots and shows each player's share of wins, in a pill next to their base on the board.

## Move review
- Whenever a human player has a real choice (two or more moves that lead to different positions), the game plays the rest of the match out from every option, hundreds of times each, using the same dice for every option so they're compared fairly. It keeps going until the gap between your move and the best one is known to within about 1.5 points.
- Each move is graded by how much chance to win it gave up compared with the best option:
  - **Good:** under 3 points
  - **Misstep:** 3 to under 10
  - **Blunder:** 10 or more
- Close calls get extra playouts (up to 2,400 per option) until the gap is clearly on one side of a grade line, and moves are graded on the cautious end of the estimate, so a move is only flagged when it clearly cost something.
- When two choices would read the same ("left the center"), the review names where each one goes ("to your home corner", "to Red's inside corner").
- "Left a marble in danger" counts opponents who could hop onto that inside corner, as well as ones 1–6 holes behind.
- **Stats** (Players & stats panel and Stats window):
  - **Acc:** share of Good moves.
  - **Missteps** and **Blunders**.
  - **Missed re-rolls:** re-rolls not claimed within 5 seconds.
  - **Missed kills:** a kill was the better move but wasn't taken.
  - **Lost to moves:** points of chance to win given up by moves that cost 3 or more, added up.
- **End-of-game review**, for each human player:
  - A chart of every player's chance to win over the game.
  - Grade counts and a one-line verdict: was it the moves, or the dice and the other players?
  - **Every misstep and blunder**, in order, with how many points it cost, the better play, and **what was missed** when it's a known pattern: the win, a kill, getting home, the back-past-start shortcut, a re-roll corner, getting a marble out, the center, an inside-corner hop, leaving your start hole blocked (so the next marble can't come out), or leaving a marble in danger. Each has **Show on board** to see both moves drawn on the position.
- Moves played by the turn timer aren't graded.
- Bots aren't graded. Moves auto-played for an away player online aren't graded either. In online games every device grades the same moves the same way.
- The review runs in the background, so it never slows the game down.

## Online rooms
- **Game feed and chat:** moves, kills, rolls for first, and players going away or coming back all show in the game feed. In online games the feed also has a chat bar and quick-chat buttons (COCKED, Nice roll, GG, plus "Back it up Terry" after a 4 and "Nice 1" after a 1). Messages are up to 200 characters, a few per few seconds, and stay with the room.
- Create a room for a 4-letter code and invite link; the host picks the board, adds bots and sets the turn timer.
- Run out of time and your turn is auto-played; miss two turns and you're auto-played until you tap **I'm back**.
- If someone leaves, their marbles are auto-played; if the host leaves, the next player becomes host.
