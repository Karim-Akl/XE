import React from "react";
import SubAbout from "@/components/sub-about/sub-about";
import SupService from "@/components/sub-service/sub-service";
import WhyChooseUs from "@/components/why-choose-us/why-choose-us";
export default function AboutUs() {
  return (
    <section className="container mx-auto">
      <SubAbout />
      <SupService />
      <WhyChooseUs/>
    </section>

  );
}
