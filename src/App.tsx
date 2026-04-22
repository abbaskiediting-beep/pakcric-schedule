import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Squads from './pages/Squads';
import Rankings from './pages/Rankings';
import RankingsT20 from './pages/rankings/RankingsT20';
import RankingsODI from './pages/rankings/RankingsODI';
import RankingsTest from './pages/rankings/RankingsTest';
import T20Batting from './pages/rankings/T20Batting';
import T20Bowling from './pages/rankings/T20Bowling';
import T20Allrounder from './pages/rankings/T20Allrounder';
import ODIBatting from './pages/rankings/ODIBatting';
import ODIBowling from './pages/rankings/ODIBowling';
import ODIAllrounder from './pages/rankings/ODIAllrounder';
import TestBatting from './pages/rankings/TestBatting';
import TestBowling from './pages/rankings/TestBowling';
import TestAllrounder from './pages/rankings/TestAllrounder';
import SeriesDetail from './pages/SeriesDetail';
import MatchDetail from './pages/MatchDetail';
import Blogs from './pages/Blogs';
import PakistanVsBangladesh2026Schedule from './pages/PakistanVsBangladesh2026Schedule';
import PakistanTourBangladeshTestBlog from './pages/PakistanTourBangladeshTestBlog';
import PakistanTourBangladeshSquadBlog from './pages/PakistanTourBangladeshSquadBlog';
import UpcomingSeriesArticle from './pages/UpcomingSeriesArticle';
import PakistanNextTourDetails from './pages/PakistanNextTourDetails';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

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
      <div className="min-h-screen bg-bg text-ink flex flex-col font-sans transition-colors duration-300">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <Nav />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/squads" element={<Squads />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/icc-t20-ranking-2026" element={<RankingsT20 />} />
            <Route path="/icc-odi-ranking-2026" element={<RankingsODI />} />
            <Route path="/icc-test-ranking-2026" element={<RankingsTest />} />
            
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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/series/:slug" element={<SeriesDetail />} />
            <Route path="/match/:id" element={<MatchDetail />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/pakistan-vs-bangladesh-2026-schedule" element={<PakistanVsBangladesh2026Schedule />} />
            <Route path="/pakistan-tour-bangladesh-test-2026" element={<PakistanTourBangladeshTestBlog />} />
            <Route path="/pakistan-tour-bangladesh-squad-2026" element={<PakistanTourBangladeshSquadBlog />} />
            <Route path="/pakistan-upcoming-series-full-schedule" element={<UpcomingSeriesArticle />} />
            <Route path="/pakistan-next-tour-details" element={<PakistanNextTourDetails />} />
          </Routes>
        </main>

        <footer className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8 text-neutral-600 text-[10px] font-bold uppercase tracking-[2px] border-t border-card-border mt-12">
          <div className="flex flex-col items-center md:items-start gap-4">
             <span className="text-white text-lg font-display font-bold">PAKISTAN CRICKET HUB</span>
             <span>© 2026 Official Fan Portal</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
             <Link to="/about" className="hover:text-white transition-colors">About</Link>
             <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
             <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
             <Link to="/news" className="hover:text-white transition-colors">News</Link>
             <Link to="/blogs" className="hover:text-white transition-colors">Blogs</Link>
             <Link to="/pakistan-vs-bangladesh-2026-schedule" className="hover:text-white transition-colors whitespace-nowrap">PAK vs BAN 2026 Schedule</Link>
             <Link to="/pakistan-upcoming-series-full-schedule" className="hover:text-white transition-colors whitespace-nowrap">Upcoming Series Full Schedule</Link>
             <Link to="/pakistan-next-tour-details" className="hover:text-white transition-colors whitespace-nowrap">Pakistan Next Tour Details</Link>
          </div>
          <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors">Twitter</a>
             <a href="#" className="hover:text-white transition-colors">Instagram</a>
             <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}


