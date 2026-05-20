import { useRef, useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Mail, GraduationCap, ShoppingBag, Brain, Database, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/Section";
import ProfileAvatar from "@/components/ProfileAvatar";
import ActionButton from "@/components/ActionButton";
import SocialLink from "@/components/SocialLink";
import { LinkedInIcon, GitHubIcon, InstagramIcon, FacebookIcon } from "@/components/icons/SocialIcons";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
  const { t } = useLanguage();
  const aboutRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const meRef = useRef<HTMLElement>(null);
  const connectRef = useRef<HTMLElement>(null);

  const handleNavigate = useCallback((section: string) => {
    const refs: Record<string, React.RefObject<HTMLElement>> = {
      about: aboutRef,
      education: educationRef,
      projects: projectsRef,
      me: meRef,
      connect: connectRef,
    };
    
    refs[section]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // Education progress calculation (Licence: Sept 15, 2024 to June 15, 2027)
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const start = new Date("2024-09-15T00:00:00").getTime();
    const end = new Date("2027-06-15T00:00:00").getTime();
    const total = end - start;

    const updateProgress = () => {
      const now = Date.now();
      const pct = Math.min(Math.max(((now - start) / total) * 100, 0), 100);
      setProgress(pct);
    };

    updateProgress();
    const interval = setInterval(updateProgress, 100); // update every 100ms for high precision decimals
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: t("project_ecommerce_title"),
      year: "2024",
      description: t("project_ecommerce_desc"),
      tags: ["React", "Vite", "Context API", "Supabase", "Tailwind CSS", "Vercel"],
      icon: ShoppingBag,
      link: "https://phantom-stickers.vercel.app",
      linkLabel: t("btn_visit"),
    },
    {
      title: t("project_movie_title"),
      year: "2024",
      description: t("project_movie_desc"),
      tags: ["Python", "Machine Learning", "Pandas", "Scikit-Learn", "Collaborative Filtering"],
      icon: Brain,
      linkLabel: t("btn_view"),
    },
    {
      title: t("project_is_title"),
      year: "2024",
      description: t("project_is_desc"),
      tags: ["UML", "SQL", "PL/SQL", "Database Design", "Optimization"],
      icon: Database,
      linkLabel: t("btn_view"),
    },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/yassin-ezzedine-118699387/",
      icon: LinkedInIcon,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/YassieEzzedine",
      icon: GitHubIcon,
      label: "GitHub",
    },
    {
      href: "https://www.instagram.com/yssineezzedin/",
      icon: InstagramIcon,
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/yassin.ezzedin.14",
      icon: FacebookIcon,
      label: "Facebook",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} />
      
      <main className="flex-1 pt-20">
        {/* About Me Section */}
        <Section ref={aboutRef} id="about" title={t("about_title")}>
          <div className="p-6 rounded-2xl bg-card/50 border border-border">
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
              {t("about_text")}
            </p>
          </div>
        </Section>

        {/* Education Section */}
        <Section ref={educationRef} id="education" title={t("edu_title")}>
          <div className="p-6 rounded-2xl bg-card/50 border border-border flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  {t("edu_degree")}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {t("edu_school")}
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                  2024 - 2027
                </span>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center text-xs md:text-sm">
                <span className="text-muted-foreground font-medium">{t("edu_progress_label")}</span>
                <span className="font-mono text-primary font-bold dir-ltr" dir="ltr">{progress.toFixed(8)}%</span>
              </div>
              <div className="w-full h-3 bg-muted rounded-full overflow-hidden border border-border/30 relative" dir="ltr">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full relative"
                  style={{ width: `${progress}%` }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ type: "spring", stiffness: 55 }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                <span>{t("edu_start")}</span>
                <span>{t("edu_end")}</span>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground mt-2 border-t border-border/40 pt-3">
              {t("edu_desc")}
            </p>
          </div>
        </Section>

        {/* Projects Section */}
        <Section ref={projectsRef} id="projects" title={t("projects_title")}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/60 hover:border-primary/40 hover:bg-card/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs text-primary font-mono bg-primary/10 px-2.5 py-0.5 rounded-full font-medium">
                      {project.year}
                    </span>
                    <project.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="mt-6 flex-1 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-md font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1.5 rounded-lg transition-colors w-full sm:w-auto mt-auto border border-primary/20">
                      {project.linkLabel || t("btn_view")}
                      <ExternalLink className="h-3.5 w-3.5 rtl:rotate-180" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Me Section */}
        <Section ref={meRef} id="me" title={t("me_title")}>
          <div className="flex flex-col items-center gap-6">
            <ProfileAvatar src={profilePhoto} alt="Yassin Ezzedine" />
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-foreground">Yassine EZZEDINE</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {t("me_subtitle")}
              </p>
            </motion.div>

            <div className="w-full flex flex-col gap-3 max-w-sm">
              <ActionButton
                href="mailto:yassineezzediney2g@gmail.com"
                icon={Mail}
                variant="secondary"
              >
                {t("btn_email")}
              </ActionButton>
              
              <ActionButton
                href={`${window.location.origin}/resume.pdf`}
                icon={FileText}
                variant="primary"
                download="Yassin_Ezzedine_CV.pdf"
              >
                {t("btn_download_cv")}
              </ActionButton>
            </div>
          </div>
        </Section>

        {/* Connect Section */}
        <Section ref={connectRef} id="connect" title={t("connect_title")}>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-110"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </Section>
      </main>

      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border mt-12">
        <p>{t("footer_text")}</p>
      </footer>
    </div>
  );
};

export default Index;
