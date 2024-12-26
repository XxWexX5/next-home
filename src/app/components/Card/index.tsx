import Image from "next/image";

import { Favorite } from "../Favorite";
import Link from "next/link";
import { formatCurrency } from "@/app/utils/formatCurrency";

interface CardProps {
  href: string;
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
  href,
  image,
  title,
  description,
  price,
  favorited,
}: CardProps) => {
  return (
    <Link
      href={href}
      className="w-full max-w-[21rem] mx-auto rounded-2xl shadow-md overflow-hidden transition-opacity lg:hover:opacity-60 xl:mx-0"
    >
      <header className="w-full">
        <div className="w-full h-[21rem]">
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
        <p className="text-neutral-400 truncate" title={title}>
          {title}
        </p>

        <p className="text-neutral-200 truncate" title={description}>
          {description}
        </p>
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
    </Link>
  );
};
