import { motion } from "framer-motion";
import Section from "./Section";
import { FiAward } from "react-icons/fi";

export default function Achievements({ achievements = [] }) {
  if (!achievements.length) return null;
  return (
    <Section id="achievements" eyebrow="06 — Recognition" title="Achievements & certifications">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {achievements.map((a, idx) => (
          <motion.a
            key={a._id}
            href={a.certificateUrl || undefined}
            target={a.certificateUrl ? "_blank" : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="p-5 rounded-2xl border border-border bg-surface hover:border-accent transition-colors block"
          >
            <FiAward className="text-accent text-2xl mb-3" />
            <h3 className="font-semibold text-sm">{a.title}</h3>
            <p className="text-textMuted text-xs mt-1">{a.issuer}</p>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}