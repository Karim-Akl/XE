"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./header.css";
const Header = () => {
  const [showModal, setShowModal] = useState(false);

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
              <p className="flex items-top gap-2 text-white hover:text-text">
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

        <div className="z-10 bg-white  md:w-[85%]  sm:w-[98%] sm:mb-5 absolute p-2 translate-y-20 rounded-xl h-auto flex items-center justify-between">
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
                <div className="icon-1">
                  <img
                    src="/assets/images/icon-03.webp"
                    alt=""
                    width={"100%"}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="font-bold text-xl text-smText">اتصل بنا: </p>
                  <p className="font-bold  md:text-sm xl:text-xl">920028066</p>
                </div>
              </div>
              <div className="flex gap-5 hover:text-text">
                <div className="icon-1">
                  <img
                    src="/assets/images/icon-03.webp"
                    alt=""
                    width={"100%"}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="font-bold text-xl text-smText">العنوان:</p>
                  <p className="font-bold  md:text-sm xl:text-xl">
                    طريق أبو بكر الصديق، حي الإسكان، بريدة
                  </p>
                </div>
              </div>
            </div>
            <div className="devi"></div>
            <div className="lin-2 flex justify-evenly ">
              <ul className="flex gap-5">
                <li className="text-textCont hover:text-text">
                  <Link href="/">الصفحة الرئيسية</Link>
                </li>
                <li className="text-textCont hover:text-text">
                  <Link href="/about">عن الشركة</Link>
                </li>
                {/* تعديل قائمة "خدماتنا" هنا */}
                <li className="text-textCont hover:text-text relative ul-class">
                  <Link href="/services" className="ul-class">
                    خدماتنا ^{" "}
                  </Link>
                  {/* القائمة المنسدلة */}
                  <ul className="dropdown">
                    <li className="p-2 hover:bg-gray-100 hover:mr-2 hover:font-bold text-black hover:text-text">
                      <Link href="/services/7" className="">
                        استقدام سائق خاص
                      </Link>
                    </li>
                    <li className="p-2 hover:bg-gray-100  hover:mr-2 hover:font-bold text-black hover:text-text">
                      <Link href="/services/8" className="">
                        استقدام عاملة منزلية
                      </Link>
                    </li>
                    <li className="p-2 hover:bg-gray-100  hover:mr-2 hover:font-bold text-black hover:text-text">
                      <Link href="/services/9" className="">
                        تأجير العمالة المنزلية
                      </Link>
                    </li>
                    <li className="p-2 hover:bg-gray-100  hover:mr-2 hover:font-bold text-black hover:text-text">
                      <Link href="/services/9" className="">
                        عمالة جاهزة لنقل الخدمات
                      </Link>
                    </li>
                    <li className="p-2 hover:bg-gray-100  hover:mr-2 hover:font-bold text-black hover:text-text">
                      <Link href="/services/9" className="">
                        توفير عمالة من جنسيات متعددة
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="text-textCont hover:text-text">
                  <Link href="/request-service"> طلب الخدمة</Link>
                </li>
                <li className="text-textCont hover:text-text">
                  <Link href="/contact">تواصل معنا</Link>
                </li>
              </ul>
              <div className="flex gap-5 ">
                <a
                  href="https://wa.me/920028066  "
                  className=" hover:bg-bgIcon rounded-full w-6 h-6 flex m-auto  "
                >
                  <img
                    src="/assets/images/WhatsApp.svg_ copy.webp"
                    alt=""
                    width={"100%"}
                  />
                </a>
                <a
                  href="https://wa.me/920028066"
                  className=" hover:bg-bgIcon rounded-full w-6 h-6 flex m-auto "
                >
                  <img
                    src="/assets/images/WhatsApp.svg_ copy.webp"
                    alt=""
                    width={"100%"}
                  />
                </a>
                <a
                  href="https://wa.me/920028066"
                  className=" hover:bg-bgIcon rounded-full w-6 h-6 flex m-auto "
                >
                  <img
                    src="/assets/images/WhatsApp.svg_ copy.webp"
                    alt=""
                    width={"100%"}
                  />
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
                    خدماتنا ^
                  </Link>
                </li>
                <li onClick={() => setShowModal(false)}>
                  <Link href="/request-service" className="lk">
                    طلب الخدمة
                  </Link>
                </li>
                <li onClick={() => setShowModal(false)}>
                  <Link href="/contact" className="lk">
                    تواصل معنا
                  </Link>
                </li>
                <div className="flex justify-center items-baseline w-full m-auto static mb-10 ">
                  <ul className="flex botm items-baseline absolute bottom-0 w-full">
                    <li className="hover:text-white">
                      <Link href="/faq">الأسئلة الشائعة |</Link>
                    </li>
                    <li className="hover:text-white">
                      <Link href="/conditions">الشروط والأحكام |</Link>
                    </li>

                    <li className="hover:text-white">
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
