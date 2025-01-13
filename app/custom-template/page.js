"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaRedoAlt } from "react-icons/fa";

const page = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [accordionStates, setAccordionStates] = useState({});

  const tabs = [
    {
      id: "tab1",
      name: "Product Templates",
      title: "Title",
      description: "Manage custom templates for title",
      accordions: [
        {
          id: "accordion1",
          name: "Accordion 1",
          content: "Content for Accordion 1",
        },
        {
          id: "accordion2",
          name: "Accordion 2",
          content: "Content for Accordion 2",
        },
      ],
    },
    {
      id: "tab2",
      name: "Collection Templates",
      title: "Description",
      description: "Manage custom templates for description",
      accordions: [
        {
          id: "accordion3",
          name: "Accordion 3",
          content: "Content for Accordion 3",
        },
      ],
    },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const toggleAccordion = (accordionId) => {
    setAccordionStates((prevStates) => ({
      ...prevStates,
      [accordionId]: !prevStates[accordionId],
    }));
  };

  return (
    <div className="p-4 bg-white rounded-lg">
      <div className="flex space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded ${
              activeTab === tab.id ? "bg-indigo-800 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div>
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="bg-gray-50 p-4 border rounded-md">
                {tab.accordions.map((accordion) => (
                  <div key={accordion.id} className="mb-4 rounded mt-6">
                    <h3 className="text-2xl font-semibold">{tab.title}</h3>
                    <p>{tab.description} </p>
                    <div
                      className="cursor-pointer flex justify-between items-center mt-5"
                      onClick={() => toggleAccordion(accordion.id)}
                    >
                      View Templates
                      <span>
                        {accordionStates[accordion.id] ? (
                          <FaAngleUp />
                        ) : (
                          <FaAngleDown />
                        )}
                      </span>
                    </div>
                    {accordionStates[accordion.id] && (
                      <>
                        <div className="bg-white p-5 rounded-lg mt-5">
                          <div>
                            <h2 className="text-3xl font-semibold">
                              Integrations
                            </h2>
                          </div>
                          <div className="mt-5 border-t pt-2">
                            <div className="flex justify-end py-3">
                              <div className="flex">
                                <Link
                                  href={"/dashboard/form-submission"}
                                  className="bg-gradient-to-r from-indigo-600 to-purple-800 hover:from-indigo-700 hover:to-purple-950 duration-200 py-2 px-2 rounded-lg text-white flex items-center justify-center w-10 mr-3"
                                >
                                  <FaRedoAlt />
                                </Link>
                                <Link
                                  href={"/dashboard/form-submission"}
                                  className="bg-gradient-to-r from-indigo-600 to-purple-800 hover:from-indigo-700 hover:to-purple-950 duration-200 py-2 px-3 rounded-lg text-white flex items-center justify-center"
                                >
                                  Import from file
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="flex">
                            <table className="w-full text-left border rounded-lg">
                              <thead className="bg-gray-200 ">
                                <tr>
                                  <th className="p-3">Shop</th>
                                  <th>Last synched at </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td colSpan={2} className="text-center p-3">
                                    <buttton className="bg-gradient-to-r from-indigo-600 to-purple-800 hover:from-indigo-700 hover:to-purple-950 duration-200 py-2 px-3 rounded-lg text-white flex items-center justify-center w-[100px] mx-auto">
                                      Add Shop
                                    </buttton>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="my-6">
                            <buttton className="py-2 px-3 bg-gray-200 hover:bg-gray-300 rounded-md mr-3 cursor-pointer">
                              Prev
                            </buttton>
                            <buttton className="py-2 px-3 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer">
                              Next
                            </buttton>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default page;
