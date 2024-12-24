import { FaCheck } from "react-icons/fa";

interface CheckedProps {
  title: string;
}

export const Checked = ({ title }: CheckedProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center size-[30px] rounded-full bg-primary-300 text-neutral-full">
        <FaCheck className="fill-neutral-full" />
      </div>

      <p className="text-neutral-200">{title}</p>
    </div>
  );
};
