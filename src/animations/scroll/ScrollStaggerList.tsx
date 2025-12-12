'use client';

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { handleScrollAnimation } from "./scrollObserver";
import { motionConfig } from "../../presets";

interface ScrollStaggerListProps {
  children: React.ReactNode[];
  delay?: number;
}

export function ScrollStaggerList({ children, delay }: ScrollStaggerListProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => handleScrollAnimation(ref, setVisible), []);

  return (
    <div ref={ref}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: motionConfig.distance }}
          animate={
            visible
              ? {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: (delay ?? motionConfig.delay) + i * 0.1,
                    duration: motionConfig.duration,
                    ease: motionConfig.easing
                  }
                }
              : {}
          }
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

