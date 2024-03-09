import React from "react";

const SemiBold = ({ children, className }) => {
  return (
    <div
      className={`font-inter font-semibold text-[16px] leading-[19.36px] ${className}`}
    >
      {children}
    </div>
  );
};

export default SemiBold;
