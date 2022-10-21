import styles from '../styles/Home.module.css'

function Page_About(){

    const background = "https://cdn.pixabay.com/photo/2016/05/05/11/22/computer-1373684_960_720.jpg"

    return(
        <main className="main" style={{backgroundImage: `url("${background}")`}}>
            <section className="section">
                <h2>Wer bin ich?</h2>
                <p>Ein Hobby-Webentwickler aus dem westlichen Eck des nördlichsten Kantons, der seit 2015 Webseiten zusammenbastelt.</p>
                <h2>Das kenne ich</h2>
                HTML5 CSS3 JavaScript 
                <h2>Das kann ich nicht</h2>
                <ul>
                    <li>Webshops selber bauen</li>
                    <li>Amazon Web Services</li>
                    <li>Komplexe 3D-Webseiten</li>
                </ul>
            </section>
        </main>
    )
}
export default Page_About