import Image from "next/image";
import { Navbar } from "../components/Navbar.jsx";
import Link from "next/link";
import { Footer } from "../components/Footer";

export default function Tickets() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-[#322D35] to-[#4C454F]">
        <div className="w-full max-w-5xl items-center lg:flex">
          <p>ticket page</p>
          {/* <Image
            src="/DSC07226.png"
            alt="fs video placeholder"
            width={1200}
            height={500}
          /> */}
        </div>

        <Link href="">
          <button className="text-3xl font-aurochs px-6 py-2 uppercase bg-[#4DB3AC] hover:bg-[#14948c] text-white">
            Buy Tickets
          </button>
        </Link>

        {/* 4 square grid */}

        <div className="block sm:flex sm:flex-row mt-10 max-w-5xl p-2 sm:p-0">
          <div className="w-full sm:flex-col sm:flex sm:w-2/4 m-0 sm:m-2 p-4 bg-[#A4CCDA] text-center text-[#322D25]">
            <div className="flex justify-center">
              <Image
                src="/Rectangle12.png"
                alt="banner left"
                className="self-start mb-2"
                width={600}
                height={400}
              />
            </div>
            <h2 className="tracking-wide font-aurochs font-normal uppercase text-3xl">
              a 3 day guitar extravaganza
            </h2>
            <p>
              <span className="font-bold">Experience</span> rooms full of
              custom-built guitars for you to hear, play, or purchase-directyly
              from the makers themselves!
            </p>
          </div>
          <div className="w-full sm:flex-col sm:flex sm:w-2/4 m-0 mt-4 sm:m-2 p-4 bg-[#F0E5D1] text-center text-[#322D25]">
            <div className="flex justify-center">
              <Image
                src="/Rectangle13.png"
                alt="banner left"
                className="self-start mb-2"
                width={600}
                height={400}
              />
            </div>
            <h2 className="tracking-wide font-aurochs font-normal uppercase text-3xl">
              the germanium chef live!
            </h2>
            <p>
              <span className="font-bold">Watch</span> pedal wizards{" "}
              <span className="font-bold">Heather Brown</span> and{" "}
              <span className="font-bold">Robert Keeley</span> battle in a race
              to build the ultimate FUZZ PEDAL!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
