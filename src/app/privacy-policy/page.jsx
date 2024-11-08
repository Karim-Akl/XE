"use client";
import React from "react";
import Link from "next/link";
import "./privacy-policy.css";
const Page = () => {
  return (
    <div>

<div className="bg-background w-full h-40 relative flex m-auto py-1 nav-route">
        <div className="flex gap-5 p-5 rounded-xl container items-end justify-between">
          <div className="flex mb-3">
            <h2 className="text-white text-4xl font-bold">  سياسة الخصوصية </h2>
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
                    سياسة الخصوصية
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <section className="container">
        <div className="text-bg-rols" style={{ flexDirection: "column",display: "flex", gap: "3rem" }}>
          <div
            className=""
            style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
          >
            <span> مقدمة:</span>
            <p>
              مرحبًا بكم في شركة إكسي الخليج للاستقدام. نحن نقدر خصوصيتكم ونلتزم
              بحماية بياناتكم الشخصية. هذه السياسة توضح كيف نجمع ونستخدم ونحمي
              المعلومات الشخصية التي نحصل عليها منكم عند استخدامكم لموقعنا
              الإلكتروني وخدماتنا.
            </p>
          </div>
          <div
            className=""
            style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
          >
            <span>جمع المعلومات:</span>
            <p>
              نجمع المعلومات الشخصية التي تزودونا بها عند التسجيل لاستخدام
              خدماتنا، مثل الاسم، عنوان البريد الإلكتروني، رقم الهاتف، وتفاصيل
              أخرى ضرورية لعملية الاستقدام.
            </p>
          </div>
          <div
            className=""
            style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
          >
            <span>استخدام المعلومات:</span>
            <p>
              نستخدم المعلومات التي نجمعها لتقديم وتحسين خدماتنا، للتواصل معكم
              بخصوص طلباتكم أو استفساراتكم، ولإبلاغكم عن تحديثات الخدمة أو
              العروض الجديدة.
            </p>
          </div>

          <div
            className=""
            style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
          >
            <span>حماية البيانات:</span>
            <p>
              نتخذ تدابير أمنية متقدمة لحماية بياناتكم الشخصية من الوصول غير
              المصرح به، الكشف، التعديل، أو الدمار غير المشروع.
            </p>
          </div>
          <div
            className=""
            style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
          >
            <span>مشاركة المعلومات:</span>
            <p>
              نلتزم بعدم بيع أو تأجير بياناتكم الشخصية لطرف ثالث. قد نشارك
              المعلومات فقط وفقًا للأغراض الموضحة في هذه السياسة، أو عند الطلب
              القانوني من الجهات المختصة.
            </p>
          </div>
          <div
            className=""
            style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
          >
            <span>حقوقكم:</span>
            <p>
              لديكم الحق في الوصول إلى بياناتكم الشخصية، تصحيحها، حذفها، أو
              الاعتراض على معالجتها. يمكنكم ممارسة هذه الحقوق بالتواصل معنا
              مباشرة.
            </p>
          </div>
          <div
            className=""
            style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
          >
            <span>تعديلات على سياسة الخصوصية:</span>
            <p>
              قد نعدل هذه السياسة من وقت لآخر. أي تعديلات ستُنشر على هذه الصفحة،
              ونشجعكم على مراجعتها بانتظام للبقاء على اطلاع بكيفية حمايتنا
              لمعلوماتكم الشخصية.
            </p>
          </div>
          <div
            className=""
            style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
          >
            <span>الاتصال بنا:</span>
            <p>
              إذا كانت لديكم أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا
              عبر تواصل معنا.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Page;
