export const motionConfig = {
    duration: 0.35,
    delay: 0,
    distance: 20,
    easing: "easeOut" as const
  };
  
  export type MotionConfig = typeof motionConfig;
  
  export function setMotionConfig(newConfig: Partial<MotionConfig>) {
    Object.assign(motionConfig, newConfig);
  }
  