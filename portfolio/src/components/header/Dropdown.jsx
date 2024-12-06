import React, { useState, useEffect } from "react";
import { headerMenu } from "../../data/header";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
  const [isVisibility, setIsVisibility] = useState(false);
  const [repeat, setRepeat] = useState(null);

  useEffect(() => {
    if (props.visibility) {
      clearTimeout(repeat);
      setRepeat(null);
      setIsVisibility(true);
    } else {
      setRepeat(
        setTimeout(() => {
          setIsVisibility(false);
        }, 400)
      );
    }
  }, [props.visibility]);

  return (
    <div className={`${props.visibility ? "slideDown" : "slideUp"}`}>
      <ul style={{ display: isVisibility ? "block" : "none" }}>
        {headerMenu.map((menu, key) => (
          <li key={key}>
            <Link to={menu.src}>{menu.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
