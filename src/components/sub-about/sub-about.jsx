"use client";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faHeadset,
  faClock,
  faLock,
  faUsers,
  faGlobe,
  faLightbulb,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const SubAbout = () => {
  return (
    <div>
    <div className=" flex flex-col md:flex-row items-center p-8 bg-white justify-between gap-8">
      {/* Image Section */}

      {/* Text and Icons Section */}
      <div className="w-full md:w-1/2 text-right">
        <h2 className="text-3xl font-bold text-gray-700 mb-4 ">من نحن؟</h2>
        <p className="text-text leading-relaxed mb-6 w-[80%]">
          مرحبًا بكم في شركة إكسي للاستقدام، رائدة في مجال توفير خدمات الاستقدام
          الموثوقة والمتميزة في المملكة العربية السعودية. منذ تأسيسنا في عام
          2016، نلتزم بجعل عملية الاستقدام أسهل وأكثر أمانًا لعملائنا، مع
          التركيز على جودة الخدمة ورضا العميل.
        </p>

        {/* Icons Section */}
        <div className="grid grid-cols-2 gap-4 ">
          <div className="flex items-center gap-4 group hover:scale-105 transition transform duration-200 group hover:scale-105 transition transform duration-200">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="w-8 h-8 text-white bg-background p-2 rounded-lg transition duration-200 ease-in-out group-hover:bg-iconHover group-hover:scale-110 transition duration-200 ease-in-out group-hover:bg-iconHover group-hover:scale-110"
            />
            <span className="text-xl ">جودة مضمونة</span>
          </div>

          <div className="flex items-center gap-4 group hover:scale-105 transition transform duration-200">
            <FontAwesomeIcon
              icon={faHeadset}
              className="w-8 h-8 text-white bg-background p-2 rounded-lg transition duration-200 ease-in-out group-hover:bg-iconHover group-hover:scale-110"
            />
            <span className="text-xl ">دعم فوري</span>
          </div>
          <div className="flex items-center gap-4 group hover:scale-105 transition transform duration-200">
            <FontAwesomeIcon
              icon={faClock}
              className="w-8 h-8 text-white bg-background p-2 rounded-lg transition duration-200 ease-in-out group-hover:bg-iconHover group-hover:scale-110"
            />
            <span className="text-xl ">استقدام سريع</span>
          </div>
          <div className="flex items-center gap-4 group hover:scale-105 transition transform duration-200">
            <FontAwesomeIcon
              icon={faLock}
              className="w-8 h-8 text-white bg-background p-2 rounded-lg transition duration-200 ease-in-out group-hover:bg-iconHover group-hover:scale-110"
            />
            <span className="text-xl ">أمان وثقة</span>
          </div>
          <div className="flex items-center gap-4 group hover:scale-105 transition transform duration-200">
            <FontAwesomeIcon
              icon={faUsers}
              className="w-8 h-8 text-white bg-background p-2 rounded-lg transition duration-200 ease-in-out group-hover:bg-iconHover group-hover:scale-110"
            />
            <span className="text-xl ">عمالة مختارة</span>
          </div>
          <div className="flex items-center gap-4 group hover:scale-105 transition transform duration-200">
            <FontAwesomeIcon
              icon={faGlobe}
              className="w-8 h-8 text-white bg-background p-2 rounded-lg transition duration-200 ease-in-out group-hover:bg-iconHover group-hover:scale-110"
            />
            <span className="text-xl ">خدمة عالمية</span>
          </div>
          <div className="flex items-center gap-4 group hover:scale-105 transition transform duration-200">
            <FontAwesomeIcon
              icon={faLightbulb}
              className="w-8 h-8 text-white bg-background p-2 rounded-lg transition duration-200 ease-in-out group-hover:bg-iconHover group-hover:scale-110"
            />
            <span className="text-xl ">ابتكار مستمر</span>
          </div>
          <div className="flex items-center gap-4 group hover:scale-105 transition transform duration-200">
            <FontAwesomeIcon
              icon={faSun}
              className="w-8 h-8 text-white bg-background p-2 rounded-lg transition duration-200 ease-in-out group-hover:bg-iconHover group-hover:scale-110"
            />
            <span className="text-xl">خبرة واسعة</span>
          </div>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
        <img
          src="/assets/images/bk01-1.webp" // استبدل المسار بالمسار الفعلي للصورة
          alt="Office"
          className="rounded-lg opacity-70 w-full h-auto object-cover"
        />
        <div className="w-30 h-20 flex flex-col  items-center m-auto justify-center text-center absolute bottom-4 left-4 bg-background text-white text-center px-4 py-2 rounded-lg hover:scale-105 hover:bg-iconHover transition transform duration-200">
          <p className="text-xl font-bold">+10</p>
          <p>سنوات من الخبرة</p>
        </div>
      </div>
    </div>

    
    </div>
  );
}

export default SubAbout;
