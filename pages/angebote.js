

    function Page(){
        const background = "" // "https://cdn.pixabay.com/photo/2016/06/04/11/12/particles-1435363_960_720.jpg"
    return(
        <main className="main" style={{backgroundImage: `url("${background}")`}}>
            <section className="section">
                <h1>Angebote</h1>
                <h3>WordPress Webseite neu</h3>
                    <h4>WordPress Webseite einrichten</h4>
    <h4>Inhalte prüfen</h4>
    <h4>Suchmaschinenoptimierung</h4>
    <h4>Sicherheit</h4>
    <h4>Responsives Design</h4>
    <h4>Datenschutz</h4>
    <h4>Statistiken</h4>
                     <p>
        Sofern Hosting und Domain bereits vorhanden sind, gilt der Preis von
        CHF500. Ansonsten kommt das Hosting und die Domain noch dazu. Der
        Gesamtpreis ist dann abhängig vom gewählten Anbieter.
      </p>
      <h3>WordPress Webseite bestehend</h3>
        <h3>Massgeschneiderte Lösungen</h3>
      <p>
        Je nach Wunsch muss der Preis individuell festgelegt werden. Eine
        Webseite/Webapplikation von Hand zu bauen kostet sehr viel Zeit, kann
        dafür aber zu 100% Ihren Wünschen entsprechen. Eine Webseite mit einem
        anderen CMS als WordPress wäre wesentlich günstiger.
      </p>
                
                <h3>Details</h3>
                <p>Wenn möglich wird Schweizer Server- und Hostinginfrastruktur genutzt. Dies gilt vor allem für Seiten, die mit WordPress gebaut werden.</p>
                <p>Teilweise ist dies aber nicht möglich - sei es wegen fehlender Möglichkeiten seitens Hoster oder wegen hoher monatlichen Kosten für die notwendige Infrastruktur.</p>
                <p>Webseiten, die mit dem JavaScript Metaframework NextJS gebaut werden (wie mrweber.ch zum Beispiel) werden je nach Art der Webseite bei verschiedenen, weltweiten Anbietern gehostet. </p>
                <p>Falls explizit eine individuelle Webseite auf Schweizer Infrastruktur gewünscht wird ist dies natürlich möglich, erhöht aber die Kosten drastisch (Infrastruktur bei Infomaniak: ca 45 Franken pro Monat).
                    Auch ist nicht jede Webseite bei jedem Hoster möglich. Cyon zum Beispiel bietet keine Möglichkeit für einen nodeJS-Server, weshalb zB mrweber.ch in seiner Form nicht bei Cyon gehostet werden kann.
                </p>

            </section>
        </main>
    )
}

export default Page