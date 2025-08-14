import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/static/project";

export default function Project() {
  return (
    <div className="py-12 px-6 lg:pl-54 lg:pr-36 lg:py-24" id="portfolio">
      <h2 className="bg-gradient-to-r from-gray-100 border-b-4 border-blue-400 py-4 via-blue-200 to-indigo-400 inline-block text-transparent bg-clip-text text-2xl lg:text-4xl font-semibold">
        Projects
      </h2>
      <div className="flex flex-wrap py-6 lg:gap-y-8 gap-8 lg:gap-0 lg:py-12 justify-between">
        {projects?.map((project, index) => (
          <Link
            key={index}
            href={`${project.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full cursor-pointer hover:bg-slate-700 rounded-lg bg-[#333]  shadow-lg lg:w-[31%]"
          >
            <div className="flex justify-between p-4 ">
              <h3 className="font-semibold text-xl">{project.name}</h3>
              <Image
                src="/icons/link.svg"
                alt="jimpitan"
                width="24"
                height="24"
              />
            </div>
            <Image
              src={`/${project.asset}`}
              alt="jimpitan"
              width="450"
              height="450"
              className="w-full h-[175px] rounded-b-lg lg:h-[255px] object-cover"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
