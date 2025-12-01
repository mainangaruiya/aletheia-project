import React, { useState } from "react";

interface AccordionItem {
  id: number;
  title: string;
  content: React.ReactNode;
  isOpen?: boolean;
}

interface AccordionProps {
  items: AccordionItem[];
  title?: string;
  description?: string;
}

const Accordion: React.FC<AccordionProps> = ({ 
  items, 
  title = "Program Details", 
  description = "Discover how our program is uniquely structured and adapted to support vulnerable youth effectively." 
}) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-text-light dark:text-text-dark text-3xl font-bold mb-2">{title}</h2>
          <p className="text-text-muted-light dark:text-text-muted-dark">{description}</p>
        </div>

        {/* Accordion Container */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-xl overflow-hidden border border-border-light dark:border-border-dark divide-y divide-border-light dark:divide-border-dark">
          {items.map((item, index) => (
            <div key={item.id} className="border-b border-border-light dark:border-border-dark last:border-b-0">
              <button
                className="w-full flex justify-between items-center p-5 text-lg font-medium text-left focus:outline-none hover:bg-surface-dark/5 dark:hover:bg-surface-light/5 transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                <span className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                  </svg>
                </span>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="p-5 pt-0">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
