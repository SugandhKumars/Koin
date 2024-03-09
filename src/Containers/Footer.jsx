import React from "react";
// import SemiBold from "../Components/SemiBold";

import useCoins from "../Components/useCoins";

const Footer = () => {
  const coins = useCoins();
  //   console.log(coins);
  return (
    <div className="w-[1440px] h-[628px] bg-[#FFFFFF] mt-[56px] pt-[68.14px]">
      <div className="w-[1300px] h-[492px]  ml-[69.97px] mr-[70.03px] mb-[67.86px]  ">
        <div className="h-[246px] pb-[30px]  flex flex-col gap-[20px]">
          <div className="h-[36px]  ">
            <p
              className={
                "font-inter font-semibold text-2xl leading-[36px] text-[#202020]"
              }
            >
              You May Also Like
            </p>
          </div>
          <div className="h-[160px] mt-[20px] flex overflow-hidden">
            {coins?.map((c) => (
              <div
                key={c?.item?.coin_id}
                className="w-[260px] h-[160px] pr-[10px] "
              >
                <div className="w-[252px] h-[160px] rounded-[10px] p-[17px] border-[1px] border-[#E3E3E3]">
                  <div className="w-[218px] h-[62px]">
                    <div className="h-[38px]  ">
                      <div className="flex items-center  ">
                        <img
                          className="w-[26px] h-[26px] rounded-[13px] mr-[7px]"
                          src={c?.item?.large}
                          alt={c?.item?.name}
                        />
                        <p className="font-inter font-normal text-base leading-[19.36px] text-[#202020]">
                          {c?.item?.name}
                        </p>
                        <div className="bg-[#0AB27D0F]">
                          <p className="font-inter font-normal text-xs leading-[14.52px] text-[#32BE88] ml-[4px] mt-[2.75px] mb-[2.25px] mr-[3.55px]">
                            {c?.item?.data?.price_change_percentage_24h?.usd.toFixed(
                              2
                            )}
                            %
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="h-[24px] pr-[139px]">
                      <p className="font-inter font-medium text-xl leading-[24px] text-[#171717]">
                        {c?.item?.data?.price}
                      </p>
                    </div>
                  </div>
                  <div className="w-[200px] h-[60px] pr-[18px] pb-[4px]  ">
                    <img src={c?.item?.data?.sparkline} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[246px] pb-[30px]">
          <div className="h-[36px]">
            <p
              className={
                " font-inter font-semibold text-2xl leading-[36px] text-[#202020]"
              }
            >
              Trending Coins
            </p>
          </div>
          <div className="h-[160px] mt-[20px] flex overflow-hidden">
            {coins?.map((c) => (
              <div
                key={c?.item?.coin_id}
                className="w-[260px] h-[160px] pr-[10px] "
              >
                <div className="w-[252px] h-[160px] rounded-[10px] p-[17px] border-[1px] border-[#E3E3E3]">
                  <div className="w-[218px] h-[62px]">
                    <div className="h-[38px]  ">
                      <div className="flex items-center  ">
                        <img
                          className="w-[26px] h-[26px] rounded-[13px] mr-[7px]"
                          src={c?.item?.large}
                          alt={c?.item?.name}
                        />
                        <p className="font-inter font-normal text-base leading-[19.36px] text-[#202020]">
                          {c?.item?.name}
                        </p>
                        <div className="bg-[#0AB27D0F]">
                          <p className="font-inter font-normal text-xs leading-[14.52px] text-[#32BE88] ml-[4px] mt-[2.75px] mb-[2.25px] mr-[3.55px]">
                            {c?.item?.data?.price_change_percentage_24h?.usd.toFixed(
                              2
                            )}
                            %
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="h-[24px] pr-[139px]">
                      <p className="font-inter font-medium text-xl leading-[24px] text-[#171717]">
                        {c?.item?.data?.price}
                      </p>
                    </div>
                  </div>
                  <div className="w-[200px] h-[60px] pr-[18px] pb-[4px]  ">
                    <img src={c?.item?.data?.sparkline} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
