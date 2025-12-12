'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { motionConfig } from "../../presets";

interface PopInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export function PopIn({ children, delay, duration }: PopInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 120,
          duration: duration ?? motionConfig.duration,
          delay: delay ?? motionConfig.delay
        }
      }}
    >
      {children}
    </motion.div>
  );
}

