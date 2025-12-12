'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { motionConfig } from "../../presets";

interface StaggerListProps {
  children: ReactNode[];
  delay?: number;
}

export function StaggerList({ children, delay }: StaggerListProps) {
  return (
    <motion.div>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: motionConfig.distance / 2 }}
          animate={{
            opacity: 1,
            y: 0,
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
    </motion.div>
  );
}

