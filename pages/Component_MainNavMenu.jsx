import Link from "next/link"

function Component_MainNavMenu(){
    return(
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/Page_Websites">
                        <a>
                            Webseiten
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Component_MainNavMenu