import React from "react";
import { FaEnvelope } from "react-icons/fa";

const generateReport = () => {
  return (
    <div className="border rounded-2xl bg-white p-5">
      <h2 className="text-2xl font-semibold py-3 border-b mb-5">
        Generate Report
      </h2>
      <p className="mb-2 py-1 text-lg">
        <strong>Client Name :</strong>
        <span> John Smith</span>
      </p>
      <p className="mb-2 py-1 text-lg">
        <strong>Email :</strong>
        <span> john.smith@gmail.com</span>
      </p>
      <p className="mb-2 py-1 text-lg">
        <strong>Phone name :</strong>
        <span> (225) 555-0118</span>
      </p>
      <div className="mt-5">
        <div>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <div></div>
      </div>
      <div className="">
        <table class="table-auto md:w-full text-left text-md my-8">
          <thead className="bg-[#F6F8FA] rounded-md text-gray-600 font-normal">
            <tr>
              <th className="p-3">Report ID</th>
              <th>Client Name</th>
              <th>Website URL</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            <tr className="border-b">
              <td className="p-3">#123456</td>
              <td>John Deol</td>
              <td>http://www.faxquote.com</td>
              <td>20/12/2024</td>
            </tr>
          </tbody>
        </table>
        <button className="bg-gradient-to-r from-indigo-600 to-purple-800 hover:from-indigo-700 hover:to-purple-900 py-3 px-5 ml-auto rounded-lg text-white flex items-center mt-5">
          <FaEnvelope size={20} className="mr-2" />
          <span>Send Email to customer</span>
        </button>
      </div>
    </div>
  );
};

export default generateReport;
