import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedProduct from "../components/FeaturedProduct";
import Categories from "../components/Categories";
import ContactUs from "../components/ContactUs";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturedProduct/>
      <Categories/>
      <ContactUs/>
    </div>
  );
}
