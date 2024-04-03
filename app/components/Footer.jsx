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
            className="hidden md:flex self-center"
            src="/borderRed1.png"
            alt="border"
            width={200}
            height={5}
          />
          <h4 className="text-2xl sm:text-3xl tracking-wider	uppercase text-[#BE4338] font-handbill font-normal md:mx-4">
            Fretboard summit is brought to you by
          </h4>
          <Image
            className="hidden md:flex self-center"
            src="/borderRed1.png"
            alt="border"
            width={200}
            height={5}
          />
        </div>
        <div className="flex justify-center pt-4 image-container">
            <Image
              className="flex mx-2 self-center image"
              src="/FJlogo.png"
              alt="border"
              width={175}
              height={150}
            />
            <Image
              className="flex mx-2 sm:ml-12 self-center image"
              src="/OTS_2L_left_horz_black1.png"
              alt="border"
              width={200}
              height={150}
            />
        </div>

        <div className="flex justify-center pt-4">
          <Image
            className="hidden md:flex self-center"
            src="/borderRed2.png"
            alt="border"
            width={350}
            height={5}
          />
          <h4 className="text-3xl tracking-widest	uppercase text-[#BE4338] font-handbill font-normal md:mx-4">
            Sponsors
          </h4>
          <Image
            className="hidden md:flex self-center"
            src="/borderRed2.png"
            alt="border"
            width={350}
            height={5}
          />
        </div>

        <div className="flex justify-center pt-4 image-container">
          <Image
            className="flex mx-2 self-center mix-blend-multiply image-md"
            src="/image5.png"
            alt="Henriksen"
            width={120}
            height={150}
          />
          <Image
            className="flex mx-2 sm:ml-12  self-center mix-blend-multiply image-md"
            src="/image6.png"
            alt="Martin&amp;Co"
            width={120}
            height={150}
          />
          <Image
            className="flex mx-2 sm:ml-12 self-center mix-blend-multiply image-md"
            src="/image7.png"
            alt="Santa Cruz"
            width={120}
            height={150}
          />
        </div>

        <div className="flex justify-center pt-4 image-container">
          <Image
            className="flex mx-2 self-center image sm:px-6"
            src="/image8.png"
            alt="Collings Guitar"
            width={150}
            height={150}
          />
          <Image
            className="flex mx-2 sm:ml-4 self-center mix-blend-multiply image"
            src="/image9.png"
            alt="Yamaha"
            width={150}
            height={150}
          />
          <Image
          className="flex sm:mx-2 sm:px-6 self-center mix-blend-multiply image"
          src="/Taylor_Web.png"
          alt="Taylor"
          width={100}
          height={150}
          />
          

        </div>

        <div className="flex justify-center pt-4 px-2 image-container">
          <Image
            className="flex sm:mx-2 self-center mix-blend-multiply image-sm"
            src="/image10.png"
            alt="Bourgeors"
            width={75}
            height={150}
          />
          <Image
            className="flex sm:mx-2 sm:ml-12 self-center mix-blend-multiply image-sm"
            src="/image11.png"
            alt="Rode"
            width={75}
            height={150}
          />
          <Image
            className="flex sm:mx-2 sm:ml-12 self-center mix-blend-multiply image-sm"
            src="/image13.png"
            alt="Galloup"
            width={75}
            height={150}
          />
          <Image
            className="flex sm:mx-2 sm:ml-12 self-center mix-blend-multiply image-sm"
            src="/GallagherGuitars_Web.png"
            alt="Gallagher Guitars"
            width={75}
            height={150}
          />
          <Image
            className="flex sm:mx-2 sm:ml-8 self-center mix-blend-multiply image-sm"
            src="/boucher_logo.png"
            alt="Boucher Guitars"
            width={75}
            height={150}
          />
          {/* <Image
            className="flex sm:mx-2 sm:ml-12 self-center image-sm"
            src="/pre-war-logo_FBS-bkg.png"
            alt="Pre War"
            width={75}
            height={150}
          /> */}
          {/* <Image
            className="flex sm:mx-2 ml-2 sm:ml-12 self-center mix-blend-multiply image-sm"
            src="/lake-pine-logo-primary-dark-rgb-500px-w-72ppi1.png"
            alt="Lake and Pine"
            width={75}
            height={150}
          /> */}
        </div>

        <div className="flex justify-center pt-4 px-2 image-container">
          {/* <Image
            className="flex mx-2 self-center mix-blend-multiply image-sm"
            src="/Bruce-Guitars-Banner-WEB1.png"
            alt="Bruce Guitars.png"
            width={60}
            height={150}           
          /> */}
          <Image
            className="flex mx-1 sm:mx-2 sm:ml-12 self-center mix-blend-multiply image-sm"
            src="/image14.png"
            alt="Acoustic Coffee Co"
            width={60}
            height={150}	
          />
          <Image
            className="flex mx-1 sm:mx-2 sm:ml-12 self-center mix-blend-multiply image-sm"
            src="/image15.png"
            alt="D'Addario"
            width={60}
            height={150}
          />
          {/* <Image
            className="flex mx-1 sm:mx-2 sm:ml-12 self-center mix-blend-multiply image-sm"
            src="/image12.png"
            alt="Thompson"
            width={60}
            height={150}
          /> */}
          <Image
            className="flex mx-1 sm:mx-2 sm:ml-12 self-center mix-blend-difference image-sm"
            src="/image16.png"
            alt="Pacific Rim Tonewood"
            width={60}
            height={150}
          />
          {/* <Image
            className="flex mr-2 sm:mx-2 sm:ml-12 self-center mix-blend-multiply image-sm"
            src="/image17.png"
            alt="Acoustic Tuesday"
            width={60}
            height={150}
          /> */}
        </div>

        <div className="flex justify-center pt-4 self-center">
          <Image
            className="hidden md:flex"
            src="/borderRedbtm.png"
            alt="border"
            width={850}
            height={5}
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
              className="flex self-center"
              src="/socialFb.png"
              alt="border"
              width={50}
              height={50}
            />
          </Link>
          <Link href="https://www.instagram.com/fretboardsummit">
            <Image
              className="flex ml-6 self-center"
              src="/socialInsta.png"
              alt="border"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col text-center  py-4">
        <ul className="flex flex-row justify-center text-[#4DB3AC]">
          <Link href="/tickets">
            <li className="sm:mx-2 p-2 uppercase hover:text-[#4DB3AC]">
              Tickets
            </li>
          </Link>
          <Link href="/music">
            <li className="sm:mx-2 p-2 uppercase hover:text-[#4DB3AC]">
              Music
            </li>
          </Link>
          <Link href="/luthiers">
            <li className="sm:mx-2 p-2 uppercase hover:text-[#4DB3AC]">
              Luthiers
            </li>
          </Link>
          <Link href="/chicago">
            <li className="sm:mx-2 p-2 uppercase hover:text-[#4DB3AC]">
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
