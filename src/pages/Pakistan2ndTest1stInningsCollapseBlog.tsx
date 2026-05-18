import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Calendar, MapPin, Trophy, Target, ChevronRight, Star, AlertTriangle, Users, BarChart3, Clock, Quote, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pakistan2ndTest1stInningsCollapseBlog = () => {
  const scorecard = [
    { name: 'Azan Awais', runs: 13, balls: 34, fours: 3, sixes: 0 },
    { name: 'Abdullah Fazal', runs: 9, balls: 21, fours: 1, sixes: 0 },
    { name: 'Shan Masood', runs: 21, balls: 26, fours: 2, sixes: 0 },
    { name: 'Babar Azam', runs: 68, balls: 84, fours: 10, sixes: 0 },
    { name: 'Saud Shakeel', runs: 8, balls: 28, fours: 1, sixes: 0 },
    { name: 'Salman Ali Agha', runs: 21, balls: 51, fours: 2, sixes: 0 },
    { name: 'Mohammad Rizwan', runs: 13, balls: 27, fours: 2, sixes: 0 },
    { name: 'Hasan Ali', runs: 18, balls: 37, fours: 3, sixes: 0 },
    { name: 'Sajid Khan', runs: 38, balls: 28, fours: 2, sixes: 4 },
    { name: 'Khurram Shahzad', runs: 10, balls: 10, fours: 1, sixes: 1 },
    { name: 'Mohammad Abbas', runs: '0*', balls: 4, fours: 0, sixes: 0 },
  ];

  const highlights = [
    { 
      title: "Taskin's New Ball Pressure", 
      desc: "Taskin Ahmed struck early removing both Azan Awais and Abdullah Fazal, leaving Pakistan reeling.", 
      icon: Target, 
      color: "text-blue-500", 
      bg: "bg-blue-500/10" 
    },
    { 
      title: "Babar's Lone Stand", 
      desc: "Babar Azam scored a classy 68 off 84 balls, showcasing his technical brilliance before falling to Nahid Rana.", 
      icon: Star, 
      color: "text-yellow-500", 
      bg: "bg-yellow-500/10" 
    },
    { 
      title: "Nahid Rana: The Enforcer", 
      desc: "Nahid Rana's pace and aggression accounted for Babar Azam and the lower order, finishing with key wickets.", 
      icon: Zap, 
      color: "text-red-500", 
      bg: "bg-red-500/10" 
    },
    { 
      title: "Sajid's Late Blitz", 
      desc: "Sajid Khan smashed four massive sixes in a quickfire 38, providing some respectability to the total.", 
      icon: Trophy, 
      color: "text-emerald-500", 
      bg: "bg-emerald-500/10" 
    }
  ];

  return (
    <div className="min-h-screen bg-bg">
      <Helmet>
        <title>Pakistan 1st Innings Batting vs Bangladesh 2nd Test 2026 | PakCric</title>
        <meta name="description" content="Babar Azam scores 68 but Pakistan struggle in the 1st innings of the 2nd Test vs Bangladesh. Full batting analysis, collapses, partnerships, and key moments from Sylhet." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop" 
            alt="Cricket Stadium" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-pak-green/20 text-pak-green text-[10px] font-black tracking-widest uppercase rounded-full border border-pak-green/30">
                Match Report
              </span>
              <span className="flex items-center gap-1.5 text-neutral-500 text-[10px] font-bold uppercase tracking-widest">
                <Calendar className="w-3 h-3" /> May 17, 2026
              </span>
              <span className="flex items-center gap-1.5 text-neutral-500 text-[10px] font-bold uppercase tracking-widest">
                <MapPin className="w-3 h-3" /> Sylhet
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
              Pakistan Collapse Despite <span className="text-pak-green">Babar Azam's</span> Fighting Fifty in 2nd Test
            </h1>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-pak-green">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hassan" alt="Hassan Tariq" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Hassan Tariq</p>
                <p className="text-neutral-500 text-xs font-medium italic">Senior Cricket Analyst</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Body Text */}
            <div className="lg:col-span-8 space-y-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="prose prose-invert prose-pak max-w-none"
              >
                <p className="text-xl text-neutral-300 leading-relaxed font-medium mb-12 border-l-4 border-pak-green pl-6 italic bg-pak-green/5 py-4 rounded-r-xl">
                  Pakistan’s first innings in the 2nd Test against Bangladesh told the story of a batting lineup fighting hard but ultimately failing to build one dominant partnership capable of taking control of the match.
                </p>

                <div className="space-y-6 text-neutral-400 leading-relaxed">
                  <p>
                    After losing the opening Test in Mirpur, Pakistan entered Sylhet under immense pressure. Questions surrounded the batting unit, the middle order, and the team’s ability to survive Bangladesh’s disciplined spin attack. While Babar Azam produced a composed half-century and a few lower-order contributions gave brief hope, Pakistan once again failed to capitalize on starts.
                  </p>
                  <p>
                    Bangladesh’s bowlers — led by Nahid Rana, Taskin Ahmed, Taijul Islam, and Mehidy Hasan Miraz — consistently applied pressure throughout the innings. Wickets arrived at regular intervals, partnerships never fully developed, and Pakistan allowed Bangladesh to dominate long periods of the day.
                  </p>
                </div>

                <div className="my-12 p-8 bg-card-bg/50 border border-card-border rounded-3xl overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pak-green/5 -mr-16 -mt-16 rounded-full blur-3xl group-hover:bg-pak-green/10 transition-all" />
                  <h3 className="text-white font-black text-xl mb-6 flex items-center gap-3">
                    <BarChart3 className="w-6 h-6 text-pak-green" /> Pakistan 1st Innings Scorecard
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="py-4 text-[10px] font-black text-neutral-500 uppercase tracking-widest">Batter</th>
                          <th className="py-4 text-[10px] font-black text-neutral-500 uppercase tracking-widest">Runs</th>
                          <th className="py-4 text-[10px] font-black text-neutral-500 uppercase tracking-widest">Balls</th>
                          <th className="py-4 text-[10px] font-black text-neutral-500 uppercase tracking-widest">4s</th>
                          <th className="py-4 text-[10px] font-black text-neutral-500 uppercase tracking-widest">6s</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scorecard.map((player, idx) => (
                          <tr key={idx} className="border-b border-white/5 group/row hover:bg-white/5 transition-colors">
                            <td className="py-4 font-bold text-neutral-200 group-hover/row:text-white">{player.name}</td>
                            <td className="py-4 font-black text-pak-green">{player.runs}</td>
                            <td className="py-4 text-neutral-400 font-mono text-xs">{player.balls}</td>
                            <td className="py-4 text-neutral-400 font-mono text-xs">{player.fours}</td>
                            <td className="py-4 text-neutral-400 font-mono text-xs">{player.sixes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <h2 className="text-3xl font-black text-white mt-16 mb-8 uppercase tracking-tight">Early Trouble — <span className="text-red-500">Dual Strike</span> by Taskin</h2>
                <div className="space-y-6 text-neutral-400 leading-relaxed">
                  <p>
                    Pakistan’s innings began nervously. Young opener Azan Awais, who impressed heavily in the previous Test with a debut century, could not repeat his Mirpur heroics. Taskin Ahmed produced disciplined seam bowling early and removed both openers before Pakistan could settle.
                  </p>
                  <p>
                    Azan Awais scored 13 from 34 deliveries with three boundaries before edging Taskin Ahmed to Mominul Haque. Abdullah Fazal followed shortly after for 9, caught behind by Litton Das off Taskin. The dismissals once again exposed Pakistan’s fragile start in overseas Test conditions.
                  </p>
                </div>

                <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8 bg-blue-500/5 border border-blue-500/20 rounded-3xl">
                    <Quote className="w-8 h-8 text-blue-500/30 mb-4" />
                    <p className="text-white text-lg font-medium leading-relaxed italic">
                      "Masood looked positive but fell just when he was set. This transition phase is proving difficult for the leadership group."
                    </p>
                  </div>
                  <div className="p-8 bg-pak-green/5 border border-pak-green/20 rounded-3xl flex flex-col justify-center">
                    <h4 className="text-pak-green font-black text-4xl mb-2 tracking-tighter">68</h4>
                    <p className="text-neutral-400 text-sm font-bold uppercase tracking-widest">Babar Azam's Fighting Score</p>
                  </div>
                </div>

                <h2 className="text-3xl font-black text-white mt-16 mb-8 uppercase tracking-tight">Babar Azam — <span className="text-yellow-500">Lone Class Act</span></h2>
                <div className="space-y-6 text-neutral-400 leading-relaxed">
                  <p>
                    If one innings stood above the rest, it was Babar Azam’s 68. Coming into the Test under pressure after inconsistent red-ball performances and fitness concerns earlier in the tour, Babar looked composed, technically compact, and far more fluent than in recent matches.
                  </p>
                  <div className="bg-yellow-500/5 border border-yellow-500/20 p-6 rounded-2xl my-8">
                     <p className="text-yellow-500 font-black text-sm uppercase tracking-widest mb-4">Innings Breakdown</p>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-3 bg-white/5 rounded-xl">
                           <p className="text-neutral-500 text-[10px] font-black uppercase">Runs</p>
                           <p className="text-xl font-bold text-white">68</p>
                        </div>
                        <div className="text-center p-3 bg-white/5 rounded-xl">
                           <p className="text-neutral-500 text-[10px] font-black uppercase">Balls</p>
                           <p className="text-xl font-bold text-white">84</p>
                        </div>
                        <div className="text-center p-3 bg-white/5 rounded-xl">
                           <p className="text-neutral-500 text-[10px] font-black uppercase">Fours</p>
                           <p className="text-xl font-bold text-white">10</p>
                        </div>
                        <div className="text-center p-3 bg-white/5 rounded-xl">
                           <p className="text-neutral-500 text-[10px] font-black uppercase">SR</p>
                           <p className="text-xl font-bold text-white">80.95</p>
                        </div>
                     </div>
                  </div>
                  <p>
                    From the beginning of his innings, Babar looked determined to control the scoring tempo rather than simply survive. He drove beautifully through cover, punished width square of the wicket, and looked particularly comfortable against pace bowling.
                  </p>
                </div>

                <h2 className="text-3xl font-black text-white mt-16 mb-8 uppercase tracking-tight">The Problem — <span className="text-pak-green">No Support</span></h2>
                <div className="space-y-6 text-neutral-400 leading-relaxed">
                  <p>
                    The major issue for Pakistan was simple: Nobody stayed long enough with Babar. While Babar controlled one end, wickets continued falling at the other: Saud Shakeel scored only 8, Salman Ali Agha got 21, and Rizwan managed 13.
                  </p>
                  <p>
                    The pressure eventually reached Babar himself. Nahid Rana finally broke through with the key wicket. Babar edged behind to Mushfiqur Rahim after scoring 68. Once Babar departed, Pakistan’s hopes of a major total collapsed rapidly.
                  </p>
                </div>

                <h2 className="text-3xl font-black text-white mt-16 mb-8 uppercase tracking-tight">Sajid Khan’s <span className="text-emerald-500">Counterattack</span></h2>
                <div className="space-y-6 text-neutral-400 leading-relaxed">
                  <p>
                    Just when Pakistan looked set for a complete collapse, Sajid Khan produced an entertaining counterattack. He attacked Bangladesh’s spinners fearlessly and briefly changed the momentum of the innings.
                  </p>
                  <p>
                    His four sixes provided valuable lower-order runs and pushed Pakistan toward a more competitive total of 232. However, the late resistance was never enough to fully recover the innings.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Key Highlights Card */}
              <div className="p-8 bg-card-bg border border-card-border rounded-3xl shadow-xl sticky top-24">
                <h3 className="text-white font-black text-lg mb-8 uppercase tracking-widest flex items-center gap-2">
                  <Target className="w-5 h-5 text-pak-green" /> Key Moments
                </h3>
                <div className="space-y-6">
                  {highlights.map((item, idx) => (
                    <div key={idx} className="flex gap-4 group cursor-default">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center transition-transform group-hover:scale-110`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                        <p className="text-neutral-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-red-500/5 border border-red-500/10 rounded-2xl">
                  <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500" /> Critical Flaws
                  </h4>
                  <ul className="space-y-3">
                    {["No Big Partnership", "Middle Order Collapse", "Babar Overdependence", "Spin Vulnerability"].map((flaw, i) => (
                      <li key={i} className="flex items-center gap-2 text-neutral-400 text-[10px] font-bold uppercase">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> {flaw}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-8 border-t border-card-border">
                  <Link 
                    to="/match/pak-vs-ban-2nd-test-2026"
                    className="w-full py-4 bg-pak-green text-white font-black text-xs uppercase tracking-[3px] rounded-2xl flex items-center justify-center gap-2 hover:bg-pak-green/90 transition-colors"
                  >
                    Match Center <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Related News */}
              <div className="p-8 bg-card-bg border border-card-border rounded-3xl">
                <h3 className="text-white font-black text-lg mb-6 uppercase tracking-widest">More Updates</h3>
                <div className="space-y-4">
                  <Link to="/news/pak-vs-ban-2nd-test-day-2-session-1-report-sylhet-2026" className="block group">
                    <p className="text-neutral-500 text-[10px] font-bold uppercase mb-1">Session Update</p>
                    <h5 className="text-sm font-bold text-neutral-200 group-hover:text-pak-green transition-colors leading-tight">Day 2 Session 1: Babar 37* Holds Firm</h5>
                  </Link>
                  <Link to="/news/why-bangladesh-are-unbeatable-at-home-test-cricket-report" className="block group pt-4 border-t border-card-border">
                    <p className="text-neutral-500 text-[10px] font-bold uppercase mb-1">Analysis</p>
                    <h5 className="text-sm font-bold text-neutral-200 group-hover:text-emerald-500 transition-colors leading-tight">Why Bangladesh Are Almost Unbeatable at Home</h5>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Conclusion */}
      <section className="py-20 bg-card-bg/30 border-y border-card-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">Can Pakistan Recover?</h2>
          <p className="text-lg text-neutral-400 leading-relaxed mb-10">
            Despite Babar Azam’s fighting 68 and some late lower-order resistance, Pakistan will likely feel disappointed with this batting effort. The innings lacked one major century and long partnerships. Pakistan now need disciplined bowling and early wickets if they want to avoid another defeat in the series.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <Link to="/news" className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-sm hover:bg-white/10 transition-all uppercase tracking-widest">
               Back to News
             </Link>
             <Link to="/pakistan-vs-bangladesh-2026-schedule" className="px-8 py-4 bg-pak-green text-white rounded-2xl font-black text-sm hover:bg-pak-green/90 transition-all uppercase tracking-widest">
               View Series Schedule
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pakistan2ndTest1stInningsCollapseBlog;
