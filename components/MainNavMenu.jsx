import Link from "next/link"
import styles from '../styles/Navbar.module.css'

function Component_MainNavMenu(){
    return(
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                <li>
                    <Link href="/">
                        <a>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/projekte">
                        <a>
                            Projekte
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/uber_mich">
                        <a>
                            Über Mich
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/kontakt">
                        <a>
                            Kontakt
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Component_MainNavMenu