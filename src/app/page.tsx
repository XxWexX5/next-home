import { Header } from "./components/Header";
import { Result } from "./components/Result";
import { ButtonPrimary } from "./components/Button/components/ButtonPrimary";
import { GoogleMap } from "./components/Map";

export default function Home() {
  return (
    <>
      <Header />

      <div className="flex h-[calc(100%-6rem)]">
        <div className="border-b border-gray-200 w-full">
          <div className="flex items-center justify-between px-8 py-10">
            <Result />

            <div className="flex gap-3 w-full max-w-sm">
              <ButtonPrimary>Sort</ButtonPrimary>
              <ButtonPrimary>Filter</ButtonPrimary>
            </div>
          </div>
        </div>

        <div className="w-full h-full">
          <GoogleMap />
        </div>
      </div>
    </>
  );
}
