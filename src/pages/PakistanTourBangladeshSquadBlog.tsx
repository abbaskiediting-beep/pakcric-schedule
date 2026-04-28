import { motion } from 'motion/react';
import { Calendar, Trophy, Users, Shield, Star, Info, ArrowLeft, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthorSection from '../components/AuthorSection';
import { LinkText } from '../components/LinkText';

export default function PakistanTourBangladeshSquadBlog() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
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
          <LinkText text="Pakistan Tour of Bangladesh 2026: Squads and Complete Schedule Overview" />
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-ink/80 leading-relaxed mb-10 border-l-4 border-pak-green pl-6 italic shadow-inner bg-pak-green/[0.02] py-4 rounded-r-2xl">
            <LinkText text="As the cricketing world turns its attention to the red-ball format, Pakistan is set for a high-stakes two-Test series in Bangladesh this May 2026. This series is a pivotal part of the 2025–2027 World Test Championship cycle, with both teams eager to climb the standings in what is expected to be a classic subcontinental battle of grit, patience, and elite spin bowling." />
          </p>

          <p className="text-ink/60 leading-relaxed mb-8">
            <LinkText text="The Pakistan tour of Bangladesh 2026 represents more than just a bilateral series; it is a fundamental test of the team's depth and technical adaptability. In recent months, the focus of the Pakistan Cricket Board (PCB) has shifted towards building a sustainable long-format culture, and the selection of this 16-member squad reflects a blend of seasoned veterans and explosive young talent. For fans following the Pakistan upcoming series full schedule, this tour is the centerpiece of the summer, offering a grueling examination on the spinning tracks of Dhaka and Sylhet." />
          </p>

          <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tighter mb-6 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-pak-green" />
            Phase 1: The Verified Series Schedule
          </h2>
          <p className="text-ink/60 mb-8 leading-relaxed">
            <LinkText text="The tour is strategically divided into two major venues, starting in the bustling capital of Dhaka and moving to the picturesque landscapes of Sylhet. Each venue offers a distinct challenge that will test the Pakistan cricket team's ability to adapt. Dhaka is notoriously known for its abrasive surface that aids reverse swing and significant spin from Day 3 onwards, while Sylhet typically provides a more balanced contest with something for the seamers during the morning sessions." />
          </p>

          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 mb-12 shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-6 text-[11px] font-bold uppercase tracking-widest text-neutral-400">Match Identification</th>
                  <th className="p-6 text-[11px] font-bold uppercase tracking-widest text-neutral-400">Proposed Dates</th>
                  <th className="p-6 text-[11px] font-bold uppercase tracking-widest text-neutral-400">Confirmed Venue</th>
                  <th className="p-6 text-[11px] font-bold uppercase tracking-widest text-neutral-400 text-right">Time (PKT)</th>
                </tr>
              </thead>
              <tbody className="text-sm text-ink/80">
                <tr className="border-b border-white/5 hover:bg-white/[0.04] transition-all group">
                  <td className="p-6 font-bold text-white group-hover:text-pak-green transition-colors font-display text-lg">1st Test Match</td>
                  <td className="p-6 text-xs tabular-nums font-medium">8 May – 12 May 2026</td>
                  <td className="p-6 text-xs italic opacity-60">Sher-e-Bangla Stadium, Dhaka</td>
                  <td className="p-6 text-xs font-mono text-right text-pak-green font-bold tracking-widest uppercase">9:00 AM</td>
                </tr>
                <tr className="hover:bg-white/[0.04] transition-all group">
                  <td className="p-6 font-bold text-white group-hover:text-pak-green transition-colors font-display text-lg">2nd Test Match</td>
                  <td className="p-6 text-xs tabular-nums font-medium">16 May – 20 May 2026</td>
                  <td className="p-6 text-xs italic opacity-60">Sylhet International Stadium, Sylhet</td>
                  <td className="p-6 text-xs font-mono text-right text-pak-green font-bold tracking-widest uppercase">9:00 AM</td>
                </tr>
              </tbody>
            </table>
            <div className="p-6 bg-pak-green/5 text-center border-t border-white/5">
              <Link to="/pakistan-vs-bangladesh-2026-schedule" className="text-[11px] font-bold uppercase tracking-[3px] text-pak-green hover:underline hover:text-white transition-colors italic">
                Unlock Full Detailed Match Insights & Live Series Schedule
              </Link>
            </div>
          </div>

          <div className="flex items-start gap-6 p-10 bg-blue-500/10 border border-blue-500/20 rounded-[40px] mb-12 shadow-inner">
            <Info className="w-8 h-8 text-blue-400 shrink-0 mt-0.5" />
            <div className="space-y-3">
              <p className="text-sm font-bold text-blue-300 uppercase tracking-[4px]">Pre-Tour Training Intel</p>
              <p className="text-base text-blue-100/70 m-0 leading-relaxed italic">
                <LinkText text="The team's intensive preparation includes a specialized high-performance training camp in Karachi from 27 April to 1 May. The focus is strictly on playing against the 'dusty bowl' conditions. Following the conclusion of the camp, the verified Pakistan squad will fly to Dhaka on 2 May for final acclimatization sessions." />
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tighter mb-8 flex items-center gap-3">
            <Users className="w-10 h-10 text-pak-green" />
            Phase 2: Tactical Squad Analysis
          </h2>

          <p className="text-ink/60 leading-relaxed mb-10 text-lg">
            <LinkText text="The 16-member Pakistan Test squad is a statement of intent. The inclusion of three uncapped players—Abdullah Fazal, Azan Awais, and Muhammad Ghazi Ghori—signals a clear move toward a talent pipeline that can sustain the team through the 2026–2030 cycle. However, the success of this tour hinges on the consistency of the 'Big Three': Shan Masood's aggressive leadership, Babar Azam's conversion rate, and Shaheen Afridi's initial burst with the new ball. The balance of the side is heavily skewed toward spin, acknowledging the role Noman Ali and Sajid Khan will play in Dhaka." />
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-white/5 p-10 rounded-[40px] border border-white/5 hover:bg-white/[0.08] transition-all group">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span className="text-[10px] font-bold uppercase tracking-[3px] text-white/40">The Captain</span>
                </div>
                <p className="text-3xl font-bold text-white mb-1 group-hover:text-pak-green transition-colors">Shan Masood</p>
                <p className="text-[11px] text-pak-green font-bold uppercase tracking-widest italic">Chief Tactician</p>
                <p className="mt-6 text-sm text-ink/50 leading-relaxed italic border-t border-white/5 pt-4">Shan's proactive approach and focus on strike rotation in the middle overs will be key to breaking the deadlock on slow Bangladeshi tracks. His ability to handle pressure in the field is equally critical for the team's morale.</p>
              </div>

              <div className="bg-white/5 p-10 rounded-[40px] border border-white/5 hover:bg-white/[0.08] transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-blue-500" />
                  <span className="text-[10px] font-bold uppercase tracking-[3px] text-white/40">Batting Mainstays</span>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-ink/70">
                  <span className="px-5 py-2 bg-white/5 rounded-2xl border border-white/10 text-white font-bold hover:bg-pak-green hover:text-white transition-colors cursor-default">Babar Azam</span>
                  <span className="px-5 py-2 bg-white/5 rounded-2xl border border-white/10">Imam-ul-Haq</span>
                  <span className="px-5 py-2 bg-white/5 rounded-2xl border border-white/10">Saud Shakeel</span>
                  <span className="px-5 py-2 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-blue-400 font-bold uppercase text-[10px] tracking-widest italic">A. Fazal (U)</span>
                  <span className="px-5 py-2 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-blue-400 font-bold uppercase text-[10px] tracking-widest italic">Azan Awais (U)</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 p-10 rounded-[40px] border border-white/5 hover:bg-white/[0.08] transition-all">
                <span className="text-[10px] font-bold uppercase tracking-[3px] text-white/40 block mb-4 font-display italic tracking-[4px]">The Pace Battery</span>
                <div className="flex flex-wrap gap-3 text-sm text-ink/70">
                  <span className="px-5 py-2 bg-pak-green/10 rounded-2xl border border-pak-green/20 text-white font-bold">Shaheen Afridi</span>
                  <span className="px-5 py-2 bg-white/5 rounded-2xl border border-white/10">Hasan Ali</span>
                  <span className="px-5 py-2 bg-white/5 rounded-2xl border border-white/10">Mohammad Abbas</span>
                  <span className="px-5 py-2 bg-white/5 rounded-2xl border border-white/10 italic">Khurram Shahzad</span>
                  <span className="px-5 py-2 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-blue-400 font-bold uppercase text-[10px] tracking-widest">Amad Butt (U)</span>
                </div>
              </div>

              <div className="bg-white/5 p-10 rounded-[40px] border border-white/5 hover:bg-white/[0.08] transition-all">
                <span className="text-[10px] font-bold uppercase tracking-[3px] text-white/40 block mb-6 font-display italic tracking-[4px]">Spin Coalition</span>
                <div className="flex flex-wrap gap-4 text-sm text-ink/70">
                  <div className="flex flex-col">
                    <span className="text-xl text-white font-bold leading-none mb-1">Noman Ali</span>
                    <span className="text-[10px] text-pak-green uppercase font-bold tracking-widest italic">Senior Spinner</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl text-white font-bold leading-none mb-1">Sajid Khan</span>
                    <span className="text-[10px] text-pak-green uppercase font-bold tracking-widest italic">Off-Spin Specialist</span>
                  </div>
                </div>
                <p className="mt-8 text-xs text-ink/40 leading-relaxed italic border-l-2 border-pak-green/30 pl-4">The duo that dismantled top-tier sides in the last cycle remains the absolute heart of the bowling strategy for the <strong>Pakistan tour of Bangladesh 2026</strong>. Their ability to extract bounce from flat tracks is unique.</p>
              </div>
            </div>
          </div>

          <div className="bg-pak-green/10 border border-pak-green/20 rounded-[50px] p-12 mb-16 shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Shield className="w-32 h-32 text-pak-green" />
             </div>
             <h3 className="text-2xl font-display font-bold uppercase text-white mb-8 font-display italic tracking-[4px] border-b border-pak-green/20 pb-4">Professional Management Elite</h3>
             <p className="text-lg text-ink/70 leading-relaxed m-0 italic font-medium">
               In a widely celebrated move by the PCB, former legend <span className="text-white font-bold underline decoration-pak-green underline-offset-8">Sarfaraz Ahmed</span> has been appointed as the Head Coach specifically for this tour. His tactical understanding of subcontinental surface dynamics is considered unmatched in the modern era. He is flanked by <span className="text-white font-bold">Asad Shafiq</span> (Batting Technical Specialist) and <span className="text-white font-bold underline decoration-pak-green underline-offset-8">Umar Gul</span> (Pace Deployment Guru), creating a 'Dream Team' of management that understands what it means to wear the 'Green Shirt' under pressure.
             </p>
          </div>
          <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tighter mb-8 italic">Analyzing the Bangladesh Threat Matrix</h2>
          <p className="text-lg text-ink/70 leading-relaxed mb-6">
            <LinkText text="While the confirmed Test squad for Bangladesh is typically finalized closer to the match date, the core remains strong under the expected leadership of Mehidy Hasan Miraz. Their recent performance in the March ODI series—where they secured a 2–1 victory against the Pakistan cricket team—gives them significant home-turf momentum." />
          </p>
          <p className="text-base text-ink/60 leading-relaxed mb-12">
            <LinkText text="The key factor for Bangladesh is their depth in the spin department. On tracks that offer even a hint of turn, bowlers like Taijul Islam and Mehidy Hassan become world-class threats. The Pakistan tour of Bangladesh 2026 will likely see these spinners operating for long 15-20 over spells, testing the physical and mental stamina of the Pakistani top order. Fans can check player head-to-head records in our squad section to see how these individual matchups favor each side." />
          </p>

          <h2 className="text-4xl font-display font-bold text-pak-green uppercase tracking-tighter mt-16 mb-10 text-center italic border-t border-white/5 pt-16">The Road to the WTC Final 2027 Standings</h2>
          <p className="text-xl text-ink/70 leading-relaxed mb-8">
            <LinkText text="For Pakistan, this series is purely about redemption and survival. After an early exit from the T20 World Cup 2026 and a mixed result in the March ODIs, the 'Shaheens' need a dominant red-ball performance to stay in contention for the WTC Final standing. The potential inclusion of veteran Mohammad Abbas highlights a strategic return to disciplined line-and-length bowling—a tactic that has historically troubled Bangladeshi batters." />
          </p>
          
          <p className="text-base text-ink/70 leading-relaxed mb-12 italic border-l-2 border-pak-green/20 pl-8 font-medium">
            <LinkText text="Furthermore, the points system of the World Test Championship makes every away win twice as valuable for the overall rankings. If Pakistan can secure a 2-0 whitewash in Dhaka and Sylhet, they will catapult into the top 3 of the global rankings, putting immense pressure on other contenders like Australia and India. Every session of the Pakistan tour of Bangladesh 2026 is, therefore, a miniature championship final packed with national expectation." />
          </p>

          <div className="mt-24 p-12 md:p-16 border border-white/10 bg-white/5 rounded-[64px] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 bg-pak-green/20 rounded-bl-4xl">
               <span className="text-[11px] font-bold text-pak-green uppercase tracking-[5px] italic">Premium Editorial Analysis</span>
            </div>
            <h3 className="text-3xl font-display font-bold uppercase mb-12 text-white text-center italic tracking-[6px] font-display">Deep Insight Explorations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link to="/pakistan-tour-bangladesh-test-2026" className="p-10 bg-white/5 border border-white/10 rounded-[40px] hover:border-pak-green transition-all group hover:bg-white/[0.1] shadow-lg">
                <p className="text-[11px] font-bold text-pak-green uppercase tracking-[4px] mb-4 italic">Series context analysis</p>
                <h4 className="text-2xl text-white font-bold group-hover:text-pak-green transition-colors leading-tight font-display mb-4 italic">Red-Ball Revival: A Tactical Masterclass in Dhaka</h4>
                <p className="text-sm text-ink/40 leading-relaxed italic leading-loose">Analyzing the specific technical shifts and physiological adjustments needed to survive the grueling 5-day grind in the high humidity of Bangladesh.</p>
              </Link>
              <Link to="/red-ball-resilience-overview-2026" className="p-10 bg-white/5 border border-white/10 rounded-[40px] hover:border-pak-green transition-all group hover:bg-white/[0.1] shadow-lg">
                <p className="text-[11px] font-bold text-pak-green uppercase tracking-[4px] mb-4 italic">Statistical Value Review</p>
                <h4 className="text-2xl text-white font-bold group-hover:text-pak-green transition-colors leading-tight font-display mb-4 italic">The Spin Impact: Noman & Sajid's Projected Value</h4>
                <p className="text-sm text-ink/40 leading-relaxed italic leading-loose">Why the senior spin duo is currently the most critical asset for the 2026–2027 WTC cycle and how they compare to global rankings across similar tracks.</p>
              </Link>
            </div>
          </div>

          <div className="mt-16 p-16 border border-pak-green/20 bg-pak-green/[0.03] rounded-[64px] text-center shadow-inner relative group">
            <ClipboardList className="w-20 h-20 text-pak-green mx-auto mb-8 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-3xl font-display font-bold uppercase mb-8 text-white tracking-[8px] font-display italic">Portal Interactive Scouting</h3>
            <p className="text-lg text-ink/60 mb-12 leading-relaxed max-w-2xl mx-auto italic font-medium">
              Deep dive into the underlying mechanics of your favorite players. Compare live historical performance stats side-by-side or analyze previous head-to-head records across various subcontinental venues using our proprietary analytics.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Link to="/squads" className="px-12 py-5 bg-white text-black rounded-3xl text-[13px] font-black uppercase tracking-[4px] hover:bg-pak-green hover:text-white transition-all shadow-2xl hover:translate-y-[-4px]">
                Explore Full Squad Profiles
              </Link>
              <Link to="/rankings" className="px-12 py-5 border-2 border-white/10 text-white rounded-3xl text-[13px] font-black uppercase tracking-[4px] hover:border-pak-green hover:bg-pak-green/10 transition-all shadow-xl hover:translate-y-[-4px]">
                Analyze Global ICC Rankings
              </Link>
            </div>
          </div>

          <AuthorSection authorId="omar-farooq" />
        </div>
      </motion.article>
    </div>
  );
}
