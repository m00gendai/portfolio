import Component_MainNavMenu from "../components/MainNavMenu"
import '../styles/globals.css'
import s from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {

  const date = new Date()
  const foundingYear = "2022"
  const currentYear = date.getFullYear()

  return (
  <>
  <Component_MainNavMenu />
  <Component {...pageProps} />
  <footer className="footer">
        © mrweber.ch {foundingYear == currentYear ? "2022" : `2022 - ${currentYear}`}
      </footer>
  </>
  )
}

export default MyApp
