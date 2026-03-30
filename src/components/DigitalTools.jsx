import React, { use, useState } from "react";
import DigitalToolsCard from "./DigitalToolsCard";

const DigitalTools = ({ productsPromise }) => {
  const products = use(productsPromise);
  console.log(products);
  
  return (
    <div className="space-y-10">
      <div>
        <div className="text-center">
          <h2 className="font-bold text-3xl">Premium Digital Tools</h2>
          <p>
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>
        <div>
          {/* name of each tab group should be unique */}
          <div className="tabs tabs-box justify-center my-5  ">
            <input
              type="radio"
              name="my_tabs_1"
              className="tab"
              defaultChecked
              aria-label="Products"
            />
            <input
              type="radio"
              name="my_tabs_1"
              className="tab"
              aria-label="Cart"
              
            />
          </div>
        </div>
      </div>

      <div className=" max-w-[70%] mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <DigitalToolsCard product = {product}></DigitalToolsCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalTools;
