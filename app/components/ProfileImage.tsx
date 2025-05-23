"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { socialLinks } from "../config";

export default function ProfileImage() {
  const controls = useAnimation();

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // 1. Fade out current image in place
    await controls.start({
      opacity: 0,
      transition: { duration: 0.3 },
    });

    // 2. Instantly move image above (hidden) to prepare for drop-in
    controls.set({
      y: "-110%",
    });

    // 3. Animate image back down into place and fade in
    await controls.start({
      y: "0%",
      opacity: 1,
      transition: { type: "spring", stiffness: 500, damping: 30, duration: 0.4 },
    });
  };

  return (
    <a
      href={socialLinks.twitter}
      target="_blank"
      onClick={handleClick}
      className="block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 cursor-pointer"
      style={{ width: 168, height: 168 }}
    >
      <motion.div
        className="rounded-full border-2 border-gray-400 dark:border-gray-600 w-full h-full relative overflow-hidden bg-gray-50 dark:bg-gray-800 p-1"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div
          initial={{ y: "0%", opacity: 1 }}
          animate={controls}
        >
          <Image
            src="/profile.png"
            alt="Profile photo"
            className="rounded-full bg-gray-100 block opacity-75 hover:opacity-100 w-full h-full transition-opacity duration-300"
            unoptimized
            width={160}
            height={160}
            priority
          />
        </motion.div>
      </motion.div>
    </a>
  );
}