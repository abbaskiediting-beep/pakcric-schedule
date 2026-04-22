import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Calendar, MapPin, Users, Info, Clock, Trophy } from 'lucide-react';
import { PAKISTAN_SCHEDULE } from '../constants';

export default function UpcomingSeriesArticle() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
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
            Cricket Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter leading-none">
            Pakistan Upcoming Series Full Schedule 2026
          </h1>
        </div>

        <div className="space-y-12">
          {/* Introduction */}
          <section className="prose prose-invert max-w-none">
            <p className="text-lg text-ink/80 leading-relaxed">
              For every cricket enthusiast in Pakistan, the national team's calendar is more than just a list of dates; it is a journey of emotions, victories, and hard-fought battles. As we look ahead, the <strong>Pakistan upcoming series full schedule</strong> for 2026 promises an action-packed year filled with high-stakes Test matches, intense T20 encounters, and prestigious tours. From the tricky spinning tracks of Bangladesh to the lush green outfields of England, the Green Shirts are set to travel far and wide to assert their dominance in the cricketing world.
            </p>
            <p className="text-ink/60 leading-relaxed">
              In this comprehensive guide, we bring you the complete breakdown of the <strong>Pakistan upcoming series full schedule</strong>. Whether you are a fan of the traditional five-day format or the fast-paced nature of T20 Internationals, this article covers everything you need to know about where and when the Pakistan cricket team will be in action. We will highlight key match-ups, venues, and the players who are expected to shine during these crucial fixtures.
            </p>
          </section>

          {/* Section 1: The Road Ahead */}
          <section>
            <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tight mb-6 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-pak-green" />
              Complete Pakistan Cricket Schedule for 2026
            </h2>
            <p className="text-ink/60 leading-relaxed mb-8">
              The year 2026 is shaping up to be one of the most demanding years for the Pakistan cricket team. With a significant focus on the ICC World Test Championship (WTC) points and preparation for upcoming ICC events, the <strong>Pakistan upcoming series full schedule</strong> includes tours of Bangladesh, the West Indies, England, and Sri Lanka, along with home series that will keep local fans on the edge of their seats.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-pak-green uppercase tracking-wide mb-4">Pakistan Tour of Bangladesh (May 2026)</h3>
                <p className="text-ink/60 leading-relaxed">
                  The season kicks off with a challenging tour of Bangladesh. Known for their slow and low pitches, Bangladesh provides a unique challenge for visiting teams. This Test series will be vital for Pakistan to secure early points in the WTC table. Matches are scheduled at the iconic Sher-e-Bangla National Stadium in Dhaka and the Zahur Ahmed Chowdhury Stadium in Chattogram.
                </p>
              </div>

              <div>
                 <h3 className="text-xl font-bold text-pak-green uppercase tracking-wide mb-4">Pakistan Tour of West Indies (July 2026)</h3>
                 <p className="text-ink/60 leading-relaxed">
                   After Bangladesh, the team travels to the Caribbean for a red-ball encounter against the West Indies. The historic Kensington Oval in Barbados will host this match, where the "Sultan of Swing" and Pakistan's batting lineup will look to overcome the bounce and pace of the Windies attack.
                 </p>
              </div>

              <div>
                 <h3 className="text-xl font-bold text-pak-green uppercase tracking-wide mb-4">Pakistan Tour of England (August – September 2026)</h3>
                 <p className="text-ink/60 leading-relaxed">
                   The height of the summer will see Pakistan in England for a prestigious 3-match Test series. Playing in England is often considered the ultimate test for subcontinental batters due to the swinging conditions. Matches at Headingley, Lord's, and The Oval are always high-profile events that draw massive crowds.
                 </p>
              </div>

              <div>
                 <h3 className="text-xl font-bold text-pak-green uppercase tracking-wide mb-4">Pakistan Tour of Sri Lanka (October 2026)</h3>
                 <p className="text-ink/60 leading-relaxed">
                   October brings a shift in format as Pakistan heads to Sri Lanka for T20I action. With the next T20 World Cup on the horizon, these matches at the R. Premadasa Stadium will be essential for team composition and testing bench strength.
                 </p>
              </div>

              <div>
                 <h3 className="text-xl font-bold text-pak-green uppercase tracking-wide mb-4">Sri Lanka Tour of Pakistan (November 2026)</h3>
                 <p className="text-ink/60 leading-relaxed">
                   To wrap up the major fixtures of 2026, Pakistan will host Sri Lanka for a Test match at home. The Multan Cricket Stadium is expected to be the venue for this encounter, bringing world-class cricket back to the passionate local fans in Pakistan.
                 </p>
              </div>
            </div>
          </section>

          {/* Section 2: The Schedule Table */}
          <section className="bg-white/5 rounded-[32px] p-8 border border-white/5">
            <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight mb-8">
              Pakistan Upcoming Series Full Schedule Table
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-4 text-[10px] font-bold uppercase tracking-widest text-pak-green">Format</th>
                    <th className="py-4 px-4 text-[10px] font-bold uppercase tracking-widest text-pak-green">Opponent</th>
                    <th className="py-4 px-4 text-[10px] font-bold uppercase tracking-widest text-pak-green">Date</th>
                    <th className="py-4 px-4 text-[10px] font-bold uppercase tracking-widest text-pak-green">Venue</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-ink/80">
                  {PAKISTAN_SCHEDULE.map((match) => (
                    <tr key={match.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 font-bold">{match.format}</td>
                      <td className="py-4 px-4">{match.opponent}</td>
                      <td className="py-4 px-4 whitespace-nowrap">{match.date}</td>
                      <td className="py-4 px-4 text-xs text-ink/40">{match.venue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-[10px] text-ink/40 font-mono italic">
              * Note: Times and venues are subject to change by the respective cricket boards.
            </p>
          </section>

          {/* Section 3: Key Players */}
          <section>
            <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tight mb-8 flex items-center gap-3">
              <Users className="w-8 h-8 text-pak-green" />
              Key Players to Watch
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-ink/70">
              <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                <h4 className="text-white font-bold mb-2">Babar Azam</h4>
                <p className="text-sm">The linchpin of Pakistan's batting. With an average of over 48 in international cricket, Babar's performance in the upcoming Test series will be crucial for Pakistan’s success.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                <h4 className="text-white font-bold mb-2">Shaheen Shah Afridi</h4>
                <p className="text-sm">Leading the pace attack, Shaheen's ability to pick up early wickets makes him a threat in any condition, especially in England and the West Indies.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                <h4 className="text-white font-bold mb-2">Mohammad Rizwan</h4>
                <p className="text-sm">The engine room behind the stumps and a reliable middle-order batter. Rizwan's consistency in T20Is and Tests is vital for stabilizing the innings.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                <h4 className="text-white font-bold mb-2">Saud Shakeel</h4>
                <p className="text-sm">A technician in the Test format. His ability to build long innings on slow tracks in Bangladesh will be a key factor for the Green Shirts.</p>
              </div>
            </div>
          </section>

          {/* Detailed Content to reach ~1000 words */}
          <section className="prose prose-invert max-w-none space-y-6">
            <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight">The Tactical Outlook for 2026</h2>
            <p className="text-ink/60 leading-relaxed">
              When analyzing the <strong>Pakistan upcoming series full schedule</strong>, one cannot overlook the strategic importance of the venues selected. Playing in Bangladesh requires a spin-centric approach. We expect the rise of spinners like Noman Ali and Sajid Khan to be a highlight of the May tour. These bowlers have recently shown that they can dismantle top-tier lineups on helpful tracks. The slow nature of the Dhaka pitch often demands patience and accuracy, two traits that Pakistan's current spin duo has mastered.
            </p>
            <p className="text-ink/60 leading-relaxed">
              Moving to the West Indies and England later in the year, the focus will shift back to the fast bowlers. Pakistan's pace battery, led by Shaheen Afridi and Khurram Shahzad, will relish the extra bounce in Barbados and the lateral movement in Leeds and London. The <strong>Pakistan upcoming series full schedule</strong> is perfectly balanced to test both the spin and pace departments of the team. The historic conditions at Lord's, in particular, provide a unique stage where legends are born, and Pakistani seamers have a rich tradition of performing under the cloudy London skies.
            </p>
            <p className="text-ink/60 leading-relaxed">
              Another interesting aspect of the <strong>Pakistan upcoming series full schedule</strong> is the inclusion of T20I matches in Sri Lanka. These matches serve as a bridge between the grueling red-ball season and the fast-paced white-ball tournaments. It allows the selectors to rotate players and give opportunities to rising stars like Azan Awais or Abdullah Fazal, ensuring the squad depth remains healthy. Sri Lanka's humid conditions and large outfields often test the fitness and running between the wickets, making it a perfect preparation ground for the T20 format.
            </p>
            
            <h3 className="text-xl font-bold text-white">Fan Expectations and Global Coverage</h3>
            <p className="text-ink/60 leading-relaxed">
              The <strong>Pakistan upcoming series full schedule</strong> is also a treat for the fans. With most matches happening in time zones that are favorable for subcontintental viewers, the viewership is expected to break records. Fans are eager to see if Pakistan can improve their away record, which has been a point of discussion in recent years. The matches in England, in particular, always feel like home games due to the massive Pakistani diaspora residing there.
            </p>
            <p className="text-ink/60 leading-relaxed">
              For those following the <strong>Pakistan upcoming series full schedule</strong>, it is worth noting that official broadcasting partners will be announced closer to the dates. However, most matches are expected to be available on major sports networks and digital streaming platforms, ensuring that not a single ball is missed by the passionate supporters. The coverage will include pre-match shows, detailed analysis, and expert commentary from legends of the game, providing a 360-degree view of the action.
            </p>

            <h3 className="text-xl font-bold text-white">Impact on World Test Championship Standings</h3>
            <p className="text-ink/60 leading-relaxed">
              The primary driver for the <strong>Pakistan upcoming series full schedule</strong> in 2026 is the WTC. Pakistan has been a consistent performer but has often missed out on the final due to narrow margins. The away wins in Bangladesh and West Indies are non-negotiable if they want to secure a spot at Lord's for the final. The home match against Sri Lanka in November will provide a much-needed morale boost and essential points in familiar territory. Every session of these matches will carry the weight of national expectations, as the road to the WTC final gets narrower with each passing game.
            </p>

            <h3 className="text-xl font-bold text-white">Preparation and Training Camps</h3>
            <p className="text-ink/60 leading-relaxed">
              To prepare for the <strong>Pakistan upcoming series full schedule</strong>, the PCB has organized several high-performance training camps at the National Cricket Academy in Lahore. These camps focus on specific skill sets required for different conditions—playing against the moving ball for the England tour and mastering the sweep shot for the spin-friendly conditions in Asia. The <strong>Pakistan upcoming series full schedule</strong> is a rigorous test, and only the fittest and most prepared will survive the long season ahead. The fitness regimes have been modernized, with a high emphasis on longevity and injury prevention given the heavy workload of 2026.
            </p>

            <h3 className="text-xl font-bold text-white">Domestic Structure and Talent Pipeline</h3>
            <p className="text-ink/60 leading-relaxed">
              A key component in navigating the <strong>Pakistan upcoming series full schedule</strong> is the strength of the domestic circuit. The Quaid-e-Azam Trophy continues to be the primary breeding ground for Test talent. Several young performers from the last season have been integrated into the national setup to provide backup for the tours of England and the Caribbean. This foresight is what allows Pakistan to remain competitive despite the demanding nature of the <strong>Pakistan upcoming series full schedule</strong>.
            </p>

            <h3 className="text-xl font-bold text-white">Conclusion</h3>
            <p className="text-ink/60 leading-relaxed">
              In summary, the <strong>Pakistan upcoming series full schedule</strong> for 2026 is a testament to the thriving cricket culture in the country. It is a schedule that balances challenge with opportunity, tradition with modernity. As the team prepares for a massive year, fans can rest assured that the Green Shirts will give their all on the field. From the spinning tracks of Dhaka to the historic slopes of Lord's, every match is a chapter in the storied history of Pakistan cricket. Stay tuned to our portal for the most accurate and up-to-date information regarding the <strong>Pakistan upcoming series full schedule</strong>.
            </p>
          </section>

          {/* Quick FAQ summary */}
          <section className="bg-pak-green/5 rounded-3xl p-8 border border-pak-green/10">
            <h2 className="text-xl font-bold text-white mb-4 uppercase">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <p className="text-white font-bold text-sm">When is the next Pakistan Test series?</p>
                <p className="text-ink/60 text-xs">The next Test series starts on May 8, 2026, against Bangladesh.</p>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Will Pakistan play any T20Is in 2026?</p>
                <p className="text-ink/60 text-xs">Yes, Pakistan is scheduled to play T20Is in Sri Lanka in October 2026.</p>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Where can I see the full Pakistan upcoming series schedule?</p>
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
