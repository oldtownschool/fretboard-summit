import Image from "next/image";
import { Navbar } from "../components/Navbar.jsx";
import Link from "next/link";
import { Footer } from "../components/Footer";

export default function Tickets() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-[#322D35] to-[#4C454F]">
        <div className="my-10 w-full max-w-5xl items-center sm:flex sm:flex-col px-4 lg:px-14 text-center">
          <h2 className="mt-10 mb-4 font-aurochs text-[#F0E5D1] uppercase text-6xl tracking-wider ">
            Buy tickets
          </h2>
          <p className="text-[#F0E5D1] text-2xl">
            All-access tickets include admission to all the concerts, workshops,
            and we`&apos;`ve also create the Midwest`&apos;`s largest showcase
            of handmade and boutique guitars to date, with luthitext-centerers
            exhibiting their creations.
          </p>
        </div>

        <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25]">
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center">
            a 3 day all access pass
          </h2>
          <h3 className="font-bold text-2xl my-6">
            Our All Access passes get you in to everything at the Fretboard
            Summit, including private events, gear giveaways, gift bags &amp;
            more.
          </h3>
          <ul className="list-disc ml-4">
            <li> Admission to all events</li>
            <li className="ml-4">Live performances</li>
            <li className="ml-4">Artists workshops</li>
            <li className="ml-4">Lectures</li>
            <li className="ml-4">Demos</li>
            <li className="ml-4">Jams &amp; more...</li>
            <li>Early priority access to the Luthier Exhibition</li>
            <li>Exclusive Thursday performance from Jeff Parker</li>
            <li>Welcome reception</li>
            <li>Gift bags &amp; sponsor prizes &amp; giveaways</li>
          </ul>
          <h3 className="my-4 font-black text-xl">Limited to 250 attendees.</h3>
          <Link href="" className="text-center">
            <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
              Buy 3-day pass
            </button>
          </Link>
        </div>

        <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#F0E5D1] text-[#322D25]">
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center">
            single day pass $150
          </h2>
          <h3 className="font-bold text-2xl my-6">
            Day Pass holders have access to everything at the Fretboard Summit,
            including private events, gear giveaways, gift bags &amp; more.
          </h3>
          <ul className="list-disc ml-4">
            <li> Admission to:</li>
            <li className="ml-4">Daily workshops</li>
            <li className="ml-4">Lectures</li>
            <li className="ml-4">Demos</li>
            <li className="ml-4">Jams &amp; more...</li>
            <li>Luthier Exhibition</li>
          </ul>
          <h3 className="my-4 font-black text-xl">Limited to 250 attendees.</h3>
          <Link href="" className="text-center">
            <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
              Buy day pass
            </button>
          </Link>
        </div>

        <div className="mt-10 mb-20 w-full max-w-5xl items-center sm:flex sm:flex-col px-4 lg:px-14 text-center">
          <h2 className="mb-4 text-[#4DB3AC] font-bold uppercase text-xl tracking-widest ">
            More ticket packages available soon
          </h2>
          <p className="text-white text-lg">
            <span className="font-bold">Guitar showcase only</span>
            <br />
            June 1, 2023, $30
          </p>
          <p className="text-white text-lg my-6">
            <span className="font-bold">Individual Concert Tickets</span>&nbsp;
            Summer 2023 (pending availability)
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
