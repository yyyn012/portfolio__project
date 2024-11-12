import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Main = (props) => {
  return (
    <div>
      <Header />
      <main id="main" role="main">
        {props.children}
        Main
      </main>
      <Footer />
    </div>
  );
};

export default Main;
