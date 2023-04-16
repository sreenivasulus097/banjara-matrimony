import React from "react";
import SignIn from "./SignIn";
import ForgotPassword from "./ForgotPassword";
import NavItems from "./NavItems";
import Image from "next/image";
import SignUp from "./SignUp";

//type Props = {};

const Navbar = () => {
  return (
    <div className="container-xl p-2 pb-0 self-center flex flex-col md:flex-row">
      <div className="flex w-[80%] md:w-[35%]  items-center justify-center pl-5">
        <Image
          src="/images/banjara-logo.png"
          width="400"
          height="100"
          alt="Banjara Logo"
        />
      </div>
      <button className="md:hidden outline-none mobile-menu-button absolute ml-[90%] items-center">
        <svg
          className="w-6 h-6 text-gray-500"
          x-show="!showMenu"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <div className="flex w-full md:w-[65%]  pl-5 text-sm">
        <div className="flex flex-col w-full">
          <div className="flex">
            <SignIn />
          </div>
          <div className="flex mt-2">
            <ForgotPassword />
          </div>
          <div className="flex">
            <NavItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
