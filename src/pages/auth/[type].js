import React from "react";
import AuthSection from "components/AuthSection";
import { useRouter } from "next/router";

function AuthPage(props) {
  const router = useRouter();

  return (
    <AuthSection
      bg="dark"
      textColor="light"
      size="md"
      bgImage="https://source.unsplash.com/RnCPiXixooY"
      bgImageOpacity={0.8}
      inputSize="lg"
      type="signup"
      providers={["google", "facebook", "twitter"]}
      afterAuthPath="/dashboard"
    ></AuthSection>
  );
}

// Tell Next.js to export static files for each auth page
// See https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export const getStaticPaths = () => ({
  paths: [
    { params: { type: "signin" } },
    { params: { type: "signup" } },
    { params: { type: "forgotpass" } },
    { params: { type: "changepass" } },
  ],
  fallback: true,
});

export function getStaticProps({ params }) {
  return { props: {} };
}

export default AuthPage;
