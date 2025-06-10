import { Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'
import Navbar from "/src/components/Navbar.jsx";
import { useNavigate, useLocation } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/", { state: { skipIntro: true } });
    }
  };


  const handleAboutClick = () => {
    if (location.pathname === '/') {
      const section = document.getElementById("about");
      if (section) section.scrollIntoView({ behavior: "smooth"});
    } else {
      navigate("/", { state: { scrollTo: "about", skipIntro: true } });
    }
  };

  const handleContactClick = () => {
    if (location.pathname === '/') {
      const section = document.getElementById("contact");
      if (section) section.scrollIntoView({ behavior: "smooth"});
    } else {
      navigate("/", { state: { scrollTo: "contact", skipIntro: true } });
    }
  };

  return (
    <div className="min-h-screen w-full">
      <Navbar onAboutClick={handleAboutClick} onContactClick={handleContactClick} onHomeClick={handleHomeClick}/>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/projects"
            element={
              <PageWrapper>
                <Projects />
              </PageWrapper>
            }
          />
          <Route
            path="/projects/:slug"
            element={
              <PageWrapper>
                <ProjectDetail />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App