import Link from "next/link"
import styles from '../styles/Navbar.module.css'

function Component_MainNavMenu(){
    return(
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}>
                    <Link href="/">
                        <a className={styles.navbarItemLink}>
                            Home
                        </a>
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link href="/projekte">
                        <a className={styles.navbarItemLink}>
                            Projekte
                        </a>
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link href="/angebote">
                        <a className={styles.navbarItemLink}>
                            Angebote
                        </a>
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link href="/uber_mich">
                        <a className={styles.navbarItemLink}>
                            Über Mich
                        </a>
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link href="/kontakt">
                        <a className={styles.navbarItemLink}>
                            Kontakt
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Component_MainNavMenu