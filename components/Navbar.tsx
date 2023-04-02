import React from "react";
import SignIn from "./SignIn";
import ForgotPassword from "./ForgotPassword";
import NavItems from "./NavItems";

//type Props = {};

const Navbar = () => {
  return (
    <div className="container mx-auto p-2 pb-0 self-center flex">
      <div className="flex w-[30%] bg-red-100 items-center justify-center">
        Banjara Matrimony
      </div>
      <div className="flex w-[70%] bg-green-100 pl-5 text-sm">
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
