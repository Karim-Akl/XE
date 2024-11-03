"use client";
import { useEffect } from "react";
const PaymentPage = () => {
  useEffect(() => {
    console.log(document.querySelector(".mysr-form"));

    const loadMoyasarScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://cdn.moyasar.com/mpf/1.14.0/moyasar.js";
        script.async = true;
        script.onload = () => {
          resolve();
        };
        script.onerror = () => {
          reject(new Error("Failed to load Moyasar script"));
        };
        document.body.appendChild(script);
      });
    };

    const initMoyasar = async () => {
      try {
        await loadMoyasarScript();
        setTimeout(() => {
          Moyasar.init({
            element: ".mysr-form",
            amount: 1000, // المبلغ
            currency: "SAR", // العملة
            description: "Coffee Order #1", // الوصف
            publishable_api_key:
              "pk_test_AQpxBV31a29qhkhUYFYUFjhwllaDVrxSq5ydVNui", // مفتاح API
            callback_url: "https://moyasar.com/thanks", // عنوان URL للرد
            methods: ["creditcard"], // طرق الدفع
          });
        }, 1000); // انتظر ثانية واحدة قبل التهيئة
      } catch (error) {
        console.error("Error loading Moyasar script:", error);
      }
    };

    initMoyasar(); // استدعاء الدالة هنا
  }, []); // يتم استدعاؤها مرة واحدة بعد تحميل المكون

  return (
    <>
      <div className="mysr-form"></div> {/* إضافة div هنا لتهيئة Moyasar */}
    </>
  );
};

export default PaymentPage;
