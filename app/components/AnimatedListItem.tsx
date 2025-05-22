"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { itemVariants } from "./AnimatedPageLayout";

interface AnimatedListItemProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function AnimatedListItem({ 
  children, 
  onClick, 
  className = "" 
}: AnimatedListItemProps) {
  return (
    <motion.button
      variants={itemVariants}
      onClick={onClick}
      className={`w-full text-left p-1 -m-2 rounded-md transition-colors ${className}`}
      whileHover={{ 
        scale: 1.01,
        transition: { 
          duration: 0.3, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
} 