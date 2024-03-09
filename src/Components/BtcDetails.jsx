import React, { useEffect, useState } from "react";
import polygon from "../assets/Polygon 2polygon.svg";
import { BitcoinPrice } from "../../constants/api";
import Chart from "./Chart";
import SemiBold from "./SemiBold";
import Time from "./Time";
const BtcDetails = () => {
  const [usdBtc, setUsdBtc] = useState(0);
  const [inrBtc, setInrBtc] = useState(0);
  const [change, setChange] = useState(0);
  useEffect(() => {
    getBtc();
  }, []);
  const getBtc = async () => {
    const response = await fetch(BitcoinPrice);
    const data = await response.json();
    // console.log(data);
    setInrBtc(data?.bitcoin?.inr);
    setUsdBtc(data?.bitcoin?.usd);
    setChange(data?.bitcoin?.usd_24h_change);
  };
  return (
    <>
      <div className="w-[837px] h-[574px] mt-[40px]  ">
        <div className="w-[568.72px] h-[66px] flex">
          <div className="w-[161px] h-[66px]">
            <p className="  h-[39px] font-inter font-semibold text-[28px] leading-[38.4px] text-[#0B1426]">
              ${usdBtc}
            </p>
            <p className="w-[94px] h-[27px] font-inter font-medium text-base leading-[27px] text-[#0B1426]">
              ₹ {inrBtc}
            </p>
          </div>
          <div className="w-[375.72px] h-[38.39px] ml-[32px] mb-[27.61]">
            <div className="w-[131.11px] h-[36px] flex  mb-[2.39px] items-center mr-[244.61px]  ">
              <div className=" w-[84px] h-[28px] mt-[3px] mb-[5px] rounded-[4px] p-2 bg-[#EBF9F4] flex items-center justify-center ">
                <img
                  className="w-[11px] h-[8px] my-[10px] ml-[10px] "
                  src={polygon}
                  alt="Polygon"
                />
                <p className="font-inter font-medium text-base leading-[19.36px] mr-[10px] my-[4.5px] ml-[8px] text-[#14B079]">
                  {change.toFixed(2)}%
                </p>
              </div>
              <div>
                <p className="ml-[12.08px] mb[1.5px] mr-[3.97px] font-inter font-medium text-sm leading-[27px] ">
                  (24H)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[460px] mt-[48px]">
          <div className="w-[820px] h-[20px] flex justify-between mb-[40px] mt-[48px]">
            <SemiBold className="leading-[19.5px]   h-[20px] text-[#0B1426]">
              Bitcoin Price Chart(USD)
            </SemiBold>
            <div className="flex w-[290.34px] h-[19.5px]">
              <Time className="mr-[20.63px]">1H</Time>
              <Time className={"mr-[8.72px]"}>24H</Time>
              <div className="w-[35px] h-[20px] mt-[-1px] rounded-[32px] p-2 bg-[#E2ECFE] mr-[10.77px] flex items-center justify-center">
                <Time className={"text-[#0141CF]"}>7D</Time>
              </div>
              <Time className={"mr-[21.06px]"}>1M</Time>
              <Time className={"mr-[19.06px]"}>3M</Time>
              <Time className={"mr-[19.06px]"}>6M</Time>
              <Time className={"mr-[19.91px]"}>1Y</Time>
              <Time>ALL</Time>
            </div>
          </div>
          <div className="h-[400px]">
            <Chart />
          </div>
        </div>
      </div>
    </>
  );
};

export default BtcDetails;
