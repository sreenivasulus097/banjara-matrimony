import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";

interface Props {
  children: any;
  pageTitle: string;
}

const Layout = (props: Props) => {
  return (
    <div>
      <Header title={props.pageTitle} />
      <main className=" min-h-screen  dark:text-white max-w-[1500px] mx-auto  bg-gradient-to-r from-[#F6F9FF] to-[#FFFFFF] text-black dark:bg-none dark:bg-darkBgColor">
        <Navbar />
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
