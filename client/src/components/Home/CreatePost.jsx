import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../Avatar";
import { setPostModal } from "../../features";

const CreatePost = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="bg-slate-900 dark:bg-cyan-900 rounded shadow-md p-5 my-3 flex dark:border dark:border-gray-700">
      <Avatar
        src={auth.user.avatar}
        alt={auth.user.userName}
        className="w-14 h-12 rounded-full"
      />
      <button
        className="bg-cyan-100 dark:bg-slate-900 dark:text-cyan-50 text-slate-900 border-none outline-none rounded-[30px] w-full text-2xl py-0 px-3 text-left my-0 ml-3 hover:bg-slate-400 dark:hover:bg-slate-900"
        onClick={() => dispatch(setPostModal({ isModalOpen: true }))}
      >
        {auth.user.userName}, what are you thinking?
      </button>
    </div>
  );
};

export default CreatePost;
