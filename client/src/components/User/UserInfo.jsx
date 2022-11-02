import React, { useEffect, useState } from "react";
import Avatar from "../Avatar";
import Button from "../Button";
import FollowButton from "../FollowButton";
import SearchUserCard from "../Header/SearchUserCard";
import Modal from "../Modal";
import EditProfileModal from "./EditProfileModal";

const UserInfo = ({ id, auth, profile }) => {
  const [userData, setUserData] = useState([]);
  const [onEdit, setOnEdit] = useState(false);

  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);

  useEffect(() => {
    if (id === auth.user?._id) {
      setUserData([auth.user]);
    } else {
      const newData = profile.users.find((user) => user?._id === id);
      setUserData([newData]);
    }
  }, [id, auth, auth.user, profile.users]);

  return (
    <div className="w-full max-w-4xl px-5 mx-auto">
      {userData?.map((user) => (
        <div className="flex justify-around flex-wrap" key={user?._id}>
          <Avatar
            className="w-40 h-40 rounded-full"
            src={user?.avatar}
            alt={user?.userName}
          />

          <div className="min-w-[250px] max-w-[550px] w-full flex-1 opacity-70 my-0 mx-4">
            <div className="flex items-center flex-wrap">
              <h2 className="flex-[3_1_0%] text-4xl font-normal translate-y-[4px] mb-4 text-slate-900 dark:text-cyan-100 ">
                {user?.userName}
              </h2>

              {user?._id === auth.user?._id ? (
                <div className="w-5/12">
                  <Button onClick={() => setOnEdit(true)} type="normal">
                    Edit Profile
                  </Button>
                </div>
              ) : (
                <div className="w-5/12">
                  <FollowButton user={user} />
                </div>
              )}
            </div>

            <div className="text-cyan-500 mb-4">
              <span
                className={`ml-4 ${
                  auth.user?._id === id && "hover:underline cursor-pointer"
                } `}
                onClick={() => {
                  auth.user?._id === id && setShowFollowers(true);
                }}
              >
                {user?.followers.length} Followers
              </span>
              <span
                className={`ml-4 ${
                  auth.user?._id === id && "hover:underline"
                } `}
                onClick={() => {
                  auth.user?._id === id && setShowFollowing(true);
                }}
              >
                {user?.following.length} Following
              </span>
            </div>

            <h6 className="mb-4  text-slate-900 dark:text-cyan-100">
              {user?.fullName}
              <span className="text-red-500 ml-3">{user?.mobile}</span>
            </h6>
            <p className="mb-4  text-slate-900 dark:text-cyan-100">
              {user?.address}
            </p>
            <h6 className="mb-4  text-slate-900 dark:text-cyan-100">
              {user?.email}
            </h6>
            <a
              href={user?.website}
              className="text-cyan-500 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {user?.website}
            </a>
            <p className="mt-4  text-slate-900 dark:text-cyan-100">
              {user?.story}
            </p>
          </div>

          {onEdit && <EditProfileModal onEdit={onEdit} setOnEdit={setOnEdit} />}

          {showFollowers && (
            <Modal
              title="Followers"
              body={user?.followers.map((user) => (
                <SearchUserCard
                  key={user?._id}
                  user={user}
                  setShowFollowers={setShowFollowers}
                >
                  {auth.user?._id !== user?._id && <FollowButton user={user} />}
                </SearchUserCard>
              ))}
              isOpen={showFollowers}
              setIsOpen={setShowFollowers}
            />
          )}
          {showFollowing && (
            <Modal
              title="Following"
              body={user?.following.map((user) => (
                <SearchUserCard
                  key={user?._id}
                  user={user}
                  setShowFollowers={setShowFollowing}
                >
                  {auth.user?._id !== user?._id && <FollowButton user={user} />}
                </SearchUserCard>
              ))}
              isOpen={showFollowing}
              setIsOpen={setShowFollowing}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default UserInfo;
