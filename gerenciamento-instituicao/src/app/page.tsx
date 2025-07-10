'use client';

import { useState, useEffect } from 'react';
import { BookOpen, Users, BarChart3, Calendar, CheckCircle, GraduationCap } from 'lucide-react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };    

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Gestão de Notas",
      description: "Acompanhe seu desempenho em tempo real"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Controle de Frequência",
      description: "Monitore faltas e presenças facilmente"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Relatórios Detalhados",
      description: "Análises completas do progresso acadêmico"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestão de Turmas",
      description: "Organize e gerencie suas turmas"
    }
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x * 0.02 + 'px',
            top: mousePosition.y * 0.02 + 'px',
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"
          style={{
            right: mousePosition.x * 0.01 + 'px',
            bottom: mousePosition.y * 0.01 + 'px',
            transform: 'translate(50%, 50%)'
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400/20 rotate-45 animate-bounce delay-300" />
      <div className="absolute top-40 right-32 w-6 h-6 bg-purple-400/20 rounded-full animate-pulse delay-500" />
      <div className="absolute bottom-32 left-32 w-3 h-3 bg-green-400/20 rotate-45 animate-bounce delay-700" />
      <div className="absolute bottom-20 right-20 w-5 h-5 bg-yellow-400/20 rounded-full animate-pulse delay-1000" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Hero Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="w-16 h-16 text-blue-400 mr-4" />
            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              StudyControll
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto font-light">
            A plataforma mais completa para gerenciar sua vida acadêmica
          </p>
          
          <div className="flex items-center justify-center gap-8 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Intuitivo</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Completo</span>
            </div>
          </div>
        </div>

        {/* Login Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group relative px-12 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-3">
              <BookOpen className="w-6 h-6" />
              <span>Portal do Aluno</span>
            </div>
          </button>

          <button className="group relative px-12 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-3">
              <Users className="w-6 h-6" />
              <span>Portal do Professor</span>
            </div>
          </button>
        </div>

        {/* Features Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold mb-2 text-lg">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-16 flex flex-col sm:flex-row gap-8 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">10k+</div>
            <div className="text-slate-400 text-sm">Alunos Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">500+</div>
            <div className="text-slate-400 text-sm">Professores</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
            <div className="text-slate-400 text-sm">Satisfação</div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </main>
  );
}