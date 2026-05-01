import { Calendar, Clock, ArrowLeft, Share2, Trophy, Star, History as HistoryIcon, User, MessageSquare, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import FanClubSection from '../components/FanClubSection';
import InternalLinkSection from '../components/InternalLinkSection';
import CommonQuestions from '../components/CommonQuestions';

export default function DarrenSammyFinalInvitationBlog() {
  const blogTitle = "Darren Sammy Pakistan Aa Rahe Hain! Javed Afridi Ne PSL 11 Final Ke Liye Officially Bulaya — Fans Ki Dua Qabool Ho Gayi";
  const publishDate = "May 1, 2026";
  const authorId = "omar-farooq";

  const faqData = [
    {
      q: "Have Darren Sammy officially accepted the invitation?",
      a: "As of May 1, we are awaiting an official response from Darren Sammy, but fans are highly optimistic given his deep-rooted connection with the franchise and the country."
    },
    {
      q: "What is Darren Sammy's current role in cricket?",
      a: "He is currently the head coach of the West Indies national team (White ball) and has previously served as the head coach of Peshawar Zalmi in the PSL."
    },
    {
      q: "When is the PSL 11 Final?",
      a: "The PSL 11 Final is scheduled for May 3, 2026, at the Gaddafi Stadium in Lahore."
    }
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20 font-sans">
      <Helmet>
        <title>Darren Sammy PSL 11 Final Invitation | Pakistan Hero | PakCric Schedule</title>
        <meta name="description" content="Peshawar Zalmi owner Javed Afridi has officially invited Darren Sammy to Pakistan for the PSL 11 final after fans' requests. Read the full story here." />
      </Helmet>

      {/* Hero Header */}
      <div className="relative h-[600px] md:h-[750px] overflow-hidden">
        <div className="absolute inset-0">
          {/* Use a background illustration or color gradient */}
          <div className="w-full h-full bg-gradient-to-br from-[#0a110a] via-pak-green/20 to-[#000000]" />
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-yellow-500/5 blur-[100px]" />
          <div className="absolute bottom-[-15%] left-[5%] w-[400px] h-[400px] rounded-full bg-pak-green/5 blur-[80px]" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-16 md:pb-24 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="px-5 py-2 bg-yellow-500/10 text-yellow-500 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] backdrop-blur-md border border-yellow-500/20 flex items-center gap-2 w-fit">
              <Star className="w-3 h-3 fill-current" />
              Special Invitation
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-display font-black mb-8 leading-[1.1] tracking-tight"
          >
            {blogTitle}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-12 font-medium leading-relaxed"
          >
            Peshawar Zalmi owner Javed Afridi has officially invited the legendary Darren Sammy to witness the PSL 11 Final in Lahore.
          </motion.p>

          <div className="flex flex-wrap items-center justify-between gap-8 pt-8 border-t border-white/10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/10 overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Omar" alt="Omar Farooq" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-white uppercase tracking-widest opacity-50">Written by</span>
                <span className="text-[14px] font-bold text-white uppercase tracking-widest">Omar Farooq</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-10 text-white/60 text-[12px] font-bold uppercase tracking-widest"
            >
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-white" />
                {publishDate}
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-white" />
                12 Min Read
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-20 relative z-10">
        <div className="prose prose-invert max-w-none">
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 font-medium">
            3 May 2026. Gaddafi Stadium Lahore. PSL 11 ka Grand Final. Peshawar Zalmi — 5 saal baad — Final mein wapas. Aur agar Javed Afridi ki dawat qabool ho gayi — toh Gaddafi Stadium ki ek seat par woh insaan bhi baith sakta hai jisne kabhi isi team ka peela jersey pehna tha.
          </p>

          <div className="my-12 p-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-[33px]">
             <div className="bg-[#0a0a0a] p-8 md:p-12 rounded-[32px] border border-white/5 relative overflow-hidden">
                <blockquote className="relative z-10">
                  <p className="text-2xl md:text-3xl font-display font-black text-white italic leading-tight mb-6">
                    "Brother, we are officially inviting you to witness the final match of Zalmi (fans request) @darensammy88"
                  </p>
                  <cite className="text-sm font-bold uppercase tracking-[4px] text-yellow-500">— Javed Afridi (Instagram Story)</cite>
                </blockquote>
                <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl" />
             </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-black mb-8 mt-16 leading-tight">
            Darren Sammy Aur Peshawar Zalmi: Ek Mukammal Daastaan
          </h2>
          <p className="text-lg text-white/70 mb-8 font-medium">
            Darren Sammy aur Peshawar Zalmi ka rishta sirf cricket ka rishta nahi hai. Yeh ek aisi kahani hai jisme jazba hai, mohabbat hai, qurbani hai, aur Pakistan ke liye ek ajnabi mulk se aaye insaan ki sachchi dosti hai.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] hover:bg-white/10 transition-all">
                <Trophy className="w-12 h-12 text-yellow-500 mb-6" />
                <h3 className="text-2xl font-black mb-4 uppercase">The Champion Captain</h3>
                <p className="text-white/60 font-medium leading-relaxed">
                  Led Peshawar Zalmi to their first-ever PSL title in 2017 in front of a packed Gaddafi Stadium, Lahore.
                </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] hover:bg-white/10 transition-all">
                <Heart className="w-12 h-12 text-red-500 mb-6" />
                <h3 className="text-2xl font-black mb-4 uppercase">Pakistan's Hero</h3>
                <p className="text-white/60 font-medium leading-relaxed">
                  One of the first players to agree to play in Pakistan when others were hesitant, paving the way for international cricket's return.
                </p>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-black mb-8 mt-16 leading-tight">
            PSL Career & Achievements
          </h2>
          <p className="text-lg text-white/70 mb-8 font-medium">
            Sammy ne Peshawar Zalmi ke liye 49 PSL matches khele — 691 runs banaye 146.39 ki strike rate se. Lekin asali story numbers mein nahi hai — asali story un innings mein hai jo Pakistan ke liye kheli gayi.
          </p>

          <div className="bg-card-bg border border-card-border rounded-[40px] overflow-hidden mb-16">
            <div className="p-8 bg-white/5 border-b border-white/10">
              <h4 className="text-xs font-black uppercase tracking-[4px] text-white/40">Sammy Career Stats (PSL)</h4>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <p className="text-3xl font-display font-black text-white">49</p>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-2">Matches</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-display font-black text-white">691</p>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-2">Runs</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-display font-black text-white">146.4</p>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-2">Strike Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-display font-black text-white">39</p>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-2">Captained</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-black mb-8 mt-16 leading-tight">
            Nishan-e-Pakistan & Citizenship
          </h2>
          <p className="text-lg text-white/70 mb-8 font-medium">
            Pakistan ne Sammy ko unki khidmaat ke liye <strong>Nishan-e-Pakistan</strong> se nawaza gaya — Pakistan ka sab se aala civilian tamagha. Woh wahid foreign cricketer hain jinhein yeh kherat-e-aqeedat pesh ki gayi hai.
          </p>

          <div className="my-20 p-12 bg-gradient-to-br from-[#062c1a] to-black rounded-[50px] border border-white/5 shadow-2xl relative overflow-hidden">
             <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                <div className="bg-white/10 p-8 rounded-full">
                   <Medal className="w-16 h-16 text-yellow-500" />
                </div>
                <div className="text-center md:text-left">
                   <h3 className="text-3xl font-display font-black text-white mb-4">Honorary Citizenship</h3>
                   <p className="text-lg text-white/60 mb-0 leading-relaxed font-medium">
                      Darren Sammy holds honorary Pakistani citizenship, a testament to his unbreakable bond with the people of Pakistan and Peshawar.
                   </p>
                </div>
             </div>
             <div className="absolute top-0 right-0 w-full h-full bg-pak-green/5 blur-3xl pointer-events-none" />
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-black mb-8 mt-16 leading-tight">
            The Legacy Continues in PSL 2026
          </h2>
          <p className="text-lg text-white/70 mb-12 font-medium">
            Babar Azam ki do centuries ne Peshawar Zalmi ko 5 saal baad Final mein pohonchaaya hai. Lekin is success ki bunyad woh legacy hai jo Darren Sammy ne banayi thi — "Never Give Up" attitude.
          </p>

          <div className="flex justify-between items-center py-12 border-t border-white/10">
            <Link to="/blogs" className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-widest text-pak-green hover:underline">
              <ArrowLeft className="w-5 h-5" />
              Back to Blogs
            </Link>
            <div className="flex items-center gap-4">
              <button className="p-4 bg-card-bg border border-card-border rounded-full hover:bg-pak-green transition-all group">
                <Share2 className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-24 space-y-24">
          <AuthorSection authorId={authorId} />
          <FanClubSection />
          <CommonQuestions faqs={faqData} />
          <InternalLinkSection title="Recommended Reads" />
        </div>
      </div>
    </div>
  );
}

function Medal({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 2v10" />
      <path d="m18 10-6 2-6-2" />
      <path d="M7 22h10" />
      <path d="M5 12h14l-2 10H7Z" />
      <circle cx="12" cy="7" r="3" />
    </svg>
  );
}
