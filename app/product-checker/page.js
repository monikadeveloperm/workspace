import React from "react";
import { FaMagic } from "react-icons/fa";

const page = () => {
  return (
    <div className="p-4 bg-white rounded-md">
      <div className="flex mx-auto">
        <input
          placeholder="Enter Product URL"
          className="w-full p-3 border rounded-md mr-3 outline-none"
        />
        <button className="bg-gradient-to-r from-indigo-600 to-purple-800 hover:from-indigo-700 hover:to-purple-950 duration-200 py-2 px-3 md:px-8 rounded-lg text-white flex items-center justify-center">
          Check
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-6 rounded-md">
        <div className="mt-8">
          <h2 className="font-semibold text-2xl">Current details</h2>
          <div className="p-5 mt-5 border bg-gray-50 rounded-md">
            <h3 className="text-xl font-semibold">Product Image</h3>
          </div>
          <div className=" p-5 mt-5 border bg-gray-50 rounded-md">
            <h3 className="text-xl font-semibold">Title</h3>
            <p>N/A</p>
          </div>
          <div className=" p-5 mt-5 border bg-gray-50 rounded-md">
            <h3 className="text-xl font-semibold">Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              praesentium laudantium hic corporis, repellendus ducimus dolore
              ipsam at obcaecati repudiandae odio aut nulla voluptates ad
              incidunt! Delectus, consequatur placeat cupiditate culpa impedit
              officia quos maxime architecto soluta sed distinctio
              necessitatibus quam corporis beatae. Delectus voluptatum obcaecati
              perspiciatis dignissimos, commodi neque facilis ratione ducimus
              amet sint sit ex accusantium deserunt debitis, quos quisquam iure
              cum omnis sed cupiditate at qui a. Enim numquam illo voluptatibus
              corporis, esse provident consequatur aut molestiae dolorum
              voluptates minima quidem iusto voluptatum in illum aperiam libero
              nam ipsam iure id architecto cum quod alias! Animi, officiis.
            </p>
          </div>
          <div className=" p-5 mt-5 border bg-gray-50 rounded-md">
            <h3 className="text-xl font-semibold">SEO Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              praesentium laudantium hic corporis, repellendus ducimus dolore
              ipsam at obcaecati repudiandae odio aut nulla voluptates ad
              incidunt! Delectus, consequatur placeat cupiditate culpa impedit
              officia quos maxime architecto soluta sed distinctio
              necessitatibus quam corporis beatae.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="font-semibold text-2xl flex items-center">
            <span>Enhanced details</span> <FaMagic size={20} className="ml-2" />
          </h2>

          <div className=" p-5 mt-5 border bg-gray-50 rounded-md">
            <h3 className="text-xl font-semibold">Title</h3>
            <p>
              "Crystal Kayak Essentials" remains unchanged in Australian English
              spelling as the terminology and spelling are consistent with both
              American and Australian English.
            </p>
          </div>
          <div className=" p-5 mt-5 border bg-gray-50 rounded-md">
            <h3 className="text-xl font-semibold">Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              praesentium laudantium hic corporis, repellendus ducimus dolore
              ipsam at obcaecati repudiandae odio aut nulla voluptates ad
              incidunt! Delectus, consequatur placeat cupiditate culpa impedit
              officia quos maxime architecto soluta sed distinctio
              necessitatibus quam corporis beatae. Delectus voluptatum obcaecati
              perspiciatis dignissimos, commodi neque facilis ratione ducimus
              amet sint sit ex accusantium deserunt debitis, quos quisquam iure
              cum omnis sed cupiditate at qui a. Enim numquam illo voluptatibus
              corporis, esse provident consequatur aut molestiae dolorum
              voluptates minima quidem iusto voluptatum in illum aperiam libero
              nam ipsam iure id architecto cum quod alias! Animi, officiis.
            </p>
          </div>
          <div className=" p-5 mt-5 border bg-gray-50 rounded-md">
            <h3 className="text-xl font-semibold">SEO Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              praesentium laudantium hic corporis, repellendus ducimus dolore
              ipsam at obcaecati repudiandae odio aut nulla voluptates ad
              incidunt! Delectus, consequatur placeat cupiditate culpa impedit
              officia quos maxime architecto soluta sed distinctio
              necessitatibus quam corporis beatae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
