import React, { useContext, useState } from "react";
import Direction from "../components/Direction";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import DataContext from "../Datacontext/Datas";
import { useNavigate } from "react-router-dom";

const Placeinfo = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState(null);

  const naviget = useNavigate();

  const { data, setData } = useContext(DataContext);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const date = format(selectedDate, "PP");

  const handlecarInfo = () => {
    const info = {
      date: date,
      km: distance,
      start: origin,
      end: destination,
    };
    setData(info);
    naviget("/car");
  };

  return (
    <>
      <div className="flex my-[60px] justify-center items-center">
        <div className="w-[500px]">
          <div className="px-3">
            <input
              className="input input-bordered input-primary w-full"
              type="text"
              placeholder="Starting From"
              onChange={(e) => setOrigin(e.target.value)}
            />
            <input
              className=" mt-3 input input-bordered input-primaryinput w-full "
              type="text"
              placeholder="Going to"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <div>
            <div className="flex justify-center items-center mt-[20px]">
              <DayPicker mode="single" selected={selectedDate} onDayClick={setSelectedDate} />
            </div>

            <p className="text-xl font-bold">{date}</p>
          </div>
        </div>

        <div className="w-2/4">
          <Direction distance={distance} setDistance={setDistance} origin={origin} destination={destination}></Direction>
        </div>
      </div>

      <div>
        {distance && <h1 className="text-xl font-bold">{distance} km</h1>}
        <button onClick={handlecarInfo} className="btn">
          next
        </button>
      </div>
    </>
  );
};

export default Placeinfo;
