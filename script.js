/**
 * J Jeffrey Shalom — Cybersecurity Portfolio Scripts
 * Vanilla JS: Interactive Terminal, Timeline Filtering, Modal, Copy-to-Clipboard & Scroll Reveal
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

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

document.addEventListener("DOMContentLoaded", () => {
  // 1. Current Year
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Mobile Navigation Toggle
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
        // Fallback
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

  // 5. Interactive Terminal Logic
  const termOutput = $("#term-output");
  const termInput = $("#term-input");
  const termChips = $$(".term-chip");

  const terminalCommands = {
    help: () => `Available commands:
  • <span class="term-accent">whoami</span>      - Display operator identity & background
  • <span class="term-accent">labs</span>        - List active cybersecurity labs
  • <span class="term-accent">ctfs</span>        - Review CTF competition history & placements
  • <span class="term-accent">rig</span>         - Print home lab hardware & tooling specs
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

  // 6. Timeline Category Filter
  const filterPills = $$(".filter-pill");
  const timelineEntries = $$(".timeline-entry");

  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
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

  // 7. Project Case Studies Modal
  const modal = $("#project-modal");
  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  $$(".project-open").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".project-card");
      if (!card) return;
      const key = card.dataset.project;
      const project = projects[key];
      if (!project) return;

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
      $(".modal-close").focus();
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
});
