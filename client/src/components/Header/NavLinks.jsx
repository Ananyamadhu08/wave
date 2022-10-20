import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context";

const NavLinks = () => {
  const { theme, setTheme } = useTheme();
  return (
    <ul className="flex items-center gap-7 pr-2">
      <li>
        {
          <NavLink to="/">
            {theme === "light" ? (
              <div className="text-3xl text-cyan-50">
                <i className="fa-solid fa-house"></i>
              </div>
            ) : (
              <div className="text-3xl text-cyan-50">
                <i className="fa-solid fa-house"></i>
              </div>
            )}
          </NavLink>
        }
      </li>
      <li>
        {
          <button
            onClick={() => {
              setTheme((currentTheme) =>
                currentTheme === "light" ? "dark" : "light"
              );
            }}
          >
            {theme === "light" ? (
              <div className="text-3xl text-cyan-50">
                <i className="fa-solid fa-moon"></i>
              </div>
            ) : (
              <div className="text-3xl text-cyan-50">
                <i className="fa-solid fa-sun"></i>
              </div>
            )}
          </button>
        }
      </li>
      {/* <li>
        <NavLink to="/chat">
          {theme === "light" ? (
            <div className="text-3xl text-cyan-50">
              <i className="fa-solid fa-comment"></i>
            </div>
          ) : (
            <div className="text-3xl text-cyan-50">
              <i className="fa-solid fa-comment"></i>
            </div>
          )}
        </NavLink>
      </li> */}
      {/* <li>
        <NavLink to="/chat">
          {theme === "light" ? (
            <div className="text-3xl text-cyan-50">
              <i className="fa-solid fa-bell"></i>
            </div>
          ) : (
            <div className="text-3xl text-cyan-50">
              <i className="fa-solid fa-bell"></i>
            </div>
          )}
        </NavLink>
      </li> */}
    </ul>
  );
};

export default NavLinks;
