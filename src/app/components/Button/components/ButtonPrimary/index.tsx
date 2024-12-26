import { ReactNode } from "react";

import Link from "next/link";

interface ButtonPrimaryProps {
  isLink?: boolean;
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
  type?: string;
  onClick?: () => void;
  children: ReactNode;
}

export const ButtonPrimary = ({
  isLink,
  href,
  className,
  target,
  rel,
  children,
  type,
  onClick,
  ...props
}: ButtonPrimaryProps) => {
  if (isLink) {
    return (
      <Link
        href={href || ""}
        target={target}
        rel={rel}
        className={`w-full uppercase border-2 border-primary-300 bg-primary-300 text-neutral-full font-medium text-base py-2 rounded-full transition-all hover:bg-transparent hover:border-primary-300 hover:text-primary-300 ${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full uppercase border-2 border-primary-300 bg-primary-300 text-neutral-full font-medium text-base py-2 rounded-full transition-all hover:bg-transparent hover:border-primary-300 hover:text-primary-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
