import React, { useState } from "react";

import Logo from "../header/Logo";
import Menu from "../header/Menu";
import SideMenu from "../header/SideMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
    console.log("open");
  };

  return (
    <header id="header" role="banner" className={menuOpen ? "open" : ""}>
      <Logo />
      <Menu />
      <SideMenu toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
