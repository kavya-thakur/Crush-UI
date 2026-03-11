import React from "react";
import Hero from "./sections/Hero";
import FeaturesGrid from "./sections/FeaturesGrid";
import BrowserMockup from "./sections/BrowserMockup";
// import ProductFeatures from "./sections/ProductFeatures";
import TestimonialGrid from "./sections/TestimonialGrid";
import BlockGallery from "./sections/BlockGallery";
import Footer from "./sections/Footer";
import OrbitingStack from "./sections/OrbitingStack";
// import NotusLandingPage from "../components/templates/NotusLandingPage";

const Home = () => {
  return (
    <div>
      <Hero />
      <BrowserMockup />
      <FeaturesGrid />
      {/* <ProductFeatures /> */}
      <TestimonialGrid />
      <BlockGallery />
      <OrbitingStack />
      <Footer />
      {/* <NotusLandingPage /> */}
    </div>
  );
};

export default Home;
