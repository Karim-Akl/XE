"use client";
import { useScrollState } from "../.../../../../app/ScrollContext"; 
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faGlobe,
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";

import "./footer.css";
const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  // تابع حالة التمرير
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true); // عرض الزر بعد التمرير 300px
      } else {
        setShowButton(false); // إخفاء الزر عند العودة للأعلى
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // دالة العودة للأعلى
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full h-auto relative bottom-0 mt-32 ">
      <div className="footer-class relative h-auto flex items-center justify-center text-center w-full flex-col align-center gap-4">
        <div
          style={{ transform: "translateY(-35%) " }}
          className="xbbb hover:scale-125 top-0 flex z-20 rounded-lg overflow-hidden absolute flex-col items-center justify-evenly h-64 align-center gap-1 bg-background md:flex-row md:w-[70%]  w-[75%] "
        >
          <div className="absolute right-0 md:relative md:w-1/3  w-full opacity-0.5 z-0 h-[100%] img-class-footer">
            <img
              className="object-cover"
              src="/assets/images/bg4-1.webp"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="md:w-1/3 flex flex-col gap-4   ">
            <h2 className="textCont md:text-3xl text-xl font-bold text-textCont">
              هل لديك سؤال او استفسار؟
            </h2>
            <p className=" md:text-xl  text-white md:text-right mr-3">
              تواصل مع خدمة العملاء الان
            </p>
          </div>
          <div className="md:w-1/3 z-10 w-full mb-4">
            <button
              onClick={() => {
                window.open("https://wa.me/966559999999", "_blank");
              }}
              style={{ transition: "0.2s" }}
              className="bg-white text-textCont rounded-xl hover:bg-iconHover hover:text-text font-bold"
            >
              اتصل بنا
            </button>
          </div>
        </div>

        <div className="w-full rotate-180 top-0 absolute h-46">
          <img
            src="/assets/images/divider.svg"
            alt=""
            className="footer-divider"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className="w-full flex flex-col gap-6 mt-20 justify-center align-items-center items-center m-auto text-center">
          <div className="w-[100] justify-center align-items-center items-center m-auto text-center">
            <img
              src="/assets/images/logo-l.webp"
              alt=""
              style={{ width: "100%", maxWidth: "300px", height: "auto" }}
            />
          </div>
          <h2 className="text-xl text-white font-bold md:text-3xl">
            جسركم نحوا
            <span className="text-text text-xl font-bold md:text-3xl mr-1">
              استقدام آمن وسريع
            </span>
          </h2>
        </div>
      </div>

      <div className="footer-text flex flex-col items-center justify-around text-center w-full align-center gap-4 bg-secondary h-30 md:flex-row py-3">
        <div className="flex gap-2 p-2 items-center ">
          <FontAwesomeIcon
            icon={faHeadset}
            className="w-8 h-8 text-white text-center p-2 rounded-lg transition duration-200 ease-in-out group-hover:bg-iconHover group-hover:scale-110"
          />
          <h2 className="text-white md:text-xl text-lg  cursor-pointer group ">
            <a href="tel:920028066">
            <span className="text-text text-xl  "> الهاتف:</span>
            <span className="md:text-xl text-lg mr-1 group-hover:text-text2">920028066</span>
            </a>
          </h2>
          
        </div>
        <div className="flex gap-2 p-2 text-center items-center">
          <FontAwesomeIcon
            icon={faGlobe}
            faHeadset
            className="w-8 h-8 text-white text-center p-2 rounded-lg transition duration-200 ease-in-out group-hover:bg-iconHover group-hover:scale-110"
          />
          <h2 className="text-white md:text-2xl text-xl cursor-pointer group">
            <a href="https://www.google.com/maps?ll=26.393879,43.952109&z=15&t=m&hl=ar&gl=SA&mapclient=embed&cid=10518171101285590689">
              <span className="text-text text-xl">موقعنا:</span>
              <span className="md:text-xl text-lg mr-1 group-hover:text-text2">
                طريق أبو بكر الصديق، حي الإسكان، بريدة
              </span>
            </a>
          </h2>
        </div>
      </div>

      <div className="footer-text flex flex-col items-center justify-center text-center w-full m-auto align-center gap-4 bg-primary h-30 py-3">
        <h2 className="text-text md:text-xl text-lg">
          © جميع الحقوق محفوظة لشركة إكسي الخليج للإستقدام ٢٠٢٤
        </h2>
        <h2 className="text-white text-xs">
          تصميم وتطوير كريم عقل للتسويق الإلكتروني
        </h2>
      </div>
      {showButton && (
          <button
            onClick={scrollToTop}
            className="absolute  w-6 h-6 transform  mb-0   bottom-24 left-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-iconHover transition"
          >
            <FontAwesomeIcon icon={faArrowUp} className="w-6 h-6" />
          </button>
        )}
    </footer>
  );
};

export default Footer ;
