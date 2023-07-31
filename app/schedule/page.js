import Image from "next/image";
import { Navbar } from "../components/Navbar.jsx";
import Link from "next/link";
import { Footer } from "../components/Footer.jsx";
import Script from "next/script.js";

export default function Schedule() {
  return (
    <>
      <script
      src="https://code.jquery.com/jquery-3.7.0.min.js"
      integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g="
      crossorigin="anonymous" as="script" async></script>
      <script src="/slickslider.js" async></script>
      <link href="/slider.css" rel="stylesheet"></link>

      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-[#322D35] to-[#4C454F]">

        

        {/* <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25]"> */}
        <div class=" max-w-5xl w-full my-10 p-4 bg-[#A4CCDA] text-[#322D25]">
          <div class="slider1">
            <img src="https://placehold.co/500x1300?text=coming%20soon%201" />
            <img src="https://placehold.co/500x1300?text=coming%20soon%202" />
            <img src="https://placehold.co/500x1300?text=coming%20soon%203" />	
          </div>
        </div>

        <div class="w-auto">
            <h2 className="px-10 tracking-wider font-aurochs font-normal uppercase text-5xl text-center">
            2023 FRETBOARD SUMMIT DETAILS AVAILABLE SOON!
            </h2>
            <div class="w-full sm:w-3/4 p-10">

            <p class="italic text-lg leading-relaxed">Updated July 31, 2023<br/>Schedule subject to change.</p>

            <p class="underline mt-4  text-lg leading-relaxed">Campus Addresses & Locations:</p>
            <p class="mb-4 text-lg leading-relaxed">
            Old Town School of Folk Music - West, 4544 N. Lincoln Ave.<br/>
            (Maurer Hall, Mabie Gallery, Workshop Rooms, Art Gallery, Music Store, Cafe & Bar)</p>

            <p class="mb-10 text-lg leading-relaxed">
            Old Town School of Folk Music - East, 4545 N. Lincoln Ave.<br/>
            (Szold Hall, Luthier Showcase Exhibit Halls, East Lobby, Workshop Rooms, Cafe & Bar)</p>
          </div>

        </div>


      </main>
      <Footer />
    </>
  );
}
