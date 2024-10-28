"use client";

import { useState, useEffect } from "react";
import "./collabse-list.css";

const Collabse = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://xealkhalej-backend.alwajez.com/api/faqs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Data:", data);
        setIsLoading(false);
        setFaqs(data.faqs || []); // Access `faqs` array from `data`
      })
      .catch((error) => {
        console.error("Error fetching the FAQ data:", error);
        setIsLoading(false);
      });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="flex gap-10">
        <span className="text-5xl text-white py-4 px-7 bg-bgIcon rounded-xl">?</span>
        <div className="flex flex-col gap-2 mt-3">
          <span className="text-3xl text-textCont">أسئلة وأجوبة</span>
          <span className="text-textCont">أسئلة متكررة</span>
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-center w-full m-auto">
          <img src="/assets/images/loader.gif" alt="Loading..." width={50} />
        </div>
      ) : faqs.length === 0 ? (
        <p>No FAQs available at the moment.</p>
      ) : (
        faqs.map((faq, index) => (
          <div key={faq.id} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className={`faq-icon ${activeIndex === index ? "open" : ""}`}>
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))
      )}
    </div>
  );
};

export default Collabse;
