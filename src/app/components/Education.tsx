"use client";
import React from "react";
import Image from "../../../node_modules/next/image";
import { educations } from "../lib/static/education";
import TabList from "./TabList";

const Education = () => {
  const [course, setCourse] = React.useState([]);
  const [selectTab, setSelectTab] = React.useState("Peradaban University");
  function handleTabList(name: string) {
    const educated = educations?.filter(
      (education) => education.company == name
    );
    setCourse(educated);
  }
  React.useEffect(() => {
    handleTabList(selectTab);
  }, [selectTab]);
  return (
    <div className="py-12 px-6 lg:px-54 lg:py-24" id="educations">
      <h2 className="bg-gradient-to-r from-gray-100 border-b-4 border-blue-400 py-4 via-blue-200 to-indigo-400 inline-block text-transparent py-6 bg-clip-text text-2xl lg:text-4xl font-semibold">
        Education
      </h2>
      <TabList handleTab={setSelectTab} selectTab={selectTab} />
      <div className="w-full flex py-0 lg:py-12 flex-wrap">
        <div className="w-full order-2 lg:order-1 flex items-center lg:w-1/2">
          <div>
            <h1 className="text-2xl lg:text-[42px] font-bold ">
              <span className="text-blue-400">{course[0]?.title}</span>
            </h1>
            <h3 className="text-xl my-4 lg:text-[32px] font-bold ">
              <span className="text-gray-400">{course[0]?.company}</span>
            </h3>
            <p className="text-sm bg-purple-500 p-2 my-4 rounded-lg w-fit lg:text-lg leading-relaxed">
              {course[0]?.duration}
            </p>
            {/* <p className="text-base lg:text-xl leading-relaxed py-4">
              {course[0]?.short_desc}
            </p> */}
            <ul>
              {course[0]?.tasks.map((task, index) => (
                <li className="my-2 text-sm lg:text-lg" key={index}>
                  - {task}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="w-full my-4 order-1 lg:order-2 flex lg:justify-end lg:w-1/2
        "
        >
          <Image
            src={`/${course[0]?.image}`}
            width={600} // default untuk mobile
            height={600}
            className="lg:w-[450px] md:h-[450px] w-full h-auto object-cover rounded-xl"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
