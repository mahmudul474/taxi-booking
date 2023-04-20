import React, { useState, useContext } from "react";
import DataContext from "../../Datacontext/Datas";
import { useNavigate } from "react-router-dom";

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
    navigate("/payment");
  };

  return (
    <div className="flex justify-center ">
      <div>
        <div className="w-[400px]  p-[30px]">
          <h2 className="text-2xl font-bold my-[20px]">summary</h2>

          <div className="m-auto ">
            <h1 className="w-full border font-bold text-2xl capitalize m-auto p-10">pikup-location: {data.start}</h1>
            <h1 className="w-full border font-bold text-2xl capitalize m-auto p-10">Drop-location: {data.end}</h1>
            <h1 className="w-full border font-bold text-2xl capitalize m-auto p-10">Data: {data.date}</h1>
          </div>

          <div className="w-[600px] mt-[50px] border font-bold text-2xl capitalize m-auto ">
            <h1>total-Cost : {category.totalprice} taka</h1>
            <button className="btn w-[150px] mx-auto my-[40px]  " type="submit" onClick={handlefrom}>
              next
            </button>
          </div>
        </div>
      </div>

      <div className="my-[50px]">
        <from className=" w-600px ">
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
              name="phone"
              placeholder="phone"
            />

            <textarea
              className="textarea textarea-bordered textarea-lg w-full max-w-xs"
              onChange={(e) => setMsg(e.target.value)}
              name="msg"
              cols={20}
              rows={3}
              placeholder="msg"
            ></textarea>
          </div>
        </from>
      </div>
    </div>
  );
};

export default UserDettails;
