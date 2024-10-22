 "use client";
import React from "react";
import Main from "../../components/main/main";
import SubAbout from "../../components/sub-about/sub-about";
import SubService from "../../components/sub-service/sub-service";
import SliderCamp from "../../components/slider-camp/slider-camp";
import OrderNow from "../../components/order-now/order-now";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <SubAbout />
      <SubService />
      <SliderCamp />
      <OrderNow />
      <Footer />
    </>
  );
};
export default Home;
