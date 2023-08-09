import React from "react";

const Subtitle = ({ text }) => {
  return (
    <h4 className="text-l font-semibold text-gray-800 px-6 sm:px-8 lg:px-20 text-center lg:text-left mt-6 mb-10">
       {text}
    </h4>
  );
}

export default Subtitle;
