import { Header } from "@/app/components/Header";
import { Carrousel } from "@/app/components/ImageCarousel";

interface BuildingPageProps {
  params: {
    id: string;
  };
}

export default function Building({ params }: BuildingPageProps) {
  const { id } = params;

  console.log(id);

  return (
    <>
      <Header />

      <div className="w-full h-[25rem] overflow-hidden relative">
        <Carrousel />
      </div>
    </>
  );
}
