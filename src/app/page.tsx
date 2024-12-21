import { Button } from "./components/Button";
import { Logo } from "./components/Logo";
import { Search } from "./components/Search";
import { Input } from "./components/Input";

export default function Home() {
  return (
    <>
      <Button.Outline>Search</Button.Outline>

      <div className="max-w-20">
        <Logo />
      </div>

      <Search />

      <Input.Text type="text" placeholder="Where do you want to live?" />
    </>
  );
}
