import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { urlFor } from "../lib/sanityClient";

function useTypedRoles(roles = []) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!roles.length) return;
    const current = roles[i % roles.length];
    const speed = deleting ? 40 : 90;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 1200);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setI((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, i, roles]);

  return text;
}

export default function Hero({ settings }) {
  const typed = useTypedRoles(settings?.roles);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12 lg:px-24 bg-grid-pattern bg-grid overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="eyebrow">$ whoami</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {settings?.fullName || "Dasun Madusanka"}
          </h1>
          <p className="font-mono text-accent text-lg md:text-xl mt-3 h-8">
            {typed}
            <span className="animate-blink">|</span>
          </p>
          <p className="text-textMuted mt-6 max-w-md leading-relaxed">{settings?.tagline}</p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link to="contact" smooth offset={-70} duration={500}>
              <button className="px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/90 hover:shadow-[0_0_24px_#7C5CFC66] transition-all">
                Get in touch →
              </button>
            </Link>
            {(settings?.cvFile?.asset?.url || settings?.cvUrl) && (
              <a
                href={settings.cvFile?.asset?.url || settings.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="px-6 py-3 rounded-full border border-border text-textPrimary hover:border-accent transition-colors"
              >
                Download CV
              </a>
            )}
          </div>
        </motion.div>

        {/* signature terminal card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-6 animate-floaty"
        >
          {settings?.profileImage && (
            <div className="animate-floaty w-56 h-72 sm:w-64 sm:h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-border shadow-2xl">
              <img
                src={urlFor(settings.profileImage).width(600).height(800).url()}
                alt={settings?.fullName || "Profile photo"}
                className="w-full h-full object-fill"
              />
            </div>
          )}
          <div className="rounded-xl border border-border bg-surface shadow-2xl overflow-hidden max-w-md mx-auto">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surfaceAlt">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs text-textMuted font-mono">bash — 80x12</span>
            </div>
            <div className="p-5 font-mono text-sm space-y-2">
              <p><span className="text-status">➜</span> <span className="text-accent">~</span> cat status.txt</p>
              <p className="text-textMuted">
                {settings?.availableForWork ? "🟢 Available for new opportunities" : "🔴 Not currently available"}
              </p>
              <p className="text-textMuted">📍 {settings?.location}</p>
              <p className="text-textMuted">✉ {settings?.email}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}