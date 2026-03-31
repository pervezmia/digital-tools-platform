import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

const Nav = ({ cartContainer }) => {
  const [isLogin, setIsLogin] = useState("start");

  const loginHandle = () => {
        setIsLogin("login")
  }
  const startHandle = () => {
    setIsLogin("start")
  }
  return (
    <div className=" bg-base-100 shadow-sm ">
      <div className="md:max-w-[80%] mx-auto navbar">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">DigiTools</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <div className="relative">
            <FaCartShopping />
            <p className="absolute text-red-500 font-bold -top-4 left-2">
              {cartContainer.length}
            </p>
          </div>

          <div className="tabs tabs-box">
            <input
              onClick={loginHandle}
              type="radio"
              name="my_tabs_1"
              className={`tab rounded-full ${isLogin === "login" ? "bg-violet-600 text-white" : ""}`}
              aria-label="Login"
            />
            <input
              onClick={startHandle}
              type="radio"
              name="my_tabs_1"
              className={`tab rounded-full ${isLogin === "start" ? "bg-violet-600 text-white" : ""}`}
              aria-label="Get Started"
              defaultChecked
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
