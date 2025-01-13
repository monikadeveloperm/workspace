"use client";
import { useState } from "react";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/topnav/TopNav";

const noto = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "500", "700", "900"],
});

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <body className={`${noto.variable} antialiased`}>
        <div>
          {" "}
          <TopNav />{" "}
        </div>
        <div className="flex">
          <Sidebar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            toggleSidebar={toggleSidebar}
          />
          <main
            className={`bg-gray-100 flex-1 p-6 transition-all duration-300 ${
              isOpen ? "" : "ml-22"
            }`}
          >
            {" "}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
