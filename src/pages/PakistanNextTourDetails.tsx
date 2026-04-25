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
  // Since it's April 21, 2026, the next matches start on May 8
  const upcomingMatches = PAKISTAN_SCHEDULE.filter(m => {
    const matchDate = m.date.includes(',') ? m.date.split(',')[0].split(' ')[0] + ' ' + m.date.split(',')[0].split(' ')[1] : m.date;
    // For simplicity in this demo, we know the next one is Bangladesh
    return m.series.includes('Bangladesh');
  });

  const nextSeries = 'Pakistan Tour of Bangladesh (Test Series)';
  const followUpSeries = 'Pakistan Tour of West Indies';

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>Pakistan Next Match 2026 – Date, Time & Opponent</title>
        <meta name="description" content="Find Pakistan next match date, time, opponent, and venue. Stay updated with upcoming Pakistan cricket matches." />
        <meta name="keywords" content="Pakistan next match, upcoming Pakistan cricket matches, Pakistan cricket schedule 2026, next cricket tour Pakistan" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pakistan Next Match 2026 – Date, Time & Opponent" />
        <meta property="og:description" content="Find Pakistan next match date, time, opponent, and venue. Stay updated with upcoming Pakistan cricket matches." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://pakcric-schedule.online/logo.png" />
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
          <span className="px-4 py-1 bg-pak-green text-white rounded-full text-[10px] font-bold uppercase tracking-[3px] mb-4 inline-block">
            2026 Tour Forecast
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter leading-tight">
            Pakistan Next Match Details <span className="text-pak-green">(2026)</span>
          </h1>
        </div>

        <div className="space-y-12">
          {/* Section 1: The Destination */}
          <section className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <Flag className="w-6 h-6 text-pak-green" />
              Which Country is Pakistan Touring Next?
            </h2>
            <p className="text-ink/80 leading-relaxed">
              {linkKeywords("As the international cricket calendar heats up, fans are eagerly asking: where is the Green Team headed? We have the latest Pakistan next tour details. The Pakistan national team is scheduled to fly to Bangladesh in May 2026 for a high-intensity two-match Test series.")}
            </p>
            <p className="text-ink/60 leading-relaxed">
              {linkKeywords("This series is crucial for Pakistan’s standing in the ICC World Test Championship. Following the conclusion of the Bangladesh tour, Pakistan will then travel to the West Indies in July 2026 for a multi-format series including Tests, and potentially ODIs and T20Is.")}
            </p>
          </section>

          {/* Section 2: Full Schedule */}
          <section>
            <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-pak-green" />
              Full Schedule: Pakistan vs Bangladesh 2026
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
                      <td className="p-4 text-xs text-ink/80">{match.series}</td>
                      <td className="p-4 text-xs text-ink/60">{match.venue}</td>
                    </tr>
                  ))}
                  <tr className="bg-white/[0.02]">
                    <td className="p-4 text-xs font-bold text-pak-green">July 21, 2026</td>
                    <td className="p-4 text-xs text-ink/80">Pakistan vs West Indies (1st Test)</td>
                    <td className="p-4 text-xs text-ink/60">Kensington Oval, Barbados</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[10px] text-neutral-500 uppercase font-medium">Note: Timings are usually 09:00 AM PKT for Bangladesh Tests.</p>
          </section>

          {/* Section 3: Squad Expectations */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight flex items-center gap-3">
                <Target className="w-6 h-6 text-pak-green" />
                Squad Expectations
              </h2>
              <div className="bg-white/5 border border-white/5 rounded-3xl p-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-pak-green mt-1.5 shrink-0" />
                    <p className="text-xs text-ink/80 leading-relaxed">
                      <strong>Core Stability:</strong> Expected return of the core Test unit including Babar Azam, Mohammad Rizwan, and Abdullah Shafique.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-pak-green mt-1.5 shrink-0" />
                    <p className="text-xs text-ink/80 leading-relaxed">
                      <strong>Spin Focus:</strong> Given the Dhaka tracks, we expect a 3-pronged spin attack featuring Abrar Ahmed and potentially a recall for seasoned left-armers.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-pak-green mt-1.5 shrink-0" />
                    <p className="text-xs text-ink/80 leading-relaxed">
                      <strong>Pace Rotation:</strong> Shaheen Afridi and Naseem Shah may lead, with rotation expected for the hotter, more humid conditions in Chittagong.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight flex items-center gap-3">
                <Info className="w-6 h-6 text-pak-green" />
                Series Format
              </h2>
              <div className="bg-white/5 border border-white/5 rounded-3xl p-6">
                <p className="text-xs text-ink/80 leading-relaxed mb-4">
                  The upcoming tour of Bangladesh consists of <strong>two Test matches</strong>. These are not just friendly encounters; they are part of the World Test Championship cycle, making every run and wicket vital for the final table.
                </p>
                <div className="flex items-center gap-2 p-3 bg-black/20 rounded-xl border border-white/5">
                  <MapPin className="w-4 h-4 text-pak-green" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Format: ICC Test Championship</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Deep Dive Context */}
          <section className="prose prose-invert max-w-none pt-4 border-t border-white/10">
            <p className="text-ink/60 leading-relaxed">
              {linkKeywords("When analyzing the Pakistan next tour details, critics highlight the physical toll of back-to-back subcontinental and Caribbean series. The transition from the slow turners of Dhaka to the often-bouncy Kensington Oval in Barbados will be a true test of the team's versatility.")}
            </p>
            <p className="text-ink/60 leading-relaxed">
              {linkKeywords("Fans should stay tuned for the official squad announcement, usually expected two weeks before the team's departure. Our Pakistan next tour details guide will be updated live as new information emerges from the PCB.")}
            </p>
          </section>

          <div className="mt-12 p-8 border border-white/10 bg-white/5 rounded-[32px]">
            <h3 className="text-xl font-display font-bold uppercase mb-8 text-white text-center">Related Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/pakistan-tour-bangladesh-test-2026" className="p-6 bg-white/5 border border-white/5 rounded-3xl hover:border-pak-green transition-colors group">
                <p className="text-[10px] font-bold text-pak-green uppercase tracking-widest mb-2">Series Opener</p>
                <h4 className="text-white text-xs font-bold group-hover:text-pak-green transition-colors leading-tight uppercase">Red-Ball Revival: Strategic Return to Dhaka</h4>
              </Link>
              <Link to="/pakistan-tour-bangladesh-squad-2026" className="p-6 bg-white/5 border border-white/5 rounded-3xl hover:border-pak-green transition-colors group">
                <p className="text-[10px] font-bold text-pak-green uppercase tracking-widest mb-2">Deep Dive</p>
                <h4 className="text-white text-xs font-bold group-hover:text-pak-green transition-colors leading-tight uppercase">Pakistan’s 16-Member Squad & Complete Breakdown</h4>
              </Link>
              <Link to="/red-ball-resilience-overview-2026" className="p-6 bg-white/5 border border-white/5 rounded-3xl hover:border-pak-green transition-colors group">
                <p className="text-[10px] font-bold text-pak-green uppercase tracking-widest mb-2">Analysis</p>
                <h4 className="text-white text-xs font-bold group-hover:text-pak-green transition-colors leading-tight uppercase">Tactics & The Spin Duo Impact</h4>
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
            className="inline-block px-10 py-4 bg-white text-black rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-pak-green hover:text-white transition-all transform hover:scale-105"
          >
            Join the Fan Community
          </a>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,169,92,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </div>
  );
}
