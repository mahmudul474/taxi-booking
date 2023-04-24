import React, { useContext, useState } from "react";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
 
import DataContext from "../Datacontext/Datas";
import { useNavigate } from "react-router-dom";
 

const Placeinfo = () => {
  const [origin, setOrigin] = useState("");
  
  const [destination, setDestination] = useState("");
  

  const naviget = useNavigate();

  const { data, setData } = useContext(DataContext);

  




  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

   console.log(selectedValue)



  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOkClick = () => {
    setSelectedValue(selected);
    setInputValue("");
    setIsOpen(false);
  
  };

  const handleCancelClick = () => {
    setInputValue("");
    setIsOpen(false);
  };


 






  const [showInput, setShowInput] = useState(false);
  const [date, setDate] = useState("");

  const handleReturnDateClick = () => {
    setShowInput(true);
  };

  const handleOkButtonClick = () => {
    setShowInput(false);
    console.log("Date:", date); // Here, you can set the date value in the state or send it to the server.
  };

  const handleCancelButtonClick = () => {
    setShowInput(false);
  };

  const handleInputClick = () => {
    setShowInput(!showInput);
  };

  const handleretunChange = (event) => {
    setDate(event.target.value);
  };



  ///local sotore 


  const [selected, setSelected] =useState("")
  

  

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
      
  }
  

  const handlecarInfo = () => {
    if (origin === null || origin === undefined) {
      console.log("Error: myVariable is null or undefined.");
    } else {
      

       const info={
        origin:origin?origin :"dhaka",
        destination,
        startdate:selected ?selected :""
         
       }


        setData(info)
    }
   
 
    
  };







  return (
    <>
      <div className="flex my-[60px] justify-center items-center">
        <div className="w-[500px] capitalize">
         <h1 className="text-4xl font-bold capitalize mb-7">juerny</h1>
          <div className="px-3">
           <div>
           <span className="absolute mt-3" ><img className="w-10"  alt="" src="https://i.ibb.co/k0zYh5q/home.png"/></span>
            <input
              className="w-full p-6 pl-10 border border-black"
              type="text"
              placeholder="Starting From"
              onChange={(e) => setOrigin(e.target.value)}
              onBlur={()=>handlecarInfo()}
            />
           </div>
  
       <div className="my-3">

        <span className="absolute mt-3"><img className="w-10" alt="" src="https://i.ibb.co/Qm8mDYc/location-1.png"/></span>
       <input
              className="w-full p-6 pl-10 border border-black"
              type="text"
              placeholder="Going to"
              onChange={(e) => setDestination(e.target.value)}
               onBlur={()=>handlecarInfo()}
            />  

       </div>
        

       <div className="relative">
      <input
        type="text"
         value={format(selected, 'PP')}
        
        onClick={handleDropdownClick}
 
        className="w-full p-6 pl-10 border border-black"
 />
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
<DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />

 
       

          <div className="flex justify-end px-4 py-2 bg-gray-100">
            <button onClick={handleCancelClick} className="mr-2 text-gray-700">
              Cancel
            </button>
            <button onClick={handleOkClick} className="text-blue-500">
              OK
            </button>
          </div>
        </div>
      )}
    </div>


















    </div>
          <div>   
          </div>
        
        
        
        
        
    <div className="my-6 ">

      <button className="px-4 py-2 mr-4 text-white bg-blue-500 rounded" onClick={handleCancelButtonClick}>singel</button>
      <button className="px-4 py-2 mb-4 text-white bg-blue-500 rounded" onClick={handleReturnDateClick}>Return Date</button>
      {showInput && (
        <div className="">
          <div className="p-4 bg-white border rounded shadow">
            <input type="date" className="w-full mb-4" onChange={handleretunChange} />
            <div className="flex justify-end">
              <button className="px-4 py-2 mr-2 text-white bg-gray-500 rounded" onClick={handleCancelButtonClick}>Cancel</button>
              <button className="px-4 py-2 text-white bg-blue-500 rounded" onClick={handleOkButtonClick}>Ok</button>
            </div>
          </div>
        </div>
      )}
    </div>
        
        
        
        </div>
      </div>

     
    </>
  );
};

export default Placeinfo;
