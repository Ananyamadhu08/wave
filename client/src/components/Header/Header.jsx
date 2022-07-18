import React from "react";

import NavLinkDropdown from "./NavLinkDropdown";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="fixed w-full">
      <nav className="h-20 bg-slate-900 flex items-center p-4 justify-between px-9">
        <div>
          <h1 className="text-cyan-500 text-4xl">WAVE</h1>
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
