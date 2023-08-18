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
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center">
          CONNECT WITH THE WORLD’S GREATEST GUITAR MAKERS AND TAKE HOME YOUR NEW FAVORITE GEAR
          </h2>

          <p className="font-bold text-2xl mt-6">The greatest and best-known guitar makers on the planet (acoustic & electric) will be showcasing their creations just for our Chicago event. We&apos;ve assembled a once-in-a-lifetime showcase featuring some of the world&apos;s finest luthiers, electronics wizards, and world-famous brands at Fretboard Summit 2023.</p>

          <p className="font-bold text-2xl my-4">Use this guide to find your favorite Fretboard Summit exhibitors, sponsors, and friends across the two Old Town School of Folk Music buildings below.</p>

          <h4>Exhibitors include:</h4>

          <table class="table-auto">
            <thead>
              <tr>
                <th class="text-left">Exhibitor</th>
                <th class="text-left">Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Link href="https://www.3bender.com/">3 Bender Guitars</Link></td>
                <td>West - 102</td>
              </tr>
              <tr>
              <td><Link href="https://www.apollopicks.com/">Apollo Picks</Link></td>
                <td>West - Lobby</td>
              </tr>
              <tr>
              <td><Link href="https://www.baranikguitars.com/">Baranik Guitars</Link></td>
                <td>West - 102</td>
              </tr>
              <tr>
                <td><Link href="https://www.bashkinguitars.com/">Bashkin Guitars</Link></td>
                <td>West - 102</td>
              </tr>
              <tr>
                <td><Link href="https://bighollowguitars.com/">Big Hollow Guitars</Link></td>
                <td>East - E326</td>
              </tr>
              <tr>
                <td><Link href="https://blackbobbin.com/">Black Bobbin</Link></td>
                <td>West - 102</td>
              </tr>
              <tr>
                <td><Link href="https://bourgeoisguitars.com/">Bourgeois Guitars</Link></td>
                <td>East - E124</td>
              </tr>
              <tr>
                <td><Link href="https://bruceguitars.com">Bruce Guitars</Link></td>
                <td>East - E324</td>
              </tr>
              <tr>
                <td><Link href="https://cardinalinstruments.com/">Cardinal Instruments</Link></td>
                <td>West - 102</td>
              </tr>
              <tr>
                <td><Link href="https://cedarcreekcases.com/">Cedar Creek Custom Case Shoppe</Link></td>
                <td>East - E330</td>
              </tr>
              <tr>
                <td><Link href="https://cedarmtm.com">Cedar Mountain Mandolins</Link></td>
                <td>East - E326</td>
              </tr>
              <tr>
                <td><Link href="https://www.chicagoluthiers.com">Chicago Luthiers Workshop</Link></td>
                <td>West - Music Store</td>
              </tr>
              <tr>
                <td><Link href="https://www.collingsguitars.com/">Collings Guitars</Link></td>
                <td>East - E221</td>
              </tr>
              <tr>
                <td><Link href="https://dammanninstruments.com">Dammann Custom Instruments</Link></td>
                <td>East - E326</td>
              </tr>
            </tbody>
          </table>
          {/* <ul className="list-disc ml-4 mt-6">
            <li>Bruce Guitars </li>
            <li>3 Bender Guitars</li>
            <li>Acoustic Remedy Cases</li>
            <li>Bashkin Guitars </li>
            <li>Dammann Custom Instruments</li>
            <li>FE Tellier Guitars</li>
            <li>Grez Guitars</li>
            <li>H Guitars</li>
            <li>Halland Guitars</li>
            <li>Hoffee Cases</li>
            <li>Lamehorse Guitars</li>
            <li>Lane Guitars</li>
            <li>Maegen Wells Guitars & Mandolins</li>
            <li>Michael Kennedy Guitars</li>
            <li>RS Muth Guitars</li>
            <li>R. Robinson Guitars</li>
            <li>Saers Guitars</li>
            <li>T. Drew Heinonen Guitars</li>
            <li>Tyson Soth Guitar Co.</li>
            <li>Woolson Soundcraft</li>
            <li>Phoenix Guitars</li>
            <li>Bruce Guitars</li>
            <li>Motander Guitars</li>
            <li>Noemi Guitars</li>
            <li>Gallagher Guitars</li>
            <li>De Wit Guitars</li>
            <li>M-Tone Guitars</li>
            <li>Cedar Mountain Mandolins</li>
            <li>Laroche Lutherie</li>
            <li>Cardinal Instruments</li>
            <li>Lockhorn Instrument</li>
            <li>Treehouse Guitars</li>
            <li>Black Bobbin</li>
            <li>Leavitt Stringed Instruments</li>
            <li>Jason Kostal Guitars</li>
            <li>Uberfrank</li>
            <li>Big Hollow Guitars</li>
            <li>Cedar Creek Custom Case</li>
            <li>Shoppe</li>
            <li>Flammang Guitars</li>
            <li>Mojotone</li>
            <li>Reywas Guitars</li>
            <li>J. Rieck Lutherie</li>
            <li>Shock the Fox</li>
            <li>Baranik Guitars</li>
            <li>Widman Custom Electrics</li>
            <li>Chicago Luthiers Workshop</li>
            <li>Lattanze Guitars</li>
            <li>Lyon and Healy</li>
            <li>Bashkin Guitars</li>
            <li>Hybrid Guitars</li>
            <li>ZVEX Effects</li>
            <li>Duneland Labs</li>
          </ul> */}

          <p className="text-xl my-6">Note: Most of the luthiers will have guitars available for purchase. Most of these brands are showcasing never-before-seen and new instruments, as well. Nearly all of them will have their head designers/builders present &#40;ie Bob Taylor himself will be attending for Taylor; Steve McCreary will be attending for Collings, etc&#41;. We will have quiet rooms and amp rooms available for demos.</p>

        </div>

        {/* <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#F0E5D1] text-[#322D25]">
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center my-6">
            Sponsor &amp; Partner Applications Now Available
          </h2>
          <p className="text-xl">
            Email: fretboardsummit@oldtownschool.org or follow us on social
            media for more details!
          </p>
          <p className="text-xl mt-2 ">
            Exhibitor and vendor applications now available.{" "}
            <Link href="/apply" className="text-center underline">
              See details.
            </Link>
          </p>

          <Link href="/tickets" className="text-center mt-6">
            <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
              Buy Tickets
            </button>
          </Link>
        </div> */}


      </main>
      <Footer />
    </>
  );
}
