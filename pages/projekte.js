import styles from '../styles/Home.module.css'
import Reel from "../components/Reel"
function Page_Websites(){

    const background = "https://cdn.pixabay.com/photo/2013/02/15/10/58/wave-81840_960_720.jpg"

    return(
        <main className="main" style={{backgroundImage: `url("${background}")`}}>
            <section className="section">
                <Reel />
            </section>
        </main>
    )
}
export default Page_Websites