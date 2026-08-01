"use client";
import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { useWordCarousel } from "./text-word-carousel-utils/use-word-carousel";

export function TextWordCarousel({
  words,
  interval,
  className,
  duration = 0.3,
  ...props
}) {
  const { currentWord, key } = useWordCarousel({ words, interval });
  return (
    <span className="inline-block relative min-w-[3em] text-left">
      <AnimatePresence mode="wait">
        <motion.span
          key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration }}
          className={cn("inline-block", className)}
          {...props}
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default TextWordCarousel;
