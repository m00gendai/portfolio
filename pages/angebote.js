import s from '../styles/Angebote.module.css'
import {useState} from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

    function Page(){

        const [openWPnew, setOpenWPnew] = useState(false)
        const [openWPexist, setOpenWPexist] = useState(false)
        const [openCustom, setOpenCustom] = useState(false)

        const background = "/background-1462755_1920.jpg"
    return(
        <main className="main" style={{backgroundImage: `url("${background}")`}}>
            <section className="section">
                <div className={s.headerWrapper}>
                <h2 className={s.h2}>Angebote</h2>
                </div>
                <h3 className={s.h3} onClick={()=>setOpenWPnew(!openWPnew)}>WordPress Webseite neu<span>{openWPnew ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span></h3>
                {openWPnew ?
                <div className={s.spoiler}>
                    <h4>WordPress Webseite einrichten</h4>
                    <ul>
                        <li>WordPress auf der gewünschten Umgebung installieren</li>
                        <li>Systemeinstellungen vornehmen</li>
                        <li>Notwendige Plugins installieren & konfigurieren</li>
                        <li>Sicherheit der Webseite gewährleisten</li>
                    </ul>
                    <h4>Inhalte erstellen</h4>
                    <ul>
                        <li>Gewünschte Unterseiten erstellen</li>
                        <li>Texte einbinden (oder neu erstellen)</li>
                        <li>Bilder einbinden (oder via Bilderanbieter zusammensuchen)</li>
                    </ul>
                    <h4>Suchmaschinenoptimierung</h4>
                    <p>
                        Damit die Webseite bei Google und Konsorten in den Suchergebnissen vorne mit dabei ist, müssen einige Tricks und 
                        Kniffe angewandt werden. Viele erledigen das mit Plugins für WordPress - diese sind aber oftmals aufgeblasen und funktional eingeschränkt -
                        genau das, was man braucht, erfordert dann Premium-Versionen, die zeitweise sehr viel kosten können.
                        Ich erledige die Optimierung von Hand, nach neuesten Standards. Dazu gehört auch die korrekte Darstellung von Vorschaulinks zB auf sozialen Medien.
                    </p>
                    <ul>
                        <li>Sitemap erstellen</li>
                        <li>Webseite bei Suchmaschinen indexieren</li>
                        <li>Korrekte Semantik implementieren</li>
                        <li>Korrekte Vorschaulinks für soziale Medien prüfen</li>
                        <li>Für Barrierefreiheit sorgen</li>
                        <li>Webseitenchecks (Lighthouse) durchführen</li>
                        <li>Analytik & Statistik einbinden</li>
                    </ul>
                    <h4>Sicherheit</h4>
                    <p>
                        Dies ist ein Bereich, wo ich das Abdecken via Plugin empfehle. 
                        Es gibt viele gute Sicherheitsplugins, von gratis bis günstig.
                    </p>
                    <ul>
                        <li>Installieren & konfigurieren von Sicherheitsplugins</li>
                        <li>Zusätzliche Sicherheitsmassnahmen seitens Hoster vornehmen</li>
                    </ul>
                    <h4>Responsives Design</h4>
                    <p>
                        Die meisten Webseitenaufrufe kommen heutzutage von Mobilgeräten, dem muss man gerecht werden.
                        WordPress bietet dies in der Regel von Haus aus, allerdings müssen vor allem bei individuellen Elementen
                        die Einstellungen von Hand vorgenommen werden
                    </p>
                    <ul>
                        <li>Prüfen der Responsivität</li>
                        <li>Wo nötig Anpassungen vornehmen</li>
                    </ul>
                    <h4>Datenschutz</h4>
                    <p>
                        Die Umsetzung der europäischen Datenschutz Grundverordnung wird eingehalten - dies beinhaltet (leider) auch die nervigen Cookie-Meldungen. 
                        Diese werden von mir so wenig störend wie möglich implementiert.
                    </p>
                    <ul>
                        <li>EU-DSGVO umsetzen</li>
                        <li>Cookie-Meldung implementieren</li>
                        <li>Cookie-Handhabung implementieren</li>
                        <li>Datenschutzdeklaration erstellen</li>
                        <li>Impressum erstellen</li>
                    </ul>
                    <h4>Preis</h4>
                    <p>
                        Sofern Hosting und Domain bereits vorhanden sind, gilt der Preis von CHF500. 
                        Ansonsten kommt das Hosting und die Domain noch dazu. 
                        Der Gesamtpreis ist dann abhängig vom gewählten Anbieter.
                    </p>
                    <p>
                        In diesem Preis nicht inbegriffen sind etwaige kostenpflichtige Funktionen und Plugins.
                    </p>
                </div>
                :
                null
                }
                <h3 className={s.h3}>WordPress Webseite bestehend</h3>
                <h3 className={s.h3} onClick={()=> setOpenCustom(!openCustom)}>Massgeschneiderte Lösungen</h3>
        {openCustom ?
        <div className={s.spoiler}>
      <p>
        Je nach Wunsch muss der Preis individuell festgelegt werden. Eine
        Webseite/Webapplikation von Hand zu bauen kostet sehr viel Zeit, kann
        dafür aber zu 100% Ihren Wünschen entsprechen. Eine Webseite mit einem
        anderen CMS als WordPress wäre wesentlich günstiger.
      </p>
               </div>
               :
               null} 
               <div className={s.headerWrapper}>
                <h2 className={s.h2}>Details</h2>
                </div>
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