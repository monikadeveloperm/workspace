"use client";
import Link from "next/link";
import { useState } from "react";
import { FaRegBell } from "react-icons/fa";

const TopNavRight = () => {
  const [isTopNavDropdownOpen, setIsTopNavDropdownOpen] = useState(false);
  return (
    <div className="flex items-center">
      <div className="rounded-full h-14 w-14 bg-gray-400 flex items-center justify-center relative">
        <button
          className="w-full"
          onClick={() => setIsTopNavDropdownOpen(!isTopNavDropdownOpen)}
        >
          <img src="/dashboard-user-login.png" alt="" className="w-full" />
        </button>
        {isTopNavDropdownOpen && (
          <div className="absolute top-8 right-0 mt-4 w-48 bg-white text-black rounded shadow-lg duration-300">
            <h4 className="px-4 py-2 font-semibold">My Account</h4>
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="">Setting</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="">Support</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="" className="w-full text-left">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNavRight;
