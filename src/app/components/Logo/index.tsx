import Image from "next/image";

import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="w-full h-full block transition-opacity hover:opacity-60"
    >
      <Image
        src="/images/logo.svg"
        alt="Logo Next Home"
        layout="responsive"
        width={71}
        height={44}
        className="w-full h-full"
      />
    </Link>
  );
};
