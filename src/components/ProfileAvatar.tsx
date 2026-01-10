import { motion } from "framer-motion";

interface ProfileAvatarProps {
  src: string;
  alt: string;
}

const ProfileAvatar = ({ src, alt }: ProfileAvatarProps) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative"
    >
      {/* Glow ring */}
      <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-110" />
      
      {/* Avatar container */}
      <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden ring-2 ring-primary/30 shadow-2xl">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default ProfileAvatar;
