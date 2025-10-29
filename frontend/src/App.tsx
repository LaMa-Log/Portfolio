import React, { useRef, useState, useEffect } from "react";
import Home from "./components/body/home";
import Profil from "./components/body/profil";
import Experience from "./components/body/experience";
import Project from "./components/body/project";
import Competence from "./components/body/competence";
import Contact from "./components/body/contact";
import FooterNavs from "./components/header/FooterNavs";
import Footer from "./components/header/footer";
import logo from "./assets/logo.jpg";
import "./App.css";

function App() {
  const topRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState("Accueil");
  const [isOpen, setIsOpen] = useState(false);

  // Liste des sections
  const navItems = [
    { name: "Accueil", id: "accueil" },
    { name: "Profil", id: "profil" },
    { name: "Expérience", id: "experience" },
    { name: "Compétence", id: "competence" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  // Scroll fluide
  const handleClick = (name: string, id: string) => {
    setActiveItem(name);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // Suivre la section active selon le scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          const name = visibleSection.target.getAttribute("data-name");
          if (name) setActiveItem(name);
        }
      },
      { threshold: 0.6 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-gray-900  text-gray-100">
      <div ref={topRef}>

        {/* ✅ Navbar incluse ici */}
        <header className="bg-white dark:bg-neutral-800 shadow-md sticky top-0 z-50 w-full">
          <nav className="w-full max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 py-3">
            {/* Logo */}
            <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-indigo-600 dark:text-white">
              <img src={logo} alt="logo" className="w-8 h-8 rounded-full" />
              Portfolio
            </div>

            {/* Bouton menu mobile */}
            <button
               className= "block [@media(min-width:850px)]:hidden text-gray-600 dark:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>

            {/* Liens du menu */}
            <ul
              className={`flex flex-col w-full [@media(min-width:850px)]:w-auto items-center [@media(min-width:850px)]:flex-row gap-4 [@media(min-width:850px)]:gap-8 mt-4 [@media(min-width:850px)]:mt-0 transition-all duration-300 ease-in-out ${
                isOpen
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0 [@media(min-width:850px)]:max-h-none [@media(min-width:850px)]:opacity-100"
              } overflow-hidden [@media(min-width:850px)]:overflow-visible`}

            >
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleClick(item.name, item.id)}
                    className={`block px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                      activeItem === item.name
                        ? "text-indigo-600 font-semibold"
                        : "text-gray-600 dark:text-gray-300 hover:text-indigo-500"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/*Sections principales */}
        <section id="accueil" data-name="Accueil" className="min-h-screen scroll-mt-[350px] md:scroll-mt-[120px]">
          <Home />
        </section>

        <section id="profil" data-name="Profil" className="min-h-screen scroll-mt-[400px] md:scroll-mt-[120px]">
          <Profil />
        </section>

        <section id="experience" data-name="Expérience" className="min-h-screen scroll-mt-[400px] md:scroll-mt-[120px]">
          <Experience />
        </section>

        <section id="competence" data-name="Compétence" className="min-h-screen scroll-mt-[400px] md:scroll-mt-[120px]">
          <Competence />
        </section>

        <section id="projects" data-name="Projects" className="min-h-screen scroll-mt-[400px] md:scroll-mt-[120px]">
          <Project />
        </section>

        <section id="contact" data-name="Contact" className="min-h-screen scroll-mt-[400px] md:scroll-mt-[120px]">
          <Contact />
        </section>

        {/*  Footer */}
        <FooterNavs scrollToTop={() => topRef.current?.scrollIntoView({ behavior: "smooth" })} />
        <Footer />
      </div>
    </main>
  );
}

export default App;
