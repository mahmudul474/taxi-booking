import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/RightSidebar/Sidebar";

const Main = () => {
 

  return (
    <div className="flex flex-col justify-center lg:flex-row-reverse">

      <div className="p-6">
        <Sidebar></Sidebar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
