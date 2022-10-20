import React from "react";

import { Link } from "react-router-dom";

import Avatar from "./Avatar";

const UserCard = ({
  children,
  user,
  border,
  handleClose,
  setShowFollowers,
  setShowFollowing,
  msg,
  to,
}) => {
  const handleCloseAll = () => {
    if (handleClose) handleClose();
    if (setShowFollowers) setShowFollowers(false);
    if (setShowFollowing) setShowFollowing(false);
  };

  return (
    <div
      className={`flex p-2 items-center justify-between dark:text-white w-full ${border}`}
    >
      <Link
        to={`/user/${user._id}`}
        onClick={handleCloseAll}
        className="flex items-center w-full"
      >
        <Avatar src={user.avatar} className="w-14 h-14 rounded-[50%]" />

        <div className="ml-4" style={{ transform: "translateY(-2px)" }}>
          <span className="block dark:text-white hover:underline w-28 text-ellipsis overflow-hidden">
            {user.userName}
          </span>

          <small className="dark:text-white" style={{ opacity: 0.7 }}>
            {user.fullName}
          </small>
        </div>
      </Link>

      {children}
    </div>
  );
};

export default UserCard;
