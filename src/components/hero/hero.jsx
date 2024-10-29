"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Define the base URL for the images
  const imageBaseUrl = "https://xealkhalej-backend.alwajez.com/";

  useEffect(() => {
    fetch("https://xealkhalej-backend.alwajez.com/api/user/services")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        setData(data || []);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the FAQ data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container m-auto px-4">
      <section className="flex justify-center flex-col items-center text-center  gap-10">
        <div className="w-full flex-col m-auto flex items-center justify-center gap-4 ">
          <div className="gap-4 flex-col md:flex-row flex ">
            <span className="text-3xl md:text-5xl text-textCont font-bold">
              كفاءة، أمانة، وسرعة
            </span>
            <span className="text-3xl md:text-5xl text-text font-bold border-b-4 border-text pb-3  w-max m-auto">
              هذا وعدنا
            </span>
          </div>
          <div className="gap-4 flex-col flex w-full">
            <p className="text-xl md:text-xl text-textCont   pb-3 space-y-2 md:w-[50%] m-auto">
              نعدكم بخدمة استقدام فريدة من نوعها، تجمع بين الدقة والسرعة وكل هذا
              بأمانة ومهنية عالية ترضيكم
            </p>
          </div>
        </div>
        {isLoading ? (
          <div className="flex justify-center w-full">
            <img src="/assets/images/loader.gif" alt="Loading..." width={50} />
          </div>
        ) : Data.length === 0 ? (
          <p>No services available at the moment.</p>
        ) : (
          <div className="w-full  m-auto flex items-center justify-center ">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, Thumbs]}
              spaceBetween={20}
              centeredSlides={true}
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                640: {
                  slidesPerView: 1.9, // يظهر جزء من الشريحة التالية على الشاشات الأكبر
                },
                0: {
                  slidesPerView: 1, // يظهر شريحة واحدة فقط على الشاشات الصغيرة
                },
              }}
            >
              {Data.map((service, index) => (
                <SwiperSlide key={index}>
                  <div
                    key={service.id}
                    className="  rounded-lg  flex items-center   h-auto  mx-auto  relative  "
                  >
                    <Link
                      href={`services/${service.id}`}
                      className="flex items-center justify-center md:w-[70%] w-full   m-auto  rounded-lg"
                    >
                      <Image
                        src={`${imageBaseUrl}${service.image}`}
                        alt={service.title}
                        width={400}
                        height={313}
                        className="object-cover w-full  m-auto rounded-2xl"
                      />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </section>
    </div>
  );
};

export default Hero;
