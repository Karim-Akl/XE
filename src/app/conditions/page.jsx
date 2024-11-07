"use client";
import React from "react";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import "../privacy-policy/privacy-policy.css";
const Page = () => {
  return (
    <div>

<div className="bg-background w-full h-40 relative flex m-auto py-1 nav-route">
          <div className="flex gap-5 p-5 rounded-xl container items-end justify-between">
            <div>
              <h2 className="text-white text-4xl font-bold">  سياسة الخصوصية</h2>
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
              <p className="text-smText font-bold"> سياسة الخصوصية</p>
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
