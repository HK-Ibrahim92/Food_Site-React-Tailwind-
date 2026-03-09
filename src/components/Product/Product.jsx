import React, { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import productsList from "./productList";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Product = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood","Meat"];
  const [activeTab, setactiveTab] = useState("All");

  const filteredItem=activeTab ==="All"?
  productsList: productsList.filter(item=>item.category===activeTab)
 
  return (
    <section className="max-w-350 m-auto px-10 mt-16">
      <Heading highlight={"Our"} text={"Products"} />

      {/* Tabs */}

      <div className=" flex gap-3 justify-center">
        {categories.map((category) => {
          console.log(category == activeTab);
          return (
            <button
              key={category}
              onClick={() => setactiveTab(category)}
              className={`px-3 md:px-5 py-2 hover:cursor-pointer rounded-lg ${
                category === activeTab
                  ? "bg-amber-500 text-white"
                  : "bg-zinc-300"
              } `}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Card */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 justify-items-center">
  {filteredItem &&
    filteredItem.slice(0,8).map((item) => {
      return <Card key={item.id} value={item} />;
    })}
</div>
<div className="flex justify-center  mt-7">
    <Button value="View All"/>
</div>
    </section>
  );
};

export default Product;
