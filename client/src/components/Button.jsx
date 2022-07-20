import React from "react";

const Button = ({ type, children, ...rest }) => {
  if (type === "danger") {
    return (
      <button
        className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative cursor-pointer font-medium border-none text-white bg-red-600 w-full hover:bg-red-700"
        {...rest}
      >
        {children}
      </button>
    );
  }

  if (type === "normal") {
    return (
      <button
        className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative cursor-pointer font-medium border-none text-white bg-cyan-600 w-full hover:bg-cyan-700"
        {...rest}
      >
        {children}
      </button>
    );
  }
};

export default Button;
