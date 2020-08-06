import React from "react";
import HeroSection2 from "components/HeroSection2";
import NewsletterSection from "components/NewsletterSection";
import { useRouter } from "next/router";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection2
        bg="white"
        textColor="light"
        size="lg"
        bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1596087435/mack.network/fabien-moline-XaQXyRU9pgo-unsplash_pbfnzz.jpg"
        bgImageOpacity={1}
        title="Mackintosh Network"
        subtitle=""
        buttonText="Log In"
        buttonColor="primary"
        image=""
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/signin");
        }}
      ></HeroSection2>
      <NewsletterSection
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      ></NewsletterSection>
    </>
  );
}

export default IndexPage;
