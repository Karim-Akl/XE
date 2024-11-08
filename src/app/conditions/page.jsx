"use client";
import React from "react";
import "../privacy-policy/privacy-policy.css";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <div className="bg-background w-full h-40 relative flex m-auto py-1 nav-route">
        <div className="flex gap-5 p-5 rounded-xl container items-end justify-between">
          <div className="flex mb-3">
            <h2 className="text-white text-4xl font-bold">الشروط والإحكام</h2>
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
                    الشروط والإحكام
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <section className="container">
        <div
          className="text-bg-rols"
          style={{ flexDirection: "column", display: "flex", gap: "3rem" }}
        >
          <div
            className=""
            style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
          >
            <span> مقدمة:</span>
            <p>
              مرحبًا بكم في موقع شركة إكسي الخليج للاستقدام. يرجى قراءة هذه
              الشروط والأحكام بعناية قبل استخدام خدماتنا. باستخدام موقعنا أو
              خدماتنا، فإنك توافق على الالتزام بهذه الشروط.
            </p>
          </div>
          <div
            className=""
            style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
          >
            <span>استخدام الموقع:</span>
            <p>
              يُسمح باستخدام موقعنا للأغراض الشخصية وغير التجارية فقط. يحظر نسخ،
              تعديل، توزيع، بيع، أو استئجار أي جزء من الخدمات أو المحتوى المقدم
              من قبل شركة إكسي الخليج دون الحصول على إذن كتابي مسبق منا.
            </p>
          </div>
          <div
            className=""
            style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
          >
            <span>حقوق الملكية الفكرية:</span>
            <p>
              جميع المحتويات الموجودة على الموقع بما في ذلك النصوص، الصور،
              العلامات التجارية، والشعارات هي ملكية لشركة إكسي الخليج أو مرخصة
              لاستخدامها من قبلنا ومحمية بموجب قوانين حقوق الملكية الفكرية.
            </p>
          </div>

          <div
            className=""
            style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
          >
            <span>الخدمات:</span>
            <p>
              نقدم خدمات استقدام العمالة المنزلية وفقًا للقوانين والتشريعات
              المعمول بها في المملكة العربية السعودية. يجب على العملاء توفير
              جميع الوثائق والمعلومات اللازمة لإتمام عملية الاستقدام بنجاح.
            </p>
          </div>
          <div
            className=""
            style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
          >
            <span>الضمان والمسؤولية:</span>
            <p>
              نحن نضمن توفير عمالة مدربة ومؤهلة وفقًا للمعايير المتفق عليها. في
              حال وجود أي مشكلة متعلقة بالعمالة المستقدمة خلال فترة الضمان،
              نلتزم بتقديم الدعم اللازم لحل المشكلة.
            </p>
          </div>
          <div
            className=""
            style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
          >
            <span>التعديلات على الشروط والأحكام:</span>
            <p>
              تحتفظ شركة إكسي الخليج بالحق في تعديل هذه الشروط والأحكام في أي
              وقت. سيتم نشر التعديلات على هذه الصفحة ويُعتبر استخدامك المستمر
              للموقع بمثابة قبول لهذه التعديلات.
            </p>
          </div>
          <div
            className=""
            style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
          >
            <span>الاتصال:</span>
            <p>
              لأي استفسارات أو معلومات إضافية بخصوص شروط خدماتنا، يرجى التواصل
              معنا من خلال معلومات الاتصال الموجودة على موقعنا.
            </p>
          </div>
          <div
            className=""
            style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
          >
            <span>الخصوصية:</span>
            <p>
              نلتزم بحماية خصوصية المعلومات الشخصية لعملائنا وفقًا لـ سياسة
              الخصوصية المنشورة على موقعنا. يُرجى مراجعة سياسة الخصوصية لفهم
              كيفية جمعنا واستخدامنا وحمايتنا لبياناتكم الشخصية.
            </p>
          </div>
          <div
            className=""
            style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
          >
            <span>التعويض:</span>
            <p>
              يوافق العملاء على تعويض شركة إكسي الخليج وحمايتها من أي خسائر،
              أضرار، مسؤوليات، ومصاريف (بما في ذلك أتعاب المحاماة) الناشئة عن
              استخدامهم للخدمات أو انتهاكهم لهذه الشروط والأحكام.
            </p>
          </div>
          <div
            className=""
            style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
          >
            <span>الاختصاص القضائي:</span>
            <p>
              تخضع هذه الشروط والأحكام وتفسر وفقًا لقوانين المملكة العربية
              السعودية، ويكون للمحاكم المختصة في المملكة العربية السعودية
              الاختصاص الحصري في حل أي نزاعات ناشئة عن هذه الشروط والأحكام.
            </p>
          </div>
          <div
            className=""
            style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
          >
            <span>خاتمة:</span>
            <p>
              نشكركم على اختياركم شركة إكسي الخليج للاستقدام كشريككم في عملية
              الاستقدام. نحن ملتزمون بتقديم خدمة استثنائية ونتطلع إلى تلبية جميع
              احتياجاتكم بكفاءة واحترافية.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
