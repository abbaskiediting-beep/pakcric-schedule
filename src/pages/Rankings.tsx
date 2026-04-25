import { motion } from 'motion/react';
import { Trophy, Star, Users, ChevronRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';

export default function Rankings() {
  const t20Rankings = [
    'India', 'England', 'Australia', 'New Zealand', 'South Africa', 
    'Pakistan', 'Sri Lanka', 'West Indies', 'Afghanistan', 'Bangladesh'
  ];
  const odiRankings = [
    'India', 'Australia', 'South Africa', 'Pakistan', 'New Zealand', 
    'England', 'Sri Lanka', 'Afghanistan', 'Bangladesh', 'West Indies'
  ];
  const testRankings = [
    'Australia', 'India', 'England', 'South Africa', 'New Zealand', 
    'Sri Lanka', 'Pakistan', 'West Indies', 'Bangladesh', 'Ireland'
  ];

  const rankingCards = [
    { type: 'T20', teams: t20Rankings, color: 'from-purple-500/20 to-purple-600/20' },
    { type: 'ODI', teams: odiRankings, color: 'from-blue-500/20 to-blue-600/20' },
    { type: 'Test', teams: testRankings, color: 'from-orange-500/20 to-orange-600/20' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <Helmet>
        <title>Pakistan ICC Rankings 2026 – T20, ODI & Test Team Rankings</title>
        <meta name="description" content="Check Pakistan cricket team ICC rankings 2026 in T20, ODI, and Test formats with latest updates and full rankings overview." />
        <meta name="keywords" content="Pakistan ICC rankings, Pakistan team ranking 2026, ICC cricket standings, T20 ODI Test rankings Pakistan" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pakistan ICC Rankings 2026 – T20, ODI & Test Team Rankings" />
        <meta property="og:description" content="Check Pakistan cricket team ICC rankings 2026 in T20, ODI, and Test formats with latest updates and full rankings overview." />
        <meta property="og:image" content="https://pakcric-schedule.online/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Pakistan ICC Rankings 2026 – T20, ODI & Test Team Rankings" />
        <meta property="twitter:description" content="Check Pakistan cricket team ICC rankings 2026 in T20, ODI, and Test formats with latest updates and full rankings overview." />
        <meta property="twitter:image" content="https://pakcric-schedule.online/logo.png" />
      </Helmet>
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <span className="inline-block px-4 py-1 bg-pak-green/10 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-bold uppercase tracking-[4px] mb-6 shadow-sm">
          World Standings 2026
        </span>
        <h1 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8 text-white leading-tight">
          Pakistan ICC Rankings – <span className="text-pak-green">T20, ODI & Test</span>
        </h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-xl text-ink/80 font-medium leading-relaxed">
            Cricket rankings give a clear picture of how teams are performing on the international stage. For Pakistan fans, keeping track of the <Link to="/rankings" className="text-pak-green hover:underline">Pakistan ICC Rankings</Link> across formats is just as important as following <Link to="/schedule" className="text-pak-green hover:underline">match results</Link>.
          </p>
          <p className="text-ink/60 font-medium leading-relaxed">
            On this page, you’ll find the latest <Link to="/rankings" className="text-pak-green hover:underline">world rankings</Link> for 2026, including detailed insights into <strong>T20, ODI & Test</strong> standings. Everything is presented in a simple format so you can quickly understand where Pakistan stands globally compared to other teams.
          </p>
        </div>
      </motion.div>

      {/* Overview Section */}
      <section className="mb-24">
        <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-white mb-6">
            <Link to="/rankings" className="hover:text-pak-green">Pakistan Team <span className="text-pak-green">Rankings Overview</span></Link>
          </h2>
          <p className="text-ink/60 font-medium leading-relaxed max-w-4xl mb-10">
            Pakistan competes in all three formats of international cricket, and <Link to="/rankings" className="text-pak-green hover:underline">rankings</Link> vary depending on performance in each format. This gives a quick snapshot of how the team is doing overall across the <Link to="/schedule" className="text-pak-green hover:underline">cricket season</Link>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { format: 'T20', rank: '#6', trend: 'Steady', color: 'text-purple-400' },
              { format: 'ODI', rank: '#4', trend: 'Rising', color: 'text-blue-400' },
              { format: 'Test', rank: '#7', trend: 'Consistent', color: 'text-orange-400' }
            ].map((item) => (
              <div key={item.format} className="p-6 bg-black/40 border border-white/5 rounded-3xl text-center">
                <span className="text-[10px] font-bold text-ink/40 uppercase tracking-[3px] mb-2 block">{item.format} Ranking</span>
                <span className={`text-4xl font-display font-bold mb-2 block ${item.color}`}>{item.rank}</span>
                <span className="text-[9px] font-bold text-pak-green uppercase tracking-[2px]">{item.trend} Performance</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Banner on Rankings */}
      <AdPlaceholder type="leaderboard" className="mb-16" />

      {/* Team Rankings Section */}
      <section className="mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-4">
              ICC Team <span className="text-pak-green">Rankings 2026</span>
            </h2>
            <p className="text-ink/60 font-medium max-w-2xl">
              Team rankings reflect the collective performance of nations in bilateral series and ICC tournaments. Each format represents a different challenge for the top-tier teams.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {rankingCards.map((card, idx) => (
            <Link to={`/icc-${card.type.toLowerCase()}-ranking-2026`} key={card.type}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-gradient-to-br ${card.color} border border-card-border rounded-[40px] p-8 relative overflow-hidden shadow-2xl group cursor-pointer hover:border-pak-green/40 transition-all h-full flex flex-col`}
              >
                <div className="relative z-10 flex-1">
                  <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                    <h2 className="text-2xl font-display font-bold text-white uppercase">Pakistan {card.type} Ranking</h2>
                    <Trophy className="w-5 h-5 text-pak-green" />
                  </div>
                  <p className="text-[11px] text-white/50 font-medium mb-6 leading-relaxed">
                    {card.type === 'T20' ? 'T20 cricket is fast-paced and highly competitive, where even small performances can impact rankings. Position compared to other top teams varies with every series.' : 
                     card.type === 'ODI' ? 'ODI cricket requires a balance between batting and bowling. This format often reflects consistency over time and series performance.' : 
                     'Test cricket is considered the most challenging format. Rankings are based on long-term performance and home and away consistency.'}
                  </p>
                  <div className="space-y-3">
                    {card.teams.slice(0, 5).map((team, rankIdx) => (
                      <div 
                        key={team} 
                        className={`flex items-center justify-between p-3 rounded-2xl border transition-all ${
                          team === 'Pakistan' 
                            ? 'bg-pak-green/40 border-white shadow-lg' 
                            : 'bg-black/20 border-white/5 group-hover:bg-black/40'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className={`text-xs font-bold w-5 ${team === 'Pakistan' ? 'text-white' : 'text-neutral-500'}`}>
                            {rankIdx + 1}
                          </span>
                          <span className={`text-[11px] font-bold uppercase tracking-tight ${team === 'Pakistan' ? 'text-white' : 'text-white/80'}`}>
                            {team}
                          </span>
                        </div>
                        {team === 'Pakistan' && <Star className="w-3 h-3 text-white fill-white" />}
                      </div>
                    ))}
                    <div className="text-[10px] font-bold text-center pt-4 text-pak-green uppercase tracking-[4px] group-hover:tracking-[6px] transition-all">
                      View Full Ranking <ChevronRight className="inline w-3 h-3" />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-12 -right-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                   <Trophy className="w-64 h-64" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Mid-content Ad */}
      <AdPlaceholder type="native" className="mb-20" label="Global Cricket Insights" />

      {/* Championship Race (WTC/CT) Section */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-2 w-12 bg-pak-green rounded-full" />
          <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-white italic">Major Championship Pursuit</h2>
        </div>

        <Link to="/icc-wtc-projections-2026">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-card-bg border border-card-border rounded-[48px] p-8 md:p-16 mb-8 relative overflow-hidden group cursor-pointer hover:border-pak-green/30 transition-all shadow-3xl"
          >
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 bg-pak-green/10 text-pak-green rounded-full text-[10px] font-bold uppercase tracking-[3px] mb-8 border border-pak-green/20">
                  WTC Standings 2025-27
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter leading-none mb-8">
                  The Race to <span className="text-pak-green underline decoration-pak-green/20 underline-offset-8">Lord's 2027</span>
                </h2>
                <div className="space-y-6 mb-10">
                  <p className="text-ink/60 font-medium text-lg leading-relaxed max-w-lg">
                    The ICC World Test Championship is the pinnacle of the longest format. Pakistan is currently battling for a top-two finish to qualify for the historic final.
                  </p>
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
                    <p className="text-sm font-bold text-white mb-2">Current Standing: <span className="text-pak-green">5th Position</span></p>
                    <p className="text-xs text-ink/40 font-medium">Pakistan needs to win their upcoming home series against England and Bangladesh to climb the ladder.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.4em] text-pak-green group-hover:gap-6 transition-all">
                  Analyze Full Points Table <ChevronRight className="w-5 h-5" />
                </div>
              </div>
              <div className="hidden md:flex justify-end relative">
                <div className="w-80 h-80 rounded-[60px] bg-pak-green/5 border border-pak-green/10 flex items-center justify-center relative rotate-3 group-hover:rotate-0 transition-transform duration-700">
                    <Trophy className="w-40 h-40 text-pak-green opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pak-green/20 rounded-full blur-[60px]" />
                </div>
              </div>
            </div>
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(1,65,28,0.05),_transparent)] pointer-events-none" />
          </motion.div>
        </Link>
      </section>

      <AdPlaceholder type="banner" className="my-16" />

      {/* ICC Player Rankings Section */}
      <section className="mb-24">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-6">
            ICC Player <span className="text-pak-green">Rankings</span>
          </h2>
          <p className="text-ink/60 font-medium leading-relaxed">
            Individual brilliance is tracked across three disciplines: Batting, Bowling, and All-Rounders. These rankings evaluate player consistency and impact over a rolling period.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { 
              title: 'T20 Rankings', 
              color: 'from-purple-900/40 to-indigo-900/10', 
              desc: 'Explosive impact and strike-rate consistency in the shortest format.' 
            },
            { 
              title: 'ODI Rankings', 
              color: 'from-blue-900/40 to-cyan-900/10', 
              desc: 'Balanced performance records in the 50-over format.' 
            },
            { 
              title: 'Test Rankings', 
              color: 'from-orange-900/40 to-red-900/10', 
              desc: 'Technical endurance and grit in the pinnacle of cricket.' 
            }
          ].map(format => (
            <div key={format.title} className={`bg-gradient-to-br ${format.color} border border-card-border rounded-[40px] p-10 shadow-2xl flex flex-col`}>
               <h3 className="text-2xl font-display font-bold uppercase mb-4 text-white">{format.title}</h3>
               <p className="text-xs text-white/40 font-medium mb-8 leading-relaxed italic">{format.desc}</p>
               <div className="space-y-4 flex-1">
                  {[
                    { name: 'Batting', icon: <TrendingUp className="w-3 h-3" />, path: 'batting' },
                    { name: 'Bowling', icon: <TrendingUp className="w-3 h-3" />, path: 'bowling' },
                    { name: 'Allrounder', icon: <TrendingUp className="w-3 h-3" />, path: 'allrounder' }
                  ].map(cat => (
                    <Link 
                      key={cat.name}
                      to={`/rankings/${format.title.split(' ')[0].toLowerCase()}-${cat.path}`}
                      className="flex items-center justify-between p-5 bg-black/40 border border-white/5 rounded-2xl hover:bg-white hover:text-black transition-all group/link shadow-sm"
                    >
                      <span className="text-xs font-bold uppercase tracking-[0.2em]">{cat.name} Rankings</span>
                      <div className="group-hover/link:translate-x-1 transition-transform">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </Link>
                  ))}
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* ICC Rankings Factors */}
      <section className="mb-24">
        <div className="bg-white/[0.02] border border-card-border rounded-[48px] p-10 md:p-20 relative overflow-hidden group">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-8">
                How ICC <span className="text-pak-green">Rankings Work</span>
              </h2>
          <div className="space-y-6 text-ink/70 font-medium leading-relaxed">
            <p>
              The <Link to="/rankings" className="text-pak-green hover:underline">ICC rankings</Link> are based on a sophisticated points system that ensures rankings reflect overall team performance rather than just individual matches in a <Link to="/pakistan-upcoming-series-full-schedule" className="text-pak-green hover:underline">series</Link>.
            </p>
            <div className="space-y-4">
              {[
                { label: 'Match Results', desc: 'Points are awarded for winning matches, with extra weight for wins against higher-ranked opponents.', link: '/schedule' },
                { label: 'Opponent Strength', desc: 'The quality of the team significantly impacts the points gained or lost globally.', link: '/rankings' },
                { label: 'Series Outcomes', desc: 'Winning a full series provides significant bonus points to a team\'s overall rating.', link: '/schedule' },
                { label: 'Time Weighting', desc: 'Recent matches carry more weight compared to matches from previous cricket years.', link: '/news' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-pak-green mt-2 shrink-0" />
                  <div>
                    <Link to={item.link} className="block text-[10px] font-bold uppercase tracking-widest text-white mb-1 hover:text-pak-green">{item.label}</Link>
                    <span className="text-sm opacity-60">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
            </div>
            <div className="bg-pak-green/10 p-12 rounded-[40px] border border-pak-green/20">
               <TrendingUp className="w-20 h-20 text-pak-green mb-6 opacity-20" />
               <h3 className="text-xl font-display font-bold text-white uppercase mb-4">Why Rankings Are Important</h3>
               <p className="text-sm text-ink/60 font-medium leading-relaxed mb-8">
                  Rankings are more than just numbers — they show how competitive a team is at the international level. They help fans understand team progress, compare performance with others, and track improvements over time.
               </p>
               <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-black/20 rounded-2xl">
                     <span className="text-2xl font-bold text-white block">Form</span>
                     <span className="text-[8px] font-bold text-pak-green uppercase tracking-widest">Team Growth</span>
                  </div>
                  <div className="text-center p-4 bg-black/20 rounded-2xl">
                     <span className="text-2xl font-bold text-white block">Status</span>
                     <span className="text-[8px] font-bold text-pak-green uppercase tracking-widest">World Standing</span>
                  </div>
               </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-pak-green/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>
      </section>

      {/* Latest Rankings Update section */}
      <section className="mb-24 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-white mb-6">
          Latest Rankings <span className="text-pak-green">Updates</span>
        </h2>
        <p className="text-ink/60 font-medium leading-relaxed mb-10 text-lg">
          Rankings are updated regularly after matches and series. This page is refreshed frequently to ensure you always get the latest data. Make sure to check back often to stay updated with Pakistan’s position in world cricket.
        </p>
        <div className="overflow-x-auto rounded-[32px] border border-white/5 bg-white/5">
          <table className="w-full text-left">
            <thead className="bg-white/10">
              <tr>
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-white">Format</th>
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-white">Pakistan Ranking</th>
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-white">Current Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { format: 'T20 Internationals', rank: '6th', points: '248' },
                { format: 'ODI Internationals', rank: '4th', points: '109' },
                { format: 'Test Matches', rank: '7th', points: '88' }
              ].map((row) => (
                <tr key={row.format} className="hover:bg-white/5 transition-colors">
                  <td className="px-8 py-4 text-xs font-bold text-white/80">{row.format}</td>
                  <td className="px-8 py-4 text-xs font-bold text-pak-green">{row.rank}</td>
                  <td className="px-8 py-4 text-xs font-medium text-white/40">{row.points} Points</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <InternalLinkSection />
      
      {/* CTA Section */}
      <section className="mb-20">
        <div className="bg-card-bg border border-card-border rounded-[48px] p-10 md:p-16 text-center shadow-3xl shadow-black/40">
           <Star className="w-12 h-12 text-pak-green mx-auto mb-8 animate-pulse" />
           <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter text-white mb-6">Explore More <span className="text-pak-green">Pakistan Cricket Insights</span></h2>
           <p className="text-ink/60 font-medium max-w-2xl mx-auto mb-10 text-lg">
             Want more detailed information? Follow Pakistan's journey as they climb the ladders across all formats.
           </p>
           <div className="flex flex-wrap justify-center gap-6">
              <Link to="/schedule" className="px-12 py-4 bg-pak-green text-white rounded-2xl text-[11px] font-bold uppercase tracking-[4px] hover:shadow-pak-green/30 hover:shadow-2xl transition-all active:scale-95">Check Schedule</Link>
              <Link to="/news" className="px-12 py-4 bg-white/5 border border-white/20 text-white rounded-2xl text-[11px] font-bold uppercase tracking-[4px] hover:bg-white hover:text-black transition-all active:scale-95">Read Latest News</Link>
           </div>
           <div className="mt-16 flex flex-wrap justify-center gap-8 border-t border-white/5 pt-10">
              <Link to="/squads" className="text-[10px] font-bold uppercase tracking-[3px] text-ink/40 hover:text-pak-green transition-colors">Squad Updates</Link>
              <Link to="/players-stats" className="text-[10px] font-bold uppercase tracking-[3px] text-ink/40 hover:text-pak-green transition-colors">Player Stats Hub</Link>
              <Link to="/" className="text-[10px] font-bold uppercase tracking-[3px] text-ink/40 hover:text-pak-green transition-colors">Home Dashboard</Link>
           </div>
        </div>
      </section>
    </div>
  );
}
