const projects = {
  safeline: {
    kicker: "01 / WEB SECURITY / WAF",
    title: "SafeLine WAF Lab",
    summary: "A practical Web Application Firewall environment used to understand traffic inspection, defensive filtering, logging and controlled security testing.",
    why: "To understand how a WAF operates between clients and a web application, and how defensive controls behave when application-layer traffic is inspected.",
    objective: "Deploy a functioning WAF, protect a web application and observe how requests are inspected, allowed, blocked and logged.",
    tools: ["SafeLine", "HTTP", "WAF", "Web Security", "Security Logs"],
    did: [
      "Deployed the WAF in a controlled lab environment.",
      "Configured protected web applications.",
      "Tested HTTP traffic and examined request handling.",
      "Studied WAF rules and investigated blocked requests.",
      "Examined security logs and performed controlled security testing."
    ],
    skills: ["WAF architecture", "HTTP request inspection", "Web attack detection", "Application-layer defense", "Security logging", "Defensive testing"],
    relevance: "WAFs are commonly deployed as a layer of application protection. The lab provides a concrete way to understand the trade-off between inspection, blocking, logging and application availability.",
    outcome: "Built a practical environment for studying how web applications can be protected using a WAF and how defensive decisions appear in security telemetry.",
    evidence: [
      ["GitHub repository", null], ["Screenshots", null], ["Write-up", null], ["Technical documentation", null]
    ]
  },
  pfsense: {
    kicker: "02 / NETWORK SECURITY / FIREWALL",
    title: "pfSense Firewall Lab",
    summary: "A virtualized network-security laboratory for learning firewall architecture, segmentation, traffic filtering and troubleshooting.",
    why: "To move beyond firewall theory and understand how rules, interfaces, NAT and network services affect communication between virtual systems.",
    objective: "Create a segmented virtual network and validate how firewall rules control allowed and denied communication.",
    tools: ["pfSense", "Virtualization", "NAT", "Firewall Rules", "Network Services"],
    did: [
      "Built the virtual network and configured interfaces.",
      "Created and tested firewall rules.",
      "Configured network services and NAT.",
      "Tested allowed and denied traffic.",
      "Monitored network behaviour and investigated firewall logs.",
      "Troubleshot connectivity and DNS behaviour across the lab."
    ],
    skills: ["Firewall architecture", "Network segmentation", "Traffic filtering", "NAT", "Network troubleshooting", "Defensive network design"],
    relevance: "Firewalls are a foundational security control. Understanding the relationship between interfaces, routing, NAT and rules is directly useful when designing or troubleshooting segmented networks.",
    outcome: "Created a controlled environment for experimenting with network-security controls and understanding how policy changes affect traffic.",
    evidence: [
      ["Network diagram", null], ["Firewall rules", null], ["Screenshots", null], ["GitHub / documentation", null]
    ]
  },
  wazuh: {
    kicker: "03 / SECURITY OPERATIONS / SIEM",
    title: "Wazuh SIEM Lab",
    summary: "A small SOC-style environment for endpoint monitoring, security-event collection, alert investigation and file-integrity monitoring.",
    why: "To understand how security events move from endpoints into a monitoring platform and how analysts can use alerts and logs during investigation.",
    objective: "Build a monitoring environment capable of collecting endpoint telemetry, generating test events and supporting alert investigation.",
    tools: ["Wazuh", "SIEM", "Windows", "Linux", "FIM", "Security Alerts"],
    did: [
      "Deployed Wazuh manager, indexer and dashboard components.",
      "Connected monitored systems to the environment.",
      "Generated test security events and investigated alerts.",
      "Studied detection rules and analysed logs.",
      "Practised alert investigation and endpoint monitoring.",
      "Explored real-time File Integrity Monitoring on a Windows endpoint."
    ],
    skills: ["SIEM fundamentals", "Log collection", "Security-event analysis", "Detection engineering", "Alert investigation", "FIM"],
    relevance: "Modern security operations depend on collecting and interpreting telemetry at scale. This lab connects endpoint activity with detection, investigation and evidence.",
    outcome: "Built a practical security-monitoring environment for learning detection and investigation workflows rather than only reading about SIEM concepts.",
    evidence: [
      ["Dashboard screenshots", null], ["Detection rules", null], ["Architecture diagram", null], ["FIM write-up", null]
    ]
  },
  airia: {
    kicker: "04 / AI × SECURITY / SOC",
    title: "Airia AI SOC Lab",
    summary: "An AI-assisted SOC experimentation environment focused on analysis, triage, workflow automation and human validation.",
    why: "To explore where AI can assist security operations while keeping the analyst responsible for validating results and making security decisions.",
    objective: "Experiment with AI-assisted security analysis and workflow automation, then document limitations and observations.",
    tools: ["Airia", "AI-assisted Analysis", "SOC Workflows", "Automation"],
    did: [
      "Built the laboratory environment.",
      "Integrated security data into the workflow.",
      "Experimented with AI-assisted analysis and triage.",
      "Tested security workflows and evaluated generated results.",
      "Documented limitations, observations and the need for human validation."
    ],
    skills: ["AI-assisted security operations", "Security automation", "Alert analysis", "Human-in-the-loop security", "Workflow evaluation"],
    relevance: "AI is increasingly used to assist analysts with repetitive analysis and triage. The useful engineering question is not whether AI replaces analysts, but where it can safely augment security workflows.",
    outcome: "Developed practical understanding of how AI can complement security operations and where validation remains essential.",
    evidence: [
      ["Architecture", null], ["Screenshots", null], ["Workflow", null], ["GitHub / write-up", null]
    ]
  }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();

  // Mobile navigation
  const navToggle = $(".nav-toggle");
  const nav = $(".nav");
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  $$(".nav a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

  // Scroll reveal
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach(el => revealObserver.observe(el));

  // Project case studies
  const modal = $("#project-modal");
  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  $$(".project-open").forEach(button => {
    button.addEventListener("click", () => {
      const key = button.closest(".project-card").dataset.project;
      const project = projects[key];
      if (!project) return;

      $("#modal-kicker").textContent = project.kicker;
      $("#modal-title").textContent = project.title;
      $("#modal-summary").textContent = project.summary;
      $("#modal-why").textContent = project.why;
      $("#modal-objective").textContent = project.objective;
      $("#modal-relevance").textContent = project.relevance;
      $("#modal-outcome").textContent = project.outcome;

      $("#modal-tools").innerHTML = project.tools.map(item => `<span>${item}</span>`).join("");
      $("#modal-skills").innerHTML = project.skills.map(item => `<span>${item}</span>`).join("");
      $("#modal-did").innerHTML = project.did.map(item => `<li>${item}</li>`).join("");

      $("#modal-evidence").innerHTML = project.evidence.map(([label, url]) => {
        if (url) return `<a href="${url}" target="_blank" rel="noopener">${label} ↗</a>`;
        return `<span class="placeholder-link">${label} — add link</span>`;
      }).join("");

      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      $(".modal-close").focus();
    });
  });

  $(".modal-close").addEventListener("click", closeModal);
  $(".modal-backdrop").addEventListener("click", closeModal);
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
});
