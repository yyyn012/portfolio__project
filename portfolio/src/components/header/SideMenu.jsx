import React, { useState } from "react";

import Dropdown from "./Dropdown";

const SideMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div id="sideMenu" onBlur={handleBlur}>
      <button className="sideMenu__button" role="button" onClick={openMenu}>
        {isOpen ? (
          <i className="fa-solid fa-x"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </button>

      <Dropdown visibility={isOpen}></Dropdown>
    </div>
  );
};

export default SideMenu;
