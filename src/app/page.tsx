import { Header } from "./components/Header";
import { Result } from "./components/Result";
import { ButtonPrimary } from "./components/Button/components/ButtonPrimary";
import { GoogleMap } from "./components/Map";
import { CircleIndicator } from "./components/CircleIndicator";
import { Card } from "./components/Card";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <>
      <Header />

      <div className="flex h-[calc(100%-6rem)]">
        <div className="w-full flex-1 overflow-auto pb-12">
          <div className="flex flex-col gap-4 items-center justify-between px-8 py-10 border-b border-gray-200 lg:flex-row lg:gap-0">
            <Result />

            <div className="flex gap-3 w-full max-w-[18rem] lg:max-w-sm">
              <ButtonPrimary>Sort</ButtonPrimary>
              <ButtonPrimary>Filter</ButtonPrimary>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 py-10 px-4 md:gap-16">
            <IoIosArrowBack size={24} className="text-neutral-700" />

            <CircleIndicator.Primary>1</CircleIndicator.Primary>

            <CircleIndicator.Outline>2</CircleIndicator.Outline>

            <CircleIndicator.Outline>3</CircleIndicator.Outline>

            <IoIosArrowForward
              size={24}
              className="text-neutral-300 cursor-pointer transition-opacity hover:opacity-60"
            />
          </div>

          <div className="flex flex-wrap gap-6 gap-y-10 px-8 justify-between items-center">
            <Card
              image={{ src: "/images/house.jpg", alt: "House", className: "" }}
              title="House for rent in Maringá, Jardim Iguaçu, with 3 bedrooms, with 131.52 m²"
              description="May 10th Street"
              price={1100}
              favorited={true}
            />

            <Card
              image={{ src: "/images/house.jpg", alt: "House", className: "" }}
              title="House for rent in Maringá, Jardim Iguaçu, with 3 bedrooms, with 131.52 m²"
              description="May 10th Street"
              price={2000}
              favorited={true}
            />

            <Card
              image={{ src: "/images/house.jpg", alt: "House", className: "" }}
              title="House for rent in Maringá, Jardim Iguaçu, with 3 bedrooms, with 131.52 m²"
              description="May 10th Street"
              price={2500}
              favorited={false}
            />

            <Card
              image={{ src: "/images/house.jpg", alt: "House", className: "" }}
              title="House for rent in Maringá, Jardim Iguaçu, with 3 bedrooms, with 131.52 m²"
              description="May 10th Street"
              price={2500}
              favorited={false}
            />
          </div>
        </div>

        <div className="w-full h-full flex-1 max-w-3xl">
          <GoogleMap />
        </div>
      </div>
    </>
  );
}
