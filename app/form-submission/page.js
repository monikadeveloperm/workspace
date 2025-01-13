import React from "react";
import Pagination from "../components/Pagination";
import { TbReportSearch } from "react-icons/tb";

const page = () => {
  const userDetail = [
    {
      id: 1,
      uName: "John doe",
      email: "johndoe@mail.com",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      phone: "(225 555 0118)",
    },
    {
      id: 2,
      uName: "John doe",
      email: "johndoe@mail.com",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      phone: "(225 555 0118)",
    },
    {
      id: 3,
      uName: "John doe",
      email: "johndoe@mail.com",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      phone: "(225 555 0118)",
    },
    {
      id: 4,
      uName: "John doe",
      email: "johndoe@mail.com",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      phone: "(225 555 0118)",
    },
    {
      id: 5,
      uName: "John doe",
      email: "johndoe@mail.com",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      phone: "(225 555 0118)",
    },
    {
      id: 6,
      uName: "John doe",
      email: "johndoe@mail.com",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      phone: "(225 555 0118)",
    },
    {
      id: 7,
      uName: "John doe",
      email: "johndoe@mail.com",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      phone: "(225 555 0118)",
    },
    {
      id: 8,
      uName: "John doe",
      email: "johndoe@mail.com",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      phone: "(225 555 0118)",
    },
  ];

  return (
    <div className="rounded-lg bg-white border p-5">
      <div className="mb-4 flex justify-between mt-5 flex-row">
        <div className="md:w-[300px]">
          <h2 className="text-3xl font-semibold mb-5">Form Submission</h2>
        </div>
      </div>
      <div className="">
        <table class="table-auto md:w-full text-left text-md">
          <thead className="bg-[#F6F8FA] rounded-md text-gray-600 font-normal">
            <tr>
              <th className="p-3">Name</th>
              <th>Email</th>
              <th>Description</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            {userDetail.map(({ id, uName, detail, phone, email }) => (
              <tr key={id} className="border-b">
                <td className="p-3">{uName}</td>
                <td>{email}</td>
                <td>{detail}</td>
                <td>{phone}</td>
                <td>
                  <button className="bg-indigo-100 hover:bg-indigo-900 border border-indigo-800  duration-200 py-1 px-3 my-3 text-indigo-950 hover:text-white rounded-md flex items-center justify-center">
                    <TbReportSearch size={24} className="mr-2" />
                    <span>Generate Report</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default page;
