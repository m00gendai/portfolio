import Component_MainNavMenu from "./Component_MainNavMenu"
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
