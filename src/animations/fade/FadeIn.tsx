'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { motionConfig } from "../../presets";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export function FadeIn({ children, delay, duration }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: duration ?? motionConfig.duration,
          delay: delay ?? motionConfig.delay,
          ease: motionConfig.easing
        }
      }}
    >
      {children}
    </motion.div>
  );
}

