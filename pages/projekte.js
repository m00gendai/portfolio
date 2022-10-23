import styles from '../styles/Home.module.css'
import Reel from "../components/Reel"
function Page_Websites(){

    const background = "/hd-g5a621cc5b_1920.jpg"

    return(
        <main className="main" style={{backgroundImage: `url("${background}")`}}>
            <section className="section">
                <Reel />
            </section>
        </main>
    )
}
export default Page_Websites