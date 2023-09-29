import React, { useState } from "react";
import { data } from "../data/data";

const Food = () => {
  const [foods, setfoods] = useState(data);

  //filter types (pizza,burgers.etc)

  const filterType = (category) => {
    setfoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //filter price

  const filterPrice = (price) => {
    setfoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 ">
      <h1 className="text-orange-600 font-bold text-4xl text-center ">
        Top Rated Menu Items
      </h1>
      {/* filter-row  */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter-type  */}
        <div>
          <p className="font-bold text-gray-700 ">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setfoods(data)}
              className="m-1 border-orange-600 text-orange-600   hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Chickens
            </button>
          </div>
        </div>
        {/* filter-price  */}
        <div className="">
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[510px]  w-full flex-wrap ">
            <button
              onClick={() => filterPrice("Rs.100")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Rs.100
            </button>
            <button
              onClick={() => filterPrice("Rs.200")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Rs.200
            </button>
            <button
              onClick={() => filterPrice("Rs.300")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Rs.300
            </button>
            <button
              onClick={() => filterPrice("Rs.500")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Rs.500
            </button>
            <button
              onClick={() => filterPrice("Rs.700")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Rs.700
            </button>
          </div>
        </div>
      </div>
      {/* display food  */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            className="border shadow-lg hover:scale-105 duration-300 rounded-lg "
            key={index}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between  px-2 py-4 max-sm:flex-col max-sm:gap-4 ">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
