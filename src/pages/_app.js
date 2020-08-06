import React from "react";
import "styles/global.scss";
import NavbarCustom from "components/NavbarCustom";
import Footer from "components/Footer";
import { ProvideAuth } from "util/auth.js";

function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <>
        <NavbarCustom
          bg="white"
          variant="light"
          expand="md"
          logo="https://uploads.divjoy.com/logo.svg"
        ></NavbarCustom>

        <Component {...pageProps} />

        <Footer
          bg="success"
          textColor="white"
          size="md"
          bgImage=""
          bgImageOpacity={1}
          description="A short description of what you do here"
          copyright="© 2019 Company"
          logo="https://uploads.divjoy.com/logo.svg"
        ></Footer>
      </>
    </ProvideAuth>
  );
}

export default MyApp;
