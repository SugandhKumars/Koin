import React from "react";
import Bitcoin from "../Components/Bitcoin";
import OverviewBar from "../Components/OverviewBar";
import Performance from "../Components/Performance";
import Sentiment from "../Components/Sentiment";
import AboutBitcoin from "../Components/AboutBitcoin";
import Tokenamics from "../Components/Tokenamics";
import Team from "../Components/Team";

const LeftContainer = () => {
  return (
    <div className="w-[881px] flex flex-col gap-[20px] ">
      <Bitcoin />
      <OverviewBar />
      <Performance />
      <Sentiment />
      <AboutBitcoin />
      <Tokenamics />
      <Team />
      {/* <Option />
      <Performance />
      <Sentiment />
      <AboutBitcoin />
      <Tokenomics />
      <Team /> */}
    </div>
  );
};

export default LeftContainer;
