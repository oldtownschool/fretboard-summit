import Image from "next/image";
import { Navbar } from "../components/Navbar.jsx";
import Link from "next/link";
import { Footer } from "../components/Footer";

export default function Luthiers() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-[#322D35] to-[#4C454F]">
        <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25]">
          {/* <div class="flex justify-center">
            <Image
              src="/JormaKaukonen.jpeg"
              alt="Jorma Kaukonen"
              className=""
              width={600}
              height={600}
            />
          </div> */}
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center my-6">
            Sponsor &amp; Partner Applications Now Available
          </h2>
          <h3 className="text-xl">
            Email: fretboardsummit@oldtownschool.org or follow us on social
            media for more details!
          </h3>
          <h3 className="text-xl mt-2 ">
            Exhibitor and vendor applications now available.{" "}
            <Link href="/apply" className="text-center underline">
              See details.
            </Link>
          </h3>

          <Link href="" className="text-center mt-6">
            <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
              Buy Tickets
            </button>
          </Link>
        </div>

        <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#F0E5D1] text-[#322D25]">
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center">
            CONNECT WITH THE WORLD’S GREATEST GUITAR MAKERS AND TAKE HOME YOUR
            NEXT FAVORITE INSTRUMENT
          </h2>
          <h3 className="font-bold text-2xl my-6">
            Try new and forthcoming instruments from some of the most respected
            brands in the industry like Martin, Collings, Henriksen amps,
            Yamaha, Taylor, Huss &amp; Dalton, Preston Thompson, and others.
            Love the handmade? 50 of the world’s best acoustic and electric
            luthiers, high-end amp, pedal and accessory makers will be
            showcasing their wares. 2023 attendees include Jason Kostal, Grez,
            M-Tone, Cardinal, Noemi Guitars, Bashkin Guitars, Maegen Wells,
            Galloup Guitars and dozens others.
          </h3>
        </div>
      </main>
      <Footer />
    </>
  );
}
