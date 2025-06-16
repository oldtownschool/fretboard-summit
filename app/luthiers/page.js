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

          {/* <h3 className="font-aurochs mt-2 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed mb-8" >Please note: this is the 2024 Fretboard Summit exhibitor list, more details about 2025 will be available in Spring 2025 or earlier</h3> */}

          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center">
          CONNECT WITH THE WORLD’S GREATEST GUITAR MAKERS AND TAKE HOME YOUR NEW FAVORITE GEAR
          </h2>

          <p className="font-bold text-2xl mt-6">The midwest’s largest and finest gathering of makers, players, and industry experts are here at Fretboard Summit 2025!</p>

          <p className="font-bold text-2xl mt-4">Try out, demo and purchase new, forthcoming and Summit-exclusive gear from over 50 luthiers, pedal makers, amp, and gear companies. It’s a one-of-a-kind showcase you have to see to believe.
          </p>


          <h3 className="font-bold text-lg leading-relaxed mt-8">Confirmed 2025 Exhibitors</h3>
          <p className="italic text-sm leading-relaxed">Updated: May 29, 2025</p>
          <p className="italic text-sm leading-relaxed">* asterisk indicates sponsor</p>


          <table class="table-auto">
            <thead>
              <tr>
                <th class="text-left">Exhibitor</th>
                {/* <th class="text-left">Type</th> */}
                {/* <th class="text-left">Location</th> */}
              </tr>
            </thead>
            <tbody>
              
              <tr>
                <td><Link href="https://www.3bender.com/">3 Bender Guitars</Link></td>
                {/* <td>electrics</td>
                <td>E330</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.aberdeenguitars.com/">Aberdeen Guitars</Link></td>
                {/* <td>electrics</td>
                <td>E330</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.americanmusicfurniture.com/">American Music Furniture </Link></td>
                {/* <td>electrics</td>
                <td>E330</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.applegateguitars.com/">Applegate Guitars</Link></td>
                {/* <td>electrics</td>
                <td>E330</td> */}
              </tr>
              <tr>
                <td><Link href="http://baranikguitars.com/">Baranik Guitars</Link></td>
                {/* <td>electrics</td>
                <td>E330</td> */}
              </tr>
              <tr>
                <td class="font-bold"><Link href="https://beardguitars.com/">Beard Guitars*</Link></td>
                {/* <td>acoustics</td>
                <td>E124</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.benavidesguitars.com/">Benavides Guitars</Link></td>
                {/* <td>acoustics</td>
                <td>E124</td> */}
              </tr>
              
              <tr>
                <td><Link href="https://blackbobbin.com/">Black Bobbin</Link></td>
                {/* <td>electrics</td>
                <td>E330</td> */}
              </tr>
              <tr>
                <td class="font-bold"><Link href="https://bourgeoisguitars.com/">Bourgeois Guitars*</Link></td>
                {/* <td>acoustics</td>
                <td>E124</td> */}
              </tr>
              <tr>
                <td class="font-bold"><Link href="https://bovedainc.com/">Boveda*</Link></td>
                {/* <td>acoustics</td>
                <td>E124</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.bradcorneyguitars.com/">Brad Corney Guitars</Link></td>
                {/* <td>acoustics</td>
                <td>102</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.brianwatsonguitars.com/">Brian Watson Guitars</Link></td>
                {/* <td>acoustics</td>
                <td>102</td> */}
              </tr>
              <tr>
                <td><Link href="https://browneamps.com/">Browne Amplification</Link></td>
                {/* <td>pedals</td>
                <td>E324</td> */}
              </tr>
              <tr>
                <td><Link href="http://capozzoliguitarcompany.com/">Capozzoli Guitars</Link></td>
                {/* <td>pedals</td>
                <td>E324</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.cardinalinstruments.com/">Cardinal Instruments</Link></td>
                {/* <td>pedals</td>
                <td>E324</td> */}
              </tr>
              
              <tr>
                <td><Link href="https://carolineguitar.com/">Caroline Guitar Company</Link></td>
                {/* <td>pedals</td>
                <td>E330</td> */}
              </tr>
              <tr>
                <td><Link href="https://cedarcreekcases.com/">Cedar Creek Custom Case Shoppe</Link></td>
                {/* <td>mandolins</td>
                <td>102</td> */}
              </tr>
              <tr>
                <td><Link href="https://cedarmtm.com">Cedar Mountain Mandolins</Link></td>
                {/* <td>mandolins</td>
                <td>102</td> */}
              </tr>
              <tr>
                <td><Link href="http://chasebliss.com">Chase Bliss</Link></td>
                {/* <td>pedals</td>
                <td>E324</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.cirrusguitars.com/">Cirrus Guitars</Link></td>
                {/* <td>pedals</td>
                <td>E324</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.curtisrockwellguitars.com/">Curtis Rockwell, Luthier</Link></td>
                {/* <td>pedals</td>
                <td>E324</td> */}
              </tr>
              <tr>
                <td class="font-bold"><Link href="https://www.collingsguitars.com/">Collings Guitars*</Link></td>
                {/* <td>acoustic, electric, archtops, mandolins</td>
                <td>E221</td> */}
              </tr>
              <tr>
                <td><Link href="https://cusackmusic.com/">Cusack Music</Link></td>
                {/* <td> archtops, hollow body</td>
                <td>E328</td> */}
              </tr>
              <tr>
                <td class="font-bold"><Link href="https://www.daddario.com/">D&apos;Addario*</Link></td>
                {/* <td>strings</td>
                <td></td> */}
              </tr>
              <tr>
                <td><Link href="https://www.dambrosioguitars.com/">D&apos;Ambrosio Guitars</Link></td>
                {/* <td>strings</td>
                <td></td> */}
              </tr>
              <tr>
                <td><Link href="http://www.epcustompickups.com">EP Custom Pickups</Link></td>
                {/* <td>strings</td>
                <td></td> */}
              </tr>

              <tr>
                <td><Link href="http://www.eldoradostraps.com/">El Dorado Guitar Accessories</Link></td>
                {/* <td>acoustics</td>
                <td>213</td> */}
              </tr>

              <tr>
                <td><Link href="http://www.fellowsguitars.com/">Fellows Guitars</Link></td>
                {/* <td>acoustics</td>
                <td>213</td> */}
              </tr>
              
              <tr>
                <td><Link href="https://flammangguitars.com">Flammang Guitars</Link></td>
                {/* <td>acoustics</td>
                <td>213</td> */}
              </tr>
              <tr>
                <td class="font-bold"><Link href="https://gallagherguitar.com/">Gallagher Guitars*</Link></td>
                {/* <td>acoustics</td>
                <td>213</td> */}
              </tr>
              
              <tr>
                <td><Link href="https://www.grezguitars.com">Grez Guitars</Link></td>
                {/* <td>electrics</td>
                <td>E330</td> */}
              </tr>
              <tr>
                <td class="font-bold"><Link href="https://boucherguitars.com/">Guitares Boucher / Boucher Guitars*</Link></td>
                {/* <td>acoustics</td>
                <td>210</td> */}
              </tr>
              <tr>
                <td><Link href="https://en.guitaresjuliensublet.com/">Guitares Julien Sublet</Link></td>
                {/* <td>acoustics</td>
                <td>102</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.healyguitars.com/">Healy  Guitars</Link></td>
                {/* <td>acoustics</td>
                <td>102</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.heinonenguitars.com/">Heinonen Guitars</Link></td>
                {/* <td>acoustics</td>
                <td>102</td> */}
              </tr>
              <tr>
                <td class="font-bold"><Link href="https://www.henriksenamplifiers.com/">Henriksen Amplifiers*</Link></td>
                {/* <td>amplifiers</td>
                <td>E320</td> */}
              </tr>
              <tr>
                <td><Link href="http://holcombguitars.com/">Holcolmb Guitars</Link></td>
                {/* <td>acoustics</td>
                <td>Harris Gallery</td> */}
              </tr>
              <tr>
                <td><Link href="https://hussanddalton.com/">Huss & Dalton</Link></td>
                {/* <td>acoustics</td>
                <td>Harris Gallery</td> */}
              </tr>
              <tr>
                <td><Link href="http://hoffeecases.com">HXC cases</Link></td>
                {/* <td>cases</td>
                <td>102</td> */}
              </tr>
              <tr>
                <td class="font-bold"><Link href="https://www.irisguitarcompany.com/">Iris Guitars / Circle Strings / Languedoc Guitars / Allied Lutherie*</Link></td>
                {/* <td>acoustics</td>
                <td>E126</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.iuliusguitars.com/">Iulius Guitars</Link></td>
                {/* <td>acoustics</td>
                <td>Harris Gallery</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.jrieck.com/">J. Rieck Lutherie</Link></td>
                {/* <td>acoustics</td>
                <td>Harris Gallery</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.kollguitars.com/">Koll Guitar Co.</Link></td>
                {/* <td>acoustics</td>
                <td>Harris Gallery</td> */}
              </tr>
              
              <tr>
                <td><Link href="https://www.larochelutherie.com/">Laroche Lutherie</Link></td>
                {/* <td>electrics</td>
                <td>E330</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.anthonylattanze.com/">Lattanze Guitars</Link></td>
                {/* <td>electrics</td>
                <td>E330</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.lavecchiaguitars.com/">Laveccia Guitars</Link></td>
                {/* <td>electrics</td>
                <td>E330</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.leavittlutherie.com/">Leavitt Stringed Instruments</Link></td>
                {/* <td>electrics</td>
                <td>E330</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.lhtguitars.com/guitars">LHT Guitars</Link></td>
                {/* <td>archtops, hollow body electrics </td>
                <td>E328</td> */}
              </tr>
              <tr>
                <td><Link href="https://loschguitars.com/">Losch Guitars</Link></td>
                {/* <td>archtops, hollow body electrics </td>
                <td>E328</td> */}
              </tr>
              <tr>
                <td><Link href="https://lowdenguitars.com/">Lowden Guitars</Link></td>
                {/* <td>electrics </td>
                <td>E330</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.madsenamps.com/">Madsen Amplification</Link></td>
                {/* <td>acoustic</td>
                <td>E220</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.hozenguitars.com/">Maestro Guitars </Link></td>
                {/* <td>acoustic</td>
                <td>E220</td> */}
              </tr>
              <tr>
                <td class="font-bold"><Link href="https://www.martinguitar.com/">Martin Guitar Co*</Link></td>
                {/* <td>acoustic</td>
                <td>E220</td> */}
              </tr>
              <tr>
                <td><Link href="http://mathispointguitars.com/">Mathis Point Guitars</Link></td>
                {/* <td>electrics</td>
                <td>E330</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.motanderguitars.com">Motander Guitars</Link></td>
                {/* <td>electrics</td>
                <td>E330</td> */}
              </tr>
              <tr>
                <td><Link href="http://mtstrings.com/">MT Strings</Link></td>
                {/* <td>electrics</td>
                <td>E330</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.nationalguitars.com/">National Reso-Phonic Guitars Inc.</Link></td>
                {/* <td>acoustics</td>
                <td>E326</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.northwoodsluthiers.com">North Woods Luthiers</Link></td>
                {/* <td>acoustics</td>
                <td>Harris Gallery</td> */}
              </tr>
              <tr>
                <td class="font-bold"><Link href="https://www.northfieldinstruments.com/">Northfield Stringed Instruments/ADK Designs*</Link></td>
                {/* <td>mandolins</td>
                <td>212</td> */}
              </tr>
              
              <tr>
                <td><Link href="https://musicstore.oldtownschool.org">Old Town School Music Store</Link></td>
                {/* <td>gear, strings & accessories</td>
                <td>West - Music Store</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.oldtownschool.org/resourcecenter/">Old Town School of Folk Music Resource Center</Link></td>
                {/* <td>archives</td>
                <td>West - Basement</td> */}
              </tr>
              <tr>
                <td class="font-bold"><Link href="https://pacificrimtonewoods.com/">Pacific Rim Tonewoods*</Link></td>
                {/* <td>tonewoods</td>
                <td>E326</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.phoenixguitarco.com/">Phoenix Guitar Co. </Link></td>
                {/* <td>acoustics</td>
                <td>E326</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.instagram.com/po_sans_guitars/reels/">Po Sans Guitars</Link></td>
                {/* <td>electrics</td>
                <td>101</td> */}
              </tr>
              <tr>
                <td><Link href="https://robertrobinsonguitars.com">R. Robinson Guitars</Link></td>
                {/* <td>acoustics</td>
                <td>E328</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.krautguitars.com/">Raymond Kraut Guitars</Link></td>
                {/* <td>acoustics</td>
                <td>E328</td> */}
              </tr>
              <tr>
                <td><Link href="https://robbinsguitar.com/">Robbins Guitar Company</Link></td>
                {/* <td>acoustics</td>
                <td>E328</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.samguidryguitars.com/">Sam Guidry Guitars</Link></td>
                {/* <td>acoustics</td>
                <td>E328</td> */}
              </tr>
              <tr>
                <td class="font-bold"><Link href="https://santacruzguitar.com/">Santa Cruz Guitars*</Link></td>
                {/* <td>acoustics</td>
                <td>E123</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.seufguitars.com/">Seuf Guitars</Link></td>
                {/* <td>electrics</td>
                <td>E324</td> */}
              </tr>
              <tr>
                <td><Link href="https://shockthefox.com">Shock the Fox</Link></td>
                {/* <td>electrics</td>
                <td>E330</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.silktone.org/">Silktone</Link></td>
                {/* <td>pedals, amps, electronics</td>
                <td>E324</td> */}
              </tr>
              <tr>
                <td><Link href="http://skytopguitars.com/">Skytop Guitars</Link></td>
                {/* <td>supplies, tonewoods</td>
                <td>E128</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.stewmac.com/">Stew Mac</Link></td>
                {/* <td>supplies, tonewoods</td>
                <td>E128</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.summerschoolelectronics.com/">Summer School Electronics</Link></td>
                {/* <td>pedals</td>
                <td>E324</td> */}
              </tr>
              <tr>
                <td class="font-bold"><Link href="https://www.taylorguitars.com/">Taylor Guitars*</Link></td>
                {/* <td>acoustics</td>
                <td>101</td> */}
              </tr>
              <tr>
                <td><Link href="https://fetellierguitars.com/">Tellier Guitars</Link></td>
                {/* <td>acoustics</td>
                <td>E328</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.tlguitars.com/">TL Guitars</Link></td>
                {/* <td>acoustics</td>
                <td>E328</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.tlguitars.com/">Todd Lunneborg Guitars</Link></td>
                {/* <td>acoustics</td>
                <td>Harris Gallery</td> */}
              </tr>
              <tr>
                <td><Link href="http://tonerangerguitars.com/">Tone Ranger</Link></td>
                {/* <td>acoustics</td>
                <td>Harris Gallery</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.toneslabs.com/">ToneSlabs Music LLC</Link></td>
                {/* <td>acoustics</td>
                <td>Harris Gallery</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.wadeguitar.com/">Travis D. Wade Guitars</Link></td>
                {/* <td>acoustics</td>
                <td>Harris Gallery</td> */}
              </tr>
              <tr>
                <td class="font-bold"><Link href="https://www.two-rock.com/">Two-Rock Amplifiers*</Link></td>
                {/* <td>amplifiers</td>
                <td>E221</td> */}
              </tr>
              
              <tr>
                <td><Link href="https://www.volticelectronicdevices.com/">Voltic Electronic Devices</Link></td>
                {/* <td>pedals</td>
                <td>E324</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.woolsonsoundcraft.com/">Woolson Soundcraft</Link></td>
                {/* <td>acoustics</td>
                <td>E328</td> */}
              </tr>
              <tr>
                <td class="font-bold"><Link href="https://usa.yamaha.com/products/musical_instruments/guitars_basses/index.html">Yamaha*</Link></td>
                {/* <td>electric guitars</td>
                <td>E322</td> */}
              </tr>
              <tr>
                <td><Link href="http://zimnicki.com/">Zimnicki Guitars</Link></td>
                {/* <td>electric guitars</td>
                <td>E322</td> */}
              </tr>
            </tbody>
          </table>
          

          {/* <p className="text-xl my-6">Note: Most of the luthiers will have guitars available for purchase. Most of these brands are showcasing never-before-seen and new instruments, as well. Nearly all of them will have their head designers/builders present &#40;ie Bob Taylor himself will be attending for Taylor; Steve McCreary will be attending for Collings, etc&#41;. We will have quiet rooms and amp rooms available for demos.</p> */}

        </div>

        {/* <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#F0E5D1] text-[#322D25]">
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
          <p className="text-xl">All the merch available at the 2025 Fretboard Summit!</p>




        </div> */}

      </main>
      <Footer />
    </>
  );
}
