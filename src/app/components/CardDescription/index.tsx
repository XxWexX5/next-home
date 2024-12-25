import { GrCircleQuestion } from "react-icons/gr";
import { Button } from "../Button";
import { Favorite } from "../Favorite";

import { Share } from "./components/Share";
import { Tag } from "./components/Tag";
import { FaCalendarAlt } from "react-icons/fa";

export const CardDescription = () => {
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

        <Button.Outline className="flex items-center justify-center gap-2 relative">
          <FaCalendarAlt size={21} className="absolute left-[1.35rem]" />
          <p className="lowercase">I want to schedule a visit</p>
        </Button.Outline>
      </footer>
    </div>
  );
};
