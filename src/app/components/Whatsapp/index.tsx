import Link from "next/link";

import { BsWhatsapp } from "react-icons/bs";

interface WhatsappProps {
  phoneNumber: number;
}

export const WhatsAppButton = ({ phoneNumber }: WhatsappProps) => {
  const message = "Hello! I'd like to know more about the house.";

  const whatsAppURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Link
      href={whatsAppURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 flex items-center justify-center size-[50px] bg-green-500 border-2 border-green-500 text-neutral-full shadow-md rounded-full hover:bg-transparent group transition-all"
    >
      <BsWhatsapp
        className="fill-neutral-full group-hover:fill-green-500 group-hover:border-green-500 transition-all"
        size={24}
      />
    </Link>
  );
};
