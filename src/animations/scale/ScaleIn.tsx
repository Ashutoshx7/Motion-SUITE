'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { motionConfig } from "../../presets";

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export function ScaleIn({ children, delay, duration }: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: 1,
        scale: 1,
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
