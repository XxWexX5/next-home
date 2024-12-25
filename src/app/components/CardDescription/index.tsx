import { GrCircleQuestion } from "react-icons/gr";
import { Button } from "../Button";
import { Favorite } from "../Favorite";

import { Share } from "./components/Share";
import { Tag } from "./components/Tag";
import { FaCalendarAlt } from "react-icons/fa";

import * as Dialog from "@radix-ui/react-dialog";

import { MdClose } from "react-icons/md";
import { Select } from "../Select";

export const CardDescription = () => {
  const options = [
    { value: "location", label: "Location" },
    { value: "buy", label: "Buy" },
  ];

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
            House for rent in Maringá, Jardim Iguaçu, with 3 bedrooms, with
            131.52 m²
          </h2>

          <p className="text-neutral-300">
            Residencial Ito II, Street 10 de Maio, 291.
          </p>
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
            <strong className="text-lg">R$ 1.000</strong> / month
          </h3>
          <p className="text-neutral-300 text-sm">R$ 800 / month</p>
        </div>
      </main>

      <footer className="space-y-4 mt-10">
        <Button.Primary className="flex items-center justify-center gap-2 relative">
          <GrCircleQuestion size={24} className="absolute left-[1.35rem]" />
          <p className="lowercase">I want to know more</p>
        </Button.Primary>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button.Outline className="flex items-center justify-center gap-2 relative">
              <FaCalendarAlt size={21} className="absolute left-[1.35rem]" />
              <p className="lowercase">I want to schedule a visit</p>
            </Button.Outline>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/60 z-10" />
            <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[48rem] lg:px-[4rem] py-[2rem] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white px-[1.5rem] lg:p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow z-20">
              <Dialog.Title className="text-neutral-300 m-0 text-2xl font-medium text-center mb-6">
                I want to know more
              </Dialog.Title>

              <div className="space-y-4">
                <div className="flex flex-col gap-4 lg:flex-row">
                  <div className="flex flex-1 flex-col gap-2 text-neutral-200">
                    <label className="text-neutral-200 text-lg px-7">
                      Pretension
                    </label>

                    <div className="border border-neutral-600 inline-flex rounded-full px-3 py-1">
                      <Select
                        options={options}
                        optionDisabled="Select a type"
                        className="text-neutral-600 font-normal"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-2 text-neutral-200">
                    <label className="text-neutral-200 text-lg px-7">
                      Name
                    </label>

                    <div className="border border-neutral-600 inline-flex rounded-full px-3 py-[.38rem]">
                      <input className="w-full h-full text-neutral-200 text-bas py-2 px-4 pr-8 rounded-lg bg-transparent" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 lg:flex-row">
                  <div className="flex flex-1 flex-col gap-2 text-neutral-200">
                    <label className="text-neutral-200 text-lg px-7">
                      Phone
                    </label>

                    <div className="border border-neutral-600 inline-flex rounded-full px-3 py-[.38rem]">
                      <input className="w-full h-full text-neutral-200 text-bas py-2 px-4 pr-8 rounded-lg bg-transparent" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-2 text-neutral-200">
                    <label className="text-neutral-200 text-lg px-7">
                      Mail
                    </label>

                    <div className="border border-neutral-600 inline-flex rounded-full px-3 py-[.38rem]">
                      <input className="w-full h-full text-neutral-200 text-bas py-2 px-4 pr-8 rounded-lg bg-transparent" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-1 flex-col gap-2 text-neutral-200">
                    <label className="text-neutral-200 text-lg px-7">
                      Message
                    </label>

                    <div className="border border-neutral-600 inline-flex rounded-2xl px-3 py-[.38rem] h-[8rem]">
                      <textarea className="w-full h-full text-neutral-200 text-bas py-2 px-4 pr-8 rounded-lg bg-transparent resize-none" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-1 flex-col gap-2 text-neutral-200 mt-3">
                    <Button.Primary>Send</Button.Primary>
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
      </footer>
    </div>
  );
};
