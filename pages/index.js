import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import s from '../styles/Home.module.css'
import PricingTable from "../components/PricingTable"
import {useState, useEffect} from "react"

export default function Home() {

  const prefixes = ["Vereins", "Club", "Betriebs", "Geschäfts", "Hobby", "Projekt"]
  // prefixes[Math.floor((Math.random()*prefixes.length)+1)]
const [prefix, setPrefix] = useState("Vereins")


  const backgroundSplash = "/laptop-ga99e6e23c_1920.jpg"
  const background = "/neon-lights-7340790_1920.jpg"

  return(
    <>
      <Head>
        <title>mrweber Portfolio</title>
        <meta name="description" content="Portfolio Website of Marcel Weber" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mainFront" style={{backgroundImage: `url("${background}")`}}>
        
          <article className="splash" style={{backgroundImage: `url("${backgroundSplash}")`}}>
                          <span className="splashSpan">{`Ihre neue ${prefix}webseite?`}</span>
                          <button className="callToAction">Angebote</button>
                        </article>
                        <section className="sectionFront" >
                          <PricingTable />
                          </section>        
      </main>
    </>
  )
}
