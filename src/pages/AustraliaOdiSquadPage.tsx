import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  ChevronRight, 
  MapPin, 
  Calendar,
  Shield,
  Star,
  Activity,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AUSTRALIA_ODI_SQUAD_PAK_2026 } from '../squadData';
import AdPlaceholder from '../components/AdPlaceholder';

export default function AustraliaOdiSquadPage() {
  const squad = AUSTRALIA_ODI_SQUAD_PAK_2026;

  return (
    <div className="min-h-screen bg-bg selection:bg-pak-green selection:text-white pb-20">
      <Helmet>
        <title>Australia ODI Squad for Pakistan Series 2026 | Full List</title>
        <meta name="description" content="View the official Australia ODI squad for the 2026 Pakistan series. Complete player list, roles and squad analysis." />
      </Helmet>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-6 pt-6 md:pt-10">
        <nav className="flex items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-widest text-neutral-500">
          <Link to="/" className="hover:text-pak-green transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/squads" className="hover:text-pak-green transition-colors">Squads</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white">Australia ODI Squad 2026</span>
        </nav>
      </div>

      {/* Header Section */}
      <section className="container mx-auto px-4 md:px-6 mt-8 md:mt-16">
        <div className="relative p-8 md:p-16 bg-white/5 border border-white/5 rounded-[40px] overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Shield className="w-48 h-48 md:w-64 md:h-64" />
          </div>
          <div className="absolute bottom-0 left-0 p-12 opacity-5 pointer-events-none">
            <Zap className="w-32 h-32 md:w-48 md:h-48" />
          </div>

          <div className="relative z-10 max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest self-start">
                <Star className="w-3 h-3 fill-current" /> Official Announcement
              </div>
              
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-display font-black uppercase tracking-tighter leading-none text-white">
                Australia <span className="text-pak-green italic">ODI Squad</span> <br />
                Tour of Pakistan 2026
              </h1>

              <div className="flex flex-wrap gap-4 md:gap-8 mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-neutral-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[9px] text-neutral-500 font-black uppercase tracking-widest leading-none mb-1">Venue</p>
                    <p className="text-xs md:text-sm font-bold text-white uppercase italic">Pakistan</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-neutral-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[9px] text-neutral-500 font-black uppercase tracking-widest leading-none mb-1">Series Date</p>
                    <p className="text-xs md:text-sm font-bold text-white uppercase italic">May – June 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-neutral-400">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[9px] text-neutral-500 font-black uppercase tracking-widest leading-none mb-1">Format</p>
                    <p className="text-xs md:text-sm font-bold text-white uppercase italic">One Day International</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Squad List Section */}
      <section className="container mx-auto px-4 md:px-6 mt-12 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Squad Table */}
          <div className="lg:col-span-8">
            <div className="bg-card-bg border border-card-border rounded-[40px] overflow-hidden shadow-2xl">
              <div className="p-8 md:p-12 border-b border-card-border bg-white/[0.02]">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-pak-green/10 flex items-center justify-center text-pak-green">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-tight italic">The 15-Member Squad</h2>
                      <p className="text-[10px] md:text-xs font-black text-neutral-500 uppercase tracking-widest mt-1">Confirmed for the ODI Series</p>
                    </div>
                  </div>
                  <div className="hidden sm:block px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-white uppercase tracking-widest">
                    AUS Team
                  </div>
                </div>
              </div>

              <div className="p-2 md:p-8">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="px-4 md:px-6 py-6 text-[10px] font-black uppercase tracking-widest text-neutral-500">Player Profile</th>
                      <th className="px-4 md:px-6 py-6 text-[10px] font-black uppercase tracking-widest text-neutral-500 hidden sm:table-cell">Role</th>
                      <th className="px-4 md:px-6 py-6 text-[10px] font-black uppercase tracking-widest text-neutral-500 text-right">Team</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-display">
                    {squad.players.map((player, idx) => (
                      <tr key={idx} className="group hover:bg-white/[0.02] transition-colors">
                        <td className="px-4 md:px-6 py-6">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 flex items-center justify-center border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                              <span className="text-sm md:text-base font-black text-yellow-500">{player.name.charAt(0)}</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm md:text-lg font-black text-white uppercase italic group-hover:text-pak-green transition-colors leading-tight">{player.name}</span>
                              <span className="text-[10px] md:hidden font-black text-neutral-500 uppercase tracking-widest mt-1">{player.description}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 md:px-6 py-6 hidden sm:table-cell">
                          <span className="text-xs md:text-sm font-bold text-white/50 italic tracking-tight uppercase group-hover:text-white/80 transition-colors">{player.description}</span>
                        </td>
                        <td className="px-4 md:px-6 py-6 text-right">
                          <span className="text-[10px] md:text-xs font-black text-yellow-500 uppercase tracking-widest bg-yellow-500/5 px-3 py-1.5 rounded-lg border border-yellow-500/10">Australia</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-8 md:p-12 bg-white/[0.02] border-t border-card-border">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <p className="text-[11px] leading-relaxed text-neutral-500 font-medium max-w-lg text-center md:text-left">
                    *This squad was announced on May 11, 2026. Any changes due to injuries or IPL commitments will be updated in real-time.
                  </p>
                  <Link 
                    to="/schedule"
                    className="flex items-center gap-3 px-8 py-4 bg-pak-green text-white rounded-2xl text-[10px] font-black uppercase tracking-[2px] hover:shadow-[0_0_30px_rgba(1,65,30,0.4)] transition-all shrink-0"
                  >
                    View Series Schedule <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              
              {/* Quick Info */}
              <div className="p-8 bg-card-bg border border-card-border rounded-[40px] shadow-xl">
                <h3 className="text-[10px] font-black uppercase tracking-[3px] text-neutral-500 mb-8">Series Context</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green shrink-0">
                      <Star className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-white uppercase tracking-tight mb-1">Captain</h4>
                      <p className="text-sm font-bold text-white/60 italic uppercase tracking-tight">Mitchell Marsh</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green shrink-0">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-white uppercase tracking-tight mb-1">Coach</h4>
                      <p className="text-sm font-bold text-white/60 italic uppercase tracking-tight">Andrew McDonald</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-white uppercase tracking-tight mb-1">Average Age</h4>
                      <p className="text-sm font-bold text-white/60 italic uppercase tracking-tight">27.4 Years</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* IPL Conflict Info */}
              <div className="p-8 bg-rose-600/5 border border-rose-600/10 rounded-[40px] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Zap className="w-16 h-16 text-rose-500" />
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-[3px] text-rose-500 mb-6 relative z-10">IPL 2026 Conflict</h3>
                <p className="text-xs font-bold text-white/70 leading-relaxed italic mb-8 relative z-10">
                  Australia's top stars including Pat Cummins and Mitchell Starc are unavailable for the ODI series due to ongoing IPL 2026 playoff commitments.
                </p>
                <div className="space-y-3 relative z-10">
                  {['Pat Cummins', 'Mitchell Starc', 'Travis Head', 'Josh Hazlewood'].map((name, i) => (
                    <div key={i} className="flex items-center gap-3 text-[10px] font-black text-white uppercase tracking-widest bg-white/5 p-3 rounded-xl border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      {name}
                    </div>
                  ))}
                </div>
              </div>

              <AdPlaceholder type="native" />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 mt-20">
        <AdPlaceholder type="leaderboard" />
      </div>
    </div>
  );
}
