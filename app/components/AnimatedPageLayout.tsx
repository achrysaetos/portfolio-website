"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedPageLayoutProps {
  title: string;
  children: ReactNode;
  showFooterLink?: boolean;
  footerLinkText?: string;
  footerLinkHref?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.16,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: "blur(4px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.48,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: -20,
    filter: "blur(4px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.64,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

export default function AnimatedPageLayout({ 
  title, 
  children, 
  showFooterLink = false,
  footerLinkText,
  footerLinkHref 
}: AnimatedPageLayoutProps) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="mb-8 text-2xl font-medium"
        variants={titleVariants}
      >
        {title}
      </motion.h1>
      <motion.div variants={containerVariants}>
        {children}
      </motion.div>
      {showFooterLink && footerLinkText && footerLinkHref && (
        <motion.div 
          className="float-right text-sm text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              delay: 0.64,
              duration: 0.48,
              ease: [0.25, 0.25, 0, 1]
            }
          }}
          whileHover={{ 
            x: 5,
            transition: { duration: 0.16, ease: "easeOut" }
          }}
        >
          <a href={footerLinkHref} target="_blank" rel="noopener noreferrer">
            {footerLinkText}
          </a>
        </motion.div>
      )}
    </motion.section>
  );
}

export { itemVariants };