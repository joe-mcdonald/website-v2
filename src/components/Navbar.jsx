import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode, setDarkMode } = useContext(ThemeContext);


  const handleAboutClick = () => {
    if (location.pathname === "/") {
      const about = document.getElementById("about");
      if (about) about.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "about", skipIntro: true } });
    }
  };

  const handleContactClick = () => {
    if (location.pathname === "/") {
      const contact = document.getElementById("contact");
      if (contact) contact.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "contact", skipIntro: true } });
    }
  };

  const handleHomeClick = () => {
    navigate("/", { state: { skipIntro: true, scrollToTop: true } });
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#e2e8f0] dark:bg-[#050a23] backdrop-blur-md shadow z-50">
      <div className="w-full px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-sans font-bold text-[#0f172a] dark:text-white">Joe McDonald</div>
        <nav className="space-x-6 text-sm ">
          <button onClick={handleHomeClick} className="navbar-text-element font-sans">Home</button>
          <button onClick={handleAboutClick} className="navbar-text-element font-sans">About</button>
          <Link to="/projects" className="navbar-text-element font-sans">Projects</Link>
          <button onClick={handleContactClick} className="navbar-text-element font-sans">Contact</button>
          <button onClick={() => setDarkMode(!darkMode)} className="rounded px-2 py-1 text-xl ">{darkMode ? '🌙' : '☀️'}</button>
        </nav>
      </div>
    </header>
  );
}
