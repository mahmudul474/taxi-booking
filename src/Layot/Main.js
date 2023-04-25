import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/RightSidebar/Sidebar";

const Main = () => {
 

  return (
    
    <div className=" border  h-screen">
    <div className="flex flex-col-reverse md:flex-col-reverse  bg-slate-50 rounded-lg rounded border-black border  m-32 justify-center lg:flex-row-reverse">

      <div className="p-6">
        <Sidebar></Sidebar>
      </div>
      <Outlet></Outlet>
    </div>
    </div>
  );
};

export default Main;
