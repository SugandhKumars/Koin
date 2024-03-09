import React from "react";
import bitcoin from "../assets/BTC_ICON.png";

import BtcDetails from "./BtcDetails";
const Bitcoin = () => {
  return (
    <div className="h-[711px] pb-[20px] bg-[#FFFFFF] rounded-lg pt-[24px]">
      <div className="w-[877px] h-[654px]   ml-[24px] mb-[33px]  ">
        <div className="h-[40px]   flex  ">
          <div className="w-[166.22px] h-[36px] flex items-center">
            <img className="w-[36px] h-[36px]" src={bitcoin} alt="Bitcoin" />
            <div className=" w-[122.33px] h-[28.8px] ml-[8px] flex">
              <h1 className="w-[81px] h-[29px] mt-[-1px] font-inter font-semibold text-2xl leading-[28.8px] text-[#0B1426]">
                Bitcoin
              </h1>
              <p className="w-[33px] h-[20px] font-inter font-semibold text-base leading-[19.2px] text-[#5D667B] my-[4.4px] ml-[8px]">
                BTC
              </p>
            </div>
          </div>
          <div className=" flex  rounded-lg w-[80px] h-[40px] bg-[#768396] ml-[40px]    border-[#808A9D">
            <button
              className="w-[60px] h-[20px] m-[10px] font-inter font-medium text-base leading-[20.16px]
            text-[#FFFFFF]"
            >
              Rank #1
            </button>
          </div>
        </div>
        <BtcDetails />
      </div>
    </div>
  );
};

export default Bitcoin;
