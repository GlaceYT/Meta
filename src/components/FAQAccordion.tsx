import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [heights, setHeights] = useState<number[]>([]);

  const faqs = [
    {
      question: "What is META Bot?",
      answer: "META is a feature-rich Discord bot designed to enhance your server experience. With customizable options and over 200 commands, it provides a comprehensive solution for all your server needs."
    },
    {
      question: "Does META support slash commands and prefixes?",
      answer: "Yes, META offers both slash commands and prefix commands. However, please note that the slash commands are limited to 100 available commands to ensure optimal performance."
    },
    {
      question: "Does META save user data?",
      answer: "META prioritizes user privacy and security by only storing guild information and owner details. This approach ensures enhanced security without compromising your data."
    },
    {
      question: "Is admin permission necessary for all features?",
      answer: "META comes equipped with powerful moderation tools and anti-abuse modules that require admin permissions. This ensures that the bot operates effectively while maintaining server security."
    },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleHover = (index: number) => {
    setHoverIndex(index);
  };

  useEffect(() => {
    const newHeights = faqs.map((faq) => {
      return document.getElementById(`answer-${faq.question}`)?.scrollHeight || 0;
    });
    setHeights(newHeights);
  }, [faqs]);

  return (
    <div className="flex ml-10 mr-10 flex-col md:flex-row bg-black text-white p-8">
      <div className="md:w-1/3 mb-4 md:mb-0">
        <h2 className="text-3xl font-bold text-gradient">Frequently Asked Questions</h2>
        <p className="mt-2 text-lg text-gray-400">Find answers to common questions below.</p>
      </div>
      <div className="md:w-2/3">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            active={activeIndex === index}
            onHover={() => handleHover(index)}
            onLeave={() => setHoverIndex(null)}
            onClick={() => handleToggle(index)}
            question={faq.question}
            height={heights[index]}
            answer={faq.answer}
            isHovered={hoverIndex === index}
          />
        ))}
      </div>
    </div>
  );
};

interface FAQItemProps {
  active: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
  question: string;
  height: number;
  answer: string;
  isHovered: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ active, onHover, onLeave, onClick, question, height, answer, isHovered }) => (
  <div
    className="border-b border-gray-700 relative overflow-hidden rounded-xl" // Added rounded-xl
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    {/* Question Header */}
    <div
      className={`flex justify-between items-center p-4 cursor-pointer transition-colors duration-200 relative rounded-lg shadow-lg backdrop-filter backdrop-blur-md bg-black bg-opacity-60 ${
        active ? 'bg-gray-800' : 'hover:bg-gray-700'
      }`}
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold">{question}</h3>
      <span>{active ? <FaChevronUp /> : <FaChevronDown />}</span>

      {/* Animated Progress Bar */}
      {isHovered && (
        <ProgressBar
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          exit={{ width: 0 }}
        />
      )}
    </div>

    {/* Answer */}
    <motion.div
      initial={false}
      animate={{
        opacity: active ? 1 : 0,
        height: active ? `${height}px` : 0,
      }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="bg-gray-800 overflow-hidden rounded-lg shadow-inner" // More rounding
      id={`answer-${question}`}
    >
      {active && <p className="p-4">{answer}</p>}
    </motion.div>
  </div>
);

export default FAQAccordion;

// Styled Components
const ProgressBar = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 4px;
  background: linear-gradient(to right, #809cff, #ff809c);
  transition: width 0.5s ease;
  transform: translateX(-50%);
  border-radius: 2px;
`;
