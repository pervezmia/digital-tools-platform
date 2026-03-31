import React, { use, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import SubscriptionPriCard from "./SubscriptionPriCard";

const SubscriptionCard = ({ pricePromise }) => {
  const priceInfos = use(pricePromise);
  

  return (
    <div className="py-30">
      <div className="lg:max-w-[60%] mx-auto text-center mb-20 space-y-5">
        <h2 className="text-4xl font-bold">Simple, Transparent Pricing</h2>
        <p className="text-xs">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="lg:max-w-[50%] p-10 mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {priceInfos.map((info) => (
          <SubscriptionPriCard key={info.id} info = {info}></SubscriptionPriCard>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionCard;
