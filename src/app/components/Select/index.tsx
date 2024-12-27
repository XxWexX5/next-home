"use client";

import { FaChevronDown } from "react-icons/fa";

import { twMerge } from "tailwind-merge";

type OptionType = {
  value: string;
  label: string;
};

interface SelectProps {
  options: OptionType[];
  optionDisabled: string;
  className?: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
}

export const Select = ({
  options,
  optionDisabled,
  className,
  id,
  onChange,
  value,
  ...props
}: SelectProps) => {
  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={onChange}
        id={id}
        className={twMerge(
          `w-full h-full text-primary-300 text-base font-medium py-2 px-4 pr-8 rounded-lg appearance-none cursor-pointer bg-transparent ${className}`
        )}
        {...props}
      >
        <option value="" disabled>
          {optionDisabled}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <FaChevronDown
          size={13}
          className={twMerge(`text-neutral-300 ${className}`)}
        />
      </div>
    </div>
  );
};
