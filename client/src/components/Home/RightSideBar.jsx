import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSuggestions } from "../../features";
import { useToast } from "../../hooks";

import lottie from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

import FollowButton from "../FollowButton";
import { useTheme } from "../../context";
import UserCard from "../UserCard";

defineLordIconElement(lottie.loadAnimation);

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
            <lord-icon
              src="https://cdn.lordicon.com/sihdhmit.json"
              trigger="morph"
              stroke="70"
              colors={"primary:#06b6d4"}
              style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
              onClick={() =>
                dispatch(getSuggestions({ token: auth.token, showToast }))
              }
            ></lord-icon>
          ) : (
            <lord-icon
              src="https://cdn.lordicon.com/sihdhmit.json"
              trigger="morph"
              stroke="70"
              colors={"primary:#06b6d4 "}
              style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
              onClick={() =>
                dispatch(getSuggestions({ token: auth.token, showToast }))
              }
            ></lord-icon>
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