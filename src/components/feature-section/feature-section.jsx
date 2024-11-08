// FeatureSection.js
"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faLightbulb,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "./feature-section.css";


export default function FeatureSection() {
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Define the base URL for the images
  const imageBaseUrl = "https://xealkhalej-backend.alwajez.com/";

  useEffect(() => {
    fetch("https://xealkhalej-backend.alwajez.com/api/user/services")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        setData(data || []);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the FAQ data:", error);
        setIsLoading(false);
      });
  }, []);
  const dataItem = Data.find(item => item?.title?.includes("توفير عمالة من جنسيات متعددة"));
  return (
    <div className="background-feature my-16 relative items-center justify-center md:gap-5 m-auto">
      <div className="w-full rotate-180 top-0 absolute h-46">
        <img
          src="/assets/images/divider.svg"
          alt=""
          className="footer-divider"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      {/* Top Feature Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 px-4">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center bg-white shadow-custom rounded-lg w-72 h-60  justify-center md:translate-y-[-30%] p-6  hover:translate-y-[-5%]  md:hover:translate-y-[-35%]  transition  duration-200 bn">
          <FontAwesomeIcon
            icon={faGem}
            className="text-yellow-700 text-4xl mb-4"
          />
          <h3 className="text-brown-800 text-2xl font-bold mb-6">
            السرعة والكفاءة
          </h3>
          <p className="text-gray-600">
            سرعة في الأداء، كفاءة في النتائج. نعدكم بإجراءات سريعة ونتائج تفوق
            التوقعات كل مرة
          </p>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-center text-center bg-white shadow-custom rounded-lg p-6 w-72 h-64  justify-center md:translate-y-[-10%]  md:hover:translate-y-[-15%] hover:translate-y-[-5%]   transition  duration-200">
          <FontAwesomeIcon
            icon={faLightbulb}
            className="text-yellow-700 text-4xl mb-4"
          />
          <h3 className="text-brown-800 text-2xl font-bold mb-6">
            نبتكر لنتميز
          </h3>
          <p className="text-gray-600">
            نسعى دائما للابتكار للوصول إلى استهداف يليق بتوقعاتكم ويتجاوزها
          </p>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-center text-center bg-white shadow-custom rounded-lg p-6 w-72 h-60  md:translate-y-[-30%] justify-center md:hover:translate-y-[-36%] hover:translate-y-[-5%] transition  duration-200">
          <FontAwesomeIcon
            icon={faHeadset}
            className="text-yellow-700 text-4xl mb-4"
          />
          <h3 className="text-brown-800 text-2xl font-bold mb-6">
            الدعم المتواصل
          </h3>
          <p className="text-gray-600">
            فريق متخصص للإجابة على استفساراتكم وتقديم الدعم على مدار الساعة
          </p>
        </div>
      </div>

      {/* Bottom Country Flags */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-16 mt-12 pb-12 px-4">
        {/* Bangladesh */}
        <div className="flex flex-col items-center md:mb-[15%] z-20">
        <Link href={`services/10`}>
          <div className="w-40 h-40 rounded-full bg-green-600 flex items-center justify-center transform  hover:translate-y-[-10%] transition  duration-200 ">
            <span className="text-red-500 text-5xl ">
              <img src="/assets/images/bangladesh.png" alt="" />
            </span>
          </div>
          <p className="text-white text-lg font-bold  mt-2">
          
            استقدام من بنجلاديش
          </p>
        </Link>
        </div>

        {/* Sri Lanka */}
        <div className="flex flex-col items-center md:mb-[10%] z-20 cursor-pointer">
          
          <div className="w-40 h-40 rounded-full bg-yellow-500 flex items-center justify-center transform  hover:translate-y-[-10%] transition  duration-200">
            <span className="text-brown-800 text-5xl">
              <img src="/assets/images/sri-lanka.png" alt="" />
            </span>
          </div>
          <p className="text-white text-lg font-bold mt-2">
            استقدام من سريلانكا
          </p>
        </div>
        {/* Kenya */}
        <div className="flex flex-col items-center md:mb-[0%] z-20 cursor-pointer">
        <Link href={`services/10`}>

          <div className="w-40 h-40 rounded-full bg-black flex items-center justify-center transform  hover:translate-y-[-10%] transition  duration-200">
            <span className="text-red-600 text-5xl">
              <img src="/assets/images/kenya.png" alt="" />
            </span>
          </div>
          <p className="text-white text-lg font-bold mt-2">استقدام من كينيا</p>
        </Link>

        </div>
        {/* India */}
        <div className="flex flex-col items-center md:mb-[10%] z-20 cursor-pointer">
        <Link href={`services/10`}>

          <div className="w-40 h-40 rounded-full bg-orange-500 flex items-center justify-center transform  hover:translate-y-[-10%] transition  duration-200">
            <span className="text-white text-5xl">
              <img src="/assets/images/india.png" alt="" />
            </span>
          </div>
          <p className="text-white text-lg font-bold mt-2">استقدام من الهند</p>
        </Link>

        </div>
        {/* Ethiopia */}
        <div className="flex flex-col items-center md:mb-[15%] z-20 cursor-pointer">
        <Link href={`services/10`}>

          <div className="w-40 h-40 rounded-full bg-green-700 flex items-center justify-center transform  hover:translate-y-[-10%] transition  duration-200">
            <span className="text-yellow-500 text-5xl">
              <img src="/assets/images/ethiopia.png" alt="" />
            </span>
          </div>
          <p className="text-white text-lg font-bold mt-2  z-20 cursor-pointer">
            استقدام من أثيوبيا
          </p>
        </Link>

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
