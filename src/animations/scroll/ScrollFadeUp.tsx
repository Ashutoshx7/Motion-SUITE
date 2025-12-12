'use client';

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { handleScrollAnimation } from "./scrollObserver";
import { motionConfig } from "../../presets";

interface ScrollFadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export function ScrollFadeUp({ children, delay, duration }: ScrollFadeUpProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => handleScrollAnimation(ref, setVisible), []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: motionConfig.distance }}
      animate={
        visible
          ? {
              opacity: 1,
              y: 0,
              transition: {
                duration: duration ?? motionConfig.duration,
                delay: delay ?? motionConfig.delay,
                ease: motionConfig.easing
              }
            }
          : {}
      }
    >
      {children}
    </motion.div>
  );
}

