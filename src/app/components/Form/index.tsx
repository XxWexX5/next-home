"use client";

import { toast } from "react-toastify";
import { Button } from "../Button";

import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  pretension: string;
  name: string;
  phone: string;
  email: string;
  message: string;
};

interface FormProps {
  handleDialog: (isOpen: boolean) => void;
}

export const Form = ({ handleDialog }: FormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const options = [
    { value: "location", label: "Location" },
    { value: "buy", label: "Buy" },
  ];

  const onSubmit: SubmitHandler<FormData> = () => {
    toast.success("Form was sent successfully!");

    handleDialog(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.substring(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)} - ${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }

    setValue("phone", value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4 mb-4 lg:flex-row">
        <div className="flex flex-1 flex-col gap-2 text-neutral-200">
          <label className="text-neutral-200 text-lg px-7">Pretension</label>

          <div className="border border-neutral-600 inline-flex rounded-full px-3 py-1">
            <select
              id="pretension"
              {...register("pretension", {
                required: "Please select a pretension",
              })}
              className="text-neutral-200 font-normal w-full py-[.38rem]"
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {errors.pretension && (
            <p className="text-red-400 text-lg px-7">
              {errors.pretension.message}
            </p>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-2 text-neutral-200">
          <label className="text-neutral-200 text-lg px-7" htmlFor="name">
            Name
          </label>

          <div className="border border-neutral-600 inline-flex rounded-full px-3 py-[.38rem]">
            <input
              id="name"
              className="w-full h-full text-neutral-200 text-bas py-2 px-4 pr-8 rounded-lg bg-transparent"
              {...register("name", { required: "Name is required" })}
            />
          </div>

          {errors.name && (
            <p className="text-red-400 text-lg px-7">{errors.name.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-4 lg:flex-row">
        <div className="flex flex-1 flex-col gap-2 text-neutral-200">
          <label htmlFor="phone" className="text-neutral-200 text-lg px-7">
            Phone
          </label>

          <div className="border border-neutral-600 inline-flex rounded-full px-3 py-[.38rem]">
            <input
              id="phone"
              type="tel"
              className="w-full h-full text-neutral-200 text-bas py-2 px-4 pr-8 rounded-lg bg-transparent"
              placeholder="(99) 99999-9999"
              {...register("phone", { required: "Phone is required" })}
              onChange={handleInputChange}
            />
          </div>

          {errors.phone && (
            <p className="text-red-400 text-lg px-7">{errors.phone.message}</p>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-2 text-neutral-200">
          <label htmlFor="email" className="text-neutral-200 text-lg px-7">
            Mail
          </label>

          <div className="border border-neutral-600 inline-flex rounded-full px-3 py-[.38rem]">
            <input
              id="email"
              type="email"
              className="w-full h-full text-neutral-200 text-bas py-2 px-4 pr-8 rounded-lg bg-transparent"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
          </div>

          {errors.email && (
            <p className="text-red-400 text-lg px-7">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="flex gap-4 mb-4">
        <div className="flex flex-1 flex-col gap-2 text-neutral-200">
          <label htmlFor="message" className="text-neutral-200 text-lg px-7">
            Message
          </label>

          <div className="border border-neutral-600 inline-flex rounded-2xl px-3 py-[.38rem] h-[8rem]">
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              className="w-full h-full text-neutral-200 text-bas py-2 px-4 pr-8 rounded-lg bg-transparent resize-none"
            />
          </div>

          {errors.message && (
            <p className="text-red-400 text-lg px-7">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-1 flex-col gap-2 text-neutral-200 mt-3">
          <Button.Primary type="submit">Send</Button.Primary>
        </div>
      </div>
    </form>
  );
};
