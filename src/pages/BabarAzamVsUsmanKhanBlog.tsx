import { motion } from 'motion/react';
import { Trophy, Zap, Target, TrendingUp, Star, ArrowLeft, BarChart3, Users, Crown, ZapOff, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import { LinkText } from '../components/LinkText';

export default function BabarAzamVsUsmanKhanBlog() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>Babar Azam vs Usman Khan: PSL 2026 Batting Comparison | Pakistan Cricket Analytics</title>
        <meta 
          name="description" 
          content="Elegance vs explosive power. A stat-by-stat comparison of PSL 2026's two biggest batting stories: Babar Azam and Usman Khan." 
        />
      </Helmet>

      <Link 
        to="/blogs" 
        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Analysis
      </Link>

      <motion.article 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="mb-10 text-center">
          <span className="px-3 py-1 bg-pak-green/10 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">
            PSL 2026 • Batting Analysis
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-none mb-6 text-white">
            Babar Azam vs Usman Khan — <span className="text-pak-green">PSL 2026 Batting Comparison</span>
          </h1>
          <p className="text-lg md:text-xl text-ink/60 font-medium italic max-w-2xl mx-auto">
            "Elegance vs explosive power. The PSL final's two biggest batting stories, compared stat by stat."
          </p>
        </div>

        {/* Comparison Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/10 rounded-[40px] overflow-hidden mb-12 relative shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-bg border border-white/10 flex items-center justify-center z-20 text-[10px] font-black uppercase tracking-widest text-neutral-500 hidden md:flex">
            VS
          </div>
          
          {/* Babar Side */}
          <div className="p-8 md:p-12 bg-pak-green/5 relative group">
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-full bg-pak-green/20 border border-pak-green/30 flex items-center justify-center mx-auto mb-6 text-2xl font-display font-bold text-pak-green shadow-lg shadow-pak-green/10">
                BA
              </div>
              <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight mb-1">Babar Azam</h3>
              <p className="text-[10px] font-black uppercase tracking-widest text-pak-green mb-4">Peshawar Zalmi</p>
              <span className="px-4 py-1.5 rounded-full bg-pak-green/10 border border-pak-green/20 text-[9px] font-bold uppercase tracking-widest text-pak-green">Opener</span>
            </div>
          </div>

          {/* Usman Side */}
          <div className="p-8 md:p-12 bg-blue-500/5 relative group">
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-6 text-2xl font-display font-bold text-blue-400 shadow-lg shadow-blue-500/10">
                UK
              </div>
              <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight mb-1">Usman Khan</h3>
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-4">Hyderabad Kingsmen</p>
              <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] font-bold uppercase tracking-widest text-blue-400">Wkt-keeper batter</span>
            </div>
          </div>
        </div>

        {/* Season Snapshot Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-white/5"></div>
            <h4 className="text-[10px] font-black uppercase tracking-[4px] text-neutral-500">Season Snapshot — PSL 2026</h4>
            <div className="h-px flex-1 bg-white/5"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard label="Runs scored" babar="588" usman="381" winner="babar" />
            <StatCard label="Batting average" babar="84.00" usman="28.44" winner="babar" />
            <StatCard label="Strike rate" babar="146.26" usman="214.89*" winner="usman" info="*Usman's SR on century innings; season overall ~152" />
            <StatCard label="Centuries" babar="1" usman="1" winner="equal" />
            <StatCard label="Fifties" babar="7" usman="3" winner="babar" />
            <StatCard label="Innings played" babar="10" usman="10" winner="equal" info="Usman has fewer not-outs" />
          </div>
        </div>

        {/* Tactical Story */}
        <div className="prose dark:prose-invert prose-p:text-ink/70 prose-p:leading-relaxed prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tighter max-w-none mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-white/5"></div>
            <h4 className="text-[10px] font-black uppercase tracking-[4px] text-neutral-500">The Story Behind The Numbers</h4>
            <div className="h-px flex-1 bg-white/5"></div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl text-white mb-6 flex items-center gap-3">
              <Crown className="w-8 h-8 text-pak-green" /> Babar Azam — A King Reclaims His Throne
            </h2>
            <p className="text-lg">
              <LinkText text="Coming into PSL 2026, Babar Azam had endured his worst season on record — just 288 runs in PSL 2025, dropped from the Pakistan T20I bench, and a relentless barrage of criticism about his slow strike rate. The narrative around him had turned deeply negative. Then came PSL 2026, and Babar rewrote it entirely." />
            </p>
            <p>
              Across 10 innings, he amassed 588 runs at a jaw-dropping average of 84.00 and a strike rate of 146.26 — by far his best ever combined average-and-strike-rate season in the PSL. He scored two centuries (only the second batter ever to do so in a single PSL edition), seven fifties, and became the first batter to equal Fakhar Zaman's all-time single-season PSL record — in three fewer innings. Perhaps most tellingly, he hit 15 sixes this season — his most ever in a PSL edition — silencing the critics who questioned his attacking intent. He is, without question, PSL 2026's standout batter.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl text-white mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-blue-400" /> Usman Khan — PSL's Most Explosive Match-Winner
            </h2>
            <p className="text-lg">
              <LinkText text="Where Babar is poetry, Usman Khan is detonation. The Hyderabad Kingsmen wicket-keeper batter entered PSL 2026 under his own pressure — an alarming T20I average of under 19 since the 2024 World Cup had cast doubt on his place in Pakistan's plans. At the PSL though, a completely different player emerged." />
            </p>
            <p>
              His century against Quetta in Eliminator 1 warmup — 61 off 30 balls — came at a strike rate of 203.33, a number that simply does not seem real. His partnership with Kusal Perera in the Eliminator 2 turned the match. Usman's PSL story is one of cricket's most remarkable dualities. In T20 internationals his strike rate sits at 121.85. In the PSL it is close to 160 — nearly 40 points higher. Of his six career T20 hundreds, four have come in the PSL. He is, in every sense, a PSL-made player.
            </p>
          </section>

          <h2 className="text-2xl mt-16 mb-8 text-center text-white italic">Career PSL Record — The Bigger Picture</h2>
          <div className="overflow-hidden rounded-3xl border border-card-border bg-card-bg mb-20 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-5 text-[10px] font-black uppercase tracking-widest text-ink/40">Batter</th>
                  <th className="p-5 text-[10px] font-black uppercase tracking-widest text-ink/40">Matches</th>
                  <th className="p-5 text-[10px] font-black uppercase tracking-widest text-ink/40">Runs</th>
                  <th className="p-5 text-[10px] font-black uppercase tracking-widest text-ink/40">Average</th>
                  <th className="p-5 text-[10px] font-black uppercase tracking-widest text-ink/40">SR</th>
                  <th className="p-5 text-[10px] font-black uppercase tracking-widest text-ink/40">100s</th>
                  <th className="p-5 text-[10px] font-black uppercase tracking-widest text-ink/40">50s</th>
                </tr>
              </thead>
              <tbody className="text-sm font-bold">
                <tr className="border-b border-white/5">
                  <td className="p-5 text-white">Babar Azam</td>
                  <td className="p-5 text-ink/60 font-mono">107</td>
                  <td className="p-5 text-white font-mono">4,193</td>
                  <td className="p-5 text-ink/60 font-mono">47.11</td>
                  <td className="p-5 text-ink/60 font-mono">128.89</td>
                  <td className="p-5">
                    <span className="px-3 py-1 bg-pak-green/10 text-pak-green rounded-full font-mono">4</span>
                  </td>
                  <td className="p-5">
                    <span className="px-3 py-1 bg-white/5 text-ink/60 rounded-full font-mono">41</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-5 text-white">Usman Khan</td>
                  <td className="p-5 text-ink/40 font-mono italic">~35</td>
                  <td className="p-5 text-white font-mono italic">~900+</td>
                  <td className="p-5 text-ink/40 font-mono italic">~35</td>
                  <td className="p-5 text-ink/40 font-mono italic">~158</td>
                  <td className="p-5">
                    <span className="px-3 py-1 bg-pak-green/10 text-pak-green rounded-full font-mono">4</span>
                  </td>
                  <td className="p-5">
                    <span className="px-3 py-1 bg-white/5 text-ink/60 rounded-full font-mono">8</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-[40px] bg-pak-green/5 border border-pak-green/10">
              <h3 className="text-xl font-display font-bold uppercase text-white mb-6">Babar Azam: The volume scorer</h3>
              <ul className="space-y-4 m-0 p-0 list-none">
                <li className="flex items-start gap-3 text-sm text-ink/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-pak-green mt-1.5 shrink-0" />
                  Most runs in PSL 2026 — 588
                </li>
                <li className="flex items-start gap-3 text-sm text-ink/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-pak-green mt-1.5 shrink-0" />
                  Highest average — 84.00
                </li>
                <li className="flex items-start gap-3 text-sm text-ink/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-pak-green mt-1.5 shrink-0" />
                  2 centuries, 7 fifties — consistency unmatched
                </li>
                <li className="flex items-start gap-3 text-sm text-ink/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-pak-green mt-1.5 shrink-0" />
                  Career PSL GOAT — 4,193 runs, 107 matches
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-[40px] bg-blue-500/5 border border-blue-500/10">
              <h3 className="text-xl font-display font-bold uppercase text-white mb-6">Usman Khan: The impact batter</h3>
              <ul className="space-y-4 m-0 p-0 list-none">
                <li className="flex items-start gap-3 text-sm text-ink/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                  Highest strike rate among century-makers — 214.89
                </li>
                <li className="flex items-start gap-3 text-sm text-ink/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                  Match-winning cameos when team needed most
                </li>
                <li className="flex items-start gap-3 text-sm text-ink/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                  4 PSL career centuries — equal to Babar in that metric
                </li>
                <li className="flex items-start gap-3 text-sm text-ink/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                  Carried Hyderabad into the PSL 2026 Final
                </li>
              </ul>
            </div>
          </div>

          <div className="p-10 rounded-[48px] bg-white/[0.03] border border-white/10 relative overflow-hidden text-center">
            <h3 className="text-2xl font-display font-bold text-white uppercase mb-4">Bottom line</h3>
            <p className="text-lg text-ink/60 italic leading-relaxed max-w-3xl mx-auto">
              Babar Azam wins this PSL 2026 comparison on almost every volume metric — runs, average, and consistency. But Usman Khan wins it on entertainment value and match impact. If Babar is the foundation on which Zalmi's season was built, Usman is the dynamite that blew open the Eliminator. The PSL final on May 3 will pit both of them against each other — and Pakistan cricket could not have scripted a better showdown.
            </p>
          </div>
        </div>

        <AuthorSection authorId="omar-farooq" />
      </motion.article>
    </div>
  );
}

function StatCard({ label, babar, usman, winner, info }: { label: string, babar: string, usman: string, winner: 'babar' | 'usman' | 'equal', info?: string }) {
  return (
    <div className="bg-white/[0.03] border border-white/5 p-6 rounded-3xl relative overflow-hidden group hover:border-white/10 transition-colors">
      <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-6">{label}</p>
      
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className={`text-[9px] font-bold uppercase tracking-widest ${winner === 'babar' ? 'text-pak-green' : 'text-ink/30'}`}>Babar {winner === 'babar' && '↑'}</span>
            <span className={`text-xl font-display font-bold ${winner === 'babar' ? 'text-pak-green' : 'text-ink/40'}`}>{babar}</span>
          </div>
          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: winner === 'babar' ? '100%' : '60%' }}
               viewport={{ once: true }}
               className={`h-full ${winner === 'babar' ? 'bg-pak-green' : 'bg-ink/10'}`} 
             />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <span className={`text-[9px] font-bold uppercase tracking-widest ${winner === 'usman' ? 'text-blue-400' : 'text-ink/30'}`}>Usman {winner === 'usman' && '↑'}</span>
            <span className={`text-xl font-display font-bold ${winner === 'usman' ? 'text-blue-400' : 'text-ink/40'}`}>{usman}</span>
          </div>
          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
             <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: winner === 'usman' ? '100%' : '40%' }}
                viewport={{ once: true }}
                className={`h-full ${winner === 'usman' ? 'bg-blue-400' : 'bg-ink/10'}`} 
             />
          </div>
        </div>
      </div>

      {info && (
        <div className="mt-4 pt-4 border-t border-white/5 flex gap-2">
           <Info className="w-3 h-3 text-white/20 shrink-0" />
           <p className="text-[9px] text-ink/30 font-medium italic leading-tight">{info}</p>
        </div>
      )}
    </div>
  );
}
