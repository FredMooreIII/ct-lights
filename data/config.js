// Northern CT Lights HQ -- season config. Team identity/passcodes live in data/team.js.

// Opponents that count as LEAGUE games (lowercase, exactly as written in schedule.js).
// Any game not marked "Tournament" whose opponent isn't listed here shows as "Non-League".
// A game can also set its own type:"League" in schedule.js to skip this lookup.
// (schedule.js sets type on every game, so this list is only a fallback.)
const LEAGUE_OPPONENTS = new Set([
  // 'example opponent 12u',
]);

// Rink name (exactly as written in schedule.js) -> [lat, lng], used by the Home map.
const RINK_COORDS = {
    // ISCC sheets (as Crossbar names them)
    "ISCC NHL":[41.8930,-72.8019], "ISCC OLY":[41.8930,-72.8019], "ISCC Training Rink North":[41.8930,-72.8019],
    "Training Rink South":[41.8930,-72.8019], "ISCC Training Rink South":[41.8930,-72.8019],
    "International Skating Center of Connecticut - ISCC":[41.8930,-72.8019],
    // Away rinks -- approximate pins (map only); fix any that look off
    "Champions Upper Rink":[41.6142,-72.7103], "Avon Old Farms":[41.7785,-72.8400],
    "South Windsor Rink":[41.835,-72.579], "Newington Red":[41.6868,-72.7203],
    "Northford Blue":[41.3967,-72.8133], "Hamden rink":[41.3406,-72.9536],
    "Terry Conners X-Ice":[41.0846,-73.5196], "Danbury Liberty":[41.4040,-73.4520], "Danbury Patriot":[41.4040,-73.4520],
    "Frear Park Ice Rink":[42.7465,-73.6640], "East Haven Rink":[41.2870,-72.8710], "Norwich Ice Rink":[41.5360,-72.0860],
    "Winter Garden Rink":[41.2790,-73.5000], "Berkshire School":[42.0680,-73.4270], "Milford Ice Rink":[41.2390,-73.0610],
    "UCONN Rink":[41.8080,-72.2530], "Darien Ice House":[41.0700,-73.4720], "Mullins Center Community Ice Rink":[42.3900,-72.5320],
    "Bolton Ice Rink":[41.7880,-72.4510], "Boys & Girls Club of the Berkshires":[42.4480,-73.2560]
  };

// Players known to have missed a game (gameId -> [names]); keeps GP/goalie stats honest
// for games entered without attendance.
const KNOWN_ABSENCES = {};

// Optional per-goalie starting totals for games played before live tracking began.
// e.g. "Jane Doe": {gp:4, starts:1, changesIn:3, wins:1, losses:3, gameIds:["g123"]}
const GOALIE_BASELINES = {};
