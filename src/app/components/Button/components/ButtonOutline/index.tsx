import Link from "next/link";
import { ReactNode } from "react";

interface ButtonOutlineProps {
  isLink?: boolean;
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
}

export const ButtonOutline = ({
  isLink,
  href,
  className,
  target,
  rel,
  children,
  ...props
}: ButtonOutlineProps) => {
  if (isLink) {
    return (
      <Link
        href={href || ""}
        target={target}
        rel={rel}
        className={`w-full uppercase border-2 border-primary-300 text-primary-300 text-lg font-medium py-2 rounded-full transition-all hover:bg-primary-300 hover:text-neutral-full ${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`w-full uppercase border-2 border-primary-300 text-primary-300 text-lg font-medium py-2 rounded-full transition-all hover:bg-primary-300 hover:text-neutral-full ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
