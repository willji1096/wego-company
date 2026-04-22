"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: RevealProps) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: shouldReduce ? 0 : 0.85,
        ease: [0.19, 1, 0.22, 1],
        delay: shouldReduce ? 0 : delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
