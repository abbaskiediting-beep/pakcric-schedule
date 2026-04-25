import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-4">
          Get in <span className="text-white">Touch</span>
        </h1>
        <p className="text-ink/60 font-medium whitespace-pre-line uppercase tracking-[4px] text-[10px]">Official Helpdesk of PakCric Schedule</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact info */}
        <div className="space-y-8">
           <div className="flex gap-6 items-center group">
              <div className="w-12 h-12 rounded-2xl bg-card-bg border border-card-border flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                 <Mail className="w-5 h-5" />
              </div>
              <div>
                 <span className="text-[10px] font-bold text-white uppercase tracking-widest mb-1 block">Email Us</span>
                 <p className="text-sm font-bold">support@pakcrickethub.pk</p>
              </div>
           </div>
           <div className="flex gap-6 items-center group">
              <div className="w-12 h-12 rounded-2xl bg-card-bg border border-card-border flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                 <Phone className="w-5 h-5" />
              </div>
              <div>
                 <span className="text-[10px] font-bold text-white uppercase tracking-widest mb-1 block">Call Us</span>
                 <p className="text-sm font-bold">+92 42 111 222 333</p>
              </div>
           </div>
           <div className="flex gap-6 items-center group">
              <div className="w-12 h-12 rounded-2xl bg-card-bg border border-card-border flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                 <MapPin className="w-5 h-5" />
              </div>
              <div>
                 <span className="text-[10px] font-bold text-white uppercase tracking-widest mb-1 block">Location</span>
                 <p className="text-sm font-bold">Gaddafi Stadium, Lahore</p>
              </div>
           </div>
        </div>

        {/* Simple form stub */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-card-bg border border-card-border rounded-[32px] p-8 shadow-2xl">
           <div className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full bg-black/20 border border-white/5 rounded-2xl px-6 py-4 text-xs font-bold focus:border-white outline-none transition-all placeholder:opacity-30" />
              <input type="email" placeholder="Email Address" className="w-full bg-black/20 border border-white/5 rounded-2xl px-6 py-4 text-xs font-bold focus:border-white outline-none transition-all placeholder:opacity-30" />
              <textarea placeholder="Message" rows={4} className="w-full bg-black/20 border border-white/5 rounded-2xl px-6 py-4 text-xs font-bold focus:border-white outline-none transition-all placeholder:opacity-30 resize-none"></textarea>
              <button className="w-full py-4 bg-white text-black rounded-2xl text-[10px] font-bold uppercase tracking-[2px] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                 Submit Request <Send className="w-4 h-4" />
              </button>
           </div>
        </motion.div>
      </div>
    </div>
  );
}
