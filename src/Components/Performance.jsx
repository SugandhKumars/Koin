import React from "react";
import Article from "./Article";
import SemiBold from "./SemiBold";

const Performance = () => {
  return (
    <Article className={"h-[632px]"}>
      <div className="w-[831px] h[554.8px] mt-[24px] ml-[24px] ">
        <SemiBold className={"text-2xl leading-[28.8px] text-[#0F1629]"}>
          Performance
        </SemiBold>
        <div className="h-172px mt-[24px]"></div>
      </div>
    </Article>
  );
};

export default Performance;
