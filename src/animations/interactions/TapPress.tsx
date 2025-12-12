'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface TapPressProps {
  children: ReactNode;
  scale?: number;
}

export function TapPress({ children, scale = 0.95 }: TapPressProps) {
  return <motion.div whileTap={{ scale }}>{children}</motion.div>;
}

