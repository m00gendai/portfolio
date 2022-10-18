import Head from 'next/head'
import Image from 'next/image'
import s from '../styles/Home.module.css'

export default function Home() {

  const background = "../earth-1756274_1920.jpg"

  return (
    <>
      <Head>
        <title>mrweber Portfolio</title>
        <meta name="description" content="Portfolio Website of Marcel Weber" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main" style={{backgroundImage: `url("${background}")`}}>
        <section className="section">
          <p>Home</p>
        </section>
      </main>
    </>
  )
}
