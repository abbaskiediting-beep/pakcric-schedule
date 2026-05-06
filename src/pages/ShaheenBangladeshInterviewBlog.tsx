import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Link as LinkIcon, Star, Target, Zap, Trophy, Shield, Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { AUTHORS } from '../data/blogData';
import AdPlaceholder from '../components/AdPlaceholder';

const ShaheenBangladeshInterviewBlog = () => {
  const navigate = useNavigate();
  const author = AUTHORS.find(a => a.id === 'ayesha-khan');
  const publishDate = "May 6, 2026";
  const title = "Shaheen Shah Afridi's Bangladesh Interview: \"Pakistan is Famous for Fast Bowling — Our Pacers Will Take Wickets\"";
  const baseUrl = "https://pakcric-schedule.online";
  const path = "/news/shaheen-shah-afridi-bangladesh-interview-2026";
  const canonicalUrl = `${baseUrl}${path}`;

  const shareUrl = canonicalUrl;

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard!');
        return;
    }
    if (url) window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20">
      <Helmet>
        <title>Shaheen Shah Afridi Bangladesh 2026 Interview | Fast Bowling Identity & Test Series Preview</title>
        <meta name="description" content="Shaheen Shah Afridi speaks ahead of Pakistan's Bangladesh Test series 2026 — on Pakistan's fast bowling identity, Babar Azam's return, and road to World Cup." />
        <meta name="keywords" content="Shaheen Shah Afridi, Pakistan vs Bangladesh 2026, Fast Bowling, Babar Azam, Pakistan Cricket, Test Series 2026" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Shaheen Shah Afridi discusses Pakistan's fast bowling legacy and the plan for the Bangladesh Test tour 2026." />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>

      {/* Hero Header */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067" 
            alt="Cricket Stadium" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-transparent" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-4 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1.5 bg-pak-green text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-pak-green/20">
                Latest Interview
              </span>
              <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white/80 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                Test Series 2026
              </span>
            </div>
            
            <h1 className="text-3xl md:text-6xl font-display font-black leading-[1.1] mb-8 uppercase italic tracking-tighter">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-pak-green/30 p-0.5">
                  <img src={author?.avatarUrl} alt={author?.name} className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-white uppercase tracking-widest">{author?.name}</p>
                  <p className="text-[8px] font-bold text-white/40 uppercase">{author?.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-pak-green" />
                <span className="text-[10px] font-black uppercase tracking-widest">{publishDate}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <main className="lg:col-span-8">
            {/* Share Bar */}
            <div className="flex items-center gap-4 mb-10 py-6 border-y border-white/5">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Share This Story</span>
              <div className="flex gap-2">
                <button onClick={() => handleShare('facebook')} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all group">
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
                <button onClick={() => handleShare('twitter')} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-sky-500 transition-all group">
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
                <button onClick={() => handleShare('copy')} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-pak-green transition-all group">
                  <LinkIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            <article className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:uppercase prose-headings:italic prose-a:text-pak-green hover:prose-a:text-emerald-400">
              <p className="lead text-xl text-ink/80 font-medium leading-relaxed mb-8">
                Before a Test series, a captain's press conference is usually polite, measured, and careful. Safe answers. Diplomatic deflections. Nobody told Shaheen Shah Afridi about that script.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 mb-12">
                <h2 className="text-2xl mb-6">Quote 1: "That Won't Happen" — The Fast Bowling Identity</h2>
                <p>
                  The interviewer asked if Pakistan would consider following the West Indies' approach of bowling 50 overs of spin given Bangladesh's traditionally spin-friendly conditions.
                </p>
                <blockquote className="border-l-4 border-pak-green pl-6 py-2 italic font-display text-2xl text-white my-8">
                  "That won't happen. Pakistan is famous for its fast bowling, and I'll ensure our pacers take wickets, though our spinners will play their part too."
                </blockquote>
                <p>
                  Pakistan's history in fast bowling is unrivalled in the subcontinent — Imran Khan, Wasim Akram, Waqar Younis, Shoaib Akhtar, and now Shaheen himself. The idea that Pakistan would abandon this identity — even in spin-friendly conditions — was something Shaheen clearly found almost offensive.
                </p>
              </div>

              <AdPlaceholder type="banner" className="my-12" />

              <h2 className="text-3xl mt-12 mb-6">"No One Was Dropped" — The Babar Azam Question</h2>
              <p>
                The most urgent question: Why is Babar Azam not in the squad? After his PSL 2026 title-winning season, the question was inevitable.
              </p>
              <blockquote className="border-l-4 border-pak-green pl-6 py-2 italic font-display text-xl text-white my-8">
                "Look, no one was dropped for this series. We just want to give opportunities for our youngsters. They are also our future... We just need to prepare our team for the World Cup. It is an opportunity for the youngsters to show their skills."
              </blockquote>
              <p>
                Shaheen framed it as opportunity creation rather than selection rejection. The emphasis on "World Cup preparation" signals that selectors are using these Bangladesh Tests to assess specific players for specific roles in the 2027 ODI World Cup.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="bg-gradient-to-br from-pak-green/20 to-transparent p-8 rounded-[32px] border border-pak-green/20">
                  <h3 className="text-xl mb-4 font-display font-black text-pak-green uppercase">Leadership Role</h3>
                  <p className="text-sm leading-loose">
                    "My job is to fulfil the role assigned to me whether it is batting or bowling. Doesn't matter if I am injured or unwell. My job is to keep team morale high and perform well."
                  </p>
                </div>
                <div className="bg-gradient-to-br from-red-500/10 to-transparent p-8 rounded-[32px] border border-red-500/10">
                  <h3 className="text-xl mb-4 font-display font-black text-red-500 uppercase">Need for Variation</h3>
                  <p className="text-sm leading-loose">
                    "But we should have more variation in our bowling and we are striving for that. In T20, batsmen find it easier to hit on good wickets."
                  </p>
                </div>
              </div>

              <h2 className="text-3xl mt-12 mb-6 text-pak-green">"We Will Go on the Offence"</h2>
              <p>
                On strategy for the Bangladesh Test series specifically, Shaheen was clear: "Bangladesh is a good team and has played good cricket of late. Against Bangladesh, the plan is to go on the offence from the word go."
              </p>
              <p>
                This suggests Pakistan will not wait for the pitch to deteriorate before attacking. They will target the Bangladesh top order early with pace and set the tone.
              </p>

              <div className="my-16 bg-white/5 border border-white/10 rounded-[40px] p-10">
                <h2 className="text-2xl mb-8">Key Quotes Summary</h2>
                <div className="space-y-6">
                  {[
                    { topic: "Spin strategy", quote: "Pakistan is famous for its fast bowling." },
                    { topic: "Babar Azam", quote: "No one was dropped. We want to give opportunities to youngsters." },
                    { topic: "His own role", quote: "My job is to keep team morale high and perform well." },
                    { topic: "Approach", quote: "The plan is to go on the offence from the word go." }
                  ].map((q, i) => (
                    <div key={i} className="flex gap-6 items-start pb-6 border-b border-white/5 last:border-0 last:pb-0">
                      <div className="w-12 h-12 rounded-2xl bg-pak-green/10 flex-shrink-0 flex items-center justify-center text-pak-green font-black">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-1">{q.topic}</p>
                        <p className="text-lg font-display text-white italic">"{q.quote}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="text-3xl mt-12 mb-6">Conclusion: The Road to May 8, 2026</h2>
              <p>
                The 1st Test begins on May 8, 2026, at Sher-e-Bangla National Stadium, Dhaka. Pakistan's bowling attack — Shaheen, Nahid Rana, Khurram Shahzad, Noman Ali, Sajid Khan — is ready.
              </p>
              <p>
                If Shaheen's pre-series aggression translates to his fast bowlers hitting the deck hard on Day 1 — and if the spin duo of Noman and Sajid can replicate their form — Pakistan are very capable of winning this series 2-0.
              </p>
            </article>

            <AdPlaceholder type="native" className="mt-12" />
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              {/* Author Widget */}
              <div className="bg-card-bg border border-card-border rounded-[32px] p-8">
                <h3 className="text-sm font-black uppercase tracking-widest mb-6">About the Author</h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl border-2 border-pak-green p-1">
                    <img src={author?.avatarUrl} alt={author?.name} className="w-full h-full rounded-xl object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-black text-white uppercase italic">{author?.name}</h4>
                    <p className="text-[10px] font-bold text-pak-green uppercase">{author?.role}</p>
                  </div>
                </div>
                <p className="text-sm text-ink/60 leading-relaxed mb-6">
                  {author?.bio}
                </p>
                <div className="flex gap-2">
                   <button className="flex-1 py-3 bg-white/5 hover:bg-pak-green transition-all rounded-xl text-[10px] font-black uppercase tracking-widest">Follow</button>
                   <button className="flex-1 py-3 bg-white/5 hover:bg-white/10 transition-all rounded-xl text-[10px] font-black uppercase tracking-widest">Articles</button>
                </div>
              </div>

              {/* Related Series */}
              <div className="bg-pak-green rounded-[32px] p-8 text-white">
                <Trophy className="w-10 h-10 mb-6 text-white/40" />
                <h3 className="text-2xl font-display font-black uppercase leading-tight mb-4">Pakistan Tour of Bangladesh 2026</h3>
                <p className="text-sm text-white/70 mb-8 leading-relaxed">
                  Follow the complete Test series with live scores, match dates, and technical previews.
                </p>
                <Link to="/pakistan-vs-bangladesh-2026-schedule" className="group flex items-center justify-between w-full py-4 bg-white/10 border border-white/20 rounded-2xl px-6 hover:bg-white text-[10px] font-black uppercase tracking-widest hover:text-black transition-all">
                  Join Series Center <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Upcoming Matches Sidebar */}
              <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
                 <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm font-black uppercase tracking-widest">Schedule</h3>
                    <Clock className="w-4 h-4 text-white/40" />
                 </div>
                 <div className="space-y-4">
                    <div className="p-4 bg-black/40 rounded-2xl border border-white/5 group hover:border-pak-green transition-all">
                       <p className="text-[8px] font-black text-pak-green uppercase tracking-[2px] mb-2">1st Test • May 08</p>
                       <p className="text-xs font-bold text-white mb-1">PAK vs BAN</p>
                       <p className="text-[10px] text-white/40">Sher-e-Bangla Stadium, Dhaka</p>
                    </div>
                    <div className="p-4 bg-black/40 rounded-2xl border border-white/5 group hover:border-pak-green transition-all opacity-60">
                       <p className="text-[8px] font-black text-white/40 uppercase tracking-[2px] mb-2">2nd Test • May 16</p>
                       <p className="text-xs font-bold text-white mb-1">PAK vs BAN</p>
                       <p className="text-[10px] text-white/40">Zahur Ahmed Stadium, Chittagong</p>
                    </div>
                 </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ShaheenBangladeshInterviewBlog;
