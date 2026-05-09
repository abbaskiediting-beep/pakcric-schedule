import { Calendar, ArrowLeft, Trophy, BarChart3, History as HistoryIcon, Star, User, ChevronRight, ExternalLink, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import CommonQuestions from '../components/CommonQuestions';

export default function BabarZalmiRecordBlog() {
  const blogTitle = "Babar Azam Sirf 6 Runs Door: Kamran Akmal Ka Record Todenge Aur Baneinge PSL History Ka Anokha Khiladi";
  const publishDate = "May 1, 2026";
  const authorId = "zainab-rashid";

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20 font-sans selection:bg-pak-green selection:text-white">
      <Helmet>
        <title>Babar Azam 6 Runs Away From Breaking Kamran Akmal's Peshawar Zalmi All-Time Record | PakCric Schedule</title>
        <meta name="description" content="Babar Azam sirf 6 runs aur banane ke baad Peshawar Zalmi ke all-time highest run-scorer ban jayenge — Kamran Akmal ke 1972 runs ka record todke. Full stats, comparison & analysis." />
      </Helmet>

      {/* Hero Header */}
      <div className="relative py-20 bg-[#050c08] border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-pak-green/5 blur-[100px]" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-pak-green text-[10px] font-black uppercase tracking-widest mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Blogs
          </Link>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-pak-green uppercase tracking-widest mb-6"
          >
            <HistoryIcon className="w-3.5 h-3.5" />
            Analysis • PSL History
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-3xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-tight mb-8"
          >
            {blogTitle}
          </motion.h1>
          
          <div className="flex items-center gap-6 text-white/40 text-[10px] font-black uppercase tracking-widest">
            <span className="flex items-center gap-2"><User className="w-4 h-4 text-pak-green" /> Zainab Rashid</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-pak-green" /> {publishDate}</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <div className="prose prose-invert max-w-none prose-p:text-lg prose-p:leading-relaxed prose-p:text-white/70 prose-strong:text-pak-green prose-h2:text-3xl prose-h2:font-display prose-h2:font-bold prose-h2:uppercase prose-h2:tracking-tight prose-h2:mt-16 prose-h2:mb-8 prose-h3:text-2xl prose-h3:font-display prose-h3:font-bold prose-h3:text-white/90">
            
            <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-white/90 border-l-4 border-pak-green pl-8 mb-12">
              Babar Azam sirf 6 runs aur banane ke baad Peshawar Zalmi ke all-time highest run-scorer ban jayenge — Kamran Akmal ke 1,972 runs ka record todke.
            </p>

            <h2>Woh Record Jo Ab Sirf Ek Chota Sa Qadam Dur Hai</h2>
            <p>
              Gaddafi Stadium, Lahore. 3 May 2026. PSL 11 Final. Peshawar Zalmi vs Hyderabad Kingsmen.
            </p>
            <p>
              Jab Babar Azam apna helmet pehen ke crease ki taraf chalenge — already is season mein 588 runs, do centuries, do Player of the Match awards, aur ek poori qaum ki umeedein apne kaandhe par liye — ek aur cheez unka intezaar kar rahi hogi.
            </p>
            <p>
              <strong>Sirf 6 runs.</strong>
            </p>
            <p>
              Sirf 6 runs banane se Babar Azam Peshawar Zalmi ke all-time highest run-scorer ban jayenge — Kamran Akmal ke 1972 runs ka record todke, jo PSL ke shuruwati dor se aaj tak qayem tha. Aur is ek paar karne ke baad, Babar Azam ek aisa record bana lenge jo Pakistan cricket history mein pehle kabhi kisi ne nahi banaya:
            </p>
            <p className="text-xl font-bold text-pak-green">
              Woh PSL history ke pehle aur ikaule batter baneinge jo do alag franchises ke all-time highest scorer hon.
            </p>
            <p>
              Karachi Kings ka record pehle se unke naam hai. Ab Peshawar Zalmi ka bhi.
            </p>

            {/* Comparison Table */}
            <div className="my-12 overflow-hidden border border-white/10 rounded-3xl bg-white/5 not-prose">
              <div className="bg-white/10 px-6 py-4 border-b border-white/10 flex items-center gap-3">
                 <BarChart3 className="w-5 h-5 text-pak-green" />
                 <h3 className="text-xl font-display font-bold m-0 uppercase tracking-tighter">Babar Azam vs Kamran Akmal — Do Legends, Ek Record</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-bold text-left m-0">
                  <thead>
                    <tr className="bg-white/5 text-[10px] uppercase font-black tracking-widest text-white/40">
                      <th className="px-6 py-4">Stat</th>
                      <th className="px-6 py-4">Kamran Akmal</th>
                      <th className="px-6 py-4">Babar Azam</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="px-6 py-4 text-white/40 uppercase tracking-widest text-[10px]">Total PSL Runs (Zalmi)</td>
                      <td className="px-6 py-4 text-white">1,972</td>
                      <td className="px-6 py-4 text-pak-green">1,967 (6 chahiye)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-white/40 uppercase tracking-widest text-[10px]">Innings</td>
                      <td className="px-6 py-4 text-white/70">74</td>
                      <td className="px-6 py-4 text-white font-black">42</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-white/40 uppercase tracking-widest text-[10px]">Average</td>
                      <td className="px-6 py-4 text-white/70">27.38</td>
                      <td className="px-6 py-4 text-pak-green font-black">56.20</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-white/40 uppercase tracking-widest text-[10px]">Strike Rate</td>
                      <td className="px-6 py-4 text-white/70">136.94</td>
                      <td className="px-6 py-4 text-white font-black">142.12</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-white/40 uppercase tracking-widest text-[10px]">Centuries</td>
                      <td className="px-6 py-4 text-white/70">3</td>
                      <td className="px-6 py-4 text-white font-black">4</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-white/40 uppercase tracking-widest text-[10px]">Half-Centuries</td>
                      <td className="px-6 py-4 text-white/70">12</td>
                      <td className="px-6 py-4 text-white font-black">16</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-white/40 uppercase tracking-widest text-[10px]">Seasons for Zalmi</td>
                      <td className="px-6 py-4 text-white/70">7 (2016–2022)</td>
                      <td className="px-6 py-4 text-white font-black">4 (2023–2026)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p>
              Yeh table dekh kar ek cheez immediately nazar aati hai — Kamran Akmal ne 74 innings mein 1,972 runs banaye. Babar Azam ne sirf <strong>42 innings</strong> mein almost wahi total pohoncha liya — average 56.20 ke saath jo Kamran ke 27.38 se do guna zyada hai.
            </p>

            <h2>Kamran Akmal Ki Peshawar Zalmi Legacy: Jis Record Ko Todna Asaan Nahi Tha</h2>
            <p>
              Kamran Akmal ko chota karna bilkul maqsad nahi hai — balki is record ki value samajhne ke liye pehle yeh samajhna zaroori hai ke yeh record banaa kaise tha.
            </p>
            <p>
              Kamran Akmal ne PSL ke pehle 7 seasons — 2016 se 2022 tak — Peshawar Zalmi ki taraf se khela. Woh Zalmi ka original star opener tha — woh batter jis par team depend karti thi, jis par fans bharsaa karte the. Kamran Akmal ne PSL 2017 mein Green Cap — tournament ka leading run-scorer award — jeeta tha.
            </p>

            <h2>Babar Azam Ki Peshawar Zalmi Innings: Saal Ba Saal</h2>
            <h3>PSL 2023 — Nayi Ghar, Nayi Shuruat</h3>
            <p>
              Babar Azam 2023 mein Peshawar Zalmi se judey — Karachi Kings chhod kar — aur pehle hi season mein apna sabse zyada yad-gar contribution diya.
            </p>
            <h3>PSL 2024 — Aur Behtar</h3>
            <p>
              Doosra PSL century — 111* off 63 balls vs Islamabad United — team jeeti by 8 runs. Is season mein Babar ne Zalmi ke liye consistently runs banaye aur team ko playoffs tak pohonchaaya.
            </p>
            <h3>PSL 2026 — Comeback of the Century</h3>
            <p>
              PSL 2026 mein Babar ne 588 runs banaye — average 84.00 aur strike rate 146.26 ke saath. Sirf Fakhar Zaman ne ek season mein itne runs banaye hain (588, 2022 mein) — lekin Fakhar ko 13 innings lagiy thay, Babar ko sirf 10.
            </p>

            <h2>Woh Record Jo Isse Bhi Bada Hai: Do Franchises Ka Highest Scorer</h2>
            <p>
              Yeh sirf Zalmi record nahi — yeh ek aisa record hai jo poori PSL history mein kisi ne nahi banaya.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose">
              <div className="p-8 bg-white/5 border border-white/10 rounded-[32px]">
                <h4 className="text-xl font-display font-bold text-white uppercase mb-4">Karachi Kings Record</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 uppercase tracking-widest text-[10px]">Runs</span>
                    <span className="text-white font-bold tracking-tight">2,398</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 uppercase tracking-widest text-[10px]">Average</span>
                    <span className="text-white font-bold tracking-tight">43.60</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 uppercase tracking-widest text-[10px]">Status</span>
                    <span className="text-pak-green font-black uppercase tracking-widest text-[10px]">Current Record ✅</span>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-pak-green/10 border border-pak-green/20 rounded-[32px]">
                <h4 className="text-xl font-display font-bold text-white uppercase mb-4">Peshawar Zalmi Record</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 uppercase tracking-widest text-[10px]">Runs</span>
                    <span className="text-white font-bold tracking-tight">1,967</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 uppercase tracking-widest text-[10px]">Innings</span>
                    <span className="text-white font-bold tracking-tight">42</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 uppercase tracking-widest text-[10px]">Behind</span>
                    <span className="text-red-400 font-black uppercase tracking-widest text-[10px]">Only 6 Runs Door ⏳</span>
                  </div>
                </div>
              </div>
            </div>

            <h2>Conclusion: Sirf 6 Runs — Aur History Ban Jayegi</h2>
            <p>
              Jab 3 May 2026 ko Babar Azam Gaddafi Stadium mein crease par aakar khadeinge, toh unke saamnay do baatein hongi: apni team ke liye PSL title jeetnaa — aur PSL history mein apna naam ek aur anokhe andaaz se darj karana.
            </p>
            <p>
              <strong>6 runs.</strong> Ek chowka. Ek six. Sirf ek scoring shot.
            </p>
            <p>
              Babar Azam ne apni career mein bohot saare records banaye hain — ODI mein, T20I mein, Test mein. Lekin yeh PSL record ek alag qism ka hoga — kyunke yeh sirf runs ki baat nahi, yeh loyalty, performance, aur two chapters of one extraordinary story ki baat hai.
            </p>

            {/* Internal Links Block */}
            <div className="my-16 p-10 bg-white/5 border border-white/10 rounded-[40px] not-prose">
               <div className="flex items-center gap-3 mb-8">
                  <TrendingUp className="w-5 h-5 text-pak-green" />
                  <h4 className="text-lg font-display font-bold uppercase tracking-tight">Relive the Action</h4>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  <Link to="/babar-azam-all-psl-centuries-list-2026-details" className="flex items-center gap-3 text-sm font-bold text-white/70 hover:text-pak-green transition-colors group">
                    <ChevronRight className="w-4 h-4 text-pak-green group-hover:translate-x-1 transition-transform" />
                    Babar Azam All PSL Centuries
                  </Link>
                  <Link to="/psl-11-qualifier-1-match-report-babar-century" className="flex items-center gap-3 text-sm font-bold text-white/70 hover:text-pak-green transition-colors group">
                    <ChevronRight className="w-4 h-4 text-pak-green group-hover:translate-x-1 transition-transform" />
                    Qualifier 1: Babar 103*
                  </Link>
                  <Link to="/top-5-players-with-most-centuries-in-psl-history-2026" className="flex items-center gap-3 text-sm font-bold text-white/70 hover:text-pak-green transition-colors group">
                    <ChevronRight className="w-4 h-4 text-pak-green group-hover:translate-x-1 transition-transform" />
                    Most Centuries in PSL History
                  </Link>
                  <Link to="/psl-11-top-run-scorers-2026" className="flex items-center gap-3 text-sm font-bold text-white/70 hover:text-pak-green transition-colors group">
                    <ChevronRight className="w-4 h-4 text-pak-green group-hover:translate-x-1 transition-transform" />
                    PSL 11 Top Run Scorers
                  </Link>
               </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-20 not-prose">
              <a href="https://www.pcb.com.pk/player/babar-azam-35139.html" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                <ExternalLink className="w-4 h-4 text-pak-green" /> Babar Azam PCB Stats
              </a>
              <a href="https://www.espncricinfo.com/cricketers/babar-azam-348144" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                <ExternalLink className="w-4 h-4" /> ESPNcricinfo Profile
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
           <div className="sticky top-24 space-y-12">
              <div className="p-8 bg-[#0a110d] border border-white/10 rounded-[40px]">
                 <div className="flex items-center gap-2 mb-8">
                   <Trophy className="w-5 h-5 text-pak-green" />
                   <h4 className="text-xl font-display font-bold uppercase italic tracking-tighter">Babar's PSL Journey</h4>
                 </div>
                 <div className="space-y-6">
                    {[
                      { label: 'PSL Runs', val: '4,193+' },
                      { label: 'PSL Centuries', val: '4' },
                      { label: 'Avg for Zalmi', val: '56.20' },
                      { label: 'SR for Zalmi', val: '142.12' },
                    ].map((item, i) => (
                      <div key={i} className="border-b border-white/5 pb-4 last:border-0">
                         <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">{item.label}</p>
                         <p className="text-lg font-display font-bold text-white">{item.val}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-pak-green/20 to-transparent border border-pak-green/30 rounded-[40px] group transition-all hover:border-pak-green">
                 <div className="flex items-center gap-3 mb-4">
                    <Star className="w-5 h-5 text-pak-green" />
                    <span className="text-[10px] font-black text-pak-green uppercase tracking-[2px]">Unique Record</span>
                 </div>
                 <h5 className="text-xl font-display font-bold uppercase italic mb-4">Do Franchises Ka Badshah</h5>
                 <p className="text-sm font-bold text-white/60 italic leading-relaxed">
                   Babar Azam will be the first player in PSL history to be the all-time leading run-scorer for TWO different franchises.
                 </p>
              </div>

              <Link 
                to="/psl-2026-final-preview-peshawar-zalmi-vs-hyderabad-kingsmen"
                className="block p-8 bg-card-bg border border-card-border text-white rounded-[40px] hover:border-pak-green hover:bg-pak-green/5 transition-all transform hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Next Big Event</span>
                  <Trophy className="w-5 h-5" />
                </div>
                <h5 className="text-2xl font-display font-bold uppercase leading-tight">PSL 2026 Final Preview</h5>
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.2em]">Read More Analysis</p>
              </Link>
           </div>
        </aside>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-32 border-t border-white/10 pt-20">
        <AuthorSection authorId={authorId} />
        <div className="mt-24">
           <CommonQuestions faqs={[
             { q: "Babar Azam ko kitne runs chahiye record todne ke liye?", a: "Babar Azam ko Kamran Akmal ka record todne ke liye sirf 6 runs chahiye." },
             { q: "Peshawar Zalmi ke liye Babar ka average kya hai?", a: "Zalmi ke liye Babar Azam ka batting average 56.20 hai." },
             { q: "Kya Babar pehle bhi kisi team ke highest scorer hain?", a: "Ji haan, Babar Azam Karachi Kings ke bhi all-time highest run-scorer hain (2,398 runs)." }
           ]} />
        </div>
      </div>
    </div>
  );
}
