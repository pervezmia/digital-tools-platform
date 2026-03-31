import React, { use } from "react";
import DigitalToolsCard from "./DigitalToolsCard";

const DigitalTools = ({ productsPromise, cartContainer, setCartContainer}) => {
  const products = use(productsPromise);

  return (
    <>
      <div className="space-y-10">
        <div>
          
          
        </div>

        <div className=" max-w-[60%] mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 container mb-5">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <DigitalToolsCard product={product} cartContainer = {cartContainer} setCartContainer = {setCartContainer}></DigitalToolsCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DigitalTools;
