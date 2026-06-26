import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal,
  ChevronRight,
  Globe,
  Layers,
  Monitor
} from 'lucide-react';
import bilisimLogo from './assets/bilisim.jpg';
import argeyaLogo from './assets/argeya.jpg';
import bilalPhoto from './assets/bilal.jpg';

// Use standard SVGs for icons that might have issues with library versions
const Github = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const Linkedin = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- DATA ---

const EXPERIENCES = [
  {
    company: "Bilişim A.Ş.",
    role: "Software Developer Intern",
    location: "Ankara, Turkey",
    period: "Aug 2025 – Sep 2025",
    bullets: [
      "Developed a centralized logging system with .NET Framework and Serilog in the BilisimHR project to record create, update, and delete operations performed by users.",
      "Developed a web application for company employees to place beverage orders, using .NET for the backend, ASP.NET MVC for the frontend, Firebase as the database, and WebSocket for real-time communication.",
      "Deployed and containerized application components using Docker for internal network delivery."
    ],
    logo: bilisimLogo
  },
  {
    company: "Argeya Software",
    role: "Software Developer Intern",
    location: "Antalya, Turkey",
    period: "Aug 2024 – Sep 2024",
    bullets: [
      "Developed the career section of the company website using ASP.NET Core 7, Entity Framework, MSSQL, and Bootstrap.",
      "Implemented a full recruitment pipeline including job posting management, application tracking, and admin dashboard.",
    ],
    logo: argeyaLogo
  }
];

const PROJECTS = [
  {
    title: "E-Commerce Microservices",
    description: "An event-driven microservices e-commerce system built with .NET Core and RabbitMQ. Features Product, Order, Stock, Payment, and Mail services containerized with Docker, using MSSQL and MongoDB.",
    tags: ["#microservices", "#rabbitmq", "#dotnet", "#docker", "#mongodb"],
    github: "https://github.com/bilaltann/ecommerce-api.git"
  },
  {
    title: "HabitTracker",
    description: "A gamified personal habit tracker with AWS EC2 deployment. Features JWT & Google OAuth2 login, friendship system, badge achievements, and Docker containerization using Nginx and Azure SQL Edge.",
    tags: ["#dotnet", "#onion-architecture", "#aws", "#docker", "#oauth2"],
    github: "https://github.com/bilaltann/HabitTracker.git"
  },
  {
    title: "TestFlow Code Analyzer",
    description: "End-to-end automated grading platform for student code submissions. Executes code in a sandboxed Piston environment, analyzes plagiarism with Dolos CLI, and detects AI-generated content using CodeBERT.",
    tags: ["#dotnet", "#angular", "#fastapi", "#codebert", "#piston"],
    github: "https://github.com/bilaltann/TestFlow.git"
  },
  {
    title: "Net Payroll System",
    description: "Parameter-driven salary and tax calculation backend leveraging .NET 8 Web API. Computes gross-to-net salaries dynamically via Calculation.API, communicating asynchronously through RabbitMQ and MassTransit.",
    tags: ["#dotnet", "#microservices", "#rabbitmq", "#masstransit", "#mssql"],
    github: "https://github.com/bilaltann/net-payroll-system.git"
  }
];

// --- COMPONENTS ---

const Nav = () => (
  <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2 flex-shrink-0">
        <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center font-bold text-sm">B</div>
        <span className="font-bold text-white tracking-tight hidden sm:block">Bilal Tan | Computer Engineer</span>
      </div>
      <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-gray-400">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#work" className="hover:text-white transition-colors">Work</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        <div className="h-4 w-px bg-white/10" />
        <a href="https://github.com/bilaltann" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex-shrink-0">
          <Github className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
        <a href="https://www.linkedin.com/in/bilaltan7/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex-shrink-0">
          <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
      </div>
    </div>
  </nav>
);


const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-6xl sm:text-7xl font-extrabold text-white tracking-tighter leading-[1.1] mb-8">
            Hi, I'm Bilal
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 font-medium leading-relaxed max-w-xl">
            I'm a Computer Engineer specializing in .NET Core and modern software architectures like Clean Architecture and Microservices. I build fast, scalable backends and deploy them with Docker and AWS. Through real-world projects, I've strengthened my problem-solving and teamwork skills, and my goal is to keep mastering modern, cloud-ready software architectures.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-widest uppercase active:scale-95 transition-all duration-300 border border-white/10"
            >
              İletişime Geç
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group max-w-sm mx-auto lg:ml-auto w-full"
        >
          <div className="relative bg-[#0a0d1d]/80 border border-white/10 p-4 rounded-[32px] backdrop-blur-xl overflow-hidden aspect-[3/4]">
            <div className="relative w-full h-full rounded-[24px] overflow-hidden group/card">
              <img
                src={bilalPhoto}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                alt="Bilal Tan"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1d] via-transparent to-black/40 pointer-events-none" />

              <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                <div>
                  -
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Mouse Icon */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 bg-white/40 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

const Experience = () => (
  <section id="work" className="py-32 px-6 bg-black">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-4">What I have done so far</h4>
        <h2 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">Work Experience.</h2>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-white/20 via-white/10 to-transparent hidden md:block" />

        <div className="space-y-24">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className={cn(
              "relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0",
              idx % 2 === 0 ? "md:flex-row-reverse" : ""
            )}>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-white/20 z-10 hidden md:flex items-center justify-center overflow-hidden p-1">
                <img src={exp.logo} className="max-w-full max-h-full object-contain" alt="logo" />
              </div>

              {/* Card */}
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                className="w-full md:w-[42%] bg-[#10132e]/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative"
              >
                <div className="text-[10px] font-bold text-purple-400 mb-2 md:hidden">{exp.period}</div>
                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded bg-white p-1 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img src={exp.logo} className="max-w-full max-h-full object-contain" alt={exp.company} />
                  </div>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{exp.company}</p>
                </div>
                <ul className="space-y-4">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0 mt-1.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Date (Desktop) */}
              <div className={cn(
                "hidden md:block w-[42%] text-xs font-bold text-gray-500 uppercase tracking-[0.2em]",
                idx % 2 === 0 ? "text-right" : "text-left"
              )}>
                {exp.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleCount = () => {
    if (windowWidth < 768) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };

  const visibleCount = getVisibleCount();

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextProject();
      else if (e.key === 'ArrowLeft') prevProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Swipe gesture support
  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      nextProject();
    } else if (info.offset.x > swipeThreshold) {
      prevProject();
    }
  };

  const getVisibleProjects = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(PROJECTS[(currentIndex + i) % PROJECTS.length]);
    }
    return items;
  };

  return (
    <section id="projects" className="py-32 px-6 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-4">My Work</h4>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight mb-8">Projects.</h2>
          <p className="text-gray-400 max-w-2xl text-lg font-medium leading-relaxed">
            These projects highlight my experience across enterprise systems and real-time backend tooling.
            Each reflects a practical problem solved with clean architecture.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto px-4 md:px-12">

          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all z-20 focus:outline-none active:scale-95 shadow-lg shadow-black/30"
            aria-label="Previous project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextProject}
            className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all z-20 focus:outline-none active:scale-95 shadow-lg shadow-black/30"
            aria-label="Next project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Active Cards Grid wrapper */}
          <div className="relative overflow-hidden py-4">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-grab active:cursor-grabbing"
            >
              <AnimatePresence initial={false} mode="popLayout">
                {getVisibleProjects().map((p) => (
                  <motion.div
                    layout
                    key={p.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      opacity: { duration: 0.2 },
                      layout: { type: "spring", stiffness: 300, damping: 30 }
                    }}
                    whileHover={{ y: -10 }}
                    className="group relative bg-[#10132e] border border-white/10 rounded-3xl p-8 overflow-hidden select-none flex flex-col justify-between min-h-[320px]"
                  >
                    <div>
                      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <a href={p.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5 text-white/50 hover:text-white transition-colors" />
                        </a>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{p.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-8">
                        {p.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-3">
                        {p.tags.map(t => (
                          <span key={t} className={cn(
                            "text-[10px] font-bold uppercase tracking-widest",
                            t.includes('dotnet') ? "text-cyan-400" : t.includes('rabbitmq') || t.includes('microservices') ? "text-purple-400" : "text-pink-400"
                          )}>{t}</span>
                        ))}
                      </div>

                      <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-gradient-to-br from-purple-600/20 to-transparent blur-2xl rounded-full" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {PROJECTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  idx === currentIndex ? "bg-purple-500 w-6" : "bg-white/20 hover:bg-white/40"
                )}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatusMsg("Lütfen tüm alanları doldurun.");
      setIsSuccess(false);
      return;
    }

    setLoading(true);
    setStatusMsg('');

    const formData = {
      name: name,
      email: email,
      message: message
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSuccess(true);
        setStatusMsg("Mesajınız iletildi, teşekkürler!");
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setIsSuccess(false);
        setStatusMsg("Bir hata oluştu, lütfen tekrar deneyin.");
      }
    } catch (error) {
      console.error("Sunucuya bağlanılamadı:", error);
      setIsSuccess(false);
      setStatusMsg("Sunucuya bağlanılamadı. Lütfen API'nin çalıştığından emin olun.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-black relative">
      {/* Background Stars Simulation */}
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{
        backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 150px 100px, #eee, rgba(0,0,0,0))',
        backgroundSize: '200px 200px'
      }} />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#0a0d1d] border border-white/10 rounded-[32px] p-10 backdrop-blur-xl relative z-10"
        >
          <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-4">Get in touch</h4>
          <h2 className="text-5xl font-extrabold text-white tracking-tight mb-12">Contact.</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Your Name</label>
              <input
                type="text"
                placeholder="What's your good name?"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full bg-[#10132e] border border-white/5 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Your Email</label>
              <input
                type="email"
                placeholder="What's your web address?"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-[#10132e] border border-white/5 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Your Message</label>
              <textarea
                rows={4}
                placeholder="What do you want to say?"
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="w-full bg-[#10132e] border border-white/5 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                required
              />
            </div>

            {statusMsg && (
              <div className={`text-sm font-semibold p-4 rounded-xl ${isSuccess ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                {statusMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-[#1c1f3d] hover:bg-[#252a50] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-black/50 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Gönderiliyor..." : "Send"}
            </button>
          </form>

          <div className="mt-12 pt-10 border-t border-white/5">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Follow Me</div>
            <div className="flex gap-4">
              <a href="https://github.com/bilaltann" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/bilaltan7/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

          </div>
        </motion.div>

        <div className="relative flex justify-center items-center">
          {/* 3D-ish Decorative Globe */}
          <div className="relative w-full max-w-lg aspect-square">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-purple-500/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              className="absolute inset-[10%] rounded-full border border-cyan-500/20"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] rounded-full bg-gradient-to-br from-[#1c1e3d] to-[#050816] shadow-[inset_0_0_50px_rgba(168,85,247,0.4)] relative overflow-hidden flex items-center justify-center">
                <Globe className="w-32 h-32 text-purple-500/20 animate-pulse" />
                <div className="absolute top-1/4 left-1/4 w-12 h-4 bg-cyan-400/30 blur-xl" />
                <div className="absolute bottom-1/3 right-1/4 w-16 h-6 bg-purple-400/30 blur-xl" />
              </div>
            </div>

            {/* Floating "Clouds" or "Rings" Effect */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full animate-[spin_100s_linear_infinite]" viewBox="0 0 100 100">
                <path d="M10 50 Q 25 30, 50 50 T 90 50" fill="none" stroke="rgba(168,85,247,0.15)" strokeWidth="0.5" />
                <path d="M10 60 Q 35 40, 60 60 T 90 60" fill="none" stroke="rgba(34,211,238,0.1)" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="font-['Archivo',_sans-serif] selection:text-white selection:bg-purple-600 bg-black min-h-screen">
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Contact />

      <footer className="py-12 px-6 border-t border-white/5 text-center text-[10px] font-bold text-gray-600 uppercase tracking-widest">
        © 2026 • Design inspired by high-end development portfolios • Built with .NET Focus
      </footer>
    </div>
  );
}
