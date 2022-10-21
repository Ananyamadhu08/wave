import React from "react";

const LikeButton = ({ isLike, handleLike, handleUnLike }) => {
  return (
    <>
      {isLike ? (
        <div className="text-3xl text-red-600" onClick={handleUnLike}>
          <i className="fa-solid fa-heart"></i>
        </div>
      ) : (
        <div className="text-3xl text-slate-400" onClick={handleLike}>
          <i className="fa-solid fa-heart"></i>
        </div>
      )}
    </>
  );
};

export default LikeButton;
