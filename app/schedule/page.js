'use client'

import Image from "next/image";
import { Navbar } from "../components/Navbar.jsx";
import Link from "next/link";
import { Footer } from "../components/Footer.jsx";
import Script from "next/script.js";
// import "../slider.css";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Schedule() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  return (
    <>
      {/* <link href="/slider.css" rel="stylesheet"></link> */}
      {/* <Script src="/jquery.js" as="script" strategy="beforeInteractive"></Script>
      <Script src="/slickslider.js"></Script>
       */}
      
      
      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-[#322D35] to-[#4C454F]">

        {/* <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25]"> */}
        <div className="py-10 max-w-5xl w-full my-10 p-4 bg-[#A4CCDA] text-[#322D25]">
          {/* <h2 className="text-red-500 mb-10">Please Note: This is content from the 2023 Fretboard Summit for informational purposes only. 2024 info available soon.</h2> */}

          <div className="sm:px-16">
            <p className="font-bold text-2xl">The Summit isn't just about shopping. All-access passholders get access to three days of sessions, master classes, music workshops, histories, and parties created just for the Fretboard Summit attendees.</p>

            <p className="font-bold text-2xl mt-4">For 2024, we have Chris Martin IV sharing his story; we're bringing back the Summit Science Fair hosted by Josh Scott (JHS); we've got an all-star cast of luthiers sharing their expertise, including Wayne Henderson, TJ Thompson, Mark Stutman, Dan Erlewine and others; we'll have live podcast tapings; late night jams; interviews with some of our music heroes; and more.</p>

            <p className="font-bold text-2xl my-4">To whet your appetite, here's what our 2023 Fretboard Summit looked like.</p>
          </div>

          


          <Slider {...settings}>
          <div>
              <Image src="/FS23_LineupSched_082623-3a.png" width={600} height={600} alt="Line Up Schedule 3"/>
            </div>
            <div>
              <Image src="/FS23_LineupSched_082423-2a.png" width={600} height={600} alt="Line Up Schedule 2"/>
            </div>
            <div>
              <Image src="/FS23_LineupSched_082423-1a.png" width={600} height={600} alt="Line Up Schedule 1" />
            </div>
          </Slider>
        </div>



        {/* uncomment when closer to the event, marketing will send */}
        {/* <div className=" max-w-5xl w-full my-10 p-4 bg-[#A4CCDA] text-[#322D25]">
          <div className="slider">
            <Image src="/FS23_LineupSched_082423-1a.png" width={600} height={600} alt="Line Up Schedule 1" />
            <Image src="/FS23_LineupSched_082423-2a.png" width={600} height={600} alt="Line Up Schedule 2"/>
            <Image src="/FS23_LineupSched_082423-3a.png" width={600} height={600} alt="Line Up Schedule 3"/>
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

          </div>*/}

        {/* </div> */}

        <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25]">


          <p className="italic text-sm leading-relaxed">Updated August 24, 2023 1:19PM<br/>Schedule subject to change. </p>

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
          <p className="pl-4  mb-4  text-lg leading-relaxed" >12:00pm - 4:00pm</p>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Welcome Remarks</p>
          <p className="text-lg leading-relaxed" >Maurer Hall - West</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >12:30pm  Welcome Remarks with Jason Verlinde, Jim Newcomb, and Acoustic Life’s Tony Polecastro</p>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Luthier Showcase</p>
          <p className="text-lg leading-relaxed" >East bldg (floors 1-3), West bldg (floors 1 & 2)</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >1:00pm - 5:00pm	Preview Showcase Exhibit Halls Open</p>

          <p className="mt-4  text-lg leading-relaxed" >Mabie Gallery - West</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >5:00pm - 6:00pm	Welcome Reception - Drinks & Light Snacks
          </p>
          <p className="italic">Presented by Henriksen Amplifiers</p>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Concert Performances</p>
          <p className="italic mb-4  text-lg" >Exclusive For Three-Day All-Access Pass Holders Only</p>
          <p className="text-lg leading-relaxed" >Maurer Hall - West </p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >4:00pm - 5:00pm	Joey Landreth</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >7:15pm		Doors Open For Concert Seating, General Admission</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >8:00pm		Finom </p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >9:00pm		Jeff Parker</p>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" > Workshops, Jams, Interviews, Talks, & More</p>
          <p className="text-lg leading-relaxed" >Szold Hall - East</p>
          
          <p className="pl-4 text-lg leading-relaxed" >11:00-11:45		Luthier Lunch & Learn w/ Pacific Rim Tonewoods
          </p>
          <p className="pl-4 italic mb-4">(exclusive content for luthiers)</p>

          <p className="pl-4 mb-4  text-lg leading-relaxed" >2:00pm - 3:00PM	Ordering Your First Custom Guitar & How To Get It Right with Paul Heumiller of Dream Guitars</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >3:00pm - 4:00PM	The Guitar Market Today with Lillian Werbin (Elderly), Mark Stutman (Folkway Music), and guests</p>


          <p className="mt-4  text-lg leading-relaxed" >West Cafe & Bar open 1:00pm - 5:00pm & during concerts<br/>
          <a href="https://musicstore.oldtownschool.org">Old Town School Music Store</a> open 11:00am - 7:00pm<br/>
          Gear Check – room 201 in the West building, second floor wing (2W)
          </p>
          <p className="italic mb-10">Complimentary coffee provided by Acoustic Coffee in both buildings daily.</p>

          <div className="bg-gray-200 h-2 w-full"></div>

          <h3 className="font-aurochs mt-10 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Friday, August 25th</h3>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Check-In - West Lobby</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >9:30am - 4:00pm	For Single Day All-Access Passholders & Luthier Showcase Day Passes </p>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Luthier Showcase</p>
          <p className="text-lg leading-relaxed" >East, 3rd Floor</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >10:00am - 12:30pm	Luthier Showcase Exhibit Halls Open</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >12:30pm-1:30pm 	Exhibitor Break Time, Exhibits closed</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >1:30pm - 5:00pm	Luthier Showcase Exhibit Halls Open</p>

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
          <p className="pl-4 mb-4  text-lg leading-relaxed" >3:00pm - 4:30pm	The Summit Science Fair: Forward-Thinking Gear & Composing feat. Andy Pitcher, Duncan Price and special guests</p>


          <p className="text-lg leading-relaxed" >Mabie Gallery - West</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >12:00pm - 12:45pm Broonzy & Lennon - discussion and performances on OTSFM&apos;s Big Bill Broonzy and John Lennon Martin Guitars. With Chris Walz, Rebecca Jasso, Dick Boak, and Colby Maddox</p>

          <p className="pl-4 mb-4  text-lg leading-relaxed" >4:00pm - 4:45pm  I Am Bob Taylor of Taylor Guitars...Live AMA: Ask one of the guitar world&apos;s most successful figures anything you want about running a guitar company, inventing, sustainability, design or life. </p>

          <p className="pl-4 text-lg leading-relaxed" >B6 West - Basement</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >11:00am - 4:00pm	The Truth About Vintage Amps Room: Try Some Truly Unique and Rare Tube Amps As Mentioned on the Podcast</p>

          <p className="text-lg leading-relaxed" >211 & 212 West - Second Floor</p>

          <p className="pl-4 mb-4  text-lg leading-relaxed" >11:00am - 4:00pm	The Blue Guitars Exhibition from the Archtop Foundation</p>


          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Concert Performances</p>
          <p className="italic mb-4 text-lg" >Concert performances are included with 3-Day All-Access and 1-Day All Access Pasess only. Limited tickets may be available for purchase, see box office for details. Seating is general admission. </p>

          <p className="text-lg leading-relaxed" >Maurer Hall - West</p>
          <p className="pl-4 text-lg leading-relaxed" >7:15pm		Doors Open For Concert Seating, General Admission</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >8:00pm 		Jorma Kaukonen with Jack Broadbent opening</p>

          <p className="text-lg leading-relaxed" >Szold Hall - East</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >8:30pm Summit Shorts: All-star short sets featuring Paul Asbell, Adam Miller, Jamie Stillway, Wayne Henderson & Jake Eddy.</p>

          <p className="mt-4 text-lg leading-relaxed" >Cafe & Bars open 1:00pm - 5:00pm & during concerts<br/>
          <a href="https://musicstore.oldtownschool.org">Old Town School Music Store</a> open 11:00am - 7:00pm <br/>
          Gear Check  – room 201 in the West building, second floor wing (2W)
          </p>
          <p className="italic mb-10">Complimentary coffee provided by Acoustic Coffee in both buildings daily.</p>


          <div className="bg-gray-200 h-2 w-full"></div>

          <h3 className="font-aurochs mt-10 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Saturday, August 26th</h3>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Luthier Showcase</p>
          <p className="text-lg leading-relaxed" >East, 3rd Floor</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >10:00am - 12:30pm	Luthier Showcase Exhibit Halls Open</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >12:30pm-1:30pm 	Exhibitor Break Time, Exhibits closed</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >1:30pm - 5:00pm	Luthier Showcase Exhibit Halls Open</p>

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

          <p className="pl-4 mb-4 text-lg leading-relaxed" >11:00am - 11:45am	Workshop: Stevie Wonder, Cole Porter, and The Beatles for Fingerstyle Guitar With Michael J. Miles</p>
          <p className="pl-4 mb-4 text-lg leading-relaxed" >12:00pm - 12:45pm Introduction to Powers Electrics with Andy Powers. Interview by Josh Scott (JHS) and special guest Drew Shirley (Switchfoot) </p>
          <p className="pl-4 mb-4 text-lg leading-relaxed" >3:00pm - 3:45pm	Workshop: Effects Pedals For Guitarists with Charles Kim</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >4:00pm - 5:00pm	The Friends of G. Weller Happy Hour</p>


          <p className="text-lg leading-relaxed" >West, B6 - Basement</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >11:00am - 4:00pm	The Truth About Vintage Amps Room: Try Some Truly Unique and Rare Tube Amps As Mentioned on the Podcast</p>

          <p className="text-lg leading-relaxed" >West, 211 & 212 - Second Floor</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >11:00am - 4:00pm	The Blue Guitars Exhibition from the Archtop Foundation</p>



          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Concert Performances</p>
          <p className="italic mb-4  text-lg" >Concert performances are included with 3-Day All-Access and 1-Day All Access Pasess only. Limited tickets may be available for purchase, see box office for details. Seating is general admission.</p>

          <p className="text-lg leading-relaxed" >Maurer Hall - West</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >7:15pm		Doors Open For Concert Seating, General Admission</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >8:00pm 		Tommy Emmanuel with Nathan Graham opening</p>


          <p className="text-lg leading-relaxed" >Szold Hall - East</p>
          <p className="pl-4 mb-4 text-lg leading-relaxed" ><span class="line-through">8:00pm		Via Mardot scores the 1934 stop-motion masterpiece, <span class="italic">The Mascot</span></span> <span class="italic">This Performance Has Been Canceled</span></p>
          <p className="pl-4 mb-4 text-lg leading-relaxed" >8pm  &quot;The Show Must Go On&quot; Live Score To A Film TBD – featuring Duncan Price, Mike Adams and Friends</p>
          <p className="pl-4 mb-4 text-lg leading-relaxed" >9:00pm After performances	Late Night &quot;Summit All-Star Super Session:&quot; Ethan Sherman, Adam Levy, Ryan Richter and special guests </p>

          <p className="mt-4  text-lg leading-relaxed" >Cafe & Bars open 11:00am - 5:00pm & during concerts <br/>
          <a href="https://musicstore.oldtownschool.org">Old Town School Music Store</a> open 11:00am - 7:00pm <br/>
          Gear Check is located in room 201 in the West building, second floor wing (2W)
          </p>
          <p className="italic mb-10">Complimentary coffee provided by Acoustic Coffee in both buildings daily.</p>

        </div>


      </main>
      <Footer />
    </>
  );
}
