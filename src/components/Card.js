import React from "react";

const Card = ({ title, qty }) => {
  return (
    <div className="w-full px-2 mb-5 -mx-2 md:w-2/6 md:mb-0">
      <div className="w-full p-5 transition-all duration-300 bg-white border border-gray-200 border-solid rounded-lg hover:shadow-xl">
        <h2 className="text-lg font-light text-black">{title}</h2>
        <div className="flex items-center my-2">
          <h2 className="inline-block text-xl font-semibold">{`${qty} Registered`}</h2>
        </div>
        <p className="text-sm text-gray-400">Total {title}</p>
      </div>
    </div>
  );
};

export default Card;
