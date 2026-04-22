import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-4">
          About <span className="text-white">Pakistan Cricket Hub</span>
        </h1>
        <p className="text-ink/60 font-medium">Your definitive source for Pakistan National Team schedule, squads and rankings.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-card-bg border border-card-border rounded-[32px] p-8">
           <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Our Mission</h3>
           <p className="text-xs text-ink/80 leading-relaxed font-medium">
             We aim to provide cricket fans with a premium, focused experience to follow Pakistan Cricket. From match schedules to in-depth player rankings, our goal is to be the ultimate companion for every Shaheen fan.
           </p>
        </div>
        <div className="bg-pak-green rounded-[32px] p-8 text-white flex flex-col justify-end min-h-[200px] relative overflow-hidden group">
           <div className="relative z-10">
              <h3 className="text-xl font-display font-bold uppercase tracking-tight mb-2">Passion for the Game</h3>
              <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest">Built for the fans, by the fans.</p>
           </div>
           <div className="absolute top-0 right-0 p-4 text-[100px] font-bold italic opacity-5 rotate-12 group-hover:rotate-0 transition-transform">PCB</div>
        </div>
      </div>
    </div>
  );
}
