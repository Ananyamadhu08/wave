import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useToast } from "../../hooks";
import { getDataAPI } from "../../utils";
import SearchUserCard from "./SearchUserCard";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  const { showToast } = useToast();

  const { auth } = useSelector((state) => state);

  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    setSearch(e.target.value.toLowerCase().replace(/ /g, ""));

    try {
      setLoading(true);

      const res = await getDataAPI(`search?username=${search}`, auth.token);

      setUsers(res.data.users);

      setLoading(false);
    } catch (error) {
      showToast(error.response.data.msg, "error");
    }
  };

  return (
    <form className="w-7/12 mx-5">
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
          onChange={(e) => handleSearch(e)}
          required
        />
      </div>

      {users && search.length > 0 && (
        <div
          className="absolute shadow mt-2 p-6 bg-cyan-100 dark:bg-slate-600 rounded-md overflow-x-scroll h-[200px] z-50  transition-all ease-in delay-300"
          style={{ width: "55.5%" }}
        >
          {users &&
            users.map((user) => (
              <SearchUserCard user={user} key={user.userName} />
            ))}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
