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

          <p className="font-bold text-2xl mt-6">The midwest’s largest and finest gathering of makers, players, and industry experts are here at Fretboard Summit 2024!</p>

          <p className="font-bold text-2xl mt-4">Try out, demo and purchase new, forthcoming and Summit-exclusive gear from over 50 luthiers, pedal makers, amp, and gear companies. It’s a one-of-a-kind showcase you have to see to believe.
          </p>


          <p className="font-bold text-sm leading-relaxed mt-8">Confirmed 2024 Exhibitors</p>
          <p className="italic text-sm leading-relaxed">Updated: July 5, 2024</p>


          <table class="table-auto">
            <thead>
              <tr>
                <th class="text-left">Exhibitor</th>
                <th class="text-left">Type</th>
                <th class="text-left">Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Link href="https://aviateaudio.com/">Aviate Audio</Link></td>
                <td>pedals</td>
                <td>Room TBD</td>
              </tr>
              <tr>
              <td><Link href="https://www.baranikguitars.com/">Baranik Guitars</Link></td>
                <td>electrics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.3bender.com/">3 Bender Guitars</Link></td>
                <td>electrics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://blackbobbin.com/">Black Bobbin</Link></td>
                <td>electrics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="http://www.blindguitars.com">Blind Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://bornguitars.com">Born Custom Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://boucherguitars.com/">Guitares Boucher / Boucher Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://bourgeoisguitars.com/">Bourgeois Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.brianwatsonguitars.com/">Brian Watson Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://browneamps.com/">Browne Amplification</Link></td>
                <td>pedals</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://bruceguitars.com/about">Bruce Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>

              <tr>
                <td><Link href="https://cardinalinstruments.com/">Cardinal Instruments</Link></td>
                <td>electrics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://cedarcreekcases.com/">Cedar Creek Custom Case Shoppe</Link></td>
                <td>cases</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://cedarmtm.com">Cedar Mountain Mandolins</Link></td>
                <td>mandolins</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="http://chasebliss.com">Chase Bliss</Link></td>
                <td>pedals</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.chicagoluthiers.com">Chicago Luthiers Workshop</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.cirrusguitars.com/">Cirrus Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.collingsguitars.com/">Collings Guitars</Link></td>
                <td>acoustic, electric, archtops, mandolins</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="http://www.cominsguitars.com/">Comins Guitars</Link></td>
                <td> archtops, hollow body</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="http://www.curtisrockwellguitars.com">Curtis Rockwell, Luthier</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.daddario.com/">D&apos;Addario</Link></td>
                <td>strings</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://dammanninstruments.com">Dammann Custom Instruments</Link></td>
                <td>acoustics, mandolins </td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.aaronlucasguitars.com/">Dark Forest Cypress</Link></td>
                <td>tonewoods</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.deslongchampsguitars.com/">Deslongchamps Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.dewitguitars.com/">De Wit Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="http://www.elitetonewoods.com">Elite Tonewoods</Link></td>
                <td>tonewoods</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://flammangguitars.com">Flammang Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.frankbrothersguitars.com/">Frank Brothers</Link></td>
                <td>electrics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://gallagherguitar.com/">Gallagher Guitar</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.galloupguitars.com/">Galloup School of Lutherie</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="http://www.gillanderguitars.com">Gillander Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.greenfieldguitars.com/">Greenfield Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.grezguitars.com">Grez Guitars</Link></td>
                <td>electrics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://en.guitaresjuliensublet.com/">Guitares Julian Sublet</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.mlive.com/news/grand-rapids/2011/08/guitar_maker_crafts_special_in.html">Guitar Work Shops</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.hallandguitars.com/">Halland Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.hardinglutherie.com/">Harding Lutherie / SRT Strings</Link></td>
                <td>acoustics, violins</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://hayesguitar.com/">Hayes Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://healyguitars.com/">Healy Guitars</Link></td>
                <td>electrics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.henriksenamplifiers.com/">Henriksen Amplifiers</Link></td>
                <td>amplifiers</td>
                <td>Room TBD</td>
              </tr>
              
              <tr>
                <td><Link href="https://www.hozenguitars.com/">Hozen Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              
              <tr>
                <td><Link href="http://www.humphreyamps.com/">Humphrey Amps</Link></td>
                <td>amplifiers</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://hussanddalton.com/">Huss & Dalton</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="http://hoffeecases.com">HXC cases</Link></td>
                <td>cases</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.irisguitarcompany.com/">Iris/Circle/Languedoc</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="http://www.iuliusguitars.com/">Iulius Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.irvinguitars.com/">Irvin Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="http://jewittguitars.com/">Jewitt Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://jhspedals.info/">JHS Pedals</Link></td>
                <td>pedals</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.jrieck.com/">J. Rieck Lutherie</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.instagram.com/lomamansa/">Kortenhoven Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://kostalguitars.com/">Kostal Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://lamehorse.net/">Lame Horse Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.anthonylattanze.com/">Lattanze Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.leavittlutherie.com/">Leavitt Stringed Instruments</Link></td>
                <td>electrics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.lhtguitars.com/guitars">LHT Guitars</Link></td>
                <td>archtops, hollow body electrics </td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://lockhorninstruments.org/">Lockhorn Instruments</Link></td>
                <td>electrics </td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="http://www.madsenamps.com/">Madsen Amplification</Link></td>
                <td>amps and pedals</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.maegenwellsguitars.com/">Maegan Wells Guitars and Mandolins</Link></td>
                <td>archtops</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.martinguitar.com/">Martin Guitar Co</Link></td>
                <td>acoustic</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://mcnallyguitars.com/">McNally Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.michaelkennedyguitars.com/">Michael Kennedy Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://aboudibguitars.com/">Michel Aboudib Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.motanderguitars.com">Motander Guitars</Link></td>
                <td>electrics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.muleresophonic.com/products/20968-mulecaster">Mule Resophonic</Link></td>
                <td>resonators</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://musiccitybridge.com">Music City Bridge</Link></td>
                <td>electronics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.noemiguitars.com">Noemi Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.northfieldinstruments.com/">Nortfhield Stringed Instruments</Link></td>
                <td>mandolins</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.northwoodsluthiers.com">North Woods Luthiers</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://musicstore.oldtownschool.org">Old Town School Music Store</Link></td>
                <td>gear, strings & accessories</td>
                <td>West - Music Store</td>
              </tr>
              <tr>
                <td><Link href="https://www.oldtownschool.org/resourcecenter/">Old Town School of Folk Music Resource Center</Link></td>
                <td>archives</td>
                <td>West - Basement</td>
              </tr>
              <tr>
                <td><Link href="https://pacificrimtonewoods.com/">Pacific Tonewoods</Link></td>
                <td>tonewoods</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.instagram.com/paulmcevoyguitars/">Paul McEvoy Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://reywasguitars.com/">Reywas Guitars</Link></td>
                <td>Electrics,  guitars and bass</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://robertrobinsonguitars.com">R. Robinson Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.riviereguitars.com/about">Rivière Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://ryansukes.com/">Ryan&apos;s Ukes</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.saersguitars.com">Saers Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://santacruzguitar.com/">Santa Cruz Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://shockthefox.com">Shock the Fox</Link></td>
                <td>electrics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.shure.com/en-US">Shure </Link></td>
                <td>microphones</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.stewmac.com/">StewMac</Link></td>
                <td>supplies, tonewoods</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.summerschoolelectronics.com/">Summer School Electronics</Link></td>
                <td>pedals</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.heinonenguitars.com">T. Drew Heinonen Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.taylorguitars.com/">Taylor Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://fetellierguitars.com/">Tellier Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              {/* <tr>
                <td><Link href="https://www.thorellguitars.com/">Thorell Fine Guitars</Link></td>
                <td>archtops</td>
                <td>Room TBD</td>
              </tr> */}
              <tr>
                <td><Link href="https://wadeguitar.com/">Travis D. Wade Guitars</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.uberfrankguitars.com">Uberfrank</Link></td>
                <td>electrics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.volticelectronicdevices.com/">Voltic Electronic Devices</Link></td>
                <td>pedals</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="http://www.warmaudio.com/">Warm Audio</Link></td>
                <td>electronics, mics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://www.woolsonsoundcraft.com/">Woolson Soundcraft</Link></td>
                <td>acoustics</td>
                <td>Room TBD</td>
              </tr>
              <tr>
                <td><Link href="https://usa.yamaha.com/products/musical_instruments/guitars_basses/index.html">Yamaha</Link></td>
                <td>electric guitars</td>
                <td>Room TBD</td>
              </tr>
            </tbody>
          </table>
          

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
