import React from "react";
import arrow from "../assets/Vectorarrow.svg";
const Text = () => {
  return (
    <div className="w-[187.34px] h-[17px] mt-[17.19px] ml-[55.97px] flex items-center">
      <p className="font-inter flex w-[115px] font-normal text-sm leading-[16.94px] text-[#3E5765] ">
        Cryptocurrencies
        <img
          className="w-[10px] h-[10.5px] mt-[4.5px] ml-[9.3px]"
          src={arrow}
          alt=""
        />
      </p>
      <p className="font-inter w-[47px] text-[14px] font-medium leading-[16.94px] text-[#0F1629] ml-[25.34px]">
        Bitcoin
      </p>
    </div>
  );
};

export default Text;
