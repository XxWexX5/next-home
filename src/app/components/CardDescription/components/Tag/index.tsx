import { useBuildings } from "@/app/context/BuildingsContext";

export const Tag = () => {
  const { building } = useBuildings();

  return (
    <div className="text-neutral-400 border border-neutral-400 inline-block py-[.15rem] px-3 rounded-full">
      {`AP${building.Id}`}
    </div>
  );
};
