import { motion } from "framer-motion";
import Section from "./Section";
import { iconMap } from "../icons/iconMap";

export default function TechSkills({ skillGroups = [] }) {
  return (
    <Section id="skills" eyebrow="02 — Stack" title="Technologies I work with">
      <div className="space-y-12">
        {skillGroups.map((group) => (
          <div key={group._id}>
            <h3 className="font-mono text-sm text-textMuted mb-5 uppercase tracking-wide">{group.title}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {group.skills?.map((skill, idx) => {
                const Icon = iconMap[skill.icon];
                return (
                  <motion.div
                    key={skill._id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-border bg-surface hover:border-accent hover:shadow-[0_0_20px_#7C5CFC33] transition-all"
                  >
                    {Icon && <Icon className="text-3xl text-textPrimary" />}
                    <span className="text-xs text-textMuted text-center">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}