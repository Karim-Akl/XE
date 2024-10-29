"use client";
import React from "react";
import "./contact.css";
import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
const Contact = () => {
  return (
    <section className="contact-section">

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
      <div className="contact">
        {/* <div className="top-contact">
          <h2>تواصل معانا</h2>
          <div className="contact-span">
            <a href="/">
              <span>الرئيسية</span>
            </a>
            <a href="">
              <svg className="btn-prev btn-prev-black">
                <use xlinkHref="#arrow-left"></use>
              </svg>
            </a>
            <a href="">
              <span>اتصل بنا</span>
            </a>
          </div>
        </div> */}
        <div className="container">
          <div className="bottom-contact">
            <h2 className="text-xl font-bold">شركة إكسي الخليج للاستقدام</h2>
            <p>
              مرحبًا بكم في شركة إكسي الخليج للاستقدام، رائدة في مجال توفير
              خدمات الاستقدام الموثوقة والمتميزة في المملكة العربية السعودية.
              منذ تأسيسنا في عام 2016، نلتزم بجعل عملية الاستقدام أسهل وأكثر
              أمانًا لعملائنا، مع التركيز على جودة الخدمة ورضا العميل.
            </p>
          </div>
        </div>

        <div className="contact-info flex ">
          <div className="contact-flag ">
            <div style={{ width: 60, height: 60 }}>
              <img src="/assets/images/icon-03-l.webp" alt="" width={60} />
            </div>
            <div className="flag-info">

              <p>العنوان</p>
              <a href="#!">طريق أبو بكر الصديق، حي الإسكان، بريدة </a>

            </div>
          </div>
          <div className="contact-mail ">
            <div style={{ width: 60, height: 60 }}>
              <img src="/assets/images/message.svg" alt="" width={60} />
            </div>
            <div className="mail-info">
              <p>بريد الالكتروني</p>
              <a href="mail:info@xealkhalej.com ">info@xealkhalej.com</a>
            </div>
          </div>
          <div className="contact-phone ">
            <div style={{ width: 60, height: 60 }}>
              <img
                src="/assets/images/1456266303_contact-09.svg"
                alt=""
                width={60}
              />
            </div>
            <div className="phone-info">
              <p>هاتف</p>
              <div className="flex gap-3">
                <a href="tal:920028066">920028066</a>
                <a href="tal:0507252594">0507252594</a>
              </div>
              <div className="flex gap-3">
                <a href="tal:0575980275">0575980275</a>
                <a href="tal:0592293300">0592293300</a>
              </div>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="contact-form ">
            <div className="form-title">
              <h2>تواصل معنا</h2>
              <p>
                يرجى الاتصال بنا باستخدام النموذج وسنقوم بالرد عليك في أقرب وقت
                ممكن.
              </p>
            </div>
            <div className="form-info">
              <form>
                <div className="flex">
                  <input type="text" placeholder="لنك  الويب سايت " />
                  <input type="text" placeholder="الاسم" />
                </div>
                <div className="flex">
                  <input type="email" placeholder="البريد الألكتروني" />

                  <input type="text" placeholder="رقم الهاتف" />
                </div>
                <div className="flex">
                  <textarea
                    name=""
                    id=""
                    cols="20"
                    rows="10"
                    placeholder="الرسالة"
                  />
                </div>
                <div className="flex but-form">
                  <button type="submit">
                    <span> ارسال</span> <span className="semicircle"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="map  w-full h-60">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14296.01897316997!2d43.9388906!3d26.3910344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f57c74a27c709%3A0x91f80ce392e826a1!2z2LTYsdmD2Kkg2KfZg9iz2Yog2KfZhNiu2YTZitisINmE2YTYo9iz2KrZgtiv2KfZhSDZhNmE2KrZiNin2LXZhCggOTIwMDI4MDY2ICk!5e0!3m2!1sar!2ssa!4v1709355824637!5m2!1sar!2ssa"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
