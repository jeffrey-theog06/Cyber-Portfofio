# J Jeffrey Shalom — Cybersecurity Portfolio

> Personal cybersecurity portfolio showcasing hands-on security labs, CTF competition records, open-source contributions, and technical research.

🌐 **Live Site:** [jeffrey-theog06.github.io/Cyber-Portfofio](https://jeffrey-theog06.github.io/Cyber-Portfofio/)

---

## About

This is a static portfolio site built from scratch with vanilla HTML, CSS, and JavaScript. It is designed to reflect a genuine security engineering background — not just a list of tools, but documented labs, real competition results, and honest evidence of hands-on work.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 (semantic) |
| Styling | Vanilla CSS (custom design system, no frameworks) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Plus Jakarta Sans + DM Mono (Google Fonts) |
| Hosting | GitHub Pages |

---

## Features

- **Interactive CLI Terminal** — Visitors can type commands (`whoami`, `labs`, `ctfs`, `rig`, `contact`, `help`) or click quick-command chips to explore the portfolio like a shell session.
- **Full-Width CTF & Milestone Timeline** — Structured chronological stream with category filter pills (All, CTF Competitions, Conferences, Upcoming), date chips, result badges, and challenge breakdown details.
- **Security Lab Case Studies** — Modal-based deep-dives for each project covering: why it was built, objective, tools, what was executed, skills developed, and outcome.
- **Lab Workbench & Rig Specs** — Detailed About section listing real home lab hardware, hypervisors, SIEM stack, offensive toolbelt, and scripting setup.
- **Key Signals Ribbon** — Quick-glance metrics: labs built, CTF placements, platform rankings, and open-source contributions.
- **One-Click Email Copy** — Clipboard button with live tooltip confirmation in the hero.
- **Scroll Reveal Animations** — IntersectionObserver-driven staggered entrance animations.
- **Fully Responsive** — Mobile-first breakpoints, hamburger nav, and stacked layouts on small screens.
- **Custom SVG Favicon** — Cyber terminal prompt icon (`>_`).

---

## Sections

| # | Section | Content |
|---|---|---|
| Hero | Identity | Name, status pill, interactive terminal, quick links |
| 01 | About | Background, philosophy, lab workbench specs |
| 02 | Security Labs | SafeLine WAF, pfSense, Wazuh SIEM, Airia AI SOC |
| 03 | CTFs & Journey | Timeline with competition records, OWASP events, upcoming targets |
| 04 | Learning Platforms | TryHackMe, Hack The Box, Hackosquad |
| 05 | Credentials | Google, Cisco, Deloitte, Meta certifications |
| 06 | Community | Open-source PRs, Medium writing, OWASP chapter, peer mentorship |
| 07 | Contact | Email, GitHub, LinkedIn, Medium, TryHackMe |

---

## Files

```
├── index.html       — Full page structure and content
├── style.css        — Complete custom design system and responsive layout
├── script.js        — Interactive terminal engine, timeline filter, modal, clipboard
├── favicon.svg      — Custom cyber terminal SVG favicon
└── README.md        — This file

---

## Local Development

To preview the site locally with live no-cache serving:

```bash
python server.py
```

Then open `http://localhost:3000` in your browser. Use `Ctrl + Shift + R` to hard reload after any changes.

---

*Built by J Jeffrey Shalom · Coimbatore, India*
