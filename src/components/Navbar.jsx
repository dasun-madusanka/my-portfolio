import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "experience", label: "Experience" },
  { to: "education", label: "Education" },
  { to: "contact", label: "Contact" },
];

export default function Navbar({ name = "Dasun" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        <Link to="home" smooth duration={500} className="font-display font-bold text-lg cursor-pointer">
          {name.split(" ")[0]}<span className="text-accent">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-mono text-sm text-textMuted">
          {LINKS.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                spy
                smooth
                offset={-70}
                duration={500}
                activeClass="text-accent"
                className="cursor-pointer hover:text-textPrimary transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-textPrimary text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-bg border-b border-border flex flex-col px-6 font-mono text-sm"
          >
            {LINKS.map((l) => (
              <li key={l.to} className="py-3 border-b border-border/50 last:border-0">
                <Link
                  to={l.to}
                  smooth
                  offset={-70}
                  duration={500}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer text-textMuted"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}