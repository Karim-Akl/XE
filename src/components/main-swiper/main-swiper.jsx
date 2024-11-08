import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "animate.css";
import "./main-swiper.css";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import Link from "next/link";

const Main = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const [imgAn, setImgAn] = useState("");
  const [imgAnLight, setImgAnLight] = useState("");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleIndex((prev) => prev + 1);
    }, 100);

    const liftTimer = setTimeout(() => {
      setImgAn("animate__lightSpeedInLeft");
    }, 100);

    const rightTimer = setTimeout(() => {
      setImgAnLight("animate__zoomInDown");
    }, 0);

    return () => {
      clearInterval(timer);
      clearTimeout(liftTimer);
      clearTimeout(rightTimer);
    };
  }, []);

  const handleSlideChange = () => {
    // Reset the animation classes when the slide changes
    setImgAnLight("animate__zoomInDown");
    setImgAn("animate__lightSpeedInLeft");
    setVisibleIndex(-1); // Reset visible index to restart the image animation
  };

  return (
    <main className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Thumbs]}
        loop={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={handleSlideChange} // Trigger slide change event
      >
        <SwiperSlide>
          <div className="flex slider-3">
            <div className="flex justify-center container">
              <div className="flex items-end w-full h-[99%] relative">
                {/* النص والأزرار */}
                <div className="ml-8 text-right w-full md:translate-y-0 translate-y-[-15%]">
                  <h1 className="text-4xl font-bold text-[#b58e46] mb-2 text-class-1 animate__animated animate__fadeInDown animate__delay-1s">
                    شركة إكسي الخليج للاستقدام
                  </h1>
                  <p className="text-lg text-gray-700 mb-4 text-class-2 animate__animated animate__fadeInUp animate__delay-2s">
                    الكفاءة والثقة في
                    <span> اختيارك </span>
                  </p>
                  <p className="text-lg text-gray-700 mb-6 text-class-3 animate__animated animate__fadeInLeft animate__delay-3s ">
                    معنا، تجد أفضل الجنسيات والكفاءات لتلبية احتياجات منزلك
                    بأمان وموثوقية
                  </p>

                  {/* الأزرار */}
                  <div className="flex gap-4 mt-4">
                    <Link href={"/contact"}>
                      <button className="btu-1 animate__animated animate__fadeIn animate__delay-4s">
                        <Link href="/contact">خدماتنا</Link>
                      </button>
                    </Link>
                    <Link href={"/services"}>
                      <button className="btu-2 animate__animated animate__fadeIn animate__delay-5s">
                        <Link href="/services">معلومات عنا</Link>
                      </button>
                    </Link>
                    <div className="md:w-44 w-20 animate__animated animate__fadeIn animate__delay-6s">
                      <img
                        src="/assets/images/logo-musaned-ar.webp"
                        alt=""
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* صورة العاملة */}
                <div className="absolute md:max-w-[30rem] max-w-[15rem] md:left-0 left-[-20%] bottom-[-80%] md:z-10 z[-1] animate__animated animate__fadeInRight animate__delay-2s">
                  <img
                    src="/assets/images/el01.webp"
                    alt="عاملات مدربات"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* إضافات الرسومات الصغيرة */}
            <div className="img-foote-smoll animate__animated animate__fadeIn animate__delay-2s">
              <img src="/assets/images/4.png" alt="" />
            </div>
            <div
              className={`animate__animated animate__zoomIn animate__delay-3s ${imgAn} img-lift-class`}
              style={{ marginBlock: "-50px" }}
            >
              <img
                src={process.env.PUBLIC_URL + "/assets/images/Group-4.png"}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-2">
            <div className="flex justify-center container">
              <div className="flex items-end w-full h-[99%] relative">
                {/* النص والأزرار */}
                <div className="ml-8 text-right w-full md:translate-y-0 translate-y-[-15%] animate__animated animate__fadeInDown animate__delay-1s">
                  <h1 className="text-4xl font-bold text-[#b58e46] mb-2 text-class-1">
                    عاملات مدربات لرعاية منزلك
                  </h1>
                  <p className="text-lg text-gray-700 mb-4 text-class-2 animate__animated animate__fadeInRight animate__delay-2s">
                    المهارة والاحترافية في الاختيار
                  </p>
                  <p className="text-lg text-gray-700 mb-6 text-class-3 animate__animated animate__fadeInLeft animate__delay-3s">
                    سير ذاتية مفضلة لك عاملة.. اختر الأنسب لاحتياجاتك بكل ثقة
                  </p>

                  {/* الأزرار */}
                  <div className="flex gap-4 mt-4 animate__animated animate__fadeInUp animate__delay-4s">
                    <Link href={"/contact"}>
                      <button className="btu-1 animate__animated animate__pulse animate__infinite animate__delay-5s">
                        <Link href="/contact">تواصل معنا</Link>
                      </button>
                    </Link>
                    <Link href={"/services"}>
                      <button className="btu-2 animate__animated animate__pulse animate__infinite animate__delay-5s">
                        <Link href="/services">المزيد من التفاصيل</Link>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* صورة العاملة */}
                <div className="absolute md:max-w-[30rem] max-w-[15rem] md:left-0 left-[-10%] bottom-[-70%] md:z-10 z[-1] animate__animated animate__fadeInLeft animate__delay-2s">
                  <img
                    src="/assets/images/el02.webp"
                    alt="عاملات مدربات"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* إضافات الرسومات الصغيرة */}
            <div className="img-foote-smoll animate__animated animate__fadeIn animate__delay-2s">
              <img src="/assets/images/4.png" alt="" />
            </div>
            <div
              className={`animate__animated animate__fadeInRight animate__delay-3s ${imgAnLight} img-right-class-2`}
            >
              <img src="/assets/images/4.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-class slide-1">
            <div className="flex w-[100%]">
              <div className="relative w-full m-auto flex flex-col justify-center items-center h-[500px] bg-cover bg-center md:translate-y-[5%] translate-y-[5%]">
                {/* شعار الشركة */}
                <div className="md:w-80 w-40 animate__animated animate__fadeInDown animate__delay-1s">
                  <img
                    src="/assets/images/logo.webp"
                    alt="Logo"
                    className="w-full mx-auto mb-4"
                  />
                </div>

                {/* العنوان الرئيسي */}
                <h2 className=" text-lg md:text-2xl font-medium bg-secondary text-text px-8  md:py-4 py-1  translate-y-6 rounded-md inline-block mb-2 animate__animated animate__fadeInUp animate__delay-2s">
                  بكل راحة وبدون تعب
                </h2>

                {/* الوصف */}
                <p className=" md:text-2xl text-sm font-semibold bg-background text-secondary px-4 md:py-5 py-1 rounded-md inline-block animate__animated animate__fadeInUp animate__delay-3s">
                  استقدامك معنا مباشر ومبسط بدون أي تعقيدات
                </p>
              </div>

              {/* الصور الصغيرة */}
              <div className="img-foote-smoll animate__animated animate__fadeInLeft animate__delay-1s">
                <img src="/assets/images/4.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="w-full bottom-0  absolute h-46  z-50 ">
        <img
          src="/assets/images/divider-2.svg"
          alt=""
          className="footer-divider"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </main>
  );
};

export default Main;
