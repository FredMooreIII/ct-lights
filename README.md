# Northern CT Lights HQ — 10U Major (2026–27)

Static team site (GitHub Pages), forked from Lady Wolfpack HQ.

## Where things live
| What | File |
|---|---|
| Team name, colors, logo, passcodes, coaches, links, fund, tournaments | `data/team.js` |
| Games (scores go in `result: [us, them]`) | `data/schedule.js` |
| Practices | `data/practices.js` |
| Roster + stats | `data/roster.js` |
| League opponents, rink map pins, absences | `data/config.js` |
| Opponent logos | `data/logos.js` + `assets/logos/` |
| Player photos | `assets/roster-photos/First Last.jpeg` |
| Game MVPs / Player of the Week | `data/mvp.js`, `data/potw.js` |

Schedule source: https://www.northerncthockey.com/team/210444/schedule
Scores/rating: https://myhockeyrankings.com/team-info?t=25224&y=2026
Brand files (crest, wordmark, official colors): `assets/brand/` — originals in `assets/brand/source/`.
Live site: https://ctlights2017.online

## Hosting
GitHub Pages from `main` / root, custom domain via the `CNAME` file (ctlights2017.online).
DNS at Namecheap: 4 apex A records → 185.199.108.153 / .109 / .110 / .111, `www` CNAME → fredmooreiii.github.io.

## Heads-up
The passcode only hides the page. Every file in a public repo/site (including `data/roster.js`
and photos) is readable by anyone with the URL.
