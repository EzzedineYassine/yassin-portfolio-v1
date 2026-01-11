import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const navLinks = [
    { label: "About Me", section: "about" },
    { label: "Me", section: "me" },
    { label: "Connect with Me", section: "connect" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Search Bar (decorative) */}
        <div className="relative flex-shrink-0 w-40 md:w-56">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-9 pr-3 py-2 text-sm bg-secondary/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            disabled
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-2 md:gap-6">
          {navLinks.map((link) => (
            <button
              key={link.section}
              onClick={() => onNavigate(link.section)}
              className="text-xs md:text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
