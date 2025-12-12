'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { motionConfig } from "../../presets";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export function FadeUp({ children, delay, duration }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: motionConfig.distance }}
      animate={{
        opacity: 1,
        y: 0,
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
