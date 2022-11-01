import React from "react";

const LikeButton = ({ isLike, handleLike, handleUnLike }) => {
  return (
    <>
      {isLike ? (
        <div className="text-[2rem] text-red-600" onClick={handleUnLike}>
          <i className="fa-solid fa-heart"></i>
        </div>
      ) : (
        <div className="text-[2rem] text-cyan-500" onClick={handleLike}>
          <i class="fa-regular fa-heart"></i>
        </div>
      )}
    </>
  );
};

export default LikeButton;
