import React from "react";

const Cart = ({ cartContainer, setCartContainer }) => {
  console.log(cartContainer);
  return (
    <div className="mb-5 ">
        {
            cartContainer.length === 0? <div className="flex items-center justify-center p-12 border-2 border-red-400 max-w-[70%] mx-auto rounded-2xl"><h2 className="font-bold text-2xl text-red-500">Cart is Empty <br /> Go to Products tab <br /> add needed products</h2></div>:<div className="max-w-[70%] mx-auto space-y-4">
        {cartContainer.map((data) => (
          <div className="flex justify-between items-center border p-5 rounded-2xl">
            <div className="flex items-center gap-5">
              <img
                className="w-7 h-7 object-contain"
                src={data.icon}
                alt={data.name}
              />
              <div>
                <h3 className="font-semibold text-xl">{data.name}</h3>
                <h4>${data.price}</h4>
              </div>
            </div>
            <button className="btn btn-warning">Remove</button>
          </div>
        ))}
      </div>
        }
      
    </div>
  );
};

export default Cart;
