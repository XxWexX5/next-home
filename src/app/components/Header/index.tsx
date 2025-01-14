import { Logo } from "../Logo";
import { Search } from "../Search";
import { Container } from "../Container";
import { Menu } from "../Menu";

export const Header = () => {
  return (
    <div className="flex w-full py-6 shadow-md">
      <Container className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-0">
        <div className="w-full max-w-[5rem]">
          <Logo />
        </div>

        <div className="w-full flex flex-col gap-4 items-center lg:flex-row lg:w-auto lg:items-start">
          <Search />
        </div>

        <Menu />
      </Container>
    </div>
  );
};
