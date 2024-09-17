import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import SoftSkills from "../components/SoftSkills";
import TechSkills from "../components/TechSkills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <div>
      <Header />
      <Element name="Intro">
        <Intro />
      </Element>
      <Element name="Soft Skills">
        <SoftSkills />
      </Element>
      <Element name="Technical Skills">
        <TechSkills />
      </Element>
      <Element name="Projects">
        <Projects />
      </Element>
      <Element name="Contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}
