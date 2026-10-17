import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatbotWidget from './components/ChatbotWidget';
import BackgroundGallery from './components/BackgroundGallery';

function App() {
  return (
    <div className="relative min-h-screen text-slate-200 overflow-x-hidden font-sans selection:bg-accent/30 selection:text-accent">
      {/* Faded background pictures */}
      <BackgroundGallery />

      {/* Aurora Background Effects */}
      <div className="aurora-bg">
        <div className="aurora-blob w-[500px] h-[500px] bg-accent2/20 -top-20 -left-20 rounded-full" />
        <div className="aurora-blob w-[600px] h-[600px] bg-accent/10 top-1/3 -right-40 rounded-full [animation-delay:4s]" />
        <div className="aurora-blob w-[450px] h-[450px] bg-surface/80 bottom-10 left-1/4 rounded-full [animation-delay:2s]" />
      </div>

      {/* Main Core Architecture */}
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <ChatbotWidget />

      <Footer />
    </div>
  );
}

export default App;