import { Button } from "./components/Button";
import { Logo } from "./components/Logo";

export default function Home() {
  return (
    <>
      <Button.Outline>Search</Button.Outline>

      <div className="max-w-20">
        <Logo />
      </div>
    </>
  );
}
