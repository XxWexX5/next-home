"use client";

import { useState } from "react";

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
}

export const Select = ({ options, optionDisabled, className }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="relative w-full">
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className={twMerge(
          `w-full h-full text-primary-300 text-base font-medium py-2 px-4 pr-8 rounded-lg appearance-none cursor-pointer bg-transparent ${className}`
        )}
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
