"use client";
import React from "react";
import "./faq.css";
import Link from "next/link";
import Collabse from "@/components/collabse-list/collabse";
const OrderNow = () => {
  return (
    <div className="">

<div className="bg-background w-full h-40 relative flex m-auto py-1 nav-route">
        <div className="flex gap-5 p-5 rounded-xl container items-end justify-between">
          <div className="flex mb-3">
            <h2 className="text-white text-4xl font-bold"> الاسئله الشائعه  </h2>
          </div>
          <div className="flex mb-3 ">
            <nav aria-label="Breadcrumb" class="flex">
              <ol class="flex overflow-hidden rounded-lg  ">
                <li class="flex items-center">
                  <Link
                    href="/"
                    class="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>

                    <span class="ms-1.5 text-xs font-medium"> الرئيسية </span>
                  </Link>
                </li>

                <li class="relative flex items-center">
                  <span class="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rotate-180"></span>

                  <a
                    href="#"
                    class="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                  >
                    الاسئله الشائعه
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="order flex">
        <div className="container order-bg relative">
          <div className="order-left flex flex-col gap-7 relative md:justify-start  justify-center" >
            <div className="flex gap-4 flex-col justify-center ">
              <div className="gap-4 flex-col md:flex-row flex text1">
                <span className="text-5xl  text-textCont   ">هل لديك أي</span>
                <span className="text-5xl  text-text font-bold border-b-4 border-text pb-3 w-min">
                  سؤال؟
                </span>
              </div>
              <p className="text-xl  text-textCont ">
                لا تتردد في الاتصال بنا الآن
              </p>
              <p className="text-xl  text-textCont  mt-4">
                اكتشف إجابات لأهم الأسئلة حول خدمات استقدام العمالة المنزلية من
                إكسي الخليج، من الإجراءات والجنسيات إلى ضمانات الجودة والرضا.
              </p>
            </div>
            <div className="w-full">
              <Collabse />
            </div>
          </div>
          <div className="order-right top-0 relative  transform ]">
            <div className="flex gap-8  m-auto justify-center ">
              <div className="mt-2">
                <img src="/assets/images/message.svg" alt="" width={50} />
              </div>
              <div>
                <h2>اسألنا</h2>
                <p>راسلنا وسيتم الرد عليك فى اسرع وقت</p>
              </div>
            </div>
            <div className="order-form flex justify-center w-full m-auto">
              <form>
                <div className="flex gap-2 ">
                  <input
                    type="text"
                    placeholder="الاسم *"
                    className="form-control"
                    name="name"
                  />
                  <input
                    type="text"
                    placeholder="الجوال *"
                    className="form-control"
                    name="email"
                  />
                </div>
                <div className="flex">
                  <textarea
                    className="form-control "
                    placeholder="الرسالة *"
                    name="message"
                  />
                </div>
                <div className="flex but-form">
                  <button type="submit">
                    <span> إرسال الرسالة</span>{" "}
                    <span className="semicircle"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default OrderNow;
