
import React from "react";

const experiences = [
  {
    titre:"Product Owner Senior — Plateforme de Formation en Ligne",
    Entreprise:"TEM France",
    date: "Septembre 2025 – Aujourd’hui | Remote",
    contenu: "Conception et mise en place d’une plateforme de formation en ligne",
    descriptions: [
      "Pilotage de bout en bout : maquettes (Figma), schémas fonctionnels (Draw.io), supervision du développement, tests, déploiement et maintenance",
      "Coordination d’une équipe de développeurs Full Stack dans un cadre Agile.",
      "Définition et communication de la vision produit en alignant objectifs business et attentes utilisateurs",
      "Mise en place d’indicateurs de performance Agile (KPIs, vélocité, burn-down chart)",
      "Création d’un climat de confiance et de motivation au sein de l’équipe"
    ],
    badges: ["React.JS", "Tailwind CSS", "Node.js", "MongoDB", "Postman"]
  },
    {
    titre: "Product Owner — Logiciel de Transport Maritime ",
    Entreprise:"Saint Jude",
    date: "Juin 2025 – Août 2025 | Remote",
    contenu: "Développement d’un logiciel et d’une application mobile de gestion de marchandises et transport maritime",
    descriptions: [
      "Gestion complète du cycle produit : conception, analyse de l’existant, rédaction de user stories, animation des cérémonies Agile, tests, déploiement et optimisation.",
      "Collaboration directe avec le client pour affiner la vision produit .",
      "Accompagnement du client dans la priorisation stratégique du backlog.",
      "Mise en place d’un processus d’amélioration continue basé sur feedback client.",
      "Garantie de la satisfaction totale du client ."
    ],
    badges: ["React.JS", "Tailwind CSS", "Node.js", "MongoDB", "Postman","Express.js"]
  },
    {
    titre: "Product Owner Fonctionnel – Intranet Collaboratif",
    Entreprise:"Promabio SARL",
    date: "Janvier 2025 – Mai 2025 | Sur site",
    contenu: "Déploiement d’un intranet collaboratif",
    descriptions: [
      " Analyse de l’existant, rédaction du cahier des charges et des user stories",
      "Gestion du backlog et pilotage Agile",
      "Supervision du développement, tests et hébergement de la plateforme",
      "Définition et communication de la roadmap",
      "Développement d’un cadre de travail favorisant la responsabilisation de l’équipe"
    ],
    badges: ["React.JS", "Tailwind CSS", "Node.js", "MongoDB", "Postman","Supabase", "Render", "Jira", "Figma"]
  },
    {
    titre: "Product Owner – Application Mobile de Collecte de Données",
    Entreprise:"Promabio SARL",
    date: "Décembre 2023 – Décembre 2024 | Sur site",
    contenu: "Application mobile de traçabilité et productivité dans la filière vanille",
    descriptions: [
      "Définition de la vision produit et alignement stratégique avec la direction et les producteurs",
      "Pilotage du backlog produit, rédaction des user stories et priorisation",
      "Collaboration étroite avec l’équipe de développement",
      "Mise en place d’indicateurs de valeur produit (traçabilité, productivité, satisfaction utilisateurs)",
      "Animation des Sprint Reviews et communication avec les parties prenantes",
      "Encadrement d’une petite équipe agile et supervision de la maintenance" 
    ],
    badges: ["React.JS", "Tailwind CSS", "Node.js", "MongoDB", "Postman", "React Native CLI", "Electron", "Realm"]
  },
      {
    titre: "Product Owner – Application Mobile Quiz Biblique",
    Entreprise:"Tily Eto Madagasikara",
    date: "Juillet 2023 – Août 2023",
    contenu: "Application mobile interactive pour un grand événement jeunesse",
    descriptions: [
      "Définition du cadrage fonctionnel",
      "Collaboration avec les développeurs et suivi du développement",
      "Organisation de la formation des utilisateurs et collecte de feedback ",
      "Supervision de la maintenance et optimisation"
    ],
    badges: ["React.JS", "Tailwind CSS", "Node.js", "MongoDB", "Postman", "React Native CLI", ]
  },
  {
    titre: "Product Owner – Logiciel de Gestion de Marchandises",
    Entreprise:"Nancia",
    date: "Mai 2023 – Juin 2023",
    contenu: "Mai 2023 – Juin 2023",
    descriptions: [
      "Rédaction des spécifications fonctionnelles et priorisation des besoins", 
      "Suivi du développement d’un logiciel de gestion (stocks, flux, reporting)",
       "Organisation des tests utilisateurs et validation des livrables",
      "Pilotage de la mise en production et supervision de la maintenance"
    ],
    badges: ["Vue.js", "Express.js", "Electron", "MongoDB", "Jira"," Teams" ]
  },
    {
    titre: "Product Owner – Site Internet Promabio SARL",
    Entreprise:"Promabio SARL",
    date: "Octobre 2021 – Novembre 2021",
    contenu: "Développement et mise en ligne d’un site web",
    descriptions: [
      "Définition des besoins métiers et validation des maquettes",
      "Suivi du développement et de l’hébergement",
      "Coordination avec les développeurs pour garantir la livraison"
    ],
    badges: ["PHP", "Symfony" ]
  },
  {
    titre: "Product Owner – Logiciel de gestion du flux de transformation de vanille",
    Entreprise:"Promabio SARL",
    date: "Avril 2020 – Septembre 2021",
    contenu: "Logiciel de suivi et de traçabilité du processus de transformation de la vanille",
    descriptions: [
      "Analyse des processus métiers",
      "Rédaction du cahier des charges fonctionnel et priorisation",
      "Suivi du développement de l’outil de gestion (triage, échaudage, classement)", 
      "Mise en production et accompagnement des utilisateurs"
    ],
    badges: ["PHP","CodeIgniter" ]
  },
]

const Experiences: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-10 bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-100">
        Expériences Professionnelles
      </h2>
      <p className="text-center text-gray-300 p-8 ">
        Au fil de mes projets, j’ai eu l’opportunité de piloter la conception, le développement et la mise en œuvre de solutions numériques variées, allant d’applications web et mobiles à des plateformes collaboratives.
        Ces expériences m’ont permis de renforcer mes compétences en gestion de produit, coordination d’équipes agiles et communication entre les parties prenantes.
        Chaque mission a été une occasion d’allier vision stratégique et exécution technique, tout en veillant à la qualité et à la valeur livrée aux utilisateurs.
      </p>

      <div className="flex flex-col gap-8">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="bg-gray-800 shadow-lg rounded-2xl p-6 md:p-8 border border-gray-700 hover:shadow-xl  hover:border-blue-500 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-1">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-100">
                {exp.titre}
              </h3>
              <span className="mt-2 md:mt-0 text-sm text-gray-400 italic">
                {exp.date}
              </span>
            </div>

            <p className="text-base text-blue-400 font-medium mb-6">
              {exp.Entreprise}
            </p>

            <p className="text-gray-300 mb-3">
              {exp.contenu}
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
              {exp.descriptions.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.badges.map((badge, k) => (
                <span
                  key={k}
                  className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences