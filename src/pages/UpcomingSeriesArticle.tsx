import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Calendar, MapPin, Users, Info, Clock, Trophy } from 'lucide-react';
import { PAKISTAN_SCHEDULE } from '../constants';

export default function UpcomingSeriesArticle() {
  // Internal Linking Helper
  const linkKeywords = (text: string) => {
    const keywords: Record<string, string> = {
      'schedule': '/schedule',
      'squad': '/squads',
      'rankings': '/rankings',
      'icc': '/rankings',
      'wtc': '/rankings',
      'world test championship': '/rankings'
    };

    let parts: (string | JSX.Element)[] = [text];
    
    Object.entries(keywords).forEach(([keyword, path]) => {
      const newParts: (string | JSX.Element)[] = [];
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

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ink/50 hover:translate-x-[-4px] transition-transform mb-8">
        <ChevronLeft className="w-4 h-4" /> Back to Home
      </Link>

      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card-bg border border-card-border rounded-[40px] overflow-hidden shadow-2xl p-8 md:p-12"
      >
        <div className="mb-12">
          <span className="px-4 py-1 bg-pak-green text-white rounded-full text-[10px] font-bold uppercase tracking-[3px] mb-4 inline-block">
            Cricket Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-ink uppercase tracking-tighter leading-none">
            Pakistan Upcoming Series Full Schedule 2026
          </h1>
        </div>

        <div className="space-y-12">
          {/* Introduction */}
          <section className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-ink/80 leading-relaxed mb-6">
              {linkKeywords("For every cricket enthusiast in Pakistan, the national team's calendar is more than just a list of dates; it is a journey of emotions, victories, and hard-fought battles. As we look ahead, the Pakistan upcoming series full schedule for 2026 promises an action-packed year filled with high-stakes Test matches, intense T20 encounters, and prestigious tours. From the tricky spinning tracks of Bangladesh to the lush green outfields of England, the Green Shirts are set to travel far and wide to assert their dominance in the cricketing world.")}
            </p>
            <p className="text-ink/60 leading-relaxed mb-6">
              The year 2026 is rapidly becoming a landmark chapter for the <strong>Pakistan cricket team</strong>. The transition of the sport as a whole towards more specialized squads has meant that the <strong>Pakistan upcoming series full schedule</strong> is more diverse than ever before. Fans are no longer just looking at the main tour; they are looking at how different formats are prioritized to manage player workload and ensure that the elite athletes like Babar Azam and Shaheen Afridi remain at their peak for the most critical world championship events.
            </p>
            <p className="text-ink/60 leading-relaxed">
              {linkKeywords("In this comprehensive guide, we bring you the complete breakdown of the Pakistan upcoming series full schedule. Whether you are a fan of the traditional five-day format or the fast-paced nature of T20 Internationals, this article covers everything you need to know about where and when the Pakistan cricket team will be in action. We will highlight key match-ups, venues, and the players who are expected to shine during these crucial fixtures.")}
            </p>
          </section>

          {/* Section 1: The Road Ahead */}
          <section>
            <h2 className="text-3xl font-display font-bold text-ink uppercase tracking-tight mb-6 flex items-center gap-3 border-b border-card-border pb-4">
              <Calendar className="w-8 h-8 text-pak-green" />
              Strategic Roadmap: Pakistan Cricket Schedule for 2026
            </h2>
            <p className="text-ink/60 leading-relaxed mb-8">
              {linkKeywords("The year 2026 is shaping up to be one of the most demanding years for the Pakistan cricket team. With a significant focus on the ICC World Test Championship (WTC) points and preparation for upcoming ICC events, the Pakistan upcoming series full schedule includes tours of Bangladesh, the West Indies, England, and Sri Lanka, along with home series that will keep local fans on the edge of their seats.")}
            </p>

            <div className="space-y-12">
              <div className="border-l-2 border-pak-green/20 pl-8 pb-4">
                <h3 className="text-2xl font-bold text-pak-green uppercase tracking-wide mb-4 italic">Phase 1: The Subcontinental Grind (May 2026)</h3>
                <p className="text-ink/70 leading-relaxed mb-4">
                  The season kicks off with a challenging tour of Bangladesh. Known for their slow and low pitches, Bangladesh provides a unique challenge for visiting teams that requires immense mental fortitude. This Test series will be vital for Pakistan to secure early points in the <strong>WTC table</strong>. Matches are scheduled at the iconic Sher-e-Bangla National Stadium in Dhaka—a venue that has witnessed many historic subcontinental duels.
                </p>
                <p className="text-ink/70 leading-relaxed italic">
                  Key Insight: Pakistan’s history in Dhaka suggests that the games will be decided in the final sessions of Day 4 and Day 5, where the pitch usually begins to offer sharp turn and unpredictable bounce. Master technicians will be needed to survive this grind.
                </p>
              </div>

              <div className="border-l-2 border-pak-green/20 pl-8 pb-4">
                 <h3 className="text-2xl font-bold text-pak-green uppercase tracking-wide mb-4 italic">Phase 2: Caribbean Flair & Conditions (July 2026)</h3>
                 <p className="text-ink/70 leading-relaxed mb-4">
                   After Bangladesh, the team travels to the Caribbean for a red-ball encounter against the West Indies. The historic Kensington Oval in Barbados will host this match. While the West Indies are in a rebuilding phase, their home conditions remain some of the most specialized in the world. The bounce in the Caribbean is distinct from the low tracks of Asia, demanding a different technical approach from the <strong>Pakistan cricket team</strong>'s top order.
                 </p>
                 <p className="text-ink/70 leading-relaxed">
                   This tour is strategically placed in July to allow the players to acclimatize to the heat and humidity of the Americas before heading to the cooler, swinging conditions of the United Kingdom. It is a true test of adaptability for the <strong>Pakistan upcoming series full schedule</strong>.
                 </p>
              </div>

              <div className="border-l-2 border-pak-green/20 pl-8 pb-4">
                 <h3 className="text-2xl font-bold text-pak-green uppercase tracking-wide mb-4 italic">Phase 3: The Ultimate Test in England (August – September 2026)</h3>
                 <p className="text-ink/70 leading-relaxed mb-6">
                   The height of the summer will see Pakistan in England for a prestigious 3-match Test series. Playing in England is often considered the ultimate test for subcontinental batters due to the consistently swinging ball and the variable overhead conditions. <strong>Lord's</strong>, <strong>Headingley</strong>, and <strong>The Oval</strong> aren't just venues; they are cathedrals of the sport where performing successfully enters a player into the history books.
                 </p>
                 <p className="text-ink/70 leading-relaxed mb-6 font-medium text-ink/80">
                   The tactical battle between the English swing bowlers and Pakistan's technical masters like Babar Azam and Saud Shakeel will be the highlight of the 2026 international summer. England's "Bazball" philosophy against Pakistan's traditional resilience will make for compelling viewing for fans across the globe.
                 </p>
              </div>

              <div className="border-l-2 border-pak-green/20 pl-8 pb-4">
                 <h3 className="text-2xl font-bold text-pak-green uppercase tracking-wide mb-4 italic">Phase 4: White-Ball Focus & Home Return (Oct – Nov 2026)</h3>
                 <p className="text-ink/70 leading-relaxed mb-4">
                   October brings a shift in format as Pakistan heads to Sri Lanka for T20I action. With a <strong>world championship</strong> cycle in mind, these matches at the R. Premadasa Stadium will be essential for identifying the next generation of power-hitters and death-bowling specialists. The <strong>Pakistan upcoming series full schedule</strong> wraps up with a high-profile home series against Sri Lanka in November, featuring a Test match at the Multan Cricket Stadium—a ground where fans create an atmosphere that is arguably the loudest in world cricket.
                 </p>
              </div>
            </div>
          </section>

          {/* Section 2: The Schedule Table */}
          <section className="bg-white/5 rounded-[40px] p-8 md:p-12 border border-card-border shadow-inner">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-ink uppercase tracking-tight mb-8 text-center md:text-left">
              Official Pakistan Upcoming Series Full Schedule 2026 Table
            </h2>
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-card-border bg-white/[0.02]">
                    <th className="py-6 px-6 text-[10px] font-bold uppercase tracking-widest text-pak-green">Format</th>
                    <th className="py-6 px-6 text-[10px] font-bold uppercase tracking-widest text-pak-green">Opposition Entity</th>
                    <th className="py-6 px-6 text-[10px] font-bold uppercase tracking-widest text-pak-green">Scheduled Date</th>
                    <th className="py-6 px-6 text-[10px] font-bold uppercase tracking-widest text-pak-green">Official Venue</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-ink/80">
                  {PAKISTAN_SCHEDULE.map((match) => (
                    <tr key={match.id} className="border-b border-card-border hover:bg-pak-green/5 transition-all group">
                      <td className="py-6 px-6 font-bold text-ink group-hover:text-pak-green transition-colors">{match.format}</td>
                      <td className="py-6 px-6 font-medium">{match.opponent}</td>
                      <td className="py-6 px-6 whitespace-nowrap tabular-nums">{match.date}</td>
                      <td className="py-6 px-6 text-xs text-ink/40 font-mono italic">{match.venue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-8 text-[11px] text-ink/40 font-bold uppercase tracking-widest text-center border-t border-card-border pt-8">
              * Note: The Pakistan Upcoming Series Full Schedule is based on official releases and is subject to change.
            </p>
          </section>

          {/* Section 3: Key Players */}
          <section>
            <h2 className="text-3xl font-display font-bold text-ink uppercase tracking-tight mb-8 flex items-center gap-3">
              <Users className="w-8 h-8 text-pak-green" />
              Core Players: The Pillars of 2026 Results
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-ink/70">
              <div className="p-10 bg-card-bg rounded-[32px] border border-card-border hover:border-pak-green/20 transition-all">
                <h4 className="text-xl text-ink font-bold mb-4 uppercase italic">Babar Azam: The King's Journey</h4>
                <p className="text-sm leading-relaxed">The cornerstone of Pakistan's batting order. With an average that puts him among the world's elite, Babar's performance in the upcoming Test series across four different countries will be the primary factor in Pakistan’s pursuit of the WTC final. His ability to anchor the innings allows the more aggressive players to express themselves freely.</p>
              </div>
              <div className="p-10 bg-card-bg rounded-[32px] border border-card-border hover:border-pak-green/20 transition-all">
                <h4 className="text-xl text-ink font-bold mb-4 uppercase italic">Shaheen Shah Afridi: The Speed Merchant</h4>
                <p className="text-sm leading-relaxed">Leading the charge in the <strong>Pakistan upcoming series full schedule</strong> is Shaheen. His left-arm pace and lethal inswingers in the opening overs are a nightmare for any opening batsman. His fitness management throughout 2026 will be crucial as he carries the burden of being the spearhead across all formats of the game.</p>
              </div>
              <div className="p-10 bg-card-bg rounded-[32px] border border-card-border hover:border-pak-green/20 transition-all">
                <h4 className="text-xl text-ink font-bold mb-4 uppercase italic">Mohammad Rizwan: The Heartbeat</h4>
                <p className="text-sm leading-relaxed">The most reliable engine room in the team. Whether he’s keeping wickets for long sessions or scoring crucial counter-attacking runs in the middle order, Rizwan's presence provides a tactical and emotional anchor for the younger players in the <strong>squad</strong>.</p>
              </div>
              <div className="p-10 bg-card-bg rounded-[32px] border border-card-border hover:border-pak-green/20 transition-all">
                <h4 className="text-xl text-ink font-bold mb-4 uppercase italic">Saud Shakeel: The Technician</h4>
                <p className="text-sm leading-relaxed">Specifically prepared for the <strong>Pakistan upcoming series full schedule</strong> Test legs. Saud’s ability to build massive hundreds under pressure makes him the perfect foil for the aggressive top order. His focus on red-ball durability is a key reason for Pakistan’s rise in the <strong>WTC rankings</strong>.</p>
              </div>
            </div>
          </section>

          {/* Detailed Content to reach ~1000 words */}
          <section className="prose dark:prose-invert max-w-none space-y-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-ink uppercase tracking-tight mb-6">Tactical Outlook: Adapting to Global Conditions</h2>
              <p className="text-lg text-ink/70 leading-relaxed mb-6">
                {linkKeywords("When we analyze the Pakistan upcoming series full schedule for 2026, the complexity of the task becomes clear. To be successful, the team must exhibit a Chameleonic ability to adapt. For instance, the May tour of Bangladesh requires a spin-heavy strategic approach. We expect the rise of spinners like Noman Ali and Sajid Khan to be a highlight. Their recent successes have shown that they are no longer just 'home track' specialists; they are ready to carry the bowling on their shoulders on any turning surface in Asia.")}
              </p>
              <p className="text-lg text-ink/70 leading-relaxed mb-6">
                In contrast, the later part of the year in the West Indies and England will require a return to Pakistan’s traditional 'Pace First' ideology. The <strong>Pakistan upcoming series full schedule</strong> is uniquely designed to test every facet of a modern cricketer's skill set—from playing the short ball in Barbados to surviving the lateral deviation in Leeds. Lord’s, in particular, will be a stadium where the world will see if the current pace battery is ready to match the heroics of the past legends of the 90s.
              </p>
            </div>

            <div className="bg-pak-green/5 p-12 rounded-[40px] border border-pak-green/20">
               <h3 className="text-2xl font-bold text-ink uppercase mb-6 italic">The Global Fan Pulse</h3>
               <p className="text-ink/70 leading-relaxed mb-6">
                 The <strong>Pakistan upcoming series full schedule</strong> isn't just a list of games for the players; it's a social fabric for the global Pakistani community. Whether it's the domestic fans in Karachi and Multan or the passionate diaspora in London and Birmingham, the 2026 season will bring a sense of collective identity. The viewership figures for the 2026 England tour are expected to exceed traditional records, as fans are eager to witness a modern classic in the making.
               </p>
               <p className="text-ink/70 leading-relaxed">
                 Experts and broadcasters are already preparing for this <strong>cricket schedule Pakistan 2026</strong> extravaganza. With massive digital integration and advanced data analytics being shared via official portals, fans will have more access to internal team dynamics and tactical data than ever before in the history of the sport.
               </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-ink uppercase mb-6">The Road to the ICC WTC Final</h3>
              <p className="text-ink/70 leading-relaxed mb-6">
                The absolute core of the <strong>Pakistan upcoming series full schedule</strong> is the pursuit of <strong>WTC points</strong>. Pakistan has often been close to the top but has missed out on the grand finale due to inconsistency in away games. The 2026 roadmap provides a golden opportunity to correct this narrative. Winning in Bangladesh is essential, but securing a draw or a win in England and the Caribbean would be the absolute catalyst needed to book a flight to London for the <strong>WTC final</strong>. 
              </p>
              <p className="text-ink/70 leading-relaxed">
                The series against Sri Lanka in November at home is the final piece of this puzzle. By then, the math for the finals will be clear, and every session at the Multan Cricket Stadium will be played with the intensity of a championship final itself. This is why following the <strong>Pakistan upcoming series full schedule</strong> step-by-step is vital for any serious cricket fan.
              </p>
            </div>

            <div className="pt-8 border-t border-card-border">
              <h3 className="text-2xl font-bold text-ink uppercase mb-6">Conclusion: A Year of Destiny</h3>
              <p className="text-lg text-ink/70 leading-relaxed mb-6">
                As we finalize our look at the <strong>Pakistan upcoming series full schedule for 2026</strong>, the picture is one of challenge and incredible opportunity. This is a year where the 'Green Shirts' can truly re-establish themselves as the premier power in world cricket across all formats. From the spinning tracks of Dhaka to the historic slopes of Lord's and the festive atmosphere of the Caribbean, the stage is set for a season of destiny.
              </p>
              <p className="text-lg text-ink/70 leading-relaxed">
                Stay tuned to PakCric Hub for every boundary, every wicket, and every tactical masterpiece as we track the <strong>Pakistan upcoming series full schedule</strong> together. We are your home for accurate, fast, and high-quality <strong>cricket schedule</strong> updates and analysis. 
              </p>
            </div>
          </section>

          {/* Quick FAQ summary */}
          <section className="bg-pak-green/5 rounded-3xl p-8 border border-pak-green/10">
            <h2 className="text-xl font-bold text-ink mb-4 uppercase">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <p className="text-ink font-bold text-sm">When is the next Pakistan Test series?</p>
                <p className="text-ink/60 text-xs">The next Test series starts on May 8, 2026, against Bangladesh.</p>
              </div>
              <div>
                <p className="text-ink font-bold text-sm">Will Pakistan play any T20Is in 2026?</p>
                <p className="text-ink/60 text-xs">Yes, Pakistan is scheduled to play T20Is in Sri Lanka in October 2026.</p>
              </div>
              <div>
                <p className="text-ink font-bold text-sm">Where can I see the full Pakistan upcoming series schedule?</p>
                <p className="text-ink/60 text-xs">You can find the full table of dates, venues, and formats right here on our website.</p>
              </div>
            </div>
          </section>
        </div>
      </motion.article>

      <div className="mt-12 text-center">
        <p className="text-ink/40 text-[10px] font-bold uppercase tracking-[2px]">
          Published April 2026 • Pakistan Cricket Hub Editorial
        </p>
      </div>
    </div>
  );
}
