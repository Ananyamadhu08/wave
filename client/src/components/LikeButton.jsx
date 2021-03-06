import React from "react";

const LikeButton = ({ isLike, handleLike, handleUnLike }) => {
  return (
    <>
      {isLike ? (
        <div className="text-3xl text-cyan-500" onClick={handleUnLike}>
          <i className="fa-solid fa-heart"></i>
        </div>
      ) : (
        <div className="text-3xl text-cyan-500" onClick={handleLike}>
          <i className="fa-solid fa-heart"></i>
        </div>
      )}
    </>
  );
};

export default LikeButton;
