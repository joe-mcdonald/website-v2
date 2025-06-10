import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

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
    <header className="fixed top-0 left-0 w-full bg-[#050a23]/90 backdrop-blur-md shadow z-50">
      <div className="w-full px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-sans font-bold">Joe McDonald</div>
        <nav className="space-x-6 text-sm">
          {/* <Link to="/" state={{ skipIntro: true, scrollToTop: true }} className="navbar-text-element">Home</Link> */}
          <button onClick={handleHomeClick} className="navbar-text-element font-sans">Home</button>
          {/* <button onClick={onAboutClick} className="navbar-text-element">About</button> */}
          <button onClick={handleAboutClick} className="navbar-text-element font-sans">About</button>
          <Link to="/projects" className="navbar-text-element">Projects</Link>
          {/* <button onClick={onContactClick} className="navbar-text-element">Contact</button> */}
          <button onClick={handleContactClick} className="navbar-text-element font-sans">Contact</button>
        </nav>
      </div>
    </header>
  );
}
