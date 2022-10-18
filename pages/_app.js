import Component_MainNavMenu from "../components/MainNavMenu"
import '../styles/globals.css'
import s from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Component_MainNavMenu />
  <Component {...pageProps} />
  <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}

        </a>
      </footer>
  </>
  )
}

export default MyApp
