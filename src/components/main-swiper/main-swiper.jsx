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
        // pagination={{ clickable: true }}
        // autoplay={{ delay: 1000 }}
        // thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={handleSlideChange} // Trigger slide change event
      >
        <SwiperSlide>
          <div className="main-class slide-1">
            <div className="flex w-[100%]">
              <div className="relative w-full m-auto flex flex-col justify-center items-center h-[500px] bg-cover bg-center md:translate-y-[0%] translate-y-[15%] ">
                <div className="md:w-80 w-40">
                  <img
                    src="/assets/images/logo.webp"
                    alt="Logo"
                    className=" w-full mx-auto mb-4"
                  />
                </div>
                <h2 className="text-gray-700 text-lg md:text-2xl font-medium bg-secondary text-text px-8 py-3 translate-y-6 rounded-md inline-block mb-2">
                  بكل راحة وبدون تعب
                </h2>
                <p className="text-gray-800 md:text-2xl font-semibold bg-background text-secondary px-4 md:py-8 py-4 rounded-md inline-block">
                  استقدامك معنا مباشر ومبسط بدون أي تعقيدات
                </p>
              </div>

              <div className="img-foote-smoll">
                <img src="/assets/images/4.png" alt="" />
              </div>
              <div className={`animate__animated ${imgAn} img-lift-class`}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/Group-4.png"}
                  alt=""
                />
              </div>
              <div
                className={`animate__animated ${imgAnLight} img-right-class`}
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/Group-4.png"}
                  alt=""
                />
              </div>
              <div
                className={`animate__animated ${imgAnLight}  img-top-and-right`}
              >
                <img src="/assets/images/Group-5.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-2">
            <div className="flex justify-center   container   ">
              <div className="flex  items-end  w-full h-[99%] relative ">
                {/* النص والأزرار */}
                <div className="ml-8 text-right w-full  md:translate-y-0 translate-y-[-15%] ">
                  <h1 className="text-4xl font-bold text-[#b58e46] mb-2 text-class-1">
                    عاملات مدربات لرعاية منزلك
                  </h1>
                  <p className="text-lg text-gray-700 mb-4 text-class-2">
                    المهارة والاحترافية في الاختيار
                  </p>
                  <p className="text-lg text-gray-700 mb-6 text-class-3">
                    سير ذاتية مفضلة لك عاملة.. اختر الأنسب لاحتياجاتك بكل ثقة
                  </p>

                  {/* الأزرار */}
                  <div className="flex gap-4">
                    <Link href={"/contact"}>
                      <button className="btu-1">
                        <Link href="/contact">تواصل معنا</Link>
                      </button>
                    </Link>
                    <Link href={"/services"}>
                      <button className="btu-2">
                        <Link href="/services">المزيد من التفاصيل</Link>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* صورة العاملة */}
                <div className=" absolute   md:max-w-[30rem] max-w-[15rem]  md:left-0 left-[-10%]  bottom-[-70%] md:z-10 z[-1]">
                  <img
                    src="/assets/images/el02.webp"
                    alt="عاملات مدربات"
                    className="w-full  rounded-lg "
                  />
                </div>
              </div>
            </div>
            <div className="img-foote-smoll">
              <img src="/assets/images/4.png" alt="" />
            </div>
            <div
              className={`animate__animated ${imgAnLight} img-right-class-2`}
            >
              <img
                src={process.env.PUBLIC_URL + "/assets/images/Group-4.png"}
                alt=""
              />
            </div>
            <div
              className={`animate__animated ${imgAnLight}  img-top-and-right`}
            >
              <img src="/assets/images/Group-5.png" alt="" />
            </div>
            <div className={`animate__animated ${imgAnLight} img-right-class`}>
              <img
                src={process.env.PUBLIC_URL + "/assets/images/Group-4.png"}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex slider-3">
            <div className="flex justify-center   container   ">
              <div className="flex  items-end  w-full h-[99%] relative ">
                {/* النص والأزرار */}
                <div className="ml-8 text-right w-full  md:translate-y-0 translate-y-[-15%] ">
                  <h1 className="text-4xl font-bold text-[#b58e46] mb-2 text-class-1">
                    شركة إكسي الخليج للاستقدام
                  </h1>
                  <p className="text-lg text-gray-700 mb-4 text-class-2">
                    الكفاءة والثقة في
                    <span> اختيارك </span>
                  </p>
                  <p className="text-lg text-gray-700 mb-6 text-class-3">
                    معنا، تجد أفضل الجنسيات والكفاءات لتلبية احتياجات منزلك
                    بأمان وموثوقية
                  </p>

                  {/* الأزرار */}
                  <div className="flex gap-4">
                    <Link href={"/contact"}>
                      <button className="btu-1">
                        <Link href="/contact"> خدماتنا</Link>
                      </button>
                    </Link>
                    <Link href={"/services"}>
                      <button className="btu-2">
                        <Link href="/services"> معلومات عنا </Link>
                      </button>
                    </Link>
                    <div className="md:w-44 w-20">
                      <img
                        src="/assets/images/logo-musaned-ar.webp"
                        alt=""
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                {/* صورة العاملة */}
                <div className=" absolute   md:max-w-[30rem] max-w-[15rem]  md:left-0 left-[-20%]  bottom-[-80%] md:z-10 z[-1]">
                  <img
                    src="/assets/images/el01.webp"
                    alt="عاملات مدربات"
                    className="w-full  rounded-lg "
                  />
                </div>
              </div>
            </div>
            <div className="img-foote-smoll">
              <img src="/assets/images/4.png" alt="" />
            </div>
            <div
              className={`animate__animated ${imgAn} img-lift-class`}
              style={{ marginBlock: "-50px" }}
            >
              <img
                src={process.env.PUBLIC_URL + "/assets/images/Group-4.png"}
                alt=""
              />
            </div>
            <div
              className={`animate__animated ${imgAnLight}  img-top-and-right`}
            >
              <img src="/assets/images/Group-5.png" alt="" />
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