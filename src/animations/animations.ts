// src/lib/animations.ts

import type { Variants,TargetAndTransition  } from "framer-motion";

type Custom = number;
const withDelay = (
  animation: TargetAndTransition,
  custom: number = 0
): TargetAndTransition => ({
  ...animation,
  transition: {
    duration: 0.6,
    ease: "easeOut",
    delay: custom,
  },
});

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: Custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: (custom: Custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: (custom: Custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: (custom: Custom = 0) => ({
    transition: {
      staggerChildren: 0.14,
      delayChildren: custom * 0.2,
    },
  }),
};

export const motionProps = {
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: { once: true } as const,
};


