import React, { useRef, useState, useEffect } from "react";
import Home from "./components/body/home";
import Profil from "./components/body/profil";
import Experience from "./components/body/experience";
import Project from "./components/body/project";
import Competence from "./components/body/competence";
import Contact from "./components/body/contact";
import FooterNavs from "./components/header/FooterNavs";
import Footer from "./components/header/footer";
import Side from "./components/header/side"
import "./App.css";

function App() {
  const topRef = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-gray-900  text-gray-100">
      <div ref={topRef}>

        {/*Navbar incluse ici */}
        <Side />
        
        {/*Sections principales */}
        <section id="accueil" data-name="Accueil" className="min-h-screen scroll-mt-[350px] md:scroll-mt-[120px]">
          <Home />
        </section>

        <section id="profil" data-name="Profil" className="min-h-screen scroll-mt-[400px] md:scroll-mt-[120px]">
          <Profil />
        </section>

        <section className="min-h-screen scroll-mt-[400px] md:scroll-mt-[120px]">
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
