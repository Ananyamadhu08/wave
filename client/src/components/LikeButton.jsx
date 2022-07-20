import React from "react";

const LikeButton = ({ isLike, handleLike, handleUnLike }) => {
  return (
    <>
      {isLike ? (
        <lord-icon
          src="https://cdn.lordicon.com/rjzlnunf.json"
          trigger="click"
          stroke="90"
          colors="primary:#06b6d4,secondary:#06b6d4"
          style={{ width: "2.5rem", height: "2.5rem" }}
          onClick={handleUnLike}
        ></lord-icon>
      ) : (
        <lord-icon
          src="https://cdn.lordicon.com/rjzlnunf.json"
          trigger="click"
          stroke="90"
          colors="primary:#06b6d4,secondary:#06b6d4"
          style={{ width: "2.5rem", height: "2.5rem" }}
          onClick={handleLike}
        ></lord-icon>
      )}
    </>
  );
};

export default LikeButton;
