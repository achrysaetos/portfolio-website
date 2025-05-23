"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/config";

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
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
      <SocialLink href="/rss.xml" icon={FaRss} />
    </div>
  );
}

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time>{" "}
      <a
        className="no-underline"
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        {metaData.title}
      </a>
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
