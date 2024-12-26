import { useBuildings } from "@/app/context/BuildingsContext";

export const Result = () => {
  const { buildings } = useBuildings();

  return (
    <div className="flex flex-col leading-4">
      <p className="text-neutral-500">We find {buildings.length} results to:</p>

      <h3 className="text-neutral-200 font-medium text-lg">
        Places in the world
      </h3>
    </div>
  );
};
