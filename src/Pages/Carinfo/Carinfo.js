import React, { useContext, useEffect, useState } from "react";
import DataContext from "../../Datacontext/Datas";
import { Link, useNavigate } from "react-router-dom";

const Carinfo = () => {
  const [cars, setCar] = useState([]);
  const { data, setCategory } = useContext(DataContext);


    

  const navigate = useNavigate();


 
////btn selese color
 

  const[btncolor,setBtncolor]=useState(null)
console.log(btncolor)
   

  useEffect(() => {
    fetch("car.json")
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
        
      });
  }, []);

 const carsave=(car)=>{
     setCategory(car)
     setBtncolor(car.id)

   }

  return (
    
  <>
   <div>
    <h1 className="text-2xl capitalize text-center font-bold my-2 ">select Car</h1>

    <div className="my-4">

      {
        cars?.map(car=>
<div  class="flex my-7 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={car.img}alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: {car.name}</h5>
        <div className="flex my-4 justify-center items-center">
          <span className="  text-xl mr-7 flex justify-center"><img className="w-7 mr-2 h-7" src="https://i.ibb.co/hBcRn5C/user.png"/> <p>{car.sit}</p> </span>
          <span className="flex text-xl mr-7  justify-center"><img   className="w-7 mr-2 h-7 " src="https://i.ibb.co/rsJQX4K/luggage.png"/> <p>{car.luggage}</p></span>
          <span className="flex text-xl justify-center"><img   className="w-7 mr-2 h-7 " src="https://i.ibb.co/TL982VT/low-cost.png"/> <p>{car.price}TK per K.M</p></span>
        </div>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{car.about}</p>


        <div>



{
  btncolor === car.id ? <button className="py-2 px-4 rounded-md bg-green-700 text-black font-bold  capitalize">selected</button>:    <button
        className="py-2 px-4 rounded-md bg-orange-500 text-black font-bold  capitalize "
        onClick={()=> carsave(car)}
      >
       select
      </button>
}


     
        </div>
    </div>

   
</div>
)
      }


   <div className="flex justify-end ">
    <Link to="/"> <button className="btn bg-green-950  mr-4">Previous</button></Link>

    <Link to="/userinfo">
       <button className=" btn bg-green-950">Next</button>
    </Link>
    
   </div>

    </div>


   </div>
  
  </>
  
  );
};

export default Carinfo;
