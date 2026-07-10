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

function App() {
  return (
    <div className="relative min-h-screen bg-[#070d19] text-[#e2e8f0] overflow-x-hidden font-sans selection:bg-[#64ffda]/30 selection:text-[#64ffda]">
      {/* Aurora Background Effects */}
      <div className="aurora-bg">
        <div className="aurora-blob w-[500px] h-[500px] bg-[#00c6fb]/20 -top-20 -left-20 rounded-full" />
        <div className="aurora-blob w-[600px] h-[600px] bg-[#64ffda]/10 top-1/3 -right-40 rounded-full [animation-delay:4s]" />
        <div className="aurora-blob w-[450px] h-[450px] bg-[#0b1528]/80 bottom-10 left-1/4 rounded-full [animation-delay:2s]" />
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