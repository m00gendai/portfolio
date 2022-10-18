function Page(){

    const background = "https://cdn.pixabay.com/photo/2016/06/04/11/12/particles-1435363_960_720.jpg"

    return(
        <main className="main" style={{backgroundImage: `url("${background}")`}}>
            <section className="section">
                <h1>Angebote</h1>
                <h3>Details</h3>
                <p>Wenn möglich wird Schweizer Server- und Hostinginfrastruktur genutzt. Dies gilt vor allem für Seiten, die mit WordPRess gebaut werden.</p>
                <p>Teilweise ist dies aber nicht möglich - sei es wegen fehlender Möglichkeiten seitens Hoster oder wegen hoher monatlichen Kosten für die notwendige Infrastruktur.</p>
                <p>Webseiten, die mit dem JAvaScript Metaframework NextJS gebaut werden (wie mrweber.ch zum Beispiel) werden direkt bei den Entwicklern von NExtJS (Vercel) gehostet. 
                    Diese nutzen für Ihre Infrastruktur vorwiegend Amazon Web Services. Dies hat Vor- aber auch Nachteile.</p>
                <p>Falls explizit eine individuelle Webseite auf Schweizer Infrastruktur gewünscht wird ist dies natürlich möglich, erhöht aber die Kosten drastisch (Infrastruktur bei Infomaniak: ca 45 Franken pro Monat).</p>

            </section>
        </main>
    )
}

export default Page