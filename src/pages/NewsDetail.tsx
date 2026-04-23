import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Newspaper, Calendar, User, ArrowLeft, Share2, Tag } from 'lucide-react';

const ARTICLES: Record<string, any> = {
  'babar-azam-3rd-century-psl-history': {
    title: "Long Live the King: Babar Azam is Still the Undisputed Face of the PSL",
    date: "April 20, 2026",
    tag: "Match Report",
    author: "Zalmi Media",
    content: `
The lights of the National Bank Stadium in Karachi have seen many heroes, but on the night of April 19, 2026, they witnessed a coronation.

As Babar Azam sprinted for that final run on the last ball of the innings, the roar from the crowd wasn't just for a century—it was a collective acknowledgment of greatness. In a format where "power-hitting" is the buzzword, the Peshawar Zalmi captain proved once again that timing, placement, and class are still the most lethal weapons in cricket.

# The Masterclass: 100* of Pure Efficiency
In Match 29 of PSL 11, Babar didn’t just score runs; he conducted an orchestra. Facing a Quetta Gladiators attack that had no answers, Babar smashed 100 off 52 balls*.

But here is the stat that should make every cricket fan rub their eyes: Babar Azam played only one dot ball in his entire innings.

Think about that. In a high-pressure T20 game, he found a way to score off 51 out of 52 deliveries. It was a clinic in strike rotation and boundary-finding. With 6 fours and 4 sixes, he didn’t need to look like he was slogging; he simply looked like he was playing a different game than everyone else.

# Rewriting the Record Books
This wasn’t just "another" hundred. This was a statement. With this knock, Babar achieved three massive milestones:

Triple Century Club: He now shares the record for the most centuries in PSL history (3), joining the likes of Kamran Akmal and Rilee Rossouw.

The Kohli Parallel: By sharing a massive 135-run stand with Kusal Mendis, Babar equaled Virat Kohli’s world record for the most century-plus partnerships in T20 history (47).

Personal Best: This was his fastest-ever PSL century, showing that even at the peak of his career, "The King" is still evolving.

# Why This Matters for Peshawar Zalmi
Heading into the playoffs, Zalmi looks dangerous. By leading his team to a mammoth 255/3 (the 3rd highest total in PSL history), Babar has sent a chilling message to the other teams: The captain is in form, and the trophy is in sight.

Critics often talk about strike rates and "modern" T20 approaches. Babar Azam answered them not with words, but with a 192.31 strike rate and a bat that seemed to have a magnet for the boundary rope.

# The Verdict
For the fans who draped themselves in yellow and black, this wasn't just about the points table. It was about seeing their idol reclaim his throne. Whether you support Zalmi or not, you have to admit—the PSL just feels more special when Babar Azam is at his best.

The King isn't going anywhere. He’s just getting started.
    `
  },
  'pakistan-test-squad-player-profiles-2026': {
    title: "Pakistan Test Squad for Bangladesh Tour 2026: Player Profiles",
    date: "April 20, 2026",
    tag: "Squad Deep Dive",
    author: "PCB Editorial Team",
    content: `
The Pakistan Cricket Board has announced a formidable 16-member squad for the upcoming two-match Test series against Bangladesh, scheduled to begin in Dhaka on May 8, 2026. This squad represents a deliberate fusion of stability and future-forward experimentation.

# The Uncapped Prodigies
These four players have been selected based on extraordinary domestic performances and represent the future of Pakistan’s Test cricket.

Azan Awais (Batter): The 21-year-old left-hander is the most talked-about inclusion. Over the last two domestic seasons, he has been a run-machine, amassing 2,673 First-Class runs at an average of 48.60, including 10 centuries. He famously scored a double-ton (203*) against Peshawar and is expected to bring technical stability to the top order.

Abdullah Fazal (Opener): A specialist left-handed opener from Karachi. Fazal has a solid First-Class record with 1,828 runs at an average of 41.55, featuring 4 hundreds. He is known for his ability to play long innings, with a high score of 182.

Amad Butt (All-rounder): After years of domestic toil, the veteran all-rounder finally gets his Test call-up. He has a massive domestic profile with 205 First-Class wickets and over 2,100 runs. He provides a crucial seam-bowling all-rounder option that Pakistan has lacked in red-ball cricket.

Muhammad Ghazi Ghori (Wicketkeeper-Batter): The 23-year-old has been fast-tracked after a stellar 2025-26 season where he was the second-highest run-getter in the President's Trophy (531 runs at 48.27). He made his ODI debut in March 2026 against Bangladesh, scoring 29.

# The Batting Core
Shan Masood (Captain): Under his leadership, Shan has improved his individual output, averaging 36 with 953 runs as leader. He will be the tactical mastermind behind the "Saifi-led" coaching setup.

Babar Azam: The centerpiece of Pakistan’s batting. Babar has 4,366 Test runs at an average of 42.39. He has a strong record against Bangladesh, averaging 43.71 with one century against them.

Mohammad Rizwan (WK): The premier wicketkeeper-batter, Rizwan has 2,399 Test runs at nearly a 40 average, including a high score of 171*.

Saud Shakeel: The "Immovable Object" of the middle order. Shakeel boasts an impressive Test average of 47.92 across 21 matches, with his 208* in Sri Lanka highlighting his subcontinental mastery.

Salman Ali Agha: A versatile all-rounder with 1,487 Test runs (Avg 39.13) and 20 wickets. He is vital for maintaining balance, especially with his off-spin on turning tracks.

Imam-ul-Haq: The experienced opener has 1,687 Test runs and three centuries. He is expected to anchor the innings in the challenging conditions of Dhaka and Sylhet.

# The Bowling Spearheads
Shaheen Shah Afridi: The leader of the pace attack with 121 Test wickets at 27.92. He remains Pakistan’s primary weapon with the new ball.

Hasan Ali: Returning to the squad after a period of absence, Hasan has 80 Test wickets. His ability to extract reverse swing will be a "X-factor" in Bangladesh.

Mohammad Abbas: The master of discipline. Abbas has exactly 100 Test wickets at a remarkable average of 23.18. His accuracy is tailored for the slow, low pitches expected in this series.

Khurram Shahzad: An emerging pacer who made a mark with 6/90 against Bangladesh in 2024. He has 20 wickets in just 6 Tests.

# The Spin Specialists
Noman Ali: A veteran left-arm spinner with 97 wickets at 24.52. He is often the go-to man on deteriorating tracks.

Sajid Khan: The off-spinner who once dismantled Bangladesh with 8/42. He has 65 Test wickets and is a proven match-winner in these conditions.

# Tactical Insight: The Spin Duel
Would you like a detailed statistical comparison between the two lead spinners, Sajid Khan and Noman Ali, for this series? Both have incredible records in the subcontinent, but their roles in Dhaka vs Sylhet might differ drastically based on pitch conditions.
    `
  },
  'sarfaraz-ahmed-coach': {
    title: "Sarfaraz Ahmed: The Invincible Leader Now Shaping Pakistan’s Future",
    date: "April 19, 2026",
    tag: "Feature",
    author: "Haider Ali",
    content: `
In the history of Pakistan cricket, few names evoke as much emotion and respect as Sarfaraz Ahmed. From the streets of Karachi to the balcony of Lord’s, Sarfaraz has transitioned through every possible role—prodigy, survivor, champion, and leader. Now, as he takes on the mantle of Head Coach for the national Test side, there is a sense of "poetic justice."

Here is why Sarfaraz Ahmed is the perfect choice to guide Pakistan into its next era.

# 1. The Player: A Wicket-Keeping General
Sarfaraz wasn't just a wicket-keeper; he was a busy, gritty middle-order batsman who understood how to manipulate the strike and frustrate bowlers.

The Fighter: He made a career out of coming back. Every time he was dropped, he went back to the domestic circuit, performed, and forced his way back on merit.

The Stats: With 226 international matches and nearly 6,000 runs, he remains one of Pakistan's most successful wicket-keeper batsmen. His ability to counter spin and maintain a high strike rate in the middle overs was ahead of its time.

# 2. The Captain: The Only Winner of Two ICC Titles
To understand Sarfaraz’s greatness as a leader, you only need to look at his trophy cabinet. He is the only Pakistani captain to have won two ICC trophies.

Under-19 Glory (2006): He led a young squad to a famous victory over India in the U19 World Cup final.

Champions Trophy (2017): Against all odds, he led the lowest-ranked Pakistan team to crush India by 180 runs in the final.

The T20 Record: Under his leadership, Pakistan reached the No. 1 ranking and won a world-record 11 consecutive T20I series.

# 3. The Coach: Mentoring the Next Generation
Sarfaraz’s transition to coaching isn't an overnight decision; he has been preparing for this "off-field" mentorship role for years.

Early Success: Before his appointment as head coach, he mentored the Pakistan Under-19 side to the 2025 ACC U19 Asia Cup title.

Pakistan Shaheens: He served as mentor and manager for the Shaheens during their tour of England, proving he can work with young talent at the highest level.

New Role: Appointed as Head Coach of the Men's Test Team in April 2026, he will lead the side during the upcoming tour of Bangladesh.

# Why He is the Best Choice for Pakistan
Sarfaraz brings a "Street Smart" DNA that Pakistan has missed. He isn't just a strategist; he is a man who knows every inch of the Pakistan domestic system. He understands the struggle of the fringe player and the ego of the superstar.

By teaming up with his former comrades Asad Shafiq (Batting Coach) and Umar Gul (Bowling Coach), he has formed a coaching unit that knows exactly what it takes to win in Test cricket. His appointment ensures a home-grown leadership that understands the local culture and language, making him a bridge between the board and the players.

# Conclusion
Sarfaraz Ahmed has already given Pakistan some of its greatest memories as a player and captain. As he starts his coaching tenure with the Bangladesh series on May 8, 2026, the fans are hopeful that his "Midas touch" will bring the same success to the dugout that it brought to the field.

Saifi Bhai is back in the driver's seat, and Pakistan cricket couldn't be in better hands.
    `
  },
  'pakistan-vs-bangladesh-test-series-2026': {
    title: "Road to Redemption: Pakistan’s Strategic Overhaul for the 2026 Bangladesh Test Series",
    date: "April 19, 2026",
    tag: "Series Preview",
    author: "PCB Media Cell",
    content: `
As of April 19, 2026, the Pakistan Cricket Board (PCB) has officially set the stage for a critical two-Test tour of Bangladesh this May. Positioned 5th in the ICC World Test Championship standings, Pakistan is viewing this series as a mandatory "redemption" tour following recent white-ball struggles in the region.

# The "Saifi" Era Begins: A Homegrown Coaching Revolution
The most significant headline ahead of the tour is the appointment of former captain Sarfaraz Ahmed as the Head Coach of the Test side. After retiring from international cricket just last month, Sarfaraz has been fast-tracked into leadership alongside his former teammates:
Asad Shafiq: Batting Coach
Umar Gul: Bowling Coach

This "Class of 2017" coaching unit is designed to bring a "street-smart" subcontinental mindset back to the dressing room, focusing on aggressive spin tactics and middle-order stability.

# The 16-Member Squad: New Blood and Returning Giants
Captain Shan Masood continues at the helm, leading a squad that balances veteran presence with four high-performing uncapped players.

# The Newcomers (The "Fresh Four")
Azan Awais: The prolific 21-year-old left-hander who topped the Quaid-e-Azam Trophy charts with four centuries.
Abdullah Fazal: A technically sound left-handed opener rewarded for consistent domestic volume.
Amad Butt: A seasoned bowling all-rounder with over a decade of domestic experience, finally earning his maiden call-up.
Muhammad Ghazi Ghori: A proactive wicketkeeper-batter who recently made his ODI debut.

# The Core Unit
The squad sees the return of Babar Azam, who remains the team's batting centerpiece, alongside experienced hands like Mohammad Rizwan, Shaheen Shah Afridi, and the spin duo of Noman Ali and Sajid Khan. Notably, senior pacer Mohammad Abbas returns to the fold, bringing his expertise in maintaining disciplined lines on slow pitches.

# Series Schedule & WTC Stakes
The series is a vital part of the ICC World Test Championship 2025-27 cycle. Pakistan currently holds a 50% points tally, and a 2-0 sweep is essential to climbing back into the top three.

1st Test: May 8 – 12 | Sher-e-Bangla National Stadium, Dhaka
2nd Test: May 16 – 20 | Sylhet International Cricket Stadium

# Preparation Roadmap
The squad will assemble in Karachi for a training camp on April 27, concluding on May 1 before flying to Dhaka on May 2. Players currently finishing their PSL 11 campaigns will join the camp immediately following their team's final commitments.

Pakistan cricket has arrived in Bangladesh with a squad that respects the past but embraces the future. The fans are hopeful that this strategic overhaul will lead to a successful "redemption" tour.
    `
  }
};

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = ARTICLES[id || ''] || ARTICLES['pakistan-vs-bangladesh-test-series-2026'];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>{`${article.title} | PakCric Hub News`}</title>
        <meta name="description" content={article.content.split('\n')[0].substring(0, 160).trim() || `Read the latest about ${article.title} on PakCric Hub.`} />
        <meta name="keywords" content={`Pakistan cricket news, ${article.title.split(' ').slice(0, 3).join(', ')}, cricket updates`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://pakcric-schedule.online/news/${id}`} />
        <meta property="og:title" content={`${article.title} | PakCric Hub News`} />
        <meta property="og:description" content={article.content.split('\n')[0].substring(0, 160).trim()} />
        <meta property="og:image" content="https://pakcric-schedule.online/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://pakcric-schedule.online/news/${id}`} />
        <meta property="twitter:title" content={`${article.title} | PakCric Hub News`} />
        <meta property="twitter:description" content={article.content.split('\n')[0].substring(0, 160).trim()} />
        <meta property="twitter:image" content="https://pakcric-schedule.online/logo.png" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "${article.title.replace(/"/g, '\\"')}",
              "description": "${article.content.split('\\n')[0].substring(0, 160).trim().replace(/"/g, '\\"')}",
              "author": {
                "@type": "Person",
                "name": "${article.author}"
              },
              "publisher": {
                "@type": "Organization",
                "name": "PakCric Hub",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://pakcric-schedule.online/logo.png"
                }
              },
              "datePublished": "2026-04-20",
              "dateModified": "2026-04-23"
            }
          `}
        </script>
      </Helmet>
      <button 
        onClick={() => navigate('/news')}
        className="inline-flex items-center gap-2 text-white font-normal uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform"
      >
        <ArrowLeft className="w-4 h-4 text-white" /> Back to News
      </button>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card-bg border border-card-border rounded-[40px] overflow-hidden shadow-2xl"
      >
        <div className="h-64 bg-gradient-to-br from-pak-green to-[#00220e] relative flex items-center justify-center overflow-hidden">
          <Newspaper className="w-32 h-32 text-white/5 absolute -right-8 -bottom-8 rotate-12" />
          <div className="text-center px-6 relative z-10">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-[10px] font-normal uppercase tracking-[3px] mb-4 border border-white/10">
              {article.tag}
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter text-white leading-none">
              {article.title}
            </h1>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-6 mb-10 pb-6 border-b border-white/5">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-white" />
              <span className="text-[10px] font-normal uppercase tracking-widest text-neutral-400">{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-white" />
              <span className="text-[10px] font-normal uppercase tracking-widest text-neutral-400">{article.author}</span>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="prose prose-invert prose-neutral max-w-none">
             {article.content.split('\n\n').map((paragraph: string, idx: number) => {
               if (paragraph.startsWith('#')) {
                 return (
                   <h2 
                     key={idx} 
                     className="text-2xl font-display font-bold text-white tracking-tight mt-12 mb-6"
                   >
                     {paragraph.replace('#', '').trim()}
                   </h2>
                 );
               }

               // Internal Linking Helper
               const linkKeywords = (text: string) => {
                 const keywords: Record<string, string> = {
                   'schedule': '/schedule',
                   'squad': '/squads',
                   'rankings': '/rankings',
                   'icc': '/rankings',
                   'wtc': '/rankings',
                   'world test championship': '/rankings',
                   'news': '/news',
                   'blogs': '/blogs'
                 };

                 let parts: (string | JSX.Element)[] = [text];
                 
                 Object.entries(keywords).forEach(([keyword, path]) => {
                   const newParts: (string | JSX.Element)[] = [];
                   parts.forEach(part => {
                     if (typeof part === 'string') {
                       const regex = new RegExp(`(${keyword})`, 'gi');
                       const splitParts = part.split(regex);
                       splitParts.forEach((sp, i) => {
                         if (sp.toLowerCase() === keyword) {
                           newParts.push(
                             <Link key={`${keyword}-${i}`} to={path} className="text-pak-green hover:underline">
                               {sp}
                             </Link>
                           );
                         } else if (sp !== '') {
                           newParts.push(sp);
                         }
                       });
                     } else {
                       newParts.push(part);
                     }
                   });
                   parts = newParts;
                 });

                 return parts;
               };

               return (
                 <p key={idx} className="text-neutral-300 leading-relaxed mb-6 text-lg font-sans font-normal">
                   {linkKeywords(paragraph)}
                 </p>
               );
             })}
          </div>

          <div className="mt-16 pt-8 border-t border-white/5">
               <h4 className="text-sm font-normal uppercase tracking-widest text-white mb-6">What do you think?</h4>
             <div className="bg-white/5 rounded-3xl p-8 border border-white/5">
               <p className="text-sm text-neutral-400 italic mb-6 font-normal">Should Azan Awais debut in the first Test, or should Pakistan stick to the experienced opening pair? Drop your Playing XI in the comments below!</p>
               <div className="flex gap-4">
                 <input 
                   type="text" 
                   placeholder="ADD A COMMENT..."
                   className="flex-1 bg-black/40 border border-white/10 rounded-xl px-6 py-3 text-[10px] font-normal uppercase tracking-widest focus:outline-none focus:border-white transition-colors"
                 />
                 <button className="px-6 py-3 bg-white text-black rounded-xl text-[10px] font-normal uppercase tracking-widest hover:scale-105 transition-all">
                   Post
                 </button>
               </div>
             </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
