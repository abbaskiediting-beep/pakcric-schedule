import React from 'react';
import { motion } from 'motion/react';
import { Activity, Star, Info } from 'lucide-react';

interface WinProbabilityMeterProps {
  pakistanWinProb: number;
  australiaWinProb: number;
  opponentName?: string;
  opponentFlagUrl?: string;
  analysisTitle?: string;
  analysisNotes?: string[];
}

export default function WinProbabilityMeter({
  pakistanWinProb,
  australiaWinProb,
  opponentName = "Australia",
  opponentFlagUrl = "https://flagcdn.com/au.svg",
  analysisTitle = "Match Prediction Narrative",
  analysisNotes = [
    "Tonight's decider is a genuine 50-50, but Pakistan has the home advantage and a passionate Gaddafi Stadium crowd.",
    "The pitch is expected to be batting-friendly early, but play as a spin-assisting surface later.",
    "Winning the toss and batting first is highly likely to be the decisive factor."
  ]
}: WinProbabilityMeterProps) {
  // Normalize probs just in case they don't add up to 100
  const total = pakistanWinProb + australiaWinProb;
  const pakPct = Math.round((pakistanWinProb / total) * 100);
  const oppPct = 100 - pakPct;

  // We will create a premium segmented meter with 20 distinct blocks
  const totalSegments = 20;
  const pakSegmentsCount = Math.round((pakPct / 100) * totalSegments);

  return (
    <div className="bg-card-bg border border-card-border rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 p-6 opacity-[0.02] pointer-events-none">
        <Activity className="w-24 h-24" />
      </div>

      <div className="relative z-10 space-y-6">
        {/* Header Title */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Activity className="w-4 h-4 text-pak-green animate-pulse" />
            <h3 className="text-sm sm:text-base font-display font-bold uppercase tracking-tight text-white">
              Win Probability Meter
            </h3>
          </div>
          <span className="px-2.5 py-0.5 bg-pak-green/10 text-pak-green border border-pak-green/20 text-[9px] font-black rounded uppercase tracking-widest leading-none">
            {analysisTitle}
          </span>
        </div>

        {/* The Teams header labels & percentages */}
        <div className="grid grid-cols-2 gap-4">
          {/* Pakistan Side */}
          <div className="flex items-center gap-2.5 space-y-0.5">
            <img 
              src="https://flagcdn.com/pk.svg" 
              alt="Pakistan flag" 
              className="w-6 h-4 object-cover rounded shadow stroke-1 border border-white/10"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-[10px] font-black tracking-widest uppercase text-neutral-400">Pakistan</span>
              <span className="text-lg sm:text-2xl font-display font-black text-pak-green leading-none">{pakPct}%</span>
            </div>
          </div>

          {/* Opponent Side */}
          <div className="flex items-center justify-end gap-2.5 text-right space-y-0.5">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black tracking-widest uppercase text-neutral-400">{opponentName}</span>
              <span className="text-lg sm:text-2xl font-display font-black text-amber-500 leading-none">{oppPct}%</span>
            </div>
            <img 
              src={opponentFlagUrl} 
              alt={`${opponentName} flag`} 
              className="w-6 h-4 object-cover rounded shadow stroke-1 border border-white/10"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Segmented Progress Bar */}
        <div className="space-y-2">
          <div className="flex gap-1 h-3.5 sm:h-5 w-full bg-neutral-900/60 p-1 rounded-xl border border-white/5 shadow-inner">
            {Array.from({ length: totalSegments }).map((_, idx) => {
              const isPak = idx < pakSegmentsCount;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scaleY: 0.3 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ delay: idx * 0.025, ease: "easeOut" }}
                  className={`flex-1 rounded-sm sm:rounded h-full transition-all duration-500 ${
                    isPak 
                      ? "bg-gradient-to-b from-emerald-500 to-pak-green shadow-[0_0_8px_rgba(16,185,129,0.2)]" 
                      : "bg-gradient-to-b from-amber-400 to-yellow-500 shadow-[0_0_8px_rgba(245,158,11,0.2)]"
                  }`}
                  style={{
                    transformOrigin: 'bottom',
                  }}
                />
              );
            })}
          </div>
          
          <div className="flex justify-between text-[9px] font-mono text-neutral-500">
            <span>HOME ADVANTAGE SECURED</span>
            <span>PROBABILITY PROJECTION</span>
          </div>
        </div>

        {/* Factors list details */}
        {analysisNotes && analysisNotes.length > 0 && (
          <div className="border border-white/5 bg-white/[0.01] rounded-2xl p-4 space-y-3">
            <h4 className="text-[9px] font-black uppercase text-neutral-400 tracking-widest flex items-center gap-1.5 leading-none">
              <Info className="w-3.5 h-3.5 text-pak-green" /> Key Predictive Grounds
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {analysisNotes.map((note, idx) => (
                <div key={idx} className="flex gap-2 text-[11px] text-ink/75 leading-relaxed font-semibold bg-white/[0.01] border border-white/[0.02] p-2.5 rounded-xl">
                  <Star className="w-3.5 h-3.5 text-pak-green shrink-0 mt-0.5" />
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
