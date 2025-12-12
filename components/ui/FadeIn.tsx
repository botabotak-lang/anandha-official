"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export function FadeIn({ children, delay = 0, direction = "up", className = "" }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directionOffset[direction] 
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0 
      } : {}}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // 高級感のあるイージング
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

