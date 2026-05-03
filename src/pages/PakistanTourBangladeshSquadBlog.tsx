import { motion } from 'motion/react';
import { Calendar, Users, Shield, Star, Info, ArrowLeft, Trophy, CheckCircle2, UserX, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import { LinkText } from '../components/LinkText';

export default function PakistanTourBangladeshSquadBlog() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>Pakistan Test Squad Bangladesh 2026 | Full 16-Member Squad, 4 Uncapped Players, Sarfaraz Head Coach & Dropped Stars | May 8 First Test</title>
        <meta 
          name="description" 
          content="Pakistan's 16-member Test squad for Bangladesh 2026 announced — Shan Masood captain, Sarfaraz Ahmed head coach, 4 uncapped players (Abdullah Fazal, Amad Butt, Azan Awais, Ghazi Ghori). Plus who was LEFT OUT — Fakhar Zaman, Abrar Ahmed, Naseem Shah and more. Full analysis inside." 
        />
        <meta 
          name="keywords" 
          content="Pakistan Test Squad, Bangladesh 2026, Sarfaraz Ahmed Head Coach, Shan Masood, 4 Uncapped Players, Abdullah Fazal, Amad Butt, Azan Awais, Ghazi Ghori, Fakhar Zaman, Abrar Ahmed, Naseem Shah, Cricket News, Pakistan Cricket" 
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
        <div className="mb-8">
          <span className="px-3 py-1 bg-pak-green/10 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">
            Squad Announcement & Analysis
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tighter leading-[1.1] text-white">
            <LinkText text="Pakistan Test Team Bangladesh Rawan: Poori Squad, 4 Uncapped Players, Sarfaraz Ahmed Head Coach — Aur Jo Nahi Gaye Unki Baat Bhi" />
          </h1>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-card-bg p-4 rounded-2xl border border-card-border">
            <Calendar className="w-5 h-5 text-pak-green mb-3" />
            <p className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-1">First Test</p>
            <p className="text-sm font-bold text-white">8 May 2026</p>
          </div>
          <div className="bg-card-bg p-4 rounded-2xl border border-card-border">
            <Users className="w-5 h-5 text-pak-green mb-3" />
            <p className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-1">Squad Size</p>
            <p className="text-sm font-bold text-white">16 Players</p>
          </div>
          <div className="bg-card-bg p-4 rounded-2xl border border-card-border">
            <Star className="w-5 h-5 text-pak-green mb-3" />
            <p className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-1">Uncapped</p>
            <p className="text-sm font-bold text-white uppercase tracking-tight">4 New Stars</p>
          </div>
          <div className="bg-card-bg p-4 rounded-2xl border border-card-border">
            <Shield className="w-5 h-5 text-pak-green mb-3" />
            <p className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-1">Head Coach</p>
            <p className="text-sm font-bold text-white uppercase sm:text-[10px]">Sarfaraz Ahmed</p>
          </div>
        </div>

        <div className="prose dark:prose-invert prose-p:text-ink/70 prose-p:leading-relaxed prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tighter max-w-none">
          <div className="p-8 rounded-[40px] bg-pak-green/5 border border-pak-green/10 mb-12 relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-2xl mb-4 text-white">Introduction: Bangladesh Ka Safar — Naye Chehre, Naya Coach, Naya Chapter</h2>
               <p className="text-lg text-white/80 font-medium leading-relaxed italic mb-0">
                 <LinkText text="PSL 2026 abhi khatam bhi nahi hua tha — Gaddafi Stadium mein Final ki tayaari thi — aur PCB ne 18 April 2026 ko Pakistan ki 16-member Test squad Bangladesh ke liye announce kar di." />
               </p>
             </div>
             <div className="absolute top-0 right-0 p-8 opacity-10">
               <Trophy className="w-32 h-32 text-pak-green" />
             </div>
          </div>

          <p className="mb-6">
            Pehla Test: <strong>8 May 2026</strong> — Sher-e-Bangla National Cricket Stadium, Dhaka<br />
            Doosra Test: <strong>16 May 2026</strong> — Sylhet International Cricket Stadium, Sylhet
          </p>

          <p className="mb-6">
            <LinkText text="Yeh series ICC World Test Championship ka hissa hai — jahan Pakistan abhi 5th position par hai, South Africa ke saath ghar par 1-1 draw ke baad. Bangladesh ke khilaf do Test matches Pakistan ke liye WTC points ka ek important moka hain." />
          </p>

          <p className="mb-8 font-bold text-pak-green">
            Lekin squad announcement mein sirf cricket nahi tha — 3 badi khabrain theen:
          </p>
          <ul className="list-disc pl-6 mb-12 space-y-2 text-ink/80 font-bold uppercase tracking-tight text-sm">
            <li>Sarfaraz Ahmed — Pakistan ka naya Test Head Coach</li>
            <li>4 uncapped players — naye chehre, nayi umeedein</li>
            <li>Kuch bade naam nahi hain — dropped players ka controversy</li>
          </ul>

          <h2 className="text-3xl mt-12 mb-6 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-pak-green" /> Series Details at a Glance
          </h2>
          <div className="overflow-hidden rounded-3xl border border-card-border bg-card-bg mb-12 border-l-4 border-l-pak-green">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-[10px] font-black uppercase tracking-widest text-ink/40 w-1/3">Series</td>
                  <td className="p-4 text-sm font-bold text-white">Pakistan tour of Bangladesh 2026</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-[10px] font-black uppercase tracking-widest text-ink/40">Format</td>
                  <td className="p-4 text-sm font-bold text-white">2 Tests (ICC World Test Championship)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-[10px] font-black uppercase tracking-widest text-ink/40">1st Test</td>
                  <td className="p-4 text-sm font-bold text-white">8–12 May 2026 — Dhaka</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-[10px] font-black uppercase tracking-widest text-ink/40">Head Coach</td>
                  <td className="p-4 text-sm font-bold text-pak-green">Sarfaraz Ahmed (New appointment)</td>
                </tr>
                <tr>
                  <td className="p-4 text-[10px] font-black uppercase tracking-widest text-ink/40">Uncapped Players</td>
                  <td className="p-4 text-sm font-bold text-white">4 (Abdullah Fazal, Amad Butt, Azan Awais, Ghazi Ghori)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl mt-12 mb-6">Pakistan Ki Full 16-Member Test Squad</h2>
          <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[40px] mb-12">
            <p className="text-lg font-display font-medium text-white leading-relaxed tracking-tight">
              <span className="text-pak-green font-black underline decoration-2 underline-offset-4">Shan Masood (captain)</span>, Abdullah Fazal, Amad Butt, Azan Awais, Babar Azam, Hasan Ali, Imam-ul-Haq, Khurram Shahzad, Mohammad Abbas, Mohammad Rizwan (wk), Muhammad Ghazi Ghori, Noman Ali, Sajid Khan, Salman Ali Agha, Saud Shakeel, and Shaheen Shah Afridi.
            </p>
          </div>

          <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-6 border-b border-pak-green/20 pb-2 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-pak-green" /> Complete Squad by Role
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
             {[
               { role: 'Batters', players: 'Shan Masood, Babar Azam, Imam-ul-Haq, Saud Shakeel, Abdullah Fazal (U), Azan Awais (U)' },
               { role: 'Wicketkeepers', players: 'Mohammad Rizwan, Muhammad Ghazi Ghori (U)' },
               { role: 'Allrounders', players: 'Salman Ali Agha, Amad Butt (U)' },
               { role: 'Fast Bowlers', players: 'Shaheen Afridi, Hasan Ali, Khurram Shahzad, Mohammad Abbas' },
               { role: 'Spinners', players: 'Noman Ali, Sajid Khan' }
             ].map(item => (
               <div key={item.role} className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                 <p className="text-[10px] font-black uppercase tracking-widest text-pak-green mb-2">{item.role}</p>
                 <p className="text-sm font-bold text-white/90">{item.players}</p>
               </div>
             ))}
          </div>

          <h2 className="text-3xl mt-12 mb-6 flex items-center gap-3">
             <Star className="w-8 h-8 text-yellow-500" /> 4 Uncapped Players: Pakistan Ka Kal
          </h2>
          <div className="space-y-6 mb-12">
            {[
              { name: 'Abdullah Fazal', role: 'Left-Hand Opener (Age: 23)', desc: 'Consistently impressed in Quaid-e-Azam Trophy. Technically sound openerRewarded after impressive domestic form. Useful combination against spin.' },
              { name: 'Azan Awais', role: 'Left-Hand Opener (Age: 21)', desc: 'Pakistan cricket\'s most exciting young opening talent. Outstanding form in domestic circuit. Currently part of NCA Red-Ball Camp.' },
              { name: 'Amad Butt', role: 'Left-Arm Pace Allrounder', desc: 'Seasoned first-class performer since 2015. Brings decade of domestic experience and left-arm variation. Smart pick for Bangladesh conditions.' },
              { name: 'Muhammad Ghazi Ghori', role: 'Wicketkeeper-Batter (Age: 23)', desc: 'Viewed as a long-term project. Backup to Rizwan with potential to be Pakistan\'s future keeper. Part of NCA camp alongside senior players.' }
            ].map(player => (
              <div key={player.name} className="p-6 rounded-3xl bg-card-bg border border-card-border hover:border-pak-green/30 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-pak-green/10 border border-pak-green/20 flex items-center justify-center text-pak-green font-black">U</div>
                  <div>
                    <h4 className="text-lg font-bold text-white leading-none mb-1">{player.name}</h4>
                    <p className="text-[10px] font-black uppercase tracking-widest text-ink/40">{player.role}</p>
                  </div>
                </div>
                <p className="text-sm text-ink/70 leading-relaxed italic border-l-2 border-pak-green/20 pl-4">{player.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl mt-12 mb-6 border-l-4 border-pak-green pl-6">Sarfaraz Ahmed — Naya Test Head Coach</h2>
          <p className="mb-6 leading-relaxed">
            <LinkText text="The PCB also confirms the appointment of red-ball coaches for the Bangladesh tour, with former Test captain Sarfaraz Ahmed appointed as head coach." />
          </p>
          <p className="mb-8">
            Yeh appointment Pakistan cricket ki ek major turning point hai. Sarfaraz Ahmed — jinhon ne <strong>ICC Champions Trophy 2017</strong> aur <strong>ICC U19 World Cup 2006</strong> jeeta captain ke taur par — ab dressing room mein ek alag haisiyat mein wapas aaye hain.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
              <p className="text-[10px] font-black uppercase tracking-widest text-pak-green mb-2 uppercase">Head Coach</p>
              <p className="text-lg font-display font-bold text-white italic">Sarfaraz Ahmed</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
              <p className="text-[10px] font-black uppercase tracking-widest text-pak-green mb-2 uppercase">Batting Coach</p>
              <p className="text-lg font-display font-bold text-white">Asad Shafiq</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
              <p className="text-[10px] font-black uppercase tracking-widest text-pak-green mb-2 uppercase">Bowling Coach</p>
              <p className="text-lg font-display font-bold text-white">Umar Gul</p>
            </div>
          </div>

          <h2 className="text-3xl mt-16 mb-8 flex items-center gap-3">
            <UserX className="w-8 h-8 text-red-500" /> JO NAHI GAYE: Dropped Players Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { name: 'Fakhar Zaman', reason: 'Young left-handers preferred; Test form inconsistent lately.' },
              { name: 'Naseem Shah', reason: 'Workload management + fitness concerns. Trio of senior pacers selected.' },
              { name: 'Abrar Ahmed', reason: 'Noman-Sajid duo proven dominant in subcontinent conditions.' },
              { name: 'Saim Ayub', reason: 'Developing for red-ball format; focus on white-ball consistency.' },
              { name: 'Zaman Khan', reason: 'Experience of Hasan Ali and Abbas preferred for swing movement.' },
              { name: 'Tayyab Tahir', reason: 'Needs more red-ball domestic matches to polish skill.' }
            ].map(dropped => (
              <div key={dropped.name} className="flex gap-4 p-5 rounded-2xl bg-red-500/5 border border-red-500/10">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                <div>
                   <p className="text-sm font-black uppercase tracking-widest text-red-400 mb-1 leading-none">{dropped.name}</p>
                   <p className="text-xs text-ink/50 font-bold">{dropped.reason}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl mt-12 mb-6">WTC Context: Why This Series Matters</h2>
          <p className="mb-6 font-medium text-ink/80 italic">
            <LinkText text="Pakistan stands at No. 5 in the World Test Championship after drawing the home Test series against South Africa 1-1 last October." />
          </p>
          <div className="p-8 rounded-[40px] bg-card-bg border border-card-border mb-12">
             <p className="text-sm leading-relaxed mb-6">
                WTC 2023-25 cycle mein Pakistan ne disappointing performance di thi. Bangladesh ke khilaf 2 Tests mein maximum 24 WTC points mile sakte hain. Pakistan ko WTC Final 2027 ke liye in points ki sakht zaroorat hai.
             </p>
             <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                <div className="px-5 py-3 bg-pak-green text-white text-[10px] font-black uppercase tracking-widest flex items-center justify-between rounded-xl shadow-lg shadow-pak-green/20">
                   <span>WTC Rank</span>
                   <span className="text-sm">5th</span>
                </div>
                <div className="px-5 py-3 bg-white/5 border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-widest flex items-center justify-between rounded-xl">
                   <span>Max Points</span>
                   <span className="text-sm text-pak-green font-bold">24</span>
                </div>
             </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6">Schedule: Test Match Details</h2>
          <div className="overflow-hidden rounded-3xl border border-card-border bg-card-bg mb-12 shadow-2xl">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="bg-white/5 border-b border-card-border">
                   <th className="p-4 text-[10px] font-black uppercase tracking-widest text-ink/40">Test</th>
                   <th className="p-4 text-[10px] font-black uppercase tracking-widest text-ink/40">Venue</th>
                   <th className="p-4 text-[10px] font-black uppercase tracking-widest text-ink/40">Dates</th>
                 </tr>
               </thead>
               <tbody>
                 <tr className="border-b border-white/5">
                   <td className="p-4 text-sm font-bold text-white italic">1st Test</td>
                   <td className="p-4 text-sm text-ink/70 font-medium">Dhaka</td>
                   <td className="p-4 text-sm text-pak-green font-bold">8–12 May</td>
                 </tr>
                 <tr>
                   <td className="p-4 text-sm font-bold text-white italic">2nd Test</td>
                   <td className="p-4 text-sm text-ink/70 font-medium">Sylhet</td>
                   <td className="p-4 text-sm text-pak-green font-bold">16–20 May</td>
                 </tr>
               </tbody>
             </table>
          </div>

          <h2 className="text-3xl mt-12 mb-6 italic underline decoration-pak-green decoration-4 underline-offset-8">Series Prediction</h2>
          <p className="text-lg font-medium leading-relaxed mb-10 text-ink/80">
            Pakistan is the stronger team on paper with deep batting and variety in pace and spin. Bangladesh at home are dangerous, but Pakistan’s Noman-Sajid combination should be the deciding factor. <strong>Prediction: Pakistan to win the series 2-0.</strong>
          </p>

          <footer className="mt-16 pt-12 border-t border-card-border flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-pak-green">Internal Links</h4>
              <div className="flex flex-wrap gap-3">
                <Link to="/pakistan-vs-bangladesh-2026-schedule" className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:text-pak-green transition-colors">Bangladesh Tour Schedule</Link>
                <Link to="/babar-azam-all-psl-centuries-list-2026-details" className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:text-pak-green transition-colors">Babar Azam PSL Records</Link>
                <Link to="/rankings" className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:text-pak-green transition-colors">ICC Rankings 2026</Link>
              </div>
            </div>
            
            <AuthorSection authorId="omar-farooq" />
          </footer>
        </div>
      </motion.article>
    </div>
  );
}
