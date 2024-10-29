"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const SliderCamp = () => {
  return (
    <div>
      <div className=" flex flex-col gap-5 justify-center items-center text-center m-auto p-4 md:translate-y-[-20%]">
        <div>
          <Image
            src={"/assets/images/logo.webp"}
            alt="Person image"
            width={500}
            height={300}
          />
        </div>
        <div className="flex flex-col gap-5 justify-center items-center text-center m-auto ">
          <div className="gap-4 flex-col md:flex-row flex ">
            <span className="text-xl md:text-5xl text-textCont font-bold">
              رفيقك في رحلة البحث
            </span>
            <span className="text-xl md:text-5xl text-text font-bold border-b-4 border-text pb-3 ">
              عن العمالة المثالية
            </span>
          </div>
          <div className="gap-4 flex-col flex w-full">
            <p className="text-xl md:text-2xl text-text2  pb-3">
              لأنك تستحق الخدمة الراقية
            </p>
            <p className="text-2xl md:text-3xl text-text2  pb-3 ">
              فى إكسي الخليج، نعدك بالأفضل
            </p>
          </div>
          <div>
            <button className=" flex hover:scale-105 transition transform duration-200 group  items-center text-white bg-background  hover:bg-textCont  px-4 py-2 rounded-lg text-[16px] font-bold gap-2">
              <span>
                <FontAwesomeIcon
                  icon={faHeadset}
                  className="w-5 h-5 text-text bg-white group-hover:bg-background group-hover:text-white  p-2 rounded-lg transition duration-200 ease-in-out  group-hover:scale-110"
                />
              </span>
              اتصل بنا 920028066
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default SliderCamp;
