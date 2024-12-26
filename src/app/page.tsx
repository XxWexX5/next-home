"use client";

import { Header } from "./components/Header";
import { Result } from "./components/Result";
import { ButtonPrimary } from "./components/Button/components/ButtonPrimary";
import { GoogleMap } from "./components/Map";
import { CircleIndicator } from "./components/CircleIndicator";
import { Card } from "./components/Card";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { WhatsAppButton } from "./components/Whatsapp";

import { useBuildings } from "./context/BuildingsContext";
import { useState } from "react";

export default function Home() {
  const { buildings } = useBuildings();
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(buildings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = buildings.slice(startIndex, startIndex + itemsPerPage);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <Header />

      <div className="flex md:h-[calc(100%-6rem)]">
        <div className="w-full h-full flex-1 pb-12 overflow-hidden md:overflow-auto">
          <div className="flex flex-col gap-4 items-center justify-between px-8 py-10 border-b border-gray-200 lg:flex-row lg:gap-0">
            <Result />

            <div className="flex gap-3 w-full max-w-[18rem] lg:max-w-[16rem]">
              <ButtonPrimary>Sort</ButtonPrimary>
              <ButtonPrimary>Filter</ButtonPrimary>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 py-10 px-4 md:gap-16">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="disabled:opacity-20"
            >
              <IoIosArrowBack
                size={24}
                className="text-neutral-300 cursor-pointer transition-opacity hover:opacity-60"
              />
            </button>

            {pageNumbers.map((number) => {
              if (number === currentPage) {
                return (
                  <button key={number} onClick={() => setCurrentPage(number)}>
                    <CircleIndicator.Primary>{number}</CircleIndicator.Primary>
                  </button>
                );
              }

              return (
                <button key={number} onClick={() => setCurrentPage(number)}>
                  <CircleIndicator.Outline>{number}</CircleIndicator.Outline>
                </button>
              );
            })}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="disabled:opacity-20"
            >
              <IoIosArrowForward
                size={24}
                className="text-neutral-300 cursor-pointer transition-opacity hover:opacity-60"
              />
            </button>
          </div>

          <div className="flex flex-wrap gap-6 gap-y-10 px-8 justify-center items-center md:justify-start">
            {currentItems.map((item) => (
              <Card
                key={item.Id}
                href={`/building/${item.Id}`}
                image={{
                  src: item.PictureURL,
                  alt: "Image",
                  className: "",
                }}
                title={item.Title}
                description={item.Description}
                price={item.Sale_Price}
                favorited={false}
              />
            ))}
          </div>
        </div>

        <div className="w-full h-full flex-1 max-w-3xl hidden md:block">
          <GoogleMap />
        </div>
      </div>

      <WhatsAppButton phoneNumber={5511999999999} />
    </>
  );
}
