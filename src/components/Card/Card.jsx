import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

const Card = (props) => {
  const {  title, img, price } = props.value;
  return (
    <div className="relative w-40 md:w-65 bg-zinc-200 rounded-xl shadow-md hover:shadow-xl hover:cursor-pointer transition-all duration-300 p-4">

    {/* Wishlist Icon */}
    <span className="absolute top-3 right-3 text-gray-400 hover:text-red-500 cursor-pointer">
      <FaHeart />
    </span>

    {/* Add Button */}
    <button className="absolute top-3 left-3 bg-amber-500 text-white p-1 text-sm md:text-lg md:p-2 rounded-full hover:scale-110 transition">
      <FaPlus />
    </button>

    {/* Image */}
    <div className="flex justify-center mb-3">
      <img
        className="h-22 md:h-32 object-contain"
        src={img}
        alt={title}
      />
    </div>

    {/* Content */}
    <div className="text-center space-y-0.5 md:space-y-2">
      <h4 className="text-md md:text-lg font-semibold">{title}</h4>
      <p className="text-amber-500 font-bold">Rs {price}</p>

      <Button value={"Shop Now"} />
    </div>
  </div>
);
};
export default Card;
