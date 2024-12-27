/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { Header } from "@/app/components/Header";
import { Carrousel } from "@/app/components/ImageCarousel";
import { Footer } from "@/app/components/Footer";

import { BiSquareRounded } from "react-icons/bi";
import { BsPersonWalking } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import { PiMapPinAreaFill } from "react-icons/pi";
import { FaBath, FaBed, FaCar } from "react-icons/fa";

import { ItemDescription } from "./components/ItemDescription";
import { Check } from "./components/ItemCheck";

import { CardDescription } from "@/app/components/CardDescription";
import { WhatsAppButton } from "@/app/components/Whatsapp";
import { useBuildings } from "@/app/context/BuildingsContext";
import { useEffect, useState } from "react";

import { format } from "date-fns";
import axios from "axios";

export default function Building({ params }: any) {
  const { handleBuilding, building } = useBuildings();
  const [coordinates, setCoordinates] = useState({ lat: Number, lng: Number });

  const { id } = params;

  useEffect(() => {
    handleBuilding(parseInt(id));
    handleGetCoordinates();
  }, [building]);

  const handleGetCoordinates = async () => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const baseUrl = "https://maps.googleapis.com/maps/api/geocode/json";

    try {
      const response = await axios.get(
        `${baseUrl}?address=${encodeURIComponent(
          building.Location
        )}&key=${apiKey}`
      );
      const data = response.data;

      if (data.status === "OK") {
        const location = data.results[0].geometry.location;
        setCoordinates(location);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const address = building.Location;

  const encodedAddress = encodeURIComponent(address);

  const googleMapsUrl = `https://www.google.com/maps?q=${encodedAddress}`;

  const streetViewUrl = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${
    coordinates?.lat || 0
  },${coordinates?.lng || 0}`;

  return (
    <>
      <Header />

      <div className="w-full overflow-hidden relative">
        <Carrousel />
      </div>

      <Container>
        <div className="flex-col w-full justify-between items-start relative lg:flex-row">
          <div className="flex flex-col max-w-xl gap-4 py-10 flex-1 m-auto lg:mb-0 lg:m-0 lg:flex-row lg:py-20">
            <Button.Primary className="flex items-center justify-center gap-2 pointer-events-none">
              <IoMdPhotos size={24} />
              Photos
            </Button.Primary>

            <Button.Outline
              isLink={true}
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <PiMapPinAreaFill size={24} />
              Map
            </Button.Outline>

            <Button.Outline
              isLink={true}
              href={streetViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <BsPersonWalking size={24} />
              Street
            </Button.Outline>
          </div>

          <CardDescription />
        </div>

        <div className="space-y-10 lg:space-y-20 pb-14 lg:pb-24">
          <div className="space-y-4">
            <h2 className="text-neutral-200 font-bold text-lg">Highlights</h2>

            <div className="flex justify-between gap-1 lg:justify-start">
              <ItemDescription
                title="Total"
                description={`${building.Sqft} ft²`}
                image={<BiSquareRounded className="fill-neutral-200" />}
              />

              <ItemDescription
                title="Bed"
                description={building.Bedrooms || 0}
                image={<FaBed className="fill-neutral-200" />}
              />

              <ItemDescription
                title="Bath"
                description={building?.Bathrooms || 0}
                image={<FaBath className="fill-neutral-200" />}
              />

              <ItemDescription
                title="Parking"
                description={building?.Parking || 0}
                image={<FaCar className="fill-neutral-200" />}
              />
            </div>
          </div>

          <div className="space-y-2 w-full max-w-2xl lg:space-y-2">
            <h2 className="text-neutral-200 font-bold text-lg">
              About the Property
            </h2>

            <p className="text-neutral-200">
              {format(
                new Date(building?.YearBuilt || "2023-02-18"),
                "MMM dd, yyyy"
              )}
            </p>

            <p className="text-neutral-200">Schedule a visit with us!</p>

            <p className="text-neutral-200">{building?.Description}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-neutral-200 font-bold text-lg">
              Property features
            </h2>

            <div className="flex flex-col gap-4 lg:flex-row lg:gap-32">
              <div className="flex flex-col justify-between gap-4 lg:justify-start">
                <Check.Checked title="Accepts pets" />
                <Check.Checked title="Kitchen" />
                <Check.Checked title="Air conditioning" />
              </div>

              <div className="flex flex-col justify-between gap-4 lg:justify-start">
                <Check.Checked title="Service area" />
                <Check.Checked title="Electronic gate" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Footer />

      <WhatsAppButton phoneNumber={5511999999999} />
    </>
  );
}
