const translations = {
    en: {
        nav: {
            about: "About",
            services: "Services",
            works: "Works",
            blogs: "Blogs",
            contact: "Contact"
        },
        sidebar: {
            name: "Chevereșan Raul-Gabriel",
            position: "Hardware/Electrical Engineer at",
            company: "Diamond Apps AG",
            downloadResume: "Download Resume",
            aboutMe: "About Me",
            description: "I am a hardware and embedded software engineer based in Switzerland. I work with embedded systems, IoT projects, and power electronics. I studied Electronics at Politehnica University Timișoara and hold a Residential Permit Type B."
        },
        about: {
            title: "Who am I?",
            description: "I work with embedded boards, sensors, radios, and power electronics. I write firmware in C and C++, design circuits, run tests, and fix problems fast. I developed automotive buck converters and DSP control while working at Hella Forvia. Now I work at Diamond Apps AG where I automate systems, build robotic control, and deliver end to end solutions. I enjoy working with real hardware, improving designs, and turning ideas into working products. I focus on embedded development, automation, and clean, efficient engineering."
        },
        skills: {
            title: "Skills",
            programmingLanguages: "Programming Languages",
            advanced: "Advanced:",
            intermediate: "Intermediate:",
            basic: "Basic:",
            tools: "Tools",
            technical: "Technical",
            softSkills: "Soft-skills",
            spokenLanguages: "Spoken Languages"
        },
        services: {
            pcbDesign: {
                title: "PCB Design",
                description: "Create clean PCB layouts for prototypes or products. Stable routing, smart component placement, ready for assembly."
            },
            embeddedSoftware: {
                title: "Embedded C Software",
                description: "Build firmware for microcontrollers and sensors. Reliable control, efficient code, real hardware results."
            },
            circuitTesting: {
                title: "Electronic Circuit Testing",
                description: "Run signal checks, debug faults, measure performance, improve stability through testing."
            },
            iotIntegration: {
                title: "IoT System Integration",
                description: "Connect hardware to the cloud or local apps using BLE or WiFi. Real time control and monitoring."
            },
            modeling3d: {
                title: "3D Modeling",
                description: "Model enclosures and mechanical parts in Fusion 360. Print ready files for hardware integration."
            },
            prototyping: {
                title: "Hardware Prototyping",
                description: "Assemble electronics, firmware, and mechanics into a functional prototype fast with clear validation steps."
            }
        },
        contact: {
            title: "Get in Touch",
            phone: "Phone",
            whatsapp: "WhatsApp",
            email: "Email",
            location: "Location",
            callMe: "Call me",
            openWhatsapp: "Open WhatsApp",
            sendEmail: "Send email",
            whatsappMessage: "Message me on WhatsApp",
            locationValue: "Switzerland",
            connectWithMe: "Connect with me",
            github: "GitHub",
            linkedin: "LinkedIn"
        },
        blog: {
            title: "Blog Coming Soon",
            description: "I'm currently working on sharing technical insights, project case studies, and engineering solutions. This space will feature articles on embedded systems, hardware design, and practical engineering challenges.",
            stayTuned: "Stay tuned for upcoming content."
        },
        portfolio: {
            viewDetails: "View Details",
            backToProjects: "Back to Projects",
            overview: "Overview",
            roleResponsibilities: "Role & Responsibilities",
            technologiesUsed: "Technologies Used",
            challenges: "Key Technical Challenges & Resolutions",
            codeImplementation: "Code Implementation",
            outcome: "Outcome",
            viewOnGithub: "View on GitHub",
            project0: {
                title: "Realization of Applications on an EFR32 Wireless System on Chip",
                shortDescription: "Bachelor thesis project focused on embedded software development and wireless communication using Silicon Labs EFR32 platforms.",
                fullDescription: "Developed, configured, and evaluated multiple embedded applications on Silicon Labs EFR32 wireless platforms. Validated sensor interaction, Bluetooth communication, and radio performance using real hardware and measurements.",
                figureCaption: "Fig. 1 - Silicon Labs EFR32 wireless development platform with xG24 Dev Kit and radio board setup",
                roleResponsibilities: "Designed firmware to read push button inputs and control RGB LED states. Read ambient temperature from on-board sensor and mapped ranges to LED color states. Implemented BLE services and characteristics to stream inertial sensor data to smartphone in real time.",
                challenges: "Discrete time embedded logic required designing predictable state machines for buttons, LEDs, and sensors, solved through clear task separation and timing control. BLE stack integration demanded understanding Silicon Labs BLE architecture and configuration.",
                outcome: "Functional embedded applications running on real hardware with stable BLE communication and live sensor data. Quantitative radio performance results based on RSSI and packet error rate measurements."
            },
            project1: {
                title: "High Efficiency Buck Converter for Automotive Power Management",
                shortDescription: "Complete PCB design for automotive buck converter with EMI filtering, multi-stage power architecture, and protection circuits.",
                fullDescription: "Design a high efficiency buck converter PCB for automotive applications based on the TI LAUNCHXL-F28379D DSP. Create a board layout including filtering, switching stage, sensing blocks, driver path and protection circuits.",
                roleResponsibilities: "Designed the PCB layout for the full power stage. Implemented module placement and routing for EMI filtering, switching block, driver module and current sensing. Added reverse polarity protection, input filter and measurement points for 48V and 12V rails.",
                challenges: "New design without reference PCB layout. Started from specifications only, no previous board available. Minimal guidance on purpose. Team helped only 10 to 15 percent.",
                outcome: "Delivered a full buck converter PCB layout. Learned how to structure multi-stage power electronics hardware, follow EMI considerations, route power paths and work independently under low supervision."
            },
            project2: {
                title: "Real-Time Weather Monitoring System (ESP32 + DHT22)",
                shortDescription: "IoT weather monitoring system using ESP32 microcontroller and DHT22 sensor with real-time web interface over Wi-Fi.",
                fullDescription: "Developed a weather monitoring system using an ESP32 microcontroller and a DHT22 temperature and humidity sensor. The system collects sensor readings and displays them on a dynamic web interface via Wi-Fi in real time.",
                roleResponsibilities: "Interfaced the DHT22 sensor with the ESP32. Configured Wi-Fi connectivity for network communication. Set up an asynchronous web server using the ESPAsyncWebServer library. Created a web interface that displays up-to-date temperature and humidity.",
                challenges: "Sensor integration and timing ensured reliable readings from the DHT22 using correct timing and wiring. Wi-Fi setup and connection stability scanned and connected to configured network SSID.",
                outcome: "Delivered a working ESP32 weather monitoring system with Wi-Fi connectivity, sensor integration and a dynamic web interface."
            },
            project3: {
                title: "Isolated Cuk Converter Design and Simulation",
                shortDescription: "Complete MATLAB/Simulink design and simulation of isolated Cuk converter with transformer sizing and analytical validation.",
                fullDescription: "Designed and simulated an isolated Cuk converter in MATLAB and Simulink. Calculated transformer turns ratio, sized passive components (capacitors and inductors), and determined duty cycle range for the converter.",
                figureCaption: "Fig. 1 - Isolated Cuk converter simulation model in MATLAB Simulink",
                roleResponsibilities: "Calculated transformer turns ratio. Sized capacitors and inductors based on ripple and power requirements. Built the converter model in Simulink. Ran multiple simulations to validate behavior.",
                challenges: "Component sizing required calculating C1a≈654nF, C1b≈343nF, C2≈190μF, L1>2.34mH, L2>0.206mH based on ripple and power targets, then confirming continuous conduction operation.",
                outcome: "Working Cuk converter model with correct component sizing, validated simulation behavior, analytical MATLAB code for design automation, and comprehensive waveform results."
            },
            project4: {
                title: "Closed Loop Buck Converter Control System",
                shortDescription: "Embedded C control system for automotive buck converter with PWM switching, ADC feedback, and predictive control using future-state recurrence.",
                fullDescription: "Designed a closed loop control system for a buck converter using embedded C, PWM switching and ADC feedback to achieve stable voltage regulation under varying loads.",
                figureCaption: "Fig. 1 - The automotive pneumatic PCB with 6 modules of buck converter used for testing and development",
                roleResponsibilities: "Developed firmware in C. Integrated ADC feedback and PWM drive. Tuned control loop gains using Ziegler-Nichols and K factor methods. Read documentation for existing modules. Built and debugged the hardware setup.",
                challenges: "Control loop stability presented the primary challenge as output oscillated under load variation. Tested PID values extensively until response settled cleanly.",
                outcome: "A complete closed loop power control implementation built from firmware to final testing. Gained experience in embedded control logic, IIR filtering, power electronics measurement."
            }
        }
    },
    de: {
        nav: {
            about: "Über mich",
            services: "Dienstleistungen",
            works: "Arbeiten",
            blogs: "Blogs",
            contact: "Kontakt"
        },
        sidebar: {
            name: "Chevereșan Raul-Gabriel",
            position: "Hardware/Elektrotechniker bei",
            company: "Diamond Apps AG",
            downloadResume: "Lebenslauf herunterladen",
            aboutMe: "Über mich",
            description: "Ich bin ein Hardware- und Embedded-Software-Ingenieur in der Schweiz. Ich arbeite mit eingebetteten Systemen, IoT-Projekten und Leistungselektronik. Ich habe Elektronik an der Politehnica Universität Timișoara studiert und besitze eine Aufenthaltsbewilligung Typ B."
        },
        about: {
            title: "Wer bin ich?",
            description: "Ich arbeite mit eingebetteten Boards, Sensoren, Funkgeräten und Leistungselektronik. Ich schreibe Firmware in C und C++, entwerfe Schaltungen, führe Tests durch und behebe Probleme schnell. Ich habe Automotive-Buck-Wandler und DSP-Steuerung bei Hella Forvia entwickelt. Jetzt arbeite ich bei Diamond Apps AG, wo ich Systeme automatisiere, Robotersteuerung baue und End-to-End-Lösungen liefere."
        },
        skills: {
            title: "Fähigkeiten",
            programmingLanguages: "Programmiersprachen",
            advanced: "Fortgeschritten:",
            intermediate: "Mittel:",
            basic: "Grundkenntnisse:",
            tools: "Werkzeuge",
            technical: "Technisch",
            softSkills: "Soft-Skills",
            spokenLanguages: "Gesprochene Sprachen"
        },
        services: {
            pcbDesign: {
                title: "PCB-Design",
                description: "Erstellen Sie saubere PCB-Layouts für Prototypen oder Produkte. Stabile Verdrahtung, intelligente Komponentenplatzierung, bereit für die Montage."
            },
            embeddedSoftware: {
                title: "Embedded C Software",
                description: "Firmware für Mikrocontroller und Sensoren entwickeln. Zuverlässige Steuerung, effizienter Code, echte Hardware-Ergebnisse."
            },
            circuitTesting: {
                title: "Elektronische Schaltungsprüfung",
                description: "Signalprüfungen durchführen, Fehler debuggen, Leistung messen, Stabilität durch Tests verbessern."
            },
            iotIntegration: {
                title: "IoT-Systemintegration",
                description: "Hardware über BLE oder WiFi mit der Cloud oder lokalen Apps verbinden. Echtzeitsteuerung und -überwachung."
            },
            modeling3d: {
                title: "3D-Modellierung",
                description: "Gehäuse und mechanische Teile in Fusion 360 modellieren. Druckfertige Dateien für Hardware-Integration."
            },
            prototyping: {
                title: "Hardware-Prototyping",
                description: "Elektronik, Firmware und Mechanik schnell zu einem funktionsfähigen Prototyp mit klaren Validierungsschritten zusammenbauen."
            }
        },
        contact: {
            title: "Kontaktieren Sie mich",
            phone: "Telefon",
            whatsapp: "WhatsApp",
            email: "E-Mail",
            location: "Standort",
            callMe: "Rufen Sie mich an",
            openWhatsapp: "WhatsApp öffnen",
            sendEmail: "E-Mail senden",
            whatsappMessage: "Schreiben Sie mir auf WhatsApp",
            locationValue: "Schweiz",
            connectWithMe: "Verbinden Sie sich mit mir",
            github: "GitHub",
            linkedin: "LinkedIn"
        },
        blog: {
            title: "Blog kommt bald",
            description: "Ich arbeite derzeit daran, technische Einblicke, Projektfallstudien und Engineering-Lösungen zu teilen. Dieser Bereich wird Artikel über eingebettete Systeme, Hardware-Design und praktische Engineering-Herausforderungen enthalten.",
            stayTuned: "Bleiben Sie dran für kommende Inhalte."
        },
        portfolio: {
            viewDetails: "Details anzeigen",
            backToProjects: "Zurück zu Projekten",
            overview: "Überblick",
            roleResponsibilities: "Rolle & Verantwortlichkeiten",
            technologiesUsed: "Verwendete Technologien",
            challenges: "Wichtige technische Herausforderungen & Lösungen",
            codeImplementation: "Code-Implementierung",
            situation: "Situation",
            action: "Aktion",
            result: "Ergebnis",
            outcome: "Ergebnis",
            viewOnGithub: "Auf GitHub ansehen",
            viewProject: "Projekt ansehen",
            project0: {
                title: "Realisierung von Anwendungen auf einem EFR32 Wireless System on Chip",
                shortDescription: "Bachelorarbeitsprojekt mit Fokus auf eingebettete Softwareentwicklung und drahtlose Kommunikation mit Silicon Labs EFR32-Plattformen.",
                fullDescription: "Entwicklung, Konfiguration und Evaluierung mehrerer eingebetteter Anwendungen auf Silicon Labs EFR32-Wireless-Plattformen. Validierung von Sensorinteraktion, Bluetooth-Kommunikation und Funkleistung unter Verwendung realer Hardware und Messungen.",
                figureCaption: "Abb. 1 - Silicon Labs EFR32 drahtlose Entwicklungsplattform mit xG24 Dev Kit und Radio-Board-Setup",
                roleResponsibilities: "Firmware entworfen, um Drucktasteneingaben zu lesen und RGB-LED-Zustände zu steuern. Umgebungstemperatur vom On-Board-Sensor gelesen und Bereiche auf LED-Farbzustände abgebildet. BLE-Dienste und -Eigenschaften implementiert, um Trägheitssensordaten in Echtzeit an Smartphone zu streamen.",
                challenges: "Diskrete Zeit-Embedded-Logik erforderte das Design vorhersagbarer Zustandsautomaten für Tasten, LEDs und Sensoren, gelöst durch klare Aufgabentrennung und Zeitsteuerung. BLE-Stack-Integration erforderte Verständnis der Silicon Labs BLE-Architektur und -Konfiguration.",
                outcome: "Funktionale eingebettete Anwendungen auf realer Hardware mit stabiler BLE-Kommunikation und Live-Sensordaten. Quantitative Funkleistungsergebnisse basierend auf RSSI- und Paketfehlerratenmessungen."
            },
            project1: {
                title: "Hocheffizienter Buck-Wandler für Automobil-Energiemanagement",
                shortDescription: "Komplettes PCB-Design für Automobil-Buck-Wandler mit EMI-Filterung, mehrstufiger Leistungsarchitektur und Schutzschaltungen.",
                fullDescription: "Entwicklung eines hocheffizienten Buck-Wandler-PCB für Automobilanwendungen basierend auf dem TI LAUNCHXL-F28379D DSP. Erstellung eines Plattenlayouts einschließlich Filterung, Schaltstufe, Sensorblöcke, Treiberpfad und Schutzschaltungen.",
                roleResponsibilities: "PCB-Layout für die gesamte Leistungsstufe entworfen. Modulplatzierung und Routing für EMI-Filterung, Schaltblock, Treibermodul und Strommessung implementiert. Verpolungsschutz, Eingangsfilter und Messpunkte für 48V- und 12V-Schienen hinzugefügt.",
                challenges: "Neues Design ohne Referenz-PCB-Layout. Begonnen nur mit Spezifikationen, keine vorherige Platine verfügbar. Minimale Anleitung mit Absicht. Team half nur 10 bis 15 Prozent.",
                outcome: "Vollständiges Buck-Wandler-PCB-Layout geliefert. Gelernt, wie man mehrstufige Leistungselektronik-Hardware strukturiert, EMI-Überlegungen befolgt, Leistungspfade routet und eigenständig unter geringer Aufsicht arbeitet."
            },
            project2: {
                title: "Echtzeit-Wetterüberwachungssystem (ESP32 + DHT22)",
                shortDescription: "IoT-Wetterüberwachungssystem mit ESP32-Mikrocontroller und DHT22-Sensor mit Echtzeit-Weboberfläche über Wi-Fi.",
                fullDescription: "Entwicklung eines Wetterüberwachungssystems mit einem ESP32-Mikrocontroller und einem DHT22-Temperatur- und Feuchtigkeitssensor. Das System erfasst Sensormesswerte und zeigt sie in Echtzeit über Wi-Fi auf einer dynamischen Weboberfläche an.",
                roleResponsibilities: "DHT22-Sensor mit ESP32 verbunden. Wi-Fi-Konnektivität für Netzwerkkommunikation konfiguriert. Asynchronen Webserver mit der ESPAsyncWebServer-Bibliothek eingerichtet. Weboberfläche erstellt, die aktuelle Temperatur und Luftfeuchtigkeit anzeigt.",
                challenges: "Sensorintegration und Timing stellten zuverlässige Messwerte vom DHT22 durch korrektes Timing und Verkabelung sicher. Wi-Fi-Einrichtung und Verbindungsstabilität scannten und verbanden sich mit konfigurierter Netzwerk-SSID.",
                outcome: "Funktionierendes ESP32-Wetterüberwachungssystem mit Wi-Fi-Konnektivität, Sensorintegration und dynamischer Weboberfläche geliefert."
            },
            project3: {
                title: "Design und Simulation eines isolierten Cuk-Wandlers",
                shortDescription: "Vollständiges MATLAB/Simulink-Design und Simulation eines isolierten Cuk-Wandlers mit Transformator-Dimensionierung und analytischer Validierung.",
                fullDescription: "Design und Simulation eines isolierten Cuk-Wandlers in MATLAB und Simulink. Berechnung des Transformator-Übersetzungsverhältnisses, Dimensionierung passiver Komponenten (Kondensatoren und Induktivitäten) und Bestimmung des Tastverhältnisbereichs für den Wandler.",
                figureCaption: "Abb. 1 - Simulationsmodell des isolierten Cuk-Wandlers in MATLAB Simulink",
                roleResponsibilities: "Berechnung des Transformator-Übersetzungsverhältnisses. Dimensionierung von Kondensatoren und Induktivitäten basierend auf Welligkeit und Leistungsanforderungen. Aufbau des Wandlermodells in Simulink. Durchführung mehrerer Simulationen zur Verhaltensvalidierung.",
                challenges: "Die Komponentendimensionierung erforderte die Berechnung von C1a≈654nF, C1b≈343nF, C2≈190μF, L1>2,34mH, L2>0,206mH basierend auf Welligkeits- und Leistungszielen sowie die Bestätigung des kontinuierlichen Leitbetriebs.",
                outcome: "Funktionierendes Cuk-Wandler-Modell mit korrekter Komponentendimensionierung, validiertem Simulationsverhalten, analytischem MATLAB-Code für Designautomatisierung und umfassenden Wellenformergebnissen."
            },
            project4: {
                title: "Closed-Loop Buck-Wandler-Steuersystem",
                shortDescription: "Embedded-C-Steuersystem für Automobil-Buck-Wandler mit PWM-Schaltung, ADC-Rückkopplung und prädiktiver Steuerung mittels Zukunftszustand-Rekursion.",
                fullDescription: "Entwicklung eines Closed-Loop-Steuersystems für einen Buck-Wandler mit Embedded C, PWM-Schaltung und ADC-Rückkopplung zur Erzielung stabiler Spannungsregelung unter variablen Lasten.",
                figureCaption: "Abb. 1 - Die pneumatische Automobil-Leiterplatte mit 6 Buck-Wandler-Modulen für Tests und Entwicklung",
                roleResponsibilities: "Firmware in C entwickelt. ADC-Rückkopplung und PWM-Antrieb integriert. Regelkreisverstärkungen mit Ziegler-Nichols- und K-Faktor-Methoden abgestimmt. Dokumentation für bestehende Module gelesen. Hardware-Setup aufgebaut und debuggt.",
                challenges: "Die Stabilität der Regelschleife stellte die Hauptherausforderung dar, da der Ausgang unter Lastvariation oszillierte. PID-Werte wurden ausgiebig getestet, bis die Reaktion sauber einschwang.",
                outcome: "Eine komplette Closed-Loop-Leistungssteuerimplementierung von der Firmware bis zum abschließenden Test. Erfahrung in eingebetteter Steuerlogik, IIR-Filterung, Leistungselektronik-Messung gewonnen."
            }
        }
    },
    fr: {
        nav: {
            about: "À propos",
            services: "Services",
            works: "Travaux",
            blogs: "Blogs",
            contact: "Contact"
        },
        sidebar: {
            name: "Chevereșan Raul-Gabriel",
            position: "Ingénieur matériel/électrique chez",
            company: "Diamond Apps AG",
            downloadResume: "Télécharger le CV",
            aboutMe: "À propos de moi",
            description: "Je suis ingénieur en matériel et logiciels embarqués basé en Suisse. Je travaille avec des systèmes embarqués, des projets IoT et de l'électronique de puissance. J'ai étudié l'électronique à l'Université Politehnica de Timișoara et je détiens un permis de séjour de type B."
        },
        about: {
            title: "Qui suis-je?",
            description: "Je travaille avec des cartes embarquées, des capteurs, des radios et de l'électronique de puissance. J'écris des firmwares en C et C++, conçois des circuits, effectue des tests et résous rapidement les problèmes. J'ai développé des convertisseurs buck automobiles et des commandes DSP en travaillant chez Hella Forvia. Maintenant, je travaille chez Diamond Apps AG où j'automatise des systèmes, construis des commandes robotiques et livre des solutions de bout en bout."
        },
        skills: {
            title: "Compétences",
            programmingLanguages: "Langages de programmation",
            advanced: "Avancé:",
            intermediate: "Intermédiaire:",
            basic: "Base:",
            tools: "Outils",
            technical: "Technique",
            softSkills: "Compétences personnelles",
            spokenLanguages: "Langues parlées"
        },
        services: {
            pcbDesign: {
                title: "Conception de PCB",
                description: "Créer des layouts PCB propres pour prototypes ou produits. Routage stable, placement intelligent des composants, prêt pour l'assemblage."
            },
            embeddedSoftware: {
                title: "Logiciel embarqué C",
                description: "Construire des firmwares pour microcontrôleurs et capteurs. Contrôle fiable, code efficace, résultats matériels réels."
            },
            circuitTesting: {
                title: "Test de circuits électroniques",
                description: "Effectuer des vérifications de signal, déboguer les défauts, mesurer les performances, améliorer la stabilité par les tests."
            },
            iotIntegration: {
                title: "Intégration de systèmes IoT",
                description: "Connecter le matériel au cloud ou aux applications locales en utilisant BLE ou WiFi. Contrôle et surveillance en temps réel."
            },
            modeling3d: {
                title: "Modélisation 3D",
                description: "Modéliser des boîtiers et des pièces mécaniques dans Fusion 360. Fichiers prêts à imprimer pour l'intégration matérielle."
            },
            prototyping: {
                title: "Prototypage matériel",
                description: "Assembler rapidement l'électronique, le firmware et la mécanique en un prototype fonctionnel avec des étapes de validation claires."
            }
        },
        contact: {
            title: "Contactez-moi",
            phone: "Téléphone",
            whatsapp: "WhatsApp",
            email: "E-mail",
            location: "Localisation",
            callMe: "Appelez-moi",
            openWhatsapp: "Ouvrir WhatsApp",
            sendEmail: "Envoyer un e-mail",
            whatsappMessage: "Envoyez-moi un message sur WhatsApp",
            locationValue: "Suisse",
            connectWithMe: "Connectez-vous avec moi",
            github: "GitHub",
            linkedin: "LinkedIn"
        },
        blog: {
            title: "Blog à venir",
            description: "Je travaille actuellement sur le partage d'informations techniques, d'études de cas de projets et de solutions d'ingénierie. Cet espace présentera des articles sur les systèmes embarqués, la conception matérielle et les défis d'ingénierie pratiques.",
            stayTuned: "Restez à l'écoute pour le contenu à venir."
        },
        portfolio: {
            viewDetails: "Voir les détails",
            backToProjects: "Retour aux projets",
            overview: "Aperçu",
            roleResponsibilities: "Rôle et responsabilités",
            technologiesUsed: "Technologies utilisées",
            challenges: "Principaux défis techniques et résolutions",
            codeImplementation: "Implémentation du code",
            situation: "Situation",
            action: "Action",
            result: "Résultat",
            outcome: "Résultat",
            viewOnGithub: "Voir sur GitHub",
            viewProject: "Voir le projet",
            project0: {
                title: "Réalisation d'applications sur un système sans fil EFR32 sur puce",
                shortDescription: "Projet de thèse de licence axé sur le développement de logiciels embarqués et la communication sans fil utilisant les plateformes Silicon Labs EFR32.",
                fullDescription: "Développement, configuration et évaluation de plusieurs applications embarquées sur les plateformes sans fil Silicon Labs EFR32. Validation de l'interaction des capteurs, de la communication Bluetooth et des performances radio à l'aide de matériel réel et de mesures.",
                figureCaption: "Fig. 1 - Plateforme de développement sans fil Silicon Labs EFR32 avec kit de développement xG24 et configuration de carte radio",
                roleResponsibilities: "Conçu un firmware pour lire les entrées de boutons-poussoirs et contrôler les états des LED RGB. Lu la température ambiante du capteur embarqué et mappé les plages aux états de couleur des LED. Implémenté des services et caractéristiques BLE pour diffuser les données du capteur inertiel vers un smartphone en temps réel.",
                challenges: "La logique embarquée en temps discret nécessitait la conception de machines à états prévisibles pour les boutons, LED et capteurs, résolue par une séparation claire des tâches et un contrôle temporel. L'intégration de la pile BLE exigeait la compréhension de l'architecture et de la configuration BLE de Silicon Labs.",
                outcome: "Applications embarquées fonctionnelles exécutées sur du matériel réel avec communication BLE stable et données de capteurs en direct. Résultats quantitatifs de performances radio basés sur des mesures RSSI et de taux d'erreur de paquets."
            },
            project1: {
                title: "Convertisseur Buck haute efficacité pour gestion de puissance automobile",
                shortDescription: "Conception PCB complète pour convertisseur buck automobile avec filtrage EMI, architecture de puissance multi-étages et circuits de protection.",
                fullDescription: "Concevoir un PCB de convertisseur buck à haute efficacité pour applications automobiles basé sur le DSP TI LAUNCHXL-F28379D. Créer une disposition de carte incluant filtrage, étage de commutation, blocs de détection, chemin de pilote et circuits de protection.",
                roleResponsibilities: "Conçu la disposition PCB pour l'étage de puissance complet. Implémenté le placement des modules et le routage pour le filtrage EMI, le bloc de commutation, le module de pilote et la détection de courant. Ajouté la protection contre l'inversion de polarité, le filtre d'entrée et les points de mesure pour les rails 48V et 12V.",
                challenges: "Nouvelle conception sans disposition PCB de référence. Commencé uniquement avec les spécifications, aucune carte précédente disponible. Guidage minimal intentionnel. L'équipe n'a aidé qu'à 10 à 15 pour cent.",
                outcome: "Livré une disposition PCB complète de convertisseur buck. Appris à structurer du matériel d'électronique de puissance multi-étages, suivre les considérations EMI, router les chemins de puissance et travailler de manière indépendante sous faible supervision."
            },
            project2: {
                title: "Système de surveillance météo en temps réel (ESP32 + DHT22)",
                shortDescription: "Système de surveillance météo IoT utilisant un microcontrôleur ESP32 et un capteur DHT22 avec interface web en temps réel via Wi-Fi.",
                fullDescription: "Développement d'un système de surveillance météo utilisant un microcontrôleur ESP32 et un capteur de température et d'humidité DHT22. Le système collecte les lectures des capteurs et les affiche sur une interface web dynamique via Wi-Fi en temps réel.",
                roleResponsibilities: "Interfacé le capteur DHT22 avec l'ESP32. Configuré la connectivité Wi-Fi pour la communication réseau. Mis en place un serveur web asynchrone utilisant la bibliothèque ESPAsyncWebServer. Créé une interface web affichant la température et l'humidité actualisées.",
                challenges: "L'intégration et le timing du capteur ont assuré des lectures fiables du DHT22 en utilisant un timing et un câblage corrects. La configuration Wi-Fi et la stabilité de connexion ont scanné et connecté au SSID réseau configuré.",
                outcome: "Livré un système de surveillance météo ESP32 fonctionnel avec connectivité Wi-Fi, intégration de capteurs et interface web dynamique."
            },
            project3: {
                title: "Conception et simulation d'un convertisseur Cuk isolé",
                shortDescription: "Conception et simulation complète MATLAB/Simulink d'un convertisseur Cuk isolé avec dimensionnement du transformateur et validation analytique.",
                fullDescription: "Conception et simulation d'un convertisseur Cuk isolé dans MATLAB et Simulink. Calcul du rapport de transformation du transformateur, dimensionnement des composants passifs (condensateurs et inductances) et détermination de la plage de rapport cyclique pour le convertisseur.",
                figureCaption: "Fig. 1 - Modèle de simulation du convertisseur Cuk isolé dans MATLAB Simulink",
                roleResponsibilities: "Calcul du rapport de transformation du transformateur. Dimensionnement des condensateurs et inductances basé sur les exigences d'ondulation et de puissance. Construction du modèle de convertisseur dans Simulink. Exécution de multiples simulations pour valider le comportement.",
                challenges: "Le dimensionnement des composants nécessitait le calcul de C1a≈654nF, C1b≈343nF, C2≈190μF, L1>2,34mH, L2>0,206mH basé sur les objectifs d'ondulation et de puissance, puis la confirmation du fonctionnement en conduction continue.",
                outcome: "Modèle de convertisseur Cuk fonctionnel avec dimensionnement correct des composants, comportement de simulation validé, code MATLAB analytique pour l'automatisation de la conception et résultats de formes d'onde complets."
            },
            project4: {
                title: "Système de contrôle en boucle fermée pour convertisseur Buck",
                shortDescription: "Système de contrôle en C embarqué pour convertisseur buck automobile avec commutation PWM, rétroaction ADC et contrôle prédictif utilisant la récurrence d'état futur.",
                fullDescription: "Conception d'un système de contrôle en boucle fermée pour un convertisseur buck utilisant le C embarqué, la commutation PWM et la rétroaction ADC pour obtenir une régulation de tension stable sous charges variables.",
                figureCaption: "Fig. 1 - Le PCB pneumatique automobile avec 6 modules de convertisseur buck utilisés pour les tests et le développement",
                roleResponsibilities: "Développé le firmware en C. Intégré la rétroaction ADC et le pilotage PWM. Réglé les gains de boucle de contrôle à l'aide des méthodes de Ziegler-Nichols et du facteur K. Lu la documentation des modules existants. Construit et débogué la configuration matérielle.",
                challenges: "La stabilité de la boucle de contrôle présentait le défi principal car la sortie oscillait sous variation de charge. Les valeurs PID ont été testées de manière approfondie jusqu'à ce que la réponse se stabilise proprement.",
                outcome: "Une implémentation complète de contrôle de puissance en boucle fermée construite du firmware aux tests finaux. Acquis de l'expérience en logique de contrôle embarqué, filtrage IIR, mesure d'électronique de puissance."
            }
        }
    }
};
