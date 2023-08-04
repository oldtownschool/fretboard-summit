import Image from "next/image";
import { Navbar } from "../components/Navbar.jsx";
import Link from "next/link";
import { Footer } from "../components/Footer.jsx";
import Script from "next/script.js";
import "../slider.css";

export default function Schedule() {
  return (
    <>
      {/* <link href="/slider.css" rel="stylesheet"></link> */}
      <Script src="/jquery.js" as="script" strategy="beforeInteractive"></Script>
      <Script src="/slickslider.js" ></Script>
      
      
      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-[#322D35] to-[#4C454F]">

        

        {/* <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25]"> */}


        {/* uncomment when closer to the event, marketing will send */}
        {/* <div className=" max-w-5xl w-full my-10 p-4 bg-[#A4CCDA] text-[#322D25]">
          <div className="slider1">
            <Image src="/comingsoon1.svg" width={600} height={600}/>
            <Image src="/comingsoon2.svg" width={600} height={600}/>
            <Image src="/comingsoon3.svg" width={600} height={600}/>
          </div>
        </div> */}

        {/* <div className="w-auto mt-10">
            <h2 className="px-10 tracking-wider font-aurochs font-normal uppercase text-5xl text-center">
            2023 FRETBOARD SUMMIT DETAILS AVAILABLE SOON!
            </h2>
            <div className="w-full sm:w-3/4 p-10">

            <p className="italic text-lg leading-relaxed">Updated August 2, 2023<br/>Schedule subject to change.</p>

            <p className="underline font-bold mt-4  text-lg leading-relaxed">Campus Addresses & Locations:</p>
            <p className="mb-4 text-lg leading-relaxed">
            Old Town School of Folk Music - West, 4544 N. Lincoln Ave.<br/>
            (Maurer Hall, Mabie Gallery, Workshop Rooms, Art Gallery, Music Store, Cafe & Bar)</p>

            <p className="mb-10 text-lg leading-relaxed">
            Old Town School of Folk Music - East, 4545 N. Lincoln Ave.<br/>
            (Szold Hall, Luthier Showcase Exhibit Halls, East Lobby, Workshop Rooms, Cafe & Bar)</p>

          </div>

        </div> */}

        <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25]">


          <p className="italic text-sm leading-relaxed">Updated August 2, 2023<br/>Schedule subject to change.</p>

          {/* <p className="underline font-bold mt-4  text-lg leading-relaxed">Campus Addresses & Locations:</p>
          <p className="mb-4 text-lg leading-relaxed">
          Old Town School of Folk Music - West, 4544 N. Lincoln Ave.<br/>
          (Maurer Hall, Mabie Gallery, Workshop Rooms, Art Gallery, Music Store, Cafe & Bar)</p>

          <p className="mb-10 text-lg leading-relaxed">
          Old Town School of Folk Music - East, 4545 N. Lincoln Ave.<br/>
          (Szold Hall, Luthier Showcase Exhibit Halls, East Lobby, Workshop Rooms, Cafe & Bar)</p> */}

          <h3 className="font-aurochs mt-2 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Thursday, August 24th</h3>

          <p className="italic mb-4  text-lg" >Exclusive For Three-Day All-Access Pass Holders Only</p>

          <p className="underline font-bold mt-4 leading-relaxed" >Check-In - West Lobby</p>
          <p className=" mb-4  text-lg leading-relaxed" >12:00pm - 4:00pm</p>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Welcome Remarks</p>
          <p className="text-lg leading-relaxed" >Maurer Hall - West</p>
          <p className=" mb-4  text-lg leading-relaxed" >12:30pm  Welcome Remarks with Jason Verlinde, Jim Newcomb, and Acoustic Life’s Tony Polecastro</p>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Luthier Showcase</p>
          <p className="text-lg leading-relaxed" >East bldg (floors 1-3), West bldg (floors 1 & 2)</p>
          <p className=" mb-4  text-lg leading-relaxed" >1:00pm - 5:00pm	Preview Showcase Exhibit Halls Open</p>

          <p className="mt-4  text-lg leading-relaxed" >Mabie Gallery - West</p>
          <p className=" mb-4  text-lg leading-relaxed" >5:00pm - 6:00pm	Welcome Reception - Drinks & Light Snacks
          </p>
          <p className="italic">Presented by Henriksen Amplifiers</p>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Concert Performances</p>
          <p className="italic mb-4  text-lg" >Exclusive For Three-Day All-Access Pass Holders Only</p>
          <p className="text-lg leading-relaxed" >Maurer Hall - West </p>
          <p className="mb-4  text-lg leading-relaxed" >4:00pm - 5:00pm	Joey Landreth</p>
          <p className="text-lg leading-relaxed" >Maurer Hall - West </p>
          <p className="mb-4  text-lg leading-relaxed" >7:15pm		Doors Open For Concert Seating, General Admission</p>
          <p className="mb-4  text-lg leading-relaxed" >8:00pm		Finom </p>
          <p className="mb-4  text-lg leading-relaxed" >9:00pm		Jeff Parker</p>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" > Workshops, Jams, Interviews, Talks, & More</p>
          <p className="text-lg leading-relaxed" >11:00-11:45		Luthier Lunch & Learn w/ Pacific Rim Tonewoods
          </p>
          <p className="italic mb-4">(exclusive content for luthiers)</p>

          <p className="text-lg leading-relaxed" >Maurer Hall - East </p>
          <p className="mb-4  text-lg leading-relaxed" >2:00pm - 3:00PM	Ordering Your First Custom Guitar & How To Get It Right with Paul Heumiller of Dream Guitars</p>
          <p className="mb-4  text-lg leading-relaxed" >3:00pm - 4:00PM	The Guitar Market Today with Lillian Werbin (Elderly), Mark Stutman (Folkway Music), and guests</p>


          <p className="mt-4  text-lg leading-relaxed" >West Cafe & Bar open 1:00pm - 5:00pm & during concerts<br/>
          <a href="https://musicstore.oldtownschool.org">Old Town School Music Store</a> open 11:00am - 5:00pm<br/>
          Gear Check is located in room 201 in the West building, second floor wing (2W) available 10am - ??pm
          </p>
          <p className="italic mb-10">Complimentary coffee provided by Acoustic Coffee in both buildings daily.</p>

          <div className="bg-gray-200 h-2 w-full"></div>

          <h3 className="font-aurochs mt-10 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Friday, August 25th</h3>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Check-In - West Lobby</p>
          <p className=" mb-4  text-lg leading-relaxed" >9:30am - 4:00pm	For Single Day All-Access Passholders & Luthier Showcase Day Passes </p>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Luthier Showcase</p>
          <p className="text-lg leading-relaxed" >East, 3rd Floor</p>
          <p className=" mb-4  text-lg leading-relaxed" >10:00am - 12:30pm	Luthier Showcase Exhibit Halls Open</p>
          <p className=" mb-4  text-lg leading-relaxed" >12:30pm-1:30pm 	Exhibitor Break Time, Exhibits closed</p>
          <p className=" mb-4  text-lg leading-relaxed" >1:30pm - 5:00pm	Luthier Showcase Exhibit Halls Open</p>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Workshops, Jams, Interviews, Talks, & More</p>
          <p className="italic mb-4  text-lg" >All-Access Three-Day and All-Access Single-Day Pass holders can attend any workshops & events. Seating is general admission.</p>

          <p className="text-lg leading-relaxed" >Maurer Hall - West</p>

          <p className="pl-4  mb-4  text-lg leading-relaxed" >10:00am - 12:00pm	JHS Live: The Germanium Chef featuring Robert Keeley vs. Heather Brown, hosted by Josh Scott</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >1:00pm - 1:45pm	Rugby Roots: A Conversation with acclaimed builders Wayne & Elizabeth Jayne Henderson</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >2:00pm - 2:45pm	Fretboard Journal Podcast: Jorma Kaukonen </p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >3:00pm - 4:30pm	Vintage Acoustic repair and restoration with Mark Stutman & TJ Thompson</p>

          <p className="text-lg leading-relaxed" >Szold Hall - East</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >10:00am - 10:45am	The Art of Inlay: Simon Haycraft (Preston Thompson), Jayne Henderson, and friends</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >11:00am - 11:45pm	Workshop: Flatpicking with Jake Eddy</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >12:00pm - 12:45pm	Workshop: Joey Landreth</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >1:00pm - 1:45pm	Workshop: Jeff Parker </p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >2:00pm - 2:45pm	Play Nice: The Art & Science of the Spontaneous Guitar Duo With Ethan Sherman & Adam Levy </p>


          <p className="text-lg leading-relaxed" >Mabie Gallery - West</p>

          <p className="pl-4 mb-4  text-lg leading-relaxed" >3:00pm - 4:30pm	The Summit Science Fair: Forward-Thinking Gear & Composing feat. Andy Pitcher, Duncan Price and special guests</p>

          <p className="pl-4 text-lg leading-relaxed" >B6 West - Basement</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >11:00am - 4:00pm	The Truth About Vintage Amps Room: Try Some Truly Unique and Rare Tube Amps As Mentioned on the Podcast</p>

          <p className="text-lg leading-relaxed" >211 & 212 West - Second Floor</p>

          <p className="pl-4 mb-4  text-lg leading-relaxed" >11:00am - 4:00pm	The Blue Guitars Exhibition from the Archtop Foundation</p>


          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Concert Performances</p>
          <p className="italic mb-4  text-lg" >Concert performances are included with 3-Day All-Access and 1-Day All Access Pasess only. Limited tickets may be available for purchase, see box office for details. Seating is general admission. </p>

          <p className="text-lg leading-relaxed" >Maurer Hall - West</p>
          <p className="text-lg leading-relaxed" >7:15pm		Doors Open For Concert Seating, General Admission</p>
          <p className="mb-4  text-lg leading-relaxed" >8:00pm 		Jorma Kaukonen with Jack Broadbent opening</p>

          <p className="text-lg leading-relaxed" >Szold Hall - East</p>
          <p className="mb-4  text-lg leading-relaxed" >9:00pm		Summit Shorts: All-star short sets featuring Jake Eddy, Adam Levy & Ethan Sherman, and other surprise guests. </p>

          <p className="mt-4 text-lg leading-relaxed" >Cafe & Bars open 1:00pm - 5:00pm & during concerts<br/>
          <a href="https://musicstore.oldtownschool.org">Old Town School Music Store</a> open 11:00am - 5:00pm<br/>
          Gear Check  – room 201 in the West building, second floor wing (2W)
          </p>
          <p className="italic mb-10">Complimentary coffee provided by Acoustic Coffee in both buildings daily.</p>


          <div className="bg-gray-200 h-2 w-full"></div>

          <h3 className="font-aurochs mt-10 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Saturday, August 26th</h3>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Luthier Showcase</p>
          <p className="text-lg leading-relaxed" >East, 3rd Floor</p>
          <p className=" mb-4  text-lg leading-relaxed" >10:00am - 12:30pm	Luthier Showcase Exhibit Halls Open</p>
          <p className=" mb-4  text-lg leading-relaxed" >12:30pm-1:30pm 	Exhibitor Break Time, Exhibits closed</p>
          <p className=" mb-4  text-lg leading-relaxed" >1:30pm - 5:00pm	Luthier Showcase Exhibit Halls Open</p>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Workshops, Jams, Interviews, Talks, & More</p>
          <p className="italic mb-4  text-lg" >All-Access Three-Day and All-Access Single-Day Pass holders can attend any workshops & events. Seating is general admission.</p>

          <p className="text-lg leading-relaxed" >Maurer Hall - West</p>

          <p className="pl-4  mb-4  text-lg leading-relaxed" >10:00am - 10:45am	The Mortal Guitar Lover: Of Life, Music, and Legacy with the Fretboard Journal&apos;s John Thomas</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >11:00am - 12:45pm	Ridge Road: A Celebration of Norman Blake featuring Bob Minner, Cameron Knowler & Friends</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >1:00pm - 2:45pm	Workshop: The Bill Frisell Orchestra<br/>	Bring a guitar and let Bill Frisell be your conductor and bandleader</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >3:00pm - 3:45pm	Workshop: Improvisation for Solo Guitar with Adam Miller</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >4:00pm - 4:45pm	Live Podcast: Tommy Emmanuel interviewed by Adam Miller</p>

          <p className="text-lg leading-relaxed" >Szold Hall - East</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >10:00am - 10:45am	Tony Polecastro: Getting Out of Your Playing Rut </p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >11:00am - 11:45am	Offset Care & Feeding with Mike Adams (@puisheen) </p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >1:00pm - 1:45pm	Live Podcast: Luthier on Luthier: Richard Hoover (Santa Cruz Guitar Co. founder) and Michael Bashkin</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >2:00pm - 2:45pm	Hand-Crafted vs Technology-Driven: A conversation with luthiers Jason Kostal and Mike Baranik </p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >3:00pm - 3:45pm	A Martin History Masterclass with Greig Hutton: Untold stories from the Martin Guitar Co. vaults</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >4:00pm - 4:45pm	The Black Banjo Reclamation Project</p>

          <p className="text-lg leading-relaxed" >Mabie Gallery - West</p>

          <p className="pl-4 text-lg leading-relaxed" >11:00am - 11:45pm	Workshop: Stevie Wonder, Cole Porter, Beatles & Carole King for Fingerstyle Guitar With Michael J. Miles</p>
          <p className="pl-4 text-lg leading-relaxed" >3:00pm - 3:45pm	Workshop: Effects Pedals For Guitarists with Charles Kim</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >4:00pm - 5:00pm	The Friends of G. Weller Happy Hour</p>


          <p className="pl-4 text-lg leading-relaxed" >West, B6 - Basement</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >11:00am - 4:00pm	The Truth About Vintage Amps Room: Try Some Truly Unique and Rare Tube Amps As Mentioned on the Podcast</p>

          <p className="pl-4 text-lg leading-relaxed" >West, 211 & 212 - Second Floor</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >11:00am - 4:00pm	The Blue Guitars Exhibition from the Archtop Foundation</p>



          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Concert Performances</p>
          <p className="italic mb-4  text-lg" >Concert performances are included with 3-Day All-Access and 1-Day All Access Pasess only. Limited tickets may be available for purchase, see box office for details. Seating is general admission.</p>

          <p className="text-lg leading-relaxed" >Maurer Hall - West</p>
          <p className="mb-4  text-lg leading-relaxed" >7:15pm		Doors Open For Concert Seating, General Admission</p>
          <p className="mb-4  text-lg leading-relaxed" >8:00pm 		Tommy Emmanuel with Nathan Graham opening</p>


          <p className="text-lg leading-relaxed" >Szold Hall - East</p>
          <p className="text-lg leading-relaxed" >8:00pm		Via Mardot scores the 1934 stop-motion masterpiece, The Mascot</p>
          <p className="mb-4 text-lg leading-relaxed" >After performances	Late Night “Summit All-Star Super Session:” Ethan Sherman, Adam Levy, Ryan Richter and special guests </p>

          <p className="mt-4  text-lg leading-relaxed" >Cafe & Bars open 11:00am - 5:00pm & during concerts <br/>
          <a href="https://musicstore.oldtownschool.org">Old Town School Music Store</a> open 11:00am - 5:00pm<br/>
          Gear Check is located in room 201 in the West building, second floor wing (2W)
          </p>
          <p className="italic mb-10">Complimentary coffee provided by Acoustic Coffee in both buildings daily.</p>

        </div>


      </main>
      <Footer />
    </>
  );
}
