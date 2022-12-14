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
        description: "Blog über das Schweizer Schützen- und Waffenwesen",
        tech: [
            links.wordpress,
            links.html,
            links.css,
            links.javascript,
        ],
        detail: [
            "Mit WordPress gebaute Blogwebseite.",
            "Wurde mit eigenem HTML5, CSS3 und JavaScript ergänzt, um Plugins zu vermeiden, bzw an meine Bedürfnisse anzupassen.",
            "Gehostet bei Hoststar (Schweiz), Serverstandort Deutschland",
        ],
        image: "/schussfreude.png",
    },
    {
        name: "Waffenforum",
        url: "https://waffenforum.ch",
        description: "Schweizer Schützen- und Waffenforum",
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
        description: "Vereinswebseite für einen Schaffhauser Schützenverein",
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
            <br />,
            "Von Hand gebaute Webseite mit dem Next-Metaframework für die JavaScript-Bibliothek React und eigenem HTML5 und CSS3.",
            <br />,
            "Gehostet bei Netlify (USA), Serverstandort abhängig vom Endnutzer (für die Schweiz ein Datencenter in Frankfurt).",
            <br />,
            "Versionskontrolle via Github mit direkter Anbindung zu Netlify.",
            <br />,
            "Dateimanagement via Infomaniak kDrive Cloud, automatische bedingungsabhängige Darstellung der Dokumente in der Webseite.",
            "Nachrichten werden über das Kontaktformular mittels nodemailer über einen cyon Mailserver ausgeliefert.",
            <br />,
            "Dateispeicher und E-Mail-Verkehr laufen somit komplett über Schweizer Infrastruktur."
        ],
        image: "/Pistolenclub Hallau.png",
    },
    {
        name: "Druckerei Hallau",
        url: "https://druckereihallau.ch",
        description: "Geschäftswebseite für ein Schaffhauser KMU",
        tech: [
            links.wordpress,
            links.html,
            links.css,
        ],
        detail: [
            "Mit WordPress gebaute Geschäftswebseite.",
            "Gehostet bei Hoststar (Schweiz), Serverstandort Deutschland",
        ],
        image: "druckereihallau.png",
    },
    {
        name: "Schützengesellschaft Zurzach",
        url: "https://sg-zurzach.ch",
        description: "Vereinswebseite für einen Aargauer Schützenverein",
        tech: [
            links.wordpress,
            links.html,
            links.css,
            links.javascript,
        ],
        detail: [
            "Mit WordPress gebaute Vereinswebseite.",
            "Wurde mit eigenem HTML5, CSS3 und JavaScript ergänzt, um Plugins zu vermeiden, bzw an individuelle Bedürfnisse anzupassen.",
            "Wurde vollständig dem Verein zur Pflege und Unterhaltung übergeben.",
            "Gehostet bei Swisscom (Schweiz), Serverstandort Schweiz",
        ],
        image: "/SG Zurzach.png",
    },
    {
        name: "Pistolenschützenverein Neuhausen am Rheinfall",
        url: "https://psv-neuhausen.ch",
        description: "Vereinswebseite für einen Schaffhauser Schützenverein",
        tech: [
            links.wordpress,
            links.html,
            links.css,
            links.javascript,
        ],
        detail: [
            "Mit WordPress gebaute Vereinswebseite.",
            "Wurde mit eigenem HTML5, CSS3 und JavaScript ergänzt, um Plugins zu vermeiden, bzw an individuelle Bedürfnisse anzupassen.",
            "Gehostet bei Hoststar (Schweiz), Serverstandort Deutschland",
        ],
        image: "/psvn.png",
    },
    {
        name: "Matchschützenvereinigung Schaffhausen",
        url: "https://msvs.ch",
        description: "Vereinswebseite für eine Schaffhauser Schützenvereinigung",
        tech: [
            links.wordpress,
            links.html,
            links.css,
          
        ],
        detail: [
            "Mit WordPress gebaute Vereinswebseite.",
            "Wurde mit eigenem HTML5, CSS3 und JavaScript ergänzt, um Plugins zu vermeiden bzw an individuelle Bedürfnisse anzupassen.",
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
            "Von Hand gebaute Webseite mit dem Next-Metaframework (Version 12) für die JavaScript-Bibliothek React und eigenem HTML5 und CSS3.",
            "Gehostet bei Netlify (USA), Serverstandort abhängig vom Endnutzer (für die Schweiz ein Datencenter in Frankfurt)",
            "Versionskontrolle via Github mit direkter Anbindung zu Netlify."
        ],
        image: "/hd-g5a621cc5b_1920.jpg",
    }, 
]