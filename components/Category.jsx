import React from "react";
import { categories } from "../data/data";

const Category = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl">
        Top Rated Menu Items
      </h1>
      {/* categories  */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-2">
        {categories.map((items, index) => (
          <div
            className="bg-gray-100 rounded-lg flex justify-between items-center p-2 max-sm:flex max-sm:flex-col"
            key={index}
          >
            <h2 className="font-bold sm:text-xl ">{items.name}</h2>
            <img className="w-20   " src={items.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
