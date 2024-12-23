import Image from "next/image";

import { Favorite } from "../Favorite";

interface CardProps {
  image: {
    src: string;
    alt: string;
    className?: string;
  };
  title: string;
  description: string;
  price: number;
  favorited: boolean;
}

export const Card = ({
  image,
  title,
  description,
  price,
  favorited,
}: CardProps) => {
  function formatCurrency(value: string) {
    const number = parseFloat(value);
    if (isNaN(number)) return "";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(number);
  }

  return (
    <div className="w-full max-w-[21rem] rounded-2xl shadow-md overflow-hidden">
      <header className="w-full">
        <div className="w-full">
          <Image
            src={image.src}
            alt={image.src}
            className={image.className}
            width={273}
            height={151}
            layout="responsive"
          />
        </div>
      </header>

      <section className="p-6 space-y-6">
        <p className="text-neutral-400">{title}</p>

        <p className="text-neutral-200">{description}</p>
      </section>

      <footer className="flex justify-between px-6 pb-6">
        <p className="text-neutral-200">
          <strong className="text-xl">
            {formatCurrency(price.toString())}
          </strong>{" "}
          <span className="text-neutral-500 text-sm">/ month</span>
        </p>

        <Favorite isFavorited={favorited} />
      </footer>
    </div>
  );
};
