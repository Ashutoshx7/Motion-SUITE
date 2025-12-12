'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { motionConfig } from "../../presets";

interface FadeRightProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export function FadeRight({ children, delay, duration }: FadeRightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: motionConfig.distance }}
      animate={{
        opacity: 1,
        x: 0,
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
