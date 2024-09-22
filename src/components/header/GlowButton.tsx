import React from 'react';
import { motion } from 'framer-motion';

interface GlowButtonProps {
  children: React.ReactNode;
  href: string;
}

export const GlowButton: React.FC<GlowButtonProps> = ({ children, href }) => {
  return (
    <motion.div
      className="relative inline-block cursor-pointer p-2"
      whileHover="hover"
      whileTap="tap"
    >
      <motion.div
        className="absolute inset-0 rounded-full z-0"
        style={{
          background: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
          backgroundSize: '400% 400%',
          filter: 'blur(8px)',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          opacity: [0.5, 0.8, 0.5], // Continuous subtle opacity change
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        variants={{
          hover: { opacity: 1 },
        }}
      />
      <motion.a
        href={href}
        className="relative inline-block px-6 py-3 bg-[#111] text-white font-bold rounded-full z-10"
        variants={{
          hover: { scale: 1.05 },
          tap: { scale: 0.95, backgroundColor: 'rgba(255, 255, 255, 0.2)' },
        }}
      >
        {children}
      </motion.a>
    </motion.div>
  );
};