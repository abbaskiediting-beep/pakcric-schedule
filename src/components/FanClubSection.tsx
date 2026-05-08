import { motion } from 'motion/react';
import { Trophy, ArrowRight } from 'lucide-react';

export default function FanClubSection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="md:col-span-2 self-start bg-white rounded-2xl p-4 md:p-5 flex flex-col items-center justify-center text-black overflow-hidden relative group shadow-xl shadow-white/10"
    >
      <div className="relative z-10 text-center w-full">
        <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tighter mb-1.5 leading-none">The Fan Club</h3>
        <p className="text-[8px] font-bold opacity-60 uppercase tracking-widest mb-3">Join 2M+ fans globally.</p>
        <a 
          href="https://www.pcb.com.pk/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full py-2.5 bg-black text-white rounded-lg text-[8px] font-bold uppercase tracking-[2px] hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-1.5"
        >
           Join Now <ArrowRight className="w-3 h-3" />
        </a>
      </div>
      <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:scale-125 transition-transform duration-1000 pointer-events-none">
         <Trophy className="w-24 h-24" />
      </div>
    </motion.section>
  );
}
