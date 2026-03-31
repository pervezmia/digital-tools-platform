import React, { use } from "react";
import { FaCheck } from "react-icons/fa6";

const SubscriptionCard = ({ pricePromise }) => {
  const priceInfos = use(pricePromise);

  return (
    <div className="py-30">
      <div className="max-w-[60%] mx-auto text-center mb-20 space-y-5">
        <h2 className="text-4xl font-bold">Simple, Transparent Pricing</h2>
        <p className="text-xs">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="max-w-[50%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {priceInfos.map((info) => (
          <div key={info.id} className={`card   ${info.favorite? "bg-linear-to-bl from-violet-500 to-fuchsia-500": "bg-[#F2F2F2] text-black"} `}>
            <div className="card-body space-y-3.5 relative">
                <div className="flex justify-center items-center">
                    <p className="absolute -top-2 font-semibold text-white bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-full px-3 ">{info.favorite}</p>
                </div>
              <div>
                <h2 className="card-title">{info.name}</h2>
                <p>{info.description}</p>
              </div>
              <div className="flex items-center">
                <h3 className="font-bold text-xl">${info.price}</h3>/
                <p>month</p>
              </div>
              <div>
                {info.feature.map((item, index) => (
                  <div key={index}>
                    <p className="flex items-center gap-2">
                      <FaCheck /> {item}
                    </p>
                  </div>
                ))}
              </div>
              <div className="card-actions justify-center">
                <button className="btn w-full rounded-full">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionCard;
