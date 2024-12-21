import { Button } from "./components/Button";
import { Logo } from "./components/Logo";
import { Search } from "./components/Search";

export default function Home() {
  return (
    <>
      <Button.Outline>Search</Button.Outline>

      <div className="max-w-20">
        <Logo />
      </div>

      <Search />
    </>
  );
}
