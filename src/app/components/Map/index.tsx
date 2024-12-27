"use client";

import { useBuildings } from "@/app/context/BuildingsContext";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

type CoordinatesType = {
  lat: number;
  lng: number;
};

export const GoogleMap = () => {
  const { buildings } = useBuildings();

  const [addresses, setAddresses] = useState<string[]>([]);
  const [coordinatesList, setCoordinatesList] = useState<CoordinatesType[]>([]);
  const [mapCenter, setMapCenter] = useState<CoordinatesType | undefined>();

  const handleGeocode = async () => {
    const addresses = buildings.map((building) => building.Location);

    setAddresses(addresses);

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    try {
      const geocodePromises = addresses.map(async (address) => {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            address
          )}&key=${apiKey}`
        );
        const data = await response.json();

        if (data.status === "OK") {
          return data.results[0].geometry.location;
        } else {
          console.error(
            `Geocoding error for ${address}:`,
            data.status,
            data.error_message
          );
          return { lat: 0, lng: 0 };
        }
      });

      const results = await Promise.all(geocodePromises);
      setCoordinatesList(results);

      adjustMapCenter(results);
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  const adjustMapCenter = (coordinates: CoordinatesType[]) => {
    const bounds = new window.google.maps.LatLngBounds();

    coordinates.forEach((coord) => {
      bounds.extend(coord);
    });

    const center = {
      lat: bounds.getCenter().lat(),
      lng: bounds.getCenter().lng(),
    };

    setMapCenter(center);
  };

  useEffect(() => {
    handleGeocode();
  }, []);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <Map
        style={{ width: "100%", height: "100%" }}
        zoom={2}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        center={mapCenter || { lat: 48.8566, lng: 2.3522 }}
      >
        {coordinatesList.map((coords, index) => (
          <Marker key={index} position={coords} label={addresses[index]} />
        ))}
      </Map>
    </APIProvider>
  );
};
