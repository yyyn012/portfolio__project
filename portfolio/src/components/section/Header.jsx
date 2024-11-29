import React from "react";

import Logo from "../header/Logo";
import Menu from "../header/Menu";
import SideMenu from "../header/SideMenu";

const Header = () => {
  return (
    <header id="header" role="banner">
      <Logo />
      <Menu />
      <SideMenu />
    </header>
  );
};

export default Header;
