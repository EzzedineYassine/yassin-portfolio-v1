import { useRef, useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Mail, GraduationCap, ShoppingBag, Brain, Database, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import ProfileAvatar from "@/components/ProfileAvatar";
import ActionButton from "@/components/ActionButton";
import SocialLink from "@/components/SocialLink";
import { LinkedInIcon, GitHubIcon, InstagramIcon, FacebookIcon } from "@/components/icons/SocialIcons";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
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
      title: "Full-Stack E-Commerce Platform (Phantom Stickers)",
      year: "2024",
      description: "Designed a comprehensive e-commerce website using React and Vite. Implemented a centralized state architecture (Context API), a secure admin dashboard with CRUD functionalities, and persistent storage via Supabase and localStorage. Deployed continuously on Vercel.",
      tags: ["React", "Vite", "Context API", "Supabase", "Tailwind CSS", "Vercel"],
      icon: ShoppingBag,
      link: "https://phantom-stickers.vercel.app", // Replace with actual link
      linkLabel: "Visit Website",
    },
    {
      title: "Movie Recommendation System",
      year: "2024",
      description: "Developed a collaborative filtering machine learning algorithm in Python. Managed and analyzed complex datasets utilizing Pandas and Scikit-Learn libraries to generate personalized recommendations.",
      tags: ["Python", "Machine Learning", "Pandas", "Scikit-Learn", "Collaborative Filtering"],
      icon: Brain,
    },
    {
      title: "Information System Design",
      year: "2024",
      description: "Mapped system architectures and structured database schemas using UML diagrams. Wrote optimized queries and stored procedures with SQL and PL/SQL for high-performance databases.",
      tags: ["UML", "SQL", "PL/SQL", "Database Design", "Optimization"],
      icon: Database,
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
        <Section ref={aboutRef} id="about" title="About Me">
          <div className="p-6 rounded-2xl bg-card/50 border border-border">
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
              I'm a Business Information Systems student (FSEG Nabeul) passionate about full-stack web development and cybersecurity. I'm driven by curiosity and hands-on learning, actively building projects like e-commerce platforms and recommendation systems. Currently, I'm looking for a two-month internship to apply my technical skills in web and systems development within a dynamic team.
            </p>
          </div>
        </Section>

        {/* Education Section */}
        <Section ref={educationRef} id="education" title="Education">
          <div className="p-6 rounded-2xl bg-card/50 border border-border flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Licence en Informatique de Gestion
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Faculté des Sciences Économiques et de Gestion de Nabeul (FSEG)
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
                <span className="text-muted-foreground font-medium">Degree Completion Progress</span>
                <span className="font-mono text-primary font-bold">{progress.toFixed(8)}%</span>
              </div>
              <div className="w-full h-3 bg-muted rounded-full overflow-hidden border border-border/30 relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full relative"
                  style={{ width: `${progress}%` }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ type: "spring", stiffness: 55 }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                <span>Start (Sept 2024)</span>
                <span>Graduation (June 2027)</span>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground mt-2 border-t border-border/40 pt-3">
              I am currently pursuing my Licence in Informatique de Gestion. The progress bar actively counts up in real-time.
            </p>
          </div>
        </Section>

        {/* Projects Section */}
        <Section ref={projectsRef} id="projects" title="Projects">
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
                      {project.linkLabel || "View Project"}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Me Section */}
        <Section ref={meRef} id="me" title="Me">
          <div className="flex flex-col items-center gap-6">
            <ProfileAvatar src={profilePhoto} alt="Yassin Ezzedine" />
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-foreground">Yassin Ezzedine</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Business Information Systems Student · Full-Stack Developer
              </p>
            </motion.div>

            <div className="w-full flex flex-col gap-3 max-w-sm">
              <ActionButton
                href="mailto:yassineezzediney2g@gmail.com"
                icon={Mail}
                variant="secondary"
              >
                Email Me
              </ActionButton>
              
              <ActionButton
                href={`${window.location.origin}/resume.pdf`}
                icon={FileText}
                variant="primary"
                download="Yassin_Ezzedine_CV.pdf"
              >
                Download CV
              </ActionButton>
            </div>
          </div>
        </Section>

        {/* Connect with Me Section */}
        <Section ref={connectRef} id="connect" title="Connect with Me">
          <div className="flex flex-col gap-3 max-w-sm mx-auto">
            {socialLinks.map((link, index) => (
              <SocialLink
                key={link.label}
                href={link.href}
                icon={link.icon}
                label={link.label}
                delay={0.1 + index * 0.1}
              />
            ))}
          </div>
        </Section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center py-8"
        >
          <p className="text-xs text-muted-foreground">
            © Yassin Ezzedine
          </p>
        </motion.footer>
      </main>
    </div>
  );
};

export default Index;
