import React, { useState } from "react";
import { headerMenu } from "../../data/header";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <nav className="header__menu">
      <ul className="menu">
        {headerMenu.map((menu, key) => (
          <li key={key}>
            <Link to={menu.src}>{menu.title}</Link>
          </li>
        ))}
        <button
          className={isOpen ? "open" : ""}
          onClick={() => toggleMenu()}
          style={{ backgroundColor: "white" }}
        >
          open
        </button>
      </ul>
    </nav>
  );
};

export default Menu;
