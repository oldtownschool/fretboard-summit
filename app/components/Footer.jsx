"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full bg-[#F0E5D1] py-8">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <Image
            src="/Group25.png"
            width={250}
            height={32}
            alt="Fretboard Journal Guitar Pick Logo"
          />
        </div>
        <div className="flex justify-center pt-4">
          <Image
            className="hidden md:flex"
            src="/borderRed1.png"
            alt="border"
            width={200}
            height={5}
            style={{ alignSelf: "center" }}
          />
          <h4 className="text-3xl tracking-wider	uppercase text-[#BE4338] font-handbill font-normal md:mx-4">
            Fretboard summit is brought to you by
          </h4>
          <Image
            className="hidden md:flex"
            src="/borderRed1.png"
            alt="border"
            width={200}
            height={5}
            style={{ alignSelf: "center" }}
          />
        </div>
        <div className="flex justify-center pt-4">
          <Image
            className="flex mx-2"
            src="/FJlogo.png"
            alt="border"
            width={250}
            height={150}
            style={{ alignSelf: "center" }}
          />
          <Image
            className="flex mx-2 sm:ml-12"
            src="/OTS_2L_left_horz_black1.png"
            alt="border"
            width={350}
            height={150}
            style={{ alignSelf: "center" }}
          />
        </div>

        <div className="flex justify-center pt-4">
          <Image
            className="hidden md:flex"
            src="/borderRed2.png"
            alt="border"
            width={350}
            height={5}
            style={{ alignSelf: "center" }}
          />
          <h4 className="text-3xl tracking-widest	uppercase text-[#BE4338] font-handbill font-normal md:mx-4">
            Sponsors
          </h4>
          <Image
            className="hidden md:flex"
            src="/borderRed2.png"
            alt="border"
            width={350}
            height={5}
            style={{ alignSelf: "center" }}
          />
        </div>

        <div className="flex justify-center pt-4">
          <Image
            className="flex mx-2"
            src="/image5.png"
            alt="Henriksen"
            width={200}
            height={150}
            style={{ alignSelf: "center", mixBlendMode: "multiply" }}
          />
          <Image
            className="flex mx-2 sm:ml-12"
            src="/image6.png"
            alt="Martin&amp;Co"
            width={200}
            height={150}
            style={{ alignSelf: "center", mixBlendMode: "multiply" }}
          />
          <Image
            className="flex mx-2 sm:ml-12"
            src="/image7.png"
            alt="Santa Cruz"
            width={200}
            height={150}
            style={{ alignSelf: "center", mixBlendMode: "multiply" }}
          />
        </div>

        <div className="flex justify-center pt-4">
          <Image
            className="flex mx-2"
            src="/image8.png"
            alt="Collings Guitar"
            width={150}
            height={150}
            style={{ alignSelf: "center" }}
          />
          <Image
            className="flex mx-2 sm:ml-12"
            src="/image9.png"
            alt="Yamaha"
            width={150}
            height={150}
            style={{ alignSelf: "center", mixBlendMode: "multiply" }}
          />
        </div>

        <div className="flex justify-center pt-4">
          <Image
            className="flex mx-2"
            src="/image10.png"
            alt="Bourgeors"
            width={100}
            height={150}
            style={{ alignSelf: "center", mixBlendMode: "multiply" }}
          />
          <Image
            className="flex mx-2 sm:ml-12"
            src="/image11.png"
            alt="Rode"
            width={100}
            height={150}
            style={{ alignSelf: "center", mixBlendMode: "multiply" }}
          />
          <Image
            className="flex mx-2 sm:ml-12"
            src="/image13.png"
            alt="Galloup"
            width={100}
            height={150}
            style={{ alignSelf: "center", mixBlendMode: "multiply" }}
          />
          <Image
            className="flex mx-2 sm:ml-12"
            src="/taylorlogo.png"
            alt="Taylor"
            width={100}
            height={150}
            style={{ alignSelf: "center", mixBlendMode: "multiply" }}
          />
          <Image
            className="flex mx-2 sm:ml-12"
            src="/lake-pine-logo-primary-dark-rgb-500px-w-72ppi1.png"
            alt="Lake and Pine"
            width={100}
            height={150}
            style={{ alignSelf: "center", mixBlendMode: "multiply" }}
          />
        </div>

        <div className="flex justify-center pt-4">
          <Image
            className="flex mx-2"
            src="/Bruce-Guitars-Banner-WEB1.png"
            alt="Bruce Guitars.png"
            width={75}
            height={150}
            style={{ alignSelf: "center", mixBlendMode: "multiply" }}
          />
          <Image
            className="flex mx-2 sm:ml-12"
            src="/image14.png"
            alt="Acoustic Coffee Co"
            width={75}
            height={150}
            style={{ alignSelf: "center", mixBlendMode: "multiply" }}
          />
          <Image
            className="flex mx-2 sm:ml-12"
            src="/image15.png"
            alt="D'Addario"
            width={75}
            height={150}
            style={{ alignSelf: "center", mixBlendMode: "multiply" }}
          />
          <Image
            className="flex mx-2 sm:ml-12"
            src="/image12.png"
            alt="Thompson"
            width={75}
            height={150}
            style={{ alignSelf: "center", mixBlendMode: "multiply" }}
          />
          <Image
            className="flex mx-2 sm:ml-12"
            src="/image16.png"
            alt="Pacific Rim Tonewood"
            width={75}
            height={150}
            style={{ alignSelf: "center", mixBlendMode: "difference" }}
          />
          <Image
            className="flex mx-2 sm:ml-12"
            src="/image17.png"
            alt="Acoustic Tuesday"
            width={75}
            height={150}
            style={{ alignSelf: "center", mixBlendMode: "multiply" }}
          />
        </div>

        <div className="flex justify-center pt-4">
          <Image
            className="hidden md:flex"
            src="/borderRedbtm.png"
            alt="border"
            width={850}
            height={5}
            style={{ alignSelf: "center" }}
          />
        </div>

        <div className="flex justify-center pt-4">
          <h4 className="text-3xl tracking-widest	uppercase text-[#BE4338] font-handbill font-normal md:mx-4">
            Follow us
          </h4>
        </div>
        <div className="flex justify-center pt-4">
          <Link href="https://www.facebook.com/fretboardsummit">
            <Image
              className="flex"
              src="/socialFb.png"
              alt="border"
              width={50}
              height={50}
              style={{ alignSelf: "center" }}
            />
          </Link>
          <Link href="https://www.instagram.com/fretboardsummit">
            <Image
              className="flex ml-6"
              src="/socialInsta.png"
              alt="border"
              width={50}
              height={50}
              style={{ alignSelf: "center" }}
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col text-center  py-4">
        <ul className="flex flex-row justify-center text-[#4DB3AC]">
          <Link href="">
            <li className="mx-2 p-2 uppercase hover:text-[#4DB3AC]">Tickets</li>
          </Link>
          <Link href="/music">
            <li className="mx-2 p-2 uppercase hover:text-[#4DB3AC]">Music</li>
          </Link>
          <Link href="/luthiers">
            <li className="mx-2 p-2 uppercase hover:text-[#4DB3AC]">
              Luthiers
            </li>
          </Link>
          <Link href="/directions">
            <li className="mx-2 p-2 uppercase hover:text-[#4DB3AC]">
              Getting Here
            </li>
          </Link>
        </ul>
        <p className="pt-6 text-slate-700">
          ©2023 Old Town School of Folk Music
        </p>
      </div>
    </div>
  );
};
