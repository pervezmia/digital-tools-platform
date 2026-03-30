import React, { use } from "react";
import DigitalToolsCard from "./DigitalToolsCard";

const DigitalTools = ({ productsPromise, isActive, setIsActive}) => {
  const products = use(productsPromise);

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
          
          <div className="flex justify-center mt-6  ">
            <button onClick={() => setIsActive("products")} className={`btn rounded-r-none w-30 rounded-full   ${isActive === "products" ? "bg-[#9514FA] text-white" : ""}`}>Products</button>
            <button onClick={() => setIsActive("carts")} className={`btn w-30 rounded-full rounded-l-none ${isActive === "carts" ? "bg-[#9514FA] text-white": ""}`}>Carts</button>
          </div>
        </div>
      </div>

      <div className=" max-w-[70%] mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <DigitalToolsCard product={product}></DigitalToolsCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalTools;
