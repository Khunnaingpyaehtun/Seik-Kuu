
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
import JoinUs from './components/JoinUs';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import PartnerPage from './components/PartnerPage';
import DonatePage from './components/DonatePage';
import ReadyAgent from './components/ReadyAgent';
import { translations } from './constants';
import { Language } from './types';

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
      <ReadyAgent lang={lang} />
    </div>
  );
};

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
          <Route path="/" element={
            <>
              <Hero t={t} />
              <About t={t} />
              <Impact t={t} />
              <Roadmap t={t} lang={lang} />
              <Work t={t} lang={lang} />
              <Showcase t={t} lang={lang} limit={4} />
              <JoinUs t={t} lang={lang} />
            </>
          } />
          <Route path="/tech" element={<TechStack t={t} />} />
          <Route path="/showcase" element={<Showcase t={t} lang={lang} />} />
          <Route path="/project/:id" element={<ProjectDetail t={t} lang={lang} />} />
          <Route path="/ai-lab" element={<AIMentor t={t} lang={lang} />} />
          <Route path="/partner" element={<PartnerPage t={t} lang={lang} />} />
          <Route path="/donate" element={<DonatePage t={t} lang={lang} />} />
        </Routes>
      </ContentWrapper>
    </HashRouter>
  );
};

export default App;
