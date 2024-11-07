"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faMapMarkerAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showServices, setShowServices] = useState(false); // لحالة إظهار الخدمات
  useEffect(() => {
    fetch("https://xealkhalej-backend.alwajez.com/api/user/services")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        setOptions(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <header className="relative top-0 w-full flex justify-center align-content-center m-auto flex-col items-center md:flex-col">
      <div className="flex flex-col w-full relative items-center hedtop m-auto">
        <nav className="nav flex justify-around w-full bg-secondary py-5 h-32 align-top relative">
          <div
            className="py-5 h-32 align-top absolute flex justify-around w-full"
            style={{ transform: "translateY(-6%)" }}
          >
            <div className="flex items-top justify-between gap-3">
              <p className="text-smText">لديك استفسار؟ راسلنا الان</p>
              <p className="flex items-top gap-2 hover:text-text space-x-3 text-text2">
                <span>
                  <img
                    src="/assets/images/WhatsApp.svg_ copy.webp"
                    alt=""
                    width={20}
                  />
                </span>
                ٠٥٩٢٢٩٣٣٠٠
              </p>
            </div>
            <ul className="flex items-top gap-3">
              <li className="text-smText hover:text-text">
                <Link href="/faq">الأسئلة الشائعة</Link>
              </li>
              <li className="text-smText hover:text-text">/</li>
              <li className="text-smText hover:text-text">
                <Link href="/conditions">الشروط والأحكام</Link>
              </li>
              <li className="text-smText hover:text-text">/</li>
              <li className="text-smText hover:text-text">
                <Link href="/privacy-policy">سياسة الخصوصية</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="z-10 bg-white md:w-[85%] sm:w-[98%] sm:mb-5 absolute p-2 translate-y-20 rounded-xl h-auto flex items-center justify-between">
          <div className="w-1/3">
            <Link href="/">
              <img
                className="object-cover"
                src="/assets/images/logo.webp"
                alt="logo"
                width={250}
              />
            </Link>
          </div>
          <div className="w-1/2 flex justify-evenly items-right text-right flex-col">
            <div className="lin-1 flex gap-8">
              <div className="flex gap-5 hover:text-text">
                <div className="icon-1 text-primary iconeee">
                  <FontAwesomeIcon icon={faPhoneAlt} className="text-icon" />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="font-bold text-xl text-smText">اتصل بنا: </p>
                  <p className="font-bold md:text-lg xl:text-lg text-textCont">
                    920028066
                  </p>
                </div>
              </div>
              <div className="flex gap-5 hover:text-text">
                <div className="icon-1 text-primary iconeee">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-icon"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="font-bold text-xl text-smText">العنوان:</p>
                  <p className="font-bold md:text-lg xl:text-lg text-textCont">
                    طريق أبو بكر الصديق، حي الإسكان، بريدة
                  </p>
                </div>
              </div>
            </div>
            <div className="devi"></div>
            <div className="lin-2 flex justify-around  text-center justify-center items-center">
              <ul className="flex gap-5">
                <li className="text-textCont hover:text-text">
                  <Link href="/">الصفحة الرئيسية</Link>
                </li>
                <li className="text-textCont hover:text-text">
                  <Link href="/about">عن الشركة</Link>
                </li>
                <li className="text-textCont hover:text-text relative ul-class">
                  <Link href="/services" className="ul-class">
                    خدماتنا
                    <span className="mr-1">
                      <FontAwesomeIcon icon={faChevronDown} className="" />
                    </span>
                  </Link>

                  <ul className="dropdown rounded-xl  text-right">
                    {isLoading ? (
                      <div>
                        <li className="animate-pulse bg-gray-300 w-52 h-6 rounded-full mb-2">
                          {" "}
                        </li>
                        <li className="animate-pulse bg-gray-300 w-52 h-6 rounded-full mb-2">
                          {" "}
                        </li>
                        <li className="animate-pulse bg-gray-300 w-52 h-6 rounded-full mb-2">
                          {" "}
                        </li>
                      </div>
                    ) : (
                      options.map((option) => (
                        <li
                          className="p-2 hover:bg-gray-100 hover:mr-2 hover:font-bold text-black hover:text-text"
                          key={option.id}
                        >
                          <Link href={`/services/${option.id}`} className="">
                            {option.title || ""}
                          </Link>
                        </li>
                      ))
                    )}
                  </ul>
                </li>
                <li className="text-textCont hover:text-text">
                  <Link href="/request-service">طلب الخدمة</Link>
                </li>
                <li className="text-textCont hover:text-text">
                  <Link href="/contact">تواصل معنا</Link>
                </li>
              </ul>
              <div className="flex gap-5 text-center justify-center items-center">
                <a
                  href="https://wa.me/920028066"
                  className="icon-social hover-icon rotate-90-hover hover:rounded-full h-6 w-6 text-center justify-center items-center flex "
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a
                  href="https://www.instagram.com"
                  className="icon-social hover-icon rotate-90-hover hover:rounded-full h-6 w-6 text-center justify-center items-center flex "
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://twitter.com"
                  className="icon-social hover-icon rotate-90-hover hover:rounded-full h-6 w-6 text-center justify-center items-center flex "
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" z-[1000] mt-9 w-full flex items-center justify-between flex-row-reverse bg-white m-auto text-center  Menuo ">
        <div className="w-40 translate-y-[-15%]">
          <img src="/assets/images/logo.webp" alt="logo" width={"100%"} />
        </div>

        <div className="w-1/2 flex justify-center shadow-custom">
          <button
            className="icon-menu  translate-y-[-15%] "
            onClick={() => setShowModal(true)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#fff"
              xmlns="https://www.w3.org/2000/svg"
            >
              <rect x="3" y="6" width="18" height="2" fill="#fff" />
              <rect x="3" y="11" width="18" height="2" fill="#fff" />
              <rect x="3" y="16" width="18" height="2" fill="#fff" />
            </svg>
          </button>

          {showModal && (
            <div className="fixed ">
              <ul className={showModal ? "modal" : "modal element-close "}>
                <li>
                  <button
                    className="icon-x "
                    onClick={() => setShowModal(false)}
                  >
                    x
                  </button>
                </li>
                <li onClick={() => setShowModal(false)}>
                  <Link href="/" className="lk">
                    الصفحة الرئيسية{" "}
                  </Link>
                </li>
                <li onClick={() => setShowModal(false)}>
                  <Link href="/about" className="lk">
                    عن الشركة{" "}
                  </Link>
                </li>
                <li onClick={() => setShowModal(false)}>
                  <Link href="/services" className="lk">
                    خدماتنا
                  </Link>
                </li>
                <li
                  className="text-textCont hover:text-text relative ul-class"
                  onClick={() => setShowServices(!showServices)} // التحكم في فتح وإغلاق القائمة المنبثقة
                >
                  <Link href="#" className="ul-class font-bold">
                    كل خدماتنا
                    <span className="mr-1">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </Link>

                  {/* القائمة المنبثقة التي تحتوي على الخدمات */}
                  {showServices && (
                    <ul className="dropdown rounded-xl">
                      {isLoading ? (
                        <div>
                          <li className="animate-pulse bg-gray-300 w-52 h-6 rounded-full mb-2">
                            {" "}
                          </li>
                          <li className="animate-pulse bg-gray-300 w-52 h-6 rounded-full mb-2">
                            {" "}
                          </li>
                          <li className="animate-pulse bg-gray-300 w-52 h-6 rounded-full mb-2">
                            {" "}
                          </li>
                        </div>
                      ) : (
                        options.map((option) => (
                          <li
                            className="p-2 text-right m-auto hover:bg-gray-100 hover:mr-2 hover:font-bold text-black hover:text-text overflow-scroll"
                            key={option.id}
                          >
                            <Link href={`/services/${option.id}`} className="">
                              {option.title || ""}
                            </Link>
                          </li>
                        ))
                      )}
                    </ul>
                  )}
                </li>
                <li onClick={() => setShowModal(false)}>
                  <Link href="/contact" className="lk">
                    تواصل معنا
                  </Link>
                </li>
                <div className="flex justify-center items-baseline w-full m-auto static mb-10 ">
                  <ul className="flex botm items-baseline absolute bottom-0 w-full">
                    <li
                      className="hover:text-white"
                      onClick={() => setShowModal(false)}
                    >
                      <Link href="/faq">الأسئلة الشائعة |</Link>
                    </li>
                    <li
                      className="hover:text-white"
                      onClick={() => setShowModal(false)}
                    >
                      <Link href="/conditions">الشروط والأحكام |</Link>
                    </li>

                    <li
                      className="hover:text-white"
                      onClick={() => setShowModal(false)}
                    >
                      <Link href="/privacy-policy">سياسة الخصوصية</Link>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
