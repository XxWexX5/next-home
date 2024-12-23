import Image from "next/image";

interface FavoriteProps {
  isFavorited: boolean;
}

export const Favorite = ({ isFavorited }: FavoriteProps) => {
  return (
    <div className="w-full max-w-[1.85rem]">
      {isFavorited ? (
        <Image
          src="/images/favorite.svg"
          alt="Favorite"
          layout="responsive"
          width={18}
          height={16}
        />
      ) : (
        <Image
          src="/images/unfavorite.svg"
          alt="Favorite"
          layout="responsive"
          width={18}
          height={16}
        />
      )}
    </div>
  );
};
