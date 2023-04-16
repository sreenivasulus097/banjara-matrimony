import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import SignUp from "./SignUp";

interface Props {
  children: any;
  pageTitle: string;
}

const Layout = (props: Props) => {
  return (
    <div>
      <Header title={props.pageTitle} />
      <main className=" min-h-screen  dark:text-white max-w-[1500px] mx-auto  bg-gradient-to-r from-[#edb473] to-[#fbd8b0] text-black dark:bg-none dark:bg-darkBgColor">
        <Navbar />
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
