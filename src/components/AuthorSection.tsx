import { Link } from 'react-router-dom';
import { AUTHORS } from '../data/blogData';
import { ArrowRight, Twitter, Linkedin } from 'lucide-react';

interface AuthorSectionProps {
  authorId: string;
}

export default function AuthorSection({ authorId }: AuthorSectionProps) {
  const author = AUTHORS.find(a => a.id === authorId);

  if (!author) return null;

  return (
    <div className="mt-20 p-8 md:p-12 border border-card-border bg-card-bg rounded-[40px] shadow-2xl relative overflow-hidden group">
      <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
        <div className="shrink-0">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-pak-green/20 border border-pak-green/20 overflow-hidden group-hover:rotate-3 transition-transform duration-500">
            <img src={author.avatarUrl} alt={author.name} className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="flex-grow text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-tight">{author.name}</h3>
              <p className="text-[10px] font-bold text-pak-green uppercase tracking-[3px]">{author.role}</p>
            </div>
            <div className="flex justify-center md:justify-start gap-2">
              {author.socials?.twitter && (
                 <a href={author.socials.twitter} className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center hover:bg-pak-green hover:text-white transition-all">
                    <Twitter className="w-3 h-3" />
                 </a>
              )}
              {author.socials?.linkedin && (
                 <a href={author.socials.linkedin} className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center hover:bg-pak-green hover:text-white transition-all">
                    <Linkedin className="w-3 h-3" />
                 </a>
              )}
            </div>
          </div>
          
          <p className="text-sm text-ink/60 font-medium leading-relaxed italic mb-6">
            "{author.bio}"
          </p>
          
          <Link 
            to={`/author/${authorId}`}
            className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[4px] text-white/40 hover:text-pak-green transition-colors"
          >
            Explore All articles by {author.name.split(' ')[0]} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-pak-green/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-pak-green/10 transition-colors duration-500" />
    </div>
  );
}
