import Component_MainNavMenu from "../components/MainNavMenu"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Component_MainNavMenu />
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
