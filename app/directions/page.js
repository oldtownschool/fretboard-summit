import Image from "next/image";
import { Navbar } from "../components/Navbar.jsx";
import Link from "next/link";
import { Footer } from "../components/Footer";

export default function Directions() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-[#322D35] to-[#4C454F]">
        <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25]">
          <div className="flex justify-center">
            <Image
              src="/FretboardSummit_Web_Imgs_4GettingHere.png"
              alt="Getting Here - Lincoln Square"
              className=""
              width={600}
              height={600}
            />
          </div>
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center my-6">
            GETTING HERE
          </h2>
          <p className="text-xl">
            Old Town School of Folk Music is hosting the Fretboard Summit at the
            Lincoln Square campus on Chicago&apos;s northside, just 9 miles
            north of downtown. Old Town School of Folk Music is located at 4544
            N. Lincoln Avenue, Chicago, IL 60625.
          </p>
          <p className="text-xl mt-2">
            Located just 4 blocks from &quot;The L&quot; Brown Line - Western
            stop. Easily accessible via bus and rideshare from anywhere you may
            be staying in the Chicagoland area. Public parking is available
            throughout the neighborhood.
          </p>

          <Link
            href="https://www.google.com/maps/place/Old+Town+School+of+Folk+Music/@41.964216,-87.686021,17z/data=!3m1!4b1!4m5!3m4!1s0x880fcdf75dd7bee7:0xf503fea46dbf4f36!8m2!3d41.964216!4d-87.686021"
            className="text-center mt-6"
          >
            <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
              Map
            </button>
          </Link>
        </div>

        <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#F0E5D1] text-[#322D25]">
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center">
            Chicago is and always has been a great place for music lovers and
            guitar lovers. Here are the top 7 things to do.
          </h2>
          <ul className="font-bold text-2xl my-6">
            <li></li>
            <Link href="https://www.oldtownschool.org/">Old Town School</Link>
            <li>
              <Link href="https://www.chicagomusicexchange.com/">
                Chicago Music Exchange
              </Link>
            </li>
            <li>
              <Link href="https://thevinylfactory.com/features/chicago-best-record-shops-guide/">
                Great record stores
              </Link>
            </li>
            <li>
              <Link href="https://kumascorner.com/#menu">
                Metal Menu at Kuma&apos;s Corner
              </Link>
            </li>
            <li>
              <Link href="https://www.bluesheaven.com/home.html">
                Tour Chess Records
              </Link>
            </li>
            <li>
              <Link href="https://www.delilahschicago.com/history">
                Happy Hour at Delilah&apos;s
              </Link>
            </li>
            <li>
              <Link href="https://greenmilljazz.com/">
                Green Mill ~ Jazz Speakeasy
              </Link>
            </li>
          </ul>
        </div>

        <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25]">
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center my-6">
            ABOUT LINCOLN SQUARE
          </h2>
          <p className="font-bold text-2xl">
            In a city well-known for diversity, Lincoln Square stands out as an
            especially vibrant cultural crossroads. This European-style
            neighborhood is host to many one-of-a-kind shops, restaurants, and
            cafés that reflect the neighborhood’s wide appeal as an
            unforgettable place to shop, eat, drink, and visit.
          </p>

          <h2 className="tracking-wider font-aurochs font-normal uppercase text-3xl text-center my-6">
            ACCOMMODATIONS
          </h2>

          <p className="text-xl mt-2">
            Limited accommodations are available at our hotel partner, Hotel
            Zachary. This charming boutique hotel is located at Gallagher Way
            across the street from Wrigley Field. Special rates available for
            Fretboard Summit attendees following the link below.
          </p>
          <p className="text-xl mt-2">
            About Hotel Zachary: Inspired by Zachary Taylor Davis — legendary
            Chicagoan and the world-renowned 1914 architect behind Wrigley Field
            — Hotel Zachary blends new and old, refined and comfortable, unique
            and familiar, all at once. A boutique hotel in the heart of the
            iconic Wrigleyville neighborhood, it&apos;s an authentic experience
            that brings Davis&apos; vision to life in thoughtful and surprising
            ways. Just minutes from downtown Chicago and Lake Michigan,
            surrounded by unique shopping, dining and live music destinations,
            Hotel Zachary is the perfect home base for baseball fans, business
            travelers, curious vacationers and in-the-know locals. An
            unforgettable stay awaits!
          </p>
          <p className="text-xl mt-2">
            Hotel space at Hotel Zachary is limited and may sell out. Old Town
            School is accessible from most hotels in the Chicagoland area via
            public transportation, rideshare, or taxi.{" "}
          </p>

          <Link
            href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1670624370220&amp;key=GRP&amp;app=resvlink"
            className="text-center mt-6"
          >
            <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
              BOOK ROOMS AT HOTEL ZACHARY
            </button>
          </Link>
        </div>

        <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#F0E5D1] text-[#322D25]">
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center">
            NEARBY
          </h2>
          <p className="text-xl mt-2">
            Many guests opt to stay in the surrounding neighborhoods and make a
            longer trip to explore all Chicago has to offer. Search for these
            neighborhoods to be in walking distance to Old Town School: Lincoln
            Square, North Center, Ravenswood, St. Ben&apos;s. Surrounding
            neighborhoods with access to public transportation or short rides to
            Lincoln Square: Andersonville, Roscoe Village, Lakeview, Albany
            Park, Budlong Woods, North Park, Wrigleyville.
          </p>

          <Link
            href="https://www.choosechicago.com/"
            className="text-center mt-6"
          >
            <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
              ADDITIONAL TRAVEL RESOURCES
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
