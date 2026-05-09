import { motion } from 'motion/react';
import { Mail, Globe, Send, HelpCircle, Users, AlertTriangle, Link as LinkIcon } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-8 md:py-12 px-4 md:px-6">
      <Helmet>
        <title>Contact Us – PakCric Schedule</title>
        <meta name="description" content="Get in touch with PakCric Schedule for queries, feedback, or collaborations related to Pakistan cricket updates and schedule." />
      </Helmet>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 md:mb-16">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-4 text-white">
          Contact Us
        </h1>
        <p className="text-ink/60 font-black uppercase tracking-[3px] md:tracking-[4px] text-[8.5px] md:text-[10px] mb-6 md:mb-8">Primary Helpdesk of PakCric Schedule</p>
        
        <div className="bg-card-bg border border-card-border rounded-2xl md:rounded-3xl p-5 md:p-8 text-center max-w-2xl mx-auto">
          <p className="text-base md:text-lg font-medium leading-relaxed text-ink/80">
            We'd love to hear from you.
          </p>
          <p className="mt-3 md:mt-4 text-xs md:text-sm text-ink/60 leading-relaxed font-medium">
            Whether you have a question about the Pakistan cricket schedule, want to report an issue, or are interested in collaboration, feel free to reach out.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20">
        {/* Section: Get in Touch */}
        <div className="space-y-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold uppercase text-white flex items-center gap-3">
              <Mail className="w-6 h-6 text-pak-green" /> Get in Touch
            </h2>
            <p className="text-sm text-ink/60 font-medium">
              If you need any information or support, you can contact us through the details below.
            </p>
          </div>

          <div className="space-y-4">
            <a href="mailto:support@pakcric-schedule.online" className="flex gap-6 items-center group bg-card-bg border border-card-border p-6 rounded-2xl hover:border-pak-green transition-all">
              <div className="w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center group-hover:bg-pak-green group-hover:text-white transition-all text-pak-green">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1 block">Email</span>
                <p className="text-sm font-bold text-white group-hover:text-pak-green transition-colors">support@pakcric-schedule.online</p>
              </div>
            </a>

            <a href="https://pakcric-schedule.online" className="flex gap-6 items-center group bg-card-bg border border-card-border p-6 rounded-2xl hover:border-pak-green transition-all">
              <div className="w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center group-hover:bg-pak-green group-hover:text-white transition-all text-pak-green">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1 block">Website</span>
                <p className="text-sm font-bold text-white group-hover:text-pak-green transition-colors">pakcric-schedule.online</p>
              </div>
            </a>
          </div>
          
          <div className="p-4 bg-pak-green/10 border border-pak-green/20 rounded-xl">
             <p className="text-xs font-bold text-pak-green text-center italic tracking-wider">
               👉 We usually respond within 24–48 hours.
             </p>
          </div>
        </div>

        {/* Section: Contact Form */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-card-bg border border-card-border rounded-[32px] md:rounded-[40px] p-6 md:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Send className="w-24 md:w-32 h-24 md:h-32 text-pak-green" />
          </div>
          <h2 className="text-xl md:text-2xl font-display font-bold uppercase text-white mb-4 md:mb-6 relative">Send Us a Message</h2>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for your message! We will get back to you soon.');
              (e.target as HTMLFormElement).reset();
            }}
            className="space-y-3 md:space-y-4 relative"
          >
             <div className="space-y-1">
               <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest ml-1 text-white/30">Full Name</label>
               <input required type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/5 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 text-[11px] md:text-xs font-black focus:border-pak-green outline-none transition-all placeholder:opacity-20 text-white" />
             </div>
             <div className="space-y-1">
               <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest ml-1 text-white/30">Email Address</label>
               <input required type="email" placeholder="john@example.com" className="w-full bg-black/40 border border-white/5 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 text-[11px] md:text-xs font-black focus:border-pak-green outline-none transition-all placeholder:opacity-20 text-white" />
             </div>
             <div className="space-y-1">
               <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest ml-1 text-white/30">Subject</label>
               <input required type="text" placeholder="Inquiry about schedule" className="w-full bg-black/40 border border-white/5 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 text-[11px] md:text-xs font-black focus:border-pak-green outline-none transition-all placeholder:opacity-20 text-white" />
             </div>
             <div className="space-y-1">
               <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest ml-1 text-white/30">Your Message</label>
               <textarea required placeholder="How can we help you?" rows={3} className="w-full bg-black/40 border border-white/5 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 text-[11px] md:text-xs font-black focus:border-pak-green outline-none transition-all placeholder:opacity-20 resize-none text-white"></textarea>
             </div>
             <button type="submit" className="w-full py-3.5 md:py-4 bg-pak-green text-white rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[3px] md:tracking-[4px] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-pak-green/20 mt-2">
                Submit Request <Send className="w-3.5 h-3.5 md:w-4 md:h-4" />
             </button>
             <p className="text-[9px] text-ink/40 text-center italic mt-3 md:mt-4">
               👉 Please provide clear details for better assistance.
             </p>
          </form>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 border-t border-card-border pt-12 md:pt-20">
        {/* Section: Why Contact Us */}
        <div className="space-y-5 md:space-y-6">
          <h2 className="text-xl md:text-2xl font-display font-bold uppercase text-white flex items-center gap-3">
            <HelpCircle className="w-5 h-5 md:w-6 md:h-6 text-pak-green" /> Why Reach Out?
          </h2>
          <p className="text-ink/60 text-[13px] md:text-sm font-medium leading-relaxed mb-4">
            We value every message and use your feedback to improve the overall experience.
          </p>
          <ul className="space-y-3 md:space-y-4">
            {[ 
              "Questions about match schedules",
              "Reporting incorrect match data",
              "Feedback or feature suggestions",
              "Partnership or collaboration inquiries"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-xs md:text-sm font-medium text-ink/80">
                <div className="w-1.5 h-1.5 bg-pak-green rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Section: Collaboration */}
        <div className="space-y-6">
          <h2 className="text-2xl font-display font-bold uppercase text-white flex items-center gap-3">
            <Users className="w-6 h-6 text-pak-green" /> Collaborations
          </h2>
          <p className="text-ink/60 text-sm font-medium leading-relaxed">
            If you are a blogger, website owner, or brand interested in working with us, feel free to contact us. We are open to:
          </p>
          <div className="flex flex-wrap gap-2">
            {["Guest posts", "Content collaborations", "Promotions"].map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-ink/60">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xs font-bold text-pak-green italic pt-2">
            👉 Send us your proposal via email with full details.
          </p>
        </div>
      </div>

      {/* Section: Important Note */}
      <div className="mt-20 bg-orange-500/5 border border-orange-500/10 rounded-3xl p-8">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-8 h-8 text-orange-500" />
          </div>
          <div>
            <h2 className="text-xl font-display font-bold uppercase text-white mb-2">Important Note</h2>
            <p className="text-sm font-medium leading-relaxed text-ink/60">
              We do our best to keep all information accurate and up to date. However, if you notice any errors in match schedules or details, please inform us so we can fix them quickly.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 md:mt-20 pt-12 md:pt-20 border-t border-card-border text-center">
        <h2 className="text-2xl md:text-3xl font-display font-bold uppercase text-white mb-6 md:mb-8">Stay Connected</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Link to="/" className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-card-bg border border-card-border flex items-center justify-center group-hover:bg-pak-green group-hover:text-white transition-all text-pak-green active:scale-95">
              <LinkIcon className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-[9px] font-black uppercase tracking-[2px] text-ink/40 group-hover:text-white transition-colors">Homepage</span>
          </Link>
          <Link to="/schedule" className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-card-bg border border-card-border flex items-center justify-center group-hover:bg-pak-green group-hover:text-white transition-all text-pak-green active:scale-95">
              <LinkIcon className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-[9px] font-black uppercase tracking-[2px] text-ink/40 group-hover:text-white transition-colors">Schedule</span>
          </Link>
          <Link to="/players-stats" className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-card-bg border border-card-border flex items-center justify-center group-hover:bg-pak-green group-hover:text-white transition-all text-pak-green active:scale-95">
              <LinkIcon className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-[9px] font-black uppercase tracking-[2px] text-ink/40 group-hover:text-white transition-colors">Stats</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

