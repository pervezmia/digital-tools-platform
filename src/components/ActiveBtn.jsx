import React from "react";

const ActiveBtn = ({ isActive, setIsActive, cartContainer }) => {
  return (
    <div>
      <div className="text-center">
        <h2 className="font-bold text-3xl">Premium Digital Tools</h2>
        <p>
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>
      <div className="flex justify-center my-6  ">
        <button
          onClick={() => setIsActive("products")}
          className={`btn rounded-r-none w-30 rounded-full   ${isActive === "products" ? "bg-[#9514FA] text-white" : ""}`}
        >
          Products
        </button>
        <button
          onClick={() => setIsActive("carts")}
          className={`btn w-30 rounded-full rounded-l-none ${isActive === "carts" ? "bg-[#9514FA] text-white" : ""}`}
        >
          Carts ({cartContainer.length})
        </button>
      </div>
    </div>
  );
};

export default ActiveBtn;
