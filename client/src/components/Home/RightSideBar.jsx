import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSuggestions } from "../../features";
import { useToast } from "../../hooks";

import FollowButton from "../FollowButton";
import { useTheme } from "../../context";
import UserCard from "../UserCard";

const RightSideBar = () => {
  const { auth, profile } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { showToast } = useToast();

  const { theme } = useTheme();

  useEffect(() => {
    dispatch(getSuggestions({ token: auth.token, showToast }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-3 px-6">
      <UserCard user={auth.user} to={true} />
      <div className="flex justify-between items-center my-2">
        <h5 className="dark:text-white">Suggestions for you</h5>
        {!profile.suggestionLoading &&
          (theme === "light" ? (
            <div
              className="text-xl text-cyan-500"
              onClick={() =>
                dispatch(getSuggestions({ token: auth.token, showToast }))
              }
            >
              <i className="fa-solid fa-arrows-rotate"></i>
            </div>
          ) : (
            <div
              className="text-xl text-cyan-500"
              onClick={() =>
                dispatch(getSuggestions({ token: auth.token, showToast }))
              }
            >
              <i className="fa-solid fa-arrows-rotate"></i>
            </div>
          ))}
      </div>

      {profile.suggestionLoading ? (
        <span className="loader block mx-auto"></span>
      ) : (
        <div className="suggestions">
          {profile.suggestionsUsers.map((user) => (
            <UserCard key={user._id} user={user} to={true}>
              <div className="w-24">
                <FollowButton user={user} />
              </div>
            </UserCard>
          ))}
          {profile.suggestionsUsers.length === 0 && (
            <h4 className="text-center dark:text-white"> No Suggestions </h4>
          )}
        </div>
      )}
      <div style={{ opacity: 0.5 }} className="my-2">
        <small className="block text-center dark:text-white">wave</small>

        <small className="block text-center dark:text-white">
          {" "}
          &copy; 2022{" "}
        </small>
      </div>
    </div>
  );
};

export default RightSideBar;
