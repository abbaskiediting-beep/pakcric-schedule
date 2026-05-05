import { motion } from 'motion/react';
import { Trophy, Calendar, MapPin, Users, History as HistoryIcon, ArrowRight, ShieldCheck, Star, Activity, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LinkText } from '../components/LinkText';

export default function Series() {
  const upcomingSeries = [
    {
      id: 'pak-ban-test-2026',
      title: "Pakistan Tour of Bangladesh 2026",
      format: "Test Series",
      matches: "2 Tests",
      venue: "Dhaka & Sylhet",
      status: "Upcoming",
      icon: <MapPin className="w-5 h-5" />,
      path: "/pakistan-vs-bangladesh-2026-schedule"
    },
    {
      id: 'pak-aus-odi-2026',
      title: "Australia Tour of Pakistan 2026",
      format: "ODI Series",
      matches: "3 ODIs",
      venue: "Lahore",
      status: "Upcoming",
      icon: <Star className="w-5 h-5" />,
      path: "/pakistan-vs-australia-2026-schedule-odi"
    }
  ];

  const recentSeries = [
    {
      id: 'psl-11-2026',
      title: "PSL 11 - 2026",
      format: "Tournament",
      matches: "Season Review",
      venue: "Lahore & Karachi",
      status: "Completed",
      icon: <Trophy className="w-5 h-5" />,
      path: "/news/peshawar-zalmi-psl-2026-champions-match-report"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 md:py-16 px-4 md:px-6">
      <Helmet>
        <title>Pakistan Cricket Series – Full Tours, Fixtures & Updates 2026</title>
        <meta name="description" content="Complete guide to Pakistan cricket series 2026. Explore upcoming tours, squad updates, and recent results for the Green Shirts." />
        <meta name="keywords" content="Pakistan Cricket Series, Pakistan upcoming tours, Pakistan cricket fixtures, Pakistan series schedule" />
      </Helmet>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 md:mb-20 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-pak-green/10 border border-pak-green/20 rounded-full mb-5 md:mb-6">
          <Trophy className="w-3.5 h-3.5 md:w-4 md:h-4 text-pak-green" />
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-pak-green">Series Hub</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-4 md:mb-6 leading-tight md:leading-none">
          Pakistan Cricket <span className="text-pak-green">Series</span>
        </h1>
        <p className="text-base md:text-xl text-neutral-500 max-w-3xl mx-auto font-medium italic leading-relaxed px-2">
          <LinkText text="Welcome to PakCric Schedule’s Series Hub — your complete source for all Pakistan cricket series, including upcoming tours and recently completed series." />
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        <div className="lg:col-span-2 space-y-16">
          {/* Upcoming Series Section */}
          <section>
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <Calendar className="w-6 h-6 md:w-8 md:h-8 text-pak-green" />
              <h2 className="text-xl md:text-3xl font-display font-bold uppercase tracking-tighter italic">Featured Series Analytics</h2>
            </div>
            <p className="text-ink/60 text-sm md:text-base mb-6 md:mb-8 italic">
              <LinkText text="Stay ahead with deep analytical reports for all upcoming Pakistan cricket series. Click on a series to view head-to-head records, venue history, and predicted playing XIs." />
            </p>
            
            <div className="space-y-4">
              {upcomingSeries.map((series, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="bg-card-bg border border-card-border p-5 md:p-6 rounded-2xl md:rounded-[32px] group transition-all"
                >
                  <Link to={series.path || `/series-intelligence/${series.id}`} className="block">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-6">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-pak-green/10 flex items-center justify-center text-pak-green group-hover:bg-pak-green group-hover:text-white transition-colors">
                          {series.icon}
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold italic mb-0.5 md:mb-1 group-hover:text-pak-green transition-colors">
                            {series.title}
                          </h3>
                          <p className="text-[10px] md:text-xs font-bold text-neutral-500 uppercase tracking-widest">{series.format} • {series.matches}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:justify-end gap-5 md:gap-6 border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                        <div className="text-left">
                          <p className="text-[9px] md:text-[10px] font-black uppercase text-neutral-500 tracking-widest mb-0.5 md:mb-1">Venue</p>
                          <p className="text-xs md:text-sm font-bold text-white italic">{series.venue}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1.5 md:gap-2">
                          <span className={`px-3 md:px-4 py-0.5 md:py-1 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-widest ${
                            series.status === 'Upcoming' ? 'bg-pak-green/20 text-pak-green' : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                          }`}>
                            {series.status}
                          </span>
                          <span className="text-[8px] font-black text-pak-green group-hover:underline uppercase tracking-tighter">View Intel Report →</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Venue Analytics: Dhaka & Sylhet */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="bg-card-bg border border-pak-green/20 p-6 md:p-8 rounded-3xl md:rounded-[40px] relative overflow-hidden group"
              >
                <div className="absolute -top-10 -right-10 bg-pak-green/5 w-40 h-40 rounded-full blur-3xl group-hover:bg-pak-green/10 transition-colors" />
                <h3 className="text-xl md:text-2xl font-display font-bold uppercase italic mb-4 md:mb-6 flex items-center gap-3">
                   <MapPin className="w-5 h-5 md:w-6 md:h-6 text-pak-green" /> Dhaka Stadium
                </h3>
                <div className="space-y-5 md:space-y-6">
                   <div>
                      <p className="text-[9px] md:text-[10px] font-black uppercase text-pak-green tracking-widest mb-1">Historical Performance</p>
                      <p className="text-xs md:text-sm text-neutral-400 leading-relaxed italic">The Sher-e-Bangla National Cricket Stadium is famous for its slow, turning tracks where spinners often dictate terms. Pakistan has historically performed exceptionally well here, winning the last series in 2021.</p>
                   </div>
                   <div className="flex gap-10">
                      <div>
                         <p className="text-[10px] font-black uppercase text-pak-green tracking-widest mb-1">Avg 1st Innings</p>
                         <p className="text-xl font-display font-bold text-white italic">328 <span className="text-xs text-neutral-500 uppercase not-italic">Runs</span></p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black uppercase text-pak-green tracking-widest mb-1">Win % (Bat 1st)</p>
                         <p className="text-xl font-display font-bold text-white italic">42%</p>
                      </div>
                   </div>
                   <div className="pt-4 border-t border-white/5">
                      <p className="text-[10px] font-black uppercase text-neutral-500 tracking-widest mb-2">Past Records vs Pakistan</p>
                      <p className="text-xs font-bold text-white italic">Pakistan clean swept the Tiger's in the 2021 Test series at this venue.</p>
                   </div>
                </div>
              </motion.div>

              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="bg-card-bg border border-rose-500/20 p-6 md:p-8 rounded-3xl md:rounded-[40px] relative overflow-hidden group"
              >
                <div className="absolute -top-10 -right-10 bg-rose-500/5 w-40 h-40 rounded-full blur-3xl group-hover:bg-rose-500/10 transition-colors" />
                <h3 className="text-xl md:text-2xl font-display font-bold uppercase italic mb-4 md:mb-6 flex items-center gap-3">
                   <MapPin className="w-5 h-5 md:w-6 md:h-6 text-rose-500" /> Sylhet International
                </h3>
                <div className="space-y-5 md:space-y-6">
                   <div>
                      <p className="text-[9px] md:text-[10px] font-black uppercase text-rose-500 tracking-widest mb-1">Historical Performance</p>
                      <p className="text-xs md:text-sm text-neutral-400 leading-relaxed italic">Known for its scenic beauty, the Sylhet International Stadium typically offers a bit more bounce and movement for seamers early on. It is becoming a fortress for Bangladesh in the long format.</p>
                   </div>
                   <div className="flex gap-10">
                      <div>
                         <p className="text-[10px] font-black uppercase text-rose-500 tracking-widest mb-1">Avg 1st Innings</p>
                         <p className="text-xl font-display font-bold text-white italic">292 <span className="text-xs text-neutral-500 uppercase not-italic">Runs</span></p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black uppercase text-rose-500 tracking-widest mb-1">Win % (Bat 1st)</p>
                         <p className="text-xl font-display font-bold text-white italic">58%</p>
                      </div>
                   </div>
                   <div className="pt-4 border-t border-white/5">
                      <p className="text-[10px] font-black uppercase text-neutral-500 tracking-widest mb-2">Past Records vs Pakistan</p>
                      <p className="text-xs font-bold text-white italic">Sylhet has yet to witness a high-scoring Test draw between these two Asian giants.</p>
                   </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Featured & Recent Series Section */}
          <section className="bg-white/5 rounded-3xl md:rounded-[48px] p-6 md:p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-12 pointer-events-none">
              <HistoryIcon className="w-64 h-64" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <Trophy className="w-6 h-6 md:w-8 md:h-8 text-pak-green" />
                <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter italic">Recent Series Archive</h2>
              </div>
              <p className="text-ink/60 text-sm md:text-base mb-6 md:mb-8 italic">
                <LinkText text="Explore completed series results and tournament reviews. This section ensures you stay updated with match results and comprehensive season analysis." />
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recentSeries.map((series, idx) => (
                  <Link 
                    key={idx}
                    to={series.path}
                    className="bg-black/20 border border-white/5 p-5 rounded-2xl flex items-center justify-between group hover:border-pak-green/40 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green group-hover:bg-pak-green group-hover:text-white transition-all">
                        {series.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white italic leading-none mb-1 group-hover:text-pak-green transition-colors">{series.title}</h4>
                        <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{series.matches}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-pak-green group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Recent Series Section */}
          <section>
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <HistoryIcon className="w-6 h-6 md:w-8 md:h-8 text-pak-green" />
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter italic">Recent Series</h2>
            </div>
            <p className="text-ink/60 text-sm md:text-base mb-6 md:mb-8 italic">
              <LinkText text="Missed a series? No problem. Here you can find completed series results, match summaries, and top performers. Perfect for quick analysis and cricket insights." />
            </p>
            <div className="p-6 md:p-8 bg-card-bg border border-card-border rounded-2xl md:rounded-[32px] border-dashed">
               <p className="text-center text-neutral-500 font-bold uppercase tracking-widest text-[9px] md:text-[10px]">No major recent series to display for the current window.</p>
            </div>
          </section>

          {/* Venues & Content */}
          <section className="space-y-10 md:space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-4 md:mb-6 italic">Squad & Team Updates</h2>
              <p className="text-base md:text-lg text-ink/70 leading-relaxed italic mb-4 md:mb-6">
                <LinkText text="Each series includes updated squad information, including final team selections, player injuries & replacements, and key player insights. Check full squad details for every tour." />
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-4 md:mb-6 italic text-rose-500">Venues & Match Details</h2>
              <p className="text-base md:text-lg text-ink/70 leading-relaxed italic mb-6 md:mb-8">
                <LinkText text="We provide complete venue details for every series, covering stadium names, pitch conditions, and match timing (PKT). Very useful for fans, analysts, and fantasy cricket users." />
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                 {["Stadium Names", "Pitch Conditions", "Match Timing"].map(t => (
                    <div key={t} className="p-5 md:p-6 bg-white/5 rounded-xl md:rounded-2xl border border-white/5 text-center">
                       <p className="text-[10px] md:text-xs font-black uppercase text-pak-green mb-1.5 md:mb-2 tracking-widest">{t}</p>
                       <p className="text-neutral-500 text-[9px] md:text-[10px] font-bold uppercase tracking-wide leading-none">Detailed Analysis Included</p>
                    </div>
                 ))}
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-pak-green p-8 rounded-[40px] text-white sticky top-24">
            <h3 className="text-2xl font-display font-bold uppercase mb-6 italic leading-tight">Why Use This Page?</h3>
            <ul className="space-y-4 list-none p-0 m-0">
              {[
                "All Pakistan series in one place",
                "Regularly updated information",
                "Easy navigation for users",
                "Accurate fixtures and match details"
              ].map((benefit, i) => (
                <li key={i} className="flex gap-3 text-sm font-bold italic">
                  <ShieldCheck className="w-5 h-5 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-white/20">
               <Link to="/schedule" className="group flex items-center justify-between w-full p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all">
                  <span className="text-xs font-black uppercase tracking-widest">Full Schedule</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
          </div>

          <div className="p-8 bg-card-bg border border-card-border rounded-[40px]">
            <h3 className="text-xl font-display font-bold uppercase mb-6 italic">Quick Links</h3>
            <div className="flex flex-col gap-4">
               {[
                 { name: "Match Schedule", path: "/schedule" },
                 { name: "Next Match", path: "/match/pk-bd-test-1-2026" },
                 { name: "Squad Details", path: "/squads" }
               ].map(l => (
                 <Link key={l.path} to={l.path} className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-pak-green transition-colors flex items-center gap-2">
                   <div className="w-1 h-1 bg-pak-green rounded-full" /> {l.name}
                 </Link>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <section className="mt-20 pt-20 border-t border-card-border">
        <div className="flex items-center gap-4 mb-10">
          <Info className="w-8 h-8 text-pak-green" />
          <h2 className="text-3xl font-display font-bold uppercase tracking-tighter italic">Series FAQs</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold text-white mb-3 italic">What is a cricket series?</h4>
              <p className="text-neutral-500 text-sm leading-relaxed italic">
                <LinkText text="A cricket series is a group of matches played between two teams or within a tournament across different formats like Test, ODI, or T20." />
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-3 italic">How often is this page updated?</h4>
              <p className="text-neutral-500 text-sm leading-relaxed italic">
                <LinkText text="We update series information regularly as soon as verified announcements are made by the PCB or participating boards." />
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold text-white mb-3 italic">Can I find all Pakistan tours here?</h4>
              <p className="text-neutral-500 text-sm leading-relaxed italic">
                <LinkText text="Yes, this page includes all major Pakistan tours, tournaments, and triangular series scheduled in the ICC FTP." />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Words */}
      <div className="mt-20 p-12 bg-neutral-900 rounded-[48px] text-center border border-white/5">
        <p className="text-xl text-neutral-300 font-medium italic italic mb-8 max-w-2xl mx-auto">
          "The Pakistan Cricket Series page on PakCric Schedule is designed to keep fans informed with the latest fixtures, squads, and updates."
        </p>
        <p className="text-[10px] font-black uppercase text-pak-green tracking-[0.4em]">Bookmark this page – Stay Updated</p>
      </div>
    </div>
  );
}
