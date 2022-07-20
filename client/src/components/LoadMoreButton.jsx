import React from "react";
import Button from "./Button";

const LoadMoreButton = ({ result, page, load, handleLoadMore }) => {
  return (
    <>
      {result < 9 * (page - 1)
        ? ""
        : !load && (
            <Button type="normal" onClick={handleLoadMore}>
              Load More
            </Button>
          )}
    </>
  );
};

export default LoadMoreButton;
