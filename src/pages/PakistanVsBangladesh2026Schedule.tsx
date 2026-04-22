import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Calendar, MapPin, Trophy, Users, Clock, Info } from 'lucide-react';
import { PAKISTAN_SCHEDULE } from '../constants';

export default function PakistanVsBangladesh2026Schedule() {
  const seriesName = 'Pakistan Tour of Bangladesh (Test Series)';
  const matches = PAKISTAN_SCHEDULE.filter(m => m.series === seriesName);

  useEffect(() => {
    document.title = "Pakistan vs Bangladesh 2026 Schedule – Full Match List";
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white hover:translate-x-[-4px] transition-transform mb-8">
        <ChevronLeft className="w-4 h-4" /> Back to Home
      </Link>

      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card-bg border border-card-border rounded-[40px] overflow-hidden shadow-2xl"
      >
        <div className="h-64 md:h-96 w-full relative overflow-hidden">
          <img 
            src="https://picsum.photos/seed/pakban2026/1200/600" 
            alt="Pakistan vs Bangladesh 2026 match" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <span className="px-4 py-1 bg-pak-green text-white rounded-full text-[10px] font-bold uppercase tracking-[3px] mb-4 inline-block">
              Exclusive Tour Guide
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter leading-none">
              Pakistan vs Bangladesh 2026 Schedule
            </h1>
          </div>
        </div>

        <div className="p-8 md:p-12 space-y-12">
          {/* Intro */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-ink/80 leading-relaxed">
              Cricket enthusiasts are setting their sights on 2026, as the <strong>Pakistan vs Bangladesh 2026 test schedule details</strong> have been unveiled. This high-octane series is set to redefine the competitive landscape of the ICC World Test Championship, featuring a 2-match series that tests the grit and determination of both teams.
            </p>
            <p className="text-ink/60 leading-relaxed italic">
              "Every session in a subcontinental Test is a story of survival and strategy. According to given data in past tours, Bangladesh becomes a fortress for spinners, making the <strong>Pakistan vs Bangladesh 2026 test schedule details</strong> a must-watch for traditional cricket lovers."
            </p>
          </div>

          {/* Full Schedule Table */}
          <section>
            <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-pak-green" />
              Pakistan vs Bangladesh 2026 Test Schedule Details
            </h2>
            
            <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500">Match</th>
                    <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500">Date</th>
                    <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500">Time (PKT)</th>
                    <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500">Venue</th>
                  </tr>
                </thead>
                <tbody>
                  {matches.map((match, idx) => (
                    <tr key={match.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="p-4">
                        <div className="text-sm font-bold text-white">Test Match #{idx + 1}</div>
                        <div className="text-[10px] text-ink/40 uppercase">PAK vs BAN</div>
                      </td>
                      <td className="p-4 text-xs text-white/80">{match.date}</td>
                      <td className="p-4 text-xs text-white/80 font-mono tracking-tighter">{match.time}</td>
                      <td className="p-4 text-xs text-white/80">{match.venue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Venue Insights */}
          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/5 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-pak-green" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">Dhaka Experience</h3>
              </div>
              <p className="text-xs text-ink/60 leading-relaxed">
                The Sher-e-Bangla National Stadium is historically known for its low-bounce tracks. As part of the <strong>Pakistan vs Bangladesh 2026 test schedule details</strong>, the Dhaka Test will likely favor skilled spin play and patience from the top-order batters.
              </p>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-pak-green" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">Chattogram Decider</h3>
              </div>
              <p className="text-xs text-ink/60 leading-relaxed">
                Zahur Ahmed Chowdhury Stadium often offers slightly more pace in the first few sessions but quickly breaks down. The <strong>Pakistan vs Bangladesh 2026 test schedule details</strong> place the series finale here, ensuring a dramatic conclusion.
              </p>
            </div>
          </section>

          {/* Squad Overview */}
          <section className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <Users className="w-6 h-6 text-pak-green" />
              Squad Overview
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-ink/60 leading-relaxed text-sm">
                While official squads are locked in closer to the series, insiders suggest Pakistan will lean heavily on their experienced pace battery. Bangladesh, on the other hand, is expected to trial 3-4 young spinners to complement their veterans. The <strong>Pakistan vs Bangladesh 2026 test schedule details</strong> emphasize team depth as the series progresses.
              </p>
              <ul className="grid grid-cols-2 gap-4 text-xs text-ink/80 list-none p-0">
                <li className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <span className="text-pak-green font-bold block mb-1">PAK Potential Lead</span>
                  Shaheen Afridi, Babar Azam, Mohammad Rizwan
                </li>
                <li className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <span className="text-teal-500 font-bold block mb-1">BAN Potential Lead</span>
                  Shakib Al Hasan, Litton Das, Mehidy Hasan Miraz
                </li>
              </ul>
            </div>
          </section>

          {/* Strategy Section */}
          <div className="prose prose-invert max-w-none pt-4 border-t border-white/10">
            <h3 className="text-xl font-display font-bold text-white uppercase mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-pak-green" />
              Tactical Analysis
            </h3>
            <p className="text-ink/60 leading-relaxed">
              Detailed analysis of the <strong>Pakistan vs Bangladesh 2026 test schedule details</strong> reveals a tight window between matches. For the visitors, recovery will be paramount. Pakistan's traditional strength in reverse swing could be the X-factor if the heat remains high in Dhaka during May.
            </p>
            <p className="text-ink/60 leading-relaxed">
              In conclusion, the <strong>Pakistan vs Bangladesh 2026 test schedule details</strong> confirm that fans should expect nothing less than clinical cricket. We will continue to update our database with toss results and session-by-session highlights once the series goes live.
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
