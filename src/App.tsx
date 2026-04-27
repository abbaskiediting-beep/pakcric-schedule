import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Nav from './components/Nav';
import MobileTabBar from './components/MobileTabBar';

// Lazy load pages for better bundle splitting and initial load time
const Home = lazy(() => import('./pages/Home'));
const Schedule = lazy(() => import('./pages/Schedule'));
const Squads = lazy(() => import('./pages/Squads'));
const Rankings = lazy(() => import('./pages/Rankings'));
const RankingsT20 = lazy(() => import('./pages/rankings/RankingsT20'));
const RankingsODI = lazy(() => import('./pages/rankings/RankingsODI'));
const RankingsTest = lazy(() => import('./pages/rankings/RankingsTest'));
const T20Batting = lazy(() => import('./pages/rankings/T20Batting'));
const T20Bowling = lazy(() => import('./pages/rankings/T20Bowling'));
const T20Allrounder = lazy(() => import('./pages/rankings/T20Allrounder'));
const ODIBatting = lazy(() => import('./pages/rankings/ODIBatting'));
const ODIBowling = lazy(() => import('./pages/rankings/ODIBowling'));
const ODIAllrounder = lazy(() => import('./pages/rankings/ODIAllrounder'));
const TestBatting = lazy(() => import('./pages/rankings/TestBatting'));
const TestBowling = lazy(() => import('./pages/rankings/TestBowling'));
const TestAllrounder = lazy(() => import('./pages/rankings/TestAllrounder'));
const SeriesDetail = lazy(() => import('./pages/SeriesDetail'));
const MatchDetail = lazy(() => import('./pages/MatchDetail'));
const Blogs = lazy(() => import('./pages/Blogs'));
const PakistanVsBangladesh2026Schedule = lazy(() => import('./pages/PakistanVsBangladesh2026Schedule'));
const RedBallResilienceBlog = lazy(() => import('./pages/RedBallResilienceBlog'));
const PakistanTourBangladeshTestBlog = lazy(() => import('./pages/PakistanTourBangladeshTestBlog'));
const PakistanTourBangladeshSquadBlog = lazy(() => import('./pages/PakistanTourBangladeshSquadBlog'));
const UpcomingSeriesArticle = lazy(() => import('./pages/UpcomingSeriesArticle'));
const PakistanNextTourDetails = lazy(() => import('./pages/PakistanNextTourDetails'));
const WTCStandings = lazy(() => import('./pages/rankings/WTCStandings'));
const MatchPreviewBangladesh = lazy(() => import('./pages/MatchPreviewBangladesh'));
const SquadIntelligence = lazy(() => import('./pages/SquadIntelligence'));
const News = lazy(() => import('./pages/News'));
const NewsDetail = lazy(() => import('./pages/NewsDetail'));
const PlayerStats = lazy(() => import('./pages/PlayerStats'));
const AllPlayersStats = lazy(() => import('./pages/AllPlayersStats'));
const AuthorProfile = lazy(() => import('./pages/AuthorProfile'));
const PSL11RunScorersBlog = lazy(() => import('./pages/PSL11RunScorersBlog'));
const PSL11WicketTakersBlog = lazy(() => import('./pages/PSL11WicketTakersBlog'));
const PSL11QualifierPreview = lazy(() => import('./pages/PSL11QualifierPreview'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-8 h-8 border-4 border-pak-green border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const SEO = () => {
  const location = useLocation();
  const baseUrl = 'https://pakcric-schedule.online';
  const canonicalUrl = `${baseUrl}${location.pathname === '/' ? '' : location.pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
    </Helmet>
  );
};

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <Router>
      <SEO />
      <div className="min-h-screen bg-bg text-ink flex flex-col font-sans transition-colors duration-300 pb-16 md:pb-0">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <Nav />
        
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/squads" element={<Squads />} />
              <Route path="/rankings" element={<Rankings />} />
              <Route path="/icc-t20-ranking-2026" element={<RankingsT20 />} />
              <Route path="/icc-odi-ranking-2026" element={<RankingsODI />} />
              <Route path="/icc-test-ranking-2026" element={<RankingsTest />} />
              <Route path="/icc-wtc-projections-2026" element={<WTCStandings />} />
              
              {/* Player Rankings */}
              <Route path="/rankings/t20-batting" element={<T20Batting />} />
              <Route path="/rankings/t20-bowling" element={<T20Bowling />} />
              <Route path="/rankings/t20-allrounder" element={<T20Allrounder />} />
              <Route path="/rankings/odi-batting" element={<ODIBatting />} />
              <Route path="/rankings/odi-bowling" element={<ODIBowling />} />
              <Route path="/rankings/odi-allrounder" element={<ODIAllrounder />} />
              <Route path="/rankings/test-batting" element={<TestBatting />} />
              <Route path="/rankings/test-bowling" element={<TestBowling />} />
              <Route path="/rankings/test-allrounder" element={<TestAllrounder />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/player/:name" element={<PlayerStats />} />
              <Route path="/author/:authorId" element={<AuthorProfile />} />
              <Route path="/players-stats" element={<AllPlayersStats />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/series/:slug" element={<SeriesDetail />} />
              <Route path="/match/:id" element={<MatchDetail />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/match-preview-dhaka-test" element={<MatchPreviewBangladesh />} />
              <Route path="/blogs/squad-selection-intelligence" element={<SquadIntelligence />} />
              <Route path="/pakistan-vs-bangladesh-2026-schedule" element={<PakistanVsBangladesh2026Schedule />} />
              <Route path="/red-ball-resilience-overview-2026" element={<RedBallResilienceBlog />} />
              <Route path="/pakistan-tour-bangladesh-test-2026" element={<PakistanTourBangladeshTestBlog />} />
              <Route path="/pakistan-tour-bangladesh-squad-2026" element={<PakistanTourBangladeshSquadBlog />} />
              <Route path="/psl-11-top-run-scorers-2026" element={<PSL11RunScorersBlog />} />
              <Route path="/psl-11-top-wicket-takers-2026" element={<PSL11WicketTakersBlog />} />
              <Route path="/psl-11-qualifier-1-showdown-2026" element={<PSL11QualifierPreview />} />
              <Route path="/pakistan-upcoming-series-full-schedule" element={<UpcomingSeriesArticle />} />
              <Route path="/pakistan-next-tour-details" element={<PakistanNextTourDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <footer className="container mx-auto px-4 md:px-6 py-12 flex flex-col gap-12 border-t border-card-border mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col gap-6">
               <span className="text-white text-lg font-display font-bold">PAKCRIC SCHEDULE</span>
               <p className="text-neutral-500 text-[11px] font-medium leading-relaxed uppercase tracking-[1px]">
                 Your ultimate destination for Pakistan cricket schedules, rankings, and in-depth analysis. Stay connected with the Green Shirts.
               </p>
               <span className="text-neutral-600 text-[10px] font-bold uppercase tracking-[2px]">© 2026 Official Fan Portal</span>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-white text-[12px] font-bold uppercase tracking-[3px]">Internal Links</span>
              <div className="grid grid-cols-2 gap-4 text-neutral-600 text-[10px] font-bold uppercase tracking-[2px]">
                <Link to="/schedule" className="hover:text-white transition-colors">Schedule</Link>
                <Link to="/rankings" className="hover:text-white transition-colors">ICC Rankings</Link>
                <Link to="/icc-wtc-projections-2026" className="hover:text-white transition-colors">WTC Standings</Link>
                <Link to="/squads" className="hover:text-white transition-colors">Squads</Link>
                <Link to="/news" className="hover:text-white transition-colors">Latest News</Link>
                <Link to="/blogs" className="hover:text-white transition-colors">Expert Blogs</Link>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-white text-[12px] font-bold uppercase tracking-[3px]">Cricket Resources</span>
              <div className="grid grid-cols-2 gap-4 text-neutral-600 text-[10px] font-bold uppercase tracking-[2px]">
                <a href="https://www.espncricinfo.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ESPNcricinfo</a>
                <a href="https://www.cricbuzz.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Cricbuzz</a>
                <a href="https://www.pcb.com.pk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">PCB Official</a>
                <a href="https://www.icc-cricket.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ICC Official</a>
                <a href="https://www.cricinfo.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">CricInfo</a>
                <a href="https://www.geosuper.tv" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Geo Super</a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-white text-[12px] font-bold uppercase tracking-[3px]">Follow Us</span>
              <div className="flex gap-6 text-neutral-600 text-[10px] font-bold uppercase tracking-[2px]">
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">YouTube</a>
              </div>
            </div>
          </div>
        </footer>
        <MobileTabBar />
      </div>
    </Router>
  );
}


