import React, { useState } from "react";
import { headerMenu } from "../../data/header";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="sideMenu">
      <button className="sideMenu__button" role="button" onClick={openMenu}>
        {isOpen ? (
          <i className="fa-solid fa-x"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </button>
      <ul
        className={isOpen ? "slide" : ""}
        style={{ display: isOpen ? "block" : "none" }}
      >
        {headerMenu.map((menu, key) => (
          <li key={key}>
            <Link to={menu.src}>{menu.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
