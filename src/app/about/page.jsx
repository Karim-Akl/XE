import React from "react";
import SubAbout from "@/components/sub-about/sub-about";
import SupService from "@/components/sub-service/sub-service";
import WhyChooseUs from "@/components/why-choose-us/why-choose-us";
export default function AboutUs() {
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
      <section className="container mx-auto">
        <SubAbout />
        <SupService />
        <WhyChooseUs />
      </section>
    </div>
  );
}
