import React from "react";
import SignIn from "./SignIn";
import ForgotPassword from "./ForgotPassword";
import NavItems from "./NavItems";
import Image from "next/image";

//type Props = {};

const Navbar = () => {
  return (
    <div className="container-xl p-2 pb-0 self-center flex">
      <div className="flex w-[35%]  items-center justify-center">
        <Image
          src="/images/banjara-logo.png"
          width="400"
          height="100"
          alt="Banjara Logo"
        />
      </div>
      <div className="flex w-[65%]  pl-5 text-sm">
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
