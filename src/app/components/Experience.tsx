import React from "react";
import Image from "../../../node_modules/next/image";
import { experiences } from "../lib/static/experience";

const Experience = () => {
  return (
    <div className="py-12 lg:py-24 px-6 lg:px-54" id="experience">
      <h2 className="bg-gradient-to-r from-gray-100 border-b-4 border-blue-400 py-4 via-blue-200 to-indigo-400 inline-block text-transparent py-6 bg-clip-text text-2xl lg:text-4xl font-semibold">
        Experience
      </h2>
      <div className="w-full flex py-0 lg:py-12 flex-wrap">
        <div
          className="mt-12 w-full pr-0 mb-8 lg:mb-0 lg:pr-8 lg:w-1/2 lg:mt-0
        "
        >
          {experiences?.map((experience) => (
            <div
              key={experience.id}
              className="px-4 py-2 border-l-3 border-blue-200 lg:px-6 lg:py-4 mb-4  bg-gradient-to-tl from-[#333] via-black to-slate-800 rounded-lg bg-black w-full"
            >
              <div className="flex flex-col my-4 lg:flex-row">
                <Image
                  src={`/icons/person.svg`}
                  alt="jimpitan"
                  width="32"
                  height="32"
                />
                <div className="pl-0 lg:pl-8 ">
                  <p className="text-blue-400">{experience.year}</p>
                  <h2 className="text-xl lg:text-2xl my-2 font-semibold">
                    {experience.title}
                  </h2>
                  <h4 className="text-base lg:text-lg">{experience.comapny}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex border-l-2 border-slate-500 pl-6 items-center lg:w-1/2">
          <div>
            <h1 className="text-4xl lg:text-[58px] font-bold ">
              Ikhdan <span className="text-blue-400">Experience</span>
            </h1>
            <p className="text-base lg:text-xl leading-relaxed py-4">
              Gained hands-on experience through two internships in the IT
              field, starting as an IT Instructor Intern teaching the
              fundamentals of web development (HTML, CSS, JavaScript) in an
              engaging and practical way. Currently working as a Fullstack
              Developer Intern, building end-to-end web applications using
              Next.js, Tailwind CSS, Laravel, and MySQL, from crafting user
              interfaces to managing databases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
