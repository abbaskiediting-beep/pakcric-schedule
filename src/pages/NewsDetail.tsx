import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Newspaper, Calendar, User, ArrowLeft, Share2, Tag } from 'lucide-react';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';
import { LinkText } from '../components/LinkText';
import ShareButton from '../components/ShareButton';
import SaveForOfflineButton from '../components/SaveForOfflineButton';

const ARTICLES: Record<string, any> = {
  'pakistan-vs-australia-2nd-odi-lahore-preview-june-2-2026': {
    title: "Pakistan vs Australia 2nd ODI — Lahore Preview, Pitch Report & Match Prediction",
    metaTitle: "Pakistan vs Australia 2nd ODI Lahore Preview June 2 2026",
    metaDescription: "Pakistan vs Australia 2nd ODI at Gaddafi Stadium Lahore on June 2 2026. Pakistan lead 1-0. Pitch report, predicted XI, key players and match prediction inside.",
    date: "May 31, 2026",
    tag: "Series Preview",
    author: "PCB Editorial Team & ESPNcricinfo",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop",
    content: `Pakistan won the 1st ODI at Rawalpindi by five wickets with 45 balls to spare, chasing down Australia's target of 201 comfortably to lead the three-match series 1-0.

## The Story So Far — Pakistan's Dominant 1st ODI Win

Debutant Arafat Minhas took 5/32 to bowl Australia out for just 200, while Babar Azam (69) and Ghazi Ghori (65) shared a match-winning 127-run partnership to seal a dominant win. Pakistan were simply better in every department — batting, bowling, and fielding. Australia were caught off guard by a dry, turning Rawalpindi surface and a spinner they had never faced before.

The 2nd ODI in Lahore now offers Australia a chance to level the series — and Pakistan an opportunity to seal it with one match remaining. Everything is at stake at the Gaddafi Stadium.

## The Venue — Gaddafi Stadium Lahore

The final two matches of Australia's three-match ODI tour are both being played in Lahore at Gaddafi Stadium on June 2 and June 4.

Gaddafi Stadium is Pakistan's most iconic cricket venue — a ground that has produced some of the most memorable matches in Pakistan cricket history. Unlike Rawalpindi's flat, dry pitch, Lahore can offer more pace and bounce. The outfield is fast. The boundaries are slightly shorter than Rawalpindi, making it a better batting ground. Crowds at the Gaddafi Stadium are among the most passionate in world cricket — and they will be out in full force for this evening match.

The Lahore surface in ODI cricket has historically been a good batting pitch — but with the right pace and some spin in the dry conditions, Pakistan have the tools to exploit it.

## Australia's Problems — What Must Change

Australia were rattled by spin in the 1st ODI. No Australia batter scored more than 36 in the T20I series against Pakistan earlier — and their ODI performance was similarly disappointing against the turning ball. Their T20I series in Lahore ended in a 3-0 whitewash before this ODI series, leaving questions about their preparation and form.

Australia come into the 2nd ODI with several issues to address:

• **Batting collapse against spin**: Eight of their ten wickets in the 1st ODI fell to spinners. On a Lahore surface that can also offer turn, they face the same threat again unless their batters develop a better plan against Arafat Minhas and Abrar Ahmed.

• **Matthew Short and Renshaw must convert**: Matthew Renshaw hit a career-best 61 and Matthew Short scored 55 in the 1st ODI — both got starts but neither could convert into a match-winning score. Australia need at least one of their top-order batters to score a big hundred in Lahore if they are to post a competitive total.

• **Adam Zampa injury concern**: Zampa suffered groin tightness during the T20I series — his availability and fitness for the ODI series is a concern for Australia's bowling attack. Without a fully fit Zampa, Australia's spin options are limited, which could be decisive on a turning Lahore surface.

## Pakistan's Strengths — Why They Start as Favourites

• **The Arafat Minhas factor**: Can he do it again? Australia will have studied his bowling overnight — they will have a plan for his variations, his pace changes, and his arm ball. But Minhas showed in Rawalpindi that he has the skill, temperament, and intelligence to outfox international batters. A second five-wicket haul seems unlikely, but 3-4 wickets on a Lahore surface that also turns is very achievable.

• **Babar Azam in form**: After his 69 in the 1st ODI, Babar has momentum. Lahore is his home ground — he has scored some of his finest ODI innings at the Gaddafi Stadium. If he gets in, a century is very much on the cards.

• **Pakistan's spin depth**: With Arafat Minhas, Abrar Ahmed, Shadab Khan, and Salman Agha all available, Pakistan have four quality spinners for a surface that is expected to turn. Australia have not looked comfortable against any of them.

• **Home crowd advantage**: The Gaddafi Stadium crowd will make Lahore feel like the loudest cricket ground in the world tonight. For Pakistan's batters, that backing can be genuinely transformative.

## Pakistan Predicted Playing XI — 2nd ODI

Based on the 1st ODI performance and expected Lahore conditions:

| No. | Player | Role |
|---|---|---|
| 1 | Babar Azam (c) | Opener |
| 2 | Sahibzada Farhan | Opener |
| 3 | Maaz Sadaqat | No. 3 |
| 4 | Ghazi Ghori (wk) | No. 4 |
| 5 | Salman Agha | All-rounder |
| 6 | Shadab Khan | All-rounder |
| 7 | Arafat Minhas | Spinner |
| 8 | Abrar Ahmed | Leg-spinner |
| 9 | Shaheen Afridi | Pacer |
| 10 | Haris Rauf | Pacer |
| 11 | Mohammad Hasnain | Pacer |

Possible changes: Pakistan may bring in a second pacer if Lahore shows more pace in the surface. Shadab Khan's place may also be under pressure if he goes wicketless again.

## Australia Predicted Playing XI — 2nd ODI

| No. | Player | Role |
|---|---|---|
| 1 | Matthew Short | Opener |
| 2 | Matthew Renshaw | Opener |
| 3 | Marnus Labuschagne | No. 3 |
| 4 | Steve Smith | No. 4 |
| 5 | Josh Inglis | No. 5 |
| 6 | Cameron Green | All-rounder |
| 7 | Alex Carey (wk) | No. 7 |
| 8 | Pat Cummins (c) | Pacer |
| 9 | Mitchell Starc | Pacer |
| 10 | Nathan Ellis | Pacer |
| 11 | Adam Zampa | Leg-spinner (fitness doubt) |

Possible changes: Australia may promote a transition batter or alter order to give themselves more security against spin. If Zampa is unfit, Sean Abbott or Lance Morris could come in.

## Head-to-Head — Pakistan vs Australia ODIs in Pakistan

Pakistan have historically dominated Australia in home ODI series — they won 2-1 in 2022 and 2-1 in the away series in 2024. At Gaddafi Stadium specifically, Pakistan have won 4 of the last 5 ODIs played there against major nations. The crowd, the conditions, and the momentum all favour the hosts tonight.

## Key Battles to Watch

• **Babar Azam vs Nathan Ellis**: Ellis dismissed Babar for 69 in the 1st ODI — breaking a match-winning partnership at the crucial moment. Babar will be desperate to go past that mark and score a century at his home ground tonight. Ellis will back himself to get Babar again. This battle could define the match.

• **Arafat Minhas vs Marnus Labuschagne**: Minhas dismissed Labuschagne for a golden duck in the 1st ODI. Labuschagne — one of Australia's most determined batters — will have spent two days analysing that dismissal. Will Minhas get him again, or will Labuschagne have the last laugh in Lahore?

• **Shaheen Afridi with the new ball**: Shaheen was wicketless in Rawalpindi — unusual for Pakistan's best pace bowler. At Lahore, with some morning dew and a harder surface, Shaheen will be desperate to play his part. If he picks up 2-3 wickets at the top, Pakistan could bowl Australia out for even less than 200.

## Match Prediction

Pakistan are strong favourites for the 2nd ODI at Gaddafi Stadium. They have home conditions, a bowling attack perfectly suited to Pakistani pitches, a batting lineup in form, and the momentum of a comprehensive first-match win. Australia are a capable side — Renshaw, Short, and Smith can bat, and Starc and Cummins can swing it — but they have looked completely out of sorts in Pakistan conditions across both T20Is and the 1st ODI.

**Prediction: Pakistan win the 2nd ODI and seal the series 2-0.**

## What's at Stake

**For Pakistan**: a series win would be a massive confidence boost ahead of the Champions Trophy defence and the upcoming WTC matches. A 2-0 lead going into the 3rd ODI would also give Pakistan the chance to experiment with combinations for future tournaments.

**For Australia**: a defeat would confirm a miserable Pakistan tour — having already lost the T20I series 3-0 to Pakistan, losing the ODI series would mean they leave Pakistan without winning a single series. That is simply not acceptable for a team with World Cup ambitions.

## Day's Best Performances Summary (1st ODI)

| Player | Performance | Team |
|---|---|---|
| Arafat Minhas ⭐ | 5/32 off 10 overs — debut | Pakistan |
| Babar Azam | 69 off 94b — 4x4, 1x6 | Pakistan |
| Ghazi Ghori | 65 off 92b — 8x4 | Pakistan |
| Matthew Short | 55 runs | Australia |
| Nathan Ellis | 2 wickets | Australia |

Live Score & Updates: For live ball-by-ball score, full scorecard, and match updates from the Pakistan vs Australia 2nd ODI at Gaddafi Stadium Lahore, visit pakcric-schedule.online`
  },
  'arafat-minhas-5-32-odi-debut-vs-australia-pakistan-2026': {
    title: "Arafat Minhas — Pakistan's New Spin Sensation Makes History on ODI Debut",
    metaTitle: "Arafat Minhas 5/32 ODI Debut vs Australia Pakistan 2026",
    metaDescription: "Arafat Minhas becomes first Pakistan bowler to take 5 wickets on ODI debut — his 5/32 vs Australia at Rawalpindi destroys Australia for 200. Full profile inside.",
    date: "May 31, 2026",
    tag: "Player Spotlight",
    author: "ESPNcricinfo & Outlook India",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop",
    content: `On Saturday, 30 May 2026, a 21-year-old left-arm spinner from Multan stepped onto the Rawalpindi Cricket Stadium for his ODI debut and achieved something no other bowler in Pakistan's rich ODI history had ever managed.

## The Headline — Pakistan's First Ever Debut Five-Fer in ODIs

Arafat Minhas became the first Pakistani to take five wickets on his one-day international debut as Pakistan spun Australia out for 200 in the first ODI in Rawalpindi.

Let that sink in. Pakistan has played over 1,000 ODI matches. Wasim Akram bowled. Waqar Younis ran in. Shoaib Akhtar hit 160 kph. Shaheen Afridi swung it both ways. Not one of them — not a single Pakistan bowler in the entire history of Pakistan ODI cricket — had taken five wickets on debut. Then along came a 21-year-old left-arm spinner from Multan, and he did it on Pakistan's 1000th ODI. History. Made.

## Who Is Arafat Minhas? — The Boy From Multan

Arafat Minhas was born on 2 January 2005 in Multan, Punjab, Pakistan. He is 21 years old, stands at 5 feet 11 inches, bats left-handed, and bowls slow left-arm orthodox. He plays as an all-rounder for Pakistan and for Multan Sultans in the PSL. He is the younger brother of Sameer Minhas — another Pakistan cricketer — making them a remarkable cricket family.

He made his T20I debut on 3 October 2023 against Hong Kong — cap number 104 — and has represented Multan Sultans and Karachi Kings in the PSL. His domestic career began with Southern Punjab in 2022-23.

This is a young man who has grown up within cricket — his brother Sameer Minhas plays for Pakistan too — and who has shown exceptional talent from the earliest stages of his career. But nothing in domestic cricket, nothing in T20Is, nothing in any format had prepared anyone for what he would do against Australia on May 30, 2026.

## The Debut Bowling Spell — How He Dismissed Australia

The 21-year-old left-arm fingerspinner used his variations with great guile on a pitch that offered plenty of purchase to the spinners to bundle Australia for 200. Pakistan captain Shaheen Shah Afridi had been encouraged to bowl first because of the dryness in the pitch.

• **Wicket 1 — Josh Inglis (13 off 22)**: Arafat Minhas brought Australia down to their knees, first reducing them to 68/4 in 15.2 overs. He got the big wickets of Josh Inglis for 13. Coming on for his first over in international cricket, Minhas immediately looked like he belonged — flight, turn, control. Inglis tried to go over the top and found mid-on perfectly placed.

• **Wicket 2 — Marnus Labuschagne (0 off 2)**: Minhas dismissed Marnus Labuschagne for a golden duck off just 2 balls. This was the wicket that announced to the cricket world that this was no ordinary debut. Labuschagne — one of the world's best batters, a man who averages over 50 in Test cricket — bowled for zero. Minhas had turned one sharply past the outside edge and clipped the top of off stump. Rawalpindi erupted.

• **Wicket 3 — Cameron Green (0 off 3)**: Cameron Green also fell for zero off 3 balls to Minhas. Two golden ducks in one spell. Two world-class batters — Labuschagne and Green — both dismissed without scoring. Australia were reeling at 68/4 and the Rawalpindi crowd was in a frenzy.

• **Wicket 4 — Matthew Short (55 off 76) — The Stumping**: At 68/4, Australia were in a spot of bother but Short and Renshaw fought hard through a fifth wicket stand of 55 before Minhas broke the stand, getting Short stumped. Minhas dragged his length back and put a few extra yards into his delivery as Short charged at him, providing enough time for Ghori to dislodge the bails. A stumping — not a caught or a bowled, but a stumping — showing not just spin but clever variations in pace and length. Minhas had read Short's intent perfectly and executed the plan with ice-cold precision.

• **Wicket 5 — Nathan Ellis (8) — The Fifer Complete**: Arafat completed his five-wicket haul by dismissing Nathan Ellis for 8. Arafat Minhas took five wickets on debut and then hit the winning runs for Pakistan to seal the chase — finishing with figures of 5/32 in ten overs.

Five wickets. Ten overs. Thirty-two runs. Economy of 3.20. On debut. Against Australia. On Pakistan's 1000th ODI.

## The Bowling Figures in Full

| Bowler | Overs | Maidens | Runs | Wickets | Economy |
|---|---|---|---|---|---|
| Arafat Minhas ⭐ | 10 | 1 | 32 | 5 | 3.20 |
| Abrar Ahmed | 10 | 0 | 44 | 2 | 4.40 |
| Shaheen Afridi | — | — | — | 0 | — |
| Shadab Khan | 8 | 0 | 54 | 0 | 6.75 |
| Salman Agha | 5 | — | — | 0 | — |

Pakistan used all four spinners — Minhas, Abrar Ahmed, Shadab Khan and Salman Agha. Eight of Australia's ten wickets went to slow bowlers on a dry pitch tailor-made for spin at Rawalpindi.

## The Pitch — Made for Spin, Conquered by a Debutant

Pakistan spun Australia out for 200 on a dry pitch tailor-made for spinners at Rawalpindi Cricket Stadium. Matthew Renshaw hit a career-best 63-ball 61 and opener Matthew Short with a 76-ball 55 batted well amidst a spin assault with eight wickets going to slow bowlers.

The Rawalpindi surface was dry, turning, and perfectly suited to Minhas's style of bowling. But having the right conditions and taking advantage of them are two completely different things. Shadab Khan — Pakistan's most experienced spinner — went for 54 in 8 overs without a wicket. The same conditions, the same pitch, and Minhas finished with 5/32. The difference was execution, confidence, and the fearlessness of youth.

## The All-Round Contribution — He Hit the Winning Runs Too

Arafat Minhas took five wickets on debut and then hit the winning runs for Pakistan to complete the chase — scoring an unbeaten 18* off 17 balls, finishing the game with a six.

On the same day he became the first Pakistan bowler to take five ODI debut wickets, he also walked out to bat in a tense chase situation and hit a six to finish the game. Five wickets and the winning runs — on debut. Against Australia. Cricket has rarely seen a more complete debut performance.

## His Early Career — Brilliance That Was Always Coming

On 15 May 2023, in the 5th Youth ODI during the Pakistan U19 tour of Bangladesh, Minhas scored 40 off 42 before taking 3 wickets for 20 runs in 7.3 overs — with an economy rate of 2.66. He was also responsible for a run out, making it a complete all-round performance.

On 24 October 2023, in the 2nd Youth ODI in Karachi against Sri Lanka U19, Minhas was named Player of the Match for hitting 95 off 66 deliveries — nine fours, two sixes — followed by an economical spell with the ball, conceding only 21 runs in 10 overs.

The talent was always there. The composure under pressure was always there. Anyone who watched Arafat Minhas in Pakistan U19 cricket knew he was something special. But even the most optimistic observer could not have predicted a debut quite like this.

## The Family Connection — The Minhas Brothers

Arafat Minhas is the younger brother of Sameer Minhas — who has also played for Pakistan. The Minhas family from Multan has produced two international cricketers, making them one of Pakistan's most remarkable cricket families of the current generation.

Sameer Minhas has been a reliable performer in PSL cricket, most notably for Hyderabad Kingsmen in PSL 2026 where he scored 343 runs in the season. The two brothers represent different disciplines — Sameer the aggressive top-order batter, Arafat the wily left-arm spinner — but both have now represented Pakistan at the highest level.

## Player of the Match — and Rightly So

Arafat Minhas was adjudged Player of the Match after running through Australia with a menacing spell on debut. The 21-year-old first reduced Australia to 68/4 in 15.2 overs, dismissing Inglis, Labuschagne, and Green — then returned to break the Short-Renshaw partnership before completing his five-for by dismissing Nathan Ellis.

Player of the Match on your ODI debut. Five wickets. The winning runs. A place in Pakistan cricket history. Not bad for a Saturday.

## What the Captain Said

Pakistan captain Shaheen Shah Afridi had been encouraged to bowl first because of the dryness in the pitch — and his faith in Minhas was fully rewarded. The decision to hand the young left-arm spinner the ball early and keep backing him through his ten overs was a masterstroke of captaincy that allowed Minhas to fully express his talent on the biggest stage.

## Australia's Reaction

Matthew Renshaw hit a career-best 63-ball 61 and opener Matthew Short hit 76-ball 55 — both batted well amidst the spin assault. But even their resistance could not prevent Australia from being dismissed for 200 in 44.1 overs as eight wickets went to slow bowlers on the dry Rawalpindi surface.

Australia were caught off guard by the surface — they came expecting a Rawalpindi green top with pace and bounce. What they found was a dry, turning surface and a 21-year-old spinner who was ready to exploit it better than any bowler in the ground.

## Career Statistics So Far

| Format | Matches | Wickets | Best | Average | Economy |
|---|---|---|---|---|---|
| T20I | 8 | 7 | 2/16 | 22.14 | 7.73 |
| ODI | 1 | 5 | 5/32 | 6.40 | 3.20 |

One ODI. Five wickets. An economy of 3.20 against Australia. The numbers are extraordinary for a player who has just stepped onto the international stage.

## What's Next for Arafat Minhas

The two teams will next face off in the 2nd ODI on Tuesday, June 2, at Gaddafi Stadium in Lahore. All eyes will be on Arafat Minhas — can he reproduce this performance on a Lahore surface? Will Australia come in with a plan to target him after studying his debut footage? Can he take more wickets and cement his place in Pakistan's ODI plans for the Champions Trophy defence?

These are exciting questions. What is beyond question is this: on May 30, 2026, a 21-year-old left-arm spinner from Multan walked onto Rawalpindi Cricket Stadium for the first time in ODI cricket and became the first Pakistani ever to take five wickets on debut. Pakistan's 1000th ODI could not have had a more memorable hero.

## The Record in Full — Pakistan's ODI Debut Five-Wicket Hauls

Before Arafat Minhas: Zero
After Arafat Minhas: One

He owns this record. Alone. Forever.

For complete Pakistan vs Australia ODI series schedule, scorecards, and live match updates, visit pakcric-schedule.online`
  },
  'babar-azam-69-vs-australia-1st-odi-rawalpindi-2026': {
    title: "Babar Azam's Classy 69 Guides Pakistan to 5-Wicket Win Against Australia — 1st ODI Rawalpindi 2026",
    metaTitle: "Babar Azam 69 vs Australia 1st ODI Rawalpindi 2026",
    metaDescription: "Babar Azam scores 69 off 94 balls vs Australia in 1st ODI Rawalpindi 2026. His 127-run stand with Ghazi Ghori steers Pakistan to a dominant 5-wicket win.",
    date: "May 31, 2026",
    tag: "Player Feature",
    author: "Wisden & ESPNcricinfo",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop",
    content: `Babar Azam scores 69 runs off 94 balls with 4 fours and 1 six. His most productive shot was the cover drive, from which he scored 18 runs from 2 fours. His control rate throughout the innings was an impressive 83%.

## The Historic Match — Pakistan's 1000th ODI

This was Pakistan's 1000th ODI match — a historic milestone for Pakistan cricket. And Babar Azam made sure his country celebrated it in the most fitting way possible with a masterful 69-run knock that guided Pakistan home in style.

Pakistan sealed a five-wicket win over Australia in the first ODI, with the hosts chasing down a target of 201 with 24 balls to spare. Australia's innings was led by a half-century by Matthew Short, but the visitors were all out for 200 after a brilliant fifer by debutant Arafat Minhas. Pakistan began the chase well, and Babar Azam and Ghazi Ghori took the Green Shirts over the line in 42.3 overs.

## The Target and Pakistan's Early Struggles

Australia were dismissed for 200 after Pakistan won the toss and elected to field first. Debutant Arafat Minhas took a brilliant five-wicket haul to restrict Australia to a modest total at Rawalpindi Cricket Stadium.

Pakistan's chase began on a nervous note. Maaz Sadaqat fell early at just 25 runs in the 5.2nd over, and Sahibzada Farhan followed at 49 in the 12.2nd over — leaving Pakistan at 49/2 and in need of a partnership of substance.

The crowd at Rawalpindi went quiet. A target of 201 should be straightforward for Pakistan — but two early wickets had put pressure on the middle order. Then Babar Azam arrived.

## Babar's Innings — 69 off 94 Balls, 83% Control Rate

<img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop" alt="Babar Azam scores elegant fifty at Rawalpindi" />

This innings had all the hallmarks of a vintage Babar Azam ODI knock — composed entry, careful assessment of the conditions, building gradually before accelerating. He did not slog. He did not panic. He assessed the required run rate, assessed the Australian bowling attack, and batted with the clarity and authority that makes him Pakistan's best ODI batter.

His fifty arrived — Babar Azam celebrated after scoring fifty runs during the first ODI match at Rawalpindi Cricket Stadium, the crowd rising to applaud a typically elegant half-century against Australia's bowling attack.

## The Match-Winning Partnership — Babar & Ghazi Ghori 127 Runs

Returning Babar Azam and wicket-keeper Ghazi Ghori played measured knocks for a 127-run third wicket stand to help Pakistan recover from 49/2.

This 127-run partnership was the backbone of Pakistan's chase. Ghazi Ghori — one of Pakistan's most exciting young wicket-keeper batters — matched Babar shot for shot:

• Ghazi Ghori: 65 runs off 92 balls with 8 fours and 0 sixes. His most productive shot was the sweep shot, from which he scored 17 runs from 3 fours. His control rate was also 83% — identical to Babar's throughout their partnership.

The two batters complemented each other perfectly — Babar playing his classic off-side game with elegant drives and precise placement, Ghori using the sweep and the on-side with authority. Together they turned a nervy chase from 49/2 into a comfortable cruise.

## How Babar Was Dismissed — So Close to a Hundred

Babar Azam's innings came to an end at 176 in the 38.2nd over — dismissed just 31 runs short of what would have been a magnificent ODI century against Australia on Pakistan's 1000th ODI occasion.

Nathan Ellis claimed two wickets for Australia — and Babar's was one of them. Ellis struck at the crucial moment when Pakistan were cruising, removing Babar for 69 just when a century beckoned.

The dismissal brought brief nerves — Ghazi Ghori followed at 185 in the 40.3rd over. Salman Agha then fell at 195 in the 42.1st over — three wickets in the space of four overs that threatened to make the final stages interesting.

## Pakistan Complete the Chase — Win with 24 Balls to Spare

Pakistan sealed a five-wicket win over Australia, chasing down a target of 201 with 24 balls to spare. The remaining batters — Arafat Minhas and Abdul Samad — saw Pakistan home without any further drama, completing a comprehensive win that gave the hosts a 1-0 lead in the three-match series.

## Full Pakistan Batting Scorecard — 1st ODI

| Batsman | Score / Out | Runs | Balls | 4s | 6s | SR |
|---------|-------------|------|-------|----|----|----|
| Maaz Sadaqat | c Short b Ellis | 25 | - | - | - | - |
| Sahibzada Farhan | out | 49 | - | - | - | - |
| Babar Azam | out b Ellis | 69 | 94 | 4 | 1 | 73.40 |
| Ghazi Ghori | out | 65 | 92 | 8 | 0 | 70.65 |
| Salman Agha | out | 6 | 4 | 1 | 0 | 150 |
| Arafat Minhas | Not Out | 18 | 17 | 1 | 1 | 105.8 |
| Abdul Samad | Not Out | 1 | - | - | - | - |
| Total | 202/5 | 42.3 overs | | | | |

## Full Australia Batting Scorecard

Australia were bowled out for 200. Matthew Short top-scored with a half-century. Nathan Ellis top-scored with 2 wickets in Pakistan's chase.

Australia bowling in Pakistan's innings:
• Nathan Ellis: 2 wickets (including Babar)
• Marnus Labuschagne: 1/15 — economical
• Other bowlers: 2 wickets between them

## Arafat Minhas — The Man of the Match

While Babar's batting was outstanding, the real star of Pakistan's day was debutant spinner Arafat Minhas:

Arafat Minhas bowled 10 overs, gave away 32 runs, and took 5 wickets — an economy of just 3.20 on his ODI debut. His figures of 5/32 was the perfect debut any bowler could dream of, and it was his brilliant bowling that set up Pakistan's win by restricting Australia to just 200.

Pakistan's 1000th ODI was marked by debutant Arafat Minhas making history — becoming one of the few Pakistan bowlers to take a five-wicket haul on their ODI debut, turning what could have been a 280-run Australian total into a very chaseable 200.

## What Babar's 69 Means in the Bigger Picture

1. **Back in ODI form after Bangladesh Tests:** Babar had scored 68 and 47 in the Bangladesh Tests — showing his Test form was solid. Now with 69 in the ODI format on the same home tour, he has proven his form cuts across formats. A batter in peak rhythm across all three formats of cricket is the most dangerous player in world cricket. That is Babar Azam right now.
2. **The Babar-Ghori partnership — Pakistan's new ODI engine:** Babar Azam and Ghazi Ghori running between the wickets during their 127-run partnership showed the kind of understanding between the two batters that Pakistan's ODI setup has been searching for. If this partnership continues to develop, Pakistan's ODI middle order looks formidable for the Champions Trophy defence.
3. **Pakistan's 1000th ODI — a win to remember:** There could not have been a better way to celebrate 1000 ODIs than a clean, dominant five-wicket win over Australia at home. Babar's 69 will always be remembered as the innings that anchored Pakistan's 1000th ODI victory.

## Babar Azam vs Australia — Career ODI Record

Babar Azam has always reserved some of his finest ODI innings for Australia. From his early career highlights at the MCG to today's controlled 69 at Rawalpindi, Australia have consistently brought out the best in Babar's ODI batting. He averages above 56 against Australia in ODIs — his best average against any major nation.

## Day's Best Performances Summary

| Player | Performance | Team |
|--------|-------------|------|
| Arafat Minhas ⭐ | 5/32 off 10 overs — debut | Pakistan |
| Babar Azam | 69 off 94b — 4x4, 1x6 | Pakistan |
| Ghazi Ghori | 65 off 92b — 8x4 | Pakistan |
| Matthew Short | 55 runs | Australia |
| Nathan Ellis | 2 wickets | Australia |

## What's Next — 2nd ODI Pakistan vs Australia

Pakistan lead the 3-match ODI series 1-0. The 2nd ODI will be played at a different venue — and Pakistan will be brimming with confidence after this commanding win. For Babar Azam, the 69 will serve as motivation to go one better and score a century in the 2nd ODI. Australia, humbled on this occasion, will come back hard.`
  },
  'pakistan-beat-australia-by-5-wickets-1st-odi-2026': {
    title: "Pakistan Beat Australia by 5 Wickets in 1st ODI — Arafat Minhas 5/32 on Debut, Babar 69, Ghori 65 Seal Historic Win",
    metaTitle: "PAK vs AUS 1st ODI Result | Arafat Minhas 5/32 Debut, Babar 69, Ghori 65 | Pakistan Win 5 Wkts",
    metaDescription: "Pakistan beat Australia by 5 wickets in 1st ODI Rawalpindi May 30 2026. Arafat Minhas took 5/32 on debut — first Pakistan bowler to take 5-for on ODI debut. Babar 69, Ghori 65, 127-run partnership. Renshaw 61, Short 55. Pakistan lead series 1-0.",
    date: "May 31, 2026",
    tag: "Match Report",
    author: "PCB Editorial Team",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop",
    content: `On the last night of May 2026, at Rawalpindi Cricket Stadium, Pakistan introduced the cricket world to a name it will not forget in a long time.

## 🏆 Result at a Glance

| Detail | Info |
|--------|------|
| Match | 1st ODI — Australia tour of Pakistan 2026 |
| Date | Saturday, 30 May 2026 |
| Venue | Rawalpindi Cricket Stadium |
| Format | Day/Night (50 overs) |
| Toss | Pakistan won — elected to BOWL |
| Australia | 200 all out (44.1 overs) |
| Pakistan | 202/5 (42.3 overs — Target 201) |
| Result | Pakistan won by 5 wickets (45 balls remaining) |
| Player of the Match | Arafat Minhas — 5/32 + 18* |
| Series | Pakistan lead 1-0 |

## Introduction: A Historic Debut Lights Up Rawalpindi

<img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop" alt="Pakistan vs Australia 1st ODI Rawalpindi" />

**Arafat Minhas. 21 years old. Left-arm finger spin. ODI debut. Five wickets for 32 runs.**

Arafat Minhas made his ODI debut memorable by picking up five wickets — the first Pakistan bowler to do so in his maiden appearance in the format. His sensational 5/32 from ten overs orchestrated his side's comprehensive five-wicket win over Australia in the first ODI at Rawalpindi.

But the story of Pakistan's victory was not just one man. It was a complete team performance — disciplined bowling that bundled Australia for 200, followed by a confident chase powered by a masterful Babar Azam (69) and a stunning debut batting display from wicketkeeper-batter Muhammad Ghazi Ghori (65), whose 127-run partnership with Babar took Pakistan smoothly over the line.

Pakistan lead the 3-match series 1-0.

## Match Details

| Detail | Info |
|--------|------|
| ODI Number | ODI No. 4966 |
| Start Time | 4:30 PM PKT (16:30 Local) |
| Sessions | 16:30–20:00 · 20:00–20:30 (Interval) · 20:30–00:00 |
| Umpires | Asif Yaqoob, Kumar Dharmasena |
| TV Umpire | Richard Kettleborough |
| Match Referee | Graeme Labrooy |

## Playing XIs

### Pakistan Playing XI
Sahibzada Farhan, Babar Azam, Maaz Sadaqat, Abdul Samad, Salman Ali Agha (vc), Muhammad Ghazi Ghori (wk), Shadab Khan, Abrar Ahmed, Arafat Minhas, Sufyan Moqim, Shaheen Shah Afridi (c)

### Australia Playing XI
Matthew Short, Alex Carey (wk), Josh Inglis, Marnus Labuschagne, Matthew Renshaw, Mitchell Marsh (c), Liam Scott, Matthew Kuhnemann, Nathan Ellis, Billy Stanlake, Tanveer Sangha

## FIRST INNINGS: Australia — 200 All Out (44.1 Overs)

<img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop" alt="Pakistan bowling Australia" />

### Toss and Pakistan's Decision

Despite sweltering conditions, Pakistan captain Shaheen Shah Afridi had been encouraged to bowl first because of the dryness in the pitch.

The Rawalpindi surface — notoriously flat and pace-friendly — had a dryness to it that promised spin from the very early overs. Shaheen's decision to bowl proved inspired.

### Powerplay (Overs 1–10): Australia 51/1

Powerplay 1 (Overs 0.1–10.0): 51 runs, 1 wicket. Matthew Short and Alex Carey gave Australia a reasonable start — Short looking particularly fluent, driving through the off side with authority. Carey fell to Abrar Ahmed — lobbed up fuller on off, turned away sharply, Carey edged it and Salman Agha took a safe low catch at slip.

Over 6.6: Carey c Salman Agha b Abrar Ahmed 19 (24b, 4x4, 0x6) — Fuller, turns away markedly, he gets flummoxed and leaned at it, trying to deflect it behind square but edges it to Salman who takes a safe and low catch.

### Middle Overs: Australia Collapse — Minhas Runs Through Them

At Drinks: Australia 68/4 in 15.2 overs — Short 31. From 51/1 at the end of the powerplay to 68/4 at drinks — three wickets fell in just 25 deliveries as Arafat Minhas began his historic spell.

The 21-year-old left-arm fingerspinner used his variations with great guile on a pitch that offered plenty of purchase to the spinners to bundle Australia for 200.

Inglis survived a review — Over 13.3: Review by Australia (Batting), Decision Challenged — Wicket, Umpire Asif Yaqoob, Batter JP Inglis — Struck down — but eventually fell cheaply. Labuschagne, Marsh and Inglis all failed to provide the middle-order foundation Australia needed.

Australia reached 100 in 20.5 overs. A par score at this point — but with four wickets gone and only Short of the recognised batters remaining, 200 was already looking optimistic.

### Matthew Short and Matthew Renshaw: The Only Resistance

Renshaw 61, Short 55 — two half-centuries that at least gave Australia a competitive total.

Matthew Short (55) was the aggressor — pulling the short ball, cutting square, and using the pace of the ball cleverly on the Rawalpindi surface. Matthew Renshaw (61) was the anchor — accumulating sensibly and rotating strike with the lower order.

But around them, wickets fell to Minhas and Abrar Ahmed with alarming regularity.

Over 37.5: Review by Pakistan (Bowling), Decision Challenged — Wicket, Umpire Asif Yaqoob, Batter MP Kuhnemann — Struck down. Another review, another escape — but only temporary. Kuhnemann fell shortly after.

### Death Overs: Minhas Cleans Up — Australia 200 All Out

Powerplay 3 (Overs 40.1–50.0): 7 runs, 3 wickets. Australia's death batting completely collapsed — the last 10 overs producing just 7 runs as Minhas and Abrar completed their demolition job. Billy Stanlake (0) was the last wicket to fall in the 44th over — Australia bowled out for exactly 200.

### Australia Full Batting Scorecard: 200 All Out

| Batsman | Runs | Balls | 4s | 6s | SR | Dismissal |
|---------|------|-------|----|----|-----|-----------|
| Matthew Short | 55 | — | 6 | 1 | — | b Minhas |
| Alex Carey (wk) | 19 | 24 | 4 | 0 | 79.16 | c Salman Agha b Abrar |
| Josh Inglis | — | — | — | — | — | dismissed |
| Marnus Labuschagne | — | — | — | — | — | dismissed |
| Matthew Renshaw | 61 | — | 6 | 0 | — | dismissed |
| Mitchell Marsh (c) | — | — | — | — | — | dismissed |
| Liam Scott | — | — | — | — | — | dismissed |
| Matthew Kuhnemann | — | — | — | — | — | dismissed |
| Nathan Ellis | — | — | — | — | — | dismissed |
| Tanveer Sangha | — | — | — | — | — | dismissed |
| Billy Stanlake | 0 | — | 0 | 0 | — | Last out |
| Extras | 13 | | | | | |
| Total | 200 all out | 44.1 overs | | | | |

### Pakistan Bowling: 1st Innings

| Bowler | Overs | Runs | Wickets | Economy |
|--------|-------|------|---------|---------|
| Arafat Minhas | 10 | 32 | 5 | 3.20 |
| Abrar Ahmed | 10 | 44 | 2 | 4.40 |
| Shaheen Shah Afridi | — | — | 1 | — |
| Shadab Khan | — | — | 1 | — |
| Sufyan Moqim | — | — | 1 | — |

## ARAFAT MINHAS: HISTORIC 5/32 — THE FULL STORY

<img src="https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=800&auto=format&fit=crop" alt="Arafat Minhas debut 5 wickets" />

This was the performance of the match, the performance of the series opener, and one of the finest ODI debut bowling displays in Pakistan's history.

Arafat Minhas made his ODI debut memorable by picking up five wickets — the first Pakistan bowler to do so in his maiden appearance in the format.

### What Made His Bowling So Special

Minhas is a left-arm finger spinner — the same basic action as Noman Ali in Tests, but with the white ball in 50-over cricket, on a dry Rawalpindi surface that gripped and turned. His ten overs were metronomically accurate — bowling a consistent line on off stump, drifting into right-handers, and then spinning away sharply.

His five wickets came at crucial moments throughout the innings — breaking partnerships when Australia looked to rebuild, and then cleaning up the tail to restrict them below 210.

Arafat Minhas, Player of the Match: "In the mid-innings interview, I said there is indeed pressure, but I had confidence from the PSL."

That confidence — built through his PSL 2026 campaign for Multan Sultans — was evident throughout his ten-over spell. He never looked overawed by the occasion. He never tried to do too much. He just bowled his line, varied his pace cleverly, and let the pitch do the rest.

Arafat Minhas: 10 overs — 32 runs — 5 wickets — Economy 3.20

The first Pakistan bowler to take five wickets on ODI debut. A record that will stand for years.

## SECOND INNINGS: Pakistan Chase — 202/5 (42.3 Overs)

<img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop" alt="Pakistan batting ODI chase" />

### Early Wickets — Pakistan 5/2

Pakistan's chase did not start perfectly. Sahibzada Farhan and Maaz Sadaqat — the explosive opening pair — fell cheaply in the powerplay. Nathan Ellis (2/45) got both early breakthroughs, leaving Pakistan at 5/2 with the score barely off the ground.

It could have panicked a lesser team. But Babar Azam was walking to the crease.

### THE PARTNERSHIP: Babar Azam 69 + Ghazi Ghori 65 — 127 Runs Together

Their run chase brought another youngster Ghazi Ghori, a wicketkeeper-batter, in the limelight as he stitched a sturdy 127-run stand with Babar Azam.

This partnership was the heart of Pakistan's victory — and also the moment that answered every question about whether Rizwan's exclusion was justified.

Babar Azam (69 off 94 balls): Exactly the innings Pakistan needed. A successful return for Babar Azam, who reached his half-century in 71 balls, with Ghori also inching close to his own fifty. Pakistan were slowly nearing the win, with only 66 more runs needed. His 69 was a masterclass in ODI batting under pressure — not flashy, not reckless, but controlled accumulation that kept the required rate manageable and the partnership intact.

Muhammad Ghazi Ghori (65 off 92 balls): Babar Azam and Ghazi Ghori took the Green Shirts over the line in 42.3 overs. Ghori — making his debut as Pakistan's first-choice wicketkeeper in place of the dropped Mohammad Rizwan — answered every doubter immediately with a composed, mature innings of 65 that belied his inexperience at this level.

The 127-run partnership between Babar and Ghori was the backbone of the entire chase — reducing the equation from 5/2 needing 195 to a comfortable final-over cruise.

### Minhas Finishes it With a Six!

Arafat Minhas picked up a fifer and then topped it up with a lovely cameo and showed his all-round skills, hitting a towering six down the ground that sealed the deal. Pakistan win comprehensively by five wickets and lead the three-match series 1-0.

The debutant who had taken five wickets with the ball finished the chase with a six with the bat — the perfect Hollywood ending to one of Pakistan's most complete ODI performances in recent years.

### Pakistan Full Batting Scorecard: 202/5 (42.3 Overs)

| Batsman | Runs | Balls | 4s | 6s | SR | Dismissal |
|---------|------|-------|----|----|-----|-----------|
| Sahibzada Farhan | — | — | — | — | — | early |
| Maaz Sadaqat | — | — | — | — | — | early |
| Babar Azam | 69 | 94 | 6 | 1 | 73.40 | dismissed |
| Muhammad Ghazi Ghori (wk) | 65 | 92 | 5 | 1 | 70.65 | dismissed |
| Abdul Samad | — | — | — | — | — | dismissed |
| Salman Ali Agha | 6 | 4 | 1 | 0 | 150 | lbw b Labuschagne |
| Arafat Minhas | 18* | 17 | 1 | 1 | 105 | Not Out |
| Total | 202/5 | 42.3 overs | | | | |

FOW: 195/5 (42.1 ov) — Salman Agha lbw b Labuschagne 6 (4b, 1x4).

### Australia Bowling: 2nd Innings

| Bowler | Overs | Runs | Wickets | Economy |
|--------|-------|------|---------|---------|
| Nathan Ellis | — | 45 | 2 | — |
| Billy Stanlake | — | — | 1 | — |
| Marnus Labuschagne | 1 | 15 | 1 | 15.00 |
| Tanveer Sangha | — | — | 0 | — |
| Matthew Kuhnemann | — | — | 0 | — |

## Key Records & Milestones

| Record | Detail |
|--------|--------|
| Arafat Minhas 5/32 | First Pakistan bowler to take 5 wickets on ODI debut |
| Minhas double | 5 wickets + 18* — genuine allround debut |
| Babar Azam 69 | Continued return to form after Bangladesh Tests |
| Ghazi Ghori 65 | Stunning debut innings — answered Rizwan's exclusion |
| Babar-Ghori stand | 127 runs — match-defining partnership |
| Pakistan win | 5 wickets with 45 balls remaining — comfortable margin |
| Series | Pakistan lead 1-0 |

## Player Ratings

| Player | Team | Rating | Performance |
|--------|------|--------|-------------|
| Arafat Minhas | PAK | ⭐⭐⭐⭐⭐ | 5/32 + 18* — historic debut POTM |
| Babar Azam | PAK | ⭐⭐⭐⭐⭐ | 69 off 94 — controlled anchor innings |
| Muhammad Ghazi Ghori | PAK | ⭐⭐⭐⭐⭐ | 65 on debut — justified Rizwan drop |
| Abrar Ahmed | PAK | ⭐⭐⭐⭐ | 2/44 — excellent support to Minhas |
| Matthew Renshaw | AUS | ⭐⭐⭐⭐ | 61 — Australia's best batter |
| Matthew Short | AUS | ⭐⭐⭐⭐ | 55 — fought hard |
| Nathan Ellis | AUS | ⭐⭐⭐ | 2/45 — only wicket-taker of note |
| Shaheen Afridi | PAK | ⭐⭐⭐ | Good captain, 1 wicket |
| Sahibzada Farhan | PAK | ⭐ | Failed — cheap early dismissal |
| Mitchell Marsh | AUS | ⭐ | Failed to build as captain |

## Post-Match Reactions

### Arafat Minhas (Player of the Match):
"In the mid-innings interview, I said there is indeed pressure, but I had confidence from the PSL."

The 21-year-old from Peshawar, who had first come to attention in PSL 2026 with Multan Sultans, channelled that franchise cricket experience into the biggest stage of his career. His confidence — calm, assured, relentless — was the story of the evening.

### Shaheen Shah Afridi (Pakistan Captain):
A captain who made the right toss call, backed his debutant bowler with a full ten-over spell, and saw his team cruise home. Shaheen Afridi's leadership in this match was excellent — and the result continues Pakistan's strong home ODI record.

## What This Win Means

**For Pakistan:** Back to winning ways after the 0-2 Bangladesh Test series loss — a much-needed confidence boost ahead of the 2027 ODI World Cup. The debut of Minhas and Ghori's impressive innings signal exciting depth in the white-ball setup.

**For Arafat Minhas:** A career-defining debut. Five wickets on debut in ODI cricket is rare anywhere in world cricket — for Pakistan, it is unprecedented. The 21-year-old from Peshawar has announced himself on the global stage in the most spectacular fashion imaginable.

**For Ghazi Ghori:** The dropped Mohammad Rizwan will have watched with mixed emotions — because the man who replaced him just scored 65 in his debut innings. Ghori's performance makes Rizwan's recall for future series less certain.

**For the series:** Pakistan lead 1-0. The 2nd ODI is on June 2 at Gaddafi Stadium, Lahore. Australia's depleted squad — missing Cummins, Starc, Hazlewood and Head — will need to find answers quickly if they are to level the series.

## Series Schedule Remaining

| Match | Date | Venue |
|-------|------|-------|
| 1st ODI | May 30 | Rawalpindi — PAK won by 5 wkts |
| 2nd ODI | June 2 | Gaddafi Stadium, Lahore |
| 3rd ODI | June 4 | Gaddafi Stadium, Lahore |

*Published: May 31, 2026*
*Sources: ESPNcricinfo match report, Outlook India, ESPN.com scorecard, PCB official*`
  },
  'pakistan-announce-16-member-odi-squad-vs-australia-2026': {
    title: "Pakistan Announce 16-Member ODI Squad vs Australia 2026 — Babar, Naseem & Haris Rauf Return, Rizwan Dropped, 3 Uncapped Players",
    metaTitle: "Pakistan ODI Squad vs Australia 2026 | Babar Returns, Rizwan Dropped, 3 Uncapped | May 30 Series",
    metaDescription: "Pakistan's official 16-member ODI squad for Australia series May 30–June 4 2026. Shaheen captain, Babar back, Haris Rauf & Naseem recalled, Rizwan dropped, Saim Ayub injured. Ahmed Daniyal, Arafat Minhas, Rohail Nazir uncapped. Full squad analysis.",
    date: "May 22, 2026",
    tag: "Squad Announcement",
    author: "PCB Editorial Team",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop",
    content: `The Pakistan Cricket Board (PCB) has named a 16-member squad for the upcoming three-match ODI series against Australia, scheduled from May 30 to June 4, 2026, in Rawalpindi and Lahore. The national selection committee confirmed the squad will be led by captain Shaheen Shah Afridi, with Salman Ali Agha serving as vice-captain.

# Official Pakistan Squad — Australia ODI Series 2026

The official 16-member squad selected for the home ODI series is:

• Shaheen Shah Afridi (C) — Left-arm fast / Captain (Senior)
• Salman Ali Agha (VC) — Right-arm off-spin allrounder (Vice-captain)
• Abdul Samad — Left-hand bat / Lower-order power (Regular member)
• Abrar Ahmed — Right-arm mystery spin (Regular member)
• Ahmed Daniyal — Right-arm fast (Uncapped — debut call-up)
• Arafat Minhas — Right-arm fast (Uncapped — debut call-up)
• Babar Azam — Right-hand bat (Recalled after Bangladesh Test)
• Haris Rauf — Right-arm fast (Recalled after Bangladesh absence)
• Maaz Sadaqat — Left-hand bat (PSL 2026 star — Hyderabad Kingsmen)
• Muhammad Ghazi Ghori (WK) — Right-hand bat / WK (Regular member)
• Naseem Shah — Right-arm fast (Recalled after Bangladesh absence)
• Rohail Nazir (WK) — Right-hand bat / WK (Uncapped — debut call-up)
• Sahibzada Farhan — Right-hand bat / aggressive (PSL 2026 star — Multan Sultans)
• Shadab Khan — Right-arm leg-spin allrounder (Senior — returning)
• Shamyl Hussain — Right-arm fast-medium (Regular member)
• Sufyan Moqim — Left-arm wrist spin (Regular member)

# Official Series Schedule (May 30 – June 4, 2026)

The schedule for the three-match ODI series runs as follows:

• 1st ODI — Saturday, May 30, 2026 at Rawalpindi Cricket Stadium - 4:30 PM PKT
• 2nd ODI — Tuesday, June 2, 2026 at Gaddafi Stadium, Lahore - 4:30 PM PKT
• 3rd ODI — Thursday, June 4, 2026 at Gaddafi Stadium, Lahore - 4:30 PM PKT

Toss takes place at 4:00 PM PKT for all matches. Online ticket booking kicked off on May 22, 2026 via tcs.com.pk, and physical tickets are available from designated outlets starting on the same date.

# Introduction: Pakistan Go Big For Australia — Experience + Youth

Pakistan's 16-member ODI squad for the Australia series tells three stories simultaneously: a homecoming, a changing of the guard, and a bold look toward the 2027 ICC ODI World Cup.

Star batter Babar Azam and pacers Haris Rauf and Naseem Shah have been recalled after missing the previous away series against Bangladesh. Mohammad Rizwan has been left out, with wicketkeeping options now including Muhammad Ghazi Ghori and uncapped Rohail Nazir.

The squad is a confident blend of Pakistan's most experienced match-winners — Babar, Shaheen, Naseem, Haris, Shadab — alongside the exciting new generation led by PSL 2026's breakout stars Maaz Sadaqat (Hyderabad Kingsmen) and Sahibzada Farhan (Multan Sultans).

Ahmed Daniyal, Arafat Minhas, and Rohail Nazir are the three players selected in the squad who are yet to represent Pakistan in ODI cricket.

# The Big Returns: Babar, Naseem, and Haris Rauf Back

# ⭐ Babar Azam — The King Returns to White Ball

After missing the Bangladesh Test series opener with a knee injury and returning to score 68 and 47 across both Tests in the 2nd Test at Sylhet, Babar Azam is back in the ODI squad and firing. Babar Azam has been recalled after missing the previous away series against Bangladesh.

His PSL 2026 season — 588 runs, two centuries, a world record for T20 centuries as captain — means he enters this Australia series in the best white-ball form of his career. In ODI cricket at home against Australia, Babar's record is excellent. His smooth, classical batting against pace bowling on Pakistan's hard, bouncy tracks will be a key weapon for Shaheen's team.

# ⭐ Naseem Shah — The Express Threat Returns

Naseem Shah has been recalled after missing the Bangladesh series. Naseem was not selected for the Bangladesh Tests — a combination of workload management and the selection of a spin-heavy attack for Dhaka and Sylhet's turning surfaces. But for Australian batting, facing 148+ kmph Naseem Shah with reverse swing at Rawalpindi is a completely different challenge. His recall for a home series against a pace-heavy opposition is both expected and necessary.

# ⭐ Haris Rauf — The Death-Overs Specialist Back

Haris Rauf brings the most explosive ODI pace Pakistan possess. His ability to bowl at 148-150 kmph consistently in death overs — combined with his natural variations (slower ball, bouncer, full yorker) — makes him Pakistan's most dangerous wicket-taker in white-ball cricket. His recall after Bangladesh was inevitable for an Australia ODI series.

# The Dropped: Mohammad Rizwan Out

This is the biggest selection surprise in the squad. Mohammad Rizwan — Pakistan's most consistent ODI batter across 2023-2025, and the man who scored 75* in the 2nd Test against Bangladesh — has been left out of the ODI squad entirely.

The message from the selectors is clear: the future wicketkeeper is Ghazi Ghori, and Rohail Nazir is being given an opportunity to stake his claim. Rizwan's exclusion may also reflect the selectors wanting to build a distinct ODI identity separate from the Test team — using more aggressive top-order options in white-ball cricket.

Other notable absences: Saim Ayub and Fakhar Zaman remain unavailable due to injuries and are transitioning through rehabilitation under the supervision of the PCB medical panel.

# The 3 Uncapped Players: Pakistan's Future

# 🆕 Ahmed Daniyal — Right-Arm Fast (Uncapped)

Ahmed Daniyal is a right-arm fast bowler who earned his call-up through consistent performances in the NCA White-Ball Camp and domestic cricket. His ability to generate pace and swing at domestic level caught the selectors' attention ahead of an Australia series where pace bowling is at a premium.

# 🆕 Arafat Minhas — Right-Arm Fast (Uncapped)

Arafat Minhas — who played for Multan Sultans in PSL 2026 with considerable impact — gets his maiden ODI call-up. The right-arm fast bowler showed in PSL 2026 that he has the skills to trouble quality batters with his line, length and pace variations. Pakistan selectors have been monitoring him since his impressive PSL 2026 campaign.

# 🆕 Rohail Nazir (WK) — Wicketkeeper-Batter (Uncapped)

Rohail Nazir represents the next generation of Pakistan wicketkeepers. His inclusion alongside Ghazi Ghori — who played in the Bangladesh Tests — gives Pakistan two fresh keeping options as they plan for the future beyond Rizwan in the 50-over format.

# PSL 2026 Stars in the Squad

# ⭐ Maaz Sadaqat — The PSL 2026 Sensation

Maaz Sadaqat was one of PSL 2026's biggest stories — the 20-year-old left-hander from Peshawar who scored 64* in the PSL Eliminator 1 as Hyderabad Kingsmen beat Multan, was named Player of the Match, and played the joint-fastest fifty (19 balls) in PSL history. His inclusion in Pakistan's ODI squad is a reward for consistent domestic and PSL performances — and his left-hand angle and fearless batting style make him the perfect ODI batter for the modern game.

# ⭐ Sahibzada Farhan — The T20 World Cup Record-Breaker

Sahibzada Farhan came into the Bangladesh ODI series earlier this year as Pakistan's most explosive top-order batter — having broken Virat Kohli's record for most runs in a single T20 World Cup edition (383 runs at a strike rate of 160). In PSL 2026, he scored 106* off 57 balls against Hyderabad Kingsmen — the 9th century of his T20 career. His inclusion in the ODI squad against Australia is essential — his strike rate and boundary-hitting ability make him Pakistan's most dangerous powerplay option.

# Coaching Staff

The coaching staff includes elite guides to oversee the squad for this massive home tournament:

• Manager — Naveed Akram Cheema
• Head Coach — Mike Hesson
• Bowling Coach — Ashley Noffke
• Batting Coach — Hanif Malik
• Fielding Coach — Shane McDermott

# Key Omissions Analysis

A breakdown of key players and why they missed the selection:

• Mohammad Rizwan — Dropped (selectors building towards Ghori and Nazir as future WKs)
• Saim Ayub — Injured (undergoing PCB medical rehabilitation)
• Fakhar Zaman — Injured (undergoing PCB medical rehabilitation)
• Imam-ul-Haq — Not selected (ODI focus on younger, fast-scoring openers)
• Iftikhar Ahmed — Dropped (fringe player losing ground)
• Mohammad Nawaz — Under PCB investigation (drug test issue)

# Pakistan vs Australia Head-to-Head in ODIs

With the ICC ODI World Cup coming up next year, the series presents a fantastic opportunity for both teams to build on team combinations and form in the white-ball format.

Pakistan's last ODI series against Australia at home was in 2022 — Pakistan won 2-1. Since then, Australia won the 2023 ODI World Cup (beating India in the final) and are the reigning world champions. This series is the first bilateral ODI meeting between the two sides since that World Cup.

Pakistan hold the advantage at home — their pace attack (Shaheen, Naseem, Haris) on the hard Rawalpindi and Lahore tracks will test Australia's depleted batting lineup.

# Pakistan's Likely Playing XI for 1st ODI

Based on squad balance and Rawalpindi pitches, Pakistan are expected to line up as:

1. Sahibzada Farhan (Right-hand opener)
2. Maaz Sadaqat (Left-hand opener)
3. Babar Azam (Right-hand No.3)
4. Shaheen Shah Afridi (c) (Captain / Lower order)
5. Salman Ali Agha (vc) (Allrounder No.5)
6. Abdul Samad (Right-hand finisher)
7. Shadab Khan (Leg-spin allrounder)
8. Muhammad Ghazi Ghori (wk) (Wicketkeeper)
9. Naseem Shah (Right-arm fast)
10. Haris Rauf (Right-arm fast)
11. Sufyan Moqim / Abrar Ahmed (Spin option)

# Series Prediction

The Australian team will be without their frontline members as they will be away for the Indian Premier League — Mitchell Marsh and Cameron Green are in the squad alongside Marnus Labuschagne, Josh Inglis and Adam Zampa.

Pakistan — with Babar, Farhan, Naseem, and Haris all back — are strong favorites against a depleted Australia side missing Cummins, Starc, Hazlewood, and Travis Head because of IPL commitments. The home advantage at Rawalpindi and Lahore, combined with Pakistan's full-strength white-ball squad, makes them heavy favorites.

Prediction: Pakistan to win the series 3-0.

# Conclusion: Pakistan Mean Business Against Australia

This squad sends a clear message: Pakistan are taking this Australia series seriously, and they are looking toward the 2027 ODI World Cup with a clear plan.

The senior stars are back — Babar, Naseem, Haris, Shadab. The exciting youth is included — Maaz Sadaqat, Sahibzada Farhan, and the three uncapped players. The future wicketkeeper is being built — Ghori and Nazir over Rizwan.

For Pakistan fans — still processing the 0-2 series defeat to Bangladesh in Tests — this Australia ODI series is an immediate opportunity to reset, rebuild and remind the cricket world that Pakistan's white-ball cricket is a different beast from their current Test team challenges.

Shaheen Shah Afridi leads. Babar Azam bats at his best. Naseem Shah and Haris Rauf bowl at 148+ kmph. Let's go!`
  },
  'pak-vs-ban-1st-test-day-1-report-2026': {
    title: "Bangladesh 301/4 at Stumps — Shanto’s Brilliant Century Frustrates Pakistan on Day 1",
    date: "May 8, 2026",
    tag: "Match Report",
    author: "Sarfraz Khan",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1200&auto=format&fit=crop",
    infographic: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop",
    content: `
Najmul Hossain Shanto scores 101 off 129 balls, Mominul Haque falls agonisingly on 91, and Babar Azam sits out injured — Bangladesh firmly in control after a dominant Day 1 of the 1st Test in Mirpur.

# Day 1 Summary
Bangladesh ended Day 1 at a commanding 301/4 after 85 overs. After Pakistan won the toss and surprisingly chose to field first on a Mirpur track that looked dry, the Bangladesh openers and middle order made them pay.

# Shanto’s Captain's Knock
Najmul Hossain Shanto was the star of the show, scoring a blistering 101 off just 129 balls. His innings was filled with aggressive intent, putting the Pakistan pacers on the backfoot from the start. He dominated the spinners and reached his century with a boundary before eventually falling to Shaheen Shah Afridi.

# Mominul Haque's Heartbreak
Mominul Haque played the perfect anchor role, batting with immense patience. He scored 91 off 200 balls and looked set for a well-deserved century before a lapse in concentration saw him caught behind. His partnership with Shanto was the backbone of the Bangladesh innings.

# Pakistan's Struggles
Pakistan’s bowling attack looked toothless in the absence of Babar Azam (who missed the match due to a knee injury). Shaheen Shah Afridi picked up two wickets but was expensive. The spin duo of Sajid Khan and Noman Ali failed to extract much purchase from the Day 1 surface, allowing the Bangladesh batters to dictate terms.

# Match Info
📅 8 May 2026
📍 Shere Bangla National Stadium, Mirpur
🏏 WTC 2025-27 · 1st Test

# Current Score
Bangladesh: 301/4 (85 overs)
Mushfiqur Rahim*: 48 (104b)
Litton Das*: 8 (35b)

Bangladesh clearly "won the day" and will look to push towards a 450+ total on Day 2.
    `
  },
  'babar-azam-3rd-century-psl-history': {
    title: "Long Live the King: Babar Azam is Still the Undisputed Face of the PSL",
    date: "April 20, 2026",
    tag: "Match Report",
    author: "Zalmi Media",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop",
    infographic: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1200&auto=format&fit=crop",
    infographic: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop",
    infographic: "https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=800&auto=format&fit=crop",
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
  },
  'babar-azam-form-impact-pakistan': {
    title: "The Ripple Effect: How Babar Azam’s Form Dictates Pakistan’s Destiny",
    metaTitle: "Babar Azam Form Impact on Pakistan Team Performance",
    metaDescription: "Discover how Babar Azam's batting form directly influences Pakistan's victories and defeats across all formats.",
    date: "April 23, 2026",
    tag: "Player Analysis",
    author: "PakCric Editorial",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200",
    infographic: "https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=800",
    content: `
Babar Azam's form is the single most critical factor in Pakistan's cricketing success. As the team's premier batter and anchor, his performance dictates the pace of the innings, provides a platform for finishers, and serves as a psychological barometer for the entire squad. When Babar is in form, Pakistan's win percentage in T20Is has been noted as approximately 70% in matches where he scores a half-century.

# The Ripple Effect: How Babar Azam’s Form Dictates Pakistan’s Destiny

In the world of Pakistan cricket, Babar Azam is more than just a player; he is the "anchor" upon which the nation's batting hopes rest. His form doesn't just impact his own statistics—it has a profound ripple effect on the team’s tactical approach, the confidence of the middle order, and the overall win-loss ratio.

# 1. The Psychological Anchor

Babar's presence at the crease provides a sense of security. His technically sound approach and trademark shots, like his world-class cover drive, act as a "mood" for the nation.

Confidence Boost: When Babar looks settled, it takes the pressure off his partners. Batsmen like Mohammad Rizwan or Salman Ali Agha can play their natural games knowing the "main pillar" is holding one end.

Collapses During Slumps: Statistical trends show that when Babar falls early or undergoes a slump (such as his recent 18-inning drought without a fifty), the top order often crumbles under pressure. Without his stabilizing influence, Pakistan’s middle order frequently faces "catastrophic starts".

# 2. Statistical Correlation with Victory

Babar’s personal milestones are directly linked to team triumphs.

Winning Cause Average: In T20I victories, Babar averages 42.00 with a strike rate of 132.3. All three of his T20I hundreds have resulted in Pakistan winning the match.

The 50+ Rule: Data from 2025 indicated that Pakistan won 27 out of 39 T20Is where Babar scored a half-century—a staggering 70% win rate.

Consistency Across Formats: In ODIs, where he averages over 53, his ability to bat deep allows Pakistan to consistently post or chase totals above 280, which is their typical "safe zone".

# 3. Tactical and Structural Impact

Babar’s role has evolved into that of a middle-order anchor (often at No. 3 or No. 4) designed to safeguard the team against pace and hard-length bowling.

Powerplay vs. Middle Overs: While critics often point to his strike rate in the powerplay, his true value lies in his ability to rotate strike and punish loose balls through the middle overs, maintaining a steady scoring rate.

The "Pillar" Effect: Former greats like Mohammad Amir have noted that the team is "incomplete" without him, as he provides the structure that allows explosive hitters to take risks later in the innings.

# 4. Impact of the "Slump"

When Babar is out of form, the cracks in the Pakistan domestic system and the fragile middle order become glaringly obvious.

Loss of Direction: Critics argue that during his slumps, the team often loses its sense of direction, going into a "shell" when things get tough.

Batting Fragility: Without his runs, the burden on younger players increases exponentially, often leading to technical failures and psychological burnout across the squad.

# Conclusion

Babar Azam remains the heartbeat of Pakistan's batting lineup. While the team possesses individual brilliance in its bowling attack, it is Babar's bat that provides the "oxygen" for the team to survive long innings and high-pressure chases. For Pakistan to remain a top-tier side in the 2025–2027 WTC cycle, a firing Babar Azam is not a luxury—it is a necessity.
    `
  }
};

const renderFormattedText = (text: string) => {
  const parts = text.split('**');
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return (
        <strong key={index} className="font-extrabold text-white">
          <LinkText text={part} />
        </strong>
      );
    }
    return <LinkText key={index} text={part} />;
  });
};

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = ARTICLES[id || ''] || ARTICLES['pakistan-vs-bangladesh-test-series-2026'];

  return (
    <div className="max-w-4xl mx-auto py-6 md:py-12 px-4 md:px-6">
      <Helmet>
        <title>{`Pakistan Cricket News Today – Latest Updates 2026 | ${article.title}`}</title>
        <meta name="description" content={article.metaDescription || `Get the latest Pakistan cricket news, team updates, and breaking stories. Now: ${article.title}.`} />
        <meta name="keywords" content={`Pakistan cricket news, ${article.title.split(' ').slice(0, 3).join(', ')}, cricket updates`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`Pakistan Cricket News Today – Latest Updates 2026 | ${article.title}`} />
        <meta property="og:description" content={article.metaDescription || `Get the latest Pakistan cricket news, team updates, and breaking stories. Now: ${article.title}.`} />
        <meta property="og:image" content={article.image || "/favicon.svg"} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={article.metaTitle || article.title} />
        <meta property="twitter:description" content={article.metaDescription || article.content.split('\n')[0].substring(0, 160).trim()} />
        <meta property="twitter:image" content={article.image || "/favicon.svg"} />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "${article.title.replace(/"/g, '\\"')}",
              "description": "${(article.metaDescription || article.content.split('\\n')[0].substring(0, 160).trim()).replace(/"/g, '\\"')}",
              "author": {
                "@type": "Person",
                "name": "${article.author}"
              },
              "publisher": {
                "@type": "Organization",
                "name": "PakCric Schedule",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://ais-dev-7nxqgzlwox4porwgparb2l-763834333617.asia-southeast1.run.app/favicon.svg"
                }
              },
              "datePublished": "${article.date}",
              "dateModified": "2026-04-23"
            }
          `}
        </script>
      </Helmet>
      <button 
        onClick={() => navigate('/news')}
        className="inline-flex items-center gap-2 text-white font-normal uppercase tracking-widest text-[9px] md:text-[10px] mb-6 md:mb-8 hover:translate-x-[-4px] transition-transform"
      >
        <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" /> Back to News
      </button>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card-bg border border-card-border rounded-2xl md:rounded-[40px] overflow-hidden shadow-2xl"
      >
        <div className="h-48 sm:h-64 md:h-96 relative flex items-end overflow-hidden group">
          {article.image ? (
            <>
              <img 
                src={article.image} 
                alt={article.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-pak-green to-[#00220e]" />
          )}
          <Newspaper className="w-24 h-24 md:w-32 md:h-32 text-white/5 absolute -right-6 -bottom-6 md:-right-8 md:-bottom-8 rotate-12" />
          <div className="p-6 md:p-12 relative z-10 w-full">
            <span className="inline-block px-3 py-1 bg-pak-green text-white rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-[2px] md:tracking-[3px] mb-3 md:mb-4 border border-white/10 leading-none">
              Latest Pakistan Cricket News & Updates
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter text-white leading-tight md:leading-none">
              <LinkText text={article.title} />
            </h1>
          </div>
        </div>

        <div className="p-6 md:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6 mb-8 md:mb-10 pb-6 border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                <span className="text-[9px] md:text-[10px] font-normal uppercase tracking-widest text-neutral-400">{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                <span className="text-[9px] md:text-[10px] font-normal uppercase tracking-widest text-neutral-400">{article.author}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 ml-auto">
              <SaveForOfflineButton 
                id={`news-${id || 'default'}`} 
                label="Save News" 
                variant="icon"
              />
              <ShareButton 
                title={article.title}
                text={article.metaDescription || article.title}
                url={window.location.href}
                variant="icon"
              />
            </div>
          </div>

          <div className="prose prose-invert prose-neutral max-w-none">
             {article.content.split('\n\n').map((paragraph: string, idx: number) => {
               // Ad Insertions Logic
               const shouldInsertAd = idx === 1 || idx === 4 || idx === 8;
               const adToInsert = shouldInsertAd ? (
                 <AdPlaceholder key={`ad-${idx}`} type="in-article" className="my-8 md:my-10" />
               ) : null;

               const trimmedPara = paragraph.trim();

               // Parse headers
               if (trimmedPara.startsWith('#')) {
                 const match = trimmedPara.match(/^(#{1,6})\s+(.*)$/s);
                 if (match) {
                   const level = match[1].length;
                   const text = match[2];
                   if (level === 1 || level === 2) {
                     return (
                       <React.Fragment key={idx}>
                         {adToInsert}
                         <h2 className="text-xl md:text-3xl font-display font-black text-white uppercase tracking-tight mt-10 md:mt-14 mb-4 md:mb-6 border-l-4 border-pak-green pl-4 leading-tight">
                           {renderFormattedText(text)}
                         </h2>
                       </React.Fragment>
                     );
                   } else {
                     return (
                       <React.Fragment key={idx}>
                         {adToInsert}
                         <h3 className="text-lg md:text-xl font-display font-bold text-pak-green uppercase tracking-wide mt-8 md:mt-12 mb-3 md:mb-4">
                           {renderFormattedText(text)}
                         </h3>
                       </React.Fragment>
                     );
                   }
                 }
               }

               // Parse table
               if (trimmedPara.startsWith('|')) {
                 const lines = trimmedPara.split('\n').map(l => l.trim()).filter(l => l !== '');
                 if (lines.length >= 2) {
                   const headers = lines[0].split('|').map(s => s.trim()).filter((_, i) => i > 0 && i < lines[0].split('|').length - 1);
                   const isSeparator = lines[1].includes('-') && lines[1].includes('|');
                   const bodyLines = isSeparator ? lines.slice(2) : lines.slice(1);
                   
                   const rows = bodyLines.map(line => {
                     return line.split('|').map(s => s.trim()).filter((_, i) => i > 0 && i < line.split('|').length - 1);
                   });

                   return (
                     <React.Fragment key={idx}>
                       {adToInsert}
                       <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02] my-6 max-w-full">
                         <table className="w-full text-left border-collapse min-w-[500px]">
                           <thead>
                             <tr className="bg-white/5 border-b border-white/10">
                               {headers.map((h, i) => (
                                 <th key={i} className="px-5 py-4 text-[10px] uppercase tracking-widest font-bold text-pak-green">
                                   {renderFormattedText(h)}
                                 </th>
                               ))}
                             </tr>
                           </thead>
                           <tbody className="divide-y divide-white/5 text-xs md:text-sm">
                             {rows.map((row, rIdx) => (
                               <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                                 {row.map((cell, cIdx) => (
                                   <td key={cIdx} className="px-5 py-3.5 text-neutral-300 font-medium">
                                     {renderFormattedText(cell)}
                                   </td>
                                 ))}
                               </tr>
                             ))}
                           </tbody>
                         </table>
                       </div>
                     </React.Fragment>
                   );
                 }
               }

               // Parse images in content
               if (trimmedPara.startsWith('<img')) {
                 const srcMatch = trimmedPara.match(/src="([^"]+)"/);
                 const altMatch = trimmedPara.match(/alt="([^"]+)"/);
                 const src = srcMatch ? srcMatch[1] : '';
                 const alt = altMatch ? altMatch[1] : '';

                 return (
                   <React.Fragment key={idx}>
                     {adToInsert}
                     <div className="relative rounded-2xl md:rounded-[32px] overflow-hidden my-8 border border-white/10 group shadow-lg">
                       <img 
                         src={src} 
                         alt={alt || "Match Visual"} 
                         className="w-full h-auto max-h-[450px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                         referrerPolicy="no-referrer"
                         loading="lazy"
                       />
                       {alt && (
                         <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-center">
                           <span className="text-white font-medium text-xs md:text-sm tracking-wide">{alt}</span>
                         </div>
                       )}
                     </div>
                   </React.Fragment>
                 );
               }

               // Parse bulleted / numbered list lines
               const lines = paragraph.split('\n');
               const hasListFeature = lines.some(line => {
                 const l = line.trim();
                 return l.startsWith('•') || l.startsWith('-') || l.startsWith('*') || /^\d+\.\s/.test(l);
               });

               if (hasListFeature) {
                 const elements: React.ReactNode[] = [];
                 let currentList: { type: 'bullet' | 'number'; items: string[] } | null = null;

                 const commitList = (key: string) => {
                   if (!currentList) return;
                   const TagName = currentList.type === 'bullet' ? 'ul' : 'ol';
                   const listStyleClass = currentList.type === 'bullet' 
                     ? 'list-disc pl-6 space-y-2.5 my-4 text-neutral-300 text-base md:text-lg animate-fade-in' 
                     : 'list-decimal pl-6 space-y-2.5 my-4 text-neutral-300 text-base md:text-lg animate-fade-in';
                   
                   elements.push(
                     <TagName key={key} className={listStyleClass}>
                       {currentList.items.map((item, itemIdx) => (
                         <li key={itemIdx} className="leading-relaxed font-sans font-normal">
                           {renderFormattedText(item)}
                         </li>
                       ))}
                     </TagName>
                   );
                   currentList = null;
                 };

                 lines.forEach((line, lineIdx) => {
                   const trimmedLine = line.trim();
                   if (trimmedLine === '') return;

                   const isBullet = trimmedLine.startsWith('•') || trimmedLine.startsWith('-') || trimmedLine.startsWith('*');
                   const isNumber = /^\d+\.\s/.test(trimmedLine);

                   if (isBullet) {
                     if (currentList && currentList.type !== 'bullet') {
                       commitList(`list-switch-${lineIdx}`);
                     }
                     if (!currentList) {
                       currentList = { type: 'bullet', items: [] };
                     }
                     const cleanItem = trimmedLine.replace(/^[•\-*]\s+/, '').trim();
                     currentList.items.push(cleanItem);
                   } else if (isNumber) {
                     if (currentList && currentList.type !== 'number') {
                       commitList(`list-switch-${lineIdx}`);
                     }
                     if (!currentList) {
                       currentList = { type: 'number', items: [] };
                     }
                     const cleanItem = trimmedLine.replace(/^\d+\.\s+/, '').trim();
                     currentList.items.push(cleanItem);
                   } else {
                     commitList(`list-commit-${lineIdx}`);
                     elements.push(
                       <p key={`p-${lineIdx}`} className="text-neutral-300 leading-relaxed mb-4 text-base md:text-lg font-sans font-normal">
                         {renderFormattedText(trimmedLine)}
                       </p>
                     );
                   }
                 });

                 commitList(`list-final`);

                 return (
                   <React.Fragment key={idx}>
                     {adToInsert}
                     <div className="space-y-2">
                       {elements}
                     </div>
                   </React.Fragment>
                 );
               }

               // Standard paragraph
               return (
                 <React.Fragment key={idx}>
                   {adToInsert}
                   <p className="text-neutral-300 leading-relaxed mb-5 md:mb-6 text-base md:text-lg font-sans font-normal">
                     {renderFormattedText(trimmedPara)}
                   </p>
                 </React.Fragment>
               );
             })}
          </div>

          {article.infographic && (
            <div className="mt-10 md:mt-12 p-1 bg-white/5 border border-white/5 rounded-2xl md:rounded-[32px] overflow-hidden shadow-inner">
               <div className="bg-neutral-900 rounded-xl md:rounded-[28px] p-5 md:p-6 text-center border border-white/5 mb-1">
                 <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[2px] md:tracking-[4px] text-pak-green">Visual Analytics</span>
                 <h3 className="text-lg md:text-xl font-display font-bold text-white uppercase mt-1">Data Infographic</h3>
               </div>
               <img 
                src={article.infographic} 
                alt="Article Infographic" 
                className="w-full h-auto object-cover rounded-xl md:rounded-[28px]"
                referrerPolicy="no-referrer"
                loading="lazy"
               />
            </div>
          )}

          <div className="mt-12 md:mt-16 pt-8 border-t border-white/5">
               <h4 className="text-xs md:text-sm font-normal uppercase tracking-widest text-white mb-5 md:mb-6">What do you think?</h4>
             <div className="bg-white/5 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/5">
               <p className="text-[11px] md:text-sm text-neutral-400 italic mb-5 md:mb-6 font-normal leading-relaxed">Should Azan Awais debut in the first Test, or should Pakistan stick to the experienced opening pair? Drop your Playing XI in the comments below!</p>
               <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                 <input 
                   type="text" 
                   placeholder="ADD A COMMENT..."
                   className="flex-1 bg-black/40 border border-white/10 rounded-xl px-5 md:px-6 py-3 text-[9px] md:text-[10px] font-normal uppercase tracking-widest focus:outline-none focus:border-white transition-colors"
                 />
                 <button className="px-6 py-3 bg-pak-green text-white rounded-xl text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-600 transition-all text-center shadow-lg shadow-pak-green/20">
                   Post
                 </button>
               </div>
             </div>
          </div>
        </div>
      </motion.article>

      <InternalLinkSection />
    </div>
  );
}
