import React, { use } from "react";
import DigitalToolsCard from "./DigitalToolsCard";

const DigitalTools = ({ productsPromise,}) => {
  const products = use(productsPromise);

  return (
    <>
      <div className="space-y-10">
        <div>
          
          
        </div>

        <div className=" max-w-[70%] mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 container">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <DigitalToolsCard product={product}></DigitalToolsCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DigitalTools;
