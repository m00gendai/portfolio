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
        image: "https://i.imgur.com/FBOIabM.jpg",
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
        image: "https://i.imgur.com/1y5WtBn.jpg",
    },
    {
        name: "Pistolenclub Hallau",
        url: "https://pistolenclub-hallau.ch",
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
        image: "https://i.imgur.com/WtteUMH.jpg",
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
        image: "https://i.imgur.com/yJwtNct.jpg",
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
        image: "https://i.imgur.com/ThW19BE.jpg",
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
        image: "https://i.imgur.com/EzGNlMh.jpg",
    },
    {
        name: "Matchschützenvereinigung Schaffhausen",
        url: "https://msvs.ch",
        description: "Vereinswebseite für eine Schaffhauser Schützenvereinigung",
        tech: [
            links.wordpress,
            links.html,
            links.css,
            links.javascript,
        ],
        detail: [
            "Mit WordPress gebaute Vereinswebseite.",
            "Wurde mit eigenem HTML5, CSS3 und JavaScript ergänzt, um Plugins zu vermeiden bzw an individuelle Bedürfnisse anzupassen.",
            "Teilweise automatische Erstellung der Seiteninhalte basierend auf hochgeladenen Dokumenten.",
            "Gehostet bei Hoststar (Schweiz), Serverstandort Deutschland",
        ],
        image: "https://i.imgur.com/8qmRaJO.jpg",
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
        image: "https://i.imgur.com/8qmRaJO.jpg",
    }, 
]