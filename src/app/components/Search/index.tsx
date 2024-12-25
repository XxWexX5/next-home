import { Select } from "../Select";
import { Input } from "../Input";

export const Search = () => {
  const options = [
    { value: "sp", label: "São Paulo - SP" },
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
    <div className="w-full inline-flex items-center border border-neutral-700 bg-neutral-full px-4 pr-8 rounded-full h-12">
      <Select options={options} optionDisabled="Select a place" />

      <div className="h-[86%] w-px bg-neutral-700 ml-3 mr-5"></div>

      <Input.Text
        type="text"
        placeholder="Where do you want to live?"
        className=""
      />
    </div>
  );
};
