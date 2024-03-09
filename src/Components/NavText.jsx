import React from "react";
import Button from "./Button";
import SemiBold from "./SemiBold";

const NavText = () => {
  return (
    <>
      <div className="w-[909px] h-[79px] my-[0.5px] ml-[319px] mr-[56px]  flex items-center">
        <div className="w-[728px] h-[79px]  ml-[0.15px] flex justify-end gap-8 items-center ">
          <SemiBold>Crypro Taxes</SemiBold>
          <SemiBold>Free Tools</SemiBold>
          <SemiBold>Resource Center</SemiBold>
        </div>
        <div className="w-[136px] h-[70px] gap-[6px]  my-[5px]  ml-[45px] flex items-center ">
          <Button
            gradientFrom="#2870EA"
            gradientTo="#1B4AEF"
            textColor="#FFFFFF"
            fontSize="16px"
            fontWeight="600"
            width="136px"
            height="40px"
            lineheight={"19.36px"}
            gap={"8px"}
            padding={"8px"}
          >
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavText;
