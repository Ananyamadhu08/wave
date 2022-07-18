import React from "react";

const SearchBar = () => {
  return (
    <form className="w-2/4 mx-5">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        Search
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <i className="fa-solid fa-magnifying-glass text-slate-900 dark:text-cyan-50 text-xl"></i>
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-2 pl-12 text-xl w-full bg-cyan-100 rounded-lg border border-cyan-500 focus:border-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500 focus:ring-opacity-30 dark:bg-slate-900 dark:text-cyan-50 dark:border-slate-900 dark:focus:ring-slate-800"
          required
        />
      </div>
    </form>
  );
};

export default SearchBar;
