"use client";
import Link from "next/link";
import { FaRedoAlt } from "react-icons/fa";

const page = () => {
  const dummyData = [
    {
      id: 1,
      name: "John Doe",
      status: "Idle",
      createdAt: "January 1, 2023",
    },
    {
      id: 2,
      name: "JP Tucker",
      status: "Away",
      createdAt: "January 1, 2023",
    },
    {
      id: 3,
      name: "Jane Doe",
      status: "Online",
      createdAt: "January 1, 2023",
    },
    {
      id: 4,
      name: "Johny Doe",
      status: "Idle",
      createdAt: "January 1, 2023",
    },
    {
      id: 5,
      name: "Richard alpret",
      status: "Idle",
      createdAt: "January 1, 2023",
    },
  ];
  return (
    <>
      <div className="bg-white p-5 rounded-lg">
        <div>
          <h2 className="text-3xl font-semibold">Enhancements</h2>
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
            <thead className="bg-[#F6F8FA]">
              <tr>
                <th className="p-3">Name</th>
                <th>Status </th>
                <th>Created At </th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((data) => (
                <tr key={data.id} className="border-b">
                  <td className="p-3">{data.name}</td>
                  <td className="p-3">{data.status}</td>
                  <td className="p-3">{data.createdAt}</td>
                </tr>
              ))}
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
  );
};

export default page;
