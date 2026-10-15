# Red Arse

The wooden-board marble game (6-player or 4-player hex board) with bots,
pass-and-play on one device, and online rooms with friends.

**Play:** https://vmannusa.github.io/red-arse/

- [How to play (full rules)](RULES.md)
- [Change log](CHANGELOG.md)

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole game. |
| `config.js` | Online play settings. `null` = offline only (bots + pass-and-play). |
| `database.rules.json` | Security rules to paste into Firebase Realtime Database. |
| `RULES.md` | The full rules. |
| `CHANGELOG.md` | What changed and when. |

## Part 1: Host it free on GitHub Pages

1. Create a **public** repository on github.com named `red-arse`.
2. **Add file > Upload files**, drop in `index.html`, `config.js`, `database.rules.json`, `README.md`, and commit.
3. **Settings > Pages**: Source "Deploy from a branch", branch `main`, folder `/ (root)`, Save.
4. After about a minute the game is live at `https://<your-username>.github.io/red-arse/`.

Bots and pass-and-play work right away. Online rooms stay hidden until Part 2 is done.

## Part 2: Turn on online play with Firebase (free Spark plan)

**Status: done (Oct 2026).** Project `red-arse`, Realtime Database at `red-arse-default-rtdb` (us-central1), anonymous sign-in on, `vmannusa.github.io` authorized, and `config.js` filled in. The steps below are kept for reference.

1. Go to https://console.firebase.google.com, **Create a project** (e.g. `red-arse`). Google Analytics is not needed.
2. **Build > Authentication > Get started > Sign-in method**: enable **Anonymous**.
3. **Authentication > Settings > Authorized domains > Add domain**: `<your-username>.github.io`
4. **Build > Realtime Database > Create database**: pick the closest location (us-central1), start in **locked mode**.
5. In the database's **Rules** tab, paste the contents of `database.rules.json` and **Publish**.
6. **Project settings (gear) > General > Your apps > Web (`</>`)**: register an app (no Firebase Hosting needed) and copy the `firebaseConfig` object.
7. Paste it into `config.js` in place of `null` (keep `window.RED_ARSE_FIREBASE = { ... };`). Make sure it includes `databaseURL`.
8. Commit `config.js` to the repo. In a minute the setup screen shows **Play online**.

## How online rooms work

- **Create room** gives a 4-letter code and an invite link. Friends open the link, type a name, and join.
- The host (first person in the room who's still connected) picks the board, adds bots, sets the turn timer, and starts.
- If someone's timer runs out, their turn is auto-played. After two missed turns they're auto-played every turn until they tap **I'm back**.
- If someone closes the page, their marbles are auto-played. If the host leaves, the next player becomes host automatically.
- Rejoining: open the same invite link again on the same device and you get your seat back.
- Anyone who opens the link after the game started can watch.

## Testing online play without Firebase

Open the game with `?net=local` at the end of the address and use two tabs in the same browser.
The tabs share a pretend database, so you can try rooms, bots, timers and leaving.
