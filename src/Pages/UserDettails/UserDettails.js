import React, { useState, useContext } from "react";
import DataContext from "../../Datacontext/Datas";
import { Link, useNavigate } from "react-router-dom";

const UserDettails = () => {
  const { data, setData, category, setCategory, userInfo, setUserInfo } = useContext(DataContext);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNum] = useState("");
  const [msg, setMsg] = useState("");

  console.log(category);

  const handlefrom = () => {
    const info = {
      name,
      lastname,
      email,
      msg,
      number,
    };
    setUserInfo(info);
    
  };

  return (
   
  

      <div className="my-[50px]">
        <from className=" ">


           <div>
            
           
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

            </div> 




          <div className="w-full">
            <input
              className="input my-5  input-bordered input-primary w-full "
              onChange={(e) => setName(e.target.value)}
              required
              name="fname"
              placeholder="firstname"
            />
            <input
              required
              onChange={(e) => setLastname(e.target.value)}
              className="input my-5  input-bordered input-primary w-full "
              placeholder="lastname"
            />
          </div>
          <div>
            <input
              className=" my-5 input input-bordered input-primary w-full "
              required
              onChange={(e) => setEmail(e.target.value)}
              name="mail"
              placeholder="email"
            />
            <input
              className=" my-5 input input-bordered input-primary w-full "
              required
              onChange={(e) => setNum(e.target.value)}
              onBlur={()=>handlefrom()}
              name="phone"
              placeholder="phone"
            />

          </div>


  
            <div className="flex justify-end ">
    <Link to="/car"> <button className="btn bg-green-950  mr-4">Previous</button></Link>

    <Link to="/payment">
       <button className=" btn bg-green-950">Next</button>
    </Link>
    
   </div>
        </from>
      </div>

  );
};

export default UserDettails;
