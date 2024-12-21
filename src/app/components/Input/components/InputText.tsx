import { InputHTMLAttributes } from "react";

export const InputText = ({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} className="h-full" />;
};
