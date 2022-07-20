import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context";
import lottie from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
defineLordIconElement(lottie.loadAnimation);

const NavLinks = () => {
  const { theme } = useTheme();
  return (
    <ul className="flex items-center gap-4 pr-2">
      <li>
        {
          <NavLink to="/">
            {theme === "light" ? (
              <lord-icon
                src="https://cdn.lordicon.com/igpbsrza.json"
                trigger="hover"
                stroke="70"
                colors={"primary:#06b6d4 ,secondary:#f0fdfa"}
                style={{ width: "2.5rem", height: "2.5rem" }}
              ></lord-icon>
            ) : (
              <lord-icon
                src="https://cdn.lordicon.com/igpbsrza.json"
                trigger="hover"
                stroke="70"
                colors={"primary:#ecfeff ,secondary:#67e8f9"}
                style={{ width: "2.5rem", height: "2.5rem" }}
              ></lord-icon>
            )}
          </NavLink>
        }
      </li>
      <li>
        <NavLink to="/chat">
          {theme === "light" ? (
            <lord-icon
              src="https://cdn.lordicon.com/uvextprq.json"
              trigger="hover"
              stroke="70"
              colors={"primary:#06b6d4 ,secondary:#f0fdfa"}
              style={{ width: "2.5rem", height: "2.5rem" }}
            ></lord-icon>
          ) : (
            <lord-icon
              src="https://cdn.lordicon.com/uvextprq.json"
              trigger="hover"
              stroke="70"
              colors={"primary:#ecfeff ,secondary:#67e8f9"}
              style={{ width: "2.5rem", height: "2.5rem" }}
            ></lord-icon>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/chat">
          {theme === "light" ? (
            <lord-icon
              src="https://cdn.lordicon.com/ndydpcaq.json"
              trigger="hover"
              stroke="70"
              colors={"primary:#06b6d4 ,secondary:#f0fdfa"}
              style={{ width: "2.5rem", height: "2.5rem" }}
            ></lord-icon>
          ) : (
            <lord-icon
              src="https://cdn.lordicon.com/ndydpcaq.json"
              trigger="hover"
              stroke="70"
              colors={"primary:#ecfeff ,secondary:#67e8f9"}
              style={{ width: "2.5rem", height: "2.5rem" }}
            ></lord-icon>
          )}
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
