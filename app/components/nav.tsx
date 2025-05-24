"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeSwitch } from "./theme-switch";
import { AnimatedLogo } from "./animated-logo";

const navItems = {
  "/": { name: "About" },
  "/projects": { name: "Projects" },
  "/blog": { name: "Blog" },
  // "/photos": { name: "Photos" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <AnimatedLogo />
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              <motion.span
                whileHover={{
                  y: -1,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{
                  y: 0,
                  transition: { duration: 0.1 }
                }}
                className="relative"
              >
                {name}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-current"
                  initial={{ width: 0 }}
                  whileHover={{
                    width: "100%",
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                />
              </motion.span>
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
