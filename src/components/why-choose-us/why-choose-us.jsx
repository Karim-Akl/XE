"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./style.css";
const WhyChooseUs = () => {
  // State to hold the animated values
  const [progressValues, setProgressValues] = useState({
    customerSatisfaction: 0,
    recruitmentSuccess: 0,
    timeliness: 0,
    professionalism: 0,
  });

  useEffect(() => {
    const targets = {
      customerSatisfaction: 98,
      recruitmentSuccess: 97,
      timeliness: 96,
      professionalism: 95,
    };

    const incrementProgress = (key, target) => {
      let value = 0;
      const interval = setInterval(() => {
        if (value < target) {
          value++;
          setProgressValues((prev) => ({ ...prev, [key]: value }));
        } else {
          clearInterval(interval);
        }
      }, 20); // Adjust the speed of increment
    };

    // Start incrementing for each progress bar
    Object.entries(targets).forEach(([key, target]) => {
      incrementProgress(key, target);
    });
  }, []);

  return (
    <section className="container mx-auto">
      <div className="box flex flex-col gap-5 justify-center items-center text-center m-auto p-4 ">
        <div>
          <Image
            src={"/assets/images/logo.webp"}
            alt="Person image"
            width={500}
            height={300}
          />
        </div>
        <div className="flex flex-col gap-5 justify-center items-center text-center m-auto ">
          <div className="gap-4 flex-col md:flex-row flex ">
            <span className="text-xl md:text-5xl text-textCont font-bold">
              رفيقك في رحلة البحث
            </span>
            <span className="text-xl md:text-5xl text-text font-bold border-b-4 border-text pb-3 ">
              عن العمالة المثالية
            </span>
          </div>
          <div className="gap-4 flex-col flex w-full">
            <p className="text-xl md:text-2xl text-text2  pb-3">
              نعدكم بخدمة استقدام فريدة من نوعها، تجمع بين الدقة والسرعة
            </p>
            <p className="text-xl md:text-2xl text-text2  pb-3 ">
              وكل هذا بأمانة ومهنية عالية ترضيكم
            </p>
          </div>
          <div>
            <button className=" flex hover:scale-105 transition transform duration-200 group  items-center text-white bg-background  hover:bg-textCont  px-4 py-2 rounded-lg text-[16px] font-bold gap-2">
              <span>
                <FontAwesomeIcon
                  icon={faHeadset}
                  className="w-5 h-5 text-text bg-white group-hover:bg-background group-hover:text-white  p-2 rounded-lg transition duration-200 ease-in-out  group-hover:scale-110"
                />
              </span>
              اتصل بنا 920028066
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto my-8 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/assets/images/p9-1.webp"
            alt="Person image"
            width={500}
            height={900}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Left Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            لماذا <span className="text-yellow-600">تختارنا؟</span>
          </h2>
          <p className="text-gray-600 mb-8">
            في شركة إكسي للاستقدام، نفهم جيدًا ما تبحث عنه في خدمات الاستقدام.
            تميزنا يأتي من التزامنا بتوفير تجربة استقدام استثنائية، تركز على
            الجودة، السرعة.
          </p>
          {/* Progress Bars */}
          <div className="space-y-4 box-2">
            <ProgressBar
              label="رضا العملاء"
              value={progressValues.customerSatisfaction}
            />
            <ProgressBar
              label="نجاح الاستقدام"
              value={progressValues.recruitmentSuccess}
            />
            <ProgressBar
              label="الالتزام بالمواعيد"
              value={progressValues.timeliness}
            />
            <ProgressBar
              label="الاحترافية والتدريب"
              value={progressValues.professionalism}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// ProgressBar Component
const ProgressBar = ({ label, value }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col  font-medium w-full">
        <span className="text-gray-800 font-medium text-xl">{label}</span>
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div
            style={{ width: `${value}%` }}
            className="h-full bg-background"
          ></div>
        </div>
      </div>
      <span className="bg-brown-600 text-white bg-textCont px-2 py-1 rounded-lg text-sm font-bold">
        {value}%
      </span>{" "}
    </div>
  );
};

export default WhyChooseUs;
