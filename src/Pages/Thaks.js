import React from "react";

const num=Math.random();
const Thaks = () => {
  return (
    <div className="w-full m-auto text-center  ">
      <h1 className="text-2xl">Youre order Succesfylly done </h1>
      <h2 className=" text-center">order id <span className="text-green-950 text-3xl ">{num}</span></h2>
    </div>
  );
};

export default Thaks;
