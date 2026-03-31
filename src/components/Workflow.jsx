import React from "react";

const Workflow = () => {
  return (
    <div className="bg-linear-to-l from-violet-400 to-violet-600 p-20 text-center">
      <div className="">
        <div className="w-[50%] mx-auto space-y-8">
        <div className="space-y-5">
          <h2 className="font-bold text-3xl">Ready to Transform Your Workflow?</h2>
          <p className="text-xs">
            Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
          </p>
        </div>
        <div className="space-y-5">
          <div className="flex justify-center items-center gap-2  md:gap-10">
            <button className="btn rounded-full">Explore Products</button>
            <button className="btn rounded-full">View Pricing</button>
          </div>
          <p className="text-xs">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Workflow;
