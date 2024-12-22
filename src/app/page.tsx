import { Header } from "./components/Header";
import { Result } from "./components/Result";
import { Container } from "./components/Container";
import { ButtonPrimary } from "./components/Button/components/ButtonPrimary";

export default function Home() {
  return (
    <>
      <Header />

      <div className="border-b border-gray-200 w-full">
        <Container className="flex items-center justify-between py-10">
          <Result />

          <div className="flex gap-3 w-full max-w-sm">
            <ButtonPrimary>Sort</ButtonPrimary>
            <ButtonPrimary>Filter</ButtonPrimary>
          </div>
        </Container>
      </div>
    </>
  );
}
