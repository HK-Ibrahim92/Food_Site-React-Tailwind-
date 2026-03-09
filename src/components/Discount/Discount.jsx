import React from "react";
import FruitsSetImage from "../../assets/fresh-fruits.png";
import Button from "../Button/Button";

const Discount = () => {
  return (
    <section  className="bg-zinc-200  mt-16 bg-right bg-contain bg-no-repeat py-2" style={{backgroundImage: `url(${FruitsSetImage})`}}>
        <div className="flex  items-center justify-start max-w-350 mx-auto pl-5 md:px-10 ">
      <span className="text-4xl md:text-9xl text-amber-600 font-bold transform -rotate-90 ">20% </span>
      <div className="max-w-60 md:max-w-170 ">
        <h2 className="text-3xl md:text-7xl text-zinc-800 font-bold">First Order Discount</h2>
        <p className="py-2 md:py-5 text-zinc-600 text-sm md:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ut
          nam iure a consectetur voluptatum laboriosam voluptates beatae
          sapiente iste.
        </p>
        <Button value={"Get a Discount"} />
      </div>
    
      </div>
    </section>
  );
};

export default Discount;
