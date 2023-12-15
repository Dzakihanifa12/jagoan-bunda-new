"use client";
import { useState, useEffect } from 'react';

const faq_url = "http://localhost:8000/api/faq/";

interface Ifaq {
  id: number;
  question: string;
  answer: string;
}

export default function FaQ() {
  const [faqData, setFaqData] = useState<Ifaq[]>([]);
  const [accordionOpen, setAccordionOpen] = useState<boolean[]>([]);

  useEffect(() => {
    async function fetchFaqData() {
      try {
        const response = await fetch(faq_url);
        const data: Ifaq[] = await response.json();
        setFaqData(data);
        setAccordionOpen(Array(data.length).fill(false));
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
      }
    }

    fetchFaqData();
  }, []);

  const toggleAccordion = (index: number) => {
    setAccordionOpen((prevState) =>
      prevState.map((isOpen, i) => (i === index ? !isOpen : false))
    );
  };

  return (
    <>
      <div className="mt-4 text-center">
        <h3 className="text-4xl font-bold mt-20 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">FAQ</h3>
        <h2 className="text-2xl font-bold text-black">
          Frequently Asked Question
        </h2>
      </div>
      <div className="container py-8 mt-4 w-3/5">
        {faqData.map((faqItem, index) => (
          <div className="py-2 border mx-auto px-4" key={index}>
            <h2>
              <button
                className="flex items-center justify-between w-full text-left font-semibold py-2"
                onClick={(e) => {
                  e.preventDefault();
                  toggleAccordion(index);
                }}
                aria-expanded={accordionOpen[index]}
                aria-controls={`accordion-text-${faqItem.id}`}
              >
                <span>{faqItem.question}</span>
                <svg
                  className="fill-amber-600 shrink-0 ml-8"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center transition duration-200 ease-out ${
                      accordionOpen[index] ? "rotate-180" : ""
                    }`}
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-text-${faqItem.id}`}
              role="region"
              aria-labelledby={`accordion-title-${faqItem.id}`}
              className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
                accordionOpen[index]
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-3">{faqItem.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
