"use client";
import React from "react";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import "./privacy-policy.css";
const Page = () => {
  return (
    <div>

<div className="bg-background w-full h-40 relative flex m-auto py-1 nav-route">
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
