import { GrCircleQuestion } from "react-icons/gr";
import { Button } from "../Button";
import { Favorite } from "../Favorite";

import { Share } from "./components/Share";
import { Tag } from "./components/Tag";
import { FaCalendarAlt } from "react-icons/fa";

import * as Dialog from "@radix-ui/react-dialog";

import { MdClose } from "react-icons/md";

import { useBuildings } from "@/app/context/BuildingsContext";
import { formatCurrency } from "@/app/utils/formatCurrency";
import { Form } from "../Form";
import { useState } from "react";

export const CardDescription = () => {
  const { building } = useBuildings();

  const [isOpenDialog, setIsOpenDialog] = useState(false);

  return (
    <div className="top-0 right-0 w-full bg-neutral-full max-w-[28rem] m-auto min-h-[28rem] z-10 py-8 px-6 rounded-lg shadow-md mb-12 lg:absolute lg:mb-0 lg:-mt-[3rem]">
      <header>
        <div className="flex items-center justify-between gap-3 mb-6">
          <Tag />

          <div className="flex-1 flex items-center justify-end gap-3">
            <div className="w-full max-w-[28px]">
              <Favorite isFavorited={false} />
            </div>

            <Share />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-neutral-200 font-medium text-lg leading-6">
            {`${building.Title} - ${building.YearBuilt}`}
          </h2>

          <p className="text-neutral-300 truncate">{building.Description}</p>
        </div>

        <hr className="my-10" />
      </header>

      <main className="flex justify-between items-end">
        <div className="space-y-0">
          <h3 className="font-bold text-neutral-200">Rent</h3>
          <p className="text-neutral-300">Condominium</p>
        </div>

        <div className="space-y-0 text-right">
          <h3 className=" text-neutral-200 text-sm">
            <strong className="text-lg">
              {formatCurrency(building?.Sale_Price?.toString())}
            </strong>{" "}
            / month
          </h3>
          <p className="text-neutral-300 text-sm">
            {formatCurrency((building?.Sale_Price / 100).toString())} / month
          </p>
        </div>
      </main>

      <footer className="space-y-4 mt-10">
        <Button.Primary className="flex items-center justify-center gap-2 relative">
          <GrCircleQuestion size={24} className="absolute left-[1.35rem]" />
          <p className="lowercase">I want to know more</p>
        </Button.Primary>

        <Dialog.Root open={isOpenDialog}>
          <Dialog.Trigger asChild>
            <Button.Outline
              className="flex items-center justify-center gap-2 relative"
              onClick={() => setIsOpenDialog(true)}
            >
              <FaCalendarAlt size={21} className="absolute left-[1.35rem]" />
              <p className="lowercase">I want to schedule a visit</p>
            </Button.Outline>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/60 z-10" />
            <Dialog.Content className="overflow-auto fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[48rem] lg:px-[4rem] py-[2rem] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white px-[1.5rem] lg:p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow z-20">
              <Dialog.Title className="text-neutral-300 m-0 text-2xl font-medium text-center mb-6">
                I want to know more
              </Dialog.Title>

              <div className="space-y-4">
                <Form handleDialog={setIsOpenDialog} />
              </div>

              <Dialog.Close asChild>
                <button
                  className="absolute right-4 top-4 inline-flex size-[32px] appearance-none items-center justify-center rounded-full border border-primary-400 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
                  aria-label="Close"
                  onClick={() => setIsOpenDialog(false)}
                >
                  <MdClose size={32} className="text-primary-400" />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </footer>
    </div>
  );
};
