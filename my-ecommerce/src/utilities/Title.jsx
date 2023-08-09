import React from "react";

const Title = ({ text }) => {
  return (
    <h2 className="text-4xl font-bold text-gray-800 px-6 sm:px-8 lg:px-20 text-center lg:text-left mt-10  ">
        {text}
    </h2>
  );
}

export default Title;
