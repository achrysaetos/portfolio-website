"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "The mind is everything. What you think you become. - Buddha",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "The best way to predict the future is to create it. - Peter Drucker",
];

export default function Quotes() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 100;
  const deletingSpeed = 25;
  const delayBetweenQuotes = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % quotes.length;
      const fullText = quotes[i];

      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), delayBetweenQuotes);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }
    };

    const ticker = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(ticker);
  }, [currentText, isDeleting, loopNum, quotes, typingSpeed, deletingSpeed, delayBetweenQuotes]);

  return (
    <div className="mt-8 text-md font-light text-center h-20 italic">
      <AnimatePresence mode="wait">
        <motion.span
          key={quoteIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
      <span className="animate-ping">|</span>
    </div>
  );
} 