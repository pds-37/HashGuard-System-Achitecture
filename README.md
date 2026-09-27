# 🛡️ HASHGUARD — System Architecture Explorer

> **Interactive Technical Architecture Explorer for the HashGuard Cyber Evidence Exchange Platform**  
> Visualizing end-to-end evidence ingestion, decentralized identity (W3C DIDs), RBAC governance, off-chain cryptographic enclaves, on-chain state proofs, and independent zero-trust verification.

---

## 📌 Overview

**HashGuard System Architecture Explorer** is a visual, interactive technical architecture explorer designed for judges, evaluators, security architects, and forensic auditors. It explains the entire architecture of HashGuard from end to end:

```
                    HASHGUARD
                        │
        ┌───────────────┼────────────────┐
        ↓               ↓                ↓
   PRESENTATION     APPLICATION       IDENTITY
      LAYER             LAYER            LAYER
        │               │                │
        └───────────────┼────────────────┘
                        ↓
               CRYPTOGRAPHIC LAYER
                        │
              SHA-256 / SIGNATURE
                        │
             ┌──────────┴──────────┐
             ↓                     ↓
        OFF-CHAIN               ON-CHAIN
      Evidence/Data        Smart Contract
                              │
                    ┌─────────┼─────────┐
                    ↓         ↓         ↓
                  RBAC    Ownership   Audit
                    │         │         │
                    └─────────┼─────────┘
                              ↓
                     VERIFICATION
                              │
                              ↓
                   MULTI-ORG TRUST
```

---

## ⚡ Key Architectural Features

- **Interactive Multi-Layer System Diagram**: Click any architectural node to inspect its technical purpose, architecture flow, verified technologies, and repository code artifacts in the dynamic inspector drawer.
- **End-to-End Data Flow Explorer**: 10-step trace detailing how evidence flows from physical acquisition to courtroom admissibility.
- **Trust Boundary Isolation Visualization**: Explains the 4 isolation domains: User & Org, Application Enclave, Off-Chain Object Storage, and Blockchain Trust Layer.
- **Security Principles**: Six core guarantees (Cryptographic Integrity, Self-Sovereign Identity, Granular Authorization, Verifiable History, Separation of Data & Proof, Independent Verification).
- **Smart Contract Telemetry**: Complete deployment specifications for `HASHGUARD.sol` on Ethereum Sepolia (Chain ID: `11155111`, Address: `0x3592925Cf64E7C3c68d4911b2ebC722c2Ea67052`).
- **Verified Tech Stack**: Ground-truth technologies mapped directly to the HashGuard repository.
- **Implementation Status Badges**: Clear visual badges distinguishing implemented features (`✓ IMPLEMENTED`) from future milestones (`CONCEPTUAL`).

---

## 🛠️ Tech Stack

- **Framework**: React 19.2.8
- **Bundler**: Vite 8.2.1
- **Styling**: Tailwind CSS 3.4.17 with custom SOC tokens
- **Icons**: Lucide React
- **Typography**: Inter & JetBrains Mono

---

## 🚀 Quickstart

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
npm run preview
```

---

## 🔗 Related Links

- **Main HashGuard Repository**: [https://github.com/pds-37/Hash-Guard](https://github.com/pds-37/Hash-Guard)
- **Verified Sepolia Contract**: [`0x3592925Cf64E7C3c68d4911b2ebC722c2Ea67052`](https://sepolia.etherscan.io/address/0x3592925Cf64E7C3c68d4911b2ebC722c2Ea67052)
