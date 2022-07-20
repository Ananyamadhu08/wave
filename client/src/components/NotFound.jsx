import React from "react";
import { useTheme } from "../context";

const NotFound = () => {
  const { theme } = useTheme();

  if (theme === "light") {
    return (
      <div className="flex justify-center items-center w-full min-h-screen bg-cyan-50 ">
        <img
          className="relative top-10"
          src="https://res.cloudinary.com/dgl5z5ozi/image/upload/v1658135194/wave%20-%20a%20social%20media%20app/404_Error_light_theme_gif_izid2a.gif"
          alt="404"
        />
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center w-full min-h-screen bg-slate-900 ">
        <img
          className="relative top-10"
          src="https://res.cloudinary.com/dgl5z5ozi/image/upload/v1658135317/wave%20-%20a%20social%20media%20app/404_Error_dark_theme_onu6g4.gif"
          alt="404"
        />
      </div>
    );
  }
};

export default NotFound;
