import { Header } from "./components/Header";
import { Result } from "./components/Result";
import { ButtonPrimary } from "./components/Button/components/ButtonPrimary";
import { GoogleMap } from "./components/Map";
import { CircleIndicator } from "./components/CircleIndicator";
import { Card } from "./components/Card";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { WhatsAppButton } from "./components/Whatsapp";

export default function Home() {
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
            <IoIosArrowBack size={24} className="text-neutral-700" />

            <CircleIndicator.Primary>1</CircleIndicator.Primary>

            <CircleIndicator.Outline>2</CircleIndicator.Outline>

            <CircleIndicator.Outline>3</CircleIndicator.Outline>

            <IoIosArrowForward
              size={24}
              className="text-neutral-300 cursor-pointer transition-opacity hover:opacity-60"
            />
          </div>

          <div className="flex flex-wrap gap-6 gap-y-10 px-8 justify-center items-center md:justify-start">
            <Card
              href="/building/123"
              image={{ src: "/images/house.jpg", alt: "House", className: "" }}
              title="House for rent in Maringá, Jardim Iguaçu, with 3 bedrooms, with 131.52 m²"
              description="May 10th Street"
              price={1100}
              favorited={true}
            />

            <Card
              href="/building/456"
              image={{ src: "/images/house.jpg", alt: "House", className: "" }}
              title="House for rent in Maringá, Jardim Iguaçu, with 3 bedrooms, with 131.52 m²"
              description="May 10th Street"
              price={2000}
              favorited={true}
            />

            <Card
              href="/building/789"
              image={{ src: "/images/house.jpg", alt: "House", className: "" }}
              title="House for rent in Maringá, Jardim Iguaçu, with 3 bedrooms, with 131.52 m²"
              description="May 10th Street"
              price={2500}
              favorited={false}
            />

            <Card
              href="/building/321"
              image={{ src: "/images/house.jpg", alt: "House", className: "" }}
              title="House for rent in Maringá, Jardim Iguaçu, with 3 bedrooms, with 131.52 m²"
              description="May 10th Street"
              price={2500}
              favorited={false}
            />
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
