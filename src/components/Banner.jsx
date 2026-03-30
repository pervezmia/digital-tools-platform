import React from "react";
import bannerImg from "../assets/products/banner.png";
import playVideo from "../assets/Play.png";
import { CgRadioChecked } from "react-icons/cg";

const Banner = () => {
  return (
    
      <div className=" md:flex md:justify-between md:items-center md:max-w-[79%] mx-auto my-10 gap-4">
        <div className="card bg-base-100 w-96 ">
          <div className="ml-5  badge bg-[#E1E7FF] text-[#4F39F6]">
            <CgRadioChecked />
            New: AI-Powered Tools Available
          </div>
          <div className="card-body">
            <h2 className="card-title text-[4rem] font-bold">
              Supercharge Your Digital Workflow
            </h2>
            <p>
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="card-actions justify-start mt-2">
              <div className="badge badge-outline bg-[#9514FA] text-white">Explore Products</div>
              <div className="badge badge-outline border border-[#9514FA] text-[#9514FA]">
                {" "}
                <img  src={playVideo} alt="" /> Watch Demo
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <img src={bannerImg} alt="" />
        </div>
      </div>
    
  );
};

export default Banner;
