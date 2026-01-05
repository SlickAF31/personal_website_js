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
                fullDescription: "Developed, configured, and evaluated multiple embedded applications on Silicon Labs EFR32 wireless platforms. Validated sensor interaction, Bluetooth communication, and radio performance using real hardware and measurements. Bachelor thesis developed at Politehnica University of Timișoara with focus on embedded software development and wireless communication using Silicon Labs hardware.",
                figureCaption: "Fig. 1 - Silicon Labs EFR32 wireless development platform with xG24 Dev Kit and radio board setup",
                roleResponsibilities: "Designed firmware to read push button inputs and control RGB LED states. Read ambient temperature from on-board sensor and mapped ranges to LED color states. Implemented BLE services and characteristics to stream inertial sensor data to smartphone in real time. Configured IMU peripherals and collected acceleration data at fixed sampling rates. Established wireless link between xG24 and EFR32xG21 boards, measured RSSI values and evaluated packet error rate for different payload sizes.",
                challenges: "Discrete time embedded logic required designing predictable state machines for buttons, LEDs, and sensors, solved through clear task separation and timing control. BLE stack integration demanded understanding Silicon Labs BLE architecture and configuration, solved by detailed SDK exploration and incremental testing. Wireless measurement accuracy needed repeatable RSSI and packet error measurements, solved by controlled test scenarios and fixed radio parameters. System integration combined sensors, BLE, and radio logic into one firmware flow, solved by modular code structure and staged validation.",
                outcome: "Functional embedded applications running on real hardware with stable BLE communication and live sensor data. Quantitative radio performance results based on RSSI and packet error rate measurements. This project demonstrates strong skills in embedded C development, wireless systems, BLE communication, sensor integration, and performance evaluation on professional development platforms. It represents a full end-to-end embedded systems project, from low-level hardware interaction to wireless data analysis."
            },
            project1: {
                title: "High Efficiency Buck Converter for Automotive Power Management",
                shortDescription: "Complete PCB design for automotive buck converter with EMI filtering, multi-stage power architecture, and protection circuits.",
                fullDescription: "Design a high efficiency buck converter PCB for automotive applications based on the TI LAUNCHXL-F28379D DSP. Create a board layout including filtering, switching stage, sensing blocks, driver path and protection circuits. The goal was to develop a complete hardware design starting from functional requirements and with minimal external guidance.",
                roleResponsibilities: "Designed the PCB layout for the full power stage. Implemented module placement and routing for EMI filtering, switching block, driver module and current sensing. Added reverse polarity protection, input filter and measurement points for 48V and 12V rails. Prepared documentation for each functional block.",
                challenges: "New design without reference PCB layout. Started from specifications only, no previous board available. Minimal guidance on purpose. Team helped only 10 to 15 percent to challenge learning speed and independence. Multi-module hardware structure. Needed to understand and link: 48V EMC filter, Switch element 48V, Current measurement 48V, Input filter, Switching stage, Driver module, Current measurement 12V, Reverse polarity protection. Component selection and routing strategy. Researched datasheets, reference schematics and automotive layout rules.",
                outcome: "Delivered a full buck converter PCB layout. Learned how to structure multi-stage power electronics hardware, follow EMI considerations, route power paths and work independently under low supervision."
            },
            project2: {
                title: "Real-Time Weather Monitoring System (ESP32 + DHT22)",
                shortDescription: "IoT weather monitoring system using ESP32 microcontroller and DHT22 sensor with real-time web interface over Wi-Fi.",
                fullDescription: "Developed a weather monitoring system using an ESP32 microcontroller and a DHT22 temperature and humidity sensor. The system collects sensor readings and displays them on a dynamic web interface via Wi-Fi in real time. The focus was on embedded sensor integration, Wi-Fi setup and hosting a responsive web page with auto-refreshing data.",
                roleResponsibilities: "Interfaced the DHT22 sensor with the ESP32. Configured Wi-Fi connectivity for network communication. Set up an asynchronous web server using the ESPAsyncWebServer library. Created a web interface that displays up-to-date temperature and humidity. Implemented error handling to keep data consistent and reliable.",
                challenges: "Sensor integration and timing ensured reliable readings from the DHT22 using correct timing and wiring, handled occasional sensor read errors using robust checks before display. Wi-Fi setup and connection stability scanned and connected to configured network SSID, managed reconnect logic, allowed clients to access real-time data by serving web pages over Wi-Fi. Asynchronous web server design used the ESPAsyncWebServer library to handle multiple client requests without blocking, developed web route handlers that return updated sensor readings in HTML format. Real-time display without refresh built HTML that automatically reused JavaScript or meta refresh to update sensor values.",
                outcome: "Delivered a working ESP32 weather monitoring system with Wi-Fi connectivity, sensor integration and a dynamic web interface. This project highlights embedded C/C++ code for microcontrollers, Wi-Fi communication and embedded web development."
            },
            project3: {
                title: "Isolated Cuk Converter Design and Simulation",
                shortDescription: "Complete MATLAB/Simulink design and simulation of isolated Cuk converter with transformer sizing and analytical validation.",
                fullDescription: "Designed and simulated an isolated Cuk converter in MATLAB and Simulink. Calculated transformer turns ratio, sized passive components (capacitors and inductors), and determined duty cycle range for the converter. Built comprehensive simulation model and verified transient and steady-state behavior through analytical plots and waveform analysis.",
                figureCaption: "Fig. 1 - Isolated Cuk converter simulation model in MATLAB Simulink",
                roleResponsibilities: "Calculated transformer turns ratio. Sized capacitors and inductors based on ripple and power requirements. Built the converter model in Simulink. Ran multiple simulations to validate behavior. Exported waveforms for analysis. Wrote MATLAB scripts for component dimensioning and conversion plots. Documented all results and design decisions.",
                challenges: "Component sizing required calculating C1a≈654nF, C1b≈343nF, C2≈190μF, L1>2.34mH, L2>0.206mH based on ripple and power targets, then confirming continuous conduction operation. Transformer and duty cycle design derived n=0.25 from voltage ratio, computed Dmax≈0.588 at Vgmax and D≈0.68 at Vgmin with 80kHz switching frequency. Initial simulations produced high startup peaks and slow settling requiring component tuning. MATLAB calculation workflow translated hand formulas into code and generated conversion curves for multiple n values to validate against Simulink.",
                outcome: "Working Cuk converter model with correct component sizing, validated simulation behavior, analytical MATLAB code for design automation, and comprehensive waveform results. Gained stronger understanding of converter energy transfer mechanisms, transformer operation principles, and continuous conduction mode (CCM) stability requirements."
            },
            project4: {
                title: "Closed Loop Buck Converter Control System",
                shortDescription: "Embedded C control system for automotive buck converter with PWM switching, ADC feedback, and predictive control using future-state recurrence.",
                fullDescription: "Designed a closed loop control system for a buck converter using embedded C, PWM switching and ADC feedback to achieve stable voltage regulation under varying loads. Built the complete test setup around a DSP microcontroller and an automotive PCB originally used in a pneumatic system for Volvo trucks. Integrated control logic, tuned regulator response using Ziegler-Nichols and K factor methods, and validated the system through real measurements. Implemented predictive control using future-state recurrence logic for enhanced system response.",
                figureCaption: "Fig. 1 - The automotive pneumatic PCB with 6 modules of buck converter used for testing and development",
                roleResponsibilities: "Developed firmware in C. Integrated ADC feedback and PWM drive. Tuned control loop gains using Ziegler-Nichols and K factor methods. Read documentation for existing modules. Built and debugged the hardware setup. Measured output signals with oscilloscope and Analog Discovery 2. Mapped PCB structure in Fusion 360. Evaluated stability through repeated tests.",
                challenges: "Control loop stability presented the primary challenge as output oscillated under load variation. Tested PID values extensively until response settled cleanly, with Ziegler-Nichols and K factor methods significantly improving response speed and damping. ADC integration required reading existing module documentation and verifying register mapping, then adding filtering and memory updates for stable readings. The complex automotive PCB contained six converter modules with separate IC paths requiring manual signal tracing and layout documentation. Hardware setup demanded careful connection of DSP MCU to board with oscilloscope and Analog Discovery 2 for waveform verification. The filter recurrence logic needed future, future+1, future+2 and future+3 values, requiring deep understanding of the CalcD1F recurrence in Filter.h where memory _m1 represents s[k] and _out represents y[k].",
                outcome: "A complete closed loop power control implementation built from firmware to final testing. Gained experience in embedded control logic, IIR filtering, power electronics measurement, tuning strategies, debugging under hardware constraints and understanding board architecture. This project strengthened skills in C firmware development, ADC feedback handling, and real converter control."
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
                fullDescription: "Entwicklung, Konfiguration und Evaluierung mehrerer eingebetteter Anwendungen auf Silicon Labs EFR32-Wireless-Plattformen. Validierung von Sensorinteraktion, Bluetooth-Kommunikation und Funkleistung unter Verwendung realer Hardware und Messungen. Bachelorarbeit entwickelt an der Politehnica-Universität Timișoara mit Fokus auf eingebettete Softwareentwicklung und drahtlose Kommunikation mit Silicon Labs-Hardware.",
                figureCaption: "Abb. 1 - Silicon Labs EFR32 drahtlose Entwicklungsplattform mit xG24 Dev Kit und Radio-Board-Setup",
                roleResponsibilities: "Firmware entworfen, um Drucktasteneingaben zu lesen und RGB-LED-Zustände zu steuern. Umgebungstemperatur vom On-Board-Sensor gelesen und Bereiche auf LED-Farbzustände abgebildet. BLE-Dienste und -Eigenschaften implementiert, um Trägheitssensordaten in Echtzeit an Smartphone zu streamen. IMU-Peripheriegeräte konfiguriert und Beschleunigungsdaten mit festen Abtastraten erfasst. Drahtlose Verbindung zwischen xG24- und EFR32xG21-Boards hergestellt, RSSI-Werte gemessen und Paketfehlerrate für verschiedene Payload-Größen bewertet.",
                challenges: "Diskrete Zeit-Embedded-Logik erforderte das Design vorhersagbarer Zustandsautomaten für Tasten, LEDs und Sensoren, gelöst durch klare Aufgabentrennung und Zeitsteuerung. BLE-Stack-Integration erforderte Verständnis der Silicon Labs BLE-Architektur und -Konfiguration, gelöst durch detaillierte SDK-Erkundung und inkrementelle Tests. Drahtlose Messgenauigkeit benötigte wiederholbare RSSI- und Paketfehlermessungen, gelöst durch kontrollierte Testszenarien und feste Funkparameter. Systemintegration kombinierte Sensoren, BLE und Funklogik in einen Firmware-Ablauf, gelöst durch modulare Codestruktur und stufenweise Validierung.",
                outcome: "Funktionale eingebettete Anwendungen auf realer Hardware mit stabiler BLE-Kommunikation und Live-Sensordaten. Quantitative Funkleistungsergebnisse basierend auf RSSI- und Paketfehlerratenmessungen. Dieses Projekt demonstriert starke Fähigkeiten in eingebetteter C-Entwicklung, drahtlosen Systemen, BLE-Kommunikation, Sensorintegration und Leistungsbewertung auf professionellen Entwicklungsplattformen. Es repräsentiert ein vollständiges End-to-End-Embedded-Systems-Projekt, von Low-Level-Hardware-Interaktion bis zur drahtlosen Datenanalyse."
            },
            project1: {
                title: "Hocheffizienter Buck-Wandler für Automobil-Energiemanagement",
                shortDescription: "Komplettes PCB-Design für Automobil-Buck-Wandler mit EMI-Filterung, mehrstufiger Leistungsarchitektur und Schutzschaltungen.",
                fullDescription: "Entwicklung eines hocheffizienten Buck-Wandler-PCB für Automobilanwendungen basierend auf dem TI LAUNCHXL-F28379D DSP. Erstellung eines Plattenlayouts einschließlich Filterung, Schaltstufe, Sensorblöcke, Treiberpfad und Schutzschaltungen. Das Ziel war die Entwicklung eines vollständigen Hardware-Designs ausgehend von funktionalen Anforderungen und mit minimaler externer Anleitung.",
                roleResponsibilities: "PCB-Layout für die gesamte Leistungsstufe entworfen. Modulplatzierung und Routing für EMI-Filterung, Schaltblock, Treibermodul und Strommessung implementiert. Verpolungsschutz, Eingangsfilter und Messpunkte für 48V- und 12V-Schienen hinzugefügt. Dokumentation für jeden funktionalen Block erstellt.",
                challenges: "Neues Design ohne Referenz-PCB-Layout. Begonnen nur mit Spezifikationen, keine vorherige Platine verfügbar. Minimale Anleitung mit Absicht. Team half nur 10 bis 15 Prozent, um Lerngeschwindigkeit und Unabhängigkeit zu fordern. Mehrstufige Hardware-Struktur. Musste verstehen und verknüpfen: 48V EMV-Filter, Schaltelement 48V, Strommessung 48V, Eingangsfilter, Schaltstufe, Treibermodul, Strommessung 12V, Verpolungsschutz. Komponentenauswahl und Routing-Strategie. Recherchierte Datenblätter, Referenzschaltpläne und automotive Layout-Regeln.",
                outcome: "Vollständiges Buck-Wandler-PCB-Layout geliefert. Gelernt, wie man mehrstufige Leistungselektronik-Hardware strukturiert, EMI-Überlegungen befolgt, Leistungspfade routet und eigenständig unter geringer Aufsicht arbeitet."
            },
            project2: {
                title: "Echtzeit-Wetterüberwachungssystem (ESP32 + DHT22)",
                shortDescription: "IoT-Wetterüberwachungssystem mit ESP32-Mikrocontroller und DHT22-Sensor mit Echtzeit-Weboberfläche über Wi-Fi.",
                fullDescription: "Entwicklung eines Wetterüberwachungssystems mit einem ESP32-Mikrocontroller und einem DHT22-Temperatur- und Feuchtigkeitssensor. Das System erfasst Sensormesswerte und zeigt sie in Echtzeit über Wi-Fi auf einer dynamischen Weboberfläche an. Der Fokus lag auf der Integration eingebetteter Sensoren, Wi-Fi-Einrichtung und dem Hosting einer responsiven Webseite mit automatisch aktualisierenden Daten.",
                roleResponsibilities: "DHT22-Sensor mit ESP32 verbunden. Wi-Fi-Konnektivität für Netzwerkkommunikation konfiguriert. Asynchronen Webserver mit der ESPAsyncWebServer-Bibliothek eingerichtet. Weboberfläche erstellt, die aktuelle Temperatur und Luftfeuchtigkeit anzeigt. Fehlerbehandlung implementiert, um Datenkonsistenz und Zuverlässigkeit zu gewährleisten.",
                challenges: "Sensorintegration und Timing stellten zuverlässige Messwerte vom DHT22 durch korrektes Timing und Verkabelung sicher, behandelten gelegentliche Sensorlesefehler durch robuste Prüfungen vor der Anzeige. Wi-Fi-Einrichtung und Verbindungsstabilität scannten und verbanden sich mit konfigurierter Netzwerk-SSID, verwalteten Wiederverbindungslogik, ermöglichten Clients den Zugriff auf Echtzeitdaten durch Bereitstellung von Webseiten über Wi-Fi. Asynchrones Webserver-Design verwendete die ESPAsyncWebServer-Bibliothek zur Handhabung mehrerer Client-Anfragen ohne Blockierung, entwickelte Web-Route-Handler, die aktualisierte Sensormesswerte im HTML-Format zurückgeben. Echtzeitanzeige ohne Aktualisierung baute HTML auf, das automatisch JavaScript oder Meta-Refresh wiederverwendete, um Sensorwerte zu aktualisieren.",
                outcome: "Funktionierendes ESP32-Wetterüberwachungssystem mit Wi-Fi-Konnektivität, Sensorintegration und dynamischer Weboberfläche geliefert. Dieses Projekt hebt eingebetteten C/C++-Code für Mikrocontroller, Wi-Fi-Kommunikation und eingebettete Webentwicklung hervor."
            },
            project3: {
                title: "Design und Simulation eines isolierten Cuk-Wandlers",
                shortDescription: "Vollständiges MATLAB/Simulink-Design und Simulation eines isolierten Cuk-Wandlers mit Transformator-Dimensionierung und analytischer Validierung.",
                fullDescription: "Design und Simulation eines isolierten Cuk-Wandlers in MATLAB und Simulink. Berechnung des Transformator-Übersetzungsverhältnisses, Dimensionierung passiver Komponenten (Kondensatoren und Induktivitäten) und Bestimmung des Tastverhältnisbereichs für den Wandler. Aufbau eines umfassenden Simulationsmodells und Überprüfung des transienten und stationären Verhaltens durch analytische Diagramme und Wellenformanalyse.",
                figureCaption: "Abb. 1 - Simulationsmodell des isolierten Cuk-Wandlers in MATLAB Simulink",
                roleResponsibilities: "Berechnung des Transformator-Übersetzungsverhältnisses. Dimensionierung von Kondensatoren und Induktivitäten basierend auf Welligkeit und Leistungsanforderungen. Aufbau des Wandlermodells in Simulink. Durchführung mehrerer Simulationen zur Verhaltensvalidierung. Export von Wellenformen zur Analyse. Erstellung von MATLAB-Skripten für Komponentendimensionierung und Umwandlungsdiagramme. Dokumentation aller Ergebnisse und Designentscheidungen.",
                challenges: "Die Komponentendimensionierung erforderte die Berechnung von C1a≈654nF, C1b≈343nF, C2≈190μF, L1>2,34mH, L2>0,206mH basierend auf Welligkeits- und Leistungszielen sowie die Bestätigung des kontinuierlichen Leitbetriebs. Das Transformator- und Tastverhältnis-Design leitete n=0,25 aus dem Spannungsverhältnis ab, berechnete Dmax≈0,588 bei Vgmax und D≈0,68 bei Vgmin mit 80kHz Schaltfrequenz. Erste Simulationen erzeugten hohe Anlaufspitzen und langsames Einschwingen, was Komponentenabstimmung erforderte. Der MATLAB-Berechnungsworkflow übersetzte Handformeln in Code und generierte Umwandlungskurven für mehrere n-Werte zur Validierung gegen Simulink.",
                outcome: "Funktionierendes Cuk-Wandler-Modell mit korrekter Komponentendimensionierung, validiertem Simulationsverhalten, analytischem MATLAB-Code für Designautomatisierung und umfassenden Wellenformergebnissen. Tieferes Verständnis von Wandler-Energieübertragungsmechanismen, Transformatorbetriebsprinzipien und CCM-Stabilitätsanforderungen gewonnen."
            },
            project4: {
                title: "Closed-Loop Buck-Wandler-Steuersystem",
                shortDescription: "Embedded-C-Steuersystem für Automobil-Buck-Wandler mit PWM-Schaltung, ADC-Rückkopplung und prädiktiver Steuerung mittels Zukunftszustand-Rekursion.",
                fullDescription: "Entwicklung eines Closed-Loop-Steuersystems für einen Buck-Wandler mit Embedded C, PWM-Schaltung und ADC-Rückkopplung zur Erzielung stabiler Spannungsregelung unter variablen Lasten. Aufbau des kompletten Testaufbaus mit einem DSP-Mikrocontroller und einer automobilen Leiterplatte, die ursprünglich in einem Pneumatiksystem für Volvo-Lastwagen verwendet wurde. Integration der Steuerlogik, Abstimmung der Reglerreaktion mit Ziegler-Nichols- und K-Faktor-Methoden und Validierung des Systems durch reale Messungen. Implementierung prädiktiver Steuerung mittels Zukunftszustand-Rekursionslogik für verbesserte Systemantwort.",
                figureCaption: "Abb. 1 - Die pneumatische Automobil-Leiterplatte mit 6 Buck-Wandler-Modulen für Tests und Entwicklung",
                roleResponsibilities: "Firmware in C entwickelt. ADC-Rückkopplung und PWM-Antrieb integriert. Regelkreisverstärkungen mit Ziegler-Nichols- und K-Faktor-Methoden abgestimmt. Dokumentation für bestehende Module gelesen. Hardware-Setup aufgebaut und debuggt. Ausgangssignale mit Oszilloskop und Analog Discovery 2 gemessen. PCB-Struktur in Fusion 360 kartiert. Stabilität durch wiederholte Tests bewertet.",
                challenges: "Die Stabilität der Regelschleife stellte die Hauptherausforderung dar, da der Ausgang unter Lastvariation oszillierte. PID-Werte wurden ausgiebig getestet, bis die Reaktion sauber einschwang, wobei Ziegler-Nichols- und K-Faktor-Methoden die Reaktionsgeschwindigkeit und Dämpfung erheblich verbesserten. Die ADC-Integration erforderte das Lesen bestehender Moduldokumentation und die Überprüfung der Register-Zuordnung sowie das Hinzufügen von Filterung und Speicher-Updates für stabile Messwerte. Die komplexe Automobil-Leiterplatte enthielt sechs Wandlermodule mit separaten IC-Pfaden, die manuelle Signalverfolgung und Layout-Dokumentation erforderten. Der Hardware-Aufbau erforderte sorgfältigen Anschluss des DSP-MCU an die Platine mit Oszilloskop und Analog Discovery 2 zur Wellenformüberprüfung. Die Filter-Rekursionslogik benötigte Zukunfts-, Zukunfts+1-, Zukunfts+2- und Zukunfts+3-Werte, was tiefes Verständnis der CalcD1F-Rekursion in Filter.h erforderte, wobei Speicher _m1 s[k] und _out y[k] darstellt.",
                outcome: "Eine komplette Closed-Loop-Leistungssteuerimplementierung von der Firmware bis zum abschließenden Test. Erfahrung in eingebetteter Steuerlogik, IIR-Filterung, Leistungselektronik-Messung, Abstimmungsstrategien, Debugging unter Hardware-Einschränkungen und Verständnis der Platinenarchitektur gewonnen. Dieses Projekt stärkte die Fähigkeiten in C-Firmware-Entwicklung, ADC-Rückkopplungshandhabung und realer Wandlersteuerung."
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
                fullDescription: "Développement, configuration et évaluation de plusieurs applications embarquées sur les plateformes sans fil Silicon Labs EFR32. Validation de l'interaction des capteurs, de la communication Bluetooth et des performances radio à l'aide de matériel réel et de mesures. Thèse de licence développée à l'Université Politehnica de Timișoara avec un accent sur le développement de logiciels embarqués et la communication sans fil utilisant le matériel Silicon Labs.",
                figureCaption: "Fig. 1 - Plateforme de développement sans fil Silicon Labs EFR32 avec kit de développement xG24 et configuration de carte radio",
                roleResponsibilities: "Conçu un firmware pour lire les entrées de boutons-poussoirs et contrôler les états des LED RGB. Lu la température ambiante du capteur embarqué et mappé les plages aux états de couleur des LED. Implémenté des services et caractéristiques BLE pour diffuser les données du capteur inertiel vers un smartphone en temps réel. Configuré les périphériques IMU et collecté les données d'accélération à des taux d'échantillonnage fixes. Établi une liaison sans fil entre les cartes xG24 et EFR32xG21, mesuré les valeurs RSSI et évalué le taux d'erreur de paquets pour différentes tailles de charge utile.",
                challenges: "La logique embarquée en temps discret nécessitait la conception de machines à états prévisibles pour les boutons, LED et capteurs, résolue par une séparation claire des tâches et un contrôle temporel. L'intégration de la pile BLE exigeait la compréhension de l'architecture et de la configuration BLE de Silicon Labs, résolue par une exploration détaillée du SDK et des tests incrémentaux. La précision des mesures sans fil nécessitait des mesures RSSI et d'erreur de paquets reproductibles, résolue par des scénarios de test contrôlés et des paramètres radio fixes. L'intégration système combinait capteurs, BLE et logique radio dans un flux de firmware unique, résolue par une structure de code modulaire et une validation par étapes.",
                outcome: "Applications embarquées fonctionnelles exécutées sur du matériel réel avec communication BLE stable et données de capteurs en direct. Résultats quantitatifs de performances radio basés sur des mesures RSSI et de taux d'erreur de paquets. Ce projet démontre de solides compétences en développement C embarqué, systèmes sans fil, communication BLE, intégration de capteurs et évaluation des performances sur des plateformes de développement professionnelles. Il représente un projet de systèmes embarqués complet de bout en bout, de l'interaction matérielle de bas niveau à l'analyse de données sans fil."
            },
            project1: {
                title: "Convertisseur Buck haute efficacité pour gestion de puissance automobile",
                shortDescription: "Conception PCB complète pour convertisseur buck automobile avec filtrage EMI, architecture de puissance multi-étages et circuits de protection.",
                fullDescription: "Concevoir un PCB de convertisseur buck à haute efficacité pour applications automobiles basé sur le DSP TI LAUNCHXL-F28379D. Créer une disposition de carte incluant filtrage, étage de commutation, blocs de détection, chemin de pilote et circuits de protection. L'objectif était de développer une conception matérielle complète à partir des exigences fonctionnelles et avec un guidage externe minimal.",
                roleResponsibilities: "Conçu la disposition PCB pour l'étage de puissance complet. Implémenté le placement des modules et le routage pour le filtrage EMI, le bloc de commutation, le module de pilote et la détection de courant. Ajouté la protection contre l'inversion de polarité, le filtre d'entrée et les points de mesure pour les rails 48V et 12V. Préparé la documentation pour chaque bloc fonctionnel.",
                challenges: "Nouvelle conception sans disposition PCB de référence. Commencé uniquement avec les spécifications, aucune carte précédente disponible. Guidage minimal intentionnel. L'équipe n'a aidé qu'à 10 à 15 pour cent pour défier la vitesse d'apprentissage et l'indépendance. Structure matérielle multi-modules. Nécessitait de comprendre et de relier : Filtre CEM 48V, Élément de commutation 48V, Mesure de courant 48V, Filtre d'entrée, Étage de commutation, Module de pilote, Mesure de courant 12V, Protection contre inversion de polarité. Sélection des composants et stratégie de routage. Recherché les fiches techniques, les schémas de référence et les règles de disposition automobile.",
                outcome: "Livré une disposition PCB complète de convertisseur buck. Appris à structurer du matériel d'électronique de puissance multi-étages, suivre les considérations EMI, router les chemins de puissance et travailler de manière indépendante sous faible supervision."
            },
            project2: {
                title: "Système de surveillance météo en temps réel (ESP32 + DHT22)",
                shortDescription: "Système de surveillance météo IoT utilisant un microcontrôleur ESP32 et un capteur DHT22 avec interface web en temps réel via Wi-Fi.",
                fullDescription: "Développement d'un système de surveillance météo utilisant un microcontrôleur ESP32 et un capteur de température et d'humidité DHT22. Le système collecte les lectures des capteurs et les affiche sur une interface web dynamique via Wi-Fi en temps réel. L'accent était mis sur l'intégration de capteurs embarqués, la configuration Wi-Fi et l'hébergement d'une page web réactive avec actualisation automatique des données.",
                roleResponsibilities: "Interfacé le capteur DHT22 avec l'ESP32. Configuré la connectivité Wi-Fi pour la communication réseau. Mis en place un serveur web asynchrone utilisant la bibliothèque ESPAsyncWebServer. Créé une interface web affichant la température et l'humidité actualisées. Implémenté la gestion des erreurs pour maintenir la cohérence et la fiabilité des données.",
                challenges: "L'intégration et le timing du capteur ont assuré des lectures fiables du DHT22 en utilisant un timing et un câblage corrects, géré les erreurs de lecture occasionnelles du capteur par des vérifications robustes avant l'affichage. La configuration Wi-Fi et la stabilité de connexion ont scanné et connecté au SSID réseau configuré, géré la logique de reconnexion, permis aux clients d'accéder aux données en temps réel en servant des pages web via Wi-Fi. La conception du serveur web asynchrone a utilisé la bibliothèque ESPAsyncWebServer pour gérer plusieurs requêtes client sans blocage, développé des gestionnaires de routes web qui retournent les lectures de capteurs actualisées au format HTML. L'affichage en temps réel sans rafraîchissement a construit du HTML qui réutilise automatiquement JavaScript ou meta refresh pour mettre à jour les valeurs des capteurs.",
                outcome: "Livré un système de surveillance météo ESP32 fonctionnel avec connectivité Wi-Fi, intégration de capteurs et interface web dynamique. Ce projet met en évidence le code C/C++ embarqué pour microcontrôleurs, la communication Wi-Fi et le développement web embarqué."
            },
            project3: {
                title: "Conception et simulation d'un convertisseur Cuk isolé",
                shortDescription: "Conception et simulation complète MATLAB/Simulink d'un convertisseur Cuk isolé avec dimensionnement du transformateur et validation analytique.",
                fullDescription: "Conception et simulation d'un convertisseur Cuk isolé dans MATLAB et Simulink. Calcul du rapport de transformation du transformateur, dimensionnement des composants passifs (condensateurs et inductances) et détermination de la plage de rapport cyclique pour le convertisseur. Construction d'un modèle de simulation complet et vérification du comportement transitoire et en régime permanent par des tracés analytiques et une analyse des formes d'onde.",
                figureCaption: "Fig. 1 - Modèle de simulation du convertisseur Cuk isolé dans MATLAB Simulink",
                roleResponsibilities: "Calcul du rapport de transformation du transformateur. Dimensionnement des condensateurs et inductances basé sur les exigences d'ondulation et de puissance. Construction du modèle de convertisseur dans Simulink. Exécution de multiples simulations pour valider le comportement. Export des formes d'onde pour analyse. Écriture de scripts MATLAB pour le dimensionnement des composants et les tracés de conversion. Documentation de tous les résultats et décisions de conception.",
                challenges: "Le dimensionnement des composants nécessitait le calcul de C1a≈654nF, C1b≈343nF, C2≈190μF, L1>2,34mH, L2>0,206mH basé sur les objectifs d'ondulation et de puissance, puis la confirmation du fonctionnement en conduction continue. La conception du transformateur et du rapport cyclique a dérivé n=0,25 à partir du rapport de tension, calculé Dmax≈0,588 à Vgmax et D≈0,68 à Vgmin avec une fréquence de commutation de 80kHz. Les simulations initiales produisaient des pics de démarrage élevés et un établissement lent nécessitant un réglage des composants. Le flux de calcul MATLAB a traduit les formules manuelles en code et généré des courbes de conversion pour plusieurs valeurs de n pour validation contre Simulink.",
                outcome: "Modèle de convertisseur Cuk fonctionnel avec dimensionnement correct des composants, comportement de simulation validé, code MATLAB analytique pour l'automatisation de la conception et résultats de formes d'onde complets. Acquisition d'une compréhension plus approfondie des mécanismes de transfert d'énergie du convertisseur, des principes de fonctionnement du transformateur et des exigences de stabilité en mode de conduction continue (CCM)."
            },
            project4: {
                title: "Système de contrôle en boucle fermée pour convertisseur Buck",
                shortDescription: "Système de contrôle en C embarqué pour convertisseur buck automobile avec commutation PWM, rétroaction ADC et contrôle prédictif utilisant la récurrence d'état futur.",
                fullDescription: "Conception d'un système de contrôle en boucle fermée pour un convertisseur buck utilisant le C embarqué, la commutation PWM et la rétroaction ADC pour obtenir une régulation de tension stable sous charges variables. Construction du banc d'essai complet autour d'un microcontrôleur DSP et d'un PCB automobile utilisé à l'origine dans un système pneumatique pour camions Volvo. Intégration de la logique de contrôle, réglage de la réponse du régulateur en utilisant les méthodes Ziegler-Nichols et facteur K, et validation du système par mesures réelles. Implémentation du contrôle prédictif utilisant la logique de récurrence d'état futur pour une réponse système améliorée.",
                figureCaption: "Fig. 1 - Le PCB pneumatique automobile avec 6 modules de convertisseur buck utilisés pour les tests et le développement",
                roleResponsibilities: "Développé le firmware en C. Intégré la rétroaction ADC et le pilotage PWM. Réglé les gains de boucle de contrôle à l'aide des méthodes de Ziegler-Nichols et du facteur K. Lu la documentation des modules existants. Construit et débogué la configuration matérielle. Mesuré les signaux de sortie avec oscilloscope et Analog Discovery 2. Cartographié la structure du PCB dans Fusion 360. Évalué la stabilité par des tests répétés.",
                challenges: "La stabilité de la boucle de contrôle présentait le défi principal car la sortie oscillait sous variation de charge. Les valeurs PID ont été testées de manière approfondie jusqu'à ce que la réponse se stabilise proprement, les méthodes Ziegler-Nichols et facteur K améliorant significativement la vitesse de réponse et l'amortissement. L'intégration ADC nécessitait la lecture de la documentation du module existant et la vérification du mappage des registres, puis l'ajout de filtrage et de mises à jour de mémoire pour des lectures stables. Le PCB automobile complexe contenait six modules de convertisseur avec des chemins IC séparés nécessitant un traçage manuel des signaux et une documentation de disposition. La configuration matérielle exigeait une connexion soigneuse du MCU DSP à la carte avec oscilloscope et Analog Discovery 2 pour vérification des formes d'onde. La logique de récurrence du filtre nécessitait les valeurs futur, futur+1, futur+2 et futur+3, nécessitant une compréhension approfondie de la récurrence CalcD1F dans Filter.h où la mémoire _m1 représente s[k] et _out représente y[k].",
                outcome: "Une implémentation complète de contrôle de puissance en boucle fermée construite du firmware aux tests finaux. Acquis de l'expérience en logique de contrôle embarqué, filtrage IIR, mesure d'électronique de puissance, stratégies de réglage, débogage sous contraintes matérielles et compréhension de l'architecture de carte. Ce projet a renforcé les compétences en développement de firmware C, gestion de rétroaction ADC et contrôle de convertisseur réel."
            }
        }
    }
};
