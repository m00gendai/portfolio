import styles from '../styles/Home.module.css'

function Page_About(){

    const background = "https://cdn.pixabay.com/photo/2016/05/05/11/22/computer-1373684_960_720.jpg"

    return(
        <main className="main" style={{backgroundImage: `url("${background}")`}}>
            <section className="section">
                Über mich
            </section>
        </main>
    )
}
export default Page_About