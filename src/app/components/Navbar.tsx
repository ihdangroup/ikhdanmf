"use client";
import Image from "next/image";
import React from "react";
import Link from "../../../node_modules/next/link";
import { navlist } from "../lib/static/navlist";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const [slide, setSlide] = React.useState(false);
  const [access, setAccess] = React.useState(undefined);
  return (
    <div className="fixed px-6 lg:px-0 bg-black/80 h-auto w-full lg:w-auto lg:h-screen top-0 text-slate-800  left-0">
      <nav className="bg-transparent lg:bg-black/80 backdrop-filter-blur  h-auto lg:h-screen flex flex-wrap px-0 lg:px-4 py-2 lg:py-6 space-y-0 lg:space-y-8 lg:border-t-0  border-0 lg:border-t-4 lg:border-r-4 rounded-t-xl lg:rounded-r-xl  border-purple-700">
        <div className="flex w-full items-center justify-between lg:hidden">
          <h2 className="bg-gradient-to-r from-gray-100 via-blue-200 block lg:hidden to-indigo-400 inline-block text-transparent py-6 bg-clip-text text-2xl  font-semibold">
            Ikhdan Maghfuron
          </h2>
          <HamburgerMenu handleSlide={setSlide} slide={slide} />
        </div>
        <div
          className={`h-screen lg:h-auto lg:block space-y-6 ${
            slide ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-wrap lg:flex-col space-y-4">
            {navlist?.map((list) => (
              <Link
                href={`${list.path}`}
                onMouseEnter={() => setAccess(list.id)}
                onMouseLeave={() => setAccess(null)}
                onClick={() => setSlide(false)}
                key={list.id}
                className="flex cursor-pointer flex-raw lg:flex-col text-gray-200 w-full items-center space-y-0 lg:space-y-2"
              >
                <div className="bg-white p-2 border border-purple-700 rounded-full">
                  <Image
                    src={`/icons/${list.icon}`}
                    alt="jimpitan"
                    width="32"
                    height="32"
                  />
                </div>
                <li
                  className={`text-lg ml-4 lg:ml-0 ${
                    access == list.id ? "text-blue-400 font-semibold" : ""
                  }`}
                >
                  {list.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
