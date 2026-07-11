import Section from "./Section";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";

const ICONS = { github: FiGithub, linkedin: FiLinkedin, email: FiMail, phone: FiPhone };

export default function Contact({ settings, socials = [] }) {
  return (
    <Section id="contact" eyebrow="07 — Reach out" title="Let's build something">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-textMuted leading-relaxed max-w-md"
        >
          {settings?.availableForWork
            ? "I'm currently open to new roles and collaborations. Drop a message and I'll get back to you soon."
            : "Feel free to reach out for collaborations or just to say hi."}
        </motion.p>

        <div className="space-y-4">
          <a href={`mailto:${settings?.email}`} className="flex items-center gap-3 text-textPrimary hover:text-accent transition-colors">
            <FiMail /> {settings?.email}
          </a>
          {settings?.phone && (
            <a href={`tel:${settings.phone}`} className="flex items-center gap-3 text-textPrimary hover:text-accent transition-colors">
              <FiPhone /> {settings.phone}
            </a>
          )}
          {settings?.location && (
            <p className="flex items-center gap-3 text-textMuted">
              <FiMapPin /> {settings.location}
            </p>
          )}
          <div className="flex gap-4 pt-3">
            {socials.map((s) => {
              const Icon = ICONS[s.platform] || FiMail;
              return (
                <a
                  key={s._id}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}