"use client";

import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import { useBuildings } from "@/app/context/BuildingsContext";

export const Carrousel = () => {
  const { building } = useBuildings();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="w-full ">
      <Slider {...settings} className="h-full">
        <div className="w-full h-full">
          <Image
            src={building.ThumbnailURL}
            alt="Image 3"
            width={400}
            height={200}
            layout="responsive"
            objectFit="cover"
          />
        </div>

        <div className="w-full h-full">
          <Image
            src={building.ThumbnailURL}
            alt="Image 3"
            width={400}
            height={200}
            layout="responsive"
            objectFit="cover"
          />
        </div>

        <div className="w-full h-full">
          <Image
            src={building.ThumbnailURL}
            alt="Image 3"
            width={400}
            height={200}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </Slider>
    </div>
  );
};
