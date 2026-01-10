import { motion } from "framer-motion";
import { ComponentType, SVGProps } from "react";

interface SocialLinkProps {
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  delay?: number;
}

const SocialLink = ({ href, icon: Icon, label, delay = 0 }: SocialLinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.02, x: 4 }}
      whileTap={{ scale: 0.98 }}
      className="w-full flex items-center gap-4 px-5 py-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 hover:bg-surface-elevated transition-all duration-300 group"
    >
      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
      </div>
      <span className="font-medium text-foreground">{label}</span>
      <svg 
        className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </motion.a>
  );
};

export default SocialLink;
