"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "Happiness is a choice, not a result. Nothing will make you happy until you choose to be happy. - Naval Ravikant",
  "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
  "Ideas are worthless without execution. They are just a multiplier. Execution is worth millions. - Steve Jobs",
  "If you're not embarrassed by the first version of your product, you've launched too late. - Reid Hoffman",
  "The art of reading minds is the ability to understand incentives. - Naval Ravikant",
  "Play iterated games. All the returns in life, whether in wealth, relationships, or knowledge, come from compound interest. - Naval Ravikant",
  "Arm yourself with specific knowledge, accountability, and leverage. - Naval Ravikant",
  "Fortunes are made by buying low and selling high or by creating new things. - Naval Ravikant",
  "Desire is a contract you make with yourself to be unhappy until you get what you want. - Naval Ravikant",
  "The secret of change is to focus all of your energy not on fighting the old, but on building the new. - Socrates",
  "You can't connect the dots looking forward; you can only connect them looking backwards. - Steve Jobs",
  "Specific knowledge is knowledge you cannot be trained for. If society can train you, it can train someone else and replace you. - Naval Ravikant",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "Think of yourself as dead. You have lived your life. Now, take what's left and live it properly. - Marcus Aurelius",
  "Leverage comes in labor, capital, or products with no marginal cost of replication. - Naval Ravikant",
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. - Steve Jobs",
  "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction. - Barack Obama",
  "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill",
  "The biggest waste of time is to do well something that should not be done at all. - Peter Drucker",
  "Most people die at 25 and aren't buried until 75. - Benjamin Franklin",
  "The secret to success is to offend the greatest number of people. - George Bernard Shaw",
  "Your salary is the bribe they give you to forget your dreams. - Naval Ravikant",
  "Being busy is a form of laziness—lazy thinking and indiscriminate action. - Tim Ferriss",
  "Most people overestimate what they can do in a year and underestimate what they can do in 10 years. - Bill Gates",
  "The fastest way to succeed is to double your failure rate. - Thomas Watson",
  "Most people are other people. Their thoughts are someone else's opinions. - Oscar Wilde",
  "If you can't explain it simply, you don't understand it well enough. Or you're trying to sound smart. - Einstein",
  "Most people will choose unhappiness over uncertainty. - Tim Ferriss",
  "The education system is designed to create employees, not entrepreneurs. - Robert Kiyosaki",
  "The person who says it cannot be done should not interrupt the person doing it. - Chinese Proverb",
];

export default function Quotes() {
  const [quoteIndex, setQuoteIndex] = useState(() => Math.floor(Math.random() * quotes.length));
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const typingSpeed = 50;
  const deletingSpeed = 15;
  const delayBetweenQuotes = 4000;

  // Function to get a random quote index that's different from the current one
  const getRandomQuoteIndex = (currentIndex: number) => {
    if (quotes.length <= 1) return 0;
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentIndex);
    return newIndex;
  };

  useEffect(() => {
    // Don't run the animation if the user is hovering
    if (isHovered) return;

    const handleTyping = () => {
      const fullText = quotes[quoteIndex];

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
        setQuoteIndex(getRandomQuoteIndex(quoteIndex));
      }
    };

    const ticker = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(ticker);
  }, [currentText, isDeleting, loopNum, quoteIndex, isHovered, typingSpeed, deletingSpeed, delayBetweenQuotes]);

  return (
    <div 
      className="mt-8 text-md font-light text-center h-20 italic"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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