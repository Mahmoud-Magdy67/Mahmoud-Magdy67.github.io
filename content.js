/* Edit this file to update the portfolio. Add real projects to portfolio.projects. */
window.portfolio = {
  profile: {
    name: "Mahmoud Magdy",
    email: "mahmoudmagdy2001@proton.me",
    linkedin: "https://linkedin.com/in/mahmoudmagdy76",
    github: "https://github.com/Mahmoud-Magdy67",
    cv: "assets/Mahmoud_Magdy_CV.pdf",
    photo: "assets/profile-placeholder.svg"
  },
  projects: [
    // Add one object per real project. Example:
    // { title: { en: "Project name", fr: "Nom du projet" },
    //   description: { en: "What it does", fr: "Ce qu’il fait" },
    //   tools: ["Power BI", "SQL"], image: "assets/project-name.jpg",
    //   demoUrl: "https://...", repoUrl: "https://github.com/..." }
  ],
  en: {
    nav: { about: "About", results: "Results", experience: "Experience", projects: "Projects", skills: "Skills", education: "Education", contact: "Contact" },
    hero: {
      eyebrow: "OPEN TO WORK-STUDY OPPORTUNITIES · PARIS, FRANCE",
      role: "Data Analyst",
      lead: "Turning complex data into clear decisions.",
      intro: "Power BI, SQL, Python and GCP. Seeking a 12-month work-study contract: 3 weeks at the company, 1 week at school.",
      viewProjects: "View projects", contact: "Contact me", availability: "Available for a 12-month alternance", photoAlt: "Abstract placeholder portrait for Mahmoud Magdy"
    },
    section: { about: "About", results: "Selected impact", experience: "Experience", projects: "Projects", skills: "Skills", education: "Education", contact: "Let's talk" },
    about: {
      kicker: "A LITTLE ABOUT ME",
      text: "I’m a Master’s student at EDC Paris Business School with hands-on experience in data analysis, reporting and administrative management. I work across Power BI, SQL, Python, GCP and AI automation, and bring an international perspective to every project. I’m looking for a 12-month work-study contract where I can help a team turn data into better decisions. Outside work, I enjoy photography and reading.",
      location: "Based in Paris, France", languages: "French · English · Arabic (native)", cv: "Download CV", cvSoon: "CV coming soon"
    },
    results: {
      intro: "Practical improvements delivered through reporting and automation at Tay Pharmacy.",
      items: [
        { value: "−26%", label: "report preparation time" },
        { value: "−79%", label: "stock-outs" },
        { value: "66", label: "stores covered" },
        { value: "20+", label: "reports automated" }
      ]
    },
    experience: [
      { role: "Data Analysis Trainer", company: "Make Technology (association)", period: "Sep 2026 — Present", points: ["Lead a bilingual eight-session beginner programme covering Excel, SQL, Python and Power BI through practical, progressive lessons.", "Guide participants through mini analysis projects, from exploration and cleaning to interactive dashboards and presentation."] },
      { role: "Freelance Data Analyst", company: "Remote", period: "Jul 2026 — Present", points: ["Run exploratory analyses and data quality checks across varied datasets to uncover trends, anomalies and opportunities.", "Help clients structure data and define key indicators for activity tracking and decisions."] },
      { role: "Data & Reporting Analyst", company: "Tay Pharmacy", period: "Apr 2026 — Jul 2026", points: ["Deployed Power BI dashboards for sales and financial forecasts, reducing report preparation time by 26%.", "Designed a BigQuery, Looker Studio and AI solution to detect stock-outs and analyse transfers across 66 stores, contributing to a 79% reduction in stock-outs.", "Built Python scripts to extract and transform CSV and HTML data, automating more than 20 reports and reducing processing from hours to minutes."] }
    ],
    projects: { intro: "Work worth sharing is on its way. These spaces are reserved for upcoming case studies.", soon: "Coming soon", title: "Project title", description: "Short description of the challenge, approach and outcome.", demo: "Live demo", code: "Code", imageAlt: "Placeholder for a future project preview" },
    skills: { intro: "A practical toolkit for analysis, reporting and automation.", groups: [
      { title: "Analysis & visualisation", items: ["Power BI", "DAX", "Power Query", "Looker Studio"] },
      { title: "Programming & data", items: ["Python", "SQL", "BigQuery"] },
      { title: "Office & reporting", items: ["Excel", "Reporting automation"] },
      { title: "Cloud & AI", items: ["GCP", "AI automation"] }
    ] },
    education: [
      { degree: "Master’s in Management, Data Science & Business Intelligence", school: "EDC Paris Business School · Paris, France", level: "BAC+5", period: "Sep 2026 — Dec 2027" },
      { degree: "Bachelor’s in Data Science", school: "Alexandria University · Egypt", level: "BAC+4 · Media Analysis minor", period: "Sep 2019 — Dec 2023" }
    ],
    contact: { intro: "I’m looking for a 12-month work-study role in data analytics. If your team needs someone who can turn data into useful answers, I’d love to hear from you.", email: "Email me", linkedin: "LinkedIn", github: "GitHub" },
    footer: "Built with curiosity and clear data.", switchLabel: "Switch language to French"
  },
  fr: {
    nav: { about: "À propos", results: "Résultats", experience: "Expérience", projects: "Projets", skills: "Compétences", education: "Formation", contact: "Contact" },
    hero: {
      eyebrow: "EN RECHERCHE D’ALTERNANCE · PARIS, FRANCE",
      role: "Data Analyst",
      lead: "Transformer les données complexes en décisions claires.",
      intro: "Power BI, SQL, Python et GCP. Je recherche une alternance de 12 mois : 3 semaines en entreprise, 1 semaine à l’école.",
      viewProjects: "Voir les projets", contact: "Me contacter", availability: "Disponible pour une alternance de 12 mois", photoAlt: "Portrait abstrait provisoire de Mahmoud Magdy"
    },
    section: { about: "À propos", results: "Résultats clés", experience: "Expérience", projects: "Projets", skills: "Compétences", education: "Formation", contact: "Échangeons" },
    about: {
      kicker: "QUELQUES MOTS SUR MOI",
      text: "Étudiant en master à l’EDC Paris Business School, j’ai une expérience concrète en analyse de données, reporting et gestion administrative. Je maîtrise Power BI, SQL, Python, GCP et l’automatisation par l’IA, avec un parcours international. Je recherche une alternance de 12 mois pour aider une équipe à prendre de meilleures décisions grâce aux données. En dehors du travail, j’aime la photographie et la lecture.",
      location: "Basé à Paris, France", languages: "Français · Anglais · Arabe (langue maternelle)", cv: "Télécharger le CV", cvSoon: "CV bientôt disponible"
    },
    results: {
      intro: "Des améliorations concrètes grâce au reporting et à l’automatisation chez Tay Pharmacy.",
      items: [
        { value: "−26 %", label: "de temps de préparation des rapports" },
        { value: "−79 %", label: "de ruptures de stock" },
        { value: "66", label: "magasins couverts" },
        { value: "20+", label: "rapports automatisés" }
      ]
    },
    experience: [
      { role: "Formateur en analyse de données", company: "Make Technology (association)", period: "Sept. 2026 — Aujourd’hui", points: ["Anime un programme bilingue de huit séances pour débutants sur Excel, SQL, Python et Power BI, avec une approche pratique et progressive.", "Accompagne les participants dans des mini-projets d’analyse, de l’exploration et du nettoyage aux tableaux de bord interactifs et à leur présentation."] },
      { role: "Data Analyst freelance", company: "À distance", period: "Juil. 2026 — Aujourd’hui", points: ["Réalise des analyses exploratoires et des contrôles qualité sur différents jeux de données pour repérer tendances, anomalies et pistes d’amélioration.", "Aide les clients à structurer leurs données et à définir des indicateurs clés pour suivre leur activité et décider."] },
      { role: "Analyste data & reporting", company: "Tay Pharmacy", period: "Avr. 2026 — Juil. 2026", points: ["A déployé des tableaux de bord Power BI pour le suivi des ventes et des prévisions financières, réduisant de 26 % le temps de préparation des rapports.", "A conçu une solution BigQuery, Looker Studio et IA pour détecter les ruptures de stock et analyser les transferts entre 66 magasins, contribuant à une baisse de 79 % des ruptures.", "A créé des scripts Python d’extraction et de transformation de données CSV et HTML, automatisant plus de 20 rapports et ramenant le traitement de plusieurs heures à quelques minutes."] }
    ],
    projects: { intro: "De nouveaux projets seront bientôt présentés ici. Ces emplacements sont réservés aux futures études de cas.", soon: "À venir", title: "Titre du projet", description: "Brève description du défi, de la méthode et du résultat.", demo: "Démo", code: "Code", imageAlt: "Emplacement provisoire pour l’aperçu d’un futur projet" },
    skills: { intro: "Des outils concrets pour l’analyse, le reporting et l’automatisation.", groups: [
      { title: "Analyse & visualisation", items: ["Power BI", "DAX", "Power Query", "Looker Studio"] },
      { title: "Programmation & données", items: ["Python", "SQL", "BigQuery"] },
      { title: "Bureautique & reporting", items: ["Excel", "Automatisation des rapports"] },
      { title: "Cloud & IA", items: ["GCP", "Automatisation par l’IA"] }
    ] },
    education: [
      { degree: "Master en management, Data Science & Business Intelligence", school: "EDC Paris Business School · Paris, France", level: "BAC+5", period: "Sept. 2026 — Déc. 2027" },
      { degree: "Licence en Data Science", school: "Université d’Alexandrie · Égypte", level: "BAC+4 · Spécialisation en analyse des médias", period: "Sept. 2019 — Déc. 2023" }
    ],
    contact: { intro: "Je recherche une alternance de 12 mois en analyse de données. Si votre équipe a besoin de transformer ses données en réponses utiles, échangeons.", email: "M’écrire", linkedin: "LinkedIn", github: "GitHub" },
    footer: "Conçu avec curiosité et le goût des données claires.", switchLabel: "Switch language to English"
  }
};
