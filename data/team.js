// Northern CT Lights HQ -- TEAM IDENTITY + SETTINGS.
// This is the one file to edit for anything about who the team is: name,
// colors, logo, passcodes, coaches, links, team fund, tournaments.
// Anything left blank ("" or null) simply hides on the site -- nothing breaks.
// Every value marked TBD below is a placeholder waiting on a real answer.

const TEAM = {
  // ---- Identity -----------------------------------------------------------
  name: "Northern CT Lights",          // full name: page title, passcode screen, footer
  wordmark: "CT Lights",                 // big header line (can be shorter, e.g. "CT Lights")
  short: "Lights",                     // used in scoreboards: "Lights 3 – Avon 2"
  level: "10U Major",                 // per Crossbar team name "Lights 10U Major"
  season: "2026–27",
  emoji: "💡",                          // passcode screen + a few section headers
  crest: "assets/brand/crest.png",     // official Northern CT Lights crest

  // ---- Colors (official CT Lights colors: navy / sky blue / grey) -----------
  // primary  = header/background color, accent = stripes/buttons/highlights,
  // secondary = light highlight color.
  colors: { primary: "#202946", accent: "#7FC4FF", secondary: "#808080" },
  // Optional jersey-back image (square, like the Wolfpack site's jersey.webp).
  // Leave null and the site draws a jersey in the team colors automatically.
  jersey: null,

  // ---- Access (client-side deterrent only -- NOT real security) ----------
  passcode: "LIGHTS2026",              // what families type to get in (case-insensitive)
  benchPasscode: "",                   // blank = no bench/live scoring on this site
  storagePrefix: "nctl",               // leave as-is; keeps this site's saved data separate

  // ---- Game settings -------------------------------------------------------
  periodMinutes: 12,
  arrivalMinutesBefore: 60,            // "arrive by" helper on game cards

  // ---- Links ---------------------------------------------------------------
  instagram: "northernlightsu10major",
  league: { name: "CHC 10U Open · CGHL (CT) 10U Div 2", url: "", division: "10U Girls" },
  mhr: { url: "https://myhockeyrankings.com/team-info?t=25224&y=2026", rating: 73.5 }, // rating as of 2026-10-25; MHR updates Wednesdays
  scheduleSource: "https://www.northerncthockey.com/team/210444/schedule",
  orgSite: { name: "Northern CT Hockey", url: "https://northerncthockey.com" },

  homeRink: {
    name: "International Skating Center of CT (ISCC)",
    address: "1375 Hopmeadow St, Simsbury, CT 06070",
  },

  // ---- People ----------------------------------------------------------------
  staff: [
    // From the Crossbar team page (2026-10-25). Phone numbers deliberately left off the site.
    { role: "Head Coach", name: "Jesse Fable" },
    { role: "Assistant Coach", name: "Brian Clark" },
    { role: "Assistant Coach", name: "Scott Mallozzi" },
    { role: "Assistant Coach / Scheduler", name: "Chris Spada" },
    { role: "Team Manager / Locker Room Monitor", name: "Mindy Manganello" },
    { role: "Locker Room Monitor", name: "Melissa Perotti" },
    { role: "Locker Room Monitor", name: "Erin Fable" },
  ],

  // ---- Optional extras (set to null to hide the card) -----------------------
  fund: null,
  // fund: { balance: "$0.00", venmo: "handle-without-@", other: "Cash / check to the team manager" },

  funForm: null,
  // funForm: { title: "Get to Know the Team", blurb: "Quick on/off-ice trivia form.", url: "https://docs.google.com/forms/..." },

  tournaments: [
    // { name: "Example Thanksgiving Tournament", dates: "Nov 27–29, 2026", location: "Avon, CT",
    //   url: "https://...", urlLabel: "Event site", rinks: "Rink A · Rink B", hotelUrl: "" },
  ],
};
