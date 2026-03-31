import React from "react";
import { toast } from "react-toastify";

const Cart = ({ cartContainer, setCartContainer }) => {
  console.log(cartContainer.length);
  const total = cartContainer.reduce((sum, item) => sum + item.price,0)
  console.log(total);
  const hadleProcceed = () => {
    setCartContainer([]);
    toast.success("Payment done successfully !")
  }

  const deleteHandle = (data) => {
    {
      const filterArray = cartContainer.filter(
        (deleteItem) => deleteItem.id !== data.id
      );
      setCartContainer(filterArray);
      toast.warning("delete successfully !")
    }
  };
  return (
    <div className="mb-2 border-2 border-gray-300 max-w-[70%] mx-auto rounded-2xl p-5 space-y-4.5">
      {cartContainer.length === 0 ? (
        <div>
          <div className="flex items-center justify-center p-12 bg-gray-300 rounded-2xl">
            <h2 className="font-bold text-2xl text-red-500">
              Cart is Empty <br /> Go to Products tab <br /> add needed products
            </h2>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-4">
            {cartContainer.map((data) => (
              <div className="flex justify-between items-center border p-5 rounded-2xl bg-gray-200">
                <div className="flex items-center gap-5">
                  <img
                    className="w-7 h-7 object-contain"
                    src={data.icon}
                    alt={data.name}
                  />
                  <div>
                    <h3 className="font-semibold md:text-xl">{data.name}</h3>
                    <h4>${data.price}</h4>
                  </div>
                </div>
                <button
                  onClick={() => deleteHandle(data)}
                  className="btn btn-error"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <p>Total:</p>
            <h2 className="font-bold text-xl">${total.toFixed(2)}</h2>
          </div>
          <div className="flex items-center justify-center">
            <button onClick={hadleProcceed} className="btn bg-violet-500 rounded-full w-full">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
