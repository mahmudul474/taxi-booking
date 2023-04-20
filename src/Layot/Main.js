import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  const navitem = (
    <>
      <li>
        <span>1</span> place info
      </li>
      <li>
        {" "}
        <span>2</span> chose car
      </li>
    </>
  );

  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
