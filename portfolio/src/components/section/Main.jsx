import React from "react";

import Header from "./Header";

const Main = (props) => {
  return (
    <div>
      <Header />
      <main id="main" role="main">
        {props.children}
      </main>
    </div>
  );
};

export default Main;
