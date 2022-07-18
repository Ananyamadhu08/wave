import React from "react";

const SearchBar = () => {
  return (
    <form className="w-2/4 mx-5">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        Search
      </label>
      <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <i className="fa-solid fa-magnifying-glass text-slate-900 text-xl"></i>
        </div>
        <input
          type="search"
          id="default-search"
          class="block p-2 pl-12 text-xl w-full bg-cyan-100 rounded-lg border border-cyan-500 focus:border-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500 focus:ring-opacity-30 "
          required
        />
      </div>
    </form>
  );
};

export default SearchBar;
