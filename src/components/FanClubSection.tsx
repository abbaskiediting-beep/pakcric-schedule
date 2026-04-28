import { motion } from 'motion/react';
import { Trophy, ArrowRight } from 'lucide-react';

export default function FanClubSection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="md:col-span-2 bg-white rounded-[40px] p-8 flex flex-col items-center justify-center text-black overflow-hidden relative group shadow-2xl shadow-white/20"
    >
      <div className="relative z-10 text-center">
        <h3 className="text-3xl font-display font-bold uppercase tracking-tighter mb-4 leading-none">The Fan Club</h3>
        <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest mb-6">Join 2 million fans in our growing community.</p>
        <a 
          href="https://www.pcb.com.pk/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full py-4 bg-black text-white rounded-2xl text-[10px] font-bold uppercase tracking-[3px] hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-2"
        >
           Join <ArrowRight className="w-4 h-4" />
        </a>
      </div>
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-1000 pointer-events-none">
         <Trophy className="w-32 h-32" />
      </div>
    </motion.section>
  );
}
