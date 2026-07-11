import { motion } from "framer-motion";
import Section from "./Section";
import { urlFor } from "../lib/sanityClient";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects({ projects = [] }) {
  return (
    <Section id="projects" eyebrow="03 — Work" title="Selected projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, idx) => (
          <motion.div
            key={p._id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            className="group rounded-2xl border border-border bg-surface overflow-hidden hover:border-accent transition-colors"
          >
            {p.coverImage && (
              <div className="h-48 overflow-hidden">
                <img
                  src={urlFor(p.coverImage).width(800).height(450).url()}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <p className="text-textMuted text-sm mt-2 leading-relaxed">{p.summary}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.techUsed?.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 rounded-full bg-surfaceAlt text-accent">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-5">
                {p.githubUrl && (
                  <a href={p.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-textMuted hover:text-textPrimary">
                    <FiGithub /> Code
                  </a>
                )}
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-textMuted hover:text-textPrimary">
                    <FiExternalLink /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}