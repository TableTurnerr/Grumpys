"use client";
import React, { JSX, useState } from 'react';

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

interface FAQSectionProps {
  title?: string;
  faqItems: FAQItem[];
}

const FAQ: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  faqItems
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full px-[20px] md:px-[70px] py-0">
      <h2 className="text-h2 mb-[32px] sm:text-left text-center">
        <span className="sm:hidden">FAQs</span>
        <span className="hidden sm:inline">{title}</span>
      </h2>

      <div className="space-y-[10px]">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="w-full py-4 flex justify-between items-center text-left"
              onClick={() => toggleQuestion(index)}
            >
              <span className="text-normal4 sm:text-normal2 font-medium text-[#1A1A1A]">{item.question}</span>
              <svg
                className={`w-5 h-5 transition-transform text-gray-500 ${openIndex === index ? 'transform rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 py-[20px] border-t border-gray-200 bg-gray-50' : 'max-h-0'
                }`}
            >
              <p className="text-[var(--tt-color-text-gray)] text-normal3 pl-[10px]">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
