'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { motionConfig } from "../../presets";

interface BlurInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export function BlurIn({ children, delay, duration }: BlurInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
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

