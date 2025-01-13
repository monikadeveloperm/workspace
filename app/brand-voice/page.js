"use client";
import Link from "next/link";
import { FaRedoAlt } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className="bg-white p-5 rounded-lg">
        <div className="mb-4">
          <h2 className="text-3xl font-semibold">Brand Voice</h2>
        </div>
        <div>
          <label>Content</label>
          <textarea
            name=""
            id=""
            placeholder="create new brand voice"
            className="w-full outline-none border rounded-md p-5"
            rows={4}
          ></textarea>
        </div>

        <div className="flex justify-end py-3">
          <Link
            href={"/dashboard/form-submission"}
            className="bg-gradient-to-r from-indigo-600 to-purple-800 hover:from-indigo-700 hover:to-purple-950 duration-200 py-2 px-3 rounded-lg text-white flex items-center justify-center"
          >
            Save
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
