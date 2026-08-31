import { Variants } from "framer-motion";

export const architecturalEase = [0.16, 1, 0.3, 1] as const;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: architecturalEase,
    },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: architecturalEase,
    },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: architecturalEase,
    },
  },
};

export const slideReveal: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.0,
      ease: architecturalEase,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const imageReveal: Variants = {
  hidden: { scale: 1.08, opacity: 0.4 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: architecturalEase,
    },
  },
};

export const heroImageScale: Variants = {
  initial: { scale: 1.05 },
  animate: {
    scale: 1,
    transition: {
      duration: 8.0,
      ease: "easeOut",
    },
  },
};

export const lineExpand: Variants = {
  hidden: { scaleX: 0, transformOrigin: "left" },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.2,
      ease: architecturalEase,
    },
  },
};
