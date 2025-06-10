import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "/src/components/Navbar.jsx";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";
import homeImages from "/src/components/HomeImages.jsx";
import ImagePopup from "../components/ImagePopup";
import canassist1 from "/src/assets/canassist1.jpeg";
import canassist2 from "/src/assets/canassist2.jpeg";

export default function Home() {
  const location = useLocation();
  const [text, setText] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeInMain, setFadeInMain] = useState(false);

  const fullText = "Welcome to my site!";

  useEffect(() => {
    const skipIntro = location.state?.skipIntro;

    if (skipIntro) {
      setFadeOut(true);      // hide intro
      setFadeInMain(true);   // show main content
      return;
    }

    setText(""); // reset text for animation

    let i = 0;
    const interval = setInterval(() => {
      setText((prev) => {
        if (i < fullText.length) {
          const nextChar = fullText[i];
          i++;
          return prev + nextChar;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setFadeInMain(true);
          }, 400);
          return prev;
        }
      });
    }, 60);

    return () => clearInterval(interval);

  }, [location.key]);


  // Scroll effects
  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo === "about") {
      const section = document.getElementById("about");
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100); // wait for render
      }
    } else if (scrollTo === "contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }, 100); // wait for render
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const homeImage = homeImages[Math.floor(Math.random() * homeImages.length)];

  return (    
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* Welcome text */}
      <div
        className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-[9999] transition-opacity duration-1000 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <h1 className="text-4xl md:text-6xl font-bold font-sans text-white">{text}</h1>
      </div>

      {/* Main homepage content */}
      <div className={`relative inset-0 flex flex-col items-center justify-center px-6 py-12 transition-opacity duration-1000 ${fadeInMain ? "opacity-100" : "opacity-0"}`}>
        <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-16 pt-32 md:pt-16">
          {/* Left: Image */}
          <div className="w-64 h-64">
            <img
              src={homeImage}
              alt="Joe McDonald"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right: Text */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold font-sans text-white">I'm Joe!</h2>
          </div>
        </section>
        <About />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}
