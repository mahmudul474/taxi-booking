import { format } from "date-fns";
import React, { useContext } from "react";
import DataContext from "../../../Datacontext/Datas";

const JusnyDettaills = () => {
  
  const {data}=useContext(DataContext)






  return (
    <div className="p-3 text-left capitalize">
      <h1 className="text-xl font-bold">From: {data.origin  ? data.origin :""}</h1>
      <h1 className="text-xl font-bold">To: {data.destination?data.destination :"" }</h1>

      <h1 className="text-xl font-bold">
        DATE OF JOURNEY: {data.startdate? data.startdate :"" }
      </h1>
{
data.returndate ?   <h1 className="text-xl font-bold"> Returen Date: {data.returndate }</h1> :"singel"
}
    
    </div>
  );
};

export default JusnyDettaills;
