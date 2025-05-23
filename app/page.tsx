"use client";
import Image from "next/image";
import { socialLinks } from "./config";
import { motion, useAnimation } from "framer-motion";
import Quotes from "./components/Quotes";

export default function Page() {
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
    <section>
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
              delay: 0.4 + wordIndex * 0.15,
              type: "spring",
              stiffness: 200
            }}
            style={{ cursor: "default" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a software engineer in San Francisco, currently working on startups.
        </p>
        <p>
          Previously, I was at a few
          {" "}
          <a
            href="https://www.linkedin.com/in/leck-tang-b15b89171"
            target="_blank"
          >
            other companies
          </a>
          {" "}
          where I helped implement AI intake for home services and built visualization tools for infrastructure planning.
        </p>
        <p>
          Before that, I graduated from Yale with a double major in CS and Econ, and in high school, I published programming manuals for Java in the Apple iBooks store.
        </p>
        <p>
          I'm excited about fintech, b2b saas, startups, AI, VR, and health tech.
        </p>
        <p>
          Would you like to chat with my{" "}
          <a href="/" target="_blank">
            digital avatar
          </a>
          ?
        </p>
      </div>
      <Quotes />
    </section>
  );
}
