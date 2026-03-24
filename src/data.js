export const SKILLS = [
  {
    cat: "Systèmes",
    icon: "Monitor",
    items: [
      { name: "Linux (Ubuntu, Debian, Mint, Parrot)", pct: 88 },
      { name: "Windows Server", pct: 82 },
      { name: "Active Directory", pct: 82 },
      { name: "Maintenance et réinstallation des systèmes", pct: 85 }
    ]
  },
  {
    cat: "Réseaux & Support",
    icon: "Network",
    items: [
      { name: "Configuration réseau (DNS, DHCP)", pct: 85 },
      { name: "Diagnostic et résolution d'incidents", pct: 84 },
      { name: "Support IT (niveau 1 / niveau 2)", pct: 85 },
      { name: "Gestion des utilisateurs et accès", pct: 83 }
    ]
  },
  {
    cat: "Virtualisation & DevOps",
    icon: "Rocket",
    items: [
      { name: "Proxmox VE", pct: 85 },
      { name: "VMware", pct: 83 },
      { name: "Docker", pct: 72 }
    ]
  },
  {
    cat: "Sécurité",
    icon: "Lock",
    items: [
      { name: "pfSense", pct: 80 },
      { name: "Filtrage réseau (MAC)", pct: 78 },
      { name: "Nmap", pct: 75 },
      { name: "Notions OWASP", pct: 76 }
    ]
  },
  {
    cat: "Développement",
    icon: "Code2",
    items: [
      { name: "Python", pct: 80 },
      { name: "Django", pct: 78 },
      { name: "React", pct: 85 },
      { name: "Node.js", pct: 80 },
      { name: "PHP", pct: 75 },
      { name: "C++ (notions)", pct: 65 }
    ]
  },
  {
    cat: "Scripting & Automatisation",
    icon: "Zap",
    items: [
      { name: "Bash", pct: 82 },
      { name: "Batch (Windows)", pct: 78 }
    ]
  },
  {
    cat: "Bases de données",
    icon: "Database",
    items: [
      { name: "PostgreSQL", pct: 82 },
      { name: "MySQL", pct: 80 },
      { name: "SQLite", pct: 78 }
    ]
  },
  {
    cat: "Outils",
    icon: "Wrench",
    items: [
      { name: "Git / GitHub", pct: 88 },
      { name: "WampServer", pct: 80 },
      { name: "Apache / Nginx", pct: 82 },
      { name: "Nextcloud", pct: 85 },
      { name: "WinDev", pct: 70 }
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
    company: "Nexus-SARLU",
    role: "Stagiaire Administration Systèmes & Réseaux",
    period: "Février – Présent",
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
