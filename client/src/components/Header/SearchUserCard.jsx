import React from "react";
import { Link } from "react-router-dom";

const SearchUserCard = ({ user }) => {
  console.log(user, "SearchUserCard user prop");
  return (
    <Link
      to={`/user/${user._id}`}
      className="flex items-center text-gray-900 bg-cyan-50 dark:bg-slate-800 shadow-md dark:text-gray-100 py-2 px-3 mb-3 w-full rounded cursor-pointer hover:bg-cyan-100"
    >
      <img
        src={user.avatar}
        alt={user.userName}
        className="h-12 w-12 rounded-full mr-5"
      />

      <div className="flex flex-col">
        <h4 className="text-2xl">{user.userName}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-50">
          {user.fullName}
        </p>
      </div>
    </Link>
  );
};

export default SearchUserCard;
