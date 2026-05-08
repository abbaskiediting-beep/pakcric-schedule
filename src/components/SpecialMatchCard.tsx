import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, Zap, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Match } from '../types';

interface SpecialMatchCardProps {
  match: Match;
}

export default function SpecialMatchCard({ match }: SpecialMatchCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full bg-[#0A1A0F] border border-pak-green/30 rounded-[32px] overflow-hidden shadow-2xl group"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pak-green/10 blur-[100px] rounded-full -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 blur-[100px] rounded-full -ml-32 -mb-32" />

      <div className="relative z-10 p-5 sm:p-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="px-3 sm:px-4 py-1.5 bg-red-600 text-white rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[3px] animate-pulse">
              {match.status}
            </div>
            <div className="px-3 sm:px-4 py-1.5 bg-white/5 border border-white/10 text-white/60 rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[3px]">
              {match.format} Series
            </div>
          </div>
          <div className="flex items-center gap-2 text-white/40 text-[8px] sm:text-[10px] uppercase font-bold tracking-widest leading-none">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500" /> WTC Points
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mb-8 sm:mb-12">
          {/* Team A */}
          <div className="flex flex-row md:flex-col items-center gap-4 text-left md:text-center w-full md:w-auto">
            <div className="w-16 h-16 sm:w-24 md:w-32 rounded-2xl md:rounded-[32px] border-2 md:border-4 border-pak-green/20 p-1 bg-black/40 backdrop-blur-md shadow-2xl transition-transform duration-500 shrink-0">
              <img src="https://flagcdn.com/pk.svg" alt="PAK" className="w-full h-full object-cover rounded-xl md:rounded-[24px]" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tighter">Pakistan</h3>
              <p className="text-[8px] sm:text-[10px] font-bold text-pak-green uppercase tracking-[2px] sm:tracking-[3px]">Shaheen's Men</p>
            </div>
          </div>

          {/* VS Divider */}
          <div className="flex flex-row md:flex-col items-center gap-4 md:gap-2 opacity-50">
             <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-pak-green/30 to-transparent hidden md:block" />
             <span className="text-2xl sm:text-4xl font-display font-black text-white/10 underline md:no-underline italic">VS</span>
             <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-red-500/30 to-transparent hidden md:block" />
          </div>

          {/* Team B */}
          <div className="flex flex-row-reverse md:flex-col items-center gap-4 text-right md:text-center w-full md:w-auto">
            <div className="w-16 h-16 sm:w-24 md:w-32 rounded-2xl md:rounded-[32px] border-2 md:border-4 border-red-500/20 p-1 bg-black/40 backdrop-blur-md shadow-2xl transition-transform duration-500 shrink-0">
              <img src={match.flagUrl} alt={match.opponent} className="w-full h-full object-cover rounded-xl md:rounded-[24px]" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tighter">Bangladesh</h3>
              <p className="text-[8px] sm:text-[10px] font-bold text-red-500 uppercase tracking-[2px] sm:tracking-[3px]">The Tigers</p>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 pt-8 sm:pt-10 border-t border-white/5">
          <div className="flex items-center gap-4 group/item">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover/item:bg-pak-green transition-colors">
              <Calendar className="w-6 h-6 text-pak-green group-hover/item:text-white" />
            </div>
            <div>
              <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Match Date</p>
              <p className="text-sm font-bold text-white uppercase tracking-tight">{match.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group/item">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover/item:bg-pak-green transition-colors">
              <Clock className="w-6 h-6 text-pak-green group-hover/item:text-white" />
            </div>
            <div>
              <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Start Time</p>
              <p className="text-sm font-bold text-white uppercase tracking-tight">{match.time}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group/item">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover/item:bg-pak-green transition-colors">
              <MapPin className="w-6 h-6 text-pak-green group-hover/item:text-white" />
            </div>
            <div>
              <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Venue</p>
              <p className="text-sm font-bold text-white uppercase tracking-tight truncate max-w-[150px]">{match.venue}</p>
            </div>
          </div>
        </div>

        {/* Breaking News Sticker */}
        <div className="mb-8 sm:mb-10 bg-red-600/10 border border-red-600/30 p-4 sm:p-5 rounded-2xl flex items-start gap-3 sm:gap-4">
          <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 shrink-0" />
          <div>
            <h4 className="text-[10px] sm:text-xs font-black text-red-500 uppercase tracking-widest mb-1 leading-none">Major Blow for Pakistan</h4>
            <p className="text-[10px] sm:text-xs text-white/60 leading-relaxed uppercase font-bold tracking-tight">
              Babar Azam has been ruled out of the 1st Test in Dhaka due to a left knee injury. Reshuffled batting order analysis is now live.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to={`/match/${match.id}`} className="flex-1 px-8 py-5 bg-pak-green text-white rounded-2xl text-[12px] font-black uppercase tracking-[3px] hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all shadow-xl shadow-pak-green/20 text-center flex items-center justify-center gap-3">
            Match Center <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/news/babar-azam-injured-1st-bangladesh-test-2026" className="flex-1 px-8 py-5 bg-white/5 text-white border border-white/10 rounded-2xl text-[12px] font-black uppercase tracking-[3px] hover:bg-white/10 hover:border-white/30 transition-all text-center">
            Injury Update
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
