import React, { useState } from 'react';


const DigitalToolsCard = ({product}) => {
    const [isBuy, setIsBuy] = useState(false)
    
    return (
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
    );
};

export default DigitalToolsCard;