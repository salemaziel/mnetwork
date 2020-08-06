import React from "react";
import HeroSection from "components/HeroSection";
import FaqSection from "components/FaqSection";

function AboutPage(props) {
  return (
    <>
      <HeroSection
        bg="white"
        textColor="white"
        size="lg"
        bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1596089148/mack.network/crisoforo-gaspar-hernandez-lMX5vchHvdo-unsplash-oaxaca_vbqo6r.jpg"
        bgImageOpacity={1}
        title="Mackintosh Network"
        subtitle="Central Hub for Mackintosh Network for friends and family"
      ></HeroSection>
      <FaqSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Frequently Asked Questions"
        subtitle=""
      ></FaqSection>
    </>
  );
}

export default AboutPage;
