"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { itemVariants } from "./AnimatedPageLayout";

interface AnimatedListItemProps {
  children: ReactNode;
}

export default function AnimatedListItem({ children }: AnimatedListItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        y: -1,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
} 