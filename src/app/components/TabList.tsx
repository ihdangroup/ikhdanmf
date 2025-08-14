import React from "react";

const TabList = ({
  handleTab,
  selectTab,
}: {
  handleTab: (value: string) => void;
  selectTab: string;
}) => {
  const companies = [
    {
      id: 1,
      name: "Peradaban University",
    },
    {
      id: 2,
      name: "Hacktiv8 Indonesia",
    },
    {
      id: 3,
      name: "Bangkit Academy",
    },
  ];
  return (
    <div className="my-8">
      <ul className="flex w-fit rounded-xl z-6 bg-white  items-center rounded-lg bg-slate-300 justify-center">
        {companies?.map((company) => (
          <li
            className={` font-semibold text-sm lg:text-xl p-4 bg-black ${
              selectTab == company.name ? "bg-blue-500" : ""
            } cursor-pointer`}
            onClick={() => handleTab(company.name)}
            key={company.id}
          >
            {company.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabList;
