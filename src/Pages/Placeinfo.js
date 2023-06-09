import React, { useContext, useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import DataContext from "../Datacontext/Datas";
import { Link, useNavigate } from "react-router-dom";
import { Autocomplete, LoadScript } from "@react-google-maps/api";
import { API_KEY, plcases } from "../components/config";

const Placeinfo = () => {
  const [origin, setOrigin] = useState("");

  const [destination, setDestination] = useState("");

  const naviget = useNavigate();

  const { data, setData } = useContext(DataContext);

  const [isOpen, setIsOpen] = useState(false);
 

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };


 





  const [startdate, setStartDate] =useState("")
  const [selectedDate, setSelectedDate] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleReturnDaeClick = () => {
    setShowDatePicker(true);
  };

  const handleOkClick = () => {
    setShowDatePicker(false);
    setStartDate( selectedDate); // You can set the selected date value in the state or send it to the server.
  };

  const handleCancelClick = () => {
    setShowDatePicker(false);
    setSelectedDate("");
    setStartDate("");
  };

  const handleDateInputChange1 = (event) => {
    setSelectedDate(event.target.value);
  };



 


 



  //return date set

  const [returndate, setReturndate] = useState("");

  const [showInput, setShowInput] = useState(false);
  const [date, setDate] = useState("");

  const handleReturnDateClick = () => {
    setShowInput(true);
  };

  const handleOkButtonClick = () => {
    setShowInput(false);
    setReturndate(date); // Here, you can set the date value in the state or send it to the server.
  };

  const handleCancelButtonClick = () => {
    setShowInput(false);
    setReturndate("");
  };



  const handleretunChange = (event) => {
    setDate(event.target.value);
  };

  ///local sotore

 


  const handlecarInfo = () => {
  
    if (origin === null || origin === undefined) {
      console.log("Error: myVariable is null or undefined.");
    } else {
      const info = {
        origin: origin ? origin :"", 
        destination : destination ? destination :"",
        startdate: startdate ?startdate :"",
        returndate: returndate ? returndate : "",
      };

      setData(info);
    }
  };


  

  return (
    <>
    <LoadScript 
     googleMapsApiKey={API_KEY}
     libraries={plcases}
    >
      <div className="flex my-[60px] justify-center items-center">
        <div

        className="w-[500px] capitalize">
          <h1 className="text-4xl font-bold capitalize mb-7">juerny</h1>

          <div className="px-3">
            <div className="relative">
            
              
              <Autocomplete>
              <input
                className="w-full p-6 relative pl-10 border border-black"
                type="text"
                placeholder="Starting From"
             
                required
                onBlur={(e) => {
                  setOrigin(e.target.value)
                  handlecarInfo()}}
              />
              </Autocomplete>
               <span className="absolute top-4 right-0 ">
                <img
                  className="w-10"
                  alt=""
                  src="https://i.ibb.co/k0zYh5q/home.png"
                />
              </span>
            </div>

            <div className="my-3 relative">
             
              <Autocomplete>
              <input
                className="w-full relative p-6 pl-10 border border-black"
                type="text"
                placeholder="Going to"
                 required
               onBlur={(e) => {
    setDestination(e.target.value);
    handlecarInfo();
  }}
              />
              </Autocomplete>


               <span className="absolute mt-3 top-0 right-0">
                <img
                  className="w-10"
                  alt=""
                  src="https://i.ibb.co/Qm8mDYc/location-1.png"
                />
              </span>
            </div>
            <div>


<div>
<span className="absolute mt-3  ">
                  <img
                    className="w-10 mx-1"
                    alt=""
                    src="https://i.ibb.co/k4NbC3q/calendar.png"
                  />
                </span>
  <input
    className="w-full p-6 pl-12 border border-black"
    onClick={handleReturnDaeClick }
    value={ startdate ? startdate :"DayOf-Juerny" }
  
  />
  </div>
    
  {showDatePicker && (
    <div className="">
      <div className="p-4 bg-white border rounded shadow">
        <input
          type="date"
          className="w-full mb-4"
          onChange={handleDateInputChange1}
        
        />
        <div className="flex justify-end">
          <button
            className="px-4 py-2 mr-2 text-white bg-gray-500 rounded"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded"
            onClick={handleOkClick}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  )}
</div>




     



            {returndate && (
              <div className="my-3">
                <span className="absolute mt-3 mx-2">
                  <img
                    className="w-10 "
                    alt=""
                    src="https://i.ibb.co/k4NbC3q/calendar.png"
                  />
                </span>
                <input
                   
                  value={"ReturnDate " + returndate}
                  className="w-full p-6 pl-14 border border-black"
                  type="text"
                   
                  
                  
                />
              </div>
            )}
          </div>

          

          <div className="my-6 ">
            <button
              className="px-4 py-2 mr-4 text-white bg-blue-500 rounded"
              onClick={handleCancelButtonClick}
            >
              singel
            </button>
            <button
              className="px-4 py-2 mb-4 text-white bg-blue-500 rounded"
              onClick={handleReturnDateClick}
            >
              Return Date
            </button>
            {showInput && (
              <div className="">
                <div className="p-4 bg-white border rounded shadow">
                  <input
                    type="date"
                    className="w-full mb-4"
                    onChange={handleretunChange}
                
                  />
                  <div className="flex justify-end">
                    <button
                      className="px-4 py-2 mr-2 text-white bg-gray-500 rounded"
                      onClick={handleCancelButtonClick}
                    >
                      Cancel
                    </button>
                    <button
                      className="px-4 py-2 text-white bg-blue-500 rounded"
                      onClick={handleOkButtonClick}
                    >
                      Ok
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        
        
        
        
       
       <div className="flex justify-end ">
        <Link to="/car">
        <button type="submit" className="btn" onClick={handlecarInfo}> next</button>
        </Link>
       </div>
       
       
        </div>
      </div>

      </LoadScript>
    </>
  );
};

export default Placeinfo;
