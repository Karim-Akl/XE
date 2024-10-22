"use client"; // تأكد من إضافة هذا السطر

import { useState, useEffect } from "react";
import "./collabse-list.css";

const Collabse = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // حالة التحميل

  useEffect(() => {
    // Fetching data from the API
    fetch("https://admin.monzarentcar.com/api/faq")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Data:", data);
        if (data && data.length > 0) {
          const formattedFaqs = data.map((item) => ({
            question: item.question["en"], // تأكد من أن الحقول متوفرة
            answer: item.answer["en"], // يمكن تعديل اللغة حسب الحاجة
          }));
          setFaqs(formattedFaqs);
        } else {
          console.log("No data returned from API");
        }
        setIsLoading(false); // انتهاء التحميل
      })
      .catch((error) => {
        console.error("Error fetching the FAQ data:", error);
        setIsLoading(false); // في حالة وجود خطأ، انتهاء التحميل
      });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="flex gap-10">
        <span className="text-5xl  text-white py-4 px-7  bg-bgIcon rounded-xl">
          ?
        </span>
        <div className="flex flex-col gap-2 mt-3">
          <span className="text-3xl  text-textCont">أسئلة وأجوبة</span>
          <span className="text-textCont">أسئلة متكررة</span>
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-center w-full m-auto">
          <img src="/assets/images/loader.gif" alt="Loading..." width={50} />
        </div>
      ) : faqs.length === 0 ? (
        <p>No FAQs available at the moment.</p> // رسالة في حالة عدم وجود بيانات
      ) : (
        faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span
                className={`faq-icon ${activeIndex === index ? "open" : ""}`}
              >
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Collabse;
