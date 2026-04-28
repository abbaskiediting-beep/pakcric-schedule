import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, Calendar, MapPin, Trophy, Users, Clock, Info, HelpCircle, TrendingUp, Globe } from 'lucide-react';
import { PAKISTAN_SCHEDULE } from '../constants';

export default function PakistanVsBangladesh2026Schedule() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>Pakistan vs Bangladesh 2026 – Schedule, Squad & Match Details</title>
        <meta name="description" content="Explore Pakistan vs Bangladesh 2026 schedule, squad, match dates, venues, and full preview with latest updates." />
        <meta name="keywords" content="Pakistan vs Bangladesh 2026 schedule, Pakistan vs Bangladesh 2026 squad, Pakistan vs Bangladesh 2026 preview" />
      </Helmet>
      
      <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white hover:translate-x-[-4px] transition-transform mb-8">
        <ChevronLeft className="w-4 h-4" /> Back to Home
      </Link>

      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card-bg border border-card-border rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl p-6 md:p-12 mb-12"
      >
        <header className="mb-8 md:mb-12">
          <span className="px-4 py-1.5 bg-pak-green text-white rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[3px] mb-4 inline-block">
            Match Guide
          </span>
          <h1 className="text-3xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter leading-tight mb-6">
            Pakistan vs Bangladesh 2026 – Complete Match Guide
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-ink/80 leading-relaxed font-medium italic border-l-4 border-pak-green pl-6 mb-8">
              The Pakistan vs Bangladesh 2026 series is shaping up to be an exciting Test battle between two competitive sides. With matches scheduled in Bangladesh, conditions are expected to play a major role, making this series even more interesting.
            </p>
            <p className="text-lg text-ink/60 leading-relaxed">
              In this guide, you'll find the complete schedule, venue details, and match preview to stay fully updated.
            </p>
          </div>
        </header>

        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tight mb-8 flex items-center gap-3">
            <Calendar className="w-6 h-6 md:w-8 md:h-8 text-pak-green" />
            Pakistan vs Bangladesh 2026 Schedule
          </h2>
          <p className="text-sm md:text-ink/60 mb-8 leading-relaxed italic">
            The series will feature two Test matches played in Bangladesh. Below is the confirmed schedule:
          </p>

          <div className="overflow-x-auto rounded-2xl md:rounded-3xl border border-white/5 bg-black/20 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            <table className="w-full text-left min-w-[500px]">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-pak-green">Match</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-pak-green">Dates</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-pak-green">Venue</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-pak-green">Time (PKT)</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium text-white/80">
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">1st Test</td>
                  <td className="px-6 py-4">8 May – 12 May 2026</td>
                  <td className="px-6 py-4">Sher-e-Bangla National Stadium, Dhaka</td>
                  <td className="px-6 py-4">9:00 AM</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">2nd Test</td>
                  <td className="px-6 py-4">16 May – 20 May 2026</td>
                  <td className="px-6 py-4">Sylhet International Cricket Stadium, Sylhet</td>
                  <td className="px-6 py-4">9:00 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-xs text-ink/40 font-bold italic tracking-wider">
            👉 Both matches will start in the morning, which is typical for Test cricket.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tight mb-8 flex items-center gap-3">
            <Users className="w-8 h-8 text-pak-green" />
            Pakistan vs Bangladesh 2026 Squad
          </h2>
          <p className="text-ink/60 mb-8 leading-relaxed">
            The squad for this Test series is expected to focus on players who perform well in longer formats.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/5 rounded-3xl p-8">
              <h3 className="text-lg font-bold text-white uppercase mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-pak-green" /> Pakistan Key Strengths
              </h3>
              <ul className="space-y-3">
                {['Strong pace attack', 'Experienced middle order', 'Balanced bowling unit'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-ink/60 font-medium">
                    <div className="w-1.5 h-1.5 bg-pak-green rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-3xl p-8">
              <h3 className="text-lg font-bold text-white uppercase mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-pak-green" /> Bangladesh Key Strengths
              </h3>
              <ul className="space-y-3">
                {['Spin-friendly conditions', 'Home advantage', 'Experienced Test players'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-ink/60 font-medium">
                    <div className="w-1.5 h-1.5 bg-pak-green rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-xs text-ink/40 font-bold italic tracking-wider">
            👉 Final squad details will be updated once confirmed.
          </p>
        </section>

        <section className="mb-16 border-t border-white/5 pt-16">
          <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tight mb-8">
            Pakistan vs Bangladesh 2026 Match Preview
          </h2>
          <p className="text-ink/60 mb-8 leading-relaxed">
            This Test series will likely depend heavily on pitch conditions and patience.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-2">
                <Info className="w-5 h-5 text-pak-green" /> Key Factors
              </h3>
              <ul className="space-y-4">
                {['Spin-friendly pitches in Bangladesh', 'Weather and humidity', 'First-innings performance'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-ink/80 font-medium">
                    <div className="w-2 h-2 border border-pak-green rotate-45" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-pak-green" /> What to Expect
              </h3>
              <ul className="space-y-4">
                {['Longer batting sessions', 'Strategic bowling changes', 'Close contests, especially in the second innings'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-ink/80 font-medium">
                    <div className="w-2 h-2 border border-pak-green rotate-45" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-white/[0.02] rounded-3xl p-10 border border-white/5">
            <h3 className="text-2xl font-display font-bold text-white uppercase mb-6">Head-to-Head Overview</h3>
            <p className="text-ink/60 leading-relaxed font-medium">
              Pakistan has traditionally performed well against Bangladesh, but playing in Bangladesh adds a new challenge. The home conditions could help Bangladesh stay competitive throughout the series.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tight mb-8">
            Why This Series Matters
          </h2>
          <div className="space-y-6">
            {[
              "Important for Test rankings",
              "Builds team confidence",
              "Helps identify future Test specialists"
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 bg-card-bg border border-card-border rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-pak-green/10 flex items-center justify-center shrink-0">
                  <span className="text-pak-green font-bold font-display text-xl">{i + 1}</span>
                </div>
                <p className="text-sm font-bold text-ink/80 self-center uppercase tracking-widest">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-ink/40 font-bold italic tracking-wider">
            👉 Both teams will be aiming to gain momentum in the longer format.
          </p>
        </section>

        <section className="mb-16 border-t border-white/5 pt-16">
          <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tight mb-12 flex items-center gap-3">
             FAQs
          </h2>
          <div className="space-y-8">
            <div className="group">
              <h3 className="text-lg font-bold text-white uppercase mb-3 flex items-center gap-3 group-hover:text-pak-green transition-colors">
                <HelpCircle className="w-5 h-5 text-pak-green" /> When will Pakistan vs Bangladesh 2026 start?
              </h3>
              <p className="text-sm text-ink/60 font-medium pl-8 border-l border-white/10">
                The first Test will begin on 8 May 2026.
              </p>
            </div>
            <div className="group">
              <h3 className="text-lg font-bold text-white uppercase mb-3 flex items-center gap-3 group-hover:text-pak-green transition-colors">
                <HelpCircle className="w-5 h-5 text-pak-green" /> Where will the matches be played?
              </h3>
              <p className="text-sm text-ink/60 font-medium pl-8 border-l border-white/10">
                Matches will be played in Dhaka and Sylhet.
              </p>
            </div>
            <div className="group">
              <h3 className="text-lg font-bold text-white uppercase mb-3 flex items-center gap-3 group-hover:text-pak-green transition-colors">
                <HelpCircle className="w-5 h-5 text-pak-green" /> What time will matches start?
              </h3>
              <p className="text-sm text-ink/60 font-medium pl-8 border-l border-white/10">
                Both matches will start at 9:00 AM (PKT).
              </p>
            </div>
          </div>
        </section>

        <footer className="pt-16 border-t border-white/5">
          <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tight mb-6 flex items-center gap-3">
            Conclusion
          </h2>
          <div className="prose prose-invert max-w-none text-ink/80 leading-relaxed font-medium">
            <p className="mb-6">
              The Pakistan vs Bangladesh 2026 Test series promises competitive cricket, especially in challenging subcontinent conditions.
            </p>
            <p>
              With two important matches scheduled, fans can expect a mix of strategy, patience, and high-quality performances.
            </p>
          </div>
          
          <div className="mt-12 p-8 bg-pak-green/5 border border-pak-green/10 rounded-[32px] text-center">
            <p className="text-[10px] font-bold text-pak-green uppercase tracking-[4px] mb-2">🔥 Stay Connected</p>
            <p className="text-xs font-medium text-ink/40">Keep following PakCric Schedule for instant updates and analysis.</p>
          </div>
        </footer>
      </motion.article>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <Link to="/schedule" className="p-4 md:p-6 bg-card-bg border border-card-border rounded-xl md:rounded-2xl text-center group hover:border-pak-green/30 transition-all">
          <Calendar className="w-5 h-5 md:w-6 md:h-6 text-pak-green mx-auto mb-2 md:mb-3" />
          <span className="text-[9px] md:text-[10px] font-bold text-ink/40 uppercase tracking-widest group-hover:text-white transition-colors">Match Fixtures</span>
        </Link>
        <Link to="/squads" className="p-4 md:p-6 bg-card-bg border border-card-border rounded-xl md:rounded-2xl text-center group hover:border-pak-green/30 transition-all">
          <Users className="w-5 h-5 md:w-6 md:h-6 text-pak-green mx-auto mb-2 md:mb-3" />
          <span className="text-[9px] md:text-[10px] font-bold text-ink/40 uppercase tracking-widest group-hover:text-white transition-colors">Team Squads</span>
        </Link>
        <Link to="/rankings" className="p-4 md:p-6 bg-card-bg border border-card-border rounded-xl md:rounded-2xl text-center group hover:border-pak-green/30 transition-all">
          <Trophy className="w-5 h-5 md:w-6 md:h-6 text-pak-green mx-auto mb-2 md:mb-3" />
          <span className="text-[9px] md:text-[10px] font-bold text-ink/40 uppercase tracking-widest group-hover:text-white transition-colors">Rankings</span>
        </Link>
        <Link to="/blogs" className="p-4 md:p-6 bg-card-bg border border-card-border rounded-xl md:rounded-2xl text-center group hover:border-pak-green/30 transition-all">
          <Globe className="w-5 h-5 md:w-6 md:h-6 text-pak-green mx-auto mb-2 md:mb-3" />
          <span className="text-[9px] md:text-[10px] font-bold text-ink/40 uppercase tracking-widest group-hover:text-white transition-colors">More Insights</span>
        </Link>
      </div>
    </div>
  );
}
