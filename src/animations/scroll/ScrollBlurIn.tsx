'use client';

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { handleScrollAnimation } from "./scrollObserver";
import { motionConfig } from "../../presets";

interface ScrollBlurInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export function ScrollBlurIn({ children, delay, duration }: ScrollBlurInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => handleScrollAnimation(ref, setVisible), []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={
        visible
          ? {
              opacity: 1,
              filter: "blur(0px)",
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

