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
            {/* <p className="font-bold text-2xl">The Summit isn&apos;t just about shopping. You&apos;ll be able to meet some of the most inspiring performers and makers in the guitar universe. All-access passholders get access to three days of world-class concerts, master classes, music workshops, oral histories, podcast tapings, demo rooms, and parties created just for the Fretboard Summit attendees. </p>

            <p className="font-bold text-2xl mt-4">Our 2024 lineup is a who&apos;s who of players and builders. We&apos;ll hear music from Blake Mills, Joe Henry, Valerie June, Colin Hay, Nathan Graham, Jake Eddy, Adam Levy & Rich Hinman, Ryan Richter, Matt Munisteri, Joel Paterson, and Jonathan Stout. Sofia Wolfson, Molly Miller, Rhett Shull and John Leventhal are leading workshops (among many others).</p>

            <p className="font-bold text-2xl mt-4">Acclaimed vintage gear authorities from Emerald City Guitars, TJ Thompson Guitars, and others will be on-hand, as will Josh Scott of JHS Pedals, Matt Munisteri, Bob Taylor (Taylor Guitars), Michael Millard (Froggy Bottom), and nearly 100 acclaimed independent guitarmakers.</p>

            <p className="font-bold text-2xl mt-4">We&apos;ll also have live podcast tapings; late-night jams; interviews with some of our heroes; hands-on exhibits and more. It&apos;s a guitar festival like no other and we can&apos;t wait for you to see what we&apos;ve cooked up this year!</p> */}

            <p className="font-bold text-2xl mt-4">The Summit is the guitar festival of our dreams, where you can meet some of the most inspiring performers and makers in the gear universe.</p>

            <p className="font-bold text-2xl mt-4">All-access passholders get access to three days of world-class concerts, master classes, music workshops, oral histories, podcast tapings, demo rooms, and parties, in addition to admission to the 80-exhibitor lutherie showcase.</p>

            <p className="font-bold text-2xl mt-4">Join us for a once-in-a-lifetime weekend.</p>

            <p className="font-bold text-2xl mt-4 mb-8">– Jason Verlinde, Fretboard Journal</p>
            
          </div>

          


        {/* commented out  6/21/2024 */}
          <Slider {...settings}>
          <div>
              <Image src="/FBS24-Friday-A3.png" width={600} height={600} alt="Line Up Schedule fri 1"/>
            </div>
            <div>
              <Image src="/FBS24-Saturday-B3.png" width={600} height={600} alt="Line Up Schedule sat 1" />
            </div>
            <div>
              <Image src="/FBS24-Sunday-C3.png" width={600} height={600} alt="Line Up Schedule sun 1" />
            </div>
            <div>
              <Image src="/FBS24-Info-D3.png" width={600} height={600} alt="Line Up Schedule Info" />
            </div>
          </Slider>
        </div>


        {/* this was commented out 2023 ignore */}
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


          <p className="italic text-sm leading-relaxed">Updated: August 20, 2024</p>
          <p className="font-bold text-sm leading-relaxed">Fretboard Summit 2024: Full Course Descriptions </p>
          

          

          <h3 className="font-aurochs mt-2 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Friday, August 23, 2024 </h3>

          <p className="italic mb-4  text-lg" >Exclusive Content for 3-Day Passholders Only<br/> Check-in begins at 9am. (Times subject to change)</p>

         

          <p className="font-bold mt-4 leading-relaxed" >10:00am Opening Remarks </p>
          <p className="text-lg leading-relaxed" >Old Town School of Folk Music&apos;s Jim Newcomb and the Fretboard Journal&apos;s Jason Verlinde kick off the Summit with this welcome session exclusively for three-day attendees and exhibitors. We&apos;ll quickly go over Summit announcements, late-breaking developments, and possibly a surprise or two. (Maurer Hall - West) </p>
          
          <p className="font-bold mt-4 leading-relaxed" >11:00am Workshop: John Leventhal on the Art of Accompaniment </p>
          <p className="text-lg leading-relaxed" >Six-time Grammy winner John Leventhal joins us for a can&apos;t-miss workshop on the Art of Accompaniment. John&apos;s resume is peerless: In addition to being a prolific songwriter and producer, he&apos;s backed the likes of Bob Dylan, Jackson Browne, Rodney Crowell and Willie Nelson on guitar. In 2024, he released his long-overdue solo album, Rumble Strip. (Maurer Hall - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >12:00pm Lunch</p>
          
          <p className="font-bold mt-4 leading-relaxed" >12:00pm Break Through the Noise: Pedals for Guitarists with Charles Kim</p>
          <p className="text-lg leading-relaxed" >There are a dizzying array of pedal and sound options for new guitarists. Break through the noise in this workshop. We&apos;ll go over different pedal and sound styles including Distortion, Overdrive, Fuzz, Delay, Reverb, Chorus, Loopers, and more. You&apos;ll walk away with an understanding of which pedals to start with, the gear that suits your playing style, and how to arrange your effects for optimal performance. We&apos;ll also go over common mistakes to avoid when assembling your pedal board. (Mabie Gallery - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >1:00pm Lutherie Showcase Opens</p> 
          <p className="text-lg leading-relaxed" >Exclusive preview of the Summit lutherie showcase just for three-day attendees. Scattered between the Old Town School of Folk Music&apos;s two buildings, Summit goers can find nearly 80 brands and solo builders showcasing their latest wares. Meet some of the legends of the gear industry and be on the lookout for numerous instrument models launching at this year&apos;s Summit. Demo/listening rooms are available if you need a quiet space to try things out. (Both OTSFM buildings) </p>
          
          <p className="font-bold mt-4 leading-relaxed" >1:00pm The Truth About Vintage Amps Demo Room </p>
          <p className="text-lg leading-relaxed" >The community behind the Truth About Vintage Amps podcast share some of their favorite tube amps for anyone to try out. Come see what all the vacuum tube fuss is about…and try out some guitars by Grez and others. (B-1, West building). Runs through 5pm.</p>
          
          <p className="font-bold mt-4 leading-relaxed" >1:00pm Vintage Acoustics Tell-All with TJ Thompson and Mark Stutman </p>
          <p className="text-lg leading-relaxed" >TJ Thompson and Mark Stutman (Folkway Music) are two of the world&apos;s most acclaimed acoustic guitar repair people. They also think about things differently than your average luthier. In this annual double-session, TJ and Mark field your questions on the magic (and quirks) found inside vintage Martin and Gibson flattops. (Maurer Hall - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >1:00pm Catfish Keith Performance </p>
          <p className="text-lg leading-relaxed" >SCGC presents a very special performance featuring blues singer-songwriter and guitarist Catfish Keith. Keith combines deep string bending and harp, skank, and sweep harmonics to create a percolating palette of guitar sounds. (Szold Hall - East)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >2:00pm Q&A with Thomas Ripsam, Martin CEO</p>
          <p className="text-lg leading-relaxed" >Catch a live Fretboard Journal Podcast taping featuring Martin CEO Thomas Ripsam. Ripsam, who succeeded Chris Martin IV in 2021, will field questions on sustainability, Martin&apos;s future, its lineup of products, the challenges (and joys) of running a legacy brand, and much more. (Szold Hall - East)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >2:00pm Workshop: Vishnu R, Carnatic / Indian Jazz Demonstration</p>
          <p className="text-lg leading-relaxed" >Catch Carnatic/Indian jazz composer and musician Vishnu R perform on his custom-made Navtar, a one-of-a-kind, 9-string instrument he designed combining distinct fretted, fretless, and 12-string harp elements together, enabling a unique Indian meets Jazz Fusion sound. (Mabie Gallery - West) </p>
          
          <p className="font-bold mt-4 leading-relaxed" >3:00pm The Future of Vintage: Buying and Selling Trends in 2024 and Beyond</p>
          <p className="text-lg leading-relaxed" >Three of the most successful and respected vintage brick & mortar stores are attending this year&apos;s Summit: Emerald City Guitars, Elderly Instruments, and Mass Street Music. During this panel discussion, we&apos;ll hear about their strategies for landing (and selling) instruments, the buying trends they&apos;ve noticed on the frontlines, and how they&apos;re utilizing social media to thrive. (Maurer Hall - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >3:00pm The Relaunch of Gallagher Guitars </p>
          <p className="text-lg leading-relaxed" >Gallagher Guitars&apos; owner David Mathis talks about the monumental task of restarting one of the most storied acoustic guitar brands of all time, Gallagher Guitars. In addition to sharing insights into where the guitar company is headed, there will be plenty of music played, too. (Szold Hall - East)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >3:00pm Hands-On: Aviate Audio Tone Designer Demo</p>
          <p className="text-lg leading-relaxed" >Aviate Audio hosts a workshop about designing audio signal chains…with a prize at the end! During this workshop, guitarists can use Aviate&apos;s Multiverse to create their own preset tones, which will be featured at the Aviate Audio Summit demo station all weekend long. Summit goers will pick their favorites and, on Sunday, the competitor with the most votes takes home a Multiverse pedal! (Mabie Gallery - West) </p>
          
          <p className="font-bold mt-4 leading-relaxed" >4:00pm Concert: Sofia Wolfson</p>
          <p className="text-lg leading-relaxed" >NY-based singer-songwriter performs music from her highly-recommended 2024 album, Imposing on a Hometown. Wolfson is a rising talent to watch, was a recent guest on the Fretboard Journal Podcast, and is one of our magazine&apos;s newest contributors. Come see what all the fuss is about. (Maurer Hall - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >4:00pm Break Out of Your Rut With Guitar Habit Science by Tony Polecastro</p>
          <p className="text-lg leading-relaxed" >Learn how to leverage the foundational (and simple) concepts of habit science to break out of your guitar rut and be sure that it never happens again. In this workshop we&apos;ll apply concepts and frameworks from leading habit science figures (James Clear, Charles Duhigg, BJ Fogg, and others) directly to your guitar routine and the goals you have. After looking at your guitar routine and goals through this new &quot;habit lens,&quot; you&apos;ll find that with some subtle tweaks and new perspectives your new guitar habit will result in continual progress and be sustainable for you and your unique life situation. (Szold Hall - East)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >5:00pm Happy Hour </p>
          <p className="text-lg leading-relaxed" >Have a drink, relax and connect with fellow Summit attendees, exhibitors, luthiers, and speakers. (Mabie Gallery - West/Courtyard)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >Friday Evening Concerts 
          8:00pm Joe Henry & Blake Mills </p>
          <p className="text-lg leading-relaxed" >A Summit exclusive double-bill featuring two of the world&apos;s most acclaimed singer-songwriters/producers/guitar fanatics, Joe Henry and Blake Mills. (Maurer Hall - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >8:00pm Jake Eddy&apos;s Fretboard Opry </p>
          <p className="text-lg leading-relaxed" >Bluegrass maverick Jake Eddy makes his third appearance at the Fretboard Summit with some help from guitarists Jordan Tice and Cameron Knowler. Brought to you by Yamaha Guitars. (Szold Hall - East)</p>
          


          <div className="bg-gray-200 h-2 w-full mt-6"></div>

          <h3 className="font-aurochs mt-10 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Saturday, August 24, 2024 </h3>
          <p className="italic mb-4  text-lg" >Check-in begins at 9:30am. <br/> Workshops & Exhibitor Showcase begins at 10am. (Times subject to change)</p>

          <p className="font-bold mt-4 leading-relaxed" >10:00am Lutherie Showcase Opens </p>
          <p className="text-lg leading-relaxed" >Our 80-exhibitor lutherie showcase features a wide array of electric and acoustic guitarmakers, pedal brands, amp companies and more. Spread throughout Old Town School of Folk Music&apos;s two buildings, there&apos;s something for every guitar collector. (Both buildings)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >10:00am Truth About Vintage Amps Room</p>
          <p className="text-lg leading-relaxed" >The community behind the Truth About Vintage Amps podcast share some of their favorite tube amps for anyone to try out. Come see what all the vacuum tube fuss is about…and try out some guitars by Grez and others. (B-1, West building). Runs through 5pm.</p>
          
          <p className="font-bold mt-4 leading-relaxed" >10:00am Live Podcast: Joe Henry and Blake Mills</p> 
          <p className="text-lg leading-relaxed" >Joe Henry is not only one of our favorite artists, he&apos;s one of our favorite thinkers. Watch him and Blake Mills discuss music, art, production and more in this live taping of a Fretboard Journal Podcast. At our very first Summit in 2015, Joe had an unforgettable podcast chat with David Crosby; we&apos;re excited to have him put his interview hat on again. (Maurer Hall - West) </p>
          
          <p className="font-bold mt-4 leading-relaxed" >10:00am The True Story of the Martin Dreadnought Guitar with Greig Hutton</p>
          <p className="text-lg leading-relaxed" >Famed guitar historian and author (Hutton&apos;s Guide to Martin Guitars) Greig Hutton sheds light on the fascinating events that led to one of the most iconic guitar shapes of all-time, Martin&apos;s dreadnought. Martin fans should also note that Hutton will also be in the front lobby throughout the Summit weekend sharing his Martin shipping records database. Just bring your vintage instrument&apos;s serial number and hear all about it. He also has Gibson shipping records from 1935-1953. (Szold Hall - East Hall)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >11:00am Guitar Repair Roundtable</p>
          <p className="text-lg leading-relaxed" >Five of the world&apos;s best guitar repairpeople - Evan Gluck, Mark Stutman, Tyler Geske, TJ Thompson, and Trevor Healy– field your questions on all things guitar repair and restoration. (Maurer Hall - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >11:00am Songwriting Workshop with Sofia Wolfson</p>
          <p className="text-lg leading-relaxed" >Sofia Wolfson is a writer, singer-songwriter, and educator currently based in New York. During this class, she&apos;ll give even the most apprehensive songwriter some tools to get you going. Freewriting, song structure, and more will be discussed. (Szold Hall - East)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >11:00am Andy Powers Jam </p>
          <p className="text-lg leading-relaxed" >Celebrate the release of the 500th Powers Electric by hearing some music from polymath and Taylor Guitars CEO Andy Powers. (Mabie Gallery - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >12pm Brown Bag Pop-Up </p>
          <p className="text-lg leading-relaxed" >Broonzy, Lennon, and Their Fine Guitars (West Building, Resource Center) </p>
          
          <p className="font-bold mt-4 leading-relaxed" >1:00pm Chicago&apos;s Influence on Gibson with Mat Koehler </p>
          <p className="text-lg leading-relaxed" >Chicago Musical Instruments bought Gibson in 1944, but even before, there were strong ties between Kalamazoo and the Windy City which resulted in some game-changing innovations. The CMI sales team influenced where Gibson chose to innovate, but behind the scenes, two legendary Chicago design firms pushed Gibson well outside their comfort zone to create some of the most famous models and features ever. Join Mat Koehler, Gibson&apos;s VP of Product, for an enlightening history lesson. (Maurer Hall - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >1:00pm Women in Lutherie: EJ Henderson and Sarah Weinberg</p>
          <p className="text-lg leading-relaxed" >North Carolina-based luthier EJ Henderson is currently mentoring Tel Aviv&apos;s Sarah Weinberg as part of the global Women in Lutherie program (@womeninlutherie). During this session, we&apos;ll hear about the program, their thoughts on how to inspire young women into the craft of building, and more. (Szold Hall - East)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >2:00pm Luthier on Luthier: Michael Millard (Froggy Bottom)</p>
          <p className="text-lg leading-relaxed" >Watch a live taping of Michael Bashkin&apos;s popular Luthier on Luthier Podcast with special guest, Michael Millard of Froggy Bottom Guitars. A true legend in the world of custom acoustic guitars, Millard recently announced that – after 55 years of building – he may be retiring soon. Hear about Froggy Bottom&apos;s past, present and future in what will surely be a memorable conversation. (Maurer Hall - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >2:00pm Pedal Makers Roundtable, hosted by Phillip Carter (40 Watt Podcast)</p>
          <p className="text-lg leading-relaxed" >A mini-Summit featuring a handful of the coolest pedal builders around: JHS, Chase Bliss, Madsen Amplification, R2R Electric, Union Tube & Transistor, and Benson Amplifiers. How&apos;s the pedal business today? What inspires them? Are there too many pedals? We&apos;ll find out. (Szold Hall - East)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >2:00pm Fingerstyle Guitar Workshop with Michael J. Miles </p>
          <p className="text-lg leading-relaxed" >Elevate your fingerstyle game with Old Town School of Folk Music&apos;s very own Michael J. Miles. (Mabie Gallery - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >3:00pm AMA with Bob Taylor, Founder of Taylor Guitars </p>
          <p className="text-lg leading-relaxed" >A Summit perennial: Bob Taylor (Taylor Guitars) once again fields your questions about, well, anything. (Maurer Hall - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >3:00pm The JHS Pedals&apos; Fretboard Summit Science Fair</p>
          <p className="text-lg leading-relaxed" >Josh Scott of JHS Pedals hosts the always entertaining Fretboard Summit Science Fair, where the Summit&apos;s most forward-thinking minds show off their latest inventions. Patterned after your old elementary school science fair, this laid-back double-session is filled with discoveries and laughs. (Szold Hall - East) </p>
          
          <p className="font-bold mt-4 leading-relaxed" >3:00pm Elements of Style: John Fahey and American Primitivism</p>
          <p className="text-lg leading-relaxed" >Detroit-based educator and performer Nick Schillace leds a workshop on John Fahey and American Primitivism. John Fahey sorted through and applied the influences that brought him to music and the guitar, and in doing so created a unique and often imitated voice. Taking a closer look at Fahey&apos;s music helps to better understand this process and in doing so will hopefully help us understand our own playing. Students should have an intermediate understanding of fingerpicking with an alternating bass technique. (Mabie Gallery - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >4:00pm Happy Hour Concert: Ron Artis II</p>
          <p className="text-lg leading-relaxed" >Hawaiian-born Ron Artis II (Ron Artis Family Band) does it all – rock, folk, jazz, blues, and soul. Watch this Santa Cruz Guitar Co. recording artist who Jack Johnson declared “an amazing voice.” (Maurer Hall - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >4:00pm DIY and Home Recording Hacks with Taylor Goss </p>
          <p className="text-lg leading-relaxed" >Taylor Goss is an up-and-coming engineer who has worked at both Jackson Browne&apos;s famed Groovemasters studio, as well as Rick Rubin&apos;s Shangri-La. In this exclusive session, he&apos;ll share some DIY recording tips and hacks that you can use at home. We&apos;ll also get hands-on with the products showcased at the Summit by Warm Audio and RODE. (Mabie Gallery - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >5:00pm Listening Party: Cameron Knowler&apos;s &apos;CRK&apos; </p>
          <p className="text-lg leading-relaxed" >Frequent Fretboard Journal contributor Cameron Knowler is about to release a wildly inventive acoustic album called &apos;CRK.&apos; In this session, he&apos;ll preview some tracks from the album, along with some of the rare vintage acoustics that he used to make it. (Mabie Gallery - West)</p>
          
          <h3 className="font-aurochs mt-10 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed" >Saturday Evening Concerts </h3>
          <p className="font-bold mt-4 leading-relaxed" >8:00pm Colin Hay (opening: Nathan Graham) </p>
          <p className="text-lg leading-relaxed" >Chicago&apos;s Nathan Graham was so great at last year&apos;s Fretboard Summit, we had to have him back. Then we&apos;ll get an intimate set from Colin Hay (Men at Work), a consummate guitarhead and one of the finest songwriters and storytellers alive today. (Maurer Hall - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >8:00pm Ryan Richter/G. Weller/Adam Levy & Rich Hinman </p>
          <p className="text-lg leading-relaxed" >Head on over to Szold Hall - East to hear some of the most adventurous music you&apos;ll find at this year&apos;s Summit. Having played steel and guitar for the likes of Ryan Beatty, Lizzy McAlpine, Dijon and others, LA&apos;s Ryan Richter will perform his recent 15-minute long debut album in its entirety. We&apos;ll then be treated to a short set from G. Weller, the elusive subject of the Fretboard Journal&apos;s most confusing podcast to date. Last, but not least, we close the party out with Adam Levy & Rich Hinman. (Szold Hall - East)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >10:30pm Molly Miller Jam</p>
          <p className="text-lg leading-relaxed" >Dr. Molly Miller, Andy Powers and friends close out the night back at the Mabie Gallery, for those of you who just can&apos;t sleep. (Mabie Gallery - West)</p>




          <div className="bg-gray-200 h-2 w-full mt-6"></div>

          <h3 className="font-aurochs mt-10 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Sunday, August 25, 2024 </h3>
          <p className="italic mb-4  text-lg" >Check-in begins at 9:30am. <br/> Workshops & Exhibitor Showcase begins at 10am. (Times subject to change)</p>

          <p className="font-bold mt-4 leading-relaxed" >10:00am Lutherie Showcase Opens </p>
          <p className="text-lg leading-relaxed" >Our 80-exhibitor lutherie showcase features a wide array of electric and acoustic guitarmakers, pedal brands, amp companies and more. Spread throughout Old Town School of Folk Music&apos;s two buildings, there&apos;s something for every guitar collector. (Both buildings)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >10:00am Truth About Vintage Amps Room</p>
          <p className="text-lg leading-relaxed" >The community behind the Truth About Vintage Amps podcast share some of their favorite tube amps for anyone to try out. Come see what all the vacuum tube fuss is about…and try out some guitars by Grez and others. (B-1, West building). Runs through 3pm.</p>
          
          <p className="font-bold mt-4 leading-relaxed" >10:00am New Acoustics With Old Souls</p>
          <p className="text-lg leading-relaxed" >TJ Thompson, Steve Nall (Nully) from Collings and John Slobod (Circa Guitars) are known for making new guitars that sound like the old ones we all covet. How do they do it? What&apos;s important and what isn&apos;t? Hopefully they&apos;ll spill some beans and field your questions. (Maurer Hall - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >10:00 Dr. Molly Miller: The Fundamentals of Chord Melody</p>
          <p className="text-lg leading-relaxed" >Famed USC professor Dr. Molly Miller walks you through the fundamentals of chord melody in this intermediate level class. Using a simple melody like “You Are My Sunshine,” she&apos;ll show you how different chord melody voicings can transform a song entirely. (Szold Hall - East)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >11:00am Gateways Between the Octave Mandolin and Guitar </p>
          <p className="text-lg leading-relaxed" >While the mandolin and guitar have their differences the fertile ground between them is a very interesting place to explore. Specifically, the octave mandolin enters a design space familiar to the guitarist while offering new possibilities in tone, playability, tunings, voicings, and more. Join Jake Howard of the Henhouse Prowlers for a musical conversation where the mandolin and guitar meet. (Maurer Hall - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >11:00am Is the Internet Ruining Guitar? with Rhett Shull</p>
          <p className="text-lg leading-relaxed" >As one of the most popular guitar YouTubers around, Rhett Shull has a unique perspective on the world of social media, gear, and guitar playing. Join Rhett for an unfiltered talk about making a living (or not) as a guitarist in 2024. (Szold Hall - East)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >1:00pm Live Podcast: Valerie June </p>
          <p className="text-lg leading-relaxed" >Jason Verlinde of the Fretboard Journal interviews Valerie June about songwriting, tradition, Sister Rosetta Tharpe and more in this live Fretboard Journal Podcast taping. (Maurer Hall - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >1:00pm Your Guitar and Your Brain: Of Neurology and Psychology with John Thomas</p>
          <p className="text-lg leading-relaxed" >In a preview of portions of his upcoming book, The Acoustic Guitar: Inside the World&apos;s Most Popular Musical Instrument (Oxford University Press, 2025), John Thomas will lead an inquiry into how our brains enable us to experience the vibrations emanating from our guitars as musical tones. First, the workshop will consider neurology to assist us in figuring out how our brains convert quavering molecules of air into something we recognize as sound.(Szold Hall - East)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >1:00 Swing-Era Chord Melody Workshop with Jonathan Stout</p>
          <p className="text-lg leading-relaxed" >Los Angeles-based Jonathan Stout is a bandleader, swing guitarist and drummer who has thoroughly immersed himself in the music of Allan Reuss and George Van Eps. During this Summit session, he&apos;ll walk students through a couple of historical examples of chord melody, with transcriptions provided, and give you some basic chord shapes. 
          (Mabie Gallery - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >2:00pm Adam Levy & Rich Hinman on Playing with Singers </p>
          <p className="text-lg leading-relaxed" >Adam Levy famously played guitar alongside Norah Jones, Tracy Chapman, and Amos Lee. Rich Hinman has performed with Sara Bareilles, Rosanne Cash, k.d. lang, and even Cyndi Lauper. What are the secrets to playing with singers? Hear these two masters share their insights. (Maurer Hall - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >2:00pm Craig Korth on Psychedelic Therapy, Focal Dystonia and the Art of Taking Care of Yourself </p>
          <p className="text-lg leading-relaxed" >Bluegrass musician Craig Korth was one of the most-downloaded Fretboard Journal Podcast subjects of all time when he candidly shared how psychedelic therapy helped him overcome focal dystonia and play music again. In this follow-up Summit session, Folkway Music&apos;s Mark Stutman interviews Craig about how he&apos;s doing today and about the mental health journey he&apos;s been on. (Szold Hall - East)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >3:00pm Introducing: The Archtop Project with Tom Nania</p>
          <p className="text-lg leading-relaxed" >D&apos;Addario&apos;s Tom Nania walks us through the Archtop Project, an open-source, digital museum displaying historic and contemporary archtop guitars as they&apos;ve never been viewed before – from the inside-out. Each instrument page is a comprehensive analysis complete with CT scans to view the internal structure, acoustics testing including 360-degree acoustic radiation and modal analysis, and high-resolution photographs with audio samples. Inspired by the VSA Oberlin Acoustics Workshop&apos;s Strad 3D project (strad3d.org) and supported by D&apos;Addario & Company and the Archtop Foundation - for the good of guitars. (Szold Hall - East)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >4:00pm Tube Amps in 2024; Plus a special preview of &apos;Dumble: A Well-Built Life&apos; </p>
          <p className="text-lg leading-relaxed" >We keep hearing about the advances made with modeling and even solid-state amps, so do tube amps still matter? In this panel discussion, Chris Benson (Benson Amps) and Eli Lester (Two-Rock) talk about the enduring love for valve amplification…and where they see its future. We&apos;ll also get a sneak peek at the Fretboard Journal&apos;s short film, &apos;Dumble: A Well-Built Life,&apos; starring Ben Harper. (Szold Hall - East)</p>
          
          <h3 className="font-aurochs mt-10 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed" >Sunday Evening Concerts </h3>
          <p className="font-bold mt-4 leading-relaxed" >7:00pm Valerie June (opening: Eli West) </p>
          <p className="text-lg leading-relaxed" >Chicago&apos;s Nathan Graham was so great at last year&apos;s Fretboard Summit, we had to have him back. Then we&apos;ll get an intimate set from Colin Hay (Men at Work), a consummate guitarhead and one of the finest songwriters and storytellers alive today. (Maurer Hall - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >7:00pm Joel Paterson (opening: Jonathan Stout)</p>
          <p className="text-lg leading-relaxed" >A retro, swing-filled night with two of our favorite jazz guitarists: Los Angeles-based guitarist and bandleader Jonathan Stout followed by Chicago treasure Joel Paterson.  (Szold Hall - East)</p>


          <div className="bg-gray-200 h-2 w-full mt-6"></div>

          <h3 className="font-aurochs mt-10 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Plus: Acoustic Cafe at Galloup Guitars Booth (included with all admission tiers) </h3>
          <p className="text-lg leading-relaxed" >At this year&apos;s Fretboard Summit, Galloup Guitars will host a pop-up Acoustic Café. Their aim is to foster interactive conversations through demonstrations, slide shows, and discussions where summit attendees are invited to participate in the experience. The Acoustic Café will be held in the atrium of the Old Town School&apos;s East building at 4545 N Lincoln Avenue.</p>
 
          <p className="text-lg leading-relaxed" >Here&apos;s an overview of the Acoustic Café&apos;s scheduled discussions: </p>

          <h3 className="font-aurochs mt-10 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed" >Friday</h3>
          <p className="font-bold mt-4 leading-relaxed" >1:30pm Bryan Galloup on Tonewood Application and Management</p>
          <p className="text-lg leading-relaxed" >A major concern of all luthiers should be the conservation of global natural resources, particularly with regard to musical grade tone wood. This has been one of the prime focuses for the Acousonix app, a sonic calculator approach that sets the framework for the systematic management of tone woods.</p>
          <p className="text-lg leading-relaxed" >Bryan will conduct a hands-on demonstration of the Acousonix app, demonstrating its operations and how it assists in managing, selecting, and purchasing tone woods. He will also showcase its features that aid luthiers in better controlling the sound of their instruments and more stable instruments.</p>

          <p className="font-bold mt-4 leading-relaxed" >3:30pm Jaime Aulson Myers on Inlay Development and Sustainability</p>
          <p className="text-lg leading-relaxed" >Jaime, a trained Graphic Design artist, has leveraged her skills to craft and cut some of the industry&apos;s most acclaimed inlays for prominent makers and manufacturers. Jaime will discuss the evolution from concept to product, focusing on the detailed process and considerations that are paramount, encompassing both artistic vision and functional aspects. </p>
          <p className="text-lg leading-relaxed" >Furthermore, Jaime will address current concerns around the sustainability of inlay materials, such as abalone, including their sourcing and processing considerations, to ensure environmental responsibility.</p>

          <h3 className="font-aurochs mt-10 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed" >Saturday</h3>
          <p className="font-bold mt-4 leading-relaxed" >10:30am Ian Davlin & James Roadman: New Ideas and Collaborations</p>
          <p className="text-lg leading-relaxed" >During the Covid pandemic, as we know, everyone was locked down and unable to interact personally. Many people turned to online communication, but for those who worked in shops or were accustomed to working with others, this was extremely difficult.</p>
          <p className="text-lg leading-relaxed" >However, some found creative ways to overcome these obstacles. Ian Davlin and James Rodman, for example, developed a system for creating jigs and fixtures. They traded information online, outsourced the production of these tools to facilities, and then had the finished products shipped directly to their homes. They will discuss their process for online collaborations and tool development. </p>


          <p className="font-bold mt-4 leading-relaxed" >12:30pm Joe Glaser & Josh Rawlings: Collection Management with Technology</p>
          <p className="text-lg leading-relaxed" >In these days of deep fakes and AI, truth and provenance are more important than ever. In this conversation, they will discuss Gearcheck, a mobile tool for organizing and preserving everything, as you build a collection from a few items to whatever.</p>

          <p className="text-lg leading-relaxed" >Gearcheck is an ideal structure of photos, appraisals, receipts, ownership tracks, repair history and personal stories, each in their place and ready to enjoy from anywhere. Critically, each bit gets permanently secured in time by the Blockchain.</p>

          <p className="text-lg leading-relaxed" >Provenance is made up of these truth moments. All of it is critical to value - not just what is known, but when it actually was, where, how and by whom.</p>

          <p className="font-bold mt-4 leading-relaxed" >2:30pm Tom Nania & Dustin Miller: Announcing Project Dreadnought</p>
          <p className="text-lg leading-relaxed" >Dustin Miller and Tom Nania will be introducing &quot;Project Dreadnought,&quot; a deep analysis of prewar Martin dreadnought guitars. The project has produced the largest sample size of extensively studied Martin guitars to date. This project combines data on over 150 prewar Martin Dreadnought including, photos, audio recordings, modal analysis, CT and MRI scans, and hundreds of hours of interviews with collectors, players, historians, and dealers.   </p>

          <p className="text-lg leading-relaxed" >The team, consisting of Bryan Galloup, Joe Glaser, Tom Nania, and Dustin Miller, aims to explore various aspects of what makes these guitars heralded as the best in the world. The research will be supported by historical studies and scientific analysis, culminating in a book scheduled for release in the summer of 2025.</p>
          
          <p className="font-bold mt-4 leading-relaxed" >4:30pm Jamie Gale: The Un-Written Future of Guitar…or Why Nobody Plays Their Daddy&apos;s Guitar </p>
          <p className="text-lg leading-relaxed" >Join Jamie Gale, Curator of the NAMM Show&apos;s Boutique Guitar Showcase, for a discussion about the un-written future of guitar.</p>

          <p className="text-lg leading-relaxed" >The most prolific instrument of the last 100 years, the guitar adapts and evolves like no other. Despite the multitudes of irrefutable evidence, notice of its death has been proclaimed many, many times with the passing of each new movement.</p>

          <p className="text-lg leading-relaxed" >What is this feeling of the guitars demise? Where does it come from? And why is it so wrong? And more importantly, how do we prepare for a future that people consistently predict incorrectly?</p>
          
          <h3 className="font-aurochs mt-10 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed" >Sunday</h3>
          <p className="font-bold mt-4 leading-relaxed" >11:00am Cooper Wentz: AI and Product Development</p>
          <p className="text-lg leading-relaxed" >Cooper Wentz is an instructor at the Galloup Luthier School with a keen interest in integrating artificial intelligence into product development. While his background includes a foundational understanding of computers, coding, and software development, his discussion, &quot;AI and Product Development,&quot; highlights how individuals with modest expertise can achieve ambitious goals through AI and self-education. </p>
          <p className="text-lg leading-relaxed" >Cooper will present a sophisticated tool designed to assist with guitar instrument voicing, showcasing how AI and human ambition could revolutionize the process of crafting and refining musical instruments.</p>

          <p className="font-bold mt-4 leading-relaxed" >1:00pm: William Bezard: CNC for Modern Lutherie</p>
          <p className="text-lg leading-relaxed" >As an accomplished guitar player, William leveraged his unique combination of musicianship and technical skills to design some of the most innovative and advanced electric guitars. Today, William is furthering his proficiency in techniques that promise to advance the fields of CNC, CAD, and CAM. </p>
          <p className="text-lg leading-relaxed" >William will demonstrate some of the techniques he&apos;s developed and will be available throughout the summit for hands-on tutoring for individuals seeking additional information about this technology.</p>
          




          </div>

        {/* commented out 6/21/2024 */}
        {/* <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25]">


          <p className="italic text-sm leading-relaxed">Updated August 24, 2023 1:19PM<br/>Schedule subject to change. </p>

          <p className="underline font-bold mt-4  text-lg leading-relaxed">Campus Addresses & Locations:</p>
          <p className="mb-4 text-lg leading-relaxed">
          Old Town School of Folk Music - West, 4544 N. Lincoln Ave.<br/>
          (Maurer Hall, Mabie Gallery, Workshop Rooms, Art Gallery, Music Store, Cafe & Bar)</p>

          <p className="mb-10 text-lg leading-relaxed">
          Old Town School of Folk Music - East, 4545 N. Lincoln Ave.<br/>
          (Szold Hall, Luthier Showcase Exhibit Halls, East Lobby, Workshop Rooms, Cafe & Bar)</p> 

          <h3 className="font-aurochs mt-2 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Thursday, August 24th</h3>

          <p className="italic mb-4  text-lg" >Exclusive For Three-Day All-Access Pass Holders Only</p>

          <p className="underline font-bold mt-4 leading-relaxed" >Check-In - West Lobby</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >12:00pm - 4:00pm</p>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Welcome Remarks</p>
          <p className="text-lg leading-relaxed" >Maurer Hall - West</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >12:30pm  Welcome Remarks with Jason Verlinde, Jim Newcomb, and Acoustic Life&apos;s Tony Polecastro</p>

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

        </div> */}


      </main>
      <Footer />
    </>
  );
}
