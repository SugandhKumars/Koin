import React from "react";
import NavText from "../Components/NavText";
import logo from "../assets/KoinLogo.png";

function Navbar() {
  return (
    <>
      <div className=" bg-[#FFFFFF] w-[1440px] h-[80px] ml-[-0.15px] border-b-[1px] border-b-[#DEDEFE] shadow-navShadow flex">
        <div className="w-[96px] h-[72px] ml-[60px] my-[4px]   flex items-center">
          <img className="w-100% h-[24px] " src={logo} alt="" />
        </div>
        <NavText />
      </div>
    </>
  );
}

export default Navbar;
