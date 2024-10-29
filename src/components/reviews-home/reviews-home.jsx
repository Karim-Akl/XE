"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./reviews-home.css";

export default function OrderNow() {
  const [isPlaying, setIsPlaying] = useState(false);

  // بيانات الإحصائيات
  const stats = [
    {
      endValue: 98,
      suffix: "%",
      label: "نسبة رضا العملاء",
      marginBottom: "15%",
    },
    {
      endValue: 4500,
      suffix: "+",
      label: "العقود الموثقة",
      marginBottom: "10%",
    },
    {
      endValue: 5000,
      suffix: "+",
      label: "عدد العمالة المستخدمة",
      marginBottom: "0%",
    },
    {
      endValue: 10,
      suffix: "+",
      label: "سنوات من الثقة والتميز",
      marginBottom: "10%",
    },
    {
      endValue: 10,
      suffix: "+",
      label: "سنوات من الثقة والتميز",
      marginBottom: "15%",
    },
  ];

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="background-feature my-16 relative md:justify-center md:gap-5">
      <div className="w-full rotate-180 top-0 absolute h-46">
        <img
          src="/assets/images/divider.svg"
          alt=""
          className="footer-divider"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="container mx-auto px-4 flex flex-col justify-center items-center md:translate-y-[-15%]">
        {/* قسم الفيديو */}
        <div className="background-review my-8 rounded-lg overflow-hidden shadow-lg relative md:w-[50%] w-full h-80 flex justify-center items-center">
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute z-10 flex flex-col items-center bg-white bg-opacity-80 rounded-lg p-4 transition duration-300 hover:bg-white shadow-lg"
            >
              <FontAwesomeIcon
                icon={faPlay}
                size="3x"
                style={{ fontSize: "2rem" }}
                className="text-yellow-500 "
              />
              <h2 className="mt-2 text-lg font-bold text-gray-800 text-center">
                شاهد تقيمات العملاء ✮✮✮✮✮
              </h2>
            </button>
          )}
          {isPlaying && (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/-It4ys86uQc?autoplay=1&controls=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          )}
        </div>

        {/* قسم الإحصائيات */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16 mt-12 pb-12 px-4">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              endValue={stat.endValue}
              suffix={stat.suffix}
              label={stat.label}
              marginBottom={stat.marginBottom}
            />
          ))}
        </div>
      </div>
      <div className="w-full bottom-0 absolute h-46 ">
        <img
          src="/assets/images/divider.svg"
          alt=""
          className="footer-divider"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="md:bottom-10 bottom-0 absolute w-16 bg-white  rounded-full bn p-5 items-center m-auto ">
        <img
          src="/assets/images/icon6-1.png"
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}

// مكون الإحصائية الفردي مع تأثير العداد
function StatCard({ endValue, suffix, label, marginBottom }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startValue = 0;
    const duration = 2000; // المدة الزمنية لزيادة العداد (بالملي ثانية)
    const increment = endValue / (duration / 20); // قيمة الزيادة التدريجية

    const counter = setInterval(() => {
      startValue += increment;
      if (startValue >= endValue) {
        setValue(endValue);
        clearInterval(counter);
      } else {
        setValue(Math.floor(startValue));
      }
    }, 20);

    return () => clearInterval(counter);
  }, [endValue]);

  return (
    <div
      className="flex flex-col items-center z-20 cursor-pointer"
      style={{ marginBottom }}
    >
      <div className="w-40 h-40 rounded-full bg-background flex items-center justify-center transform hover:translate-y-[-10%] transition duration-200">
        <span className="text-white font-bold text-4xl">
          {value}
          {suffix}
        </span>
      </div>
      <p className="text-text2 text-lg font-bold mt-2 z-20 cursor-pointer">
        {label}
      </p>
    </div>
  );
}
