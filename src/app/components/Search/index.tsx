import { Select } from "../Select";
import { Input } from "../Input";

export const Search = () => {
  return (
    <div className="w-full inline-flex items-center border border-neutral-700 bg-neutral-full px-4 pr-8 rounded-full h-12">
      <Select />

      <div className="h-[86%] w-px bg-neutral-700 ml-3 mr-5"></div>

      <Input.Text
        type="text"
        placeholder="Where do you want to live?"
        className=""
      />
    </div>
  );
};
