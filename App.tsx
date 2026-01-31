import React, { useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Work from './components/Work';
import Showcase from './components/Showcase';
import ProjectDetail from './components/ProjectDetail';
import AIMentor from './components/AIMentor';
import Impact from './components/Impact';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import { translations } from './constants';
import { Language } from './types';

// Wrapper for Content to provide layout and scroll behavior
const ContentWrapper: React.FC<{
  children: React.ReactNode;
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}> = ({ children, lang, setLang, t }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer t={t} lang={lang} />
    </div>
  );
};

// ScrollToTop Component to reset scroll on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('my');

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <ContentWrapper lang={lang} setLang={setLang} t={t}>
        <Routes>
          {/* 
            Home Page: 
            Combines Hero, About, Impact, Work, Dashboard, Showcase (Preview), JoinUs, Contact
            into a single scrollable page.
          */}
          <Route path="/" element={
            <>
              <Hero t={t} />
              <About t={t} />
              <Impact t={t} />
              <Work t={t} lang={lang} />
              <Dashboard />
              {/* Limit showcase to 4 items on home page */}
              <Showcase t={t} lang={lang} limit={4} />
              <JoinUs t={t} lang={lang} />
              <Contact t={t} />
            </>
          } />

          {/* Tech Page: SBT & zkDID Demo (Interactive System) */}
          <Route path="/tech" element={<TechStack t={t} />} />

          {/* Full Showcase Page: Shows all projects */}
          <Route path="/showcase" element={<Showcase t={t} lang={lang} />} />

          {/* Individual Project Details Page */}
          <Route path="/project/:id" element={<ProjectDetail t={t} lang={lang} />} />

          {/* AI Lab Page: Separate interactive tool */}
          <Route path="/ai-lab" element={<AIMentor t={t} lang={lang} />} />

        </Routes>
      </ContentWrapper>
    </HashRouter>
  );
};

export default App;