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
    <nav className="fixed w-full h-48 shadow-xl bg-[#322D35]">
      <div className="flex flex-col">
        <Link className="flex justify-center pt-4" href="/">
          <Image
            src="/fslogo.png"
            alt="Fretboar Summit Logo"
            className=""
            width={400}
            height={48}
            priority
          />
        </Link>
        <div className="hidden sm:flex justify-center">
          <ul className="hidden sm:flex">
            <Link href="/concerts">
              <li className="mx-2 p-2 uppercase hover:border-b text-xl">
                Concerts
              </li>
            </Link>
            <Link href="/workshops">
              <li className="mx-2 p-2 uppercase hover:border-b text-xl">
                Workshops
              </li>
            </Link>
            <Link href="/luthiers">
              <li className="mx-2 p-2 uppercase hover:border-b text-xl">
                Luthiers
              </li>
            </Link>
            <Link href="/schedule">
              <li className="mx-2 p-2 uppercase hover:border-b text-xl">
                Schedule
              </li>
            </Link>
            <Link href="/directions">
              <li className="mx-2 p-2 uppercase hover:border-b text-xl">
                Getting Here
              </li>
            </Link>
            <Link href="">
              <li className="mx-2 p-2 uppercase hover:border-b text-xl">
                Buy Tickets
              </li>
            </Link>
          </ul>
        </div>
        <div
          onClick={() => handleNav(!menuOpen)}
          className="sm:hidden cursor-pointer pl-24"
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
          <ul>
            <Link href="/concerts">
              <li
                onClick={() => handleNav(!menuOpen)}
                className="py-4 uppercase hover:border-b text-xl"
              >
                Concerts
              </li>
            </Link>
            <Link href="/workshops">
              <li
                onClick={() => handleNav(!menuOpen)}
                className="py-4 uppercase hover:border-b text-xl"
              >
                Workshops
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
            <Link href="/schedule">
              <li
                onClick={() => handleNav(!menuOpen)}
                className="py-4 uppercase hover:border-b text-xl"
              >
                Schedule
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
            <Link href="">
              <li
                onClick={() => handleNav(!menuOpen)}
                className="py-4 uppercase hover:border-b text-xl"
              >
                Buy Tickets
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
