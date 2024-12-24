import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { Header } from "@/app/components/Header";
import { Carrousel } from "@/app/components/ImageCarousel";
import { BsPersonWalking } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";

import { PiMapPinAreaFill } from "react-icons/pi";

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
      </Container>
    </>
  );
}
