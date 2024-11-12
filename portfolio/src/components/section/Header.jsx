import React, { useState } from "react";

import Logo from "../header/Logo";
import Menu from "../header/Menu";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    console.log("active");
  };

  return (
    <header id="header" role="banner">
      <Logo toggleMenu={toggleMenu} />
      <Menu />
    </header>
  );
};

export default Header;
