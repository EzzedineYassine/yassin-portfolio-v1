import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ActionButtonProps {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  download?: boolean;
}

const ActionButton = ({ href, icon: Icon, children, variant = "primary", download }: ActionButtonProps) => {
  const baseClasses = "w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-300";
  
  const variantClasses = variant === "primary" 
    ? "btn-primary-glow"
    : "btn-secondary-glow";

  return (
    <motion.a
      href={href}
      download={download}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variantClasses}`}
    >
      <Icon className="w-4 h-4" />
      {children}
    </motion.a>
  );
};

export default ActionButton;
