import React from "react";
import Image from "../../../node_modules/next/image";
import { skills } from "../lib/static/skils";

const Skills = () => {
  return (
    <div
      className="py-12 px-6 text-center lg:pl-54 lg:pr-36 lg:py-24"
      id="experience"
    >
      <h2 className="bg-gradient-to-r from-gray-100 border-b-4 border-blue-400 py-4  via-blue-200 to-indigo-400 inline-block text-transparent py-6 bg-clip-text text-2xl lg:text-4xl font-semibold">
        Skills
      </h2>
      <div className="flex justify-between flex-wrap">
        {skills?.map((skill) => (
          <div
            key={skill.id}
            className="w-full text-center bg-gradient-to-tl from-[#333] via-black to-slate-800  lg:w-[49.5%] my-2 lg:my-10 rounded py-4"
          >
            <h3 className="text-xl lg:text-2xl font-semibold mb-6">
              {skill.title}
            </h3>
            <div className="flex flex-wrap justify-center  space-y-2 space-x-4 lg:space-y-0">
              {skill.icon.map((icon, index) => (
                <div
                  key={index}
                  className="flex space-x-2 items-center border-2 border-purple-500 text-xl font-semibold px-4 py-2 rounded"
                >
                  <Image
                    src={`/icons/${icon}`}
                    width={40}
                    height={40}
                    alt="tiktok"
                  />
                  {/* <p>Tiktok</p> */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
