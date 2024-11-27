import React, { useState } from "react";
import { headerMenu } from "../../data/header";
import { Link } from "react-router-dom";

const SideMenu = ({ toggleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="sideMenu">
      <button className="sideMenu__button" role="button" onClick={toggleMenu}>
        {isOpen ? (
          <i className="fa-solid fa-x"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </button>
      <nav className="header__toggle__menu">
        <ul className="toggle__menu">
          {headerMenu.map((menu, key) => (
            <li key={key}>
              <Link to={menu.src}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
