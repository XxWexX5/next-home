import Link from "next/link";

import { Container } from "../Container";
import { Logo } from "../Logo";

import { BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
import { MdMail } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="bg-gray-200 py-12">
      <Container className="flex flex-col gap-10 lg:flex-row lg:gap-28">
        <div className="flex-1">
          <div className="w-full max-w-[5.5rem] mb-6">
            <Logo />
          </div>

          <div className="space-y-6">
            <p className="text-neutral-200">
              <strong>
                Real Estate Option | Sales Center | CRECI 4208J - Matrix
              </strong>
              <br />
              SALES - Central: (44) 3033-1300 <br />
              Avenida Doutor Luiz Teixeira Mendes, <br />
              1356 - Zone 05 - Maringá/PR
            </p>

            <p className="text-neutral-200">
              <strong>
                Real Estate Option | Sales Center | CRECI 4208J - Matrix
              </strong>
              <br />
              SALES - Central: (44) 3033-1300 <br />
              Avenida Doutor Luiz Teixeira Mendes, <br />
              1356 - Zone 05 - Maringá/PR
            </p>

            <p className="text-neutral-200">
              <strong>
                Real Estate Option | Sales Center | CRECI 4208J - Matrix
              </strong>
              <br />
              SALES - Central: (44) 3033-1300 <br />
              Avenida Doutor Luiz Teixeira Mendes, <br />
              1356 - Zone 05 - Maringá/PR
            </p>
          </div>
        </div>

        <ul className="space-y-1">
          <li>
            <Link
              href="#"
              className="text-neutral-200 transition-opacity hover:opacity-60"
            >
              Talk to us
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="text-neutral-200 transition-opacity hover:opacity-60"
            >
              I want to advertise
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="text-neutral-200 transition-opacity hover:opacity-60"
            >
              who we are
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="text-neutral-200 transition-opacity hover:opacity-60"
            >
              website map
            </Link>
          </li>
        </ul>

        <div className="space-y-3">
          <ul className="space-y-1">
            <li>
              <Link
                href="#"
                className="text-neutral-200 transition-opacity hover:opacity-60"
              >
                Owner&apos;s area
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="text-neutral-200 transition-opacity hover:opacity-60"
              >
                Tenant area
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="text-neutral-200 transition-opacity hover:opacity-60"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>

          <ul className="flex items-center gap-4">
            <Link
              href="#"
              className="text-neutral-200 transition-opacity hover:opacity-60"
            >
              <MdMail size={20} className="fill-neutral-200" />
            </Link>

            <Link
              href="#"
              className="text-neutral-200 transition-opacity hover:opacity-60"
            >
              <BsYoutube size={20} className="fill-neutral-200" />
            </Link>

            <Link
              href="#"
              className="text-neutral-200 transition-opacity hover:opacity-60"
            >
              <BsTiktok size={17} className="fill-neutral-200" />
            </Link>

            <Link
              href="#"
              className="text-neutral-200 transition-opacity hover:opacity-60"
            >
              <BsInstagram size={17} className="fill-neutral-200" />
            </Link>
          </ul>
        </div>
      </Container>
    </div>
  );
};
