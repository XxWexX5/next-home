import { Select } from "../Select";
import { Input } from "../Input";

import { useBuildings } from "@/app/context/BuildingsContext";
import { Button } from "../Button";
import { useEffect, useState } from "react";

import { data } from "@/app/data/buildings";

export const Search = () => {
  const { setBuildings, search, setSearch } = useBuildings();

  const [place, setPlace] = useState("");

  useEffect(() => {
    if (place) {
      const buildingsFiltered = data.filter((building) =>
        building.Location.toLocaleLowerCase().includes(
          place.toLocaleLowerCase()
        )
      );

      return setBuildings(buildingsFiltered);
    }

    return setBuildings(data);
  }, [place]);

  function handleSearch() {
    const buildingsFiltered = data.filter((building) =>
      building.Location.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    return setBuildings(buildingsFiltered);
  }

  const options = [
    { value: "", label: "All" },
    { value: "sao paulo", label: "Sao Paulo" },
    { value: "paris", label: "Paris" },
    { value: "barcelona", label: "Barcelona" },
    { value: "cartagena", label: "Cartagena" },
    { value: "california", label: "California" },
    { value: "ontario", label: "Ontario" },
    { value: "alberta", label: "Alberta" },
    { value: "saskatchewan", label: "Saskatchewan" },
    { value: "seattle", label: "Seattle" },
  ];

  return (
    <div className="flex flex-col gap-3 items-center lg:flex-row ">
      <div className="w-full inline-flex items-center border border-neutral-700 bg-neutral-full px-4 pr-8 rounded-full h-12">
        <Select
          options={options}
          optionDisabled="Select a place"
          value={place}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setPlace(e.target.value)
          }
        />

        <div className="h-[86%] w-px bg-neutral-700 ml-3 mr-5"></div>

        <Input.Text
          type="text"
          placeholder="Where do you want to live?"
          className=""
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="w-36">
        <Button.Primary onClick={handleSearch}>Search</Button.Primary>
      </div>
    </div>
  );
};
