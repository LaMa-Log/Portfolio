import React from 'react'
import { motion } from "framer-motion";

const experiences = [
  {
    titre:"Projet plateforme de formation en ligne",
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
    titre: "Product Owner – Nancia",
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
    titre: "Product Owner Fonctionnel – Promabio SARL ",
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
    titre: "Product Owner – Promabio SARL",
    date: "Décembre 2023 – Décembre 2024 | Sur site",
    contenu: "Application mobile de collecte de données (traçabilité et productivité dans la filière vanille)",
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

export default function Experience() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, duration: 0.6 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="flex flex-col items-center justify-center px-6 py-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      {/* Titre */}
      <motion.h1
        variants={item}
        className="text-center font-bold text-4xl md:text-5xl mb-4"
      >
        Expériences professionnelles
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={item}
        className="text-center max-w-2xl mb-12 text-gray-600 dark:text-gray-300 leading-relaxed"
      >
        Voici un aperçu de mes expériences professionnelles, illustrant mes
        compétences techniques, ma rigueur et ma capacité à collaborer dans un
        environnement Agile.
      </motion.p>

      {/* Grille */}
      <motion.div
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                {exp.titre}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                <span className="font-semibold">Contenu :</span> {exp.contenu}
              </p>

              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                {exp.descriptions.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.badges.map((badge, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-indigo-600 text-white rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-right text-xs text-gray-500 mt-4 font-medium">
              {exp.date}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
