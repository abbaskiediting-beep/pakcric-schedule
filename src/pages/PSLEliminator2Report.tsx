import { Calendar, ArrowLeft, Trophy, BarChart3, Zap, MapPin, Star, History as HistoryIcon, User, ChevronRight, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import CommonQuestions from '../components/CommonQuestions';

export default function PSLEliminator2Report() {
  const blogTitle = "Hyderabad Kingsmen ke 2 Runs se Jeet — PSL Final mein Entry";
  const publishDate = "May 1, 2026";
  const authorId = "zainab-rashid";

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20 font-sans selection:bg-pak-green selection:text-white">
      <Helmet>
        <title>Hyderabad Kingsmen vs Islamabad United Match Report | PSL 2026 Eliminator 2 | PakCric Schedule</title>
        <meta name="description" content="Hyderabad Kingsmen ne Islamabad United ko 2 runs se hara kar PSL 11 ke Final mein jagah bana li. Usman Khan ki tufaani innings aur Hunain Shah ka aakhri over ka jaadu." />
      </Helmet>

      {/* Hero Header */}
      <div className="hero relative overflow-hidden bg-dark py-20 pb-0 min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-pak-green/20 to-pak-red/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_40%,rgba(15,123,83,0.35)_0%,transparent_65%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(200,48,42,0.25)_0%,transparent_60%)]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-pak-green/20 border border-pak-green/50 text-pak-green rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-pak-green animate-pulse" />
            PSL 2026 · Eliminator 2 · Match Report
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-7xl font-display font-bold text-white leading-[1.1] tracking-tighter mb-8"
          >
            Hyderabad Kingsmen ke <span className="text-yellow-500">2 Runs</span> se Jeet — PSL Final mein Entry
          </motion.h1>
          
          <p className="text-lg md:text-xl text-white/60 font-medium mb-10 max-w-2xl mx-auto italic">
            Gaddafi Stadium, Lahore mein ek yaddgar raat — Usman Khan ki tufaani innings, Hunain Shah ki aakhri over mein jaadu, aur ek poori qaum ki saans ruk gayi.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/40">
             <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-pak-green" /> {publishDate}</span>
             <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-pak-green" /> Gaddafi Stadium, Lahore</span>
             <span className="flex items-center gap-2"><Trophy className="w-4 h-4 text-pak-green" /> PSL 11 — Eliminator 2</span>
          </div>
        </div>
      </div>

      {/* Scoreboard Section */}
      <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-card-bg border border-card-border rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-dark px-6 py-3 border-b border-white/5 flex justify-between items-center">
            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Final Scorecard — Eliminator 2</span>
            <span className="px-3 py-1 bg-pak-green/20 text-pak-green text-[10px] font-black rounded-full uppercase tracking-widest">Match Ended</span>
          </div>
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-4xl md:text-6xl font-display font-bold text-pak-green leading-none mb-2">HYK</h3>
              <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-4">Hyderabad Kingsmen</p>
              <div className="text-3xl md:text-4xl font-display font-bold">186/5 <span className="text-lg font-sans text-white/40">(20.0)</span></div>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-black text-white/20 uppercase tracking-[0.4em]">VS</span>
              <div className="px-4 py-1.5 bg-pak-green text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg shadow-pak-green/20">
                HYK Jeet Gaye ✓
              </div>
            </div>

            <div className="text-center md:text-right">
              <h3 className="text-4xl md:text-6xl font-display font-bold text-pak-red leading-none mb-2">IU</h3>
              <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-4">Islamabad United</p>
              <div className="text-3xl md:text-4xl font-display font-bold">184/7 <span className="text-lg font-sans text-white/40">(20.0)</span></div>
            </div>
          </div>
          <div className="bg-white/5 px-6 py-4 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/5">
             <div className="flex items-center gap-2 text-xs font-bold text-white/60 italic">
                <Trophy className="w-4 h-4 text-yellow-500" /> Hyderabad Kingsmen won by 2 runs
             </div>
             <div className="flex items-center gap-2 text-xs font-bold text-white/60 italic">
                <Star className="w-4 h-4 text-pak-green" /> Player of Match: Usman Khan
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-20">
        <div className="prose prose-invert max-w-none prose-p:text-lg prose-p:leading-relaxed prose-p:text-white/70 prose-strong:text-pak-green prose-h2:text-3xl prose-h2:font-display prose-h2:font-bold prose-h2:uppercase prose-h2:tracking-tight prose-h2:mt-16 prose-h2:mb-8 border-l-2 border-white/5 pl-4 md:pl-12">
          
          <div className="section-label flex items-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-pak-green rounded-full" />
            <span className="text-[10px] font-black text-pak-green uppercase tracking-widest">Match Preview</span>
          </div>
          <h2>Do Teams, Ek Final Ticket — PSL ka Sabse Bada Showdown</h2>
          <p>
            PSL 2026 ke Eliminator 2 mein Hyderabad Kingsmen aur Islamabad United Lahore ke Gaddafi Stadium mein aaye ek baat saaf — jeetne wala PSL final mein jaayega, haarne wala ghar. Kingsmen apni zindagi ki sabse zabardast form mein the, jabke Islamabad United Qualifier mein Peshawar Zalmi se 70 run ki sharmnaak shikast ke baad wapsi ki koshish mein the.
          </p>
          <p>
            Hyderabad Kingsmen ki kahani PSL 2026 ki sabse badi comeback story hai — pehle char matches haarne ke baad, unhe 7 mein se 6 matches jeete aur Eliminator 1 mein Multan Sultans ko 8 wickets se raud kar final ki taraf aae.
          </p>

          <hr className="my-12 border-white/5" />

          <div className="section-label flex items-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-pak-green rounded-full" />
            <span className="text-[10px] font-black text-pak-green uppercase tracking-widest">Pehli Innings — HYK Batting</span>
          </div>
          <h2>Usman Khan ka Toofan — 61 off sirf 30 Balls</h2>
          <p>
            Islamabad United ne toss jeet kar Hyderabad ko pehle batane bheja. Shuruwat acchi nahi rahi — Richard Gleeson ne pehli hi over mein Maaz Sadaqat ko 4 gend par zero pe wapas bhej diya. Kingsmen mushkil mein aa gayi, powerplay mein wicketein girne lagi aur pressure badhne laga.
          </p>
          <p>
            Lekin phir Marnus Labuschagne ne apni captain wali zimmedari uthaayi — 39 runs banaye aur ek stable platform teyar kiya. Saim Ayub ne bhi kuch runs jode. Lekin jis shaks ne match ka rukh badla, woh tha Usman Khan. Kusal Perera ke saath milkar Usman ne ek aisi partnership banaayi jo Islamabad ke bowlers ke hosh uda gayi.
          </p>

          <blockquote className="my-12 p-8 bg-dark border border-white/10 rounded-2xl relative overflow-hidden not-prose">
            <div className="absolute -top-4 -left-2 text-9xl text-pak-green opacity-10 font-serif">"</div>
            <p className="text-2xl font-display font-black text-white leading-tight italic relative z-10 mb-4">
              Usman Khan ne 30 balls mein 61 runs thoke — yeh PSL 2026 ka ek yaddgar cameo tha.
            </p>
            <cite className="text-[10px] font-black text-pak-green uppercase tracking-[0.2em] relative z-10 not-italic">
              — Match Commentary, May 1, 2026
            </cite>
          </blockquote>

          {/* Batting Player Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-12 not-prose">
             <div className="p-6 bg-white/5 border-l-4 border-yellow-500 rounded-2xl">
                <div className="text-[9px] font-black text-yellow-500 uppercase tracking-widest mb-1 flex items-center gap-2">
                   <Star className="w-3 h-3" /> Player of Match
                </div>
                <h4 className="text-xl font-display font-bold text-white mb-2">Usman Khan</h4>
                <p className="text-white/40 text-[10px] font-black uppercase mb-4 tracking-widest">Hyderabad Kingsmen</p>
                <div className="px-3 py-1.5 bg-white/5 rounded-lg inline-block text-sm font-bold text-white">61 off 30 balls (SR: 203)</div>
             </div>
             <div className="p-6 bg-white/5 border-l-4 border-pak-green rounded-2xl">
                <div className="text-[9px] font-black text-pak-green uppercase tracking-widest mb-1">Batting — HYK</div>
                <h4 className="text-xl font-display font-bold text-white mb-2">Kusal Perera</h4>
                <p className="text-white/40 text-[10px] font-black uppercase mb-4 tracking-widest">Hyderabad Kingsmen</p>
                <div className="px-3 py-1.5 bg-white/5 rounded-lg inline-block text-sm font-bold text-white">37 off 21 balls</div>
             </div>
          </div>

          <p>
            Kusal Perera ne 21 gend par 37 dhankedaar runs daale. Death overs mein yeh Usman-Perera partnership hi thi jo Hyderabad ko 186/5 tak le gayi — ek respectful total, lekin Islamabad ke liye bilkul reachable. Ya toh tha?
          </p>

          <hr className="my-12 border-white/5" />

          <div className="section-label flex items-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-pak-green rounded-full" />
            <span className="text-[10px] font-black text-pak-green uppercase tracking-widest">Doosri Innings — IU Chase</span>
          </div>
          <h2>Islamabad ka Dil Dhadkane wala Peecha — 2 Runs ki Kasar</h2>
          <p>
            187 ka target — Gaddafi Stadium ki chhoti boundaries mein koi mushkil nahi lagta tha. Lekin Hyderabad ke bowlers ke paas ek plan tha. Mohammad Ali ne pehli hi over mein Devon Conway ko duck par bheja — naatka shuru ho gaya. IU shuruwat mein hi 2 wickets khoke mushkil mein aa gayi.
          </p>

          {/* Chase Timeline */}
          <div className="my-12 space-y-8 not-prose border-l-2 border-white/5 pl-8 ml-4">
             {[
               { over: '1st Over', event: 'Mohammad Ali ne Devon Conway ko first ball duck par out kiya — IU shocking start, drama shuru.' },
               { over: 'Middle Overs', event: 'Chapman (43 off 26) aur Sameer Minhas ne partnership banaai — IU race mein wapas aaya.', color: 'text-pak-red' },
               { over: '17th Over', event: 'Chris Green ne Mohammad Ali ko SIX maara — IU ko target close karta dekh crowd ki saans ruk gayi.', color: 'text-yellow-500' },
               { over: 'Aakhri Over', event: 'Hunain Shah bowling. IU ko 6 runs chahiye the 6 balls mein. Faheem Ashraf caught out — Hyderabad ki 2 runs se jeet!', color: 'text-pak-green' },
             ].map((item, i) => (
                <div key={i} className="relative">
                  <div className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-dark border-2 border-white/20 flex items-center justify-center`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${item.color || 'bg-white/40'}`} />
                  </div>
                  <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">{item.over}</div>
                  <p className={`text-base font-bold italic ${item.color ? 'text-white' : 'text-white/70'}`}>{item.event}</p>
                </div>
             ))}
          </div>

          <p>
            Jab aakhri over mein Islamabad ko 6 chahiye the aur Faheem Ashraf strike par tha, pura Pakistan saans rok kar baith gaya tha. Hunain Shah ne gend dali — Faheem ne haath chalaya, lekin gend edge leke Hassan Khan ke haath mein gayi. Hyderabad ne 2 runs se match jeet liya — PSL 2026 ki sabse tight, sabse dramatic jeet.
          </p>

          <hr className="my-12 border-white/5" />

          <div className="section-label flex items-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-pak-green rounded-full" />
            <span className="text-[10px] font-black text-pak-green uppercase tracking-widest">Aage Kya?</span>
          </div>
          <h2>PSL 2026 Final — Hyderabad Kingsmen vs Peshawar Zalmi</h2>
          <p>
            Hyderabad Kingsmen ab 3 May 2026 ko PSL 2026 ka Grand Final khelenge — unka muqaabla hoga Babar Azam ki Peshawar Zalmi se. Zalmi ne Qualifier mein Islamabad ko 70 runs se raudha tha. Dono teams in best form mein hain — Babar Azam ka bat aur Usman Khan ka jazbah, Marnus Labuschagne ki captaincy aur Babar ki leadership — ek yaddgar final ka intezaar hai.
          </p>

          <div className="my-12 p-12 bg-gradient-to-br from-pak-green/20 to-transparent border border-pak-green/30 rounded-[48px] text-center not-prose">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
            <h3 className="text-4xl font-display font-black text-white uppercase tracking-tighter mb-2 italic">PSL 2026 FINAL</h3>
            <p className="text-xl font-bold text-pak-green mb-0">Hyderabad Kingsmen <span className="text-white/40 font-black italic">VS</span> Peshawar Zalmi</p>
            <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mt-4">3 May 2026 · Grand Finale</p>
          </div>

        </div>
        
        {/* Navigation & Sharing */}
        <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
           <Link to="/blogs" className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all group">
             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Analysis Hub
           </Link>
           
           <div className="flex items-center gap-4">
             <Link to="/psl-2026-final-preview-peshawar-zalmi-vs-hyderabad-kingsmen" className="flex items-center gap-3 px-8 py-4 bg-pak-green text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-pak-green/20">
               Final Preview <Zap className="w-4 h-4" />
             </Link>
           </div>
        </div>

        <div className="mt-24">
           <AuthorSection authorId={authorId} />
        </div>

        <div className="mt-24">
           <CommonQuestions faqs={[
             { q: "Hyderabad Kingsmen vs Islamabad United Eliminator 2 ka kya result raha?", a: "Hyderabad Kingsmen ne Islamabad United ko 2 runs se hara kar Final mein jagah bana li hai." },
             { q: "Usman Khan ne kitne runs banaye?", a: "Usman Khan ne 30 balls mein 61 runs ki tufaani innings kheli." },
             { q: "PSL 2026 Final kab hai?", a: "PSL 2026 Final 3 May 2026 ko Peshawar Zalmi aur Hyderabad Kingsmen ke darmiyan khela jayega." }
           ]} />
        </div>
      </div>
    </div>
  );
}
