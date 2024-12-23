"use client";

import { useState } from "react";

import { FaChevronDown } from "react-icons/fa";

export const Select = () => {
  const [selectedOption, setSelectedOption] = useState("");

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
    <div className="relative w-64">
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="w-full h-full text-primary-300 text-base font-medium py-2 px-4 pr-8 rounded-lg appearance-none cursor-pointer bg-transparent"
      >
        <option value="" disabled>
          Select a place
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <FaChevronDown size={13} className="text-neutral-300" />
      </div>
    </div>
  );
};
