"use client";

import { useState } from "react";

import Image from "next/image";

import { Container } from "../Container";
import { Button } from "../Button";

import { MdClose, MdHome, MdPhone } from "react-icons/md";

export const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleIsVisible() {
    setIsVisible(!isVisible);
  }

  if (isVisible) {
    return (
      <div className="bg-black/40 w-screen h-screen fixed top-0 left-0">
        <button
          className="absolute top-3 right-3 transition-opacity hover:opacity-60"
          onClick={toggleIsVisible}
        >
          <MdClose size={26} className="text-neutral-400" />
        </button>

        <div className="bg-neutral-full h-28 rounded-b-3xl">
          <Container className="h-full">
            <div className="flex h-full items-center gap-8">
              <Button.Outline className="flex items-center justify-center gap-2">
                <MdHome size={24} />
                Home
              </Button.Outline>

              <Button.Outline className="flex items-center justify-center gap-2">
                <MdPhone size={24} />
                Contact
              </Button.Outline>
            </div>
          </Container>
        </div>
      </div>
    );
  }

  return (
    <button
      className="size-6 hidden transition-opacity hover:opacity-60 md:block"
      onClick={toggleIsVisible}
    >
      <Image
        src="/images/menu.svg"
        width={21}
        height={21}
        layout="responsive"
        alt="Menu"
      />
    </button>
  );
};
