import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src="/images/logo.svg"
      alt="Logo Next Home"
      layout="responsive"
      width={71}
      height={44}
    />
  );
};
