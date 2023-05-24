"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="w-full shadow-xl bg-[#322D35]">
      <div className="flex flex-col">
        <div className="hidden sm:flex justify-center pt-1">
          <Image
            src="/Group22.png"
            width={300}
            height={32}
            alt="Fretboard Journal and Old Town School present"
          />
        </div>
        <Link className="flex justify-center mt-1.5" href="/">
          <Image
            src="/Fslogo.png"
            alt="Fretboard Summit Logo"
            width={600}
            height={48}
            priority
          />
        </Link>
        <div className="hidden sm:flex justify-center">
          <ul className="hidden sm:flex text-[#4DB3AC]">
            <Link href="">
              <li className="mx-2 p-2 uppercase hover:border-b text-xl">
                Tickets
              </li>
            </Link>
            <Link href="/music">
              <li className="mx-2 p-2 uppercase hover:border-b text-xl">
                Music
              </li>
            </Link>
            <Link href="/luthiers">
              <li className="mx-2 p-2 uppercase hover:border-b text-xl">
                Luthiers
              </li>
            </Link>
            <Link href="/directions">
              <li className="mx-2 p-2 uppercase hover:border-b text-xl">
                Getting Here
              </li>
            </Link>
          </ul>
        </div>
        <div
          onClick={() => handleNav(!menuOpen)}
          className="absolute top-5 left-5 sm:hidden cursor-pointer"
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#322D35] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div
            onClick={() => handleNav(!menuOpen)}
            className="sm:hidden cursor-pointer pl-24"
          >
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <Link className="flex justify-center py-4" href="/">
            <Image
              src="/fslogo.png"
              alt="Fretboar Summit Logo"
              className=""
              width={300}
              height={48}
              priority
            />
          </Link>

          <ul className="text-[#4DB3AC]">
            <Link href="">
              <li
                onClick={() => handleNav(!menuOpen)}
                className="py-4 uppercase hover:border-b text-xl"
              >
                Tickets
              </li>
            </Link>
            <Link href="/music">
              <li
                onClick={() => handleNav(!menuOpen)}
                className="py-4 uppercase hover:border-b text-xl"
              >
                Music
              </li>
            </Link>
            <Link href="/luthiers">
              <li
                onClick={() => handleNav(!menuOpen)}
                className="py-4 uppercase hover:border-b text-xl"
              >
                Luthiers
              </li>
            </Link>
            <Link href="/directions">
              <li
                onClick={() => handleNav(!menuOpen)}
                className="py-4 uppercase hover:border-b text-xl"
              >
                Getting Here
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
