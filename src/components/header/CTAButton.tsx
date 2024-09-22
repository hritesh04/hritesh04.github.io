// import { motion } from 'framer-motion';
import { GlowButton } from './GlowButton';
// import Link from 'next/link';

export const CTAButton = () => {
  return (
    <div className="flex items-center justify-center">
      <GlowButton href="/resume">RESUME</GlowButton>
    </div>
  );
}