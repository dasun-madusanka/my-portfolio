import { motion } from "framer-motion";
import Section from "./Section";

export default function Education({ education = [] }) {
  return (
    <Section id="education" eyebrow="05 — Academics" title="Education">
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((ed, idx) => (
          <motion.div
            key={ed._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="p-6 rounded-2xl border border-border bg-surface hover:border-accent transition-colors"
          >
            <p className="font-mono text-xs text-textMuted">{ed.startYear} — {ed.endYear}</p>
            <h3 className="font-display text-lg font-semibold mt-1">{ed.degree}</h3>
            <p className="text-accent text-sm">{ed.institution}</p>
            <p className="text-textMuted text-sm mt-3">{ed.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}