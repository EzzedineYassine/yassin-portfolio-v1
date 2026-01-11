import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import ProfileAvatar from "@/components/ProfileAvatar";
import ActionButton from "@/components/ActionButton";
import SocialLink from "@/components/SocialLink";
import { LinkedInIcon, GitHubIcon, InstagramIcon, FacebookIcon } from "@/components/icons/SocialIcons";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const meRef = useRef<HTMLElement>(null);
  const connectRef = useRef<HTMLElement>(null);

  const handleNavigate = useCallback((section: string) => {
    const refs: Record<string, React.RefObject<HTMLElement>> = {
      about: aboutRef,
      me: meRef,
      connect: connectRef,
    };
    
    refs[section]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

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
              I'm a Business Intelligence student with a strong interest in cybersecurity and modern technologies. I enjoy understanding how systems work, identifying weaknesses, and learning how to secure digital environments. I'm driven by curiosity, hands-on learning, and continuous self-improvement. Outside of tech, I value discipline, physical training, and a simple lifestyle focused on long-term growth.
            </p>
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
                Business Intelligence Student · Cybersecurity Enthusiast
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
                href="/resume.pdf"
                icon={FileText}
                variant="primary"
                download
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
