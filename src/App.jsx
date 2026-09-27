import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LogoIcon } from './components/common/Logo';
import { ThemeToggle } from './components/common/ThemeToggle';
import { ArchitectureHero } from './components/architecture/ArchitectureHero';
import { InteractiveArchitectureDiagram } from './components/architecture/InteractiveArchitectureDiagram';
import { ArchitectureDetailDrawer } from './components/architecture/ArchitectureDetailDrawer';
import { DataFlowExplorer } from './components/architecture/DataFlowExplorer';
import { TrustBoundariesSection } from './components/architecture/TrustBoundariesSection';
import { SecurityPrinciplesSection } from './components/architecture/SecurityPrinciplesSection';
import { TechStackSection } from './components/architecture/TechStackSection';
import { ContractDetailsCard } from './components/architecture/ContractDetailsCard';
import { HowHashGuardWorks } from './components/architecture/HowHashGuardWorks';
import {
  Layers,
  Activity,
  ShieldCheck,
  Cpu,
  Boxes,
  ExternalLink,
  Menu,
  X,
  Sparkles
} from 'lucide-react';

const GithubIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

function ArchitectureApp() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('diagram');

  const handleSelectNode = (node) => {
    setSelectedNode(node);
    setDrawerOpen(true);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'diagram', label: 'Architecture', icon: Layers },
    { id: 'data-flow', label: 'Data Flow', icon: Activity },
    { id: 'trust-boundaries', label: 'Trust Boundaries', icon: ShieldCheck },
    { id: 'tech-stack', label: 'Tech Stack', icon: Cpu },
    { id: 'smart-contract', label: 'Smart Contract', icon: Boxes },
  ];

  return (
    <div className="min-h-screen bg-[#040812] text-slate-100 font-sans relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[650px] h-[450px] bg-cyan-500/8 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-blue-600/7 rounded-full blur-[160px]" />
        <div className="absolute bottom-20 left-1/3 w-[550px] h-[350px] bg-purple-500/6 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      {/* ─── STICKY NAVBAR ─── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#040812]/92 border-b border-slate-800/90 shadow-lg shadow-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          {/* Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#diagram" className="flex items-center gap-2.5 group">
              <div className="rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 p-1.5 shadow-[0_0_15px_rgba(6,182,212,0.25)] group-hover:border-cyan-400/80 transition-all">
                <LogoIcon className="w-5 h-5" />
              </div>
              <div className="leading-none">
                <span className="font-mono font-bold text-sm text-white tracking-wider">
                  HASH<span className="text-cyan-400">GUARD</span>
                </span>
                <span className="block font-mono text-[9px] text-slate-400 uppercase tracking-widest mt-0.5">
                  System Architecture Explorer
                </span>
              </div>
            </a>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${active ? 'text-cyan-400' : 'text-slate-500'}`} />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <ThemeToggle size="sm" />

            <a
              href="https://github.com/pds-37/Hash-Guard"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white font-mono text-xs transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
              <span>Main Repo</span>
            </a>

            <a
              href="https://sepolia.etherscan.io/address/0x3592925Cf64E7C3c68d4911b2ebC722c2Ea67052"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-mono font-bold text-xs shadow-[0_0_18px_rgba(6,182,212,0.35)] transition-all cursor-pointer"
            >
              <span>Sepolia Contract</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-white"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-cyan-400" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-[#040812]/98 px-4 py-3 space-y-1 font-mono text-xs">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800/80 text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  <Icon className="w-3.5 h-3.5 text-cyan-400" />
                  {link.label}
                </button>
              );
            })}
            <div className="pt-2 border-t border-slate-800 flex gap-2">
              <a
                href="https://github.com/pds-37/Hash-Guard"
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 py-2 rounded-lg bg-slate-800 text-slate-300 text-center flex items-center justify-center gap-1"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://sepolia.etherscan.io/address/0x3592925Cf64E7C3c68d4911b2ebC722c2Ea67052"
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-center flex items-center justify-center gap-1"
              >
                <span>Sepolia</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ─── MAIN CONTENT ─── */}
      <main className="relative z-10">
        {/* HERO SECTION */}
        <ArchitectureHero onScrollToDiagram={() => scrollTo('diagram')} />

        {/* TWO-COLUMN INTERACTIVE DIAGRAM + DETAIL INSPECTOR */}
        <section id="diagram" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
              INTERACTIVE SYSTEM EXPLORER
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-mono font-black text-white mb-2">
            ARCHITECTURE DIAGRAM
          </h2>
          <p className="text-sm text-slate-400 font-sans mb-6">
            Click any block to inspect its technical implementation, flow specifications, verification properties, and repository code artifacts.
          </p>

          <div className={`grid gap-6 transition-all duration-300 ${drawerOpen ? 'lg:grid-cols-[1fr_390px]' : 'lg:grid-cols-1'}`}>
            <div>
              <InteractiveArchitectureDiagram
                selectedNodeId={selectedNode?.id}
                onSelectNode={handleSelectNode}
              />
            </div>

            <div className={`${drawerOpen ? 'block' : 'hidden lg:block'}`}>
              <div className="sticky top-20">
                <ArchitectureDetailDrawer
                  selectedNode={selectedNode}
                  onClose={() => {
                    setDrawerOpen(false);
                    setSelectedNode(null);
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* HOW HASHGUARD WORKS (8-STAGE CONTINUUM) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-slate-800/60">
          <HowHashGuardWorks />
        </section>

        {/* DATA FLOW (10-STEP TRACE) */}
        <section id="data-flow" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-slate-800/60">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
              END-TO-END DATA FLOW
            </span>
          </div>
          <DataFlowExplorer />
        </section>

        {/* TRUST BOUNDARIES */}
        <section id="trust-boundaries" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-slate-800/60">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
              ISOLATION ARCHITECTURE
            </span>
          </div>
          <TrustBoundariesSection />
        </section>

        {/* SECURITY PRINCIPLES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-slate-800/60">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
              CORE TENETS
            </span>
          </div>
          <SecurityPrinciplesSection />
        </section>

        {/* SMART CONTRACT SPECIFICATION */}
        <section id="smart-contract" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-slate-800/60">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest">
              SMART CONTRACT DEPLOYMENT
            </span>
          </div>
          <ContractDetailsCard />
        </section>

        {/* TECH STACK */}
        <section id="tech-stack" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-slate-800/60">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
              VERIFIED ARTIFACTS
            </span>
          </div>
          <TechStackSection />
        </section>

        {/* ENTERPRISE FOOTER */}
        <footer className="border-t border-slate-800/80 bg-[#03060e]/95 py-12 font-mono text-xs text-slate-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <LogoIcon className="w-6 h-6 text-cyan-400" />
              <div>
                <span className="text-white font-bold tracking-wider text-sm">
                  HASH<span className="text-cyan-400">GUARD</span>
                </span>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  Decentralized Cyber Evidence Exchange & Chain of Custody
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[11px] flex-wrap justify-center">
              <button
                onClick={() => scrollTo('diagram')}
                className="hover:text-cyan-300 transition-colors cursor-pointer"
              >
                System Architecture
              </button>
              <span>•</span>
              <button
                onClick={() => scrollTo('data-flow')}
                className="hover:text-cyan-300 transition-colors cursor-pointer"
              >
                Data Flow
              </button>
              <span>•</span>
              <a
                href="https://github.com/pds-37/Hash-Guard"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition-colors flex items-center gap-1"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span>•</span>
              <a
                href="https://sepolia.etherscan.io/address/0x3592925Cf64E7C3c68d4911b2ebC722c2Ea67052"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition-colors flex items-center gap-1"
              >
                <span>Sepolia Contract</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ArchitectureApp />
    </ThemeProvider>
  );
}
