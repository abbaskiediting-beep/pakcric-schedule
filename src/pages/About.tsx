import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-4">
          About <span className="text-white">PakCric Schedule</span>
        </h1>
        <p className="text-ink/60 font-medium">Your definitive source for Pakistan National Team schedule, squads and rankings.</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 mb-16">
        <div className="bg-card-bg border border-card-border rounded-[40px] p-10 md:p-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-white mb-6">
            The Ultimate <span className="text-pak-green">Pakistan Cricket Resource</span>
          </h2>
          <div className="space-y-6 text-ink/60 font-medium leading-relaxed text-lg">
            <p>
              <strong>PakCric Schedule</strong> was born out of a simple need: to provide passionate fans with a fast, reliable, and distraction-free way to stay connected with the <Link to="/" className="text-pak-green hover:underline">Pakistan National Cricket Team</Link>. In a digital world filled with cluttered sports websites that are hard to navigate on mobile devices, we wanted to build something different—something that puts the fans first.
            </p>
            <p>
              Our platform specializes in providing the most accurate <Link to="/schedule" className="text-pak-green hover:underline">Pakistan cricket schedule 2026</Link>. We track every international tour, every home series, and all major ICC and regional tournaments like the <Link to="/schedule" className="text-pak-green hover:underline">Asia Cup</Link> and <strong>Champions Trophy</strong>. Whether it is a crucial <Link to="/icc-test-ranking-2026" className="text-pak-green hover:underline">Test match</Link> in the World Test Championship or a thrilling <Link to="/icc-t20-ranking-2026" className="text-pak-green hover:underline">T20 encounter</Link>, our mission is to ensure that you have exactly what you need: match dates, precise timings in <Link to="/pakistan-next-tour-details" className="text-pak-green hover:underline">Pakistan Standard Time (PKT)</Link>, and verified stadium venues at your fingertips.
            </p>
            <p>
              But we don’t stop at schedules. We believe that to truly follow the game, you need to know the statistics and rankings that define it. That’s why we offer real-time updates on <Link to="/rankings" className="text-pak-green hover:underline">ICC Team Rankings</Link> across all formats (Test, ODI, and T20) and keep a detailed record of the <Link to="/squads" className="text-pak-green hover:underline">Pakistan Cricket Team Squad</Link> for every series. We provide updates on <Link to="/players-stats" className="text-pak-green hover:underline">player performances</Link>, team selections, and <Link to="/news" className="text-pak-green hover:underline">tactical news</Link> that helps you understand the strategies behind the matches.
            </p>
            <p>
              Our team consists of lifelong cricket enthusiasts who understand the emotional connection fans have with the team. Every piece of information on this site is verified before being published, often cross-referencing with the <a href="https://www.pcb.com.pk/" target="_blank" rel="noopener noreferrer" className="text-pak-green hover:underline">Main PCB portal</a>. We pride ourselves on the accuracy of our <strong>match timings World Cup 2026</strong> and our ability to provide the fastest updates on <Link to="/schedule" className="text-pak-green hover:underline">series fixtures</Link>. For those looking for historical archives, we recommend the <a href="https://www.espncricinfo.com/team/pakistan-7" target="_blank" rel="noopener noreferrer" className="text-pak-green hover:underline">Pakistan profile on ESPNcricinfo</a>. Thank you for choosing us as your definitive source for Pakistan cricket. Together, we cheer for the Green Shirts!
            </p>
          </div>
        </div>
      </div>

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
