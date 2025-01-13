"use client";
import Link from "next/link";

import { HiMiniDocumentMagnifyingGlass } from "react-icons/hi2";
import { TbBlocks, TbSpeakerphone, TbTemplate } from "react-icons/tb";

import { FaBars, FaMagic, FaRegFileAlt, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Sidebar = ({ isOpen, setIsOpen, toggleSidebar }) => {
  const [activeTab, setActiveTab] = useState("home"); // Default active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      className={`flex h-screen relative ${isOpen ? "" : "sidebar-collapsed"}`}
    >
      <div
        className={`bg-white text-gray-600  p-2 transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="w-10 h-10 bg-gray-200 hover:bg-purple-600 text-gray-500 hover:text-white flex rounded-lg cursor-pointer p-2 border duration-200 mb-4 text-center py-2 absolute -top-14 text-xl left-4"
        >
          {isOpen ? <FaBars /> : <FaTimes />}
        </button>

        <ul className="flex flex-col mt-10 md:pl-2 text-gray-600 font-semibold text-md">
          <li className="mb-4 border-b pb-3">
            <Link
              href={"/product-checker"}
              onClick={() => handleTabClick("product-checker")}
              className={`${
                activeTab == "product-checker" ? "text-purple-800" : ""
              } flex items-center hover:text-purple-800 duration-200`}
            >
              <HiMiniDocumentMagnifyingGlass size={22} className="mr-3" />
              <span className={` ${isOpen ? "flex" : "hidden"}`}>
                Product Checker
              </span>
            </Link>
          </li>
          <li className="mb-4 border-b pb-3">
            <Link
              href={"/feeds"}
              onClick={() => handleTabClick("feeds")}
              className={`${
                activeTab == "feeds" ? "text-purple-800" : ""
              } flex items-center hover:text-purple-800 duration-200`}
            >
              <FaRegFileAlt size={22} className="mr-3" />
              <span className={isOpen ? "flex" : "hidden"}>Feeds</span>
            </Link>
          </li>
          <li className="mb-4 border-b pb-3">
            <Link
              href={"/custom-template"}
              onClick={() => handleTabClick("custom-template")}
              className={`${
                activeTab == "custom-template" ? "text-purple-800" : ""
              } flex items-center hover:text-purple-800 duration-200`}
            >
              <TbTemplate size={22} className="mr-3" />
              <span className={isOpen ? "flex" : "hidden"}>
                Custom Templates
              </span>
            </Link>
          </li>
          <li className="mb-4 border-b pb-3">
            <Link
              href={"/enhancements"}
              onClick={() => handleTabClick("enhancements")}
              className={`${
                activeTab == "enhancements" ? "text-purple-800" : ""
              } flex items-center hover:text-purple-800 duration-200`}
            >
              <FaMagic size={18} className="mr-3" />
              <span className={isOpen ? "flex" : "hidden"}>Enhancements</span>
            </Link>
          </li>
          <li className="mb-4 border-b pb-3">
            <Link
              href={"/brand-voice"}
              onClick={() => handleTabClick("brand-voice")}
              className={`${
                activeTab == "brand-voice" ? "text-purple-800" : ""
              } flex items-center hover:text-purple-800 duration-200`}
            >
              <TbSpeakerphone size={22} className="mr-3" />
              <span className={isOpen ? "flex" : "hidden"}>Brand Voice</span>
            </Link>
          </li>
          <li className="mb-4 border-b pb-3">
            <Link
              href={"/integrations"}
              onClick={() => handleTabClick("integrations")}
              className={`${
                activeTab == "integrations" ? "text-purple-800" : ""
              } flex items-center hover:text-purple-800 duration-200`}
            >
              <TbBlocks size={22} className="mr-3" />
              <span className={isOpen ? "flex" : "hidden"}>Integrations</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
