import React from "react";
import OverviewTxt from "./OverviewTxt";

const OverviewBar = () => {
  return (
    <div className="w-[881px] h-[48px] border-[1px] border-b-[#D3E0E6] flex gap-[32px] my-[20px] items-center">
      <OverviewTxt className={"font-semibold text-[#0141CF]"}>
        Overview
      </OverviewTxt>
      <OverviewTxt>Fundamental</OverviewTxt>
      <OverviewTxt>News Insight</OverviewTxt>
      <OverviewTxt>Sentiments</OverviewTxt>
      <OverviewTxt>Team</OverviewTxt>
      <OverviewTxt>Technicals</OverviewTxt>
      <OverviewTxt>Tokenomics</OverviewTxt>
    </div>
  );
};

export default OverviewBar;
