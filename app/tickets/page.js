import Image from "next/image";
import { Navbar } from "../components/Navbar.jsx";
import Link from "next/link";
import { Footer } from "../components/Footer";

export default function Tickets() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-[#322D35] to-[#4C454F]">
        <div className="my-10 mb-20 sm:mb-10 w-full max-w-5xl items-center sm:flex sm:flex-col px-4 lg:px-14 text-center">
          <h2 className="mt-10 mb-4 font-aurochs text-[#F0E5D1] uppercase text-6xl tracking-wider ">
            Buy tickets
          </h2>
          <p className="text-[#F0E5D1] text-2xl">
            All-access tickets include admission to all the concerts, workshops,
            and we&apos;ve also create the Midwest&apos;s largest showcase of
            handmade and boutique guitars to date, with luthitext-centerers
            exhibiting their creations.
          </p>
        </div>

        <div className="mb-4 sm:my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25] relative">
          <Image
            src="/BestValue.svg"
            alt="best value"
            className="absolute -left-4 -top-14 sm:top-4"
            width={200}
            height={100}
          />
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center">
            3-DAY ALL ACCESS PASS $350.00
          </h2>
          <h3 className="font-bold text-2xl my-6">
            Experience everything at the Fretboard Summit, including concerts,
            workshops, gear giveaways, gift bags &amp; more.
          </h3>
          <ul className="list-disc ml-4">
            <li>Admission to all events</li>
            <li className="ml-4">Live performances</li>
            <li className="ml-4">Workshops &amp; panel discussions</li>
            <li className="ml-4">Hands-on demos</li>
            <li className="ml-4">Guitar showcase</li>
            <li className="ml-4">Jams &amp; more...</li>
            <li className="ml-4">After-parties</li>
            <li>Early priority access to the Luthier Exhibition</li>
            <li>Exclusive Thursday performance from Jeff Parker</li>
            <li>Welcome reception</li>
            <li>Gift bags &amp; sponsor prizes &amp; giveaways</li>
            <li>
              Entry to win our custom 2023 Fretboard Summit guitar, built by
              Bruce Guitars
            </li>
          </ul>

          <h3 className="my-4 font-black text-xl">
            Limited to the first 250 registered attendees.
          </h3>
          <div className="flex flex-row justify-evenly mt-6">
            <Link href="" className="text-center">
              <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
                Buy 3-day pass
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-4 sm:my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#F0E5D1] text-[#322D25]">
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center">
            SINGLE DAY PASS $150.00
          </h2>
          <h3 className="font-bold text-2xl my-6">
            Day Pass holders have access to everything at the Fretboard Summit,
            including private events, gear giveaways, gift bags &amp; more.
          </h3>
          <ul className="list-disc ml-4">
            <li>Admission to All Events</li>
            <li className="ml-4">Live performances</li>
            <li className="ml-4">Workshops &amp; panel discussions</li>
            <li className="ml-4">Hands-on demos</li>
            <li className="ml-4">Jams &amp; more...</li>
            <li className="ml-4">After-parties</li>
            <li>Luthier Exhibition</li>
          </ul>
          <div className="flex flex-row justify-evenly mt-6">
            <Link href="" className="text-center">
              <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
                Buy Day Pass: Fri, Aug. 25
              </button>
            </Link>
            <Link href="" className="text-center ml-1">
              <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
                Buy Day Pass: Sat, Aug. 26
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-10 mb-20 w-full max-w-5xl items-center sm:flex sm:flex-col px-4 lg:px-14 text-center">
          <h2 className="mb-4 text-[#4DB3AC] font-bold uppercase text-xl tracking-widest ">
            OTHER TICKET PACKAGES &amp; ON SALE SCHEDULE:
          </h2>
          <p className="text-white text-lg">
            <span className="font-bold">Guitar Showcase only - $30</span>
            <br />
            June 1, 2023 (Tickets will also be available at the door)
          </p>
          <p className="text-white text-lg my-6">
            <span className="font-bold">Individual Concert Tickets</span>
            <br />
            Summer 2023 (pending availability)
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
