import { motion } from 'motion/react';
import { Calendar, MapPin, Trophy, Users, Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function RedBallResilienceBlog() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>Red-Ball Resilience: Pakistan vs Bangladesh Test Series 2026 Analysis</title>
        <meta 
          name="description" 
          content="Explore the strategic importance of Pakistan's 2026 Test tour of Bangladesh. Analysis of team changes under Head Coach Sarfaraz Ahmed and Captain Shan Masood, WTC implications, and the lead spin duo's impact." 
        />
        <meta 
          name="keywords" 
          content="Pakistan cricket, Bangladesh Test Series, WTC, Shan Masood, Sarfaraz Ahmed, Noman Ali, Sajid Khan, Cricket Analysis, 2026 Test Series" 
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
        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-8 leading-tight">
          Red-Ball Resilience: An Overview of the <span className="text-pak-green">Pakistan vs Bangladesh Test Series 2026</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
            <Calendar className="w-5 h-5 text-pak-green mb-3" />
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Dates</p>
            <p className="text-sm font-bold text-white">May 2026</p>
          </div>
          <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
            <MapPin className="w-5 h-5 text-pak-green mb-3" />
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Venues</p>
            <p className="text-sm font-bold text-white">Dhaka & Sylhet</p>
          </div>
          <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
            <Trophy className="w-5 h-5 text-pak-green mb-3" />
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Stakes</p>
            <p className="text-sm font-bold text-white">WTC Points Cycle</p>
          </div>
        </div>

        <div className="prose prose-invert prose-p:text-ink/70 prose-p:leading-relaxed prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tighter max-w-none">
          <p className="text-xl text-white font-medium leading-relaxed mb-8 italic border-l-4 border-pak-green pl-6">
            The cricketing landscape in May 2026 is dominated by the return of Test cricket to the sub-continent as Pakistan tours Bangladesh for a two-match series.
          </p>

          <p>
            This encounter is not merely a bilateral contest but a high-stakes battle for <Link to="/rankings" className="text-pak-green hover:underline">WTC</Link> points, with Pakistan currently sitting in the middle of the table and eager to secure away wins to stay in the race for the final.
          </p>

          <h2 className="text-3xl mt-12 mb-6">Series <Link to="/schedule" className="text-pak-green hover:underline">Schedule</Link> and <Link to="/schedule" className="text-pak-green hover:underline">Venues</Link></h2>
          <p>
            The series is strategically <Link to="/schedule" className="text-pak-green hover:underline">scheduled</Link> in May, following the conclusion of the Pakistan Super League (PSL) 11. The tour will move from the spinning tracks of the capital to the pace-friendlier conditions in the northeast.
          </p>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 mb-12 my-10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500">Match</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500">Dates</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500">Venue</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500 text-right">Local Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="p-4 font-bold text-white">1st Test</td>
                  <td className="p-4 text-xs">8 May – 12 May 2026</td>
                  <td className="p-4 text-xs">Sher-e-Bangla Stadium, Dhaka</td>
                  <td className="p-4 text-xs font-mono text-right">9:30 AM</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">2nd Test</td>
                  <td className="p-4 text-xs">16 May – 20 May 2026</td>
                  <td className="p-4 text-xs">Sylhet International Stadium, Sylhet</td>
                  <td className="p-4 text-xs font-mono text-right">9:30 AM</td>
                </tr>
              </tbody>
            </table>
            <div className="p-4 bg-pak-green/5 text-center">
              <Link to="/pakistan-vs-bangladesh-2026-schedule" className="text-[10px] font-bold uppercase tracking-widest text-pak-green hover:underline">
                View Full Detailed Schedule
              </Link>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6">Team Pakistan: A New Era Under Sarfaraz</h2>
          <p>
            Pakistan has opted for a bold selection strategy for this tour, naming a 16-member <Link to="/squads" className="text-pak-green hover:underline">squad</Link> led by Shan Masood. The most significant change comes in the dressing room, with former captain Sarfaraz Ahmed making his debut as Head Coach.
          </p>
          
          <ul className="space-y-4 my-8 list-none p-0">
            <li className="flex gap-4">
              <Shield className="w-5 h-5 text-pak-green shrink-0 mt-1" />
              <div>
                <p className="text-white font-bold mb-1 uppercase tracking-tight"><Link to="/squads" className="text-pak-green hover:underline">Squad</Link> Composition</p>
                <p className="text-xs text-ink/60">The <Link to="/squads" className="text-pak-green hover:underline">squad</Link> features four uncapped players—Abdullah Fazal, Amad Butt, Azan Awais, and Muhammad Ghazi Ghori—indicating a shift toward youth.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Shield className="w-5 h-5 text-pak-green shrink-0 mt-1" />
              <div>
                <p className="text-white font-bold mb-1 uppercase tracking-tight">Key Veterans</p>
                <p className="text-xs text-ink/60">The core remains strong with Babar Azam, Mohammad Rizwan, and the pace spearhead Shaheen Shah Afridi. View current <Link to="/rankings" className="text-pak-green hover:underline">ICC Rankings</Link> for player standing.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Shield className="w-5 h-5 text-pak-green shrink-0 mt-1" />
              <div>
                <p className="text-white font-bold mb-1 uppercase tracking-tight">Lead Spinners</p>
                <p className="text-xs text-ink/60">Veteran spinners Noman Ali and Sajid Khan are the primary tactical weapons for subcontinental conditions.</p>
              </div>
            </li>
          </ul>

          <h2 className="text-3xl mt-12 mb-6">The Spin Duo: Noman Ali vs Sajid Khan</h2>
          <p>
            The success of Pakistan's tour hinges on the performance of their premier spin twins. Both bowlers bring different dimensions to the attack, and their records in subcontinental conditions are a testament to their mastery of the red ball.
          </p>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 mb-12 my-10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                  <th className="p-4 uppercase">Metric</th>
                  <th className="p-4 uppercase">Noman Ali (SLA)</th>
                  <th className="p-4 uppercase text-right">Sajid Khan (OB)</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-b border-white/5">
                  <td className="p-4 font-bold text-white uppercase tracking-tighter">Test Wickets</td>
                  <td className="p-4">97</td>
                  <td className="p-4 text-right">65</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 font-bold text-white uppercase tracking-tighter">Subcon Average</td>
                  <td className="p-4">24.52</td>
                  <td className="p-4 text-right">26.10</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 font-bold text-white uppercase tracking-tighter">BBI (Bangladesh)</td>
                  <td className="p-4">3/54</td>
                  <td className="p-4 text-right">8/42</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white uppercase tracking-tighter">Primary Trait</td>
                  <td className="p-4">Accuracy & Drift</td>
                  <td className="p-4 text-right">Extraction & Bounce</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 font-sans">
            <div className="p-6 rounded-3xl bg-pak-green/5 border border-pak-green/10">
              <h4 className="text-pak-green font-display font-bold uppercase mb-3">Dhaka Impact (1st Test)</h4>
              <p className="text-xs leading-relaxed text-ink/70 italic">
                "On Mirpur’s slow, low-bounce surface, Noman Ali’s ability to bowl marathon spells with unwavering accuracy will be crucial. His left-arm angle creates natural variation against right-handers, typical of the Mirpur turners."
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-pak-green/5 border border-pak-green/10">
              <h4 className="text-pak-green font-display font-bold uppercase mb-3">Sylhet Impact (2nd Test)</h4>
              <p className="text-xs leading-relaxed text-ink/70 italic">
                "Sajid Khan thrives on pitches that offer a bit more bite. In Sylhet, where the clay content can provide more over-spin, Sajid’s high release point and ability to rip the ball could make him a nightmare for Bangladesh's middle order."
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6">Bangladesh: Defending the Home Fortress</h2>
          <p>
            Bangladesh enters the series with significant confidence after a historic run in recent years, including their first-ever Test series win against Pakistan in 2024. Playing at home in Mirpur and Sylhet provides them with a distinct advantage.
          </p>
          <p>
            The Tigers have transformed into a formidable red-ball unit, often outplaying traditional giants through disciplined spin and improved fitness. Leadership is expected from Mehidy Hasan Miraz and Najmul Hossain Shanto, both of whom were instrumental in Bangladesh's recent ODI series win over Pakistan in March.
          </p>

          <h2 className="text-3xl mt-12 mb-6">Strategic Outlook and What to Expect</h2>
          <p>
            This series promises a fascinating "clash of styles". Pakistan’s traditional reliance on high-velocity pace will be tested against Bangladesh’s patient, spin-centric approach.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
              <h3 className="text-lg mb-4 text-white uppercase font-display font-medium">Dhaka Dynamics</h3>
              <p className="text-xs leading-relaxed text-ink/70">
                The first Test in Mirpur will likely be a slow, low-scoring affair where spinners dominate.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
              <h3 className="text-lg mb-4 text-white uppercase font-display font-medium">Sylhet’s Seam</h3>
              <p className="text-xs leading-relaxed text-ink/70">
                The second Test in Sylhet typically offers more bounce and carry, which could favor Pakistan's seam battery including Mohammad Abbas and Hasan Ali.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6"><Link to="/rankings" className="text-pak-green hover:underline">WTC</Link> Stakes</h2>
          <p>
            With Pakistan ranked fifth and Bangladesh eighth in the <Link to="/rankings" className="text-pak-green hover:underline">WTC</Link> standings as of April 2026, every session carries immense pressure. As both nations prepare for this critical showdown, the blend of experienced legends and hungry new faces ensures that the May 2026 series will be a landmark event in subcontinental cricket.
          </p>

          <div className="mt-16 p-8 border border-white/10 bg-white/5 rounded-[32px] text-center">
             <Trophy className="w-12 h-12 text-pak-green mx-auto mb-4" />
             <h3 className="text-xl font-display font-bold uppercase mb-4 text-white">Full Squad Breakdown</h3>
             <p className="text-xs text-ink/60 mb-6">Would you like a breakdown of the head-to-head records or a look at the uncapped players' domestic stats?</p>
             <div className="flex flex-wrap justify-center gap-4">
               <Link to="/squads" className="px-8 py-3 bg-white text-black rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-pak-green hover:text-white transition-all">
                 View Player Stats
               </Link>
               <Link to="/pakistan-tour-bangladesh-squad-2026" className="px-8 py-3 bg-white/5 text-white border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:border-white transition-all">
                 Squad Details
               </Link>
             </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
