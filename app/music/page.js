import Image from "next/image";
import { Navbar } from "../components/Navbar.jsx";
import Link from "next/link";
import { Footer } from "../components/Footer";

export default function Tickets() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-[#322D35] to-[#4C454F]">
        <div class="my-10 mb-20 sm:mb-10 w-full max-w-5xl items-center sm:flex sm:flex-col px-4 lg:px-14 text-center">
          <h2 className="mt-10 font-aurochs text-[#F0E5D1] uppercase text-6xl tracking-wider ">
            Live Performances
          </h2>
        </div>
        <div className="block sm:flex sm:flex-row mt-10 max-w-5xl p-2 sm:p-0">
          <div className="w-full sm:flex-col sm:flex sm:w-2/4 m-0 sm:m-2 p-4 bg-[#A4CCDA] text-center text-[#322D25]">
            <div className="flex justify-center">
              <Image
                src="/JormaKaukonen.jpeg"
                alt="Jorma Kaukonen"
                className="self-start mb-2"
                width={600}
                height={400}
              />
            </div>
            <h2 className="tracking-wide font-aurochs font-normal uppercase text-3xl">
              Friday, August 25
              <br />
              <span className="font-bold">Jorma Kaukonen</span>
              <br />{" "}
              <span className="font-light tracking-wider">
                feat. Jack Broadbent
              </span>
            </h2>
          </div>
          <div className="w-full sm:flex-col sm:flex sm:w-2/4 m-0 mt-4 sm:m-2 p-4 bg-[#F0E5D1] text-center text-[#322D25]">
            <div className="flex justify-center">
              <Image
                src="/TommyEmmanuel.jpeg"
                alt="TommyEmmanuel"
                className="self-start mb-2"
                width={600}
                height={400}
              />
            </div>
            <h2 className="tracking-wide font-aurochs font-normal uppercase text-3xl">
              Saturday, August 26
              <br />
              <span className="font-bold">Tommy Emmanuel</span>
            </h2>
            <p></p>
          </div>
        </div>

        <h3 className="my-4 px-4 text-3xl tracking-wider font-aurochs text-[#F0E5D1]">
          Also...Jeff Parker / Via Mardot / Jake Eddy &amp; more to be
          announced.
        </h3>

        <Link href="" className="text-center mb-10">
          <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
            Buy Tickets
          </button>
        </Link>

        {/* <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25]">
          <div class="flex justify-center">
            <Image
              src="/JormaKaukonen.jpeg"
              alt="Jorma Kaukonen"
              className=""
              width={600}
              height={600}
            />
          </div>
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center my-6">
            LIVE PERFORMANCES
          </h2>
          <h3 className="text-2xl">
            Friday, August 25
            <br />
            <span className="font-bold">Jorma Kaukonen</span> feat. Jack
            Broadbent
          </h3>
          <h3 className="text-2xl mt-6">
            Saturday, August 26
            <br />
            <span className="font-bold">Tommy Emmanuel</span>
          </h3>
          <h3 className="my-4 text-xl">
            Also...Jeff Parker / Via Mardot / Jake Eddy &amp; more to be
            announced.
          </h3>

          <Link href="" className="text-center">
            <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
              Buy Tickets
            </button>
          </Link>
        </div> */}

        <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#F0E5D1] text-[#322D25]">
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center">
            WORKSHOPS, SHOWCASES, &amp; MORE
          </h2>
          <h3 className="font-bold text-2xl my-6">
            If you’re looking for inspiration on how to play better, dive deeper
            into guitar collecting, or just meet the biggest guitar, amp, and
            pedal enthusiasts around, we have it all. All abilities and all
            guitarists (electric, acoustic, vintage, new...) are welcome at
            Summit workshops. Bring what you’ve got!
            <br />
            All-access passholders get access to all our breakout sessions and
            master classes featuring fantastic players, passionate luthiers, and
            authorities from across the industry.
          </h3>

          <h3 className="font-bold text-2xl mt-6 mb-2">WORKSHOPS</h3>
          <p>
            2023 workshops include sessions by Bill Frisell, Via Mardot, Bob
            Minner, Wayne &amp; EJ Henderson, TJ Thompson, Mark Stutman, Paul
            Heumiller (Dream Guitars), and Tony Polecastro...with more to be
            announced!
          </p>

          <h3 className="font-bold text-2xl mt-6 mb-2">THE GERMANIUM CHEF!</h3>
          <p>
            JHS&apos;s Josh Scott presents an Iron Chef-inspired fuzz pedal
            build-off pitting Robert Keeley vs Heather Brown.
          </p>

          <h3 className="font-bold text-2xl mt-6 mb-2">
            THE BILL FRISELL GUITAR ORCHESTRA
          </h3>
          <p>
            Fretboard Journal favorite Bill Frisell leads a once-in-a-lifetime
            guitar orchestra that you (yes, YOU!) can join.
          </p>

          <h3 className="font-bold text-2xl mt-6 mb-2">SUPER SESSIONS</h3>
          <p>
            Witness late-night all-star guitar jams featuring some of the most
            brilliant musicians around. Though the lineup each night is a
            secret, trust us when we say you won&apos;t want to miss it.
          </p>

          <h3 className="font-bold text-2xl mt-6 mb-2">
            THE TRUTH ABOUT VINTAGE AMPS LOUNGE
          </h3>
          <p>
            Explore and play through some of Skip Simmons&apos; finest mods and
            amps, thanks to Truth About Vintage Amps listener &quot;Kevin from
            Ohio.&quot; Featured amps include: a 1961 Fender Tweed Deluxe Big
            Box 5E3, a Canadian Soundmaster, a Rauland 1916, Mascos and more.
          </p>

          <h3 className="font-bold text-2xl mt-6 mb-2">EVENING JAM ROOMS!</h3>
          <p>For both acoustic and electric guitar lovers!</p>
        </div>

        {/* <div className="mt-10 mb-20 w-full max-w-5xl items-center sm:flex sm:flex-col px-4 lg:px-14 text-center">
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
        </div> */}
      </main>
      <Footer />
    </>
  );
}
