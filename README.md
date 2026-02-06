
# Seik Kuu (စိတ်ကူး) | Empowering Displaced Dreams

<div align="center">
  <img src="https://raw.githubusercontent.com/Khunnaingpyaehtun/Seik-Kuu/main/images/logo/IDEAENG.svg" alt="Seik Kuu Logo" width="150" />
  <br />
  <br />
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-18.2-blue?style=for-the-badge&logo=react" alt="React" />
  </a>
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-5.0-purple?style=for-the-badge&logo=vite" alt="Vite" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  </a>
  <a href="https://ai.google.dev/">
    <img src="https://img.shields.io/badge/Google%20Gemini-AI-orange?style=for-the-badge&logo=google" alt="Gemini" />
  </a>
</div>

<br />

> **"Displacement does not mean disconnection. We are building a digital fortress for the future makers of Myanmar."**

## About The Project

**Seik Kuu (စိတ်ကူး)**, meaning "Idea" or "Imagination" in Burmese, is a humanitarian-tech initiative designed to bring **STEM and Robotics education** to children living in Internally Displaced Person (IDP) camps in Myanmar.

Due to conflict, thousands of children have lost access to formal education. Seik Kuu bridges this gap by providing a **Digital Resilience Platform** that combines:
1.  **AI Mentorship:** Accessible, high-quality guidance via Google Gemini.
2.  **Web3 Credentials:** Permanent, unalterable proof of skills (Soulbound Tokens) that remain with the child even if they are forced to relocate.
3.  **Low-Cost Innovation:** Curriculum focused on creating robots using scrap materials and affordable electronics (Arduino).

**Live Demo:** [https://seik-kuu.vercel.app/](https://seik-kuu.vercel.app/)

---

## Key Features

### AI Mentor Hub ("Ready")
Powered by **Google Gemini 3 Flash Preview**, the AI Mentor acts as a personalized tutor available 24/7.
*   **Context-Aware:** Specially prompted to understand the constraints of IDP camps (limited resources).
*   **Project Generator:** Users can input available materials (e.g., *"I have 2 motors and a plastic bottle"*), and the AI suggests viable engineering projects.
*   **Voice Capability:** Uses Gemini TTS to read answers aloud, helping younger children.

### Credential Hub (Web3 & ZK-Proof)
A simulation of a decentralized identity system to protect academic records.
*   **Soulbound Tokens (SBT):** Issues digital certificates that cannot be transferred or sold, serving as a permanent record of achievement.
*   **Zero-Knowledge (ZK) Verification:** Allows students to prove their skills to institutions without revealing their sensitive location data or identity, ensuring safety in conflict zones.

### Project Showcase
A gallery to honor the resilience of students. It features real-world projects created in the camps, such as "Smart Trash Bins" and "Solar Fans," complete with material lists and step-by-step guides.

### Bilingual Interface
Fully localized for **Burmese (Unicode)** and **English**, ensuring accessibility for local communities and international supporters alike.

---

## Tech Stack

This project is built with performance and futuristic aesthetics in mind.

| Category | Technology | Usage |
| :--- | :--- | :--- |
| **Frontend** | React 18, TypeScript | Component-based UI architecture |
| **Build Tool** | Vite | Lightning-fast HMR and bundling |
| **Styling** | Tailwind CSS | Glassmorphism, Responsive Design, Custom Animations |
| **AI Engine** | Google GenAI SDK | Gemini 3 Flash (Reasoning), Gemini 2.5 (TTS) |
| **Routing** | React Router DOM | Single Page Application (SPA) navigation |
| **Visualization** | Recharts | Data visualization for student growth analytics |

---

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Khunnaingpyaehtun/Seik-Kuu.git
    cd Seik-Kuu
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory. You need a Google Gemini API key to use the AI features.
    
    ```env
    # Get your key from: https://aistudio.google.com/app/apikey
    API_KEY=your_actual_gemini_api_key_here
    ```

4.  **Run the Development Server**
    ```bash
    npm run dev
    ```
    The application will start at `http://localhost:3000`.

---

## 🗺️ Roadmap

*   **Phase 1: Foundation (Current)** - Web Platform, AI Integration, Web3 Simulation.
*   **Phase 2: Pilot Implementation** - On-ground training in camps, feedback gathering.
*   **Phase 3: Global Reach** - Regional robotics competitions and international fundraising.
*   **Phase 4: Offline AI** - Developing local, offline-first AI models for areas with no internet connectivity.

---

## Project Structure

```bash
seik-kuu/
├── src/
│   ├── components/      # UI Components (Hero, TechStack, AIMentor, etc.)
│   ├── services/        # API Integration (geminiService.ts)
│   ├── constants.ts     # Content, Translations, and Static Data
│   ├── types.ts         # TypeScript Interfaces
│   ├── App.tsx          # Main Application Wrapper
│   └── index.css        # Global Styles & Animations
├── index.html           # HTML Entry Point
├── vite.config.ts       # Vite Configuration
└── package.json         # Dependencies
```

---

## Contributing

We welcome contributions from developers, educators, and designers!

1.  Fork the Project.
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

##  Acknowledgements

*   **ETHChiangMai** For providing the technology to make AI mentorship possible.
*   **Special Thanks** Martin for suggesting the mascot ai idea. 
*   **IDP Community Teachers:** The real heroes working on the ground to keep education alive.

---

<div align="center">
  <p>Built with heart and Resilience.</p>
  <p>© 2026 Seik Kuu Project</p>
</div>
