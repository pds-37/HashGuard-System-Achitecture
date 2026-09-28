import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ArchitectureNavbar } from './components/architecture/ArchitectureNavbar';
import { ArchitectureHero } from './components/architecture/ArchitectureHero';
import { SystemOverviewSection } from './components/architecture/SystemOverviewSection';
import { ArchitectureDetailDrawer } from './components/architecture/ArchitectureDetailDrawer';
import { CentralVisualStory } from './components/architecture/CentralVisualStory';
import { OffChainVsOnChainSection } from './components/architecture/OffChainVsOnChainSection';
import { IdentityPolicySection } from './components/architecture/IdentityPolicySection';
import { CryptographicIntegritySection } from './components/architecture/CryptographicIntegritySection';
import { BlockchainTrustSection } from './components/architecture/BlockchainTrustSection';
import { CustodyLifecycleSection } from './components/architecture/CustodyLifecycleSection';
import { IndependentVerificationSection } from './components/architecture/IndependentVerificationSection';
import { ForensicLineageSection } from './components/architecture/ForensicLineageSection';
import { AuditEventHistorySection } from './components/architecture/AuditEventHistorySection';
import { TrustBoundariesSection } from './components/architecture/TrustBoundariesSection';
import { DataFlowExplorer } from './components/architecture/DataFlowExplorer';
import { SecurityPrinciplesSection } from './components/architecture/SecurityPrinciplesSection';
import { TechStackSection } from './components/architecture/TechStackSection';
import { FinalStatementSection } from './components/architecture/FinalStatementSection';
import { ARCHITECTURE_NODES } from './components/architecture/architectureData';

function ArchitectureControlRoom() {
  const [selectedNode, setSelectedNode] = useState(ARCHITECTURE_NODES.PRESENTATION);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');

  // Active section spy on scroll
  useEffect(() => {
    const sectionIds = [
      'overview',
      'architecture',
      'data-flow',
      'trust-boundaries',
      'verification',
      'lineage',
      'audit',
      'security',
      'tech-stack'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectNode = (node) => {
    setSelectedNode(node);
    setDrawerOpen(true);
  };

  const handleNavigate = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  const handleHighlightComponent = (targetId) => {
    // Map target identifier to ARCHITECTURE_NODES
    const nodeMap = {
      presentation: ARCHITECTURE_NODES.PRESENTATION,
      application: ARCHITECTURE_NODES.APPLICATION,
      identity_rbac: ARCHITECTURE_NODES.IDENTITY_RBAC,
      cryptographic_integrity: ARCHITECTURE_NODES.CRYPTOGRAPHIC_INTEGRITY,
      off_chain_storage: ARCHITECTURE_NODES.OFF_CHAIN_STORAGE,
      blockchain_layer: ARCHITECTURE_NODES.BLOCKCHAIN_LAYER,
      verification_layer: ARCHITECTURE_NODES.VERIFICATION_LAYER,
      custody_lifecycle: ARCHITECTURE_NODES.CUSTODY_LIFECYCLE,
      lineage_dag: ARCHITECTURE_NODES.LINEAGE_DAG,
      audit_stream: ARCHITECTURE_NODES.AUDIT_STREAM
    };
    if (nodeMap[targetId]) {
      setSelectedNode(nodeMap[targetId]);
      setDrawerOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#02050e] text-slate-100 font-sans relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Subtle Tech Patterns & Radial Lights */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-cyan-500/[0.04] rounded-full blur-[160px]" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-blue-600/[0.04] rounded-full blur-[180px]" />
        <div className="absolute bottom-20 left-1/3 w-[600px] h-[400px] bg-purple-500/[0.03] rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b06_1px,transparent_1px),linear-gradient(to_bottom,#1e293b06_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* STICKY CONTROL ROOM NAVBAR */}
      <ArchitectureNavbar 
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* MAIN CONTROL ROOM CANVAS */}
      <main className="relative z-10">
        {/* SECTION A: HERO */}
        <div id="overview">
          <ArchitectureHero onScrollToDiagram={() => handleNavigate('architecture')} />
        </div>

        {/* SECTION B: 5-ZONE ARCHITECTURE OVERVIEW + DETAIL INSPECTOR DRAWER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left 8 columns: 5-Zone Layered Architecture Map */}
            <div className={`${drawerOpen ? 'lg:col-span-8' : 'lg:col-span-12'} transition-all duration-300`}>
              <SystemOverviewSection
                selectedNodeId={selectedNode?.id}
                onSelectNode={handleSelectNode}
              />
            </div>

            {/* Right 4 columns: Sticky Detail Inspector Drawer */}
            <div className={`${drawerOpen ? 'block lg:col-span-4' : 'hidden'} transition-all duration-300`}>
              <div className="sticky top-20 max-h-[calc(100vh-6rem)]">
                <ArchitectureDetailDrawer
                  selectedNode={selectedNode}
                  onClose={() => setDrawerOpen(false)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* CENTRAL VISUAL STORY: 9-STAGE BACKBONE CONTINUUM */}
        <CentralVisualStory />

        {/* OFF-CHAIN VS ON-CHAIN SPLIT ARCHITECTURE */}
        <OffChainVsOnChainSection />

        {/* IDENTITY & ACCESS CONTROL: W3C DID + RBAC MATRIX */}
        <IdentityPolicySection />

        {/* CRYPTOGRAPHIC INTEGRITY: DETERMINISTIC SHA-256 SEALING */}
        <CryptographicIntegritySection />

        {/* BLOCKCHAIN TRUST LAYER: ETHEREUM SEPOLIA CONSENSUS */}
        <BlockchainTrustSection />

        {/* CUSTODY LIFECYCLE: 7-STAGE HORIZONTAL STATE MACHINE */}
        <CustodyLifecycleSection />

        {/* INDEPENDENT ZERO-TRUST VERIFICATION: 5-POINT SUITE */}
        <IndependentVerificationSection />

        {/* FORENSIC EVIDENCE LINEAGE DAG */}
        <ForensicLineageSection />

        {/* AUDIT TRAIL & EVENT HISTORY */}
        <AuditEventHistorySection />

        {/* FOUR CONCENTRIC TRUST BOUNDARIES */}
        <TrustBoundariesSection />

        {/* 10-STEP CONTINUOUS DATA FLOW */}
        <DataFlowExplorer onHighlightComponent={handleHighlightComponent} />

        {/* SIX CORE SECURITY PRINCIPLES */}
        <SecurityPrinciplesSection />

        {/* VERIFIED TECHNOLOGY STACK MATRIX */}
        <TechStackSection />

        {/* FINAL ARCHITECTURE STATEMENT & ATTRIBUTION */}
        <FinalStatementSection />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ArchitectureControlRoom />
    </ThemeProvider>
  );
}
