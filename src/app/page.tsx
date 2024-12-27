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
import { useEffect, useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { MdClose } from "react-icons/md";

import * as RadioGroup from "@radix-ui/react-radio-group";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { data } from "./data/buildings";

export default function Home() {
  const { buildings, setBuildings } = useBuildings();
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(buildings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = buildings.slice(startIndex, startIndex + itemsPerPage);

  const [numberBedrooms, setNumberBedrooms] = useState("disabled");
  const [numberBathrooms, setNumberBathrooms] = useState("disabled");
  const [numberParking, setNumberParking] = useState("disabled");
  const [valueFromPrice, setValueFromPrice] = useState("");
  const [valueUntilPrice, setValueUntilPrice] = useState("");

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  function handleSort(type: "greater" | "lowest") {
    if (type === "lowest") {
      const buildingSorted = buildings.sort(
        (a, b) => a.Sale_Price - b.Sale_Price
      );

      return setBuildings([...buildingSorted]);
    }

    const buildingSorted = buildings.sort(
      (a, b) => b.Sale_Price - a.Sale_Price
    );

    return setBuildings([...buildingSorted]);
  }

  useEffect(() => {
    if (numberBedrooms === "disabled") {
      return setBuildings([...data]);
    }

    const dataBedrooms = data.filter(
      (building) => building.Bedrooms.toString() === numberBedrooms
    );

    return setBuildings([...dataBedrooms]);
  }, [numberBedrooms]);

  useEffect(() => {
    if (numberBathrooms === "disabled") {
      return setBuildings([...data]);
    }

    const dataBedrooms = data.filter(
      (building) => building.Bathrooms.toString() === numberBathrooms
    );

    return setBuildings([...dataBedrooms]);
  }, [numberBathrooms]);

  useEffect(() => {
    if (numberParking === "disabled") {
      return setBuildings([...data]);
    }

    const dataBedrooms = data.filter(
      (building) => building.Parking.toString() === numberParking
    );

    return setBuildings([...dataBedrooms]);
  }, [numberParking]);

  useEffect(() => {
    if (
      !valueFromPrice ||
      !valueUntilPrice ||
      parseInt(valueUntilPrice) === 0
    ) {
      return setBuildings([...data]);
    }

    if (parseInt(valueFromPrice) >= 0 && parseInt(valueUntilPrice) > 0) {
      const dataPrices = data.filter(
        (building) =>
          building.Sale_Price >= parseInt(valueFromPrice) &&
          building.Sale_Price <= parseInt(valueUntilPrice)
      );

      return setBuildings([...dataPrices]);
    }
  }, [valueFromPrice, valueUntilPrice]);

  return (
    <>
      <Header />

      <div className="flex md:h-[calc(100%-6rem)]">
        <div className="w-full h-full flex-1 pb-12 overflow-hidden md:overflow-auto">
          <div className="flex flex-col gap-4 items-center justify-between px-8 py-10 border-b border-gray-200 lg:flex-row lg:gap-0">
            <Result />

            <div className="flex gap-3 w-full max-w-[18rem] lg:max-w-[16rem]">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <ButtonPrimary>Sort</ButtonPrimary>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    className="min-w-[8rem] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
                    sideOffset={5}
                  >
                    <DropdownMenu.Item
                      onClick={() => handleSort("greater")}
                      className="gap-2 w-full m-0 p-0 text-center group relative flex h-[25px] select-none items-center justify-center rounded-[3px]  text-[13px] leading-none text-violet11 outline-none text-neutral-200 cursor-pointer transition-opacity hover:opacity-50"
                    >
                      <FaChevronUp className="text-neutral-400" />
                      Greater value
                    </DropdownMenu.Item>

                    <DropdownMenu.Item
                      onClick={() => handleSort("lowest")}
                      className="gap-2 w-full m-0 p-0 text-center group relative flex h-[25px] select-none items-center justify-center rounded-[3px]  text-[13px] leading-none text-violet11 outline-none text-neutral-200 cursor-pointer transition-opacity hover:opacity-50"
                    >
                      <FaChevronDown className="text-neutral-400" /> Lowest
                      value
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>

              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <ButtonPrimary>Filter</ButtonPrimary>
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/60 z-10" />
                  <Dialog.Content className="overflow-auto fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[45rem] lg:px-[4rem] py-[4rem] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white px-[1.5rem] lg:p-[3.5rem] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow z-20">
                    <div className="space-y-10">
                      <div>
                        <h5 className="text-neutral-200 font-medium text-lg mb-6">
                          Bedrooms
                        </h5>

                        <RadioGroup.Root
                          className="flex overflow-x-auto gap-6"
                          defaultValue="disabled"
                          aria-label="View density"
                          value={numberBedrooms.toString()}
                          onValueChange={(value) => setNumberBedrooms(value)}
                        >
                          <div className="flex flex-1 items-center">
                            <RadioGroup.Item
                              className="size-[25px] cursor-default rounded-full bg-white border-2 border-primary-400 outline-none"
                              value="1"
                              id="r1"
                            >
                              <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-primary-400" />
                            </RadioGroup.Item>
                            <label
                              className="pl-[.65rem] text-[15px] leading-none text-neutral-200"
                              htmlFor="r1"
                            >
                              01
                            </label>
                          </div>

                          <div className="flex flex-1 items-center">
                            <RadioGroup.Item
                              className="size-[25px] cursor-default rounded-full bg-white border-2 border-primary-400 outline-none hover:bg-violet3"
                              value="2"
                              id="r2"
                            >
                              <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-primary-400" />
                            </RadioGroup.Item>
                            <label
                              className="pl-[.65rem] text-[15px] leading-none text-neutral-200"
                              htmlFor="r2"
                            >
                              02
                            </label>
                          </div>

                          <div className="flex flex-1 items-center">
                            <RadioGroup.Item
                              className="size-[25px] cursor-default rounded-full bg-white border-2 border-primary-400 outline-none hover:bg-violet3"
                              value="3"
                              id="r3"
                            >
                              <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-primary-400" />
                            </RadioGroup.Item>
                            <label
                              className="pl-[.65rem] text-[15px] leading-none text-neutral-200"
                              htmlFor="r3"
                            >
                              03
                            </label>
                          </div>

                          <div className="flex flex-1 items-center">
                            <RadioGroup.Item
                              className="size-[25px] cursor-default rounded-full bg-white border-2 border-primary-400 outline-none hover:bg-violet3"
                              value="4"
                              id="r4"
                            >
                              <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-primary-400" />
                            </RadioGroup.Item>
                            <label
                              className="pl-[.65rem] text-[15px] leading-none text-neutral-200"
                              htmlFor="r4"
                            >
                              04
                            </label>
                          </div>

                          <div className="flex flex-1 items-center">
                            <RadioGroup.Item
                              className="size-[25px] cursor-default rounded-full bg-white border-2 border-primary-400 outline-none hover:bg-violet3"
                              value="5"
                              id="r5"
                            >
                              <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-primary-400" />
                            </RadioGroup.Item>
                            <label
                              className="pl-[.65rem] text-[15px] leading-none text-neutral-200"
                              htmlFor="r5"
                            >
                              05
                            </label>
                          </div>

                          <div className="flex flex-1 items-center">
                            <RadioGroup.Item
                              className="size-[25px] cursor-default rounded-full bg-white border-2 border-primary-400 outline-none hover:bg-violet3"
                              value="disabled"
                              id="r-disabled"
                            >
                              <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-primary-400" />
                            </RadioGroup.Item>
                            <label
                              className="pl-[.65rem] text-[15px] leading-none text-neutral-200"
                              htmlFor="r-disabled"
                            >
                              Disabled
                            </label>
                          </div>
                        </RadioGroup.Root>
                      </div>

                      <div>
                        <h5 className="text-neutral-200 font-medium text-lg mb-6">
                          Bathrooms
                        </h5>

                        <RadioGroup.Root
                          className="flex overflow-x-auto gap-6"
                          defaultValue="disabled"
                          aria-label="View density"
                          onValueChange={(value) => setNumberBathrooms(value)}
                          value={numberBathrooms}
                        >
                          <div className="flex flex-1 items-center">
                            <RadioGroup.Item
                              className="size-[25px] cursor-default rounded-full bg-white border-2 border-primary-400 outline-none"
                              value="1"
                              id="r1"
                            >
                              <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-primary-400" />
                            </RadioGroup.Item>
                            <label
                              className="pl-[.65rem] text-[15px] leading-none text-neutral-200"
                              htmlFor="r1"
                            >
                              01
                            </label>
                          </div>

                          <div className="flex flex-1 items-center">
                            <RadioGroup.Item
                              className="size-[25px] cursor-default rounded-full bg-white border-2 border-primary-400 outline-none hover:bg-violet3"
                              value="2"
                              id="r2"
                            >
                              <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-primary-400" />
                            </RadioGroup.Item>
                            <label
                              className="pl-[.65rem] text-[15px] leading-none text-neutral-200"
                              htmlFor="r2"
                            >
                              02
                            </label>
                          </div>

                          <div className="flex flex-1 items-center">
                            <RadioGroup.Item
                              className="size-[25px] cursor-default rounded-full bg-white border-2 border-primary-400 outline-none hover:bg-violet3"
                              value="3"
                              id="r3"
                            >
                              <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-primary-400" />
                            </RadioGroup.Item>
                            <label
                              className="pl-[.65rem] text-[15px] leading-none text-neutral-200"
                              htmlFor="r3"
                            >
                              03
                            </label>
                          </div>

                          <div className="flex flex-1 items-center">
                            <RadioGroup.Item
                              className="size-[25px] cursor-default rounded-full bg-white border-2 border-primary-400 outline-none hover:bg-violet3"
                              value="4"
                              id="r4"
                            >
                              <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-primary-400" />
                            </RadioGroup.Item>
                            <label
                              className="pl-[.65rem] text-[15px] leading-none text-neutral-200"
                              htmlFor="r4"
                            >
                              04
                            </label>
                          </div>

                          <div className="flex flex-1 items-center">
                            <RadioGroup.Item
                              className="size-[25px] cursor-default rounded-full bg-white border-2 border-primary-400 outline-none hover:bg-violet3"
                              value="5"
                              id="r5"
                            >
                              <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-primary-400" />
                            </RadioGroup.Item>
                            <label
                              className="pl-[.65rem] text-[15px] leading-none text-neutral-200"
                              htmlFor="r5"
                            >
                              05
                            </label>
                          </div>

                          <div className="flex flex-1 items-center">
                            <RadioGroup.Item
                              className="size-[25px] cursor-default rounded-full bg-white border-2 border-primary-400 outline-none hover:bg-violet3"
                              value="disabled"
                              id="r-disabled"
                            >
                              <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-primary-400" />
                            </RadioGroup.Item>
                            <label
                              className="pl-[.65rem] text-[15px] leading-none text-neutral-200"
                              htmlFor="r-disabled"
                            >
                              Disabled
                            </label>
                          </div>
                        </RadioGroup.Root>
                      </div>

                      <div>
                        <h5 className="text-neutral-200 font-medium text-lg mb-6">
                          Parking
                        </h5>

                        <RadioGroup.Root
                          className="flex overflow-x-auto gap-6"
                          defaultValue="disabled"
                          aria-label="View density"
                          onValueChange={(value) => setNumberParking(value)}
                          value={numberParking}
                        >
                          <div className="flex-1 flex items-center">
                            <RadioGroup.Item
                              className="size-[25px] cursor-default rounded-full bg-white border-2 border-primary-400 outline-none"
                              value="1"
                              id="r1"
                            >
                              <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-primary-400" />
                            </RadioGroup.Item>
                            <label
                              className="pl-[.65rem] text-[15px] leading-none text-neutral-200"
                              htmlFor="r1"
                            >
                              01
                            </label>
                          </div>

                          <div className="flex-1 flex items-center">
                            <RadioGroup.Item
                              className="size-[25px] cursor-default rounded-full bg-white border-2 border-primary-400 outline-none hover:bg-violet3"
                              value="2"
                              id="r2"
                            >
                              <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-primary-400" />
                            </RadioGroup.Item>
                            <label
                              className="pl-[.65rem] text-[15px] leading-none text-neutral-200"
                              htmlFor="r2"
                            >
                              02
                            </label>
                          </div>

                          <div className="flex-1 flex items-center">
                            <RadioGroup.Item
                              className="size-[25px] cursor-default rounded-full bg-white border-2 border-primary-400 outline-none hover:bg-violet3"
                              value="3"
                              id="r3"
                            >
                              <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-primary-400" />
                            </RadioGroup.Item>
                            <label
                              className="pl-[.65rem] text-[15px] leading-none text-neutral-200"
                              htmlFor="r3"
                            >
                              03
                            </label>
                          </div>

                          <div className="flex-1 flex items-center">
                            <RadioGroup.Item
                              className="size-[25px] cursor-default rounded-full bg-white border-2 border-primary-400 outline-none hover:bg-violet3"
                              value="4"
                              id="r4"
                            >
                              <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-primary-400" />
                            </RadioGroup.Item>
                            <label
                              className="pl-[.65rem] text-[15px] leading-none text-neutral-200"
                              htmlFor="r4"
                            >
                              04
                            </label>
                          </div>

                          <div className="flex-1 flex items-center">
                            <RadioGroup.Item
                              className="size-[25px] cursor-default rounded-full bg-white border-2 border-primary-400 outline-none hover:bg-violet3"
                              value="5"
                              id="r5"
                            >
                              <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-primary-400" />
                            </RadioGroup.Item>
                            <label
                              className="pl-[.65rem] text-[15px] leading-none text-neutral-200"
                              htmlFor="r5"
                            >
                              05
                            </label>
                          </div>

                          <div className="flex-1 flex items-center">
                            <RadioGroup.Item
                              className="size-[25px] cursor-default rounded-full bg-white border-2 border-primary-400 outline-none hover:bg-violet3"
                              value="disabled"
                              id="r-disabled"
                            >
                              <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-primary-400" />
                            </RadioGroup.Item>
                            <label
                              className="pl-[.65rem] text-[15px] leading-none text-neutral-200"
                              htmlFor="r-disabled"
                            >
                              Disabled
                            </label>
                          </div>
                        </RadioGroup.Root>
                      </div>

                      <div>
                        <h5 className="text-neutral-200 font-medium text-lg mb-6">
                          Price
                        </h5>

                        <div className="flex overflow-x-auto w-full gap-6">
                          <div className="flex-1 border border-neutral-600 inline-flex items-baseline gap-2 rounded-full px-3 py-[.55rem]">
                            <label
                              className="text-sm text-neutral-500"
                              htmlFor="value-from"
                            >
                              From
                            </label>

                            <label
                              className="text-sm text-neutral-200"
                              htmlFor="value-from"
                            >
                              R$
                            </label>

                            <input
                              id="value-from"
                              type="number"
                              className="text-neutral-200"
                              value={valueFromPrice}
                              onChange={(e) =>
                                setValueFromPrice(e.target.value)
                              }
                            />
                          </div>

                          <div className="flex-1 border border-neutral-600 inline-flex items-baseline gap-2 rounded-full px-3 py-[.55rem]">
                            <label
                              className="text-sm text-neutral-500"
                              htmlFor="value-until"
                            >
                              Until
                            </label>

                            <label
                              className="text-sm text-neutral-200"
                              htmlFor="value-until"
                            >
                              R$
                            </label>

                            <input
                              id="value-until"
                              type="number"
                              className="text-neutral-200"
                              value={valueUntilPrice}
                              onChange={(e) =>
                                setValueUntilPrice(e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Dialog.Close asChild>
                      <button
                        className="absolute right-4 top-4 inline-flex size-[32px] appearance-none items-center justify-center rounded-full border border-primary-400 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
                        aria-label="Close"
                      >
                        <MdClose size={32} className="text-primary-400" />
                      </button>
                    </Dialog.Close>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
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
