import React from "react";
import { headerMenu } from "../../data/header";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation(0);
  return (
    <nav className="header__menu">
      <ul className="menu">
        {headerMenu.map((menu, key) => {
          <li
            key={key}
            className={location.pathname === menu.src ? "active" : ""}
          >
            <Link to={menu.src}>{menu.title}</Link>
          </li>;
        })}
      </ul>
    </nav>
  );
};

export default Menu;
