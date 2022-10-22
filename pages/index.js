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


  const background = "/laptop-ga99e6e23c_1920.jpg"

  return(
    <>
      <Head>
        <title>mrweber Portfolio</title>
        <meta name="description" content="Portfolio Website of Marcel Weber" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main" >
        
          <article className="splash" style={{backgroundImage: `url("${background}")`}}>
                          <span className="splashSpan">{`Ihre neue ${prefix}webseite?`}</span>
                          <button className="callToAction">Angebote</button>
                        </article>
                        <section className="section">
                          <PricingTable />
                          <h2>Warum mrweber?</h2>
                          <p>Professionelle Web-Agenturen sind teuer - zurecht! Aber vielfach schlichtweg nicht nötig für eine kleine Vereins-, Hobby- oder KMU-Webseite.</p>
                          <p>Frei arbeitende Webentwickler und Hobby-Webdesigner wie ich es einer bin arbeiten zumeist mit WordPress. Das ist einerseits schnell, einfach und effizient,
                            andererseits schaut aber oft alles etwas gleich aus, und dank zusätzlichen Baukstensystemen und Plugins für irgendwelche Zusatzfunktionen sind die Webseiten oft überladen, langsam und irgendwann mühsam zu unterhalten.
                          </p>
                          <p>Und was mache ich jetzt anders?</p>
                          <p>Auch ich nutze gerne WordPress, allerdings lege ich tiefgreifend Hand an und verzichte wo es nur möglich ist auf aufgeblasene Plugins.
                            Mit HTML, CSS und JavaScript lässt sich WordPress sehr gut über die standardmässigen Optionen hinaus auf die eigenen Bedürfnisse anpassen.
                          </p>
                          <p>WordPress ist aber auch nicht immer die beste Wahl. Für eine statische Seite, dessen Inhalt nicht oft ändert, ist eine von Hand gebaute Webseite immer besser.
                            Aber auch dann, wenn die eigenen Wünsche sehr exotisch sind, kann WordPress einem im Weg stehen.
                          </p>
                          <p>Hier kann ich anknüpfen. Ich habe nicht nur Erfahrung mit WordPress, ich kann auch Webseiten von Hand bauen, oder andere Software nutzen. In Über mich sind meine Kompetenzen detailliert dargelegt.</p>        
        </section>        
      </main>
    </>
  )
}
