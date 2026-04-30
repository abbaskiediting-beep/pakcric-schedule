import { Calendar, Clock, MapPin, Trophy, History, Info, ChevronRight, ArrowLeft, Star, Target, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function PakistanVsAustralia2026Schedule() {
  const seriesTitle = "Australia Tour of Pakistan 2026: ODI Series Schedule";
  
  const matches = [
    {
      id: 'aus-odi-1',
      title: '1st ODI',
      date: 'May 31, 2026',
      time: '14:30 PKT',
      venue: 'Gaddafi Stadium, Lahore',
      highlight: 'Series Opener',
    },
    {
      id: 'aus-odi-2',
      title: '2nd ODI',
      date: 'June 2, 2026',
      time: '14:30 PKT',
      venue: 'Gaddafi Stadium, Lahore',
      highlight: 'Critical Mid-Series Clash',
    },
    {
      id: 'aus-odi-3',
      title: '3rd ODI',
      date: 'June 4, 2026',
      time: '14:30 PKT',
      venue: 'Gaddafi Stadium, Lahore',
      highlight: 'Grand Finale',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050806] text-white pb-20 font-sans selection:bg-pak-green selection:text-white">
      <Helmet>
        <title>{seriesTitle} | PakCric Schedule</title>
        <meta name="description" content="Official schedule for Australia tour of Pakistan 2026 ODI series. Get match dates, venues, timings, and historical context for Pak vs Aus ODIs in Lahore." />
      </Helmet>

      {/* Hero Header */}
      <div className="relative py-24 bg-[#08110a] border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-pak-green/5 blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-yellow-500/5 blur-[80px]" />
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <Link to="/schedule" className="inline-flex items-center gap-2 text-pak-green text-[10px] font-black uppercase tracking-widest mb-8 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft className="w-4 h-4" /> Back to Full Schedule
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-pak-green uppercase tracking-[3px] mb-6"
              >
                <Trophy className="w-3.5 h-3.5" />
                White-Ball Showdown
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-7xl font-display font-black leading-[0.95] tracking-tighter mb-6 uppercase italic"
              >
                Australia Tour <br />
                <span className="text-pak-green">Of Pakistan 2026</span>
              </motion.h1>
              <p className="text-white/60 text-lg leading-relaxed font-medium">
                The giants of cricket collide in the heart of Lahore. Three ODIs, one legendary venue, and a historic rivalry renewed at the Gaddafi Stadium.
              </p>
            </div>
            
            <div className="flex items-center gap-4 border border-white/10 bg-white/5 p-6 rounded-[2rem] backdrop-blur-sm">
              <div className="text-center px-4">
                 <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Previous ODI Series</p>
                 <p className="text-2xl font-display font-black text-pak-green">PAK 2-1 AUS</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center px-4">
                 <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Format</p>
                 <p className="text-2xl font-display font-black">ODI (50 Over)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content: Schedule */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-10">
              <Calendar className="w-6 h-6 text-pak-green" />
              <h2 className="text-2xl font-display font-black uppercase tracking-tight italic">Match Fixtures</h2>
            </div>

            <div className="space-y-6">
              {matches.map((match, idx) => (
                <motion.div 
                  key={match.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-white/[0.04] hover:border-pak-green/30 transition-all cursor-default"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-[1.5rem] bg-pak-green/10 flex items-center justify-center text-pak-green group-hover:scale-110 transition-transform">
                        <span className="text-2xl font-display font-black">{idx + 1}</span>
                      </div>
                      <div>
                        <p className="text-pak-green text-[10px] font-black uppercase tracking-widest mb-1">{match.highlight}</p>
                        <h3 className="text-2xl font-display font-black uppercase mb-1">{match.title}</h3>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/40 text-[10px] font-black uppercase tracking-widest font-mono">
                          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {match.date}</span>
                          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {match.time}</span>
                          <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {match.venue}</span>
                        </div>
                      </div>
                    </div>
                    <Link to={`/match/${match.id}`} className="px-6 py-3 bg-pak-green text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
                      Match Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tactical & Detailed Analysis Section */}
            <div className="mt-20 space-y-16">
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <h2 className="text-xl font-display font-black uppercase tracking-tight italic">Series Significance</h2>
                </div>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-white/60 leading-relaxed font-medium">
                    This three-match ODI series, scheduled for Lahore's iconic Gaddafi Stadium, is a pivotal component of a massive 2026 international calendar for both nations. Following a high-octane T20I stretch in January, these 50-over matches serve as a critical bridge toward global tournament preparation.
                  </p>
                  <p className="text-lg text-white/60 leading-relaxed font-medium">
                    Australia is expected to bring a <strong className="text-white">full-strength squad</strong>, featuring the likes of Travis Head and Pat Cummins, anticipating the unique challenges of subcontinental conditions before they head to Bangladesh.
                  </p>
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-white/5">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-pak-green">
                    <History className="w-5 h-5" />
                    <h3 className="text-sm font-black uppercase tracking-widest">Historical Context</h3>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Memory of 2022 remains fresh for fans in Lahore. Pakistan's top-order masterclass secured a 2-1 series victory back then, marking a significant milestone in their recent ODI dominance at home. Australia hasn't forgotten that clinical defeat.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-yellow-500">
                    <Target className="w-5 h-5" />
                    <h3 className="text-sm font-black uppercase tracking-widest">Pitch & Venue</h3>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Gaddafi Stadium is known for its high-scoring nature under lights. However, with the matches scheduled for early June, the dry Lahore heat will likely introduce a spin element from the midway point of the first innings.
                  </p>
                </div>
              </div>

              <section className="p-10 bg-white/5 border border-white/10 rounded-[3rem]">
                <div className="flex items-center gap-3 mb-8">
                  <Users className="w-6 h-6 text-pak-green" />
                  <h2 className="text-xl font-display font-black uppercase tracking-tight italic">Squad Anticipation</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[3px] text-white/30 mb-4">Pakistan Core</h4>
                    <ul className="space-y-3">
                      {['Babar Azam (C)', 'Mohammad Rizwan', 'Shaheen Afridi', 'Naseem Shah', 'Saim Ayub'].map((player, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-bold text-white/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-pak-green" />
                          {player}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[3px] text-white/30 mb-4">Expected Aus Stars</h4>
                    <ul className="space-y-3">
                      {['Mitchell Marsh', 'Travis Head', 'Pat Cummins', 'Adam Zampa', 'Steve Smith'].map((player, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-bold text-white/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                          {player}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="sticky top-24 space-y-10">
              
              {/* Quick Summary Card */}
              <div className="p-8 bg-[#0a110d] border border-white/10 rounded-[2.5rem]">
                <div className="flex items-center gap-2 mb-6">
                  <Info className="w-5 h-5 text-pak-green" />
                  <h4 className="text-lg font-display font-black uppercase italic tracking-tighter">Series Highlights</h4>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Venue', val: 'All Matches at Lahore' },
                    { label: 'Surface', val: 'Fast & High Scoring' },
                    { label: 'Defending', val: 'Pakistan won 2-1 in 2022' },
                    { label: 'Key Factor', val: 'Afternoon Heat adaptions' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                       <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">{item.label}</span>
                       <span className="text-xs font-bold text-white">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Internal Transfers */}
              <div className="p-1 w-full rounded-[2.5rem] bg-gradient-to-br from-pak-green/20 to-transparent">
                <div className="p-8 bg-[#050806] rounded-[calc(2.5rem-4px)]">
                  <h5 className="text-sm font-black uppercase tracking-widest text-pak-green mb-6">Related Analysis</h5>
                  <div className="space-y-4">
                    <Link to="/pakistan-upcoming-series-full-schedule" className="flex items-center justify-between group">
                      <span className="text-xs font-bold text-white/60 group-hover:text-white transition-colors">2026 Home Schedule</span>
                      <ChevronRight className="w-4 h-4 text-pak-green group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/the-evolution-of-the-shaheens-2026-strategy" className="flex items-center justify-between group">
                      <span className="text-xs font-bold text-white/60 group-hover:text-white transition-colors">White Ball Strategy</span>
                      <ChevronRight className="w-4 h-4 text-pak-green group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
