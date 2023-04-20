import React, { useContext } from "react";
import DataContext from "../../Datacontext/Datas";
import { Link } from "react-router-dom";

const Payment = () => {
  const { data, setData, category, setCategory, userInfo, setUserInfo } = useContext(DataContext);

  console.log(category);

  return (
    <>
      <div className="grid capitalize gap-10 grid-cols-1 lg:grid-cols-3  my-[40px] ">
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <h1>Contact & Billing Info</h1>
            <div className="card-body">
              <p>
                email {userInfo.name} {userInfo.lastname}
              </p>
              <p>email {userInfo.email}</p>
              <p>email {userInfo.number}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title"> pikup: {data.start}</h2>
              <h2 className="card-title"> pikup: {data.end}</h2>
              <h2 className="card-title"> pikup: {data.date}</h2>
              <p> </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl capitalize text-xl">
            <figure>
              <img src={category.car.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">name:{category.car.name}</h2>
              <p> about:{category.car.about}</p>
              <div className="card-actions justify-end">
                <h1 className="text-center mt-20">total: {category.totalprice} Taka</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/thanks">
        <button className="btn">checkout</button>
      </Link>
    </>
  );
};

export default Payment;
