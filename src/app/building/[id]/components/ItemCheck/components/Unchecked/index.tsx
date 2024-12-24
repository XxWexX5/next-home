import { FaCross } from "react-icons/fa";

interface UncheckedProps {
  title: string;
}

export const Unchecked = ({ title }: UncheckedProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center size-[30px] rounded-full bg-primary-300 text-neutral-full">
        <FaCross className="fill-neutral-full" />
      </div>

      <p className="text-neutral-200">{title}</p>
    </div>
  );
};
