import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import ProfileAvatar from "@/components/ProfileAvatar";
import ActionButton from "@/components/ActionButton";
import SocialLink from "@/components/SocialLink";
import { LinkedInIcon, GitHubIcon, InstagramIcon, FacebookIcon } from "@/components/icons/SocialIcons";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
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
    <div className="min-h-screen flex flex-col items-center px-4 py-12 md:py-16">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md mx-auto flex flex-col items-center pt-8 md:pt-12"
      >
        {/* Profile Section */}
        <section className="flex flex-col items-center text-center mb-8">
          <ProfileAvatar src={profilePhoto} alt="Yassin Ezzedine" />
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-2xl md:text-3xl font-semibold text-foreground"
          >
            Yassin Ezzedine
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-2 text-sm md:text-base text-muted-foreground"
          >
            Business Intelligence Student · Cybersecurity Enthusiast
          </motion.p>
        </section>

        {/* Primary Actions */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full flex flex-col gap-3 mb-6"
        >
          <ActionButton
            href="/resume.pdf"
            icon={FileText}
            variant="primary"
            download
          >
            Download CV
          </ActionButton>
          
          <ActionButton
            href="mailto:yassineezzediney2g@gmail.com"
            icon={Mail}
            variant="secondary"
          >
            Email Me
          </ActionButton>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full mb-8"
        >
          <div className="p-5 rounded-2xl bg-card/50 border border-border">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              About Me
            </h2>
            <p className="text-sm leading-relaxed text-text-soft">
              I'm a Business Intelligence student with a strong interest in cybersecurity and modern technologies. I enjoy understanding how systems work, identifying weaknesses, and learning how to secure digital environments. I'm driven by curiosity, hands-on learning, and continuous self-improvement. Outside of tech, I value discipline, physical training, and a simple lifestyle focused on long-term growth.
            </p>
          </div>
        </motion.section>

        {/* Social Links */}
        <section className="w-full flex flex-col gap-3 mb-10">
          {socialLinks.map((link, index) => (
            <SocialLink
              key={link.label}
              href={link.href}
              icon={link.icon}
              label={link.label}
              delay={0.6 + index * 0.1}
            />
          ))}
        </section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center"
        >
          <p className="text-xs text-muted-foreground">
            © Yassin Ezzedine
          </p>
        </motion.footer>
      </motion.main>
    </div>
  );
};

export default Index;
