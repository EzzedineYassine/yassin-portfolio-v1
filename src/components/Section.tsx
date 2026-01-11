import { motion } from "framer-motion";
import { ReactNode, forwardRef } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ id, title, children }, ref) => {
  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto py-16 px-4"
    >
      <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6 text-center">
        {title}
      </h2>
      {children}
    </motion.section>
  );
});

Section.displayName = "Section";

export default Section;
