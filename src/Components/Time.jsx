import React from "react";

const Time = ({ children, className }) => {
  return (
    <div
      className={`font-inter font-medium text-[13px] leading-[19.5px] text-[#5D667B] ${className}`}
    >
      {children}
    </div>
  );
};

export default Time;
