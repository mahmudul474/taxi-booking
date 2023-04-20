import React, { useContext, useEffect, useState } from "react";
import DataContext from "../../Datacontext/Datas";
import { useNavigate } from "react-router-dom";

const Carinfo = () => {
  const [cars, setCar] = useState([]);
  const { data, setCategory } = useContext(DataContext);
  const navigate = useNavigate();

  const [selectcar, setSelectCar] = useState(null);

  const carPrice = selectcar && selectcar.price;
  const kilo = data?.km;

  const total = carPrice * kilo;

  console.log(total);

  const handlecarandtotalprice = () => {
    const info = {
      totalprice: total,
      kilo: data,
      car: selectcar,
    };

    setCategory(info);
    navigate("/userinfo");
  };

  useEffect(() => {
    fetch("car.json")
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
      });
  }, []);

 

  return (
    <>
      <div className="flex justify-between flex-row capitalize mt-[50px] ">
        <div className="w-[400px]  p-[30px]">
          <h2 className="text-2xl font-bold my-[20px]">summary</h2>

          <div className="m-auto ">
            <h1 className="w-full border font-bold text-2xl capitalize m-auto p-10">pikup-location: {data.start}</h1>
            <h1 className="w-full border font-bold text-2xl capitalize m-auto p-10">Drop-location: {data.end}</h1>
            <h1 className="w-full border font-bold text-2xl capitalize m-auto p-10">Data: {data.date}</h1>
          </div>

          <div className="w-[600px] mt-[50px] border font-bold text-2xl capitalize m-auto ">
            <h1>distance: {kilo} Km </h1>
            <h1>Per-Kilo : {carPrice}</h1>

            <h1>total-Cost : {total} taka</h1>

            <button className="btn w-[150px] mx-auto my-[40px]  " onClick={handlecarandtotalprice}>
              next
            </button>
          </div>
        </div>
        <div className="flex flex-col w-2/4">
          {cars?.map((car) => (
            <>
              <div className="card card-side bg-base-100 shadow-xl">
                <img src={car.img} alt="car" />

                <div className="card-body">
                  <h2 className="card-title">Name:{car.name}</h2>
                  <p className="text-left">About: {car.about}</p>
                  <div className="flex justify-center capitalize font-bold text-xl">
                    <p className="">sit: {car.sit}</p>
                    <p>lagej: {car.lagege}</p>
                    <p> Price-perkilo : {car.price} taka</p>
                  </div>

                  <div className="card-actions justify-center">
                    <button className="btn btn-primary" onClick={() => setSelectCar(car)}>
                      slect
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carinfo;
