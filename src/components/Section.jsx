import { motion } from "framer-motion";

export default function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`relative py-20 md:py-28 px-6 md:px-12 lg:px-24 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && (
              <h2 className="font-display text-3xl md:text-4xl font-bold text-textPrimary">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}