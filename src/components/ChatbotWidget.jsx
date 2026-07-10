import React, { useState, useEffect, useRef } from 'react';
import { FiX, FiSend, FiCpu } from 'react-icons/fi';

function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi! I am Sumaira's AI Assistant. Ask me to show you her introduction, current job at POF, graduation info, or certificates, and I will take you there instantly!" }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 200);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userQuery = input.toLowerCase().trim();
    setMessages((prev) => [...prev, { sender: 'user', text: input }]);
    setInput('');

    setTimeout(() => {
      let botText = "I can guide you anywhere on this portfolio! Try asking about her current internship, graduation, project details, or technical certificates.";
      
      if (userQuery.includes('about') || userQuery.includes('who is') || userQuery.includes('introduction') || userQuery.includes('intro') || userQuery.includes('sumaira')) {
        botText = "Sumaira Akbar is a BS Computer Science graduate from Iqra University[cite: 1]. Let me scroll you straight to her main introduction section!";
        scrollToSection('hero');
      } 
      else if (userQuery.includes('intern') || userQuery.includes('pof') || userQuery.includes('current') || userQuery.includes('experience') || userQuery.includes('job') || userQuery.includes('work') || userQuery.includes('snj')) {
        botText = "Sumaira is currently working as an AI Intern at POF (Pakistan Ordnance Factories)! Previously, she did a contract job and an internship at SNJ Global Services[cite: 1]. Let's check her profile summary.";
        scrollToSection('hero');
      }
      else if (userQuery.includes('project') || userQuery.includes('deskbot') || userQuery.includes('app') || userQuery.includes('code') || userQuery.includes('mitm') || userQuery.includes('react')) {
        botText = "Right here! Sumaira developed DeskBot (Voice Assistant)[cite: 1], a React Web Portal[cite: 1], and a Network Security MITM Simulation[cite: 1]. Moving you to the projects grid.";
        scrollToSection('projects');
      } 
      else if (userQuery.includes('navttc') || userQuery.includes('course') || userQuery.includes('certif') || userQuery.includes('skills') || userQuery.includes('hec') || userQuery.includes('pearls')) {
        botText = "She has completed her NAVTTC System Administration training[cite: 1] and holds API/Postman certificates from 10 Pearls University[cite: 1]. Directing you to the Certificates module.";
        scrollToSection('certificates');
      }
      else if (userQuery.includes('study') || userQuery.includes('education') || userQuery.includes('degree') || userQuery.includes('university') || userQuery.includes('iqra')) {
        botText = "Sumaira holds a Bachelor of Science in Computer Science (BSCS) from Iqra University, Karachi[cite: 1]. Scrolling to her academic section.";
        scrollToSection('hero');
      }
      else if (userQuery.includes('army') || userQuery.includes('major') || userQuery.includes('father') || userQuery.includes('abba')) {
        botText = "Sumaira belongs to a proud military family; her father is a retired Army Major who served for 20 years.";
        scrollToSection('hero');
      }
      else if (userQuery.includes('hello') || userQuery.includes('hi ') || userQuery.includes('hey')) {
        botText = "Hello! I am ready. Type what you want to see (e.g., 'show me projects') and I will move the screen for you!";
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botText }]);
    }, 600);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 999999 }} className="font-sans flex flex-col items-end">
      
      {/* 1. CUTE ROBOT PEEKING (Visible only when chat is closed) */}
      {!isOpen && (
        <div 
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 cursor-pointer group select-none relative mr-2 transition-transform duration-300 hover:scale-105"
        >
          {/* Cute Speech Bubble Message */}
          <div className="bg-slate-900 text-white border border-[#64ffda]/30 px-3 py-2 rounded-xl shadow-lg text-xs font-mono whitespace-nowrap animate-bounce">
            <span className="text-[#64ffda] font-bold">Need help?</span> Ask me!
          </div>

          {/* The Cute Metallic Robot Body Head */}
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 border-2 border-[#64ffda]/40 flex flex-col items-center justify-center shadow-[0_0_20px_rgba(100,255,218,0.2)] hover:border-[#64ffda] transition-all relative overflow-hidden">
            {/* Cute Robot Antenna */}
            <div className="w-1 h-2 bg-[#64ffda] rounded-t animate-pulse absolute top-0" />
            
            {/* Cute Digital Eyes Panel */}
            <div className="flex gap-2 mt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#64ffda] shadow-[0_0_8px_#64ffda]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#64ffda] shadow-[0_0_8px_#64ffda]" />
            </div>
            
            {/* Cute Robot Mouth Grid Line */}
            <div className="w-6 h-0.5 bg-slate-700 rounded mt-3 group-hover:bg-[#64ffda] transition-colors" />
          </div>
        </div>
      )}

      {/* 2. CHAT CONSOLE INTERFACE MODULE */}
      {isOpen && (
        <div className="w-[330px] sm:w-[360px] h-[450px] bg-[#070d19] rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden transition-all duration-300">
          {/* Console Header */}
          <div className="p-4 bg-slate-950 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00c6fb] to-[#64ffda] flex items-center justify-center text-slate-950 shadow-[0_0_12px_rgba(100,255,218,0.3)]">
                <FiCpu size={14} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white tracking-tight uppercase">AI Assistant</h4>
                <span className="text-[10px] font-mono text-[#64ffda] block">Active Matrix</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <FiX size={16} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs bg-slate-900/40">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-[#00c6fb] to-[#005bea] text-white rounded-tr-none'
                    : 'bg-slate-950 border border-white/5 text-slate-300 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input Form Deck */}
          <form onSubmit={handleSend} className="p-3 bg-slate-950 border-t border-white/5 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask to see certificates, current internship..."
              className="flex-1 bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#64ffda]/40"
            />
            <button type="submit" className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#00c6fb] to-[#64ffda] text-slate-950 flex items-center justify-center font-bold shadow-md hover:scale-105 transition-all">
              <FiSend size={14} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChatbotWidget;