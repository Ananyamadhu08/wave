import React from "react";
import { NavLink } from "react-router-dom";
import lottie from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
defineLordIconElement(lottie.loadAnimation);

const NavLinks = () => {
  return (
    <ul className="flex items-center gap-4 pr-2">
      <li>
        <NavLink to="/">
          <lord-icon
            src="https://cdn.lordicon.com/gmzxduhd.json"
            trigger="hover"
            stroke="70"
            colors={"primary:#06b6d4 ,secondary:#f0fdfa"}
            style={{ width: "2.5rem", height: "2.5rem" }}
          ></lord-icon>
        </NavLink>
      </li>
      <li>
        <NavLink to="/chat">
          <lord-icon
            src="https://cdn.lordicon.com/rhvddzym.json"
            trigger="hover"
            stroke="70"
            colors={"primary:#06b6d4 ,secondary:#f0fdfa"}
            style={{ width: "3.3rem", height: "3.3rem" }}
          ></lord-icon>
        </NavLink>
      </li>
      <li>
        <NavLink to="/chat">
          <lord-icon
            src="https://cdn.lordicon.com/mbyiiqnh.json"
            trigger="hover"
            stroke="70"
            colors={"primary:#06b6d4 ,secondary:#f0fdfa"}
            style={{ width: "2.5rem", height: "2.5rem" }}
          ></lord-icon>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
