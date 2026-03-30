import React from "react";

const Stat = () => {
  return (
    <div className="stats shadow rounded-none w-full bg-linear-65 from-purple-500 to-[#9514FA] mb-12">
      <div className="stat place-items-center">
        <div className="stat-value text-white">50K+</div>
        <div className="stat-title text-white">Active Users</div>
      </div>

      <div className="stat place-items-center ">
        <div className="stat-value text-white">200+</div>
        <div className="stat-title text-white">Premium Tools</div>
      </div>

      <div className="stat place-items-center text-white">
        <div className="stat-value ">4.9</div>
        <div className="stat-title text-white">Rating</div>
        
      </div>
    </div>
  );
};

export default Stat;
