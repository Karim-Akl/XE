"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import "./services.css";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
const Services = () => {
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
  return (
    <div>
      <Header />
      <section className=" flex flex-wrap container m-auto justify-center items-center text-center  gap-5  ">

          <div className="  services flex justify-center items-center text-center m-auto relative mt-10  overflow-hidden mb-10 ">
            <div className="relative w-96 ">
            <Link href="/services-details "> 
              <img src="/assets/images/p5-3-600x413.png" alt="" width={"100%"} />
            </Link>
            </div>
            <div className="text-class-services absolute text-white translate-y-[-100%] h-full w-full ">
              <h2 className="  text-3xl font-bold">استقدام عاملة منزلية</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="absolute left-10 bottom-20"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </div>
          </div>
          <div className="  services flex justify-center items-center text-center m-auto relative mt-10  overflow-hidden mb-10 ">
            <div className="relative w-96 ">
            <Link href="/services-details "> 
              <img src="/assets/images/p5-3-600x413.png" alt="" width={"100%"} />
            </Link>
            </div>
            <div className="text-class-services absolute text-white translate-y-[-100%] h-full w-full ">
              <h2 className="  text-3xl font-bold">استقدام عاملة منزلية</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="absolute left-10 bottom-20"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </div>
          </div>
          <div className="  services flex justify-center items-center text-center m-auto relative mt-10  overflow-hidden mb-10 ">
            <div className="relative w-96 ">
            <Link href="/services-details "> 
              <img src="/assets/images/p5-3-600x413.png" alt="" width={"100%"} />
            </Link>
            </div>
            <div className="text-class-services absolute text-white translate-y-[-100%] h-full w-full ">
              <h2 className="  text-3xl font-bold">استقدام عاملة منزلية</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="absolute left-10 bottom-20"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </div>
          </div>
          <div className="  services flex justify-center items-center text-center m-auto relative mt-10  overflow-hidden mb-10 ">
            <div className="relative w-96 ">
            <Link href="/services-details "> 
              <img src="/assets/images/p5-3-600x413.png" alt="" width={"100%"} />
            </Link>
            </div>
            <div className="text-class-services absolute text-white translate-y-[-100%] h-full w-full ">
              <h2 className="  text-3xl font-bold">استقدام عاملة منزلية</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="absolute left-10 bottom-20"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </div>
          </div>
          <div className="  services flex justify-center items-center text-center m-auto relative mt-10  overflow-hidden mb-10 ">
            <div className="relative w-96 ">
            <Link href="/services-details "> 
              <img src="/assets/images/p5-3-600x413.png" alt="" width={"100%"} />
            </Link>
            </div>
            <div className="text-class-services absolute text-white translate-y-[-100%] h-full w-full ">
              <h2 className="  text-3xl font-bold">استقدام عاملة منزلية</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="absolute left-10 bottom-20"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </div>
          </div>
          <div className="  services flex justify-center items-center text-center m-auto relative mt-10  overflow-hidden mb-10 ">
            <div className="relative w-96 ">
            <Link href="/services-details "> 
              <img src="/assets/images/p5-3-600x413.png" alt="" width={"100%"} />
            </Link>
            </div>
            <div className="text-class-services absolute text-white translate-y-[-100%] h-full w-full ">
              <h2 className="  text-3xl font-bold">استقدام عاملة منزلية</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="absolute left-10 bottom-20"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </div>
          </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
