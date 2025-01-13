"use client";
import { useState } from "react";
import Link from "next/link";
import DropdownWithModal from "./dropdown";
import { FaBars } from "react-icons/fa";
import TopNavRight from "./TopNavRight";

const TopNav = () => {
  // const [isTopNavDropdownOpen, setIsTopNavDropdownOpen] = useState(false);

  return (
    <div className="bg-white py-2 px-5 md:px-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link
            href={"/feeds"}
            className="text-xl font-semibold text-white ml-10 hidden md:flex"
          >
            <img src="/optidan-logo.svg" alt="" className="w-44" />
          </Link>
          {/* <div className="ml-24 mr-5">
            <span className="bg-gray-100 hover:bg-purple-500 text-gray-400 hover:text-white flex rounded-lg cursor-pointer p-2 border duration-200">
              <FaBars size={24} className="" />
            </span>
          </div> */}
          <div className="ml-20 md:ml-24 ">
            <DropdownWithModal />
          </div>
        </div>

        <div>
          <TopNavRight />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
