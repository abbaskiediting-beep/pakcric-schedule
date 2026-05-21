import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, Flag, Calendar, Target, Info, MapPin } from 'lucide-react';
import { PAKISTAN_SCHEDULE } from '../constants';

export default function PakistanNextTourDetails() {
  const linkKeywords = (text: string) => {
    const keywords: Record<string, string> = {
      'schedule': '/schedule',
      'squad': '/squads',
      'rankings': '/rankings',
      'icc': '/rankings',
      'wtc': '/icc-wtc-projections-2026',
      'world test championship': '/icc-wtc-projections-2026'
    };

    let parts: any[] = [text];
    
    Object.entries(keywords).forEach(([keyword, path]) => {
      const newParts: any[] = [];
      parts.forEach(part => {
        if (typeof part === 'string') {
          const regex = new RegExp(`(${keyword})`, 'gi');
          const splitParts = part.split(regex);
          splitParts.forEach((sp, i) => {
            if (sp.toLowerCase() === keyword) {
              newParts.push(
                <Link key={`${keyword}-${i}`} to={path} className="text-pak-green hover:underline">
                  {sp}
                </Link>
              );
            } else if (sp !== '') {
              newParts.push(sp);
            }
          });
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });

    return parts;
  };

  // Logic to determine the "Next Tour"
  // Since Bangladesh tour is completed, the focus shifts to Australia Series
  const upcomingMatches = PAKISTAN_SCHEDULE.filter(m => {
    return m.series.includes('Australia') || m.opponent === 'AUS';
  });

  const nextSeries = 'Australia Tour of Pakistan (ODI Series)';
  const followUpSeries = 'Pakistan Tour of West Indies';

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>Pakistan vs Australia 1st ODI – Date, Time & Tour Details 2026</title>
        <meta name="description" content="Find Pakistan vs Australia 1st ODI date, time, venue, and full schedule. Stay updated with upcoming Pakistan cricket matches." />
        <meta name="keywords" content="Pakistan vs Australia 1st ODI, upcoming Pakistan cricket matches, Pakistan cricket schedule 2026, Australia tour of Pakistan 2026" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pakistan vs Australia 1st ODI – Date, Time & Tour Details 2026" />
        <meta property="og:description" content="Find Pakistan vs Australia 1st ODI date, time, venue, and full schedule. Stay updated with upcoming Pakistan cricket matches." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/favicon.svg" />
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
          <span className="px-4 py-1 bg-pak-green text-white rounded-full text-[10px] font-bold uppercase tracking-[3px] mb-4 inline-block animate-pulse">
            Upcoming Tour Showcase
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter leading-tight">
            Pakistan vs Australia 1st ODI <span className="text-pak-green">(May 31, 2026)</span>
          </h1>
        </div>

        <div className="space-y-12">
          {/* Section 1: The Destination */}
          <section className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <Flag className="w-6 h-6 text-pak-green" />
              Who are Pakistan Playing Next?
            </h2>
            <p className="text-ink/80 leading-relaxed">
              {linkKeywords("Following the conclusion of the Bangladesh Test Series, the international cricket spotlight shifts back to Pakistan's historic home-ground wickets! Pakistan is hosting Australia in May-June 2026 for a highly anticipated 3-match ODI series, setting up an epic white-ball showdown.")}
            </p>
            <p className="text-ink/60 leading-relaxed">
              {linkKeywords("The opening match of this thrilling bilateral series is the 1st ODI on May 31, 2026. This clash will mark the return of high-energy matches to Lahore. Following the Australia ODI Series, Pakistan's scheduled away tour is flying to the West Indies in July 2026.")}
            </p>
          </section>

          {/* Section 2: Full Schedule */}
          <section>
            <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-pak-green" />
              Full Schedule: Australia Tour of Pakistan 2026
            </h2>
            <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500">Date</th>
                    <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500">Match</th>
                    <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500">Venue</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingMatches.map((match) => (
                    <tr key={match.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-xs font-bold text-white">{match.date}</td>
                      <td className="p-4 text-xs text-ink/80">{match.title}</td>
                      <td className="p-4 text-xs text-ink/60">{match.venue}</td>
                    </tr>
                  ))}
                  <tr className="bg-white/[0.02]">
                    <td className="p-4 text-xs font-bold text-pak-green">July 21, 2026</td>
                    <td className="p-4 text-xs text-ink/80">Pakistan Tour of West Indies (1st Test)</td>
                    <td className="p-4 text-xs text-ink/60">Kensington Oval, Barbados</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[10px] text-neutral-500 uppercase font-medium">Note: Match times are scheduled for 14:30 PKT (09:30 GMT) for the day-night ODIs in Lahore.</p>
          </section>

          {/* Section 3: Squad Expectations */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight flex items-center gap-3">
                <Target className="w-6 h-6 text-pak-green" />
                White-Ball Squad Focus
              </h2>
              <div className="bg-white/5 border border-white/5 rounded-3xl p-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-pak-green mt-1.5 shrink-0" />
                    <p className="text-xs text-ink/80 leading-relaxed">
                      <strong>ODI Specialists:</strong> Expected return of ODI superstars as Babar Azam leads the top-order alongside Mohammad Rizwan.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-pak-green mt-1.5 shrink-0" />
                    <p className="text-xs text-ink/80 leading-relaxed">
                      <strong>Lahore Spin Wickets:</strong> Seeing standard batting friendly conditions in Gaddafi Stadium, we expect a robust leggie and all-rounder line-up to curb Australia's run scoring rates.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-pak-green mt-1.5 shrink-0" />
                    <p className="text-xs text-ink/80 leading-relaxed">
                      <strong>Pace Firepower:</strong> Main fast-bowling unit led by Shaheen Afridi, Naseem Shah, and dynamic death-overs specialist Haris Rauf.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight flex items-center gap-3">
                <Info className="w-6 h-6 text-pak-green" />
                ODI Series Format
              </h2>
              <div className="bg-white/5 border border-white/5 rounded-3xl p-6">
                <p className="text-xs text-ink/80 leading-relaxed mb-4">
                  The tournament hosts a highly competitive <strong>three-match One Day International</strong> series. These standard 50-over games will test players' strategic pacing and middle-over rotations ahead of international cups.
                </p>
                <div className="flex items-center gap-2 p-3 bg-black/20 rounded-xl border border-white/5">
                  <MapPin className="w-4 h-4 text-pak-green" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Format: International ODI Series</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Deep Dive Context */}
          <section className="prose prose-invert max-w-none pt-4 border-t border-white/10">
            <p className="text-ink/60 leading-relaxed">
              {linkKeywords("When analyzing the Pakistan next tour details, cricket analysts focus heavily on fatigue and batting track adjustments. Transitioning from the humid Bangladeshi red-ball decks to the blazing fast outfields of Gaddafi Stadium in Lahore demands rapid tactical recalibration.")}
            </p>
            <p className="text-ink/60 leading-relaxed">
              {linkKeywords("Fans can set instant push notification reminders for each upcoming Australia game, ensuring they never miss a ball of the action. We will update the squads and live conditions as PCB releases final press publications.")}
            </p>
          </section>

          <div className="mt-12 p-8 border border-white/10 bg-white/5 rounded-[32px]">
            <h3 className="text-xl font-display font-bold uppercase mb-8 text-white text-center">Related Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/pakistan-vs-australia-2026-schedule-odi" className="p-6 bg-white/5 border border-white/5 rounded-3xl hover:border-pak-green transition-colors group">
                <p className="text-[10px] font-bold text-pak-green uppercase tracking-widest mb-2">ODI Schedule</p>
                <h4 className="text-white text-xs font-bold group-hover:text-pak-green transition-colors leading-tight uppercase">Full Australia Vs Pakistan ODI Schedule & Venues</h4>
              </Link>
              <Link to="/venues" className="p-6 bg-white/5 border border-white/5 rounded-3xl hover:border-pak-green transition-colors group">
                <p className="text-[10px] font-bold text-pak-green uppercase tracking-widest mb-2">Stadium Guide</p>
                <h4 className="text-white text-xs font-bold group-hover:text-pak-green transition-colors leading-tight uppercase">Gaddafi Stadium Interactive Maps & Nearby Hotspots</h4>
              </Link>
              <Link to="/players-stats" className="p-6 bg-white/5 border border-white/5 rounded-3xl hover:border-pak-green transition-colors group">
                <p className="text-[10px] font-bold text-pak-green uppercase tracking-widest mb-2">Player Metrics</p>
                <h4 className="text-white text-xs font-bold group-hover:text-pak-green transition-colors leading-tight uppercase">Babar Azam & ODI Top Batsmen Stats & Projections</h4>
              </Link>
            </div>
          </div>
        </div>
      </motion.article>

      {/* CTA section */}
      <div className="mt-12 group relative overflow-hidden bg-gradient-to-br from-pak-green/20 to-transparent border border-white/10 rounded-[32px] p-10 text-center">
        <div className="relative z-10">
          <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight mb-4">Stay Ahead of the Game</h3>
          <p className="text-ink/60 text-sm max-w-xl mx-auto mb-8">
            Get instant notifications on <strong>Pakistan next tour details</strong>, squad changes, and real-time match predictions.
          </p>
          <a 
            href="https://www.pcb.com.pk/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-pak-green text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-emerald-600 transition-all transform hover:scale-105 shadow-xl shadow-pak-green/20"
          >
            Join the Fan Community
          </a>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,169,92,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </div>
  );
}
