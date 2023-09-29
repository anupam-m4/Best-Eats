import React from "react";
import food2 from "../assets/food2.avif";
import food3 from "../assets/food3.avif";
import food4 from "../assets/food4.avif";

const HeadlineCard = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-5">
      {/* card  */}
      <div className=" rounded-xl relative ">
        {/* overlay  */}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="text-2xl font-bold px-2 pt-4">Quality Foods </p>
          <p className="px-2 pt-2"> Quality Assured</p>
          <button className="border-white bg-white text-black  mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={food2}
          alt=""
        />
      </div>

      <div className=" rounded-xl relative ">
        {/* overlay  */}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="text-2xl font-bold px-2 pt-4">New Restaurant</p>
          <p className="px-2 pt-2"> Tasty Treats</p>
          <button className="border-white bg-white text-black  mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={food3}
          alt=""
        />
      </div>

      <div className=" rounded-xl relative ">
        {/* overlay  */}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="text-2xl font-bold px-2 pt-4">Nonveg Saga </p>
          <p className="px-2 pt-2"> Added Daily</p>
          <button className="border-white bg-white text-black  mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={food4}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeadlineCard;
