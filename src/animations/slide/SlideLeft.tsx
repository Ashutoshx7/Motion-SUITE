'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { motionConfig } from "../../presets";

interface SlideLeftProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export function SlideLeft({ children, delay, duration }: SlideLeftProps) {
  return (
    <motion.div
      initial={{ x: -motionConfig.distance, opacity: 0 }}
      animate={{
        x: 0,
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

