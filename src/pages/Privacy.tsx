import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-4">
          Privacy <span className="text-white">Policy</span>
        </h1>
        <p className="text-ink/60 font-medium">Last updated: April 18, 2026</p>
      </motion.div>

      <div className="bg-card-bg border border-card-border rounded-[32px] p-8 space-y-8">
        <section>
           <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-3">1. Data Collection</h3>
           <p className="text-xs text-ink/80 leading-relaxed font-medium">
             We do not collect any personal information from our visitors. We only track non-personally identifiable analytics to improve your experience on our website.
           </p>
        </section>
        <section>
           <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-3">2. Cookies</h3>
           <p className="text-xs text-ink/80 leading-relaxed font-medium">
             We use essential cookies to maintain your theme preferences (Light/Dark mode).
           </p>
        </section>
        <section>
           <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-3">3. External Links</h3>
           <p className="text-xs text-ink/80 leading-relaxed font-medium">
             Our site contains links to verified PCB social media and ticketing partners. We are not responsible for the privacy practices of external sites.
           </p>
        </section>
      </div>
    </div>
  );
}
