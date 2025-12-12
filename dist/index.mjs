'use client';

// src/animations/fade/FadeIn.tsx
import { motion } from "framer-motion";

// src/presets.ts
var motionConfig = {
  duration: 0.35,
  delay: 0,
  distance: 20,
  easing: "easeOut"
};

// src/animations/fade/FadeIn.tsx
import { jsx } from "react/jsx-runtime";
function FadeIn({ children, delay, duration }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: {
          duration: duration ?? motionConfig.duration,
          delay: delay ?? motionConfig.delay,
          ease: motionConfig.easing
        }
      },
      children
    }
  );
}

// src/animations/fade/FadeUp.tsx
import { motion as motion2 } from "framer-motion";
import { jsx as jsx2 } from "react/jsx-runtime";
function FadeUp({ children, delay, duration }) {
  return /* @__PURE__ */ jsx2(
    motion2.div,
    {
      initial: { opacity: 0, y: motionConfig.distance },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: duration ?? motionConfig.duration,
          delay: delay ?? motionConfig.delay,
          ease: motionConfig.easing
        }
      },
      children
    }
  );
}

// src/animations/fade/FadeDown.tsx
import { motion as motion3 } from "framer-motion";
import { jsx as jsx3 } from "react/jsx-runtime";
function FadeDown({ children, delay, duration }) {
  return /* @__PURE__ */ jsx3(
    motion3.div,
    {
      initial: { opacity: 0, y: -motionConfig.distance },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: duration ?? motionConfig.duration,
          delay: delay ?? motionConfig.delay,
          ease: motionConfig.easing
        }
      },
      children
    }
  );
}

// src/animations/fade/FadeLeft.tsx
import { motion as motion4 } from "framer-motion";
import { jsx as jsx4 } from "react/jsx-runtime";
function FadeLeft({ children, delay, duration }) {
  return /* @__PURE__ */ jsx4(
    motion4.div,
    {
      initial: { opacity: 0, x: -motionConfig.distance },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: duration ?? motionConfig.duration,
          delay: delay ?? motionConfig.delay,
          ease: motionConfig.easing
        }
      },
      children
    }
  );
}

// src/animations/fade/FadeRight.tsx
import { motion as motion5 } from "framer-motion";
import { jsx as jsx5 } from "react/jsx-runtime";
function FadeRight({ children, delay, duration }) {
  return /* @__PURE__ */ jsx5(
    motion5.div,
    {
      initial: { opacity: 0, x: motionConfig.distance },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: duration ?? motionConfig.duration,
          delay: delay ?? motionConfig.delay,
          ease: motionConfig.easing
        }
      },
      children
    }
  );
}

// src/animations/scale/ScaleIn.tsx
import { motion as motion6 } from "framer-motion";
import { jsx as jsx6 } from "react/jsx-runtime";
function ScaleIn({ children, delay, duration }) {
  return /* @__PURE__ */ jsx6(
    motion6.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      animate: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: duration ?? motionConfig.duration,
          delay: delay ?? motionConfig.delay,
          ease: motionConfig.easing
        }
      },
      children
    }
  );
}

// src/animations/scale/PopIn.tsx
import { motion as motion7 } from "framer-motion";
import { jsx as jsx7 } from "react/jsx-runtime";
function PopIn({ children, delay, duration }) {
  return /* @__PURE__ */ jsx7(
    motion7.div,
    {
      initial: { opacity: 0, scale: 0.8 },
      animate: {
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 120,
          duration: duration ?? motionConfig.duration,
          delay: delay ?? motionConfig.delay
        }
      },
      children
    }
  );
}

// src/animations/blur/BlurIn.tsx
import { motion as motion8 } from "framer-motion";
import { jsx as jsx8 } from "react/jsx-runtime";
function BlurIn({ children, delay, duration }) {
  return /* @__PURE__ */ jsx8(
    motion8.div,
    {
      initial: { opacity: 0, filter: "blur(8px)" },
      animate: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: duration ?? motionConfig.duration,
          delay: delay ?? motionConfig.delay,
          ease: motionConfig.easing
        }
      },
      children
    }
  );
}

// src/animations/slide/SlideLeft.tsx
import { motion as motion9 } from "framer-motion";
import { jsx as jsx9 } from "react/jsx-runtime";
function SlideLeft({ children, delay, duration }) {
  return /* @__PURE__ */ jsx9(
    motion9.div,
    {
      initial: { x: -motionConfig.distance, opacity: 0 },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: duration ?? motionConfig.duration,
          delay: delay ?? motionConfig.delay,
          ease: motionConfig.easing
        }
      },
      children
    }
  );
}

// src/animations/slide/SlideRight.tsx
import { motion as motion10 } from "framer-motion";
import { jsx as jsx10 } from "react/jsx-runtime";
function SlideRight({ children, delay, duration }) {
  return /* @__PURE__ */ jsx10(
    motion10.div,
    {
      initial: { x: motionConfig.distance, opacity: 0 },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: duration ?? motionConfig.duration,
          delay: delay ?? motionConfig.delay,
          ease: motionConfig.easing
        }
      },
      children
    }
  );
}

// src/animations/scroll/ScrollFadeUp.tsx
import { useEffect, useRef, useState } from "react";
import { motion as motion11 } from "framer-motion";

// src/animations/scroll/scrollObserver.ts
function handleScrollAnimation(ref, setVisible) {
  if (!ref.current) return;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    },
    { threshold: 0.15 }
  );
  observer.observe(ref.current);
  return () => {
    observer.disconnect();
  };
}

// src/animations/scroll/ScrollFadeUp.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
function ScrollFadeUp({ children, delay, duration }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => handleScrollAnimation(ref, setVisible), []);
  return /* @__PURE__ */ jsx11(
    motion11.div,
    {
      ref,
      initial: { opacity: 0, y: motionConfig.distance },
      animate: visible ? {
        opacity: 1,
        y: 0,
        transition: {
          duration: duration ?? motionConfig.duration,
          delay: delay ?? motionConfig.delay,
          ease: motionConfig.easing
        }
      } : {},
      children
    }
  );
}

// src/animations/scroll/ScrollBlurIn.tsx
import { useEffect as useEffect2, useRef as useRef2, useState as useState2 } from "react";
import { motion as motion12 } from "framer-motion";
import { jsx as jsx12 } from "react/jsx-runtime";
function ScrollBlurIn({ children, delay, duration }) {
  const ref = useRef2(null);
  const [visible, setVisible] = useState2(false);
  useEffect2(() => handleScrollAnimation(ref, setVisible), []);
  return /* @__PURE__ */ jsx12(
    motion12.div,
    {
      ref,
      initial: { opacity: 0, filter: "blur(8px)" },
      animate: visible ? {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: duration ?? motionConfig.duration,
          delay: delay ?? motionConfig.delay,
          ease: motionConfig.easing
        }
      } : {},
      children
    }
  );
}

// src/animations/scroll/ScrollStaggerList.tsx
import { useEffect as useEffect3, useRef as useRef3, useState as useState3 } from "react";
import { motion as motion13 } from "framer-motion";
import { jsx as jsx13 } from "react/jsx-runtime";
function ScrollStaggerList({ children, delay }) {
  const ref = useRef3(null);
  const [visible, setVisible] = useState3(false);
  useEffect3(() => handleScrollAnimation(ref, setVisible), []);
  return /* @__PURE__ */ jsx13("div", { ref, children: children.map((child, i) => /* @__PURE__ */ jsx13(
    motion13.div,
    {
      initial: { opacity: 0, y: motionConfig.distance },
      animate: visible ? {
        opacity: 1,
        y: 0,
        transition: {
          delay: (delay ?? motionConfig.delay) + i * 0.1,
          duration: motionConfig.duration,
          ease: motionConfig.easing
        }
      } : {},
      children: child
    },
    i
  )) });
}

// src/animations/stagger/StaggerList.tsx
import { motion as motion14 } from "framer-motion";
import { jsx as jsx14 } from "react/jsx-runtime";
function StaggerList({ children, delay }) {
  return /* @__PURE__ */ jsx14(motion14.div, { children: children.map((child, i) => /* @__PURE__ */ jsx14(
    motion14.div,
    {
      initial: { opacity: 0, y: motionConfig.distance / 2 },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          delay: (delay ?? motionConfig.delay) + i * 0.1,
          duration: motionConfig.duration,
          ease: motionConfig.easing
        }
      },
      children: child
    },
    i
  )) });
}

// src/animations/stagger/StaggerFade.tsx
import { motion as motion15 } from "framer-motion";
import { Fragment, jsx as jsx15 } from "react/jsx-runtime";
function StaggerFade({ children, delay }) {
  return /* @__PURE__ */ jsx15(Fragment, { children: children.map((child, i) => /* @__PURE__ */ jsx15(
    motion15.div,
    {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: {
          delay: (delay ?? motionConfig.delay) + i * 0.1,
          duration: motionConfig.duration,
          ease: motionConfig.easing
        }
      },
      children: child
    },
    i
  )) });
}

// src/animations/interactions/HoverPop.tsx
import { motion as motion16 } from "framer-motion";
import { jsx as jsx16 } from "react/jsx-runtime";
function HoverPop({ children, scale = 1.05 }) {
  return /* @__PURE__ */ jsx16(motion16.div, { whileHover: { scale }, children });
}

// src/animations/interactions/TapPress.tsx
import { motion as motion17 } from "framer-motion";
import { jsx as jsx17 } from "react/jsx-runtime";
function TapPress({ children, scale = 0.95 }) {
  return /* @__PURE__ */ jsx17(motion17.div, { whileTap: { scale }, children });
}
export {
  BlurIn,
  FadeDown,
  FadeIn,
  FadeLeft,
  FadeRight,
  FadeUp,
  HoverPop,
  PopIn,
  ScaleIn,
  ScrollBlurIn,
  ScrollFadeUp,
  ScrollStaggerList,
  SlideLeft,
  SlideRight,
  StaggerFade,
  StaggerList,
  TapPress
};
//# sourceMappingURL=index.mjs.map