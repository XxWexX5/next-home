import Image from "next/image";
import Link from "next/link";

export const Menu = () => {
  return (
    <Link
      href="#"
      className="size-6 hidden transition-opacity hover:opacity-60 md:block"
    >
      <Image
        src="/images/menu.svg"
        width={21}
        height={21}
        layout="responsive"
        alt="Menu"
      />
    </Link>
  );
};
