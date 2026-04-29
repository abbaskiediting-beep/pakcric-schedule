import { motion } from 'motion/react';

interface FAQ {
  q: string;
  a: string;
}

const DEFAULT_FAQS = [
  {
    q: "Pakistan ka next match kab hai?",
    a: "Pakistan ka next match upcoming international schedule ke mutabiq jaldi hi hoga. Aap hamari website par latest match dates aur timing check kar sakte hain."
  },
  {
    q: "Pakistan cricket schedule 2026 kahan check karein?",
    a: "Pakistan cricket schedule 2026 aap hamari website par dekh sakte hain jahan tamam upcoming matches, series aur timings update ki jati hain."
  },
  {
    q: "Pakistan vs Bangladesh 2026 series kab start hogi?",
    a: "Pakistan vs Bangladesh 2026 series ki exact dates schedule page par available hoti hain. Aap wahan full details check kar sakte hain."
  },
  {
    q: "Pakistan matches ki timing kis time zone me hoti hai?",
    a: "Pakistan matches ki timing usually Pakistan Standard Time (PST) me show ki jati hai, taake local users asaani se match follow kar saken."
  },
  {
    q: "Kya Pakistan cricket schedule PDF download available hai?",
    a: "Ji haan, Pakistan cricket schedule ka PDF version bhi available hota hai jise aap download karke offline dekh sakte hain."
  },
  {
    q: "Pakistan team ka squad 2026 me kya hai?",
    a: "Pakistan team ka latest squad har series ke mutabiq update hota hai. Aap hamari website ke players section me updated squad dekh sakte hain."
  }
];

interface CommonQuestionsProps {
  faqs?: FAQ[];
}

export default function CommonQuestions({ faqs = DEFAULT_FAQS }: CommonQuestionsProps) {
  return (
    <section className="mt-24 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4">
          Common <span className="text-pak-green">Questions</span>
        </h2>
        <p className="text-[10px] font-bold text-ink/40 uppercase tracking-[3px]">Expert Answers to Fan Queries</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-card-bg border border-card-border rounded-3xl p-8 hover:border-white/20 transition-all group"
          >
            <h4 className="text-sm font-bold text-white uppercase tracking-tight mb-4 group-hover:text-pak-green transition-colors">
              {faq.q}
            </h4>
            <p className="text-xs text-ink/60 font-medium leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
