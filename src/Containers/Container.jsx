import React from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const Container = () => {
  return (
    <>
      <div className="w-[1328px] h-[4399px] mt-[17.81px] mx-[56px] flex gap-[20px]">
        <LeftContainer />
        <RightContainer />
      </div>
    </>
  );
};

export default Container;
