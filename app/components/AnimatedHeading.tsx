"use client";
import { motion } from "framer-motion";

export default function AnimatedHeading() {
  return (
    <motion.h1 
      className="mb-8 text-2xl font-medium"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {["Hey,", "I'm", "Leck."].map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className="inline-block mr-1.5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4, 
            delay: 0.4 + wordIndex * 0.25,
            type: "spring",
            stiffness: 200
          }}
          style={{ cursor: "default" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}