import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Search, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

// Simple fuzzy match function - calculates similarity between two strings
const fuzzyMatch = (query: string, target: string): number => {
  const q = query.toLowerCase().replace(/\s+/g, '');
  const t = target.toLowerCase().replace(/\s+/g, '');
  
  if (t.includes(q)) return 1;
  if (q.includes(t)) return 0.9;
  
  // Levenshtein-inspired simple similarity
  let matches = 0;
  let qIndex = 0;
  
  for (let i = 0; i < t.length && qIndex < q.length; i++) {
    if (t[i] === q[qIndex]) {
      matches++;
      qIndex++;
    }
  }
  
  return matches / Math.max(q.length, t.length);
};

const Header = ({ onNavigate }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { language, setLanguage, t } = useLanguage();
  
  const navLinks = [
    { label: t("nav_about"), section: "about", keywords: ["about", "aboutme", "bio", "introduction", "propos", "نبذة"] },
    { label: t("nav_education"), section: "education", keywords: ["education", "studies", "uni", "school", "progress", "fseg", "formation", "تعليم"] },
    { label: t("nav_projects"), section: "projects", keywords: ["projects", "skills", "e-commerce", "react", "python", "work", "portfolio", "projets", "مشاريع"] },
    { label: t("nav_me"), section: "me", keywords: ["me", "profile", "photo", "cv", "resume", "email", "moi", "أنا"] },
    { label: t("nav_connect"), section: "connect", keywords: ["connect", "connectwithme", "social", "linkedin", "github", "contact", "contacter", "تواصل"] },
  ];

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    
    if (query.trim().length < 2) return;
    
    const normalizedQuery = query.toLowerCase().trim();
    
    // Find best matching section
    let bestMatch = { section: "", score: 0 };
    
    for (const link of navLinks) {
      // Check label match
      const labelScore = fuzzyMatch(normalizedQuery, link.label);
      if (labelScore > bestMatch.score) {
        bestMatch = { section: link.section, score: labelScore };
      }
      
      // Check keyword matches
      for (const keyword of link.keywords) {
        const keywordScore = fuzzyMatch(normalizedQuery, keyword);
        if (keywordScore > bestMatch.score) {
          bestMatch = { section: link.section, score: keywordScore };
        }
      }
    }
    
    // Trigger navigation if score is good enough
    if (bestMatch.score >= 0.5) {
      onNavigate(bestMatch.section);
    }
  }, [onNavigate]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(searchQuery);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="relative flex-shrink-0 w-40 md:w-56 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder={t("search_placeholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={() => handleSearch(searchQuery)}
            className="w-full pl-9 pr-3 py-2 text-sm bg-secondary/60 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-secondary/80 hover:bg-secondary/70 transition-all duration-200"
          />
        </div>

        {/* Navigation Links & Language Switcher */}
        <div className="flex items-center gap-3 md:gap-6">
          <nav className="hidden md:flex items-center gap-6">
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

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/50 hover:bg-secondary/80 border border-border transition-colors outline-none text-xs font-medium cursor-pointer">
              <Globe className="w-3.5 h-3.5" />
              <span className="uppercase">{language}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[120px]">
              <DropdownMenuItem onClick={() => setLanguage("en")} className="text-xs cursor-pointer font-medium">
                English (EN)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("fr")} className="text-xs cursor-pointer font-medium">
                Français (FR)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("de")} className="text-xs cursor-pointer font-medium">
                Deutsch (DE)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("ar")} className="text-xs cursor-pointer font-medium" dir="rtl">
                العربية (AR)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
