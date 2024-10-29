"use client";
import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import Select from "react-select";
import "./order-now.css";

const options = [
  { value: "service1", label: "الخدمة 1" },
  { value: "service2", label: "الخدمة 2" },
  { value: "service3", label: "الخدمة 3" },
  // أضف خيارات إضافية هنا
];
const RequestService = () => {
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
      <section className="order-section">
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
          {/* <div className="container">
          <div className="bottom-contact">
            <h2>شركة إكسي الخليج للاستقدام</h2>
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
        </div> */}

          <div className="container ">
            <div className="contact-form ">
              <div className="form-title">
                <h2> طلب الخدمة</h2>
                <p>
                  يرجى الاتصال بنا باستخدام النموذج وسنقوم بالرد عليك في أقرب
                  وقت ممكن.
                </p>
              </div>
              <div className="form-info">
                <form>
                  <div className="flex">
                    <input type="text" placeholder="الاسم *" />
                    <input type="text" placeholder="الجوال" />
                  </div>
                  <div className="flex">
                    <Select
                      options={options}
                      className="select border-none w-full sm:w-32 md:w-60 lg:w-80" // التحكم بالعرض حسب حجم الشاشة
                      classNamePrefix="select"
                      placeholder="نوع الخدمة *"
                      styles={{
                        control: (base, state) => ({
                          ...base,
                          fontSize: "0.875rem", // الحجم الافتراضي للنص
                          width: "100%", // يجعل العرض ملائمًا للحاوية الخارجية
                          "@media (max-width: 640px)": {
                            // للشاشات الصغيرة
                            fontSize: "0.75rem", // تصغير حجم النص
                          },
                        }),
                        option: (base, state) => ({
                          ...base,
                          fontSize: "0.75rem", // تصغير حجم النص للخيارات
                          padding: "4px 8px", // التحكم في المسافات الداخلية للخيارات
                          "@media (max-width: 640px)": {
                            // للشاشات الصغيرة
                            fontSize: "0.65rem", // حجم أصغر للخيارات
                            padding: "2px 6px",
                          },
                        }),
                      }}
                    />
                  </div>
                  <div className="flex">
                    <textarea
                      name=""
                      id=""
                      cols="20"
                      rows="10"
                      placeholder="ملاحظاتك"
                    />
                  </div>
                  <div className="flex but-form">
                    <button type="submit">
                      <span> ارسل الطلب</span>{" "}
                      <span className="semicircle"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default RequestService;
