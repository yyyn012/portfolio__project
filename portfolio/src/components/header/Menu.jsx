import React from "react";
import { headerMenu } from "../../data/header";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="header__menu">
      <ul className="menu">
        {headerMenu.map((menu, key) => (
          <li key={key}>
            <Link to={menu.src}>{menu.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
