export const SKILLS = [
  {
    cat: "Systèmes & Infrastructure",
    icon: "Server",
    items: [
      "Windows",
      "Windows Server",
      "Linux",
      "Active Directory",
      "VMware",
      "Proxmox VE",
      "Docker",
      "Nextcloud"
    ]
  },
  {
    cat: "Réseaux",
    icon: "Network",
    items: [
      "TCP/IP",
      "DHCP",
      "DNS",
      "VLAN",
      "Wi-Fi",
      "pfSense",
      "Ubiquiti UniFi"
    ]
  },
  {
    cat: "Microsoft",
    icon: "Cloud",
    items: [
      "Microsoft 365",
      "Entra ID",
      "Intune",
      "Exchange Online"
    ]
  },
  {
    cat: "Cybersécurité",
    icon: "Shield",
    items: [
      "Nmap",
      "Nikto",
      "OWASP ZAP",
      "pfSense"
    ]
  },
  {
    cat: "Bases de données",
    icon: "Database",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Prisma"
    ]
  },
  {
    cat: "Développement",
    icon: "Code2",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Python",
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "NestJS",
      "Django",
      "Flutter",
      "Dart",
      "Android",
      "Android SDK"
    ]
  },
  {
    cat: "Déploiement & Mise en ligne",
    icon: "Rocket",
    items: [
      "Vercel",
      "Render",
      "Git",
      "GitHub",
      "Déploiement d'applications web",
      "Mise en production"
    ]
  }
];

export const EDUCATION = [
  {
    id: "edu-1",
    year: "2024",
    degree: "Licence en Informatique",
    specialty: "Administration Système et Réseau",
    school: "INFOCENTRE, Soavimbahoaka",
    featured: true
  },
  {
    id: "edu-2",
    year: "2021",
    degree: "Brevet d'Étude Professionnelle",
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
    desc: "Administration et support de l'environnement informatique, gestion des systèmes et services Microsoft, assistance utilisateurs, maintenance des équipements et participation à des projets de digitalisation et de développement de solutions internes.",
    tags: [
      "Microsoft 365", "Entra ID", "Intune", "Exchange Online",
      "Support IT", "Réseaux", "Ubiquiti UniFi", "Systèmes"
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
    name: "Genesis Capital",
    icon: "Globe",
    color: "var(--bg3)",
    desc: "Conception et développement d'un site web professionnel pour une entreprise du secteur de l'assurance et du courtage.",
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "Site web professionnel",
    featured: true
  },
  {
    name: "G-Stock",
    icon: "Package",
    color: "var(--bg3)",
    desc: "Application de gestion de stock. Gestion des produits, catégories, fournisseurs, clients et magasins. Gestion des ventes, achats et mouvements de stock. Gestion de caisse avec tableau de bord et statistiques.",
    techs: ["Django", "Python", "SQLite"],
    category: "Application web",
    featured: true
  },
  {
    name: "Système de Gestion des Évaluations",
    icon: "ClipboardCheck",
    color: "var(--bg3)",
    desc: "Système complet de gestion des évaluations du personnel comprenant les campagnes d'évaluation, l'auto-évaluation, la validation des managers et RH, la gestion des objectifs, compétences et signatures, avec un tableau de bord interactif.",
    techs: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS"],
    category: "Application métier",
    featured: true
  },
  {
    name: "Infrastructure Nextcloud",
    icon: "Lock",
    color: "var(--bg3)",
    desc: "Mise en place d'un serveur Nextcloud sur Debian 12 en environnement virtualisé. Configuration réseau avec pfSense, filtrage par adresse MAC, gestion des accès et sécurisation de l'infrastructure.",
    techs: ["Nextcloud", "Debian", "Proxmox", "Linux", "pfSense"],
    category: "Infrastructure"
  },
  {
    name: "TIKERA",
    icon: "Ticket",
    color: "var(--bg3)",
    desc: "Plateforme de billetterie en ligne. Interface utilisateur dynamique, système d'envoi d'emails, gestion des utilisateurs et gestion complète des billets.",
    techs: ["Next.js", "NestJS", "Tailwind CSS", "PostgreSQL"],
    category: "Plateforme web"
  },
  {
    name: "Job Auto Apply",
    icon: "FileText",
    color: "var(--bg3)",
    desc: "Application d'envoi automatisé de candidatures. Gestion des entreprises et des emails, génération dynamique de lettres de motivation, tableau de bord avec statistiques.",
    techs: ["React", "Node.js", "Express.js", "Vercel"],
    category: "Application web"
  },
  {
    name: "Système 1-3-5",
    icon: "CheckCircle",
    color: "var(--bg3)",
    desc: "Solution de gestion de stratégie de paris basée sur la roulette, avec gestion des mises et logique métier. Projet freelance réalisé pour un client réel.",
    techs: ["React", "Vite", "TypeScript", "Tailwind CSS", "Vercel"],
    category: "Finance"
  },
  {
    name: "Cash App",
    icon: "Wallet",
    color: "var(--bg3)",
    desc: "Application Android de gestion de cashpoint. Suivi des transactions, entrées et sorties d'argent, avec tableau de bord et gestion des utilisateurs.",
    techs: ["Flutter", "Dart", "NestJS", "Render"],
    category: "Application mobile",
    featured: true
  }
];

export const ACHIEVEMENTS = [
  {
    icon: "Wifi",
    title: "Déploiement UniFi",
    desc: "Déploiement et configuration des points d'accès Ubiquiti UniFi",
    category: "Réseau"
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
    desc: "Configuration d'imprimantes et mise en place du Scan-to-Email M365",
    category: "Support"
  },
  {
    icon: "ClipboardCheck",
    title: "Système de pointage",
    desc: "Installation, configuration et mise en production du système de pointage",
    category: "Infrastructure"
  },
  {
    icon: "FileCheck",
    title: "Système d'évaluations",
    desc: "Développement d'un système de gestion des évaluations du personnel avec validation RH",
    category: "Développement"
  }
];
