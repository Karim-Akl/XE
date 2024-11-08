"use client";
import React from "react";
import "./error-page.css"; // تأكد من إنشاء ملف CSS بنفس الاسم
import Link from "next/link";
const ErrorPage = () => {

  // دالة لإعادة تحميل الصفحة
  const handleReload = (e) => {
    e.preventDefault(); // منع السلوك الافتراضي للرابط
    window.location.href = "/"; // الانتقال إلى الصفحة الرئيسية
  };

  return (
    <div>

<div className="bg-background w-full h-40 relative flex m-auto py-1 nav-route">
        <div className="flex gap-5 p-5 rounded-xl container items-end justify-between">
          <div className="flex mb-3">
            <h2 className="text-white text-4xl font-bold"> صفحه الخطأ </h2>
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
                    صفحة الخطأ
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div>
        <nav>
          <div className="pt-bredwrap">
            <div className="container">
              <div className="ptboutr">
                <h2 className="mr-h1">sfd</h2>
                <ol className="breadcrumb">
                  <li>
                    <a aria-label="Home" href="/" className="fa fa-home" />
                  </li>
                  <li>
                    <a aria-label="" href="/">
ssf
                    </a>
                  </li>
                  <li>
                    <a aria-label="" href="/">
sfd
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="error-container">
        <div className="error-content">
          <h1 className="error-title">OOPS!</h1>
          <p className="error-message">sfdfsd</p>
          {/* استخدام الدالة لتحديث الصفحة */}
          <a href="/" onClick={handleReload} className="error-link">
sdffsd
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
