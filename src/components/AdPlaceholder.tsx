import React from 'react';

interface AdPlaceholderProps {
  id?: string;
  type?: 'banner' | 'leaderboard' | 'native' | 'in-article' | 'anchor';
  className?: string;
  label?: string;
}

export default function AdPlaceholder({ id, type = 'banner', className = '', label = 'Advertisement' }: AdPlaceholderProps) {
  const getDimensions = () => {
    switch (type) {
      case 'leaderboard': return 'h-[90px] md:h-[120px]';
      case 'native': return 'min-h-[250px]';
      case 'in-article': return 'min-h-[200px]';
      case 'anchor': return 'h-[60px] md:h-[90px]';
      default: return 'h-[100px] md:h-[150px]';
    }
  };

  if (type === 'anchor') {
    return (
      <div className={`fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-t border-white/10 flex items-center justify-center p-2 shadow-2xl md:hidden ${className}`}>
        <div className="w-full max-w-md h-full bg-white/5 border border-dashed border-white/20 flex flex-col items-center justify-center rounded-lg overflow-hidden relative">
          <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest absolute top-1 left-2">Ad</span>
          <div className="text-[10px] font-bold text-pak-green uppercase tracking-wider">Mobile Anchor Ad</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden flex flex-col gap-2 ${className}`}>
      <div className="flex items-center justify-between px-1">
        <span className="text-[9px] font-bold text-ink/30 uppercase tracking-[2px]">{label}</span>
      </div>
      <div className={`w-full ${getDimensions()} bg-white/5 border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center transition-all hover:bg-white/10 hover:border-white/20 group`}>
        <div className="absolute opacity-10 group-hover:opacity-20 transition-opacity">
          <div className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center font-bold">Ad</div>
        </div>
        <div className="relative z-10 text-[10px] font-medium text-white/40 uppercase tracking-[4px]">
          {type === 'leaderboard' ? '728 x 90 Responsive' : type.replace('-', ' ')}
        </div>
      </div>
    </div>
  );
}
