import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, Calendar, MapPin, Trophy, Users, Clock, Info } from 'lucide-react';
import { PAKISTAN_SCHEDULE } from '../constants';

export default function PakistanVsBangladesh2026Schedule() {
  const seriesName = 'Pakistan Tour of Bangladesh (Test Series)';
  const matches = PAKISTAN_SCHEDULE.filter(m => m.series === seriesName);

  useEffect(() => {
    // We already have Helmet for the title, keeping this legacy update as well for consistency
    document.title = "Pakistan vs Bangladesh 2026 Schedule | Match Dates & Details";
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>Pakistan vs Bangladesh 2026 Schedule | Match Dates & Details</title>
        <meta name="description" content="Check Pakistan vs Bangladesh 2026 schedule, match dates, venues, timings and full series details. Complete schedule in one place." />
        <meta name="keywords" content="Pakistan vs Bangladesh 2026, match schedule, test series Pakistan Bangladesh, cricket fixtures" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Pakistan vs Bangladesh 2026 Schedule",
              "description": "Full Pakistan vs Bangladesh 2026 schedule, match dates, venues and timings.",
              "author": {
                "@type": "Person",
                "name": "PakCric Team"
              },
              "publisher": {
                "@type": "Organization",
                "name": "PakCric Hub",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://pakcric-schedule.online/logo.png"
                }
              },
              "datePublished": "2026-04-20",
              "dateModified": "2026-04-23"
            }
          `}
        </script>
      </Helmet>
      <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white hover:translate-x-[-4px] transition-transform mb-8">
        <ChevronLeft className="w-4 h-4" /> Back to Home
      </Link>

      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card-bg border border-card-border rounded-[40px] overflow-hidden shadow-2xl p-8 md:p-12"
      >
        <div className="mb-12">
          <span className="px-4 py-1 bg-pak-green text-white rounded-full text-[10px] font-bold uppercase tracking-[3px] mb-4 inline-block shadow-lg shadow-pak-green/20">
            Red-Ball Revival
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter leading-[0.9] mb-4">
            Pakistan Tour of Bangladesh 2026: Full Test Schedule, Venues & Series Analysis
          </h1>
          <p className="text-pak-green font-bold text-xs uppercase tracking-widest">1st Test: Dhaka • May 8 – May 12, 2026</p>
        </div>

        <div className="space-y-12">
          {/* Intro */}
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-white font-medium leading-relaxed mb-8 italic border-l-4 border-pak-green pl-6">
              The cricketing world is buzzing as the first Test match between Pakistan and Bangladesh in 2026 approaches. Scheduled to ignite on 8 May 2026 at the Sher-e-Bangla National Cricket Stadium in Dhaka, this high-stakes encounter is the opening fixture of a crucial two-Test series. For fans looking for the complete roadmap, check out our <Link to="/schedule" className="text-pak-green underline font-bold">Pakistan Match Schedule 2026</Link> for full details.
            </p>
            <p className="text-lg text-ink/80 leading-relaxed mb-6">
              The year 2026 is rapidly becoming one of the most significant chapters in modern cricket history for the subcontinental giants. Few encounters carry as much weight for regional pride, historical rivalry, and World Test Championship (WTC) points as the upcoming clash between Pakistan and Bangladesh. Following a spirited and highly contested white-ball leg in March, both nations are now preparing to transition into the rigorous, mentally draining, and technically demanding world of Test cricket this May.
            </p>
            <p className="text-lg text-ink/80 leading-relaxed mb-6">
              This series isn't just about winning a trophy; it's about cementing a legacy in the longest format of the game. Pakistan, under new leadership and a revamped selection strategy, is looking to prove their dominance in away conditions, while Bangladesh aims to turn their "Home of Cricket" into an impenetrable fortress. The tactical battles between captains, the duel between world-class spinners and master technicians, and the humidity of Dhaka will all play their roles in this five-day epic.
            </p>
          </div>

          {/* New Section: Historical Context */}
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tighter mb-6">Historical Rivalry: More Than Just Points</h2>
            <p className="text-ink/70 leading-relaxed mb-6">
              The history between Pakistan and Bangladesh on the cricket field is rich with narrative. From the early matches in the late 90s to the intense battles of the modern era, every meeting has been a display of high-quality subcontinental cricket. In the Test arena, Pakistan has traditionally held the upper hand, but the gap has closed significantly in recent years. Bangladesh's ability to produce world-class spinners who can exploit home conditions has turned them into a nightmare for visiting teams.
            </p>
            <p className="text-ink/70 leading-relaxed mb-6">
              In 2026, this rivalry enters a new phase. Both teams are undergoing a "Red-Ball Revival." Pakistan is focusing on building a balanced squad that can adapt to different surfaces, while Bangladesh is investing heavily in their fast-bowling stocks to complement their spin-heavy strategy. The Sher-e-Bangla stadium has witnessed some of the most memorable moments in this rivalry, and May 2026 promises to add another legendary chapter to this saga.
            </p>
          </div>

          {/* Schedule Summary Card */}
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
            <h2 className="text-xl font-display font-bold text-white uppercase tracking-tight mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-pak-green" />
              Detailed Venue Information & Dates
            </h2>
            <p className="text-ink/60 mb-8 leading-relaxed">
              The first Test will be hosted at the iconic Sher-e-Bangla National Cricket Stadium in Mirpur, Dhaka. Often referred to as the "Home of Cricket" in Bangladesh, this venue is renowned for its spin-friendly tracks, low bounce, and atmosphere that can become claustrophobic for the visiting batting line-up. For a comprehensive look at all fixtures, visit our <Link to="/schedule" className="text-pak-green hover:text-white transition-colors">full schedule page</Link>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-bg/50 p-4 rounded-2xl border border-white/5">
                <p className="text-[10px] font-bold text-pak-green uppercase tracking-widest mb-1">Match Type</p>
                <p className="text-sm font-bold text-white uppercase">1st Test Match (ICC WTC 2025-27)</p>
              </div>
              <div className="bg-bg/50 p-4 rounded-2xl border border-white/5">
                <p className="text-[10px] font-bold text-pak-green uppercase tracking-widest mb-1">Match Dates</p>
                <p className="text-sm font-bold text-white uppercase">Friday, 8 May – Tuesday, 12 May 2026</p>
              </div>
              <div className="bg-bg/50 p-4 rounded-2xl border border-white/5">
                <p className="text-[10px] font-bold text-pak-green uppercase tracking-widest mb-1">Session Timing</p>
                <p className="text-sm font-bold text-white uppercase">09:30 AM PST (Standard PST Timings)</p>
              </div>
              <div className="bg-bg/50 p-4 rounded-2xl border border-white/5">
                <p className="text-[10px] font-bold text-pak-green uppercase tracking-widest mb-1">Broadcaster</p>
                <p className="text-sm font-bold text-white uppercase">Live on PTV Sports & GTV</p>
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tighter mb-6">A Strategic Two-Phase Tour Analysis</h2>
            <p className="text-ink/70 leading-relaxed mb-6">
              The 2026 tour was strategically split into two distinct phases by the PCB and BCB to maximize player availability and accommodate a packed international schedule including various T20 leagues. The first phase concluded in March with a three-match ODI series. This phase saw the "Tigers" roar as Bangladesh secured a 2–1 series victory, showcasing their dominance in the 50-over format on home soil.
            </p>
            <p className="text-ink/70 leading-relaxed mb-6">
              However, the upcoming Test leg, beginning on 8 May, is a completely different challenge. This second phase follows the conclusion of a rigorous Pakistan Super League (PSL) season, meaning Pakistan’s players will enter the series with high match fitness but potentially some physical fatigue. The transition from the high-octane T20 environment of the PSL to the patient, tactical grind of red-ball cricket in Bangladesh will be the biggest test for the visitors.
            </p>

            <h2 className="text-3xl font-display font-bold text-pak-green uppercase tracking-tighter mt-12 mb-6">Strategic Significance: The ICC WTC Standings</h2>
            <p className="text-ink/70 leading-relaxed mb-6">
              This series is far more than just a bilateral contest; it is a critical juncture for both teams in the ICC World Test Championship standings. In the current cycle, every percentage point counts, and a clean sweep can catapult a team into the top three or relegate them to the bottom half of the table. Pakistan’s ambition is clear: they need to secure away wins to keep their path to the WTC final at Lord's alive. 
            </p>
            <p className="text-ink/70 leading-relaxed mb-6">
              For Bangladesh, this is about respect and consistency. Securing points against a major Asian powerhouse like Pakistan at home would be a massive statement of their growing stature. It would prove that their recent away successes weren't flukes and that they are ready to compete with the world's best for a spot in the WTC finals. The "WTC Factor" adds a layer of intensity to every session, where even a single wicket or a missed catch could have world-championship-level consequences.
            </p>
          </div>

          {/* Key Battles */}
          <section className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <Users className="w-6 h-6 text-pak-green" />
              Tactical Matchups: The Key Battles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.08] transition-all">
                <h3 className="text-lg font-bold text-white uppercase mb-4 flex items-center gap-2">
                  Spin Mastery vs. Technical Grit
                </h3>
                <p className="text-xs text-ink/60 leading-relaxed mb-4">
                  Bangladesh will undoubtedly deploy a heavy spin arsenal, led by the experienced Mehidy Hasan Miraz and the rising star Rishad Hossain. The Dhaka pitch is expected to offer turn from day two, making life difficult for any batsman who isn't comfortable sweeping or using their feet.
                </p>
                <p className="text-xs text-ink/60 leading-relaxed">
                  Pakistan’s batting lineup, featuring technically sound players, will need to show immense patience. Their ability to rotate strike and not get bogged down by the relentless spin pressure will determine if they can post competitive totals in both innings.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.08] transition-all">
                <h3 className="text-lg font-bold text-white uppercase mb-4 flex items-center gap-2">
                  The Pace Battery: Early Blows
                </h3>
                <p className="text-xs text-ink/60 leading-relaxed mb-4">
                  While Mirpur is famous for its spin, the first sessions of the match often offer significant movement for the fast bowlers due to early morning moisture. Shaheen Afridi and Haris Rauf will be looking to unleash their pace and swing to dismantle the top order early.
                </p>
                <p className="text-xs text-ink/60 leading-relaxed">
                  On the other hand, Bangladesh’s Nahid Rana—the breakout "Player of the Match" from the March ODI series—will aim to replicate his express pace success. His ability to deliver short, sharp bursts could be the x-factor Bangladesh needs to rattle the Pakistani middle order.
                </p>
              </div>
            </div>
          </section>

          {/* New Section: Weather and Playing Conditions */}
          <div className="prose prose-invert max-w-none pt-4 border-t border-white/10">
            <h2 className="text-2xl font-display font-bold text-white uppercase mb-4">Weather Forecast: The Humidity Factor</h2>
            <p className="text-ink/70 leading-relaxed mb-8">
              May in Dhaka is characterized by extreme humidity and the potential for late-afternoon showers. This will test the physical endurance of the players, especially the fast bowlers and those who are transitioning directly from the shorter PSL games. Hydration and mental focus during the final session of each day will be paramount. Teams that can manage their energy levels better across the five days will have a distinct advantage.
            </p>

            <h2 className="text-2xl font-display font-bold text-white uppercase mb-4">Final Verdict: Prediction and Expectations</h2>
            <p className="text-ink/70 leading-relaxed mb-6">
              Both teams enter this Test series with fresh data from their recent high-intensity encounters. Although the ODIs in March went in favor of Bangladesh, Test cricket is a different beast entirely—a marathon rather than a sprint. Pakistan’s selection committee has already named a robust squad that blends youthful energy with veteran experience, specifically chosen for subcontinental conditions.
            </p>
            <p className="text-ink/70 leading-relaxed mb-6">
              As the players prepare to take the field on 8 May, the cricketing world is watching. We expect a hard-fought series where technique, temperament, and tactical brilliance will override brute force. Whether the "Green Shirts" can dominate away from home or the "Tigers" can protect their territory remains the burning question that only 450 overs of Test cricket can answer.
            </p>
            <p className="text-ink/60 leading-relaxed mt-8 italic">
              Keep following PakCric Hub for exclusive insights, live updates, and post-match analysis. Don't forget to check the <Link to="/schedule" className="text-pak-green font-bold">full fixtures list</Link> for match timings in your local time zone.
            </p>
          </div>
        </div>
      </motion.article>

      {/* Quick Summary Footer */}
      <div className="mt-12 bg-pak-green/10 border border-pak-green/20 rounded-3xl p-8 text-center">
        <Trophy className="w-12 h-12 text-pak-green mx-auto mb-4" />
        <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight mb-2">Match Tracker</h3>
        <p className="text-ink/60 text-sm mb-6">Never miss a boundary. Bookmark this page for the latest <strong>Pakistan vs Bangladesh 2026 test schedule details</strong> and exclusive post-match content.</p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-pak-green text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-pak-green transition-all">
            Get Schedule PDF
          </button>
        </div>
      </div>
    </div>
  );
}
