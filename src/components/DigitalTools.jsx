import React, { use, useState } from "react";

const DigitalTools = ({ productsPromise }) => {
  const products = use(productsPromise);
  console.log(products);
  const [isBuy, setIsBuy] = useState(false)
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
            <div className="p-6 rounded-xl border border-gray-400 space-y-4">
              <div className="flex items-center justify-between">
                <img
                  className="w-10 h-10 object-contain"
                  src={product.icon}
                  alt={product.name}
                />
                <p>{product.tagType}</p>
              </div>
              <div>
                <h3 className="font-bold text-2xl">{product.name}</h3>
                <p className="text-gray-600"> {product.description} </p>
              </div>
              <div className="flex items-center">
                <p className="font-bold text-2xl ">${product.price}</p>/
                {product.period}
              </div>
              <div>
                <p>{product.period}</p>
              </div>
              <button onClick={() => setIsBuy(true)} className="btn w-full rounded-full bg-[#9514FA] text-white font-semibold">
                {isBuy? "Added to Cart" : "Buy Now" }
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalTools;
