import React from 'react';
import { Activity, ArrowRight } from 'lucide-react';

const RESOURCES = [
  { name: 'ESPNcricinfo', url: 'https://www.espncricinfo.com' },
  { name: 'Cricbuzz', url: 'https://www.cricbuzz.com' },
  { name: 'PCB Official', url: 'https://www.pcb.com.pk' },
  { name: 'ICC Official', url: 'https://www.icc-cricket.com' },
  { name: 'Geo Super', url: 'https://www.geosuper.tv' }
];

export default function ExternalResourcesSection() {
  return (
    <section className="bg-card-bg border border-card-border rounded-[40px] p-10 md:p-16 relative overflow-hidden mb-12">
      <div className="absolute top-0 right-0 w-64 h-64 bg-pak-green/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-white mb-8 text-center md:text-left">
          Weekly <span className="text-pak-green">Cricket Recommendations</span>
        </h2>
        <p className="text-ink/60 font-medium leading-relaxed mb-12 max-w-2xl text-center md:text-left">
          Stay fully informed by visiting our recommended cricket partners and official boards for live scorecards and detailed player performance historical data.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {RESOURCES.map((resource, i) => (
            <a 
              key={i}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white/5 border border-white/5 rounded-3xl flex flex-col items-center justify-center text-center group hover:border-pak-green/40 hover:bg-pak-green/5 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-pak-green/20 flex items-center justify-center text-pak-green mb-3 group-hover:scale-110 transition-transform">
                <Activity className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white group-hover:text-pak-green">
                {resource.name}
              </span>
              <ArrowRight className="w-3 h-3 text-white/20 mt-2 group-hover:text-pak-green group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
