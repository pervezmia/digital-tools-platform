import React from "react";
import user from "../assets/user.png";
import packaged from "../assets/package.png";
import rocket from "../assets/rocket.png";

const Steps = () => {
  return (
    <div className="bg-[#F9FAFC] py-20">
      <div className="lg:max-w-[60%] mx-auto text-center mb-20 space-y-5">
        <h2 className="text-4xl font-bold">Get Started in 3 Steps</h2>
        <p className="text-xs">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="lg:max-w-[50%] mx-auto  grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
        <div className="space-y-10 card shadow p-5">
          <div className="flex items-center justify-end">
            <button className="btn rounded-full bg-linear-to-bl from-violet-500 to-fuchsia-500">01</button>
          </div>
          <div className="flex flex-col  items-center justify-center space-y-10">
            <div className="flex items-center justify-center w-20 h-20 bg-[#9514FA]/30 p-5 rounded-full">
              <img src={user} alt="" />
            </div>
            <div className="text-center space-y-3">
              <h3 className="font-semibold text-xl">Create Account</h3>
              <p className="text-xs ">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-10 card shadow p-5">
          <div className="flex items-center justify-end">
            <button className="btn rounded-full bg-linear-to-bl from-violet-500 to-fuchsia-500">02</button>
          </div>
          <div className="flex flex-col  items-center justify-center space-y-10">
            <div className="flex items-center justify-center w-20 h-20 bg-[#9514FA]/30 p-5 rounded-full">
              <img src={packaged} alt="" />
            </div>
            <div className="text-center space-y-3">
              <h3 className="font-semibold text-xl">Create Account</h3>
              <p className="text-xs ">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-10 card shadow p-5">
          <div className="flex items-center justify-end">
            <button className="btn rounded-full bg-linear-to-bl from-violet-500 to-fuchsia-500">03</button>
          </div>
          <div className="flex flex-col  items-center justify-center space-y-10">
            <div className="flex items-center justify-center w-20 h-20 bg-[#9514FA]/30 p-5 rounded-full">
              <img src={rocket} alt="" />
            </div>
            <div className="text-center space-y-3">
              <h3 className="font-semibold text-xl">Create Account</h3>
              <p className="text-xs ">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
