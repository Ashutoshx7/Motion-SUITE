'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface HoverPopProps {
  children: ReactNode;
  scale?: number;
}

export function HoverPop({ children, scale = 1.05 }: HoverPopProps) {
  return <motion.div whileHover={{ scale }}>{children}</motion.div>;
}

