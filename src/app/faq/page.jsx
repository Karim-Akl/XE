import React from "react";
import "./faq.css";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import Collabse from "@/components/collabse-list/collabse";
const OrderNow = () => {
  return (
    <div className="">
      <Header />
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
            <div>
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
      <Footer />
    </div>
  );
};

export default OrderNow;
