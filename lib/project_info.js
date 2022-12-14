const links = 
    {
        wordpress: {
            name: "wordpress",
            nameDetail: "WordPress",
            link: "https://wordpress.org/",
        },
        html: {
            name: "html",
            nameDetail: "HTML5",
            link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
        },
        css: {
            name: "css",
            nameDetail: "CSS3",
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        javascript: {
            name: "javascript",
            nameDetail: "JavaScript (ES6)",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        woltlab: {
            name: "woltlab",
            nameDetail: "WoltLab Suite",
            link: "https://www.woltlab.com/de/",
        },
        react: {
            name: "react",
            nameDetail: "React",
            link: "https://reactjs.org/",
        },
        next: {
            name: "next",
            nameDetail: "Next.js",
            link: "https://nextjs.org/",
        },
        node: {
            name: "node",
            nameDetail: "Node.js",
            link: "https://nodejs.org/de/",
        },
        git: {
            name: "git",
            nameDetail: "git",
            link: "https://git-scm.com/",
        },
        netlify: {
            name: "netlify",
            nameDetail: "Netlify",
            link: "https://www.netlify.com/",
        },
        material: {
            name: "material",
            nameDetail: "Material UI",
            link: "https://mui.com/",
        },
        infomaniak: {
            name: "infomaniak",
            nameDetail: "Infomaniak kDrive",
            link: "https://www.infomaniak.com/de/kdrive"
        },
        nodemailer: {
            name: "nodemailer",
            nameDetail: "nodemailer",
            link: "https://nodemailer.com"
        }
    }

export const projects = [
    {
        name: "schussfreude",
        url: "https://schussfreude.ch",
        description: "Blog ??ber das Schweizer Sch??tzen- und Waffenwesen",
        tech: [
            links.wordpress,
            links.html,
            links.css,
            links.javascript,
        ],
        detail: [
            "Mit WordPress gebaute Blogwebseite.",
            "Wurde mit eigenem HTML5, CSS3 und JavaScript erg??nzt, um Plugins zu vermeiden, bzw an meine Bed??rfnisse anzupassen.",
            "Gehostet bei Hoststar (Schweiz), Serverstandort Deutschland",
        ],
        image: "/schussfreude.png",
    },
    {
        name: "Waffenforum",
        url: "https://waffenforum.ch",
        description: "Schweizer Sch??tzen- und Waffenforum",
        tech: [
            links.woltlab,
            links.css,
        ],
        detail: [
            "Mit der WoltLab Suite (Core und Forum) gebautes Forum.",
            "Anpassungen nur im Aussehen mit CSS3.",
            "Gehostet bei Hoststar (Schweiz), Serverstandort Deutschland",
        ],
        image: "/Waffenforum Schweiz.png",
    },
    {
        name: "Pistolenclub Hallau",
        url: "https://pistolenclub-hallau.ch",
        description: "Vereinswebseite f??r einen Schaffhauser Sch??tzenverein",
        tech: [
            links.html,
            links.css,
            links.javascript,
            links.react,
            links.next,
            links.node,
            links.netlify,
            links.git,
            links.material,
            links.infomaniak,
            links.nodemailer
        ],
        detail: [
            "",
            "Von Hand gebaute Webseite mit dem Next-Metaframework f??r die JavaScript-Bibliothek React und eigenem HTML5 und CSS3.",
            "",
            "Gehostet bei Netlify (USA), Serverstandort abh??ngig vom Endnutzer (f??r die Schweiz ein Datencenter in Frankfurt).",
            "",
            "Versionskontrolle via Github mit direkter Anbindung zu Netlify.",
            "",
            "Dateimanagement via Infomaniak kDrive Cloud, automatische bedingungsabh??ngige Darstellung der Dokumente in der Webseite.",
            "Nachrichten werden ??ber das Kontaktformular mittels nodemailer ??ber einen cyon Mailserver ausgeliefert.",
            "",
            "Dateispeicher und E-Mail-Verkehr laufen somit komplett ??ber Schweizer Infrastruktur."
        ],
        image: "/Pistolenclub Hallau.png",
    },
    {
        name: "Druckerei Hallau",
        url: "https://druckereihallau.ch",
        description: "Gesch??ftswebseite f??r ein Schaffhauser KMU",
        tech: [
            links.wordpress,
            links.html,
            links.css,
        ],
        detail: [
            "Mit WordPress gebaute Gesch??ftswebseite.",
            "Gehostet bei Hoststar (Schweiz), Serverstandort Deutschland",
        ],
        image: "druckereihallau.png",
    },
    {
        name: "Sch??tzengesellschaft Zurzach",
        url: "https://sg-zurzach.ch",
        description: "Vereinswebseite f??r einen Aargauer Sch??tzenverein",
        tech: [
            links.wordpress,
            links.html,
            links.css,
            links.javascript,
        ],
        detail: [
            "Mit WordPress gebaute Vereinswebseite.",
            "Wurde mit eigenem HTML5, CSS3 und JavaScript erg??nzt, um Plugins zu vermeiden, bzw an individuelle Bed??rfnisse anzupassen.",
            "Wurde vollst??ndig dem Verein zur Pflege und Unterhaltung ??bergeben.",
            "Gehostet bei Swisscom (Schweiz), Serverstandort Schweiz",
        ],
        image: "/SG Zurzach.png",
    },
    {
        name: "Pistolensch??tzenverein Neuhausen am Rheinfall",
        url: "https://psv-neuhausen.ch",
        description: "Vereinswebseite f??r einen Schaffhauser Sch??tzenverein",
        tech: [
            links.wordpress,
            links.html,
            links.css,
            links.javascript,
        ],
        detail: [
            "Mit WordPress gebaute Vereinswebseite.",
            "Wurde mit eigenem HTML5, CSS3 und JavaScript erg??nzt, um Plugins zu vermeiden, bzw an individuelle Bed??rfnisse anzupassen.",
            "Gehostet bei Hoststar (Schweiz), Serverstandort Deutschland",
        ],
        image: "/psvn.png",
    },
    {
        name: "Matchsch??tzenvereinigung Schaffhausen",
        url: "https://msvs.ch",
        description: "Vereinswebseite f??r eine Schaffhauser Sch??tzenvereinigung",
        tech: [
            links.wordpress,
            links.html,
            links.css,
          
        ],
        detail: [
            "Mit WordPress gebaute Vereinswebseite.",
            "Wurde mit eigenem HTML5, CSS3 und JavaScript erg??nzt, um Plugins zu vermeiden bzw an individuelle Bed??rfnisse anzupassen.",
            "Teilweise automatische Erstellung der Seiteninhalte basierend auf hochgeladenen Dokumenten.",
            "Gehostet bei Hoststar (Schweiz), Serverstandort Deutschland",
        ],
        image: "/msvs.png",
    }, 
    {
        name: "mrweber.ch",
        url: "https://mrweber.ch",
        description: "",
        tech: [
            links.html,
            links.css,
            links.javascript,
            links.react,
            links.material,
            links.next,
            links.node,
            links.git,
            links.netlify,
        ],
        detail: [
            "Von Hand gebaute Webseite mit dem Next-Metaframework (Version 12) f??r die JavaScript-Bibliothek React und eigenem HTML5 und CSS3.",
            "Gehostet bei Netlify (USA), Serverstandort abh??ngig vom Endnutzer (f??r die Schweiz ein Datencenter in Frankfurt)",
            "Versionskontrolle via Github mit direkter Anbindung zu Netlify."
        ],
        image: "/hd-g5a621cc5b_1920.jpg",
    }, 
]