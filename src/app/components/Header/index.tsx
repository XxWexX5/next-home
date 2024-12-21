import Image from "next/image";

import { Logo } from "../Logo";
import { Search } from "../Search";
import { Button } from "../Button";
import { Container } from "../Container";

export const Header = () => {
  return (
    <div className="flex w-full py-6 shadow-md">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
        <div className="max-w-20">
          <Logo />
        </div>

        <div className="w-full flex flex-col gap-4 items-center md:flex-row md:w-auto md:items-start">
          <Search />

          <Button.Primary>Search</Button.Primary>
        </div>

        <div className="size-6 hidden md:block">
          <Image
            src="/images/menu.svg"
            width={21}
            height={21}
            layout="responsive"
            alt="Menu"
          />
        </div>
      </Container>
    </div>
  );
};
