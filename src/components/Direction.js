
import React, { useState } from "react";
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer, DistanceMatrixService } from "@react-google-maps/api";
import { API_KEY } from "./config";

const containerStyle = {
  width: "600px",
  height: "400px",
};

const location = {
  lat: 23.733348,
  lng: 90.406707,
};

function Direction({ origin, destination }) {
  const [directionResponse, setDirectionResponse] = useState(null);
  const [distance, setDistance] = useState(null);

  const calculateDistance = (response) => {
    if (response.rows[0].elements[0].status === "OK") {
      const distanceInMeters = response.rows[0].elements[0].distance.value;
      const distanceInKm = distanceInMeters / 1000;
      setDistance(distanceInKm);
    }
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={10}>
        {origin !== "" && destination !== "" && (
          <>
            <DirectionsService
              // required
              options={{
                destination: destination,
                origin: origin,
                travelMode: "DRIVING",
              }}
              // required
              callback={(res) => {
                if (res !== null) {
                  setDirectionResponse(res);
                }
              }}
            />
            <DistanceMatrixService
              // required
              options={{
                destinations: [destination],
                origins: [origin],
                travelMode: "DRIVING",
              }}
              // required
              callback={(res) => {
                if (res !== null) {
                  calculateDistance(res);
                }
              }}
            />
          </>
        )}
        {directionResponse && (
          <DirectionsRenderer
            // required
            options={{
              directions: directionResponse,
            }}
          />
        )}
      </GoogleMap>
      {distance && <h1>{distance} km</h1>}
    </LoadScript>
  );
}

export default React.memo(Direction);
