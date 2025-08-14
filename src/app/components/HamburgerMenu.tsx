import React from "react";

const HamburgerMenu = ({
  handleSlide,
  slide,
}: {
  handleSlide: (value: boolean) => void;
  slide: boolean;
}) => {
  return (
    <div
      onClick={() => handleSlide(!slide)}
      className="cursor-pointer w-[30px] h-[20px] flex flex-wrap justify-between flex-raw"
    >
      <span className="bg-white h-[2px] w-full"></span>
      <span className="bg-white h-[2px] w-full"></span>
      <span className="bg-white h-[2px] w-full"></span>
    </div>
  );
};

export default HamburgerMenu;
