import { format } from "date-fns";
import React, { useContext } from "react";
import DataContext from "../../../Datacontext/Datas";

const JusnyDettaills = ({distance}) => {


  
  const {setData,data, category, setCategory, userInfo, setUserInfo}=useContext(DataContext)

   console.log(typeof(distance))

 
 

  return (
    <div className="p-3 text-left capitalize ">
      <h1 className="text-xl font-bold">From: {data  && data.origin }</h1>
      <h1 className="text-xl font-bold">To: {data && data.destination }</h1>

      <h1 className="text-xl font-bold">
        DATE OF JOURNEY: {data&& data.startdate }
      </h1>

   <h1 className="text-xl font-bold"> Returen Date: {data && data.returndate ? data.returndate  : "singel"}</h1> 


 

    <div className="flex my-4 justify-start items-center">
    
          <span className="  text-xl mr-7 flex justify-center"> Car-Type : {category && category.name} </span>
          <span className="  text-xl mr-7 flex justify-center"><img className="w-7 mr-2 h-7" src="https://i.ibb.co/hBcRn5C/user.png"/> <p>{category && category.sit}</p> </span>
          <span className="flex text-xl mr-7  justify-center"><img   className="w-7 mr-2 h-7 " src="https://i.ibb.co/rsJQX4K/luggage.png"/> <p>{category && category.luggage}</p></span>
           
        </div>
    <div>
      <h2>ADDITIONAL DETAILS</h2>
      <p>phone: {userInfo&& userInfo.number}</p>
    </div>

   


   <div>
    <h1>Distance {distance} K.M</h1>
    Total: { category && distance &&  category.price * distance} Taka
   </div>

    </div>
  );
};

export default JusnyDettaills;
