"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
  FaGoodreads,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/config";
import Link from "next/link";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -1,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{
        y: 0,
        transition: { duration: 0.1 }
      }}
      className="hover:opacity-80 transition-opacity duration-200"
    >
      <Icon />
    </motion.a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
      <SocialLink href={socialLinks.goodreads} icon={FaGoodreads} />
      <SocialLink href="/rss.xml" icon={FaRss} />
    </div>
  );
}

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <motion.div
        className="inline-block"
        whileHover={{
          x: -2,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        whileTap={{
          scale: 0.98,
          transition: { duration: 0.1 }
        }}
      >
        <Link
          className="no-underline group"
          href="/"
        >
          <motion.span
            className="inline-block"
            initial={false}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            <motion.time
              className="group-hover:opacity-0 group-hover:scale-75 transition-all duration-300 inline-block"
              style={{ position: "relative" }}
            >
              © {YEAR}
            </motion.time>
            <motion.span
              className="absolute opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 text-lg"
              style={{ 
                position: "absolute", 
                left: 0, 
                top: "50%", 
                transform: "translateY(-50%)",
              }}
            >
              ←
            </motion.span>
          </motion.span>{" "}
          <motion.span
            className="transition-colors duration-300"
            whileHover={{
              x: 2,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            {metaData.title}
          </motion.span>
        </Link>
      </motion.div>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}
