import { motion } from 'motion/react';

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-4">
          Terms of <span className="text-white">Service</span>
        </h1>
        <p className="text-ink/60 font-medium">Last updated: April 18, 2026</p>
      </motion.div>

      <div className="bg-card-bg border border-card-border rounded-[32px] p-8 space-y-8">
        <section>
           <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-3">1. Acceptance of Terms</h3>
           <p className="text-xs text-ink/80 leading-relaxed font-medium">
             By accessing PakCric Schedule, you agree to be bound by these terms of service.
           </p>
        </section>
        <section>
           <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-3">2. Intellectual Property</h3>
           <p className="text-xs text-ink/80 leading-relaxed font-medium">
             All trademarks, logos and copyrights related to teams and players belong to their respective owners. This site is for informational purposes only.
           </p>
        </section>
        <section>
           <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-3">3. Disclaimer</h3>
           <p className="text-xs text-ink/80 leading-relaxed font-medium">
             Schedule information is subject to change at the discretion of the PCB or respective cricket boards. We are not responsible for any inaccuracies.
           </p>
        </section>
      </div>
    </div>
  );
}
