import { Translations, WorkItem, ShowcaseItem, JoinItem } from './types';

export const translations: Translations = {
    my: {
        "nav-brand": "စိတ်ကူး", "nav-history": "သမိုင်းကြောင်း", "nav-tech": "နည်းပညာ", "nav-work": "လုပ်ဆောင်ချက်များ", "nav-showcase": "ဖန်တီးမှုများ", "nav-ai": "AI Mentor", "nav-contact": "ဆက်သွယ်ရန်", "nav-join": "JOIN US",
        "hero-badge": "မြန်မာ့အနာဂတ်ကို ၂၀၁၈ မှစ၍ ပျိုးထောင်ခြင်း", "hero-h1-1": "Follow Your Dream...", "hero-h1-2": "စိတ်ကူးမှ လက်တွေ့ ...",
        "hero-p": "စစ်ဘေးရှောင်ကလေးငယ်များ၏ အိပ်မက်များကို STEM နှင့် Robotics ပညာရပ်များဖြင့် အကောင်အထည်ဖော်ပေးခြင်း။ ဒစ်ဂျစ်တယ်ကြံ့ခိုင်မှုနှင့် ဆန်းသစ်တီထွင်မှုကို အခြေခံ၍ အနာဂတ်ကို တည်ဆောက်နေပါသည်။",
        "btn-ai-mentor": "✨ AI MENTOR", "btn-showcase": "ဖန်တီးမှုများ",
        
        "about-h2": "ကျွန်ုပ်တို့၏ ရည်မှန်းချက်",
        "about-p": "\"စိတ်ကူး\" (Seik Kuu) သည် သာမန် ပညာရေးစီမံကိန်းတစ်ခု မဟုတ်ပါ။ ကျွန်ုပ်တို့သည် ပဋိပက္ခကြားမှ ကလေးငယ်များအတွက် ဒစ်ဂျစ်တယ်ခံတပ်တစ်ခုကို တည်ဆောက်နေခြင်းဖြစ်သည်။ IDP စခန်းများမှ ကလေးငယ်များကို ကမ္ဘာ့အဆင့်မီ နည်းပညာများနှင့် ချိတ်ဆက်ပေးပြီး၊ ၎င်းတို့၏ ပညာရေးလမ်းကြောင်းမပျောက်ပျက်စေရန် နည်းပညာဖြင့် အကာအကွယ်ပေးထားပါသည်။",
        "about-quote": "အဓိပ္ပာယ်: \"စိတ်ကူး\" သို့မဟုတ် \"တီထွင်ဖန်တီးမှု\"",
        
        "pillar-resilience-t": "Digital Resilience",
        "pillar-resilience-d": "ဒစ်ဂျစ်တယ် ကြံ့ခိုင်မှု - ရုပ်ပိုင်းဆိုင်ရာ စာသင်ကျောင်းများ ပျက်စီးသွားရင်တောင် ပညာရေးကို Cloud နှင့် Digital Platform များပေါ်တွင် ဆက်လက်ရှင်သန်စေခြင်း။",
        
        "pillar-localism-t": "Radical Localism",
        "pillar-localism-d": "ဒေသတွင်း အားကိုးအားထားပြုမှု - နိုင်ငံခြားနည်းပညာကို အားကိုးမည့်အစား ကိုယ့်ဒေသပြဿနာ (ရေ၊ မီး၊ လုံခြုံရေး) ကို ကိုယ်တိုင်ဖြေရှင်းနိုင်မည့် နည်းပညာများကို တီထွင်ခြင်း။",
        
        "pillar-blockchain-t": "Blockchain Credentials",
        "pillar-blockchain-d": "လုံခြုံစိတ်ချရသော မှတ်တမ်းများ - စစ်ဘေးကြောင့် စာရွက်စာတမ်းများ ပျောက်ဆုံးနိုင်သော်လည်း၊ Blockchain ပေါ်ရှိ ပညာရေးအောင်လက်မှတ်များသည် ထာဝရ တည်မြဲနေမည်ဖြစ်သည်။",

        "tech-h2": "Seik Kuu Chain (Beta)",
        "tech-p": "Web3 စနစ်ကို အသုံးပြု၍ လက်တွေ့ စမ်းသပ်ကြည့်နိုင်ပါသည်။",
        "tech-tab-sbt": "SBT Minter (လက်မှတ်ထုတ်ရန်)",
        "tech-tab-zk": "zkDID Verifier (လုံခြုံရေး)",
        
        "sbt-title": "Digital Certificate ထုတ်ယူခြင်း",
        "sbt-input-name": "ကျောင်းသားအမည်",
        "sbt-input-course": "ပြီးမြောက်ခဲ့သော သင်တန်း",
        "sbt-btn": "MINT ON BLOCKCHAIN",
        "sbt-processing": "မှတ်တမ်းတင်နေပါသည်...",
        "sbt-success": "အောင်မြင်ပါသည်။ Soulbound Token ကိုထုတ်ယူပြီးပါပြီ။",
        
        "zk-title": "ကိုယ်ရေးအချက်အလက် လုံခြုံမှုစနစ်",
        "zk-desc": "အလုပ်ရှင်မှ သင့်အရည်အချင်းကို စစ်ဆေးရာတွင် သင်၏ နေရပ်လိပ်စာနှင့် IDP စခန်းတည်နေရာကို ဖုံးကွယ်ထားနိုင်ပါသည်။",
        "zk-reveal": "ပြသမည်",
        "zk-hide": "ဖုံးကွယ်မည်",
        "zk-skill": "Robotics Skill Level",
        "zk-loc": "IDP Camp Location",
        "zk-btn": "GENERATE ZK PROOF",
        "zk-verify-btn": "VERIFY PROOF",
        "zk-verified": "✅ Verified: ကျောင်းသားသည် Robotics ကျွမ်းကျင်ပါသည်။ တည်နေရာကို မသိရှိရပါ။",

        "work-h2": "ကျွန်ုပ်တို့ ဘာတွေလုပ်သလဲ",
        "work-p": "နည်းပညာဖြင့် ဘဝများကို ပြောင်းလဲပေးခြင်း",
        "showcase-h2": "Project Showcase", "showcase-p": "ကလေးငယ်များ၏ လက်တွေ့ဖန်တီးမှု မှတ်တိုင်များ",
        "ai-h2": "✨ AI Mentor Hub", "ai-p": "သင့်မှာရှိတဲ့ ပစ္စည်းတွေနဲ့ ဘာတွေ တီထွင်လို့ရမလဲ? AI ကို မေးကြည့်လိုက်ပါ။",
        "ai-input-label": "Command Center / Input Question", "ai-tag-1": "#DIYProject", "ai-tag-2": "#CareerPath", "ai-btn": "NEURAL PROCESSING",
        "ai-loading": "Insight များအား စုစည်းနေပါသည်...", "ai-idle": "အပေါ်က အကွက်မှာ စာရိုက်ပြီး Neural Processing စတင်လိုက်ပါ...",
        
        "impact-h2": "Mission Statement",
        "impact-p": "ကျွန်ုပ်တို့၏ မစ်ရှင်မှာ ပထဝီအနေအထားအရ ကန့်သတ်ခံထားရသော ကလေးငယ်များကို နည်းပညာဖြင့် လွတ်မြောက်ခွင့်ပေးရန်ဖြစ်သည်။ Blockchain နည်းပညာဖြင့် ပညာရေးအထောက်အထားများကို လုံခြုံစေပြီး၊ ဒေသတွင်းပြဿနာများကို ဖြေရှင်းနိုင်စွမ်းရှိသော 'Maker' များကို မွေးထုတ်ပေးရန် ဖြစ်ပါသည်။",
        
        "join-h2": "ကျွန်ုပ်တို့နှင့် လက်တွဲပါ", "join-p": "သင်ဟာ ဘယ်နေရာကနေပဲဖြစ်ဖြစ် ပါဝင်ကူညီနိုင်ပါတယ်။",
        "footer-brand": "စိတ်ကူး", "btn-close": "ပိတ်မည်", "view-demo": "View Details",
        "footer-p": "နည်းပညာနှင့် တီထွင်ဖန်တီးမှုများမှတစ်ဆင့် ကလေးတိုင်းကို အားဖြည့်ပေးခြင်း", "contact-p": "အစီအစဉ်နှင့် ပတ်သက်၍ အသေးစိတ် သိရှိလိုပါက အောက်ပါ လမ်းကြောင်းများမှတစ်ဆင့် ဆက်သွယ်နိုင်ပါသည်။",
        
        "proj-student": "ဖန်တီးသူ",
        "proj-materials": "လိုအပ်သော ပစ္စည်းများ",
        "proj-steps": "ပြုလုပ်ပုံ အဆင့်ဆင့်",
        "proj-outcome": "သင်ယူရရှိမှု / ရည်ရွယ်ချက်",
        "proj-back": "နောက်သို့"
    },
    en: {
        "nav-brand": "SEIK KUU", "nav-history": "Our Story", "nav-tech": "Tech Stack", "nav-work": "Our Work", "nav-showcase": "Showcase", "nav-ai": "AI Mentor", "nav-contact": "Contact", "nav-join": "JOIN US",
        "hero-badge": "Building Myanmar's Future Since 2018", "hero-h1-1": "Follow Your Dream...", "hero-h1-2": "From Idea to Reality...",
        "hero-p": "From competition winners to community builders, we are bringing technology to the hearts of those who need it most through STEM and Robotics.",
        "btn-ai-mentor": "✨ AI MENTOR", "btn-showcase": "SHOWCASE",
        
        "about-h2": "Who We Are",
        "about-p": "Seik Kuu is not just a robotics project; it is a movement for Digital Resilience. We operate at the intersection of conflict and innovation, ensuring that displacement does not mean disconnection. By leveraging modern technology, we are building a borderless classroom for the children of Myanmar.",
        "about-quote": "Meaning: \"Idea\" or \"Imagination\"",
        
        "pillar-resilience-t": "Digital Resilience",
        "pillar-resilience-d": "Ensuring that education survives physical destruction. We teach students to adapt, pivot, and thrive in digital environments regardless of their physical location.",
        
        "pillar-localism-t": "Radical Localism",
        "pillar-localism-d": "Empowering communities to solve their own problems. We focus on 'frugal innovation'—creating high-impact tools (solar, water, safety) using locally sourced materials.",
        
        "pillar-blockchain-t": "Blockchain Credentials",
        "pillar-blockchain-d": "Securing the future. Physical certificates can be lost in conflict, but our Blockchain-verified credentials provide immutable proof of skills that travel with the student forever.",

        "tech-h2": "Seik Kuu Chain (Beta)",
        "tech-p": "Experience our decentralized education infrastructure live.",
        "tech-tab-sbt": "SBT Minter (Issuer)",
        "tech-tab-zk": "zkDID Verifier (Privacy)",
        
        "sbt-title": "Issue Soulbound Certificate",
        "sbt-input-name": "Student Name",
        "sbt-input-course": "Completed Course",
        "sbt-btn": "MINT ON BLOCKCHAIN",
        "sbt-processing": "Minting Block...",
        "sbt-success": "Success! Soulbound Token permanently issued.",

        "zk-title": "Zero-Knowledge Identity Verification",
        "zk-desc": "Prove your skills to employers without revealing your sensitive location or refugee status.",
        "zk-reveal": "Reveal",
        "zk-hide": "Hide",
        "zk-skill": "Robotics Skill Level",
        "zk-loc": "IDP Camp Location",
        "zk-btn": "GENERATE ZK PROOF",
        "zk-verify-btn": "VERIFY PROOF",
        "zk-verified": "✅ Verified: User has Advanced Robotics Skills. Location remains Private.",

        "work-h2": "What We Do",
        "work-p": "Building a brighter future through hands-on education",
        "showcase-h2": "Project Showcase", "showcase-p": "Student milestones and practical creations",
        "ai-h2": "✨ AI Mentor Hub", "ai-p": "What can you invent with your materials? Ask our AI.",
        "ai-input-label": "Command Center / Input Question", "ai-tag-1": "#DIYProject", "ai-tag-2": "#CareerPath", "ai-btn": "NEURAL PROCESSING",
        "ai-loading": "Synthesizing Insights...", "ai-idle": "Enter text above to start Neural Processing...",
        
        "impact-h2": "Mission Statement",
        "impact-p": "To forge a generation of innovators who are geographically displaced but digitally sovereign. Through STEM education and Blockchain accreditation, we restore agency to the youth of Myanmar, proving that talent is universal even when opportunity is not.",
        
        "join-h2": "Join Our Journey", "join-p": "No matter where you are, you can contribute to the future of our children.",
        "footer-brand": "SEIK KUU", "btn-close": "Close", "view-demo": "View Details", "footer-p": "Empowering Every Child through Technology & Innovation",

        "proj-student": "Created By",
        "proj-materials": "Materials",
        "proj-steps": "Step-by-Step Instructions",
        "proj-outcome": "Learning Outcome",
        "proj-back": "Back"
    }
};

export const workData: WorkItem[] = [
    { myT: "STEM အလုပ်ရုံဆွေးနွေးပွဲများ", enT: "STEM Workshops", myD: "Arduino၊ Raspberry Pi နှင့် 3D Design ကဲ့သို့သော နည်းပညာများကို လက်တွေ့သင်ကြားပေးခြင်း။", enD: "Hands-on training in electronics, coding (Arduino/Raspberry Pi), and 3D design.", icon: "🛠️" },
    { myT: "ဒေသတွင်းပြိုင်ပွဲများ", enT: "Local Competitions", myD: "ဝေဖန်ပိုင်းခြားတွေးခေါ်မှုနှင့် အသင်းအဖွဲ့စိတ်ဓာတ် တိုးတက်စေရန် ပြိုင်ပွဲများကျင်းပပေးခြင်း။", enD: "Organizing events to foster critical thinking and teamwork.", icon: "🏆" },
    { myT: "နိုင်ငံတကာ လမ်းပြမြေပုံ", enT: "International Mentorship", myD: "ထူးချွန်သော ကျောင်းသားများကို နိုင်ငံတကာ Robotics ပြိုင်ပွဲများအထိ ဝင်ရောက်ယှဉ်ပြိုင်နိုင်အောင် ပံ့ပိုးပေးခြင်း။", enD: "Guiding talented students to participate in global robotics competitions.", icon: "🌍" },
    { myT: "ဘေးကင်းသော သင်ယူမှုပတ်ဝန်းကျင်", enT: "Safe Learning Spaces", myD: "စစ်ဘေးရှောင်ကလေးငယ်များ သူတို့၏ ဖန်တီးနိုင်စွမ်းကို လွတ်လပ်စွာ ဖော်ထုတ်နိုင်မည့် နေရာများ ဖန်တီးပေးခြင်း။", enD: "Creating environments where displaced children can explore their creativity freely.", icon: "🛡️" }
];

export const showcaseData: ShowcaseItem[] = [
    { 
        id: 1, 
        myTitle: "Smart Farm", 
        enTitle: "Smart Farm", 
        emoji: "🌱", 
        myDesc: "IoT ရေလောင်းစနစ်။", 
        enDesc: "IoT watering system.", 
        enFull: "Automated irrigation system using soil moisture sensors and Arduino to manage plant hydration efficiently.", 
        myFull: "မြေဆီလွှာစိုစွတ်မှုကို Arduino sensor ဖြင့် တိုင်းတာပြီး အပင်တွေရဲ့ လိုအပ်ချက်အရ အလိုအလျောက် ရေလောင်းပေးသည့် စနစ်ဖြစ်ပါသည်။",
        studentName: "Ma Thida",
        studentAge: "14",
        myMaterials: ["Arduino Uno", "Soil Moisture Sensor", "Relay Module", "Water Pump (5V)", "Jumper Wires", "Battery (9V)"],
        enMaterials: ["Arduino Uno", "Soil Moisture Sensor", "Relay Module", "Water Pump (5V)", "Jumper Wires", "Battery (9V)"],
        mySteps: [
            "Arduino နှင့် Sensor ကို ချိတ်ဆက်ပါ (Analog Pin A0).",
            "Relay ကို Digital Pin 8 တွင် တပ်ဆင်ပါ။",
            "Moisture Level 500 အောက်ရောက်ပါက ရေစုပ်စက်လည်ရန် Code ရေးပါ။",
            "စမ်းသပ်ကြည့်ရှုပြီး လိုအပ်ပါက Sensor တန်ဖိုးကို ချိန်ညှိပါ။"
        ],
        enSteps: [
            "Connect Soil Sensor to Arduino Analog Pin A0.",
            "Connect Relay Module to Digital Pin 8.",
            "Write code to activate pump when moisture < 500.",
            "Test and calibrate the sensor values."
        ],
        myOutcome: "စိုက်ပျိုးရေးတွင် ရေကို ခြိုးခြံချွေတာတတ်စေပြီး Automation သဘောတရားကို နားလည်စေသည်။",
        enOutcome: "Understanding agricultural automation and water conservation logic."
    },
    { 
        id: 2, 
        myTitle: "Solar Tracker", 
        enTitle: "Solar Tracker", 
        emoji: "☀️", 
        myDesc: "နေရောင်လိုက်စနစ်။", 
        enDesc: "Sunlight tracker.", 
        enFull: "Dual-axis LDR based solar panel rotation system to maximize sunlight energy collection throughout the day.", 
        myFull: "LDR sensor များကို သုံးပြီး နေရောင်ခြည် အကောင်းဆုံးရသည့်ဘက်သို့ Solar Panel ကို တစ်နေ့တာလုံး အလိုအလျောက် လှည့်ပေးသည့် စနစ်ဖြစ်ပါသည်။",
        studentName: "Mg Aung",
        studentAge: "16",
        myMaterials: ["Arduino Nano", "Servo Motors (2x)", "LDR Sensors (4x)", "Solar Panel (Mini)", "Resistors (10k Ohm)"],
        enMaterials: ["Arduino Nano", "Servo Motors (2x)", "LDR Sensors (4x)", "Solar Panel (Mini)", "Resistors (10k Ohm)"],
        mySteps: [
            "LDR ၄ ခုကို Solar Panel ထောင့် ၄ ထောင့်တွင် တပ်ဆင်ပါ။",
            "Servo Motor ၂ ခုကို Pan နှင့် Tilt အတွက် တပ်ဆင်ပါ။",
            "အလင်းရောင် အများဆုံးရှိရာဘက်သို့ Servo များ လည်ပတ်စေရန် နှိုင်းယှဉ်ချက် Code ရေးပါ။",
            "နေရောင်အောက်တွင် စမ်းသပ်ပါ။"
        ],
        enSteps: [
            "Mount 4 LDRs on the corners of the panel.",
            "Install 2 Servo Motors for Pan and Tilt movement.",
            "Write logic to compare LDR values and move servos to brightest side.",
            "Test under sunlight."
        ],
        myOutcome: "ပြန်လည်ပြည့်ဖြိုးမြဲ စွမ်းအင် (Renewable Energy) ကို နည်းပညာဖြင့် မည်သို့ အကျိုးရှိရှိ အသုံးချနိုင်ပုံကို သိရှိစေသည်။",
        enOutcome: "Optimizing renewable energy efficiency using simple robotics."
    },
    { 
        id: 3, 
        myTitle: "Avoid Bot", 
        enTitle: "Avoid Bot", 
        emoji: "🤖", 
        myDesc: "အတားအဆီးရှောင်စက်ရုပ်။", 
        enDesc: "Collision-free bot.", 
        enFull: "Ultrasonic sensor-integrated autonomous navigation robot designed for real-time obstacle avoidance.", 
        myFull: "အတားအဆီးကို အချိန်နှင့်တပြေးညီ ရှာဖွေပြီး မတိုက်မိစေရန် လမ်းကြောင်းကိုယ်တိုင် ပြောင်းလဲမောင်းနှင်သည့် စက်ရုပ်ဖြစ်ပါသည်။",
        studentName: "Ko Ko & Team",
        studentAge: "15",
        myMaterials: ["Arduino Uno", "Ultrasonic Sensor (HC-SR04)", "Motor Driver (L298N)", "DC Gear Motors (2x)", "Chassis", "Wheels"],
        enMaterials: ["Arduino Uno", "Ultrasonic Sensor (HC-SR04)", "Motor Driver (L298N)", "DC Gear Motors (2x)", "Chassis", "Wheels"],
        mySteps: [
            "မော်တာများကို Chassis တွင် တပ်ဆင်ပြီး Motor Driver နှင့် ချိတ်ဆက်ပါ။",
            "Ultrasonic Sensor ကို စက်ရုပ်၏ ရှေ့ပိုင်းတွင် တပ်ဆင်ပါ။",
            "အကွာအဝေး ၂၀ စင်တီမီတာအောက်ရောက်ပါက နောက်ဆုတ်ပြီး ကွေ့ရန် Code ရေးပါ။",
            "အတားအဆီးများကြားတွင် စမ်းသပ်မောင်းနှင်ပါ။"
        ],
        enSteps: [
            "Assemble motors on chassis and wire to L298N driver.",
            "Mount Ultrasonic Sensor at the front.",
            "Code logic: If distance < 20cm, stop, reverse, and turn.",
            "Test run in an obstacle course."
        ],
        myOutcome: "Driverless Car များ၏ အခြေခံသဘောတရားနှင့် Logic Thinking ကို တိုးတက်စေသည်။",
        enOutcome: "Introduction to autonomous navigation logic found in self-driving cars."
    },
    { 
        id: 4, 
        myTitle: "Safe Hand", 
        enTitle: "Safe Hand", 
        emoji: "🧼", 
        myDesc: "ဟန်းဆေးထုတ်စနစ်။", 
        enDesc: "Touch-free dispenser.", 
        enFull: "Infrared-triggered automatic hand sanitizer dispenser designed for public hygiene and contact-free safety.", 
        myFull: "လက်ရှိနေမှုကို Infrared ဖြင့် ရှာဖွေကာ လက်မထိဘဲ ဟန်းဆေးရည် အလိုအလျောက် ထုတ်ပေးသည့် ကျန်းမာရေးသုံး စနစ်ဖြစ်ပါသည်။",
        studentName: "Su Su",
        studentAge: "13",
        myMaterials: ["IR Sensor Module", "Transistor (TIP32C)", "Mini Water Pump", "Battery", "Pipe", "Container"],
        enMaterials: ["IR Sensor Module", "Transistor (TIP32C)", "Mini Water Pump", "Battery", "Pipe", "Container"],
        mySteps: [
            "IR Sensor ၏ Output ကို Transistor ၏ Base သို့ ချိတ်ဆက်ပါ။",
            "Pump ကို Transistor မှတစ်ဆင့် မောင်းနှင်ရန် တပ်ဆင်ပါ။",
            "ဘူးအဖုံးတွင် အပေါက်ဖောက်ပြီး ပိုက်တပ်ဆင်ပါ။",
            "လက်ကို Sensor ရှေ့ထားပြီး အရည်ထွက်မထွက် စစ်ဆေးပါ။"
        ],
        enSteps: [
            "Connect IR Sensor Output to Transistor Base.",
            "Wire the pump to be driven by the transistor.",
            "Install pipe into the container cap.",
            "Test detection by placing hand in front of sensor."
        ],
        myOutcome: "အီလက်ထရွန်းနစ် ပတ်လမ်း (Circuit) အခြေခံနှင့် ကျန်းမာရေးဆိုင်ရာ ဖြေရှင်းချက်များကို လေ့လာနိုင်သည်။",
        enOutcome: "Basic circuitry application for public health solutions."
    },
    { 
        id: 5, 
        myTitle: "Balloon Car", 
        enTitle: "Balloon Car", 
        emoji: "🎈", 
        myDesc: "လေဖိအားသုံး ကား။", 
        enDesc: "Air-powered vehicle.", 
        enFull: "A DIY vehicle powered by air escaping from a balloon, demonstrating Newton's Third Law of Motion.", 
        myFull: "လေပူပေါင်းထဲမှ လေအရှိန်ဖြင့် မောင်းနှင်သော ကားဖြစ်ပြီး Newton ၏ တတိယနိယာမကို လက်တွေ့ပြသထားသည်။",
        studentName: "Nandar",
        studentAge: "12",
        myMaterials: ["ရေသန့်ဘူးခွံ", "ပိုက်", "လေပူပေါင်း", "တိပ်ခွေ", "ဘီး (၄) ခု", "Skewer တုတ်တံများ"],
        enMaterials: ["Plastic Bottle", "Straws", "Balloon", "Tape", "4 Wheels", "Skewer Sticks"],
        mySteps: [
            "ပိုက်ကို လေပူပေါင်းနှင့် ချိတ်ပြီး တိပ်ဖြင့်ပတ်ပါ။ လေမထွက်အောင် သတိထားပါ။",
            "ရေသန့်ဘူးခွံတွင် ဘီးတပ်ရန် အပေါက်ဖောက်ပါ။ ပြီးလျှင် တံတွေးချောင်း (Skewer) များကို ပိုက်အပိုင်းအစလေးများနှင့် တွဲပြီး ဘီးတပ်ပါ။",
            "လေပူပေါင်းတပ်ထားသော ပိုက်ကို ကားကိုယ်ထည် (ရေသန့်ဘူး) ပေါ်တွင် တိပ်ဖြင့် ကပ်ပါ။",
            "လေပူပေါင်းကို လေမှုတ်သွင်းပြီး လွှတ်လိုက်ပါက ကားလေး ပြေးသွားသည်ကို တွေ့ရမည်။"
        ],
        enSteps: [
            "Attach the balloon to a straw and tape securely to prevent leaks.",
            "Make axle holes in the bottle, insert skewers through straw segments, and attach wheels.",
            "Tape the balloon-straw assembly to the top of the bottle car body.",
            "Inflate the balloon, release, and watch the car propel forward."
        ],
        myOutcome: "နယူတန်၏ တတိယနိယာမ (Action and Reaction) သဘောတရားကို လက်တွေ့နားလည်စေသည်။",
        enOutcome: "Understanding Newton's Third Law (Action and Reaction) through practical application."
    }
];

export const joinData: JoinItem[] = [
    { myT: "စေတနာ့ဝန်ထမ်း", enT: "Volunteer", emoji: "🤝", border: "border-cyan-400" },
    { myT: "အလှူရှင်", enT: "Donor", emoji: "💝", border: "border-orange-400" },
    { myT: "မိတ်ဖက်", enT: "Partner", emoji: "🌍", border: "border-indigo-500" }
];