'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { motionConfig } from "../../presets";

interface StaggerFadeProps {
  children: ReactNode[];
  delay?: number;
}

export function StaggerFade({ children, delay }: StaggerFadeProps) {
  return (
    <>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: (delay ?? motionConfig.delay) + i * 0.1,
              duration: motionConfig.duration,
              ease: motionConfig.easing
            }
          }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}

