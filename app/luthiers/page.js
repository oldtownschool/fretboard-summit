import Image from "next/image";
import { Navbar } from "../components/Navbar.jsx";
import Link from "next/link";
import { Footer } from "../components/Footer";

export default function Luthiers() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-[#322D35] to-[#4C454F]">
        
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

        <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25]">

          {/* <h2 className="text-red-500 mb-10">Please Note: This is content from the 2023 Fretboard Summit for informational purposes only. 2024 info available soon.</h2> */}


          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center">
          CONNECT WITH THE WORLD’S GREATEST GUITAR MAKERS AND TAKE HOME YOUR NEW FAVORITE GEAR
          </h2>

          <p className="font-bold text-2xl mt-6">Try out, demo and purchase new, forthcoming and Summit-exclusive gear from over 50 luthiers, pedal makers, amp, and gear companies.
          </p>

          <p className="font-bold text-2xl mt-4">Among the 2024 confirmed exhibitors: Collings, JHS, Martin, Santa Cruz, Maegen Wells Guitars, Chase Bliss, Baranik Guitars, Taylor, Woolson Soundcraft, Cirrus, StewMac, Yamaha, Ryan Thorell, Uberfrank, Rivière Guitars, Northfield, and dozens more.
          </p>

          <p className="font-bold text-2xl my-4">We&apos;ll be updating the list leading up to the Summit, but rest assured that we&apos;ve curated the Midwest&apos;s largest and finest gathering of makers, players and industry experts.
          </p>

          {/* <p className="font-bold text-2xl my-4">Use this guide to find your favorite Fretboard Summit exhibitors, sponsors, and friends across the two Old Town School of Folk Music buildings below.</p> */}

          {/* <table class="table-auto">
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
              <td><Link href="https://www.baranikguitars.com/">Baranik Guitars</Link></td>
                <td>West - 102</td>
              </tr>
              <tr>
                <td><Link href="https://www.bashkinguitars.com/">Bashkin Guitars</Link></td>
                <td>West - 102</td>
              </tr>
              <tr>
                <td><Link href="https://www.lehmannstrings.com/">Bernie Lehmann</Link></td>
                <td>East - E330 </td>
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
                <td><Link href="https://theblueguitars.com/">The Blue Guitars</Link></td>
                <td>West - 211 & 212 </td>
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
              <tr>
                <td><Link href="https://www.dunelandlabs.com">Duneland Labs</Link></td>
                <td>East - E328</td>
              </tr>
              <tr>
                <td><Link href="https://www.drherringbone.com">Dr. Herringbone</Link></td>
                <td>East - E324</td>
              </tr>
              <tr>
                <td><Link href="https://fetellierguitars.com">FE Tellier Guitars</Link></td>
                <td>East - E328</td>
              </tr>
              <tr>
                <td><Link href="https://flammangguitars.com">Flammang Guitars</Link></td>
                <td>East - E328</td>
              </tr>
              <tr>
                <td><Link href="https://gallagherguitar.com">Gallagher Guitars</Link></td>
                <td>East - E330</td>
              </tr>
              <tr>
                <td><Link href="https://www.galloupguitars.com/galloup-school/">Galloup School Of Guitar Building & Repair</Link></td>
                <td>East - Lobby</td>
              </tr>
              <tr>
                <td><Link href="https://www.grezguitars.com">Grez Guitars</Link></td>
                <td>West - 102</td>
              </tr>
              <tr>
                <td><Link href="http://www.h-guitars.com">H Guitars</Link></td>
                <td>East - E330</td>
              </tr>
              <tr>
                <td><Link href="https://www.henriksenamplifiers.com/">Henriksen Amplifiers Listening Room</Link></td>
                <td>East - E320</td>
              </tr>
              <tr>
                <td><Link href="https://www.carbonfibercases.com/">Hoffee Cases</Link></td>
                <td>East - E326</td>
              </tr>
              <tr>
                <td><Link href="http://www.humphreyamps.com/">Humphrey Amps</Link></td>
                <td>East - E320</td>
              </tr>
              <tr>
                <td><Link href="https://hussanddalton.com/">Huss & Dalton</Link></td>
                <td>East - E330</td>
              </tr>
              <tr>
                <td><Link href="https://hybrid-guitars.com/">Hybrid Guitars</Link></td>
                <td>East - E324</td>
              </tr>
              <tr>
                <td><Link href="https://www.jrieck.com/">J. Rieck Lutherie</Link></td>
                <td>East - E330</td>
              </tr>
              <tr>
                <td><Link href="https://www.irisguitarcompany.com/">Iris Guitar Company</Link></td>
                <td>East - E328</td>
              </tr>
              <tr>
                <td><Link href="https://kostalguitars.com/">Jason Kostal Guitars</Link></td>
                <td>West - 102</td>
              </tr>
              <tr>
                <td><Link href="https://www.jhspedals.info/">JHS Pedals</Link></td>
                <td>West - 102</td>
              </tr>
              <tr>
                <td><Link href="https://www.kelleylaneguitars.com/">Lane Guitars</Link></td>
                <td>East - E326</td>
              </tr>
              <tr>
                <td><Link href="http://www.lattanzeguitars.com/">Lattanze Guitars</Link></td>
                <td>East - E326</td>
              </tr>
              <tr>
                <td><Link href="https://www.leavittlutherie.com/">Leavitt Stringed Instruments</Link></td>
                <td>East - E328</td>
              </tr>
              <tr>
                <td><Link href="https://www.lockhorninstruments.com">Lockhorn Instruments</Link></td>
                <td>East - E328</td>
              </tr>
              <tr>
                <td><Link href="https://www.lyonhealycorporation.com/brands/">Lyon and Healy</Link></td>
                <td>East - E328</td>
              </tr>
              <tr>
                <td><Link href="https://www.m-tone.com">M-Tone Guitars</Link></td>
                <td>East - E330</td>
              </tr>
              <tr>
                <td><Link href="http://www.maegenwellsguitars.com">Maegen Wells Guitars & Mandolins</Link></td>
                <td>East - E326</td>
              </tr>
              <tr>
                <td><Link href="https://www.martinguitar.com/">Martin Guitar</Link></td>
                <td>East - E220</td>
              </tr>
              <tr>
                <td><Link href="https://www.michaelkennedyguitars.com">Michael Kennedy Guitars</Link></td>
                <td>East - E326</td>
              </tr>
              <tr>
                <td><Link href="https://www.mojotone.com">Mojotone</Link></td>
                <td>West - 102</td>
              </tr>
              <tr>
                <td><Link href="https://www.motanderguitars.com">Motander Guitars</Link></td>
                <td>East - E330</td>
              </tr>
              <tr>
                <td><Link href="https://musiccitybridge.com">Music City Bridge</Link></td>
                <td>East - E330</td>
              </tr>
              <tr>
                <td><Link href="https://www.noemiguitars.com">Noemi Guitars</Link></td>
                <td>East - E326</td>
              </tr>
              <tr>
                <td><Link href="https://www.northfieldinstruments.com">Northfield Instruments</Link></td>
                <td>West - Music Store</td>
              </tr>
              <tr>
                <td><Link href="https://www.northwoodsluthiers.com">North Woods Luthiers</Link></td>
                <td>East - E324</td>
              </tr>
              <tr>
                <td><Link href="https://musicstore.oldtownschool.org">Old Town School Music Store</Link></td>
                <td>West - Music Store</td>
              </tr>
              <tr>
                <td><Link href="https://www.oldtownschool.org/resourcecenter/">Old Town School of Folk Music Resource Center</Link></td>
                <td>West - Basement</td>
              </tr>
              <tr>
                <td><Link href="https://pacificrimtonewoods.com/">Pacific Rim Tonewoods</Link></td>
                <td>East - E324</td>
              </tr>
              <tr>
                <td><Link href="https://www.phoenixguitarco.com">Phoenix Guitars</Link></td>
                <td>East - E330</td>
              </tr>
              <tr>
                <td><Link href="https://www.pre-warguitars.com">Pre-War Guitars Co.</Link></td>
                <td>East - E324</td>
              </tr>
              <tr>
                <td><Link href="https://pktguitars.com/">Preston Thompson Guitars</Link></td>
                <td>East - E226</td>
              </tr>
              <tr>
                <td><Link href="https://robertrobinsonguitars.com">R. Robinson Guitars</Link></td>
                <td>East - E326</td>
              </tr>
              <tr>
                <td><Link href="https://reywasguitars.com">Reywas Guitars</Link></td>
                <td>East - E328</td>
              </tr>
              <tr>
                <td><Link href="https://rode.com/en-us">RØDE Microphones</Link></td>
                <td>East - E126</td>
              </tr>
              <tr>
                <td><Link href="https://www.saersguitars.com">Saers Guitars</Link></td>
                <td>East - E328</td>
              </tr>
              <tr>
                <td><Link href="https://santacruzguitar.com/">Santa Cruz Guitar Company</Link></td>
                <td>East - E123</td>
              </tr>
              <tr>
                <td><Link href="https://shockthefox.com">Shock the Fox</Link></td>
                <td>East - E328</td>
              </tr>
              <tr>
                <td><Link href="https://www.shure.com/en-US">Shure Products</Link></td>
                <td>East - E328</td>
              </tr>
              <tr>
                <td><Link href="https://www.stewmac.com/">StewMac</Link></td>
                <td>East – E330 </td>
              </tr>
              <tr>
                <td><Link href="https://www.taylorguitars.com/">Taylor Guitars</Link></td>
                <td>West - 101</td>
              </tr>
              <tr>
                <td><Link href="https://www.heinonenguitars.com">T. Drew Heinonen Guitars</Link></td>
                <td>East - E326</td>
              </tr>
              <tr>
                <td><Link href="https://www.fretboardjournal.com/podcasts/the-truth-about-vintage-amps-big-index-page/">The Truth About Vintage Amps Podcast Lounge</Link></td>
                <td>West - B6</td>
              </tr>
              <tr>
                <td><Link href="https://tonypolecastro.com/">Tony&apos;s Acoustic Challenge (Tony Polecastro)</Link></td>
                <td>East - E226</td>
              </tr>
              <tr>
                <td><Link href="https://www.treehouseguitars.com">Treehouse Guitars</Link></td>
                <td>East - E326</td>
              </tr>
              <tr>
                <td><Link href="https://sothguitars.com">Tyson Soth Guitar Co.</Link></td>
                <td>West - 102</td>
              </tr>
              <tr>
                <td><Link href="https://www.uberfrankguitars.com">Uberfrank</Link></td>
                <td>West - 102</td>
              </tr>
              <tr>
                <td><Link href="https://www.widmancustomelectrics.com">Widman Custom Electrics</Link></td>
                <td>East - E330</td>
              </tr>
              <tr>
                <td><Link href="https://usa.yamaha.com/products/musical_instruments/guitars_basses/index.html">Yamaha</Link></td>
                <td>East - E322</td>
              </tr>
              <tr>
                <td><Link href="https://www.zvex.com">ZVEX Effects</Link></td>
                <td>West - 102</td>
              </tr>
            </tbody>
          </table> */}
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

          {/* <p className="text-xl my-6">Note: Most of the luthiers will have guitars available for purchase. Most of these brands are showcasing never-before-seen and new instruments, as well. Nearly all of them will have their head designers/builders present &#40;ie Bob Taylor himself will be attending for Taylor; Steve McCreary will be attending for Collings, etc&#41;. We will have quiet rooms and amp rooms available for demos.</p> */}

        </div>

        {/* <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#F0E5D1] text-[#322D25]">
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center my-6">
           Sealed Bid Auction Guitars
          </h2>

          <h4 className="tracking-wider font-aurochs font-normal uppercase text-3xl my-6">
          Pre War Guitars Co. &apos;34-Style Bar Fret Dreadnought
          </h4>
          <p className="text-xl">
          &quot;This guitar represents the next step in the Pre-War Guitars Co.&apos;s quest for vintage tone. It&apos;s the first guitar to feature our new &apos;34 Style upgrade package, featuring a non-adjustable ebony reinforced neck, and bar frets- a true compression fretted instrument. 
          </p>
          <p className="text-xl mt-2 ">
          Along with all our standard elements- torrefied red spruce top and bracing, hot hide glue construction, hand carved neck, top and back bracing, super thin nitrocellulose lacquer finish, and hand fit dovetail neck joint; the result is a 3.5lb tone monster. 
          </p>
          <p className="text-xl mt-2 ">
          We&apos;re excited to put the things we learned building the Blake guitars to work on our full slate of 14 fret guitars, and this one is the first. We&apos;re also proud to support the Fretboard Summit, and to be a part of such a great event.
          </p>

          <h4 className="tracking-wider text-3xl font-aurochs my-6 uppercase text-[#2B6F6D]">
            Opening bid: $3,000 
          </h4>

          <Image
              className="flex"
              src="/34-Style-Dread_1200x800.jpg"
              alt="border"
              width={1200}
              height={800}
            />

          


          <hr class="mt-8 h-2 border-solid border-black"/>
          


          <h4 className="tracking-wider font-aurochs font-normal uppercase text-3xl my-6">
          Santa Cruz Fingerstyle Cutaway
          </h4>
          <p className="text-xl">
          For the Fretboard Summit we are presenting a Fingerstyle Cutaway featuring Indian Rosewood back and sides, Cedar top, 1-13/16&quot; nut width, 2-3/16&quot; bridge spacing, tapered bracing, Brazilian Rosewood binding on the body with black/Maple/black side purfle, black binding on the fingerboard, Brazilian Rosewood back strip, blue purfle combo rosette and top border, Brazilian Rosewood overlay, no fingerboard inlay, Brazilian Rosewood peghead overlay with SCGC mini logo inlay, gold Gotoh 510 tuners with black buttons, Sunburst top.
          </p>
          

          <h4 className="tracking-wider text-3xl font-aurochs my-6 uppercase text-[#2B6F6D]">
            Opening bid: $5,000
          </h4>


        </div> */}

      </main>
      <Footer />
    </>
  );
}
