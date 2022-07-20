import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UserInfo, UserPosts, Saved } from "../../components";
import { getUser } from "../../features";

import { useToast } from "../../hooks";

const Profile = () => {
  const { profile, auth } = useSelector((state) => state);

  const [tab, setTab] = useState("Posts");

  const dispatch = useDispatch();
  const { showToast } = useToast();
  const { id } = useParams();

  useEffect(() => {
    if (profile.ids.every((item) => item !== id)) {
      dispatch(getUser({ id, auth, showToast }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, auth, dispatch, profile.ids]);

  return (
    <div
      className="w-full bg-white dark:bg-slate-900 min-h-screen"
      style={{ position: "relative", top: "5rem" }}
    >
      <UserInfo id={id} auth={auth} profile={profile} />

      {auth.user?._id === id && (
        <div className="w-full flex justify-center">
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
              <li className="mr-2">
                <div
                  onClick={() => setTab("Posts")}
                  className={`inline-block p-4 rounded-t-lg border-b-2 ${
                    tab === "Posts"
                      ? "text-cyan-600 border-cyan-600  dark:text-cyan-500 dark:border-cyan-500"
                      : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  }  `}
                >
                  Posts
                </div>
              </li>
              <li className="mr-2">
                <div
                  onClick={() => setTab("Saved")}
                  className={`inline-block p-4 rounded-t-lg border-b-2 ${
                    tab === "Saved"
                      ? "text-cyan-600 border-cyan-600  dark:text-cyan-500 dark:border-cyan-500"
                      : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  }  `}
                >
                  Saved
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}

      {profile.loading ? (
        <span className="loader block mx-auto"></span>
      ) : (
        <div className="m-8">
          {tab === "Saved" && <Saved auth={auth} dispatch={dispatch} />}
          {tab === "Posts" && (
            <UserPosts
              auth={auth}
              profile={profile}
              dispatch={dispatch}
              id={id}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
