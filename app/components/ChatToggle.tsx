"use client";
import { useState } from "react";
import ChatBox from "./ChatBox";
import Quotes from "./Quotes";

export default function ChatToggle() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatOpen = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsChatOpen(true);
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
  };

  return (
    <>
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
          Would you like to chat with my digital{" "}
          <a href="#" onClick={handleChatOpen} className="cursor-pointer">
            rabbit avatar
          </a>
          ?
        </p>
      </div>
      {isChatOpen ? (
        <ChatBox onClose={handleChatClose} />
      ) : (
        <Quotes />
      )}
    </>
  );
}