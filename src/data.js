export const SKILLS = [
  {
    cat: "Administration Système",
    icon: "Server",
    items: [
      { name: "Windows Server", pct: 85 },
      { name: "Active Directory", pct: 85 },
      { name: "Microsoft 365", pct: 88 },
      { name: "Microsoft Entra ID", pct: 85 },
      { name: "Microsoft Intune", pct: 82 },
      { name: "Exchange Online", pct: 85 }
    ]
  },
  {
    cat: "Réseau",
    icon: "Network",
    items: [
      { name: "Fortinet FortiGate", pct: 82 },
      { name: "Ubiquiti UniFi", pct: 85 },
      { name: "TCP/IP", pct: 88 },
      { name: "DHCP / DNS", pct: 88 },
      { name: "VLAN", pct: 80 },
      { name: "Wi-Fi Enterprise", pct: 82 }
    ]
  },
  {
    cat: "Cloud & Collaboration",
    icon: "Cloud",
    items: [
      { name: "Microsoft Teams", pct: 90 },
      { name: "SharePoint Online", pct: 82 },
      { name: "OneDrive", pct: 85 },
      { name: "Power Automate", pct: 78 },
      { name: "Microsoft Forms", pct: 80 },
      { name: "Power BI", pct: 75 }
    ]
  },
  {
    cat: "Développement",
    icon: "Code2",
    items: [
      { name: "React", pct: 88 },
      { name: "Next.js", pct: 82 },
      { name: "NestJS", pct: 78 },
      { name: "Node.js", pct: 85 },
      { name: "TypeScript", pct: 82 },
      { name: "PostgreSQL / MySQL", pct: 82 }
    ]
  },
  {
    cat: "Virtualisation",
    icon: "Rocket",
    items: [
      { name: "VMware", pct: 85 },
      { name: "Proxmox VE", pct: 88 },
      { name: "Docker", pct: 75 }
    ]
  },
  {
    cat: "Cybersécurité",
    icon: "Lock",
    items: [
      { name: "OWASP ZAP", pct: 75 },
      { name: "Nmap", pct: 78 },
      { name: "Nikto", pct: 72 },
      { name: "Notions pfSense", pct: 80 }
    ]
  },
  {
    cat: "Scripting & Automatisation",
    icon: "Zap",
    items: [
      { name: "Bash", pct: 85 },
      { name: "PowerShell", pct: 80 },
      { name: "Batch (Windows)", pct: 78 }
    ]
  },
  {
    cat: "Bases de données",
    icon: "Database",
    items: [
      { name: "PostgreSQL", pct: 85 },
      { name: "MySQL", pct: 82 },
      { name: "SQLite", pct: 80 }
    ]
  }
];

export const EDUCATION = [
  {
    id: "edu-1",
    year: "2024",
    degree: "Licence en Informatique",
    specialty: "Administration Système et Réseau",
    school: "INFOCENTRE, Soavimbahoaka"
  },
  {
    id: "edu-2",
    year: "2021",
    degree: "Brevet d'Étude Professionnel",
    specialty: "Comptabilité",
    school: "Lycée Privé Stella Maris, Toamasina"
  },
  {
    id: "edu-3",
    year: "2021",
    degree: "Baccalauréat Technologique",
    specialty: "",
    school: "Lycée Privé Stella Maris, Toamasina"
  },
  {
    id: "edu-4",
    year: "2020",
    degree: "Baccalauréat Série A2",
    specialty: "",
    school: "Lycée Privé Alpha, Toamasina"
  }
];

export const LANGUAGES = [
  { name: "Malagasy", level: "Langue maternelle" },
  { name: "Français", level: "Lire, écrire et parler" },
  { name: "Anglais", level: "Lire et écrire" }
];

export const QUALITIES = [
  "Sens de l'organisation et rigueur administrative",
  "Discrétion et respect de la confidentialité",
  "Autonomie et esprit d'équipe",
  "Bon relationnel et sens du service",
  "Capacité d'adaptation dans des environnements professionnels variés"
];

export const EXPS = [
  {
    company: "AFG Assurances — Antananarivo Ivandry",
    role: "Administrateur Systèmes & Réseaux",
    period: "Juin 2026 – Aujourd'hui",
    icon: "ShieldCheck",
    desc: "Administration complète de l'infrastructure IT : Microsoft 365, Entra ID, Intune, Exchange Online, SharePoint et Teams. Gestion réseau avec Fortinet FortiGate et Ubiquiti UniFi. Support utilisateurs, impression, système de pointage. Participation au développement d'un système de gestion des évaluations et à l'automatisation des processus internes.",
    tags: [
      "Microsoft 365", "Entra ID", "Intune", "Exchange Online",
      "Fortinet FortiGate", "Ubiquiti UniFi", "SharePoint",
      "Microsoft Teams", "Power Automate", "Support IT"
    ],
    details: [
      {
        category: "Infrastructure",
        items: [
          "Administration Microsoft 365, Entra ID, Intune",
          "Gestion des utilisateurs et des licences",
          "Support Microsoft Teams, Exchange Online, SharePoint"
        ]
      },
      {
        category: "Réseau",
        items: [
          "Déploiement de 3 points d'accès Ubiquiti UniFi",
          "Administration du contrôleur UniFi",
          "Administration du pare-feu Fortinet FortiGate",
          "Configuration réseau et dépannage"
        ]
      },
      {
        category: "Support IT",
        items: [
          "Installation et configuration des postes utilisateurs",
          "Maintenance informatique et assistance utilisateurs",
          "Diagnostic des incidents"
        ]
      },
      {
        category: "Impression",
        items: [
          "Configuration d'imprimantes professionnelles Canon et HP",
          "Mise en place du Scan-to-Email avec Microsoft 365"
        ]
      },
      {
        category: "Système de pointage",
        items: [
          "Installation, configuration et déploiement",
          "Mise en production et support"
        ]
      },
      {
        category: "Développement",
        items: [
          "Système de gestion des évaluations du personnel",
          "Campagnes d'évaluation, auto-évaluation, validation managers/RH",
          "Gestion des objectifs, compétences et signatures",
          "Tableau de bord et reporting"
        ]
      },
      {
        category: "Automatisation",
        items: [
          "Microsoft Power Automate, Forms, SharePoint",
          "Microsoft Teams, Power BI"
        ]
      }
    ]
  },
  {
    company: "Nexus-SARLU",
    role: "Stagiaire Administration Systèmes & Réseaux",
    period: "Janvier – Mars 2026",
    icon: "Server",
    desc: "Déploiement de solutions de stockage et virtualisation. Gestion des utilisateurs (LDAP / Active Directory). Réalisation d'audits de sécurité. Maintenance systèmes et support technique. Sécurisation des infrastructures.",
    tags: ["Proxmox", "Nextcloud", "LDAP", "Active Directory", "Audit Sécurité", "Infrastructure IT"]
  },
  {
    company: "Freelance",
    role: "Développeur",
    period: "Novembre – Décembre 2025",
    icon: "Code",
    desc: "Développement d'un système de gestion de stratégies de paris basé sur la logique de la roulette. Conception de la logique métier. Collaboration avec un client international. Maintenance et amélioration du système.",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Freelance"]
  },
  {
    company: "ARO Assurance",
    role: "Stagiaire Administration & Gestion",
    period: "Juillet – Octobre 2025",
    icon: "Shield",
    desc: "Accueil et orientation des clients. Traitement des dossiers administratifs. Organisation des opérations. Développement du sens du service client.",
    tags: ["Administration", "Gestion Administrative", "Relation Client", "Accueil Clients"]
  },
  {
    company: "Ministère de l'Enseignement Supérieur",
    role: "Stagiaire IT",
    period: "Août – Novembre 2024",
    icon: "Building2",
    desc: "Déploiement d'environnements virtualisés. Mise en place de services réseau. Configuration de solutions de sécurité. Maintenance des systèmes.",
    tags: ["Virtualisation", "VMware", "Debian", "Ubuntu", "pfSense", "Services Réseau"]
  }
];

export const PROJECTS = [
  {
    name: "Système de Gestion des Évaluations",
    icon: "ClipboardCheck",
    color: "var(--bg3)",
    desc: "Système complet de gestion des évaluations du personnel comprenant les campagnes d'évaluation, l'auto-évaluation, la validation des managers et RH, la gestion des objectifs, compétences et signatures, avec un tableau de bord interactif.",
    techs: ["React", "Node.js", "Microsoft 365", "Power Automate", "SharePoint"],
    category: "Enterprise",
    featured: true
  },
  {
    name: "Infrastructure Nextcloud",
    icon: "Lock",
    color: "var(--bg3)",
    desc: "Serveur de stockage sécurisé. Mise en place d'un serveur Nextcloud sur Debian 12. Déploiement en environnement virtualisé. Configuration réseau avec pfSense. Filtrage réseau par adresse MAC. Gestion des accès et sécurisation infrastructure.",
    techs: ["Nextcloud", "Debian 12", "Proxmox", "pfSense", "Linux"],
    category: "Infrastructure"
  },
  {
    name: "G-Stock",
    icon: "Package",
    color: "var(--bg3)",
    desc: "Application de gestion de magasin. Gestion produits, catégories, fournisseurs, clients et magasins. Gestion ventes, achats et mouvements stock. Gestion caisse (apports, dépenses). Tableau de bord avec statistiques.",
    techs: ["Django", "Python", "SQLite"],
    category: "Web App"
  },
  {
    name: "TIKERA",
    icon: "Ticket",
    color: "var(--bg3)",
    desc: "Plateforme de billetterie en ligne. Interface utilisateur dynamique. Système d'envoi d'emails (notifications). Gestion des utilisateurs. Gestion complète des billets.",
    techs: ["React", "Node.js", "PostgreSQL"],
    category: "Full Stack"
  },
  {
    name: "Job Auto Apply",
    icon: "FileText",
    color: "var(--bg3)",
    desc: "Application d'envoi automatisé de candidatures. Gestion des entreprises et des emails. Génération dynamique de lettres de motivation. Tableau de bord avec statistiques.",
    techs: ["React", "Node.js", "Express.js"],
    category: "Automation"
  },
  {
    name: "Système 1-3-5",
    icon: "CheckCircle",
    color: "var(--bg3)",
    desc: "Gestion de stratégie de paris basée sur la roulette. Gestion des mises et logique métier. Interface utilisateur moderne. Projet freelance avec client réel.",
    techs: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    category: "Finance"
  }
];

export const ACHIEVEMENTS = [
  {
    icon: "Wifi",
    title: "Déploiement UniFi",
    desc: "Déploiement de 3 points d'accès Ubiquiti UniFi et administration du contrôleur",
    category: "Réseau"
  },
  {
    icon: "Shield",
    title: "Administration FortiGate",
    desc: "Administration du pare-feu Fortinet FortiGate et configuration réseau",
    category: "Sécurité"
  },
  {
    icon: "Cloud",
    title: "Microsoft 365",
    desc: "Administration complète de Microsoft 365, Entra ID et Intune",
    category: "Cloud"
  },
  {
    icon: "Users",
    title: "Gestion des utilisateurs",
    desc: "Gestion des utilisateurs, licences et support Microsoft Teams",
    category: "Administration"
  },
  {
    icon: "Printer",
    title: "Scan-to-Email",
    desc: "Configuration d'imprimantes Canon/HP et mise en place du Scan-to-Email M365",
    category: "Support"
  },
  {
    icon: "ClipboardCheck",
    title: "Système de pointage",
    desc: "Installation, configuration, déploiement et mise en production du système de pointage",
    category: "Infrastructure"
  },
  {
    icon: "FileCheck",
    title: "Système d'évaluations",
    desc: "Développement d'un système de gestion des évaluations du personnel avec validation RH",
    category: "Développement"
  },
  {
    icon: "Workflow",
    title: "Automatisation M365",
    desc: "Étude de l'automatisation des processus internes avec Power Automate, Forms et Power BI",
    category: "Automatisation"
  }
];
