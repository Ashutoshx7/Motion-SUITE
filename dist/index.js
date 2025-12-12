'use client';
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  BlurIn: () => BlurIn,
  FadeDown: () => FadeDown,
  FadeIn: () => FadeIn,
  FadeLeft: () => FadeLeft,
  FadeRight: () => FadeRight,
  FadeUp: () => FadeUp,
  HoverPop: () => HoverPop,
  PopIn: () => PopIn,
  ScaleIn: () => ScaleIn,
  ScrollBlurIn: () => ScrollBlurIn,
  ScrollFadeUp: () => ScrollFadeUp,
  ScrollStaggerList: () => ScrollStaggerList,
  SlideLeft: () => SlideLeft,
  SlideRight: () => SlideRight,
  StaggerFade: () => StaggerFade,
  StaggerList: () => StaggerList,
  TapPress: () => TapPress
});
module.exports = __toCommonJS(index_exports);

// src/animations/fade/FadeIn.tsx
var import_framer_motion = require("framer-motion");

// src/presets.ts
var motionConfig = {
  duration: 0.35,
  delay: 0,
  distance: 20,
  easing: "easeOut"
};

// src/animations/fade/FadeIn.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function FadeIn({ children, delay, duration }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_framer_motion.motion.div,
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
var import_framer_motion2 = require("framer-motion");
var import_jsx_runtime2 = require("react/jsx-runtime");
function FadeUp({ children, delay, duration }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_framer_motion2.motion.div,
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
var import_framer_motion3 = require("framer-motion");
var import_jsx_runtime3 = require("react/jsx-runtime");
function FadeDown({ children, delay, duration }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_framer_motion3.motion.div,
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
var import_framer_motion4 = require("framer-motion");
var import_jsx_runtime4 = require("react/jsx-runtime");
function FadeLeft({ children, delay, duration }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_framer_motion4.motion.div,
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
var import_framer_motion5 = require("framer-motion");
var import_jsx_runtime5 = require("react/jsx-runtime");
function FadeRight({ children, delay, duration }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_framer_motion5.motion.div,
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
var import_framer_motion6 = require("framer-motion");
var import_jsx_runtime6 = require("react/jsx-runtime");
function ScaleIn({ children, delay, duration }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_framer_motion6.motion.div,
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
var import_framer_motion7 = require("framer-motion");
var import_jsx_runtime7 = require("react/jsx-runtime");
function PopIn({ children, delay, duration }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    import_framer_motion7.motion.div,
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
var import_framer_motion8 = require("framer-motion");
var import_jsx_runtime8 = require("react/jsx-runtime");
function BlurIn({ children, delay, duration }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    import_framer_motion8.motion.div,
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
var import_framer_motion9 = require("framer-motion");
var import_jsx_runtime9 = require("react/jsx-runtime");
function SlideLeft({ children, delay, duration }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    import_framer_motion9.motion.div,
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
var import_framer_motion10 = require("framer-motion");
var import_jsx_runtime10 = require("react/jsx-runtime");
function SlideRight({ children, delay, duration }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    import_framer_motion10.motion.div,
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
var import_react = require("react");
var import_framer_motion11 = require("framer-motion");

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
var import_jsx_runtime11 = require("react/jsx-runtime");
function ScrollFadeUp({ children, delay, duration }) {
  const ref = (0, import_react.useRef)(null);
  const [visible, setVisible] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => handleScrollAnimation(ref, setVisible), []);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    import_framer_motion11.motion.div,
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
var import_react2 = require("react");
var import_framer_motion12 = require("framer-motion");
var import_jsx_runtime12 = require("react/jsx-runtime");
function ScrollBlurIn({ children, delay, duration }) {
  const ref = (0, import_react2.useRef)(null);
  const [visible, setVisible] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => handleScrollAnimation(ref, setVisible), []);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    import_framer_motion12.motion.div,
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
var import_react3 = require("react");
var import_framer_motion13 = require("framer-motion");
var import_jsx_runtime13 = require("react/jsx-runtime");
function ScrollStaggerList({ children, delay }) {
  const ref = (0, import_react3.useRef)(null);
  const [visible, setVisible] = (0, import_react3.useState)(false);
  (0, import_react3.useEffect)(() => handleScrollAnimation(ref, setVisible), []);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { ref, children: children.map((child, i) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    import_framer_motion13.motion.div,
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
var import_framer_motion14 = require("framer-motion");
var import_jsx_runtime14 = require("react/jsx-runtime");
function StaggerList({ children, delay }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_framer_motion14.motion.div, { children: children.map((child, i) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    import_framer_motion14.motion.div,
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
var import_framer_motion15 = require("framer-motion");
var import_jsx_runtime15 = require("react/jsx-runtime");
function StaggerFade({ children, delay }) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, { children: children.map((child, i) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    import_framer_motion15.motion.div,
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
var import_framer_motion16 = require("framer-motion");
var import_jsx_runtime16 = require("react/jsx-runtime");
function HoverPop({ children, scale = 1.05 }) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_framer_motion16.motion.div, { whileHover: { scale }, children });
}

// src/animations/interactions/TapPress.tsx
var import_framer_motion17 = require("framer-motion");
var import_jsx_runtime17 = require("react/jsx-runtime");
function TapPress({ children, scale = 0.95 }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_framer_motion17.motion.div, { whileTap: { scale }, children });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
//# sourceMappingURL=index.js.map