import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";
import homeImages from "/src/components/HomeImages.jsx";

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
    <div className="text-[#0f172a] dark:text-white bg-weave bg-white dark:bg-[#0a1e40]"> 
      <div className="relative min-h-screen w-full overflow-hidden">

        {/* Welcome text */}
        <div
          className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-[9999] transition-opacity duration-1000 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <h1 className="text-4xl md:text-6xl font-bold font-sans text-[#0f172a] dark:text-white">{text}</h1>
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
              <h2 className="text-4xl font-bold font-sans text-[#0f172a] dark:text-white">I'm Joe!</h2>
            </div>
          </section>
          <About />
          <div className="w-full max-w-6xl px-6 flex flex-col bg-[#e2e8f0] dark:bg-[#050a23] shadow-lg">
            <div className="flex justify-center w-full bg-inherit">
              <div className="h-1 w-[80%] bg-gray-700 dark:bg-gray-400" />
            </div>  
          </div>
          <Experience />
          <div className="w-full max-w-6xl px-6 flex flex-col bg-[#e2e8f0] dark:bg-[#050a23] shadow-lg">
            <div className="flex justify-center w-full bg-inherit">
              <div className="h-1 w-[80%] bg-gray-700 dark:bg-gray-400" />
            </div>  
          </div>
          <Contact />
        </div>
        <footer className="w-full text-center py-4 bg-[#e2e8f0] dark:bg-[#050a23] shadow-lg text-xs text-gray-700 dark:text-gray-300">
          <p>Optimized for Chrome, may be buggy on other browsers</p>
        </footer>
      </div>
    </div>
  );
}
