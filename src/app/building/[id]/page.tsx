import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { Header } from "@/app/components/Header";
import { Carrousel } from "@/app/components/ImageCarousel";

import { BiSquareRounded } from "react-icons/bi";
import { BsPersonWalking } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import { PiMapPinAreaFill } from "react-icons/pi";
import { FaBath, FaBed, FaCar } from "react-icons/fa";

import { ItemDescription } from "./components/ItemDescription";
import { Check } from "./components/ItemCheck";

interface BuildingPageProps {
  params: {
    id: string;
  };
}

export default function Building({ params }: BuildingPageProps) {
  const { id } = params;

  const latitude = -23.561684;
  const longitude = -46.655981;

  console.log(id);

  const address =
    "Rua Sal da Terra, Conjunto Residencial José Bonifácio, São Paulo, São Paulo- CEP 08257140";

  const encodedAddress = encodeURIComponent(address);

  const googleMapsUrl = `https://www.google.com/maps?q=${encodedAddress}`;

  const streetViewUrl = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${latitude},${longitude}`;

  return (
    <>
      <Header />

      <div className="w-full overflow-hidden relative">
        <Carrousel />
      </div>

      <Container>
        <div className="flex flex-col max-w-xl gap-4 py-10 lg:flex-row lg:py-20">
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

        <div className="space-y-10 lg:space-y-20">
          <div className="space-y-4">
            <h2 className="text-neutral-200 font-bold text-lg">Highlights</h2>

            <div className="flex justify-between gap-1 lg:justify-start">
              <ItemDescription
                title="Total"
                description="42.22 ft²"
                image={<BiSquareRounded className="fill-neutral-200" />}
              />

              <ItemDescription
                title="Bed"
                description="2"
                image={<FaBed className="fill-neutral-200" />}
              />

              <ItemDescription
                title="Bath"
                description="1"
                image={<FaBath className="fill-neutral-200" />}
              />

              <ItemDescription
                title="Parking"
                description="1"
                image={<FaCar className="fill-neutral-200" />}
              />
            </div>
          </div>

          <div className="space-y-2 lg:space-y-2">
            <h2 className="text-neutral-200 font-bold text-lg">
              About the Property
            </h2>

            <p className="text-neutral-200">Schedule a visit with us!</p>
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
    </>
  );
}
