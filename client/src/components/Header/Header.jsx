import React from "react";
import { Link } from "react-router-dom";

import NavLinkDropdown from "./NavLinkDropdown";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="md:shadow-lg hidden md:block  md:sticky h-20 md:bg-white top-0 left-0 right-0 dark:bg-slate-800 transition-colors  ease-in delay-300 z-50">
      <nav className="h-20 bg-slate-900 dark:bg-cyan-900 flex items-center p-4 justify-between px-9">
        <div>
          <Link to="/" className="text-cyan-100 text-4xl">
            WAVE
          </Link>
        </div>

        <SearchBar />

        <div className="flex items-center">
          <NavLinks />

          <NavLinkDropdown />
        </div>
      </nav>
    </div>
  );
};

export default Header;
