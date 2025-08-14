import React from "react";

const Footer = () => {
  return (
    <div className="py-12 px-6 bg-black lg:px-54 flex flex-wrap lg:py-24">
      <div className="w-full my-6 lg:w-1/2">
        <h1 className="text-4xl lg:text-[42px] ">Ikhdan M</h1>
        <h3 className="text-xl text-blue-500 mt-2 lg:text-2xl">
          Fullstack Developer
        </h3>
      </div>
      <div className="w-full space-y-4 text-lg lg:w-1/2">
        <h2 className="text-2xl">List Menu</h2>
        <div className="space-y-4 text-blue-300 text-xl">
          <p>Profile</p>
          <p>Experience</p>
          <p>Portfolio</p>
          <p>Educations</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
