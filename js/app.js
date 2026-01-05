let currentLang = 'en';
let currentPage = 'about';
let selectedProject = null;

const projects = [
    {
        id: 0,
        image: "images/portfolio/project0.png",
        title: "Realization of Applications on an EFR32 Wireless System on Chip",
        shortDescription: "Bachelor thesis project focused on embedded software development and wireless communication using Silicon Labs EFR32 platforms.",
        fullDescription: "Developed, configured, and evaluated multiple embedded applications on Silicon Labs EFR32 wireless platforms. Validated sensor interaction, Bluetooth communication, and radio performance using real hardware and measurements. Bachelor thesis developed at Politehnica University of Timișoara with focus on embedded software development and wireless communication using Silicon Labs hardware.",
        figureImage: "images/portfolio/project0-fig.png",
        figureCaption: "Fig. 1 - Silicon Labs EFR32 wireless development platform with xG24 Dev Kit and radio board setup",
        technologies: ["Silicon Labs xG24 Dev Kit", "EFR32xG21 Radio Board", "Simplicity Studio", "Gecko SDK", "C Programming", "Bluetooth Low Energy", "IMU Sensors", "Wireless Communication", "RSSI Measurement", "Embedded Systems"],
        roleResponsibilities: "Designed firmware to read push button inputs and control RGB LED states. Read ambient temperature from on-board sensor and mapped ranges to LED color states. Implemented BLE services and characteristics to stream inertial sensor data to smartphone in real time. Configured IMU peripherals and collected acceleration data at fixed sampling rates. Established wireless link between xG24 and EFR32xG21 boards, measured RSSI values and evaluated packet error rate for different payload sizes.",
        challenges: "Discrete time embedded logic required designing predictable state machines for buttons, LEDs, and sensors, solved through clear task separation and timing control. BLE stack integration demanded understanding Silicon Labs BLE architecture and configuration, solved by detailed SDK exploration and incremental testing. Wireless measurement accuracy needed repeatable RSSI and packet error measurements, solved by controlled test scenarios and fixed radio parameters.",
        outcome: "Functional embedded applications running on real hardware with stable BLE communication and live sensor data. Quantitative radio performance results based on RSSI and packet error rate measurements. This project demonstrates strong skills in embedded C development, wireless systems, BLE communication, sensor integration, and performance evaluation on professional development platforms.",
        galleryImages: null,
        pdfLink: null,
        codeSection: null
    },
    {
        id: 1,
        image: "images/portfolio/project1.png",
        title: "High Efficiency Buck Converter for Automotive Power Management",
        shortDescription: "Complete PCB design for automotive buck converter with EMI filtering, multi-stage power architecture, and protection circuits.",
        fullDescription: "Design a high efficiency buck converter PCB for automotive applications based on the TI LAUNCHXL-F28379D DSP. Create a board layout including filtering, switching stage, sensing blocks, driver path and protection circuits. The goal was to develop a complete hardware design starting from functional requirements and with minimal external guidance.",
        technologies: ["PCB Design", "TI LAUNCHXL-F28379D", "Buck Topology", "EMI Filtering", "Current Sensing", "Automotive Power", "Reverse Polarity Protection", "Power Routing", "Clearance & Creepage"],
        roleResponsibilities: "Designed the PCB layout for the full power stage. Implemented module placement and routing for EMI filtering, switching block, driver module and current sensing. Added reverse polarity protection, input filter and measurement points for 48V and 12V rails. Prepared documentation for each functional block.",
        challenges: "New design without reference PCB layout. Started from specifications only, no previous board available. Minimal guidance on purpose. Team helped only 10 to 15 percent to challenge learning speed and independence. Multi-module hardware structure. Needed to understand and link: 48V EMC filter, Switch element 48V, Current measurement 48V, Input filter, Switching stage, Driver module, Current measurement 12V, Reverse polarity protection.",
        outcome: "Delivered a full buck converter PCB layout. Learned how to structure multi-stage power electronics hardware, follow EMI considerations, route power paths and work independently under low supervision.",
        externalLink: "https://student108403.autodesk360.com/g/shares/SH512d4QTec90decfa6e01b5a3ebc8253ece",
        figureImage: null,
        galleryImages: null,
        pdfLink: null,
        codeSection: null
    },
    {
        id: 2,
        image: "images/portfolio/project2.jpg",
        title: "Real-Time Weather Monitoring System (ESP32 + DHT22)",
        shortDescription: "IoT weather monitoring system using ESP32 microcontroller and DHT22 sensor with real-time web interface over Wi-Fi.",
        fullDescription: "Developed a weather monitoring system using an ESP32 microcontroller and a DHT22 temperature and humidity sensor. The system collects sensor readings and displays them on a dynamic web interface via Wi-Fi in real time. The focus was on embedded sensor integration, Wi-Fi setup and hosting a responsive web page with auto-refreshing data.",
        technologies: ["ESP32", "DHT22 Sensor", "C/C++", "Arduino IDE", "ESPAsyncWebServer", "Wi-Fi", "HTML/CSS", "JavaScript", "Embedded Web Server", "IoT"],
        roleResponsibilities: "Interfaced the DHT22 sensor with the ESP32. Configured Wi-Fi connectivity for network communication. Set up an asynchronous web server using the ESPAsyncWebServer library. Created a web interface that displays up-to-date temperature and humidity. Implemented error handling to keep data consistent and reliable.",
        challenges: "Sensor integration and timing ensured reliable readings from the DHT22 using correct timing and wiring, handled occasional sensor read errors using robust checks before display. Wi-Fi setup and connection stability scanned and connected to configured network SSID, managed reconnect logic, allowed clients to access real-time data by serving web pages over Wi-Fi.",
        outcome: "Delivered a working ESP32 weather monitoring system with Wi-Fi connectivity, sensor integration and a dynamic web interface. This project highlights embedded C/C++ code for microcontrollers, Wi-Fi communication and embedded web development.",
        githubLink: "https://github.com/SlickAF31/MeteoStation/tree/main/ESP32/MeteoStation",
        figureImage: null,
        galleryImages: null,
        pdfLink: null,
        codeSection: null
    },
    {
        id: 3,
        image: "images/portfolio/project3.jpg",
        title: "Isolated Cuk Converter Design and Simulation",
        shortDescription: "Complete MATLAB/Simulink design and simulation of isolated Cuk converter with transformer sizing and analytical validation.",
        fullDescription: "Designed and simulated an isolated Cuk converter in MATLAB and Simulink. Calculated transformer turns ratio, sized passive components (capacitors and inductors), and determined duty cycle range for the converter. Built comprehensive simulation model and verified transient and steady-state behavior through analytical plots and waveform analysis.",
        technologies: ["MATLAB", "Simulink", "Power Electronics", "Transformer Design", "CCM Analysis", "Component Sizing", "Waveform Analysis"],
        roleResponsibilities: "Calculated transformer turns ratio. Sized capacitors and inductors based on ripple and power requirements. Built the converter model in Simulink. Ran multiple simulations to validate behavior. Exported waveforms for analysis. Wrote MATLAB scripts for component dimensioning and conversion plots. Documented all results and design decisions.",
        challenges: "Component sizing required calculating C1a≈654nF, C1b≈343nF, C2≈190μF, L1>2.34mH, L2>0.206mH based on ripple and power targets, then confirming continuous conduction operation. Transformer and duty cycle design derived n=0.25 from voltage ratio, computed Dmax≈0.588 at Vgmax and D≈0.68 at Vgmin with 80kHz switching frequency.",
        outcome: "Working Cuk converter model with correct component sizing, validated simulation behavior, analytical MATLAB code for design automation, and comprehensive waveform results. Gained stronger understanding of converter energy transfer mechanisms, transformer operation principles, and continuous conduction mode (CCM) stability requirements.",
        figureImage: "images/portfolio/cukProjectFiles/Poza_Simulare_Cuk_Simulink.PNG",
        figureCaption: "Fig. 1 - Isolated Cuk converter simulation model in MATLAB Simulink",
        galleryImages: [
            { src: "images/portfolio/cukProjectFiles/Curentii_Primari_Si_Secundari_Transformator.PNG", caption: "Transformer primary and secondary currents" },
            { src: "images/portfolio/cukProjectFiles/Forme_Unda_Curent_si_Tensiune_Iesire.PNG", caption: "Output current and voltage waveforms" },
            { src: "images/portfolio/cukProjectFiles/Forme_Unda_Curenti_Inductivi_Tensiuni_Capacitive.PNG", caption: "Inductive currents and capacitive voltages" },
            { src: "images/portfolio/cukProjectFiles/Grafic_Raport_Static_de_Conversie.PNG", caption: "Static conversion ratio graph" },
            { src: "images/portfolio/cukProjectFiles/Poza_forma_unda_Curent_Iesire.PNG", caption: "Output current waveform detail" },
            { src: "images/portfolio/cukProjectFiles/Sarcina_Tensiune_Tranzistor.PNG", caption: "Transistor voltage under load" },
            { src: "images/portfolio/cukProjectFiles/Tensiuni_Transformator_Primar_Secundar.PNG", caption: "Transformer primary and secondary voltages" }
        ],
        pdfLink: "images/portfolio/cukProjectFiles/Calcule_pe_foaie_Convertor_Cuk.pdf",
        codeSection: "// Component Sizing MATLAB Script\nformat long;\nVg_min = 4; Vg_max = 9;\nVo = 5; n = 0.25;\nDmax = 0.588; D = 0.68;\nf = 80e3; R = Vo/5;\n\nC1a=(n^2*((Dmax)/(1-Dmax))*Vg_max)/(R*0.05*Vo*f);\nC1b=(n^2*((D)/(1-D))*Vg_min)/(R*0.05*Vo*f);\nC2=(Vo)/(R*0.05*f);\n\nL1=(R*(1-D))/(2*f);\nL2=(R*D)/(2*f);\n\n// Conversion Ratio Plot\nD=0:0.01:0.99;\nn=[0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 0.98 0.99];\nfor k=1:length(n)\n    M=-(D./(1-D)).*(1./n(k));\n    plot(D,M)\nend"
    },
    {
        id: 4,
        image: "images/portfolio/project4.jpg",
        title: "Closed Loop Buck Converter Control System",
        shortDescription: "Embedded C control system for automotive buck converter with PWM switching, ADC feedback, and predictive control using future-state recurrence.",
        fullDescription: "Designed a closed loop control system for a buck converter using embedded C, PWM switching and ADC feedback to achieve stable voltage regulation under varying loads. Built the complete test setup around a DSP microcontroller and an automotive PCB originally used in a pneumatic system for Volvo trucks. Integrated control logic, tuned regulator response using Ziegler-Nichols and K factor methods, and validated the system through real measurements.",
        technologies: ["Embedded C", "DSP Microcontroller", "PWM Control", "ADC Feedback", "IIR Filtering", "PID Control", "Ziegler-Nichols Tuning", "Oscilloscope", "Analog Discovery 2", "Fusion 360"],
        roleResponsibilities: "Developed firmware in C. Integrated ADC feedback and PWM drive. Tuned control loop gains using Ziegler-Nichols and K factor methods. Read documentation for existing modules. Built and debugged the hardware setup. Measured output signals with oscilloscope and Analog Discovery 2. Mapped PCB structure in Fusion 360. Evaluated stability through repeated tests.",
        challenges: "Control loop stability presented the primary challenge as output oscillated under load variation. Tested PID values extensively until response settled cleanly, with Ziegler-Nichols and K factor methods significantly improving response speed and damping. ADC integration required reading existing module documentation and verifying register mapping, then adding filtering and memory updates for stable readings.",
        outcome: "A complete closed loop power control implementation built from firmware to final testing. Gained experience in embedded control logic, IIR filtering, power electronics measurement, tuning strategies, debugging under hardware constraints and understanding board architecture. This project strengthened skills in C firmware development, ADC feedback handling, and real converter control.",
        githubLink: "https://github.com/SlickAF31/DSP-Work",
        figureImage: "images/portfolio/project4-fig.jpg",
        figureCaption: "Fig. 1 - The automotive pneumatic PCB with 6 modules of buck converter used for testing and development",
        galleryImages: null,
        pdfLink: null,
        codeSection: "// Recurrence Formula Inside CalcD1F\n// y[k] = b0 * x[k] + s[k]\n// s[k+1] = b1 * x[k] - a1 * y[k]\n\ncoef->_out = (coef->_b0 * val) + coef->_m1;\ncoef->_m1 = (coef->_b1 * val) - (coef->_out * coef->_a1);\n\n// x[k] = input sample\n// y[k] = output\n// _m1 = memory for next iteration"
    }
];

const skillsData = {
    languages: {
        advanced: ["C", "C++"],
        intermediate: ["Python", "MATLAB"],
        basic: ["Java", "HTML/CSS", "SQL", "Bash", "Gradle"]
    },
    tools: ["Git", "Linux", "Autodesk Fusion 360", "Bambu Lab", "Code Composer Studio"],
    technical: ["Embedded Prog.", "PCB Design", "Prototyping", "Automotive"],
    softSkills: ["Problem-solving", "Communication", "Adaptability", "Leadership", "Creativity"],
    spokenLanguages: [
        { name: "Romanian", level: "Native" },
        { name: "English", level: "Advanced" },
        { name: "German", level: "Elementary" }
    ]
};

function initApp() {
    setupNavigation();
    setupLanguageSwitcher();
    setupModals();
    loadPage('about');
    updateLanguage('en');
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);
            
            navLinks.forEach(l => l.classList.remove('active', 'text-purple-600'));
            link.classList.add('active', 'text-purple-600');
        });
    });
}

function setupLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang);
            
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    document.querySelector('[data-lang="en"]').classList.add('active');
}

function setupModals() {
    const imageModal = document.getElementById('imageModal');
    const closeImageModalBtn = document.getElementById('closeImageModal');
    
    closeImageModalBtn.addEventListener('click', () => {
        imageModal.classList.add('hidden');
    });
    
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            imageModal.classList.add('hidden');
        }
    });
}

function openImageModal(imageSrc) {
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc;
    imageModal.classList.remove('hidden');
}

function updateLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[lang];
        
        keys.forEach(k => {
            value = value[k];
        });
        
        if (value) {
            el.textContent = value;
        }
    });
    
    loadPage(currentPage);
}

function loadPage(page) {
    currentPage = page;
    const content = document.getElementById('pageContent');
    
    switch(page) {
        case 'about':
            content.innerHTML = renderAboutPage();
            break;
        case 'services':
            content.innerHTML = renderServicesPage();
            break;
        case 'works':
            content.innerHTML = renderWorksPage();
            setupProjectListeners();
            break;
        case 'blogs':
            content.innerHTML = renderBlogPage();
            break;
        case 'contact':
            content.innerHTML = renderContactPage();
            break;
    }
}

function renderAboutPage() {
    const t = translations[currentLang];
    return `
        <section class="py-8">
            <div class="flex flex-wrap md:px-4">
                <div class="w-full">
                    <div class="md:mx-4">
                        <h3 class="text-2xl text-gray-800 font-bold mb-4">${t.about.title}</h3>
                        <p class="text-sm text-gray-400 leading-6 mb-3">
                            ${t.about.description}
                        </p>
                    </div>
                    ${renderSkills()}
                </div>
            </div>
        </section>
    `;
}

function renderSkills() {
    const t = translations[currentLang];
    return `
        <div class="py-4">
            <div class="flex flex-wrap">
                <div class="w-full">
                    <div class="md:mx-4">
                        <h3 class="text-2xl text-gray-800 font-bold mb-6">${t.skills.title}</h3>
                        
                        <div class="flex flex-col md:flex-row gap-8 mb-8">
                            <div class="md:w-1/2">
                                <div class="mb-6">
                                    <h4 class="text-lg text-gray-800 font-semibold mb-3">${t.skills.programmingLanguages}</h4>
                                    <div class="ml-4">
                                        <p class="text-sm text-gray-600 mb-2">
                                            <span class="italic font-medium">${t.skills.advanced}</span>
                                        </p>
                                        <ol class="list-decimal ml-6 mb-3">
                                            ${skillsData.languages.advanced.map(lang => 
                                                `<li class="text-sm text-gray-400">${lang}</li>`
                                            ).join('')}
                                        </ol>
                                        <p class="text-sm text-gray-600 mb-2">
                                            <span class="italic font-medium">${t.skills.intermediate}</span>
                                        </p>
                                        <ol class="list-decimal ml-6 mb-3">
                                            ${skillsData.languages.intermediate.map(lang => 
                                                `<li class="text-sm text-gray-400">${lang}</li>`
                                            ).join('')}
                                        </ol>
                                        <p class="text-sm text-gray-600 mb-2">
                                            <span class="italic font-medium">${t.skills.basic}</span>
                                        </p>
                                        <ol class="list-decimal ml-6">
                                            ${skillsData.languages.basic.map(lang => 
                                                `<li class="text-sm text-gray-400">${lang}</li>`
                                            ).join('')}
                                        </ol>
                                    </div>
                                </div>
                                
                                <div class="mt-8">
                                    <h4 class="text-lg text-gray-800 font-semibold mb-3">${t.skills.spokenLanguages}</h4>
                                    <ul class="ml-4">
                                        ${skillsData.spokenLanguages.map(lang => 
                                            `<li class="text-sm text-gray-400 mb-2">
                                                <span class="font-medium text-gray-600">${lang.name}</span> (${lang.level})
                                            </li>`
                                        ).join('')}
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="md:w-1/2">
                                <div class="mb-6">
                                    <h4 class="text-lg text-gray-800 font-semibold mb-3">${t.skills.tools}</h4>
                                    <ul class="ml-4">
                                        ${skillsData.tools.map(tool => 
                                            `<li class="text-sm text-gray-400 mb-1">- ${tool}</li>`
                                        ).join('')}
                                    </ul>
                                </div>
                                
                                <div class="mb-6">
                                    <h4 class="text-lg text-gray-800 font-semibold mb-3">${t.skills.technical}</h4>
                                    <ul class="ml-4">
                                        ${skillsData.technical.map(tech => 
                                            `<li class="text-sm text-gray-400 mb-1">- ${tech}</li>`
                                        ).join('')}
                                    </ul>
                                </div>
                                
                                <div class="mb-6">
                                    <h4 class="text-lg text-gray-800 font-semibold mb-3">${t.skills.softSkills}</h4>
                                    <ul class="ml-4">
                                        ${skillsData.softSkills.map(skill => 
                                            `<li class="text-sm text-gray-400 mb-1">- ${skill}</li>`
                                        ).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderServicesPage() {
    const t = translations[currentLang];
    const services = [
        { icon: 'fa-microchip', data: t.services.pcbDesign },
        { icon: 'fa-code', data: t.services.embeddedSoftware },
        { icon: 'fa-vial', data: t.services.circuitTesting },
        { icon: 'fa-wifi', data: t.services.iotIntegration },
        { icon: 'fa-cube', data: t.services.modeling3d },
        { icon: 'fa-tools', data: t.services.prototyping }
    ];
    
    return `
        <section class="pb-10">
            <div class="flex flex-wrap md:px-4">
                ${services.map(service => `
                    <div class="w-full md:w-1/2 p-4">
                        <div class="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition">
                            <div class="w-12 h-12 mb-4 flex items-center justify-center rounded bg-purple-100 text-purple-600 text-2xl">
                                <i class="fas ${service.icon}"></i>
                            </div>
                            <h4 class="text-lg text-gray-800 font-semibold mb-3">${service.data.title}</h4>
                            <p class="text-sm text-gray-400 leading-relaxed">${service.data.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

function renderWorksPage() {
    const t = translations[currentLang];
    return `
        <section class="pb-10">
            <div class="flex flex-wrap md:px-4">
                ${projects.map(project => {
                    const projectTrans = t.portfolio['project' + project.id];
                    return `
                        <div class="w-full md:w-1/2 p-4">
                            <div class="project-card bg-white rounded-md shadow-md overflow-hidden cursor-pointer" data-project-id="${project.id}">
                                <div class="w-full h-48 bg-purple-200 overflow-hidden">
                                    <img src="${project.image}" alt="${projectTrans.title}" class="w-full h-full object-cover">
                                </div>
                                <div class="p-6">
                                    <h4 class="text-lg text-gray-800 font-bold mb-3">${projectTrans.title}</h4>
                                    <p class="text-sm text-gray-400 leading-relaxed mb-4">${projectTrans.shortDescription}</p>
                                    <button class="text-purple-600 hover:text-purple-800 font-medium text-sm">
                                        ${t.portfolio.viewDetails} →
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </section>
    `;
}

function setupProjectListeners() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = parseInt(card.getAttribute('data-project-id'));
            const project = projects.find(p => p.id === projectId);
            if (project) {
                showProjectDetail(project);
            }
        });
    });
}

function showProjectDetail(project) {
    const t = translations[currentLang];
    const projectTrans = t.portfolio['project' + project.id];
    const content = document.getElementById('pageContent');
    
    content.innerHTML = `
        <section class="pb-10">
            <div class="md:px-4">
                <button id="backToProjects" class="flex items-center space-x-2 text-purple-600 hover:text-purple-800 mb-6 font-medium transition">
                    <i class="fas fa-arrow-left"></i>
                    <span>${t.portfolio.backToProjects}</span>
                </button>
                
                <div class="bg-white rounded-md shadow-md overflow-hidden">
                    <div class="w-full h-64 md:h-96 bg-purple-200 overflow-hidden">
                        <img src="${project.image}" alt="${projectTrans.title}" class="w-full h-full object-cover">
                    </div>
                    
                    <div class="p-8">
                        <h2 class="text-3xl text-gray-800 font-bold mb-4">${projectTrans.title}</h2>
                        
                        <div class="mb-6">
                            <h3 class="text-xl text-gray-800 font-semibold mb-3">${t.portfolio.overview}</h3>
                            <p class="text-gray-600 leading-relaxed">${projectTrans.fullDescription}</p>
                        </div>
                        
                        ${project.figureImage && projectTrans.figureCaption ? `
                        <div class="mb-6 flex flex-col items-center">
                            <img src="${project.figureImage}" alt="${projectTrans.figureCaption}" 
                                 class="w-1/2 rounded-lg shadow-md mb-2 cursor-pointer hover:opacity-90 transition-opacity"
                                 onclick="openImageModal('${project.figureImage}')">
                            <p class="text-sm text-gray-500 italic text-center">${projectTrans.figureCaption}</p>
                        </div>
                        ` : ''}
                        
                        ${projectTrans.roleResponsibilities ? `
                        <div class="mb-6">
                            <h3 class="text-xl text-gray-800 font-semibold mb-3">${t.portfolio.roleResponsibilities}</h3>
                            <p class="text-gray-600 leading-relaxed">${projectTrans.roleResponsibilities}</p>
                        </div>
                        ` : ''}
                        
                        <div class="mb-6">
                            <h3 class="text-xl text-gray-800 font-semibold mb-3">${t.portfolio.technologiesUsed}</h3>
                            <div class="flex flex-wrap gap-2">
                                ${project.technologies.map(tech => `
                                    <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">${tech}</span>
                                `).join('')}
                            </div>
                        </div>
                        
                        ${projectTrans.challenges ? `
                        <div class="mb-6">
                            <h3 class="text-xl text-gray-800 font-semibold mb-3">${t.portfolio.challenges}</h3>
                            <p class="text-gray-600 leading-relaxed">${projectTrans.challenges}</p>
                        </div>
                        ` : ''}
                        
                        ${project.codeSection ? `
                        <div class="mb-6">
                            <h3 class="text-xl text-gray-800 font-semibold mb-3">${t.portfolio.codeImplementation}</h3>
                            <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono leading-relaxed">${project.codeSection}</pre>
                        </div>
                        ` : ''}
                        
                        <div class="mb-6">
                            <h3 class="text-xl text-gray-800 font-semibold mb-3">${t.portfolio.outcome}</h3>
                            <p class="text-gray-600 leading-relaxed">${projectTrans.outcome}</p>
                        </div>
                        
                        ${project.galleryImages && project.galleryImages.length > 0 ? `
                        <div class="mb-6">
                            <h3 class="text-xl text-gray-800 font-semibold mb-4">Simulation Results & Waveforms</h3>
                            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                                ${project.galleryImages.map(img => `
                                    <div class="relative group">
                                        <img src="${img.src}" alt="${img.caption}"
                                             class="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                                             onclick="openImageModal('${img.src}')">
                                        <p class="text-xs text-gray-500 mt-2 text-center">${img.caption}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        ` : ''}
                        
                        ${project.pdfLink ? `
                        <div class="mb-6 flex justify-center">
                            <a href="${project.pdfLink}" target="_blank" rel="noopener noreferrer"
                               class="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md">
                                <i class="fas fa-file-pdf"></i>
                                <span>View Calculation Sheet (PDF)</span>
                            </a>
                        </div>
                        ` : ''}
                        
                        ${project.githubLink || project.externalLink ? `
                        <div class="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                            ${project.githubLink ? `
                            <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer"
                               class="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
                                <i class="fab fa-github"></i>
                                <span>${t.portfolio.viewOnGithub}</span>
                            </a>
                            ` : ''}
                            ${project.externalLink ? `
                            <a href="${project.externalLink}" target="_blank" rel="noopener noreferrer"
                               class="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                                <i class="fas fa-external-link-alt"></i>
                                <span>View in Fusion 360</span>
                            </a>
                            ` : ''}
                        </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('backToProjects').addEventListener('click', () => {
        loadPage('works');
    });
}

function renderBlogPage() {
    const t = translations[currentLang];
    return `
        <section class="pb-10">
            <div class="flex flex-wrap md:px-4 justify-center">
                <div class="w-full max-w-2xl">
                    <div class="p-12 md:mx-4 bg-white rounded-md shadow-md text-center">
                        <div class="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                            <i class="fas fa-pen-nib text-4xl"></i>
                        </div>
                        <h2 class="text-3xl text-gray-800 font-bold mb-4">${t.blog.title}</h2>
                        <p class="text-gray-600 leading-relaxed mb-6">${t.blog.description}</p>
                        <p class="text-sm text-gray-500 italic">${t.blog.stayTuned}</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderContactPage() {
    const t = translations[currentLang];
    const contactInfo = [
        {
            icon: 'fa-phone',
            title: t.contact.phone,
            value: '+41 XX XXX XX XX',
            link: 'tel:+41XXXXXXXXX',
            linkText: t.contact.callMe
        },
        {
            icon: 'fa-whatsapp',
            title: t.contact.whatsapp,
            value: t.contact.whatsappMessage,
            link: 'https://wa.me/message/Q47Q2IDMMA2FM1',
            linkText: t.contact.openWhatsapp
        },
        {
            icon: 'fa-envelope',
            title: t.contact.email,
            value: 'cheveresan_raul@yahoo.com',
            link: 'mailto:cheveresan_raul@yahoo.com',
            linkText: t.contact.sendEmail
        },
        {
            icon: 'fa-map-marker-alt',
            title: t.contact.location,
            value: t.contact.locationValue,
            link: null,
            linkText: null
        }
    ];
    
    return `
        <section class="pb-10">
            <div class="flex flex-wrap md:px-4">
                <div class="w-full">
                    <div class="p-8 md:mx-4 bg-white rounded-md shadow-md">
                        <h3 class="text-2xl text-gray-800 font-bold mb-6">${t.contact.title}</h3>
                        
                        <div class="space-y-6">
                            ${contactInfo.map(item => `
                                <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                                    <div class="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-xl flex-shrink-0">
                                        <i class="fas ${item.icon}"></i>
                                    </div>
                                    <div class="flex-1">
                                        <h4 class="text-lg font-semibold text-gray-800 mb-1">${item.title}</h4>
                                        <p class="text-gray-600 mb-2">${item.value}</p>
                                        ${item.link ? `
                                            <a href="${item.link}" class="inline-block text-purple-600 hover:text-purple-800 font-medium text-sm">
                                                ${item.linkText} →
                                            </a>
                                        ` : ''}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        
                        <div class="mt-8 pt-6 border-t border-gray-200">
                            <h4 class="text-lg font-semibold text-gray-800 mb-4">${t.contact.connectWithMe}</h4>
                            <div class="flex space-x-4">
                                <a href="https://github.com/SlickAF31" target="_blank" rel="noopener noreferrer"
                                   class="flex items-center space-x-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition">
                                    <i class="fab fa-github text-xl"></i>
                                    <span class="font-medium">${t.contact.github}</span>
                                </a>
                                <a href="https://www.linkedin.com/in/raul-cheveresan-9a21bb20b/" target="_blank" rel="noopener noreferrer"
                                   class="flex items-center space-x-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition">
                                    <i class="fab fa-linkedin-in text-xl"></i>
                                    <span class="font-medium">${t.contact.linkedin}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

document.addEventListener('DOMContentLoaded', initApp);
