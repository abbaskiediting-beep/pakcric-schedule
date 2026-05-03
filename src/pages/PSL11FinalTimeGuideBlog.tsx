import { motion } from 'motion/react';
import { Calendar, Clock, Globe, ArrowLeft, Trophy, Tv, Music, MapPin, Share2, Info, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import { LinkText } from '../components/LinkText';

export default function PSL11FinalTimeGuideBlog() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'PSL 11 Final Start Time Today - May 3, 2026',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>What Time Does PSL 11 Final Start Today May 3 2026? | PSL 2026 Final Time Guide</title>
        <meta 
          name="description" 
          content="PSL 11 Final starts at 8:00 PM PKT on May 3, 2026 at Gaddafi Stadium Lahore. Toss at 7:30 PM PKT. Full world time guide for Pakistan, India, UAE, UK, USA." 
        />
        <meta name="keywords" content="PSL 11 Final Time, PSL 2026 Final Start Time, Gaddafi Stadium Lahore Final, Babar Azam vs Marnus Labuschagne, Peshawar Zalmi vs Hyderabad Kingsmen Final" />
      </Helmet>

      <div className="flex justify-between items-center mb-8">
        <Link 
          to="/blogs" 
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to News
        </Link>
        <button 
          onClick={handleShare}
          className="p-2 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-pak-green hover:border-pak-green/20 transition-all"
        >
          <Share2 className="w-4 h-4" />
        </button>
      </div>

      <motion.article 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
             <span className="px-3 py-1 bg-red-600/10 text-red-500 border border-red-500/20 rounded-full text-[10px] font-bold uppercase tracking-widest">
               Match Day Guide
             </span>
             <span className="px-3 py-1 bg-pak-green/10 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-bold uppercase tracking-widest">
               May 3, 2026
             </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-none mb-6 text-white">
            What Time Does <span className="text-pak-green">PSL 11 Final</span> Start Today? <br className="hidden md:block" /> May 3, 2026 — Complete Time Guide
          </h1>
        </div>

        <section className="mb-12">
          <div className="p-8 rounded-[40px] bg-pak-green/5 border border-pak-green/20 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-display font-bold text-white uppercase mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-pak-green" /> Quick Answer: PSL 11 Final Times
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-pak-green/60">Match Starts</p>
                  <p className="text-2xl font-display font-bold text-white">8:00 PM PKT</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-pak-green/60">Toss Time</p>
                  <p className="text-xl font-display font-bold text-white">7:30 PM PKT</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-pak-green/60">Closing Ceremony</p>
                  <p className="text-xl font-display font-bold text-white">6:30 PM PKT</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-pak-green/60">Venue</p>
                  <p className="text-base font-bold text-white">Gaddafi Stadium, Lahore</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-pak-green/60">Gates Open</p>
                  <p className="text-base font-bold text-white">4:00 PM PKT</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-pak-green/60">Final Match</p>
                  <p className="text-base font-bold text-white italic">PZ vs HYK</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-white/60 leading-relaxed italic">
                  <LinkText text="The Pakistan Super League 2026 (PSL 11) final will be played on May 3, 2026. The match is scheduled to start at 7:00 PM PKT (Initial scheduled time) but the updated confirmed kickoff is 8:00 PM PKT at Gaddafi Stadium, Lahore." />
                </p>
              </div>
            </div>
            <Trophy className="absolute -bottom-12 -right-12 w-64 h-64 text-pak-green/10" />
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
             <Globe className="w-5 h-5 text-pak-green" />
             <h2 className="text-xl font-display font-bold text-white uppercase tracking-tight">World Time Converter</h2>
          </div>
          <div className="bg-card-bg border border-card-border rounded-3xl overflow-hidden shadow-xl">
             <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-card-border">
                    <th className="p-4 md:p-5 text-[10px] font-black uppercase tracking-widest text-ink/40">Country / Region</th>
                    <th className="p-4 md:p-5 text-[10px] font-black uppercase tracking-widest text-ink/40 text-right">Local Time</th>
                    <th className="p-4 md:p-5 text-[10px] font-black uppercase tracking-widest text-ink/40 text-right hidden sm:table-cell">Time Zone</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-bold divide-y divide-white/5">
                  {[
                    { country: '🇵🇰 Pakistan', time: '8:00 PM', zone: 'PKT (UTC+5)' },
                    { country: '🇮🇳 India', time: '8:30 PM', zone: 'IST (UTC+5:30)' },
                    { country: '🇦🇪 UAE / Dubai', time: '7:00 PM', zone: 'GST (UTC+4)' },
                    { country: '🇬🇧 United Kingdom', time: '4:00 PM', zone: 'BST (UTC+1)' },
                    { country: '🇺🇸 USA — New York', time: '11:00 AM', zone: 'EDT (UTC-4)' },
                    { country: '🇦🇺 Australia — Sydney', time: '1:00 AM (May 4)', zone: 'AEST (UTC+10)' },
                    { country: '🇧🇩 Bangladesh', time: '9:00 PM', zone: 'BST (UTC+6)' },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="p-4 md:p-5 text-white">{row.country}</td>
                      <td className="p-4 md:p-5 text-right text-pak-green">{row.time}</td>
                      <td className="p-4 md:p-5 text-right text-ink/30 hidden sm:table-cell">{row.zone}</td>
                    </tr>
                  ))}
                </tbody>
             </table>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
             <Clock className="w-5 h-5 text-pak-green" />
             <h2 className="text-xl font-display font-bold text-white uppercase tracking-tight">Full Tonight's Schedule</h2>
          </div>
          <div className="space-y-4">
            {[
              { time: '4:00 PM', event: '🚪 Gates Open — Fans start entering', desc: 'Secure your seats early for the first live crowd game.' },
              { time: '6:30 PM', event: '🎤 Closing Ceremony Begins', desc: 'Featuring Atif Aslam, Aima Baig, Ali Azmat & more.', highlight: true },
              { time: '7:30 PM', event: '🪙 Official Toss — Gaddafi Pitch', desc: 'Babar Azam vs Marnus Labuschagne.' },
              { time: '8:00 PM', event: '🏏 MATCH BEGINS — FIRST BALL', desc: 'Confirmed start time for the final showdown.', active: true },
              { time: '12:00 AM', event: '🏆 Trophy Presentation', desc: 'Lifting the "Infinity" Trophy under Lahore lights.' }
            ].map((step, idx) => (
              <div key={idx} className={`p-5 rounded-2xl border transition-all ${step.highlight ? 'bg-pak-green/10 border-pak-green/20' : step.active ? 'bg-red-500/5 border-red-500/20 shadow-lg shadow-red-500/10' : 'bg-card-bg border-card-border'}`}>
                <div className="flex justify-between items-start mb-2">
                   <h4 className={`text-base font-bold uppercase tracking-tight ${step.highlight ? 'text-pak-green' : step.active ? 'text-red-500' : 'text-white'}`}>{step.event}</h4>
                   <span className={`text-[10px] font-black underline decoration-2 underline-offset-4 ${step.highlight ? 'text-pak-green' : step.active ? 'text-red-500' : 'text-pak-green/60'}`}>{step.time} PKT</span>
                </div>
                <p className="text-xs text-ink/50 leading-relaxed italic">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-amber-500/5 border border-amber-500/20 rounded-3xl flex gap-4">
             <Info className="w-6 h-6 text-amber-500 shrink-0" />
             <p className="text-sm text-amber-200/70 italic leading-relaxed">
               <strong>Note:</strong> The closing ceremony starts at 6:30 PM — <LinkText text="Arrive early or you will miss it! PSL CEO Salman Naseer specifically urged fans to be at the stadium by 6:30 PM." />
             </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
             <Tv className="w-5 h-5 text-pak-green" />
             <h2 className="text-xl font-display font-bold text-white uppercase tracking-tight">Where to Watch Live?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-card-bg border border-card-border rounded-3xl p-6">
                <h4 className="text-[10px] font-black uppercase tracking-[3px] text-pak-green mb-6">Television Channels</h4>
                <div className="space-y-4">
                   <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-sm font-bold text-white">Pakistan</span>
                      <span className="text-xs text-ink/60">PTV Sports, Geo Super</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-sm font-bold text-white">United Kingdom</span>
                      <span className="text-xs text-ink/60">Sky Sports Cricket</span>
                   </div>
                   <div className="flex justify-between items-center py-2">
                      <span className="text-sm font-bold text-white">USA & Canada</span>
                      <span className="text-xs text-ink/60">Willow TV</span>
                   </div>
                </div>
             </div>
             <div className="bg-card-bg border border-card-border rounded-3xl p-6">
                <h4 className="text-[10px] font-black uppercase tracking-[3px] text-pak-green mb-6">Live Streaming Apps</h4>
                <div className="space-y-4">
                   <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-sm font-bold text-white">Tapmad</span>
                      <span className="text-[9px] px-2 py-1 bg-pak-green/10 text-pak-green rounded uppercase font-black">Local</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-sm font-bold text-white">ARY Plus App</span>
                      <span className="text-[9px] px-2 py-1 bg-white/5 text-ink/60 rounded uppercase font-black">Global</span>
                   </div>
                   <div className="flex justify-between items-center py-2">
                      <span className="text-sm font-bold text-white">Sky Sports App</span>
                      <span className="text-[9px] px-2 py-1 bg-white/5 text-ink/60 rounded uppercase font-black">UK Only</span>
                   </div>
                </div>
             </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
             <Music className="w-5 h-5 text-pak-green" />
             <h2 className="text-xl font-display font-bold text-white uppercase tracking-tight">Closing Ceremony Performers</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
             {[
               { name: 'Atif Aslam', role: 'Headliner • Pop' },
               { name: 'Ali Azmat', role: 'Rock Icon' },
               { name: 'Aima Baig', role: 'Pop/Contemporary' },
               { name: 'Arif Lohar', role: 'Punjabi Folk' },
               { name: 'Sabri Sisters', role: 'Sufi / Qawwali' },
               { name: 'Daniya Kanwal', role: 'Cultural Performance' }
             ].map((artist, idx) => (
               <div key={idx} className="p-4 bg-white/5 border border-white/5 rounded-2xl text-center group hover:border-pak-green/30 transition-all">
                  <h5 className="text-sm font-black text-white uppercase tracking-tight mb-1">{artist.name}</h5>
                  <p className="text-[9px] font-bold text-pak-green uppercase tracking-widest italic">{artist.role}</p>
               </div>
             ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="p-10 rounded-[48px] bg-white/[0.02] border border-white/10 relative overflow-hidden group">
            <div className="relative z-10 flex flex-col items-center text-center">
              <MapPin className="w-12 h-12 text-pak-green mb-6" />
              <h2 className="text-2xl font-display font-bold text-white uppercase mb-4">Gaddafi Stadium, Lahore — The Stage is Set</h2>
              <p className="text-sm text-ink/60 italic leading-relaxed max-w-2xl">
                <LinkText text="Lahore's Gaddafi Stadium will host the final of the 2026 Pakistan Super League — the fourth time in five years it has staged the PSL Final. In good news for fans, attendance is fully allowed tonight — making it the first and only match of the season with a live crowd." />
              </p>
            </div>
          </div>
        </section>

        <div className="prose dark:prose-invert prose-p:text-ink/70 prose-p:leading-relaxed prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tighter max-w-none pt-12 border-t border-white/5">
           <h3 className="text-2xl text-white mb-6">Summary Guide</h3>
           <ul className="list-none p-0 space-y-3">
              <li className="flex items-center gap-3 text-sm font-bold text-white/80">
                <span className="w-2 h-2 rounded-full bg-pak-green" /> <Link to="/psl-2026-final-peshawar-zalmi-vs-hyderabad-campaign">Match: Peshawar Zalmi vs Hyderabad Kingsmen</Link>
              </li>
              <li className="flex items-center gap-3 text-sm font-bold text-white/80">
                <span className="w-2 h-2 rounded-full bg-pak-green" /> <Link to="/blogs/psl-11-final-starting-time-guide-2026">Start Time: 8:00 PM PKT / 3:00 PM GMT</Link>
              </li>
              <li className="flex items-center gap-3 text-sm font-bold text-white/80">
                <span className="w-2 h-2 rounded-full bg-pak-green" /> <Link to="/psl-11-closing-ceremony-2026-details">Ceremony: 6:30 PM PKT — Be early!</Link>
              </li>
           </ul>

           <footer className="mt-16 pt-8 border-t border-card-border flex flex-col sm:flex-row gap-6 justify-between items-center">
              <AuthorSection authorId="omar-farooq" />
              <div className="flex gap-4">
                 <Link to="/psl-2026-final-peshawar-zalmi-vs-hyderabad-campaign" className="text-[10px] font-black uppercase text-pak-green hover:underline">Match Preview →</Link>
                 <Link to="/blogs" className="text-[10px] font-black uppercase text-ink/40 hover:text-white transition-colors">Explore Blogs</Link>
              </div>
           </footer>
        </div>
      </motion.article>
    </div>
  );
}
