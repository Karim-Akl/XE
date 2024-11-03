"use client";
import React from "react";
import ReviewsSwiper from "../../components/reviews-swiper/reviews-swiper.jsx";
import Hero from "@/components/hero/hero.jsx";
import Main from "@/components/main/main.jsx";
import FeatureSection from "@/components/feature-section/feature-section.jsx";
import VideoHome from "@/components/video-home/video.jsx";
import ReviewsHome from "@/components/reviews-home/reviews-home.jsx";
import MainSwiper from "@/components/main-swiper/main-swiper.jsx";
const Home = () => {
  return (
    <>
      <MainSwiper />
      <Main />
      <VideoHome />
      <ReviewsHome />
      <Hero />
      <FeatureSection />
      <ReviewsSwiper />
    </>
  );
};
export default Home;
