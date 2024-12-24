import { ReactNode } from "react";

interface ItemDescriptionProps {
  title: string;
  description: string;
  image: ReactNode;
}

export const ItemDescription = ({
  title,
  description,
  image,
}: ItemDescriptionProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[6rem]">
      <h3 className="text-neutral-500 font-bold text-lg text-center">
        {title}
      </h3>

      <div className="flex items-center gap-2">
        {image}

        <p className="text-neutral-200">{description}</p>
      </div>
    </div>
  );
};
