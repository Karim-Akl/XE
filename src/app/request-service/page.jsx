"use client";
import Select from "react-select";
import Link from "next/link";
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
                    <Link href="/PaymentPage">
                    <button type="submit">
                      <span> ارسل الطلب</span>{" "}
                      <span className="semicircle"></span>
                    </button>
                    </Link>
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
