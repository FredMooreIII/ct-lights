// Northern CT Lights HQ -- practice schedule. Edit this file to add/update practices.
// Source: Crossbar team schedule (pulled 2026-10-25). "Off-Ice Training" = Crossbar "Practice" at ISCC Fitness
// Sports Performance; "Team Event" = Crossbar "Other". Relabel freely.
const PRACTICES = [
    {m:"August 2026", day:"Tue", date:"Aug 4", time:"6:00–7:30 PM", session:"Practice", loc:"ISCC NHL", optional:false},
    {m:"August 2026", day:"Sat", date:"Aug 29", time:"12:30–1:30 PM", session:"Practice", loc:"ISCC NHL", optional:false},
    {m:"September 2026", day:"Wed", date:"Sep 9", time:"6:00–7:00 PM", session:"Team Event", loc:"The Winged Bear", optional:false},
    {m:"September 2026", day:"Thu", date:"Sep 10", time:"5:30–6:15 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"September 2026", day:"Thu", date:"Sep 10", time:"6:30–7:30 PM", session:"Practice", loc:"ISCC NHL", optional:false}, // shared with Lights 8U Major, Lights 10U Goalie
    {m:"September 2026", day:"Mon", date:"Sep 14", time:"7:10–8:20 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"September 2026", day:"Thu", date:"Sep 17", time:"5:30–6:15 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"September 2026", day:"Thu", date:"Sep 17", time:"6:30–7:30 PM", session:"Practice", loc:"ISCC NHL", optional:false}, // shared with Lights 8U Major
    {m:"September 2026", day:"Mon", date:"Sep 21", time:"5:45–6:45 PM", session:"Training", loc:"Training Rink South", optional:false},
    {m:"September 2026", day:"Mon", date:"Sep 21", time:"7:10–8:20 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"September 2026", day:"Thu", date:"Sep 24", time:"5:30–6:15 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"September 2026", day:"Thu", date:"Sep 24", time:"6:30–7:30 PM", session:"Practice", loc:"ISCC NHL", optional:false}, // shared with Lights 8U Major, Lights 10U Goalie
    {m:"September 2026", day:"Mon", date:"Sep 28", time:"5:45–6:45 PM", session:"Training", loc:"Training Rink South", optional:false},
    {m:"September 2026", day:"Mon", date:"Sep 28", time:"7:10–8:20 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"October 2026", day:"Thu", date:"Oct 1", time:"5:30–6:15 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"October 2026", day:"Thu", date:"Oct 1", time:"6:30–7:30 PM", session:"Practice", loc:"ISCC NHL", optional:false}, // shared with Lights 8U Major
    {m:"October 2026", day:"Mon", date:"Oct 5", time:"5:45–6:45 PM", session:"Training", loc:"Training Rink South", optional:false},
    {m:"October 2026", day:"Mon", date:"Oct 5", time:"7:10–8:20 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"October 2026", day:"Thu", date:"Oct 8", time:"5:30–6:15 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"October 2026", day:"Thu", date:"Oct 8", time:"6:30–7:30 PM", session:"Practice", loc:"ISCC NHL", optional:false}, // shared with Lights 8U Major, Lights 10U Goalie
    {m:"October 2026", day:"Mon", date:"Oct 12", time:"5:45–6:45 PM", session:"Training", loc:"Training Rink South", optional:false},
    {m:"October 2026", day:"Mon", date:"Oct 12", time:"7:10–8:20 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"October 2026", day:"Thu", date:"Oct 15", time:"5:30–6:15 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"October 2026", day:"Thu", date:"Oct 15", time:"6:30–7:30 PM", session:"Practice", loc:"ISCC NHL", optional:false}, // shared with Lights 8U Major
    {m:"October 2026", day:"Mon", date:"Oct 19", time:"5:45–6:45 PM", session:"Training", loc:"Training Rink South", optional:false},
    {m:"October 2026", day:"Mon", date:"Oct 19", time:"7:10–8:20 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"October 2026", day:"Thu", date:"Oct 22", time:"5:30–6:15 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"October 2026", day:"Thu", date:"Oct 22", time:"6:30–7:30 PM", session:"Practice", loc:"ISCC NHL", optional:false}, // shared with Lights 8U Major, Lights 10U Goalie
    {m:"October 2026", day:"Mon", date:"Oct 26", time:"7:10–8:20 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"October 2026", day:"Thu", date:"Oct 29", time:"5:30–6:15 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"October 2026", day:"Thu", date:"Oct 29", time:"6:30–7:30 PM", session:"Practice", loc:"ISCC NHL", optional:false}, // shared with Lights 8U Major
    {m:"November 2026", day:"Mon", date:"Nov 2", time:"5:45–6:45 PM", session:"Training", loc:"Training Rink South", optional:false},
    {m:"November 2026", day:"Mon", date:"Nov 2", time:"7:10–8:20 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"November 2026", day:"Tue", date:"Nov 3", time:"5:30–6:30 PM", session:"Practice", loc:"ISCC NHL", optional:false},
    {m:"November 2026", day:"Thu", date:"Nov 5", time:"5:30–6:15 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"November 2026", day:"Thu", date:"Nov 5", time:"6:30–7:30 PM", session:"Practice", loc:"ISCC NHL", optional:false}, // shared with Lights 8U Major, Lights 10U Goalie
    {m:"November 2026", day:"Mon", date:"Nov 9", time:"5:45–6:45 PM", session:"Training", loc:"Training Rink South", optional:false},
    {m:"November 2026", day:"Mon", date:"Nov 9", time:"7:10–8:20 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"November 2026", day:"Thu", date:"Nov 12", time:"5:30–6:15 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"November 2026", day:"Thu", date:"Nov 12", time:"6:30–7:30 PM", session:"Practice", loc:"ISCC NHL", optional:false}, // shared with Lights 8U Major
    {m:"November 2026", day:"Mon", date:"Nov 16", time:"5:45–6:45 PM", session:"Training", loc:"Training Rink South", optional:false},
    {m:"November 2026", day:"Mon", date:"Nov 16", time:"7:10–8:10 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"November 2026", day:"Thu", date:"Nov 19", time:"6:10–6:55 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"November 2026", day:"Thu", date:"Nov 19", time:"7:10–8:20 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"November 2026", day:"Mon", date:"Nov 23", time:"7:10–8:20 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"November 2026", day:"Mon", date:"Nov 30", time:"5:45–6:45 PM", session:"Training", loc:"Training Rink South", optional:false},
    {m:"November 2026", day:"Mon", date:"Nov 30", time:"7:10–8:20 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"December 2026", day:"Thu", date:"Dec 3", time:"6:00–6:45 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"December 2026", day:"Thu", date:"Dec 3", time:"7:00–8:00 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"December 2026", day:"Mon", date:"Dec 7", time:"5:45–6:45 PM", session:"Training", loc:"Training Rink South", optional:false},
    {m:"December 2026", day:"Mon", date:"Dec 7", time:"7:10–8:10 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"December 2026", day:"Thu", date:"Dec 10", time:"5:30–6:15 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"December 2026", day:"Thu", date:"Dec 10", time:"6:30–7:30 PM", session:"Practice", loc:"ISCC NHL", optional:false}, // shared with Lights 8U Major
    {m:"December 2026", day:"Mon", date:"Dec 14", time:"5:45–6:45 PM", session:"Training", loc:"Training Rink South", optional:false},
    {m:"December 2026", day:"Mon", date:"Dec 14", time:"7:10–8:20 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"December 2026", day:"Thu", date:"Dec 17", time:"5:30–6:15 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"December 2026", day:"Thu", date:"Dec 17", time:"6:30–7:30 PM", session:"Practice", loc:"ISCC NHL", optional:false}, // shared with Lights 8U Major, Lights 10U Goalie
    {m:"December 2026", day:"Fri", date:"Dec 18", time:"7:00–8:30 PM", session:"Team Event", loc:"International Skating Center of Connecticut - ISCC", optional:false},
    {m:"December 2026", day:"Mon", date:"Dec 21", time:"5:45–6:45 PM", session:"Training", loc:"Training Rink South", optional:false},
    {m:"December 2026", day:"Mon", date:"Dec 21", time:"7:10–8:20 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"January 2027", day:"Mon", date:"Jan 4", time:"5:45–6:45 PM", session:"Training", loc:"Training Rink South", optional:false},
    {m:"January 2027", day:"Mon", date:"Jan 4", time:"7:10–8:20 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"January 2027", day:"Thu", date:"Jan 7", time:"5:30–6:15 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"January 2027", day:"Thu", date:"Jan 7", time:"6:30–7:30 PM", session:"Practice", loc:"ISCC NHL", optional:false}, // shared with Lights 8U Major, Lights 10U Goalie
    {m:"January 2027", day:"Mon", date:"Jan 11", time:"5:45–6:45 PM", session:"Training", loc:"Training Rink South", optional:false},
    {m:"January 2027", day:"Mon", date:"Jan 11", time:"7:10–8:20 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"January 2027", day:"Thu", date:"Jan 14", time:"5:30–6:15 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"January 2027", day:"Thu", date:"Jan 14", time:"6:30–7:30 PM", session:"Practice", loc:"ISCC NHL", optional:false}, // shared with Lights 8U Major
    {m:"January 2027", day:"Mon", date:"Jan 18", time:"5:45–6:45 PM", session:"Training", loc:"Training Rink South", optional:false},
    {m:"January 2027", day:"Mon", date:"Jan 18", time:"7:10–8:20 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"January 2027", day:"Thu", date:"Jan 21", time:"5:30–6:15 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"January 2027", day:"Thu", date:"Jan 21", time:"6:30–7:30 PM", session:"Practice", loc:"ISCC NHL", optional:false}, // shared with Lights 8U Major, Lights 10U Goalie
    {m:"January 2027", day:"Mon", date:"Jan 25", time:"5:45–6:45 PM", session:"Training", loc:"Training Rink South", optional:false},
    {m:"January 2027", day:"Mon", date:"Jan 25", time:"7:10–8:20 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"January 2027", day:"Thu", date:"Jan 28", time:"4:40–5:25 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"January 2027", day:"Thu", date:"Jan 28", time:"5:40–6:40 PM", session:"Practice", loc:"ISCC Training Rink South", optional:false},
    {m:"February 2027", day:"Mon", date:"Feb 1", time:"5:45–6:45 PM", session:"Training", loc:"Training Rink South", optional:false},
    {m:"February 2027", day:"Mon", date:"Feb 1", time:"7:10–8:20 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"February 2027", day:"Thu", date:"Feb 4", time:"5:30–6:15 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"February 2027", day:"Thu", date:"Feb 4", time:"6:30–7:30 PM", session:"Practice", loc:"ISCC NHL", optional:false}, // shared with Lights 8U Major, Lights 10U Goalie
    {m:"February 2027", day:"Mon", date:"Feb 8", time:"7:10–8:20 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"February 2027", day:"Thu", date:"Feb 11", time:"4:40–5:25 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"February 2027", day:"Thu", date:"Feb 11", time:"5:40–6:40 PM", session:"Practice", loc:"ISCC Training Rink South", optional:false},
    {m:"February 2027", day:"Mon", date:"Feb 15", time:"6:40–7:40 PM", session:"Practice", loc:"ISCC NHL", optional:false}, // shared with Lights 8U Major
    {m:"February 2027", day:"Thu", date:"Feb 18", time:"4:40–5:25 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"February 2027", day:"Thu", date:"Feb 18", time:"5:40–6:40 PM", session:"Practice", loc:"ISCC Training Rink South", optional:false}, // shared with Lights 10U Goalie
    {m:"February 2027", day:"Mon", date:"Feb 22", time:"5:45–6:45 PM", session:"Training", loc:"Training Rink South", optional:false},
    {m:"February 2027", day:"Mon", date:"Feb 22", time:"7:10–8:20 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"February 2027", day:"Thu", date:"Feb 25", time:"5:30–6:15 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"February 2027", day:"Thu", date:"Feb 25", time:"6:30–7:30 PM", session:"Practice", loc:"ISCC NHL", optional:false}, // shared with Lights 8U Major
    {m:"March 2027", day:"Mon", date:"Mar 1", time:"7:10–8:20 PM", session:"Practice", loc:"ISCC Training Rink North", optional:false},
    {m:"March 2027", day:"Thu", date:"Mar 4", time:"5:30–6:15 PM", session:"Off-Ice Training", loc:"ISCC Fitness Sports Performance", optional:false},
    {m:"March 2027", day:"Thu", date:"Mar 4", time:"6:30–7:30 PM", session:"Practice", loc:"ISCC NHL", optional:false}, // shared with Lights 8U Major, Lights 10U Goalie
];
