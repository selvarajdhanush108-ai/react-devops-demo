import React, { useState, useEffect } from 'react';
import { Rocket, Code, Sparkles, Cpu, ChevronRight, Zap } from 'lucide-react';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Trigger entrance animations when component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Custom keyframe animations injected via a style tag for that extra flair
  const customStyles = `
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-blob {
      animation: blob 7s infinite;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
    .glass-panel {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
  `;

  const features = [
    { id: 1, title: 'Quantum Coding', icon: <Code className="w-8 h-8" />, desc: 'Write code at the speed of light with optimized algorithms.' },
    { id: 2, title: 'Neural UI/UX', icon: <Sparkles className="w-8 h-8" />, desc: 'Interfaces that predict what users want before they click.' },
    { id: 3, title: 'Arc Reactor Core', icon: <Cpu className="w-8 h-8" />, desc: 'Unlimited power for your complex state management.' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden relative font-sans selection:bg-cyan-500 selection:text-white">
      <style>{customStyles}</style>

      {/* --- Animated Background Elements --- */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* --- Main Content Container --- */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center min-h-screen justify-center">
        
        {/* Header Section with Fade & Slide Down */}
        <div 
          className={`text-center transition-all duration-1000 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-cyan-400 text-sm font-semibold mb-8 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Zap className="w-4 h-4 animate-pulse" />
            <span>System Online</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-sm">
            Welcome back, Stark.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Your animated Vite dashboard is primed and ready. Let's build something that breaks the internet (in a good way).
          </p>
        </div>

        {/* Feature Cards with Staggered Fade & Slide Up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`glass-panel p-8 rounded-3xl transition-all duration-700 transform hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-cyan-500/50 cursor-pointer ${
                isLoaded 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${isLoaded ? index * 200 : 0}ms` }}
            >
              <div 
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                  hoveredCard === feature.id 
                    ? 'bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.5)] rotate-12 scale-110' 
                    : 'bg-slate-800 text-cyan-400'
                }`}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button with Ping & Scale Animation */}
        <div 
          className={`mt-20 transition-all duration-1000 delay-700 transform ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-cyan-500/50">
            {/* Ping effect behind button */}
            <span className="absolute inset-0 w-full h-full -z-10 rounded-full animate-ping bg-cyan-400 opacity-20"></span>
            
            <Rocket className="w-5 h-5 group-hover:animate-bounce" />
            <span>Launch Sequence</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
}