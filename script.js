/**
 * J Jeffrey Shalom — Cybersecurity Portfolio Scripts
 * Vanilla JS: Interactive Terminal, Global Search Command Palette (Ctrl+K),
 * Section Hub & Focus Mode, Live Card Filters, Modal, Copy-to-Clipboard & Scroll Reveal
 */

const projects = {
  safeline: {
    kicker: "01 / APPLICATION DEFENSE / WAF",
    title: "SafeLine WAF Lab",
    summary: "A practical Web Application Firewall environment deployed to investigate application-layer traffic inspection, custom rule enforcement, malicious payload blocking, and security telemetry logging.",
    why: "Modern attacks target application-layer vulnerabilities that bypass network firewalls. I wanted hands-on experience tuning WAF rules, analyzing reverse proxy headers, and observing how defensive controls log and thwart malicious HTTP requests.",
    objective: "Deploy a production-grade WAF, protect containerized web applications, and evaluate how malicious payloads (SQLi, XSS, directory traversal) are flagged, filtered, or permitted.",
    tools: ["SafeLine WAF", "Nginx", "Docker Compose", "HTTP Inspection", "Security Event Logs", "Burp Suite"],
    did: [
      "Provisioned SafeLine WAF in front of vulnerable test web applications using Docker.",
      "Configured inspection rules, semantic analysis thresholds, and rate-limiting policies.",
      "Simulated structured web attacks (SQLi, path traversal, command injection) to test rule behavior.",
      "Correlated WAF access logs with backend service logs to measure detection fidelity.",
      "Documented attack bypass considerations and tuning strategies for zero-false-positive operation."
    ],
    skills: ["WAF Architecture", "Reverse Proxy Config", "HTTP Traffic Analysis", "Semantic Rule Tuning", "Security Log Correlation", "Web Defense Hardening"],
    relevance: "Understanding WAF mechanisms is critical for application security engineers tasked with protecting public services against zero-day exploits and automated bot scanners.",
    outcome: "Successfully demonstrated real-time detection and blocking of automated scanners and injection attacks while preserving low-latency responses for legitimate web clients.",
    evidence: [
      ["GitHub Documentation", "https://github.com/jeffrey-theog06"],
      ["Architecture Schematics", null],
      ["Lab Write-Up", "https://medium.com/@jeffrey_theog"]
    ]
  },
  pfsense: {
    kicker: "02 / NETWORK SECURITY / FIREWALL",
    title: "pfSense Firewall & Segmentation Lab",
    summary: "A virtualized enterprise network lab engineered to implement multi-tier zone segmentation, stateful firewall policies, NAT rules, and packet-level traffic filtering.",
    why: "To move beyond conceptual networking diagrams and gain firsthand command over routing tables, isolated DMZ zones, interface firewall rules, and NAT configurations in a virtual hypervisor.",
    objective: "Create an isolated multi-network topology and systematically validate allowed, denied, and logged traffic between trusted LAN, untrusted WAN, and public-facing DMZ systems.",
    tools: ["pfSense 2.7.x", "Proxmox / VMware", "Virtual Interfaces (VLAN)", "Stateful Packet Filtering", "NAT / DHCP / DNS"],
    did: [
      "Engineered multi-interface virtual network topology separating Management, LAN, and DMZ subnets.",
      "Configured strict inter-VLAN routing policies to prevent unauthorized lateral movement.",
      "Implemented Port Forwarding and 1:1 NAT rules for isolated public services.",
      "Conducted nmap reconnaissance and packet inspection to verify rule enforcement.",
      "Analyzed pfSense system and firewall logs to trace dropped packets and misconfigurations."
    ],
    skills: ["Firewall Architecture", "Network Segmentation", "VLAN & Subnetting", "Stateful Packet Inspection", "Network Troubleshooting", "Defensive Routing"],
    relevance: "Proper perimeter defense and micro-segmentation are foundational to preventing threat actors from moving laterally after gaining an initial foothold.",
    outcome: "Built a rock-solid virtual testbed enabling safe detonation and analysis of network-based attacks within strictly controlled containment boundaries.",
    evidence: [
      ["Network Topology Diagram", null],
      ["Firewall Rulesets", null],
      ["Lab Write-Up", "https://medium.com/@jeffrey_theog"]
    ]
  },
  wazuh: {
    kicker: "03 / SECURITY OPERATIONS / SIEM",
    title: "Wazuh SIEM & Threat Telemetry Lab",
    summary: "A SOC-style monitoring infrastructure collecting, decoding, and alerting on endpoint telemetry from Windows and Linux targets, with integrated File Integrity Monitoring (FIM).",
    why: "I wanted to understand how raw security events flow from individual endpoints into a centralized SIEM, how correlation rules trigger alerts, and how an analyst conducts triage.",
    objective: "Deploy a distributed Wazuh SIEM stack, ingest Sysmon and auditd logs, execute controlled attack scenarios, and investigate the generated alerts and telemetry.",
    tools: ["Wazuh Manager", "Wazuh Indexer & Dashboard", "Sysmon (Windows)", "Linux auditd", "FIM Rules", "Active Response"],
    did: [
      "Deployed and configured Wazuh Manager and Indexer on dedicated virtual infrastructure.",
      "Enrolled heterogeneous agents across Windows 10/11 and Ubuntu Server endpoints.",
      "Configured File Integrity Monitoring (FIM) on sensitive system directories and registry hives.",
      "Simulated suspicious behaviors (credential dumping with Mimikatz syntax, unauthorized account creation).",
      "Created custom XML detection rules to flag abnormal PowerShell execution patterns.",
      "Practiced SOC investigation workflows: timeline reconstruction, alert escalation, and remediation."
    ],
    skills: ["SIEM Architecture", "Syslog & Telemetry Ingestion", "Sysmon Event Analysis", "File Integrity Monitoring", "Detection Engineering", "SOC Incident Triage"],
    relevance: "Modern defensive security relies heavily on rapid detection and telemetry visibility. Hands-on SIEM deployment builds the core analytical skills required for SOC and detection engineering roles.",
    outcome: "Established a persistent SOC monitoring lab capable of detecting endpoint anomalies within seconds of execution, providing complete forensic trails.",
    evidence: [
      ["SIEM Dashboard Screenshots", null],
      ["Custom Detection Rules", null],
      ["Technical Write-Up", "https://medium.com/@jeffrey_theog"]
    ]
  },
  airia: {
    kicker: "04 / AI × SECURITY / SOC AUTOMATION",
    title: "Airia AI SOC Triage Lab",
    summary: "An experimental laboratory exploring the integration of LLM-assisted analysis into security operations, focusing on alert enrichment, workflow acceleration, and human-in-the-loop validation.",
    why: "To discover where generative AI can genuinely assist tier-1 analysts during high-volume alert fatigue, while identifying its failure modes, hallucinations, and security risks.",
    objective: "Test automated triage pipelines that summarize raw security logs and propose initial remediation steps, comparing AI recommendations against human analyst validation.",
    tools: ["Airia Platform", "LLM APIs", "Security Log Pipelines", "Prompt Engineering", "SOC Workflow Scripts"],
    did: [
      "Integrated synthetic security incident feeds into an automated AI triage workflow.",
      "Designed structured prompt templates to extract IOCs, attack stages, and MITRE ATT&CK techniques.",
      "Evaluated the accuracy of AI-generated incident summaries against ground-truth attack data.",
      "Documented critical boundary constraints where AI missed subtle obfuscation or hallucinated root causes.",
      "Formulated a human-in-the-loop operational framework ensuring all containment decisions require analyst sign-off."
    ],
    skills: ["AI-Assisted Security Operations", "SOC Workflow Automation", "Threat Contextualization", "Human-in-the-Loop Security", "Risk & Hallucination Assessment"],
    relevance: "As AI tools proliferate in security operations, engineers must understand how to safely harness automation without ceding critical decision-making authority.",
    outcome: "Demonstrated a 40% reduction in initial log summarization time while establishing strict analyst verification protocols for all remediation actions.",
    evidence: [
      ["Workflow Architecture", null],
      ["Analysis Report", "https://medium.com/@jeffrey_theog"]
    ]
  }
};

/**
 * Global Search Database
 * Exhaustive index across projects, skills, CTF records, credentials, and platforms
 */
const searchDatabase = [
  // 1. Projects & Labs
  {
    id: "safeline",
    title: "SafeLine WAF Lab",
    scope: "lab",
    badge: "Lab / WAF",
    badgeClass: "badge-lab",
    icon: "🛡️",
    desc: "Application-layer traffic inspection, custom rule enforcement, and automated attack payload blocking.",
    tags: ["SafeLine WAF", "Docker", "HTTP Inspection", "Reverse Proxy", "SQLi", "XSS"],
    action: { type: "modal", key: "safeline" }
  },
  {
    id: "pfsense",
    title: "pfSense Firewall & Segmentation Lab",
    scope: "lab",
    badge: "Lab / Network",
    badgeClass: "badge-lab",
    icon: "🌐",
    desc: "Virtualized multi-tier network segmentation, isolated DMZ/LAN, stateful packet filtering, and NAT policies.",
    tags: ["pfSense 2.7", "VLAN", "Firewall Rules", "NAT", "Proxmox", "VMware"],
    action: { type: "modal", key: "pfsense" }
  },
  {
    id: "wazuh",
    title: "Wazuh SIEM & Threat Telemetry Lab",
    scope: "lab",
    badge: "Lab / SIEM",
    badgeClass: "badge-lab",
    icon: "🚨",
    desc: "SOC monitoring pipeline collecting Sysmon & auditd logs, File Integrity Monitoring (FIM), and alert triage.",
    tags: ["Wazuh", "Sysmon", "FIM", "SOC", "Mimikatz Detection", "Alert Rules"],
    action: { type: "modal", key: "wazuh" }
  },
  {
    id: "airia",
    title: "Airia AI SOC Triage Lab",
    scope: "lab",
    badge: "Lab / AI SOC",
    badgeClass: "badge-lab",
    icon: "🤖",
    desc: "LLM-assisted alert contextualization and triage automation with strict human-in-the-loop analyst validation.",
    tags: ["Airia", "AI", "LLM", "Prompt Engineering", "SOC Automation", "Triage"],
    action: { type: "modal", key: "airia" }
  },

  // 2. CTF Milestones
  {
    id: "dcg-ctf",
    title: "DCG Coimbatore CTF (6th Place Finish)",
    scope: "ctf",
    badge: "CTF Top 5%",
    badgeClass: "badge-ctf",
    icon: "🏆",
    desc: "6th place finish out of 120+ teams. Solved unauthenticated SQLi bypass & reconstructed Wireshark reverse shell PCAP streams.",
    tags: ["Web Security", "SQL Injection", "Wireshark", "PCAP Forensics", "Team Triage"],
    action: { type: "jump", section: "timeline", selector: ".timeline-entry[data-category='ctf']" }
  },
  {
    id: "inter-college-ctf",
    title: "National Inter-College CTF (Top 50 Finalist)",
    scope: "ctf",
    badge: "CTF Finalist",
    badgeClass: "badge-ctf",
    icon: "🎯",
    desc: "Exploited misconfigured SUID binaries with wildcard injection to escalate privileges to root; decrypted custom XOR-shift ciphers.",
    tags: ["Linux SUID", "Privilege Escalation", "Cryptography", "Bash Scripting"],
    action: { type: "jump", section: "timeline", selector: ".timeline-entry:nth-of-type(2)" }
  },
  {
    id: "owasp-conclave",
    title: "OWASP Coimbatore Security Conclave",
    scope: "ctf",
    badge: "Conference",
    badgeClass: "badge-ctf",
    icon: "🛡️",
    desc: "Technical workshops covering Application Security, LLM Threat Modeling (OWASP Top 10 for LLMs), and API hardening.",
    tags: ["OWASP Top 10", "LLM Security", "BOLA / IDOR", "Threat Modeling"],
    action: { type: "jump", section: "timeline", selector: ".timeline-entry[data-category='community']" }
  },
  {
    id: "ejpt-prep",
    title: "Regional Cyber Battle & eJPT Practical Target",
    scope: "ctf",
    badge: "Active Target",
    badgeClass: "badge-ctf",
    icon: "⚡",
    desc: "Active lab training on Active Directory Kerberoasting, AS-REP roasting, BloodHound analysis, and Snort evasion.",
    tags: ["Active Directory", "eJPT Prep", "Kerberoasting", "BloodHound", "Snort"],
    action: { type: "jump", section: "timeline", selector: ".timeline-entry.upcoming" }
  },

  // 3. Credentials & Certifications
  {
    id: "google-cyber",
    title: "Foundations of Cybersecurity — Google",
    scope: "credential",
    badge: "Certification",
    badgeClass: "badge-credential",
    icon: "📜",
    desc: "Core security frameworks, threat landscape analysis, SIEM interpretation, incident response lifecycles, and risk mitigation.",
    tags: ["Google", "Security Frameworks", "SIEM", "Incident Response", "NIST"],
    action: { type: "jump", section: "certifications", selector: ".cred-card:nth-of-type(1)" }
  },
  {
    id: "cisco-python",
    title: "Python Essentials 1 & 2 — Cisco Networking Academy",
    scope: "credential",
    badge: "Certification",
    badgeClass: "badge-credential",
    icon: "🐍",
    desc: "Object-oriented Python programming, socket network programming basics, file manipulation, and script automation for tooling.",
    tags: ["Cisco", "Python 3", "Sockets", "OOP", "Scripting Automation"],
    action: { type: "jump", section: "certifications", selector: ".cred-card:nth-of-type(2)" }
  },
  {
    id: "deloitte-simulation",
    title: "Cyber Job Simulation — Deloitte Australia",
    scope: "credential",
    badge: "Simulation",
    badgeClass: "badge-credential",
    icon: "💼",
    desc: "Hands-on corporate security simulation: forensic log analysis, client breach response recommendations, and threat containment strategy.",
    tags: ["Deloitte", "Forage", "Forensic Analysis", "Breach Response", "Strategy"],
    action: { type: "jump", section: "certifications", selector: ".cred-card:nth-of-type(3)" }
  },
  {
    id: "meta-analytics",
    title: "Python Data Analytics — Meta",
    scope: "credential",
    badge: "Certification",
    badgeClass: "badge-credential",
    icon: "📊",
    desc: "Data wrangling, log pattern recognition, statistical filtering, and exploratory data analysis applicable to threat hunting.",
    tags: ["Meta", "Data Analytics", "Log Parsing", "Threat Hunting", "Data Wrangling"],
    action: { type: "jump", section: "certifications", selector: ".cred-card:nth-of-type(4)" }
  },

  // 4. Tools, Hardware & Rig
  {
    id: "rig-workbench",
    title: "The Lab Workbench & Infrastructure Rig",
    scope: "skill",
    badge: "Hardware & Tools",
    badgeClass: "badge-skill",
    icon: "🖥️",
    desc: "Proxmox VE & VMware hypervisors, pfSense 2.7.x gateway with Suricata IDS, Wazuh Manager + Sysmon, Kali Linux offensive suite.",
    tags: ["Proxmox", "VMware", "pfSense", "Wazuh", "Kali Linux", "Burp Suite", "Wireshark", "Nmap"],
    action: { type: "jump", section: "about", selector: "#rig" }
  },
  {
    id: "about-philosophy",
    title: "Operator Background & Defensive Philosophy",
    scope: "skill",
    badge: "About",
    badgeClass: "badge-skill",
    icon: "⚡",
    desc: "Computer Science undergrad in Chennai, India. Hands-on focus in AppSec, Network Defense, and Threat Detection.",
    tags: ["Background", "Security Engineering", "Chennai", "AppSec", "Methodology"],
    action: { type: "jump", section: "about", selector: "#about" }
  },

  // 5. Practice Platforms
  {
    id: "tryhackme",
    title: "TryHackMe — Top 10% Global Ranking",
    scope: "skill",
    badge: "Platform",
    badgeClass: "badge-skill",
    icon: "🕹️",
    desc: "Daily arena for Linux internals, network exploitation, privilege escalation, Wireshark dissection, and SOC analyst defense modules.",
    tags: ["TryHackMe", "Top 10%", "Linux", "PrivEsc", "SOC Analyst"],
    action: { type: "jump", section: "learning", selector: ".platform-card:nth-of-type(1)" }
  },
  {
    id: "hackthebox",
    title: "Hack The Box — Active Practitioner",
    scope: "skill",
    badge: "Platform",
    badgeClass: "badge-skill",
    icon: "📦",
    desc: "Structured machine enumeration, service misconfigurations, Active Directory domains, and vulnerability weaponization.",
    tags: ["Hack The Box", "HTB", "Active Directory", "Penetration Testing"],
    action: { type: "jump", section: "learning", selector: ".platform-card:nth-of-type(2)" }
  },

  // 6. Community, Writing & Contributions
  {
    id: "owasp-prs",
    title: "OWASP & Cortex Open-Source Contributions",
    scope: "writing",
    badge: "Open Source",
    badgeClass: "badge-writing",
    icon: "✍️",
    desc: "Contributed to OWASP Cheat Sheet Series and TheHive Cortex-Analyzers ecosystem, improving defensive documentation.",
    tags: ["OWASP", "TheHive", "Cortex Analyzers", "GitHub PRs", "Open Source"],
    action: { type: "jump", section: "community", selector: ".community-card:nth-of-type(1)" }
  },
  {
    id: "medium-articles",
    title: "Medium Technical Security Research & Teardowns",
    scope: "writing",
    badge: "Articles",
    badgeClass: "badge-writing",
    icon: "📖",
    desc: "Detailed technical articles documenting home-lab builds, vulnerability analysis, and defensive packet traces.",
    tags: ["Medium", "Articles", "Technical Writing", "Teardowns", "Packet Traces"],
    action: { type: "jump", section: "community", selector: ".community-card:nth-of-type(2)" }
  },
  {
    id: "contact-direct",
    title: "Get In Touch & Direct Communication Channels",
    scope: "writing",
    badge: "Contact",
    badgeClass: "badge-writing",
    icon: "✉️",
    desc: "Connect for security engineering, defensive lab architectures, CTF collaborations, and cybersecurity opportunities.",
    tags: ["Email", "LinkedIn", "GitHub", "Medium", "TryHackMe"],
    action: { type: "jump", section: "contact", selector: "#contact" }
  }
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

document.addEventListener("DOMContentLoaded", () => {
  // 1. Current Year
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Mobile Navigation Drawer Toggle
  const navToggle = $(".nav-toggle");
  const nav = $(".nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    $$(".nav a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 3. Scroll Reveal Animations
  const revealElements = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add("visible"));
  }

  // 4. Copy Email to Clipboard
  const copyBtn = $("#btn-copy-email");
  const tooltip = $("#email-tooltip");
  if (copyBtn && tooltip) {
    copyBtn.addEventListener("click", async () => {
      const email = "jeffshalom06@gmail.com";
      try {
        await navigator.clipboard.writeText(email);
        tooltip.textContent = "Copied to clipboard! ✓";
        tooltip.classList.add("show");
        setTimeout(() => tooltip.classList.remove("show"), 2400);
      } catch (err) {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        tooltip.textContent = "Copied to clipboard! ✓";
        tooltip.classList.add("show");
        setTimeout(() => tooltip.classList.remove("show"), 2400);
      }
    });
  }

  // 5. Hero Dual View Controller: Biometric Mesh HUD vs Bash Shell
  const tabBiometric = $("#tab-biometric");
  const tabTerminal = $("#tab-terminal");
  const viewBiometric = $("#view-biometric");
  const viewTerminal = $("#view-terminal");
  const visualStatusText = $("#visual-status-text");
  const btnRescan = $("#btn-rescan");
  const btnSwitchShell = $("#btn-switch-shell");
  const scanBar = $("#scan-bar");
  const biometricFrame = $("#biometric-frame");

  function switchHeroView(viewName) {
    if (viewName === "terminal") {
      if (tabTerminal) {
        tabTerminal.classList.add("active");
        tabTerminal.setAttribute("aria-selected", "true");
      }
      if (tabBiometric) {
        tabBiometric.classList.remove("active");
        tabBiometric.setAttribute("aria-selected", "false");
      }
      if (viewBiometric) viewBiometric.style.display = "none";
      if (viewTerminal) viewTerminal.style.display = "flex";
      if (visualStatusText) visualStatusText.textContent = "RIG ACTIVE";
    } else {
      if (tabBiometric) {
        tabBiometric.classList.add("active");
        tabBiometric.setAttribute("aria-selected", "true");
      }
      if (tabTerminal) {
        tabTerminal.classList.remove("active");
        tabTerminal.setAttribute("aria-selected", "false");
      }
      if (viewTerminal) viewTerminal.style.display = "none";
      if (viewBiometric) viewBiometric.style.display = "flex";
      if (visualStatusText) visualStatusText.textContent = "LOCK: VERIFIED";
    }
  }

  if (tabBiometric) tabBiometric.addEventListener("click", () => switchHeroView("biometric"));
  if (tabTerminal) tabTerminal.addEventListener("click", () => switchHeroView("terminal"));
  if (btnSwitchShell) btnSwitchShell.addEventListener("click", () => switchHeroView("terminal"));

  // Interactive Re-Scan Trigger
  if (btnRescan) {
    btnRescan.addEventListener("click", () => {
      if (!scanBar || !visualStatusText) return;

      visualStatusText.textContent = "RE-SCANNING...";
      visualStatusText.style.color = "#38bdf8";

      // Reset and trigger intensified scan
      scanBar.style.animation = "none";
      void scanBar.offsetWidth; // Trigger reflow
      scanBar.style.animation = "scanSweep 1.2s ease-in-out 2 alternate";

      // Flash landmark nodes
      $$(".bio-node").forEach(node => {
        node.style.boxShadow = "0 0 22px #ffffff, 0 0 35px var(--accent-cyan)";
      });

      setTimeout(() => {
        visualStatusText.textContent = "LOCK: VERIFIED";
        visualStatusText.style.color = "";
        scanBar.style.animation = "scanSweep 3.5s ease-in-out infinite alternate";
        $$(".bio-node").forEach(node => {
          node.style.boxShadow = "";
        });
      }, 2500);
    });
  }

  // 3D Parallax Tilt Effect on Mousemove over the Face Frame
  if (biometricFrame) {
    const viewport = $("#biometric-viewport");
    if (viewport) {
      viewport.addEventListener("mousemove", (e) => {
        const rect = viewport.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        biometricFrame.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      viewport.addEventListener("mouseleave", () => {
        biometricFrame.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      });
    }
  }

  // 6. Interactive Terminal Logic
  const termOutput = $("#term-output");
  const termInput = $("#term-input");
  const termChips = $$(".term-chip");

  const terminalCommands = {
    help: () => `Available commands:
  • <span class="term-accent">whoami</span>      - Display operator identity & background
  • <span class="term-accent">labs</span>        - List active cybersecurity labs
  • <span class="term-accent">ctfs</span>        - Review CTF competition history & placements
  • <span class="term-accent">rig</span>         - Print home lab hardware & tooling specs
  • <span class="term-accent">search</span>      - Open global portfolio search palette (Ctrl+K)
  • <span class="term-accent">contact</span>     - View contact methods & direct links
  • <span class="term-accent">clear</span>       - Reset terminal screen`,

    whoami: () => `Operator: J Jeffrey Shalom
Role: Cybersecurity Student & Security Engineering Researcher
Location: Chennai, Tamil Nadu, India
Core Focus: Application Security, Network Defense, Virtualized Security Labs, Detection & Response
Current Status: <span class="term-highlight">🟢 LAB ACTIVE</span> — Tinkering with Snort rules & Active Directory privilege escalation`,

    labs: () => `Active Security Environments:
  1. [WAF]     SafeLine WAF Lab (Application Defense & Inspection)
  2. [NETWORK] pfSense Firewall Lab (VLAN Segmentation & NAT)
  3. [SIEM]    Wazuh SIEM Lab (SOC Telemetry, FIM & Sysmon Alerts)
  4. [AI/SOC]  Airia AI SOC Lab (Automated Triage & Validation)`,

    ctfs: () => `Competition Track Record:
  🏆 <span class="term-highlight">DCG Coimbatore CTF (Nov 2024):</span> Team 6th Place / 120+ teams (Web & Forensics)
  🎯 <span class="term-accent">National Inter-College CTF (Feb 2025):</span> Top 50 Finalist (Linux PrivEsc)
  🛡️ <span class="term-accent">OWASP Coimbatore Conclave (Oct 2025):</span> Technical Attendee & Contributor
  ⚡ <span class="term-accent">Upcoming 2026:</span> Regional Cyber Challenge & eJPT practical target`,

    rig: () => `Hardware & Workbench Specifications:
  • Hypervisors: Proxmox VE, VMware Workstation, VirtualBox
  • Gateway: pfSense 2.7.x virtual router (WAN/LAN/DMZ isolated)
  • Monitoring: Wazuh Manager v4.x + Sysmon + Elastic
  • Offensive: Kali Linux 2024, Burp Suite Pro, Wireshark, tshark, Nmap
  • Scripting: Python 3, Bash, PowerShell`,

    search: () => {
      openSearchModal();
      return `Opened Global Search & Command Palette.`;
    },

    contact: () => `Direct Communication Channels:
  • Email:    <a href="mailto:jeffshalom06@gmail.com" class="term-accent">jeffshalom06@gmail.com</a>
  • GitHub:   <a href="https://github.com/jeffrey-theog06" target="_blank" rel="noopener" class="term-accent">@jeffrey-theog06</a>
  • LinkedIn: <a href="https://www.linkedin.com/in/j-jeffrey-shalom-5a4a31314/" target="_blank" rel="noopener" class="term-accent">J Jeffrey Shalom</a>
  • Medium:   <a href="https://medium.com/@jeffrey_theog" target="_blank" rel="noopener" class="term-accent">@jeffrey_theog</a>`,

    clear: () => {
      if (termOutput) termOutput.innerHTML = "";
      return null;
    }
  };

  function executeTerminalCommand(cmdRaw) {
    if (!termOutput) return;
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      terminalCommands.clear();
      return;
    }

    const commandEntry = document.createElement("p");
    commandEntry.className = "term-line";
    commandEntry.innerHTML = `<span class="term-prompt">jeffrey@security-lab:~$</span> <span class="term-cmd">${cmdRaw}</span>`;
    termOutput.appendChild(commandEntry);

    const outEntry = document.createElement("div");
    outEntry.className = "term-out";

    if (terminalCommands[cmd]) {
      outEntry.innerHTML = terminalCommands[cmd]();
    } else {
      outEntry.innerHTML = `command not found: <span style="color:#ef4444">${cmd}</span>. Type <span class="term-accent">'help'</span> for available commands.`;
    }

    termOutput.appendChild(outEntry);
    termOutput.scrollTop = termOutput.scrollHeight;
  }

  if (termInput) {
    termInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const val = termInput.value;
        termInput.value = "";
        executeTerminalCommand(val);
      }
    });
  }

  termChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const cmd = chip.dataset.cmd;
      if (cmd) executeTerminalCommand(cmd);
    });
  });

  // 6. Project Case Studies Modal
  const modal = $("#project-modal");
  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  function openProjectModal(key) {
    const project = projects[key];
    if (!project || !modal) return;

    $("#modal-kicker").textContent = project.kicker;
    $("#modal-title").textContent = project.title;
    $("#modal-summary").textContent = project.summary;
    $("#modal-why").textContent = project.why;
    $("#modal-objective").textContent = project.objective;
    $("#modal-relevance").textContent = project.relevance;
    $("#modal-outcome").textContent = project.outcome;

    $("#modal-tools").innerHTML = project.tools.map(item => `<span class="tech-tag">${item}</span>`).join("");
    $("#modal-skills").innerHTML = project.skills.map(item => `<span>${item}</span>`).join("");
    $("#modal-did").innerHTML = project.did.map(item => `<li>${item}</li>`).join("");

    $("#modal-evidence").innerHTML = project.evidence.map(([label, url]) => {
      if (url) return `<a href="${url}" target="_blank" rel="noopener">${label} ↗</a>`;
      return `<span class="placeholder-link">${label} (Available on Request)</span>`;
    }).join("");

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    const closeBtn = $(".modal-close");
    if (closeBtn) closeBtn.focus();
  }

  $$(".project-open").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".project-card");
      if (!card) return;
      const key = card.dataset.project;
      openProjectModal(key);
    });
  });

  const modalCloseBtn = $(".modal-close");
  const modalBackdrop = $(".modal-backdrop");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal && modal.classList.contains("open")) {
      closeModal();
    }
  });

  // ===================================================================
  // 7. SECTION HUB & VIEW MODE CONTROLLER (CONTINUOUS vs FOCUS VIEW)
  // ===================================================================
  const sectionIds = ["about", "projects", "timeline", "learning", "certifications", "community", "contact"];
  const sectionNames = {
    all: "All Overview",
    about: "About & Rig",
    projects: "Labs & Projects",
    timeline: "CTFs & Journey",
    learning: "Practice Platforms",
    certifications: "Credentials",
    community: "Community & Writing",
    contact: "Get In Touch"
  };

  let currentViewMode = "all"; // "all" or "focus"
  let currentFocusedSection = "projects";

  const hubLabel = $("#hub-active-label");
  const btnModeAll = $("#btn-mode-all");
  const btnModeFocus = $("#btn-mode-focus");
  const hubPills = $$(".hub-pill");
  const navLinks = $$(".nav-link");
  const sections = $$(".portfolio-section");
  const sectionDividers = $$(".section-divider");

  function pulseHighlight(el) {
    if (!el) return;
    el.classList.remove("search-target-pulse");
    void el.offsetWidth; // Force reflow
    el.classList.add("search-target-pulse");
    setTimeout(() => el.classList.remove("search-target-pulse"), 2000);
  }

  function setViewMode(mode, targetSection = null) {
    currentViewMode = mode;

    if (mode === "focus") {
      document.body.classList.add("focus-mode-active");
      if (btnModeFocus) btnModeFocus.classList.add("active");
      if (btnModeAll) btnModeAll.classList.remove("active");

      const secToFocus = targetSection && targetSection !== "all" ? targetSection : currentFocusedSection;
      focusOnSection(secToFocus);
    } else {
      document.body.classList.remove("focus-mode-active");
      if (btnModeAll) btnModeAll.classList.add("active");
      if (btnModeFocus) btnModeFocus.classList.remove("active");

      // Show all sections
      sections.forEach(s => s.classList.remove("focus-hidden"));
      sectionDividers.forEach(d => d.classList.remove("focus-hidden"));

      if (targetSection && targetSection !== "all") {
        const targetEl = document.getElementById(targetSection);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
          pulseHighlight(targetEl);
        }
      }

      updateActivePill("all");
    }
  }

  function focusOnSection(secId) {
    if (!sectionIds.includes(secId)) return;
    currentFocusedSection = secId;

    sections.forEach(section => {
      if (section.id === secId) {
        section.classList.remove("focus-hidden");
        // Ensure reveal elements in this section are visible
        $$(".reveal", section).forEach(r => r.classList.add("visible"));
      } else {
        section.classList.add("focus-hidden");
      }
    });

    // Hide all dividers in focus mode
    sectionDividers.forEach(d => d.classList.add("focus-hidden"));

    updateActivePill(secId);

    // Scroll to section hub so visitor sees the focused section cleanly
    const hub = $("#section-hub");
    if (hub) {
      hub.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function updateActivePill(targetId) {
    hubPills.forEach(pill => {
      if (pill.dataset.target === targetId) {
        pill.classList.add("active");
        pill.setAttribute("aria-selected", "true");
      } else {
        pill.classList.remove("active");
        pill.setAttribute("aria-selected", "false");
      }
    });

    // Update header nav active link
    navLinks.forEach(link => {
      if (link.dataset.nav === targetId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Update hub label
    if (hubLabel) {
      const labelText = sectionNames[targetId] || targetId;
      const prefix = currentViewMode === "focus" ? "Focused on:" : "Viewing:";
      hubLabel.innerHTML = `${prefix} <strong>${labelText}</strong>`;
    }

    // Update floating dock active text
    const dockSectionName = $("#dock-section-name");
    if (dockSectionName) {
      dockSectionName.textContent = sectionNames[targetId] || "Overview";
    }
  }

  // Handle Hub Pill clicks
  hubPills.forEach(pill => {
    pill.addEventListener("click", () => {
      const target = pill.dataset.target;
      if (target === "all") {
        setViewMode("all");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        if (currentViewMode === "focus") {
          focusOnSection(target);
        } else {
          const targetEl = document.getElementById(target);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
            updateActivePill(target);
            pulseHighlight(targetEl);
          }
        }
      }
    });
  });

  // Handle View Mode buttons
  if (btnModeAll) {
    btnModeAll.addEventListener("click", () => setViewMode("all"));
  }
  if (btnModeFocus) {
    btnModeFocus.addEventListener("click", () => setViewMode("focus"));
  }

  // Handle Focus Mode Footer Stepper buttons
  $$(".focus-nav-footer").forEach(footer => {
    const nextBtn = $(".btn-focus-next", footer);
    const prevBtn = $(".btn-focus-prev", footer);
    const allBtn = $(".btn-focus-all", footer);

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const nextSec = nextBtn.dataset.next;
        if (nextSec) focusOnSection(nextSec);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        const prevSec = prevBtn.dataset.prev;
        if (prevSec) focusOnSection(prevSec);
      });
    }

    if (allBtn) {
      allBtn.addEventListener("click", () => {
        const parentSection = footer.closest(".portfolio-section");
        const secId = parentSection ? parentSection.id : null;
        setViewMode("all", secId);
      });
    }
  });

  // Scrollspy for Continuous View Mode
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      if (currentViewMode === "focus") return; // Skip in focus mode

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const secId = entry.target.id;
          updateActivePill(secId);
        }
      });
    }, {
      rootMargin: "-25% 0px -65% 0px"
    });

    sections.forEach(sec => sectionObserver.observe(sec));
  }

  // ===================================================================
  // 8. IN-SECTION LIVE FILTERS (Projects & Credentials)
  // ===================================================================

  // A. Projects Toolbar Filtering
  const projectFilterPills = $$("#project-filters .filter-pill");
  const projectCards = $$(".project-card");
  const projectFilterInput = $("#project-filter-input");
  const projectFilterClear = $("#project-filter-clear");

  let activeProjectCategory = "all";
  let activeProjectSearchQuery = "";

  function applyProjectFilters() {
    projectCards.forEach(card => {
      const category = card.dataset.category || "all";
      const matchesCategory = (activeProjectCategory === "all" || category === activeProjectCategory);

      let matchesSearch = true;
      if (activeProjectSearchQuery) {
        const textContent = card.textContent.toLowerCase();
        matchesSearch = textContent.includes(activeProjectSearchQuery);
      }

      if (matchesCategory && matchesSearch) {
        card.classList.remove("card-filtered-hidden");
      } else {
        card.classList.add("card-filtered-hidden");
      }
    });

    if (projectFilterClear) {
      projectFilterClear.style.display = activeProjectSearchQuery ? "inline-block" : "none";
    }
  }

  projectFilterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      projectFilterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeProjectCategory = pill.dataset.filter;
      applyProjectFilters();
    });
  });

  if (projectFilterInput) {
    projectFilterInput.addEventListener("input", (e) => {
      activeProjectSearchQuery = e.target.value.trim().toLowerCase();
      applyProjectFilters();
    });
  }

  if (projectFilterClear) {
    projectFilterClear.addEventListener("click", () => {
      if (projectFilterInput) projectFilterInput.value = "";
      activeProjectSearchQuery = "";
      applyProjectFilters();
    });
  }

  // B. Credentials Toolbar Filtering
  const credFilterPills = $$("#cred-filters .filter-pill");
  const credCards = $$(".cred-card");
  const credFilterInput = $("#cred-filter-input");
  const credFilterClear = $("#cred-filter-clear");

  let activeCredCategory = "all";
  let activeCredSearchQuery = "";

  function applyCredFilters() {
    credCards.forEach(card => {
      const category = card.dataset.category || "all";
      const matchesCategory = (activeCredCategory === "all" || category === activeCredCategory);

      let matchesSearch = true;
      if (activeCredSearchQuery) {
        const textContent = card.textContent.toLowerCase();
        matchesSearch = textContent.includes(activeCredSearchQuery);
      }

      if (matchesCategory && matchesSearch) {
        card.classList.remove("card-filtered-hidden");
      } else {
        card.classList.add("card-filtered-hidden");
      }
    });

    if (credFilterClear) {
      credFilterClear.style.display = activeCredSearchQuery ? "inline-block" : "none";
    }
  }

  credFilterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      credFilterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCredCategory = pill.dataset.filter;
      applyCredFilters();
    });
  });

  if (credFilterInput) {
    credFilterInput.addEventListener("input", (e) => {
      activeCredSearchQuery = e.target.value.trim().toLowerCase();
      applyCredFilters();
    });
  }

  if (credFilterClear) {
    credFilterClear.addEventListener("click", () => {
      if (credFilterInput) credFilterInput.value = "";
      activeCredSearchQuery = "";
      applyCredFilters();
    });
  }

  // C. Timeline Category Filter
  const timelineFilterPills = $$(".timeline-filter-bar .filter-pill");
  const timelineEntries = $$(".timeline-entry");

  timelineFilterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      timelineFilterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      const filter = pill.dataset.filter;
      timelineEntries.forEach(entry => {
        if (filter === "all" || entry.dataset.category === filter) {
          entry.classList.remove("hidden");
        } else {
          entry.classList.add("hidden");
        }
      });
    });
  });

  // ===================================================================
  // 9. GLOBAL INTERACTIVE SEARCH & COMMAND PALETTE (Ctrl + K)
  // ===================================================================
  const searchModal = $("#search-modal");
  const searchInput = $("#global-search-input");
  const searchResultsList = $("#search-results-list");
  const searchEmptyState = $("#search-empty-state");
  const searchChips = $$(".search-chip");
  const searchClearBtn = $("#search-clear-btn");
  const searchCloseBtn = $("#search-close-btn");
  const searchBackdrop = $("#search-backdrop");

  let activeSearchScope = "all";
  let activeSelectedIndex = 0;
  let currentFilteredResults = [];

  function openSearchModal(initialQuery = "") {
    if (!searchModal) return;
    searchModal.classList.add("open");
    searchModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    if (searchInput) {
      searchInput.value = initialQuery;
      setTimeout(() => searchInput.focus(), 50);
    }

    renderSearchResults();
  }

  function closeSearchModal() {
    if (!searchModal) return;
    searchModal.classList.remove("open");
    searchModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  function renderSearchResults() {
    if (!searchResultsList) return;

    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";

    currentFilteredResults = searchDatabase.filter(item => {
      const matchesScope = (activeSearchScope === "all" || item.scope === activeSearchScope);
      if (!matchesScope) return false;

      if (!query) return true;

      const titleMatch = item.title.toLowerCase().includes(query);
      const descMatch = item.desc.toLowerCase().includes(query);
      const tagMatch = item.tags.some(t => t.toLowerCase().includes(query));

      return titleMatch || descMatch || tagMatch;
    });

    if (currentFilteredResults.length === 0) {
      searchResultsList.innerHTML = "";
      if (searchEmptyState) searchEmptyState.style.display = "block";
      return;
    }

    if (searchEmptyState) searchEmptyState.style.display = "none";
    activeSelectedIndex = 0;

    searchResultsList.innerHTML = currentFilteredResults.map((item, idx) => `
      <div class="search-result-item ${idx === 0 ? "selected" : ""}" data-index="${idx}" role="button" tabindex="0">
        <span class="search-result-icon">${item.icon}</span>
        <div class="search-result-content">
          <div class="search-result-header">
            <span class="search-result-title">${item.title}</span>
            <span class="search-result-badge ${item.badgeClass}">${item.badge}</span>
          </div>
          <p class="search-result-desc">${item.desc}</p>
          <div class="search-result-tags">
            ${item.tags.map(tag => `<span>${tag}</span>`).join("")}
          </div>
        </div>
        <span class="search-result-arrow">→</span>
      </div>
    `).join("");

    $$(".search-result-item", searchResultsList).forEach(el => {
      el.addEventListener("click", () => {
        const idx = parseInt(el.dataset.index, 10);
        executeSearchResult(currentFilteredResults[idx]);
      });
    });
  }

  function executeSearchResult(item) {
    if (!item) return;
    closeSearchModal();

    if (item.action.type === "modal") {
      openProjectModal(item.action.key);
    } else if (item.action.type === "jump") {
      if (currentViewMode === "focus") {
        focusOnSection(item.action.section);
      } else {
        const sec = document.getElementById(item.action.section);
        if (sec) {
          sec.classList.remove("focus-hidden");
          updateActivePill(item.action.section);
        }
      }

      setTimeout(() => {
        const targetEl = document.querySelector(item.action.selector) || document.getElementById(item.action.section);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
          pulseHighlight(targetEl);
        }
      }, 150);
    } else if (item.action.type === "link") {
      window.open(item.action.url, "_blank");
    }
  }

  // Search input event listeners
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      renderSearchResults();
    });

    searchInput.addEventListener("keydown", (e) => {
      const items = $$(".search-result-item", searchResultsList);
      if (!items.length) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        activeSelectedIndex = (activeSelectedIndex + 1) % items.length;
        updateSearchSelection(items);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        activeSelectedIndex = (activeSelectedIndex - 1 + items.length) % items.length;
        updateSearchSelection(items);
      } else if (e.key === "Enter") {
        e.preventDefault();
        executeSearchResult(currentFilteredResults[activeSelectedIndex]);
      }
    });
  }

  function updateSearchSelection(items) {
    items.forEach((item, idx) => {
      if (idx === activeSelectedIndex) {
        item.classList.add("selected");
        item.scrollIntoView({ block: "nearest" });
      } else {
        item.classList.remove("selected");
      }
    });
  }

  // Scope chips in Search Modal
  searchChips.forEach(chip => {
    chip.addEventListener("click", () => {
      searchChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeSearchScope = chip.dataset.scope;
      renderSearchResults();
      if (searchInput) searchInput.focus();
    });
  });

  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
      }
      renderSearchResults();
    });
  }

  if (searchCloseBtn) searchCloseBtn.addEventListener("click", closeSearchModal);
  if (searchBackdrop) searchBackdrop.addEventListener("click", closeSearchModal);

  // Search Triggers: Header button, Hub trigger, Mobile nav button, Dock button
  const headerSearchBtn = $("#header-search-btn");
  const hubSearchBtn = $("#hub-search-btn");
  const mobileSearchBtn = $("#mobile-search-btn");
  const dockSearchBtn = $("#dock-search-btn");

  if (headerSearchBtn) headerSearchBtn.addEventListener("click", () => openSearchModal());
  if (hubSearchBtn) hubSearchBtn.addEventListener("click", () => openSearchModal());
  if (mobileSearchBtn) {
    mobileSearchBtn.addEventListener("click", () => {
      nav.classList.remove("open");
      if (navToggle) navToggle.setAttribute("aria-expanded", "false");
      openSearchModal();
    });
  }
  if (dockSearchBtn) dockSearchBtn.addEventListener("click", () => openSearchModal());

  // Global Keyboard Shortcut: Ctrl+K / Cmd+K or "/"
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (searchModal && searchModal.classList.contains("open")) {
        closeSearchModal();
      } else {
        openSearchModal();
      }
    } else if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      e.preventDefault();
      openSearchModal();
    } else if (e.key === "Escape" && searchModal && searchModal.classList.contains("open")) {
      closeSearchModal();
    }
  });

  // ===================================================================
  // 10. FLOATING QUICK NAVIGATION DOCK
  // ===================================================================
  const quickNavDock = $("#quick-nav-dock");
  const dockNextBtn = $("#dock-next-btn");
  const dockPrevBtn = $("#dock-prev-btn");

  window.addEventListener("scroll", () => {
    if (!quickNavDock) return;
    if (window.scrollY > 350) {
      quickNavDock.classList.add("visible");
    } else {
      quickNavDock.classList.remove("visible");
    }
  }, { passive: true });

  if (dockNextBtn) {
    dockNextBtn.addEventListener("click", () => {
      const currentIndex = sectionIds.indexOf(currentFocusedSection);
      const nextIndex = (currentIndex + 1) % sectionIds.length;
      const nextSec = sectionIds[nextIndex];

      if (currentViewMode === "focus") {
        focusOnSection(nextSec);
      } else {
        const el = document.getElementById(nextSec);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          updateActivePill(nextSec);
          pulseHighlight(el);
        }
      }
    });
  }

  if (dockPrevBtn) {
    dockPrevBtn.addEventListener("click", () => {
      const currentIndex = sectionIds.indexOf(currentFocusedSection);
      const prevIndex = (currentIndex - 1 + sectionIds.length) % sectionIds.length;
      const prevSec = sectionIds[prevIndex];

      if (currentViewMode === "focus") {
        focusOnSection(prevSec);
      } else {
        const el = document.getElementById(prevSec);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          updateActivePill(prevSec);
          pulseHighlight(el);
        }
      }
    });
  }
});
