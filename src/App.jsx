import { useSiteData } from "./hooks/useSiteData";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechSkills from "./components/TechSkills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { data, loading, error } = useSiteData();

  if (loading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <p className="font-mono text-accent animate-pulse">loading portfolio…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center px-6 text-center">
        <p className="font-mono text-red-400">
          Couldn't load content. Check your Sanity project ID / CORS settings.
        </p>
      </div>
    );
  }

  const { settings, socials, skillGroups, projects, experience, education, achievements } = data;

  return (
    <div className="bg-bg min-h-screen">
      <Navbar name={settings?.fullName} />
      <Hero settings={settings} />
      <TechSkills skillGroups={skillGroups} />
      <Projects projects={projects} />
      <Experience experience={experience} />
      <Education education={education} />
      <Achievements achievements={achievements} />
      <Contact settings={settings} socials={socials} />
      <Footer name={settings?.fullName} />
    </div>
  );
}