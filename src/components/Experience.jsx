import { motion } from "framer-motion";
import Section from "./Section";

const fmt = (d) => (d ? new Date(d).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "");

export default function Experience({ experience = [] }) {
  return (
    <Section id="experience" eyebrow="04 — Timeline" title="Work experience">
      <div className="relative border-l border-border ml-3">
        {experience.map((e, idx) => (
          <motion.div
            key={e._id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="pl-8 pb-10 relative"
          >
            <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent" />
            <p className="font-mono text-xs text-textMuted">
              {fmt(e.startDate)} — {e.isCurrent ? "Present" : fmt(e.endDate)}
            </p>
            <h3 className="font-display text-lg font-semibold mt-1">{e.role}</h3>
            <p className="text-accent text-sm">{e.company}</p>
            <ul className="mt-3 space-y-1.5">
              {e.description?.map((d, i) => (
                <li key={i} className="text-textMuted text-sm flex gap-2">
                  <span className="text-accent mt-1">▸</span>{d}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}