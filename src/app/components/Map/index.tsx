"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

type coordinatesType = {
  lat: number;
  lng: number;
};

export const GoogleMap = () => {
  const [address] = useState(
    "R. Sal da Terra - José Bonifácio José Bonifácio, São Paulo - SP, 08257-140"
  );
  const [coordinates, setCoordinates] = useState<coordinatesType>();

  const handleGeocode = async () => {
    if (!address) return;

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=${apiKey}`
      );
      const data = await response.json();

      if (data.status === "OK") {
        const location = data.results[0].geometry.location;
        setCoordinates(location);
      } else {
        console.error("Geocoding error:", data.status, data.error_message);
        setCoordinates({ lat: 0, lng: 0 });
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  useEffect(() => {
    handleGeocode();
  }, []);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <Map
        style={{ width: "100%", height: "100%" }}
        zoom={14}
        defaultCenter={coordinates}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        center={coordinates}
      >
        <Marker position={coordinates} />
      </Map>
    </APIProvider>
  );
};
