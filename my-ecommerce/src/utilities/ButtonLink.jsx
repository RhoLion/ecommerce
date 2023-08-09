import React from "react";
import { NavLink } from "react-router-dom";

const ButtonLink = ({ text, to }) => {
  return (
    <NavLink
      to={to}
      className="flex items-center justify-center mt-6 lg:mt-0 ml-6 lg:ml-20 rounded-full border-2 font-bold text-center border-black px-4 py-2 text-black hover:text-white hover:bg-green-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-black w-[200px] h-[50px]"
    >
      {text}
    </NavLink>
  );
}

export default ButtonLink;
