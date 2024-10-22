"use client";
import React from "react";
import Link from "next/link";
import "./header.css";
const Header = () => {
  return (

    <header className="relative top-0 w-full flex justify-center align-content-center m-auto flex-col items-center md:flex-col">
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
              <Link href="/">الأسئلة الشائعة</Link>
            </li>
            <li className="text-smText hover:text-text">/</li>
            <li className="text-smText hover:text-text">
              <Link href="/">الشروط والأحكام</Link>
            </li>
            <li className="text-smText hover:text-text">/</li>
            <li className="text-smText hover:text-text">
              <Link href="/">سياسة الخصوصية</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div
        style={{ transform: "translateY(-1%)" }}
        className="z-10 bg-white container absolute py-16 translate-y-20 rounded-xl h-40 flex items-center justify-between"
      >
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
                <img src="/assets/images/icon-03.webp" alt="" width={"100%"} />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold text-xl text-smText">اتصل بنا: </p>
                <p className="font-bold text-xl">920028066</p>
              </div>
            </div>
            <div className="flex gap-5 hover:text-text">
              <div className="icon-1">
                <img src="/assets/images/icon-03.webp" alt="" width={"100%"} />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold text-xl text-smText">العنوان:</p>
                <p className="font-bold text-xl">
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
                    <Link href="/services/service1" className="">
                      خدمة 1
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100  hover:mr-2 hover:font-bold text-black hover:text-text">
                    <Link href="/services/service2" className="">
                      خدمة 2
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100  hover:mr-2 hover:font-bold text-black hover:text-text">
                    <Link href="/services/service3" className="">
                      خدمة 3
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

      <div className="bg-background w-full h-40 relative flex m-auto py-1">
        <div className="flex gap-5 p-5 rounded-xl container items-end justify-between">
          <div>
            <h2 className="text-white text-4xl font-bold"> اتصال بنا</h2>
          </div>
          <div className="flex gap-5 bg-white p-3 rounded-xl">
            <a href="/">
              <img
                src="/assets/images/icon-03.webp"
                alt=""
                width={20}
                className="object-cover"
              />
            </a>
            <p>{`>`}</p>
            <p className="text-smText font-bold">اتصال بنا</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
