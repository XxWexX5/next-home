import React, { createContext, useContext, useState, ReactNode } from "react";

import { data } from "../data/buildings";

interface Building {
  Id: number;
  DateListed: string;
  Title: string;
  Description: string;
  Sale_Price: number;
  ThumbnailURL: string;
  PictureURL: string;
  Location: string;
  Sqft: number;
  Bedrooms: number;
  Bathrooms: number;
  Parking: number;
  YearBuilt: number;
}

interface BuildingsContextProps {
  buildings: Building[];
  setBuildings: (building: Building[]) => void;
  handleBuilding: (id: number) => void;
  building: Building;
  search: string;
  setSearch: (search: string) => void;
}

const BuildingsContext = createContext<BuildingsContextProps | undefined>(
  undefined
);

export const BuildingsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [buildings, setBuildings] = useState<Building[]>(data);
  const [building, setBuilding] = useState<Building>({} as Building);
  const [search, setSearch] = useState("");

  function handleBuilding(id: number) {
    const build = buildings.filter((build) => build.Id === id)[0];

    setBuilding(build);
  }

  return (
    <BuildingsContext.Provider
      value={{
        buildings,
        setBuildings,
        handleBuilding,
        building,
        search,
        setSearch,
      }}
    >
      {children}
    </BuildingsContext.Provider>
  );
};

export const useBuildings = () => {
  const context = useContext(BuildingsContext);
  if (!context) {
    throw new Error("useBuildings must be used within a BuildingsProvider");
  }
  return context;
};
