import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa6';


const DigitalToolsCard = ({product, cartContainer, setCartContainer}) => {
    const [isBuy, setIsBuy] = useState(false)

    const handleBuy = () => {
        setIsBuy(true)
        setCartContainer([...cartContainer, product])
    }
    
    return (
        <div className="p-6 rounded-xl border border-gray-400 space-y-4">
              <div className="flex items-center justify-between">
                <img
                  className="w-10 h-10 object-contain"
                  src={product.icon}
                  alt={product.name}
                />
                {/* <p></p> */}
                <div className="badge bg-violet-300 font-semibold">{product.tagType}</div>
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
              <div>
                {
                  product.feature.map((item,index) => <div key={index} className='flex items-center gap-2'><span className='text-green-400'><FaCheck /></span><p>{item}</p></div>)
                }
              </div>
              <button onClick={handleBuy } className="btn w-full rounded-full bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white font-semibold">
                {isBuy? "Added to Cart" : "Buy Now" }
              </button>
            </div>
    );
};

export default DigitalToolsCard;