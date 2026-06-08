import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/sections/Hero";
import Categories from "../components/sections/Category";
import BestSellers from "../components/sections/BestSellers";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import AboutUs from "../components/sections/AboutUs";
import Contact from "../components/sections/Contact";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  return (
    <main>
      <Hero />
      <Categories />
      <BestSellers />
      <AboutUs />
      <WhyChooseUs />
      <Contact />
    </main>
  );
}
