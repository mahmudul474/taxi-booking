import { format } from "date-fns";
import React, { useContext } from "react";
import DataContext from "../../../Datacontext/Datas";

const JusnyDettaills = ({distance}) => {


  
  const {setData,data}=useContext(DataContext)

   
 

  return (
    <div className="p-3 text-left capitalize">
      <h1 className="text-xl font-bold">From: {data  && data.origin }</h1>
      <h1 className="text-xl font-bold">To: {data && data.destination }</h1>

      <h1 className="text-xl font-bold">
        DATE OF JOURNEY: {data&& data.startdate }
      </h1>

   <h1 className="text-xl font-bold"> Returen Date: {data && data.returndate ? data.returndate  : "singel"}</h1> 

    
    </div>
  );
};

export default JusnyDettaills;
