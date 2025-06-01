import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "for Course Creators",
  "with Oracle SaaS",
  "with AI-Powered Ads",
  "to Maximize Revenue",
  "and Save Time",
];

export function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex h-[1.1em] items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-3xl sm:text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}