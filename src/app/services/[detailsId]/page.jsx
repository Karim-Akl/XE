"use client";
import React, { useState, useEffect } from "react";
import "../../../components/icons/icons";
import Link from "next/link";
import Image from "next/image";

const Page = ({ params }) => {
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Define the base URL for the images
  const imageBaseUrl = "https://xealkhalej-backend.alwajez.com/";
  const titleWords = Data.title?.split(" ");
  const { detailsId } = params;
  console.log("detailsId:", detailsId);

  useEffect(() => {
    if (detailsId) {
      fetch(
        `https://xealkhalej-backend.alwajez.com/api/user/show-service/${detailsId}`
      )
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
    }
  }, [detailsId]);

  return (
    <div>
      <section className="services-details container mt-10 mb-10 h-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex justify-center">
            <Image
              src={`${imageBaseUrl}${Data.image}`}
              alt={Data.title}
              width={600}
              height={413}
              className="w-full h-auto"
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="flex flex-col gap-5">
            <div className="gap-4 flex-col md:flex-row flex w-full">
              <span className="text-5xl text-textCont font-bold">
                {titleWords && titleWords.length > 2
                  ? titleWords.slice(0, -2).join(" ")
                  : ""}
              </span>
              <span className="text-5xl text-text font-bold border-b-4 border-text pb-3 w-max">
                {titleWords && titleWords.length > 1
                  ? titleWords.slice(-2).join(" ")
                  : ""}
              </span>
            </div>

            <p className="text-xl text-textCont mt-4">{Data.description}</p>

            <div className="mt-6">
              <h2 className="text-4xl text-textCont font-bold">{`لماذا تختار خدمتنا؟`}</h2>
            </div>

            <div className="flex flex-col gap-4">
              <div className=" gap-5 mt-4 grid grid-cols-1 md:grid-cols-2">
                {/* يمكنك تكرار هذه القطع لعرض المعلومات المختلفة */}
                <ServiceFeature
                  title="جودة مضمونة"
                  description="عمالة مدربة من دول مختارة بعناية لتوفير أعلى مستويات الجودة"
                />
                <ServiceFeature
                  title="جودة مضمونة"
                  description="عمالة مدربة من دول مختارة بعناية لتوفير أعلى مستويات الجودة"
                />
                <ServiceFeature
                  title="جودة مضمونة"
                  description="عمالة مدربة من دول مختارة بعناية لتوفير أعلى مستويات الجودة"
                />
                <ServiceFeature
                  title="جودة مضمونة"
                  description="عمالة مدربة من دول مختارة بعناية لتوفير أعلى مستويات الجودة"
                />
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  className="relative bg-[var(--text)] text-white py-4 px-10 rounded-xl transition-all duration-300 ease-in-out cursor-pointer text-[15px] font-bold uppercase border-transparent hover:bg-[var(--primary)]"
                >
                  <span>إرسال</span>
                  <span className="semicircle absolute top-1 left-[95px] w-[11px] h-[35px] overflow-hidden">
                    <span className="block absolute w-[35px] h-[35px] border-2 border-white rounded-full"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// مكون لعرض ميزات الخدمة
const ServiceFeature = ({ title, description }) => (
  <div className="flex gap-5 mt-4 w-full">
    <div className="flex gap-3 w-full">
      <div className="mt-2">
        <svg
          className="w-6 h-6 stroke-[2px] stroke-[#c2a05b] hover:scale-125 hover:stroke-black transition-colors duration-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27L8.91 8.26L12 2z"
            fill="none"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl text-textCont">{title}</h2>
        <p className="text-sl text-textCont">{description}</p>
      </div>
    </div>
  </div>
);

export default Page;