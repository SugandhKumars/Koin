import React from "react";

const OverviewTxt = ({ children, className }) => {
  return (
    <div
      className={`font-inter font-semibold text-base leading-[19.36px] ${className}`}
    >
      {children}
    </div>
  );
};

export default OverviewTxt;
