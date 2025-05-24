"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { metaData } from "../config";

export function AnimatedLogo() {
  const letterVariants = {
    initial: { 
      y: 0,
      rotateX: 0,
      scale: 1,
    },
    hover: { 
      y: -2,
      rotateX: 15,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 800,
        damping: 30
      }
    }
  };

  const containerVariants = {
    initial: {},
    hover: {
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.01
      }
    }
  };

  const underlineVariants = {
    initial: { 
      scaleX: 0,
      originX: 0
    },
    hover: { 
      scaleX: 1,
      transition: {
        duration: 0.25,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <Link href="/" className="group relative block">
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileHover="hover"
        className="relative"
      >
        <div className="text-3xl font-extralight tracking-[0.1em] text-neutral-900 dark:text-neutral-100 font-serif relative">
          {metaData.title.split('').map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block relative"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
        
        {/* Enhanced gradient underline */}
        <motion.div 
          variants={underlineVariants}
          className="absolute -bottom-2 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 rounded-full shadow-lg"
        />
      </motion.div>
    </Link>
  );
} 