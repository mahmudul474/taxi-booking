import React from "react";
import { Link } from "react-router-dom";


  const deledata=()=>{
  localStorage.clear();
  }

const num=Math.random();
const Thaks = () => {
  return (
    <>
    <div className="w-full m-auto text-center  ">
      <h1 className="text-2xl">Youre order Succesfylly done </h1>
      <h2 className=" text-center">order id <span className="text-green-950 text-3xl ">{num}</span></h2>
   
   
   <div className="flex justify-end mt-12">
  <Link to="/">
 <button onClick={deledata}  className="btn bg-green-950">Back To Home </button></Link>
</div>
   
   
    </div>



    </>
  );
};

export default Thaks;
