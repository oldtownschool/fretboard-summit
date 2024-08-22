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


          <h3 className="font-bold text-lg leading-relaxed mt-8">Confirmed 2024 Exhibitors</h3>
          <p className="italic text-sm leading-relaxed">Updated: August 20, 2024</p>


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
                <td>E324</td>
              </tr>
              <tr>
              <td><Link href="https://www.baranikguitars.com/">Baranik Guitars</Link></td>
                <td>electrics</td>
                <td>E330</td>
              </tr>
              <tr>
                <td><Link href="https://www.3bender.com/">3 Bender Guitars</Link></td>
                <td>electrics</td>
                <td>E330</td>
              </tr>
              <tr>
                <td><Link href="https://blackbobbin.com/">Black Bobbin</Link></td>
                <td>electrics</td>
                <td>E330</td>
              </tr>
              <tr>
                <td><Link href="http://www.blindguitars.com">Blind Guitars</Link></td>
                <td>acoustics</td>
                <td>E326</td>
              </tr>
              <tr>
                <td><Link href="https://bornguitars.com">Born Custom Guitars</Link></td>
                <td>electrics</td>
                <td>E330</td>
              </tr>
              <tr>
                <td><Link href="https://boucherguitars.com/">Guitares Boucher / Boucher Guitars</Link></td>
                <td>acoustics</td>
                <td>210</td>
              </tr>
              <tr>
                <td><Link href="https://bourgeoisguitars.com/">Bourgeois Guitars</Link></td>
                <td>acoustics</td>
                <td>E124</td>
              </tr>
              <tr>
                <td><Link href="https://www.brianwatsonguitars.com/">Brian Watson Guitars</Link></td>
                <td>acoustics</td>
                <td>102</td>
              </tr>
              <tr>
                <td><Link href="https://browneamps.com/">Browne Amplification</Link></td>
                <td>pedals</td>
                <td>E324</td>
              </tr>
              <tr>
                <td><Link href="https://bruceguitars.com/about">Bruce Guitars</Link></td>
                <td>acoustics</td>
                <td>E326</td>
              </tr>

              <tr>
                <td><Link href="https://cardinalinstruments.com/">Cardinal Instruments</Link></td>
                <td>electrics</td>
                <td>E330</td>
              </tr>
              <tr>
                <td><Link href="https://carolineguitar.com/">Caroline Guitar Company</Link></td>
                <td>pedals</td>
                <td>E330</td>
              </tr>
              <tr>
                <td><Link href="https://cedarcreekcases.com/">Cedar Creek Custom Case Shoppe</Link></td>
                <td>cases</td>
                <td>102</td>
              </tr>
              <tr>
                <td><Link href="https://cedarmtm.com">Cedar Mountain Mandolins</Link></td>
                <td>mandolins</td>
                <td>102</td>
              </tr>
              <tr>
                <td><Link href="http://chasebliss.com">Chase Bliss</Link></td>
                <td>pedals</td>
                <td>E324</td>
              </tr>
              <tr>
                <td><Link href="https://www.chicagoluthiers.com">Chicago Luthiers Workshop</Link></td>
                <td>acoustics</td>
                <td>OTS Music Store</td>
              </tr>
              <tr>
                <td><Link href="https://www.cirrusguitars.com/">Cirrus Guitars</Link></td>
                <td>acoustics</td>
                <td>Harris Gallery</td>
              </tr>
              <tr>
                <td><Link href="https://www.collingsguitars.com/">Collings Guitars</Link></td>
                <td>acoustic, electric, archtops, mandolins</td>
                <td>E221</td>
              </tr>
              <tr>
                <td><Link href="http://www.cominsguitars.com/">Comins Guitars</Link></td>
                <td> archtops, hollow body</td>
                <td>E328</td>
              </tr>
              <tr>
                <td><Link href="http://www.curtisrockwellguitars.com">Curtis Rockwell, Luthier</Link></td>
                <td>acoustics</td>
                <td>Harris Gallery</td>
              </tr>
              <tr>
                <td><Link href="https://www.daddario.com/">D&apos;Addario</Link></td>
                <td>strings</td>
                <td></td>
              </tr>
              <tr>
                <td><Link href="https://dammanninstruments.com">Dammann Custom Instruments</Link></td>
                <td>acoustics, mandolins </td>
                <td>102</td>
              </tr>
              <tr>
                <td><Link href="https://www.aaronlucasguitars.com/">Dark Forest Cypress</Link></td>
                <td>tonewoods</td>
                <td>E326</td>
              </tr>
              <tr>
                <td><Link href="https://www.deslongchampsguitars.com/">Deslongchamps Guitars</Link></td>
                <td>acoustics</td>
                <td>E326</td>
              </tr>
              <tr>
                <td><Link href="https://www.dewitguitars.com/">De Wit Guitars</Link></td>
                <td>acoustics</td>
                <td>E328</td>
              </tr>
              <tr>
                <td><Link href="http://www.elitetonewoods.com">Elite Tonewoods</Link></td>
                <td>tonewoods</td>
                <td>102</td>
              </tr>
              <tr>
                <td><Link href="https://flammangguitars.com">Flammang Guitars</Link></td>
                <td>acoustics</td>
                <td>213</td>
              </tr>
              <tr>
                <td><Link href="https://www.frankbrothersguitars.com/">Frank Brothers</Link></td>
                <td>electrics</td>
                <td>E330</td>
              </tr>
              <tr>
                <td><Link href="https://gallagherguitar.com/">Gallagher Guitar</Link></td>
                <td>acoustics</td>
                <td>211</td>
              </tr>
              <tr>
                <td><Link href="https://www.galloupguitars.com/">Galloup School of Lutherie</Link></td>
                <td>acoustics</td>
                <td>East Lobby</td>
              </tr>
              <tr>
                <td><Link href="http://www.gillanderguitars.com">Gillander Guitars</Link></td>
                <td>acoustics</td>
                <td>102</td>
              </tr>
              <tr>
                <td><Link href="https://www.greenfieldguitars.com/">Greenfield Guitars</Link></td>
                <td>acoustics</td>
                <td>102</td>
              </tr>
              <tr>
                <td><Link href="https://www.grezguitars.com">Grez Guitars</Link></td>
                <td>electrics</td>
                <td>E330</td>
              </tr>
              <tr>
                <td><Link href="https://en.guitaresjuliensublet.com/">Guitares Julien Sublet</Link></td>
                <td>acoustics</td>
                <td>102</td>
              </tr>
              <tr>
                <td><Link href="https://www.mlive.com/news/grand-rapids/2011/08/guitar_maker_crafts_special_in.html">Guitar Work Shops</Link></td>
                <td>acoustics</td>
                <td>E328</td>
              </tr>
              <tr>
                <td><Link href="https://www.hallandguitars.com/">Halland Guitars</Link></td>
                <td>acoustics</td>
                <td>102</td>
              </tr>
              <tr>
                <td><Link href="https://www.hardinglutherie.com/">Harding Lutherie / SRT Strings</Link></td>
                <td>acoustics, violins</td>
                <td>Harris Gallery</td>
              </tr>
              <tr>
                <td><Link href="https://hayesguitar.com/">Hayes Guitars</Link></td>
                <td>acoustics</td>
                <td>213</td>
              </tr>
              <tr>
                <td><Link href="https://healyguitars.com/">Healy Guitars</Link></td>
                <td>electrics</td>
                <td>E330</td>
              </tr>
              <tr>
                <td><Link href="https://www.henriksenamplifiers.com/">Henriksen Amplifiers</Link></td>
                <td>amplifiers</td>
                <td>E320</td>
              </tr>
              
              <tr>
                <td><Link href="https://www.hozenguitars.com/">Hozen Guitars</Link></td>
                <td>acoustics</td>
                <td>102</td>
              </tr>
              
              <tr>
                <td><Link href="http://www.humphreyamps.com/">Humphrey Amps</Link></td>
                <td>amplifiers</td>
                <td>E320</td>
              </tr>
              <tr>
                <td><Link href="https://hussanddalton.com/">Huss & Dalton</Link></td>
                <td>acoustics</td>
                <td>Harris Gallery</td>
              </tr>
              <tr>
                <td><Link href="http://hoffeecases.com">HXC cases</Link></td>
                <td>cases</td>
                <td>102</td>
              </tr>
              <tr>
                <td><Link href="https://www.irisguitarcompany.com/">Iris Guitars / Circle Strings / Languedoc Guitars</Link></td>
                <td>acoustics</td>
                <td>E126</td>
              </tr>
              <tr>
                <td><Link href="http://www.iuliusguitars.com/">Iulius Guitars</Link></td>
                <td>acoustics</td>
                <td>E326</td>
              </tr>
              <tr>
                <td><Link href="https://www.irvinguitars.com/">Irvin Guitars</Link></td>
                <td>acoustics</td>
                <td>213</td>
              </tr>
              <tr>
                <td><Link href="http://jewittguitars.com/">Jewitt Guitars</Link></td>
                <td>acoustics</td>
                <td>E326</td>
              </tr>
              <tr>
                <td><Link href="https://jhspedals.info/">JHS Pedals</Link></td>
                <td>pedals</td>
                <td>E128</td>
              </tr>
              <tr>
                <td><Link href="https://www.jrieck.com/">J. Rieck Lutherie</Link></td>
                <td>acoustics</td>
                <td>Harris Gallery</td>
              </tr>
              <tr>
                <td><Link href="https://www.instagram.com/lomamansa/">Kortenhoven Guitars</Link></td>
                <td>acoustics</td>
                <td>213</td>
              </tr>
              <tr>
                <td><Link href="https://kostalguitars.com/">Kostal Guitars</Link></td>
                <td>acoustics</td>
                <td>E328</td>
              </tr>
              <tr>
                <td><Link href="https://lamehorse.net/">Lame Horse Guitars</Link></td>
                <td>acoustics</td>
                <td>E326</td>
              </tr>
              <tr>
                <td><Link href="https://www.anthonylattanze.com/">Lattanze Guitars</Link></td>
                <td>acoustics</td>
                <td>E328</td>
              </tr>
              <tr>
                <td><Link href="https://www.leavittlutherie.com/">Leavitt Stringed Instruments</Link></td>
                <td>electrics</td>
                <td>E330</td>
              </tr>
              <tr>
                <td><Link href="https://www.lhtguitars.com/guitars">LHT Guitars</Link></td>
                <td>archtops, hollow body electrics </td>
                <td>E328</td>
              </tr>
              <tr>
                <td><Link href="https://lockhorninstruments.org/">Lockhorn Instruments</Link></td>
                <td>electrics </td>
                <td>E330</td>
              </tr>
              <tr>
                <td><Link href="http://www.madsenamps.com/">Madsen Amplification</Link></td>
                <td>amps and pedals</td>
                <td>E324</td>
              </tr>
              <tr>
                <td><Link href="https://www.maegenwellsguitars.com/">Maegan Wells Guitars and Mandolins</Link></td>
                <td>archtops</td>
                <td>E328</td>
              </tr>
              <tr>
                <td><Link href="https://www.martinguitar.com/">Martin Guitar Co</Link></td>
                <td>acoustic</td>
                <td>E220</td>
              </tr>
              <tr>
                <td><Link href="https://maton.com.au/">Maton Guitars</Link></td>
                <td>acoustics, electrics</td>
                <td>213</td>
              </tr>
              <tr>
                <td><Link href="https://mcnallyguitars.com/">McNally Guitars</Link></td>
                <td>acoustics</td>
                <td>E328</td>
              </tr>
              <tr>
                <td><Link href="https://www.michaelkennedyguitars.com/">Michael Kennedy Guitars</Link></td>
                <td>acoustics</td>
                <td>E326</td>
              </tr>
              <tr>
                <td><Link href="https://aboudibguitars.com/">Michel Aboudib Guitars</Link></td>
                <td>acoustics</td>
                <td>E326</td>
              </tr>
              <tr>
                <td><Link href="https://www.motanderguitars.com">Motander Guitars</Link></td>
                <td>electrics</td>
                <td>E330</td>
              </tr>
              <tr>
                <td><Link href="https://www.muleresophonic.com/products/20968-mulecaster">Mule Resophonic</Link></td>
                <td>resonators</td>
                <td>E330</td>
              </tr>
              <tr>
                <td><Link href="https://musiccitybridge.com">Music City Bridge</Link></td>
                <td>electronics</td>
                <td>E326</td>
              </tr>
              <tr>
                <td><Link href="https://www.noemiguitars.com">Noemi Guitars</Link></td>
                <td>acoustics</td>
                <td>E326</td>
              </tr>
              <tr>
                <td><Link href="https://www.northfieldinstruments.com/">Nortfhield Stringed Instruments</Link></td>
                <td>mandolins</td>
                <td>212</td>
              </tr>
              <tr>
                <td><Link href="https://www.northwoodsluthiers.com">North Woods Luthiers</Link></td>
                <td>acoustics</td>
                <td>Harris Gallery</td>
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
                <td><Link href="https://pacificrimtonewoods.com/">Pacific Rim Tonewoods</Link></td>
                <td>tonewoods</td>
                <td>E326</td>
              </tr>
              <tr>
                <td><Link href="https://www.instagram.com/paulmcevoyguitars/">Paul McEvoy Guitars</Link></td>
                <td>acoustics</td>
                <td>E326</td>
              </tr>
              <tr>
                <td><Link href="https://powerselectricguitars.com/">Powers Electric Guitars</Link></td>
                <td>electrics</td>
                <td>101</td>
              </tr>
              <tr>
                <td><Link href="https://reywasguitars.com/">Reywas Guitars</Link></td>
                <td>Electrics,  guitars and bass</td>
                <td>E330</td>
              </tr>
              <tr>
                <td><Link href="https://robertrobinsonguitars.com">R. Robinson Guitars</Link></td>
                <td>acoustics</td>
                <td>E328</td>
              </tr>
              <tr>
                <td><Link href="https://www.riviereguitars.com/about">Rivière Guitars</Link></td>
                <td>acoustics</td>
                <td>E328</td>
              </tr>
              <tr>
                <td><Link href="https://ryansukes.com/">Ryan&apos;s Ukes</Link></td>
                <td>acoustics</td>
                <td>Harris Gallery</td>
              </tr>
              <tr>
                <td><Link href="https://www.saersguitars.com">Saers Guitars</Link></td>
                <td>acoustics</td>
                <td>213</td>
              </tr>
              <tr>
                <td><Link href="https://santacruzguitar.com/">Santa Cruz Guitars</Link></td>
                <td>acoustics</td>
                <td>E123</td>
              </tr>
              <tr>
                <td><Link href="https://www.seufguitars.com/">Seuf Guitars</Link></td>
                <td>electrics</td>
                <td>E324</td>
              </tr>
              <tr>
                <td><Link href="https://shockthefox.com">Shock the Fox</Link></td>
                <td>electrics</td>
                <td>E330</td>
              </tr>
              <tr>
                <td><Link href="https://www.shure.com/en-US">Shure </Link></td>
                <td>microphones</td>
                <td>E326</td>
              </tr>
              <tr>
                <td><Link href="https://www.silktone.org/">Silktone</Link></td>
                <td>pedals, amps, electronics</td>
                <td>E324</td>
              </tr>
              <tr>
                <td><Link href="https://www.stewmac.com/">StewMac</Link></td>
                <td>supplies, tonewoods</td>
                <td>E128</td>
              </tr>
              <tr>
                <td><Link href="https://www.summerschoolelectronics.com/">Summer School Electronics</Link></td>
                <td>pedals</td>
                <td>E324</td>
              </tr>
              <tr>
                <td><Link href="https://www.heinonenguitars.com">T. Drew Heinonen Guitars</Link></td>
                <td>acoustics</td>
                <td>E328</td>
              </tr>
              <tr>
                <td><Link href="https://www.taylorguitars.com/">Taylor Guitars</Link></td>
                <td>acoustics</td>
                <td>101</td>
              </tr>
              <tr>
                <td><Link href="https://fetellierguitars.com/">Tellier Guitars</Link></td>
                <td>acoustics</td>
                <td>E328</td>
              </tr>
              <tr>
                <td><Link href="https://wadeguitar.com/">Travis D. Wade Guitars</Link></td>
                <td>acoustics</td>
                <td>Harris Gallery</td>
              </tr>
              <tr>
                <td><Link href="https://www.two-rock.com/">Two-Rock Amplifiers</Link></td>
                <td>amplifiers</td>
                <td>E221</td>
              </tr>
              <tr>
                <td><Link href="https://www.uberfrankguitars.com">Uberfrank</Link></td>
                <td>electrics</td>
                <td>E330</td>
              </tr>
              <tr>
                <td><Link href="https://www.volticelectronicdevices.com/">Voltic Electronic Devices</Link></td>
                <td>pedals</td>
                <td>E324</td>
              </tr>
              <tr>
                <td><Link href="http://www.warmaudio.com/">Warm Audio</Link></td>
                <td>electronics, mics</td>
                <td>E128</td>
              </tr>
              <tr>
                <td><Link href="https://www.woolsonsoundcraft.com/">Woolson Soundcraft</Link></td>
                <td>acoustics</td>
                <td>E328</td>
              </tr>
              <tr>
                <td><Link href="https://usa.yamaha.com/products/musical_instruments/guitars_basses/index.html">Yamaha</Link></td>
                <td>electric guitars</td>
                <td>E322</td>
              </tr>
            </tbody>
          </table>
          

          {/* <p className="text-xl my-6">Note: Most of the luthiers will have guitars available for purchase. Most of these brands are showcasing never-before-seen and new instruments, as well. Nearly all of them will have their head designers/builders present &#40;ie Bob Taylor himself will be attending for Taylor; Steve McCreary will be attending for Collings, etc&#41;. We will have quiet rooms and amp rooms available for demos.</p> */}

        </div>

        <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#F0E5D1] text-[#322D25]">
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center my-6">
          Sealed Bid Auction - 2024
          </h2>

          <h4 className="tracking-wider font-aurochs font-normal uppercase text-3xl mt-4">
          Santa Cruz FS Model
          </h4>
          <p className="text-xl">
          Customized with Koa Binding, Koa backstrip, and Koa Overlay. All other specs are standard to the model and can be found <Link class="text-[#2B6F6D] underline font-bold" href="https://santacruzguitar.com/fingerstyle/ ">here</Link> – The FS is a truly sophisticated instrument that will allow the best possible presentation of your fingerstyle technique. 
          </p>

          <h4 className="tracking-wider text-3xl font-aurochs mt-4 uppercase text-[#2B6F6D]">
            Opening bid: $7,500.00 
          </h4>
          <p className="text-lg mb-4">Bid card available at check-in, auction closes Sunday at noon.</p>

          <Image
              className="flex"
              src="/SantaCruz_FBSRaffle_1600.png"
              alt="border"
              width={1200}
              height={800}
            />

          <hr class="mt-8 h-2 border-solid border-black"/>
          
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center my-4">
          Premium Raffle Items
          </h2>

          <h4 className="tracking-wider font-aurochs font-normal uppercase text-3xl mt-4">
          Yanuziello Electric Mandolin
          </h4>
          <p className="text-xl mb-4">
          One lucky registrant is going to win this eight-string electric mandolin from famed maker Yanuziello Stringed Instruments, just for attending! It&apos;s a $5,500 USD value and we&apos;re floored by Joe&apos;s generosity...and creativity. (Exclusive raffle item for 3-day All-Access pass holders, raffle drawing on Friday.)
          </p>

          <Image
              className="flex"
              src="/Yanuizello_Mando_FBSRaffle_1600.png"
              alt="border"
              width={1200}
              height={800}
            />

          <hr class="mt-8 h-2 border-solid border-black"/>

          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center mt-6">Raffle Prizes</h2>
          <p className="text-xl  text-center">Available to All Access pass holders, raffle drawing Sunday at noon</p>

          <h4 className="tracking-wider font-aurochs font-normal uppercase text-3xl mt-6">RØDE Equipment</h4>
          <p className="text-xl">Premium microphones and audio equipment from our friends at Røde, including:<br/>
          PSA1+ - Studio Boom<br/>
          PodMic - Podcast-ready Dynamic Microphone<br/>
          PodMic USB - Podcast-ready Dynamic Microphone<br/>
          NT1 Gen 5 Microphone <br/>
          NT1 Signature Series Blue Microphone<br/>
          NT1 Signature Series Red Microphone</p>


          <h4 className="tracking-wider font-aurochs font-normal uppercase text-3xl my-6">Lifetime Subscription to Fretboard Journal</h4>


          <h4 className="tracking-wider font-aurochs font-normal uppercase text-3xl mt-6">Old Town School of Folk Music Merch Prize Pack</h4>
          <p className="text-xl">A collection of baseball caps, drinking glasses, coffee tumbler, and other fun accessories celebrating the legendary Old Town School of Folk Music.</p>


          <h4 className="tracking-wider font-aurochs font-normal uppercase text-3xl mt-6">Fretboard Summit Merch</h4>
          <p className="text-xl">All the merch available at the 2024 Fretboard Summit!</p>




        </div>

      </main>
      <Footer />
    </>
  );
}
