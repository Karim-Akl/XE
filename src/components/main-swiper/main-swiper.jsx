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

const Main = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const [imgAn, setImgAn] = useState("");
  const [imgAnLight, setImgAnLight] = useState("");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    process.env.PUBLIC_URL + "/assets/images/جرافيك.png",
    process.env.PUBLIC_URL + "/assets/images/سوشيال-ميديا.png",
    process.env.PUBLIC_URL + "/assets/images/Group-12.png",
  ];

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
        autoplay={{ delay: 1000 }}
        thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={handleSlideChange} // Trigger slide change event
      >
        <SwiperSlide>
          <div className="main-class slide-1">
            <div className="flex">
              {/* {images.map((src, index) => (
                <div
                  key={index}
                  className={`animate__animated ${
                    visibleIndex >= index ? "animate__backInDown" : ""
                  }`}
                >
                  {visibleIndex >= index && (
                    <img
                      src={src}
                      alt={`Image ${index + 1}`}
                      width={300}
                      style={{
                        display: visibleIndex >= index ? "block" : "none",
                      }}
                    />
                  )}
                </div>
              ))} */}
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
            {/* <div
              className={`animate__animated ${imgAnLight} flex img-bg-class`}
            >
              <h3>ليه مواقعنا قوية؟</h3>
              <p>
                مخصصة لنشاطك وبنركز فيها علي تحقيق نتائج حقيقية تفيدك وتقدر
                تقييم أثرها بنفسك. وفريقنا مدرب وذو خبرة عالية بيوفرلك بيها
                تجربة
              </p>
            </div> */}
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
            {/* <div className={`animate__animated ${imgAnLight}  slider-3-text`}>
              <h2>تصميم مواقعك</h2>
              <h3>بريميدوس بنحققلك نمو سريع ونتائج تقيمها بنفسك</h3>
              <p>
                نصمم موقع ويب قويه ومخصصه لنشاطك بنركز فيها انك تحقق نتاج تفيدك
                فريقنا زو خبره من المصممين والمطورين موجود دائما لمساعدك في تجره
                ممتازه تنقل بيها شغلك لعالم لاونلاين{" "}
              </p>
            </div> */}
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
