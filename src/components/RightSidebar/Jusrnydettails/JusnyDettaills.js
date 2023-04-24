import { format } from "date-fns";
import React from "react";

const JusnyDettaills = ({ data }) => {
  console.log(data);
  return (
    <div className="p-3 text-left capitalize">
      <h1 className="text-xl font-bold">From: {data.origin}</h1>
      <h1 className="text-xl font-bold">To: {data.destination}</h1>

      <h1 className="text-xl font-bold">
        DATE OF JOURNEY: {format(data.startdate, "PP")}
      </h1>
      {data.returndate ? (
        <h1 className="text-xl font-bold"> Returen Date: {data.returndate}</h1>
      ) : (
        "singel"
      )}
    </div>
  );
};

export default JusnyDettaills;
