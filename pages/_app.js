import Component_MainNavMenu from "../components/MainNavMenu"
import Footer from "../components/Footer"
import '../styles/globals.css'
import s from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {

  return (
  <>
  <Component_MainNavMenu />
  <Component {...pageProps} />
  <Footer />
  </>
  )
}

export default MyApp
