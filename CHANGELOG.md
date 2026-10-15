# Red Arse – Change log

## 2026-10-15
- **Online play is live:** Firebase project `red-arse` set up (anonymous sign-in, Realtime Database with room-only rules, vmannusa.github.io authorized) and connected in `config.js`. Choose **Play online** on the setup screen to create a room and share the invite link.
- **Move review:** every real choice a human player makes is graded Best, Good, Inaccuracy, Mistake or Blunder by how much chance to win it gave up versus the best move. New stats: accuracy, blunders, mistakes, missed kills and points lost to moves (Acc also shows in the side panel; Corners moved to the full Stats window to make room).
- **End-of-game review:** a chance-to-win chart for the whole game, plus a card for each human player with their grades, whether the moves or the dice cost them, and their 3 costliest moves with the better play and a **Show on board** button.
- **Bots gang up on the leader:** as someone's chance to win climbs, Medium and Hard bots go after that player's marbles first; Hard bots also line up behind the leader's marbles.
- **What's new** link on the setup screen (next to How to play) and in the rules, pointing to this change log.
- Filled gaps in the in-game rules: a 1 from a star goes into the center, unlocked home marbles can back out on a 4, and how chance to win is worked out. Added RULES.md and this change log to GitHub.
- **Home rules:** home marbles are locked in only once they fill the column from the top with no gaps. Unlocked home marbles can move, and can back out of home on a 4 (forced when nothing else can move).
- **Raid a home:** turn into (or back into) another player's home to kill an unlocked marble; the raider stays there until it backs out on a 4.
- **Win chance on the board:** each player's percentage now sits in a pill beside their base.
- **Phones held sideways:** board sizes to the screen height with the controls beside it, so the whole board fits.
- **Star hops** can pass your own marbles on the stars in between (still can't land on one).
- **Star hops are exact:** one star per pip, the whole roll used on stars, no extra steps onto the track or into the center.
- **No jumping your own marbles** on the track, forward or backward.
- **Chance to win** for every player, updated after each move.
- **Etched golfer** added to the board-center logo.
- **Die color** matches whoever is rolling.
- **Backward 4** no longer hops stars.
- **Kill = roll again**, and a full **How to play** guide (also on the setup screen).

## 2026-10-14
- **Online rooms** (Firebase): room codes, invite links, host-run bots, turn timer with auto-play for missed turns, "I'm back", host handover, spectators.
- **Move arrows:** dotted previews of every possible move; tap a landing spot to move.
- **Red Arse logo** in the center of the board.
- **4-player hex board** (4 sections, 56 holes).
- **Stats:** kills, 6s, 4s, corner rerolls, shortcuts and more, plus all-time wins per name on each device.
- **Inside corners:** ending a move on an edge corner hole gives another roll.
- **Center hole** clarified: a 6 from your start hole goes straight in.
- **Backward 4** can use the center; only a 4 moves backward.
- Renamed the game from Aggravation to **Red Arse**.
- First version: 6-player wooden hex board, bots (Easy/Medium/Hard), pass-and-play on one device.
