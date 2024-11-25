import React, { useState } from "react";

import Logo from "../header/Logo";
import Menu from "../header/Menu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
    console.log("open");
  };

  return (
    <header id="header" role="banner">
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
