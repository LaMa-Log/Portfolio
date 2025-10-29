import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

type Outil = {
  name: string;
  niveau: "base" | "bon" | "avancé";
};

type Categorie = {
  title: string;
  outils: Outil[];
};

const competences: Categorie[] = [
  {
    title: "Product Owner ",
    outils: [
      { name: "Stratégie Produit", niveau: "avancé" },
      { name: "Méthoodologie Agiles", niveau: "avancé" },
      { name: "Amélioration procesus", niveau: "avancé" },
      { name: "Gestion du Backlog", niveau: "avancé" },
    ],
  },
  {
    title: "Méthodologie",
    outils: [
      { name: "Agile", niveau: "avancé" },
      { name: "Scrum", niveau: "avancé" },
      { name: "Kanban", niveau: "avancé" },
    ],
  },
  {
    title: "Outils de gestion de backlog",
    outils: [
      { name: "Jira", niveau: "avancé" },
      { name: "Trello", niveau: "bon" },
      { name: "Notion", niveau: "avancé" },
      { name: "Confluence", niveau: "bon" },

    ],
  },

    {
    title: "Outils de concétion de prototypage",
    outils: [
      { name: "Figma", niveau: "bon" },
      { name: "Draw.io", niveau: "bon" },
    ],
  },

    {
    title: "Bases de données",
    outils: [
      { name: "MySQL", niveau: "base" },
      { name: "SQL", niveau: "bon" },
      { name: "MongoDB", niveau: "avancé" },
    ],
  },

      {
    title: "Outils de développement",
    outils: [
      { name: "Javascript", niveau: "avancé" },
      { name: "Typescript", niveau: "bon" },
      { name: "React.Js", niveau: "bon" },
      { name: "Express.Js", niveau: "bon" },
    ],
  },

];

export default function Competence() {
  const getBadgeColor = (niveau: string) => {
    switch (niveau) {
      case "base":
        return "bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
      case "bon":
        return "bg-blue-500/20 text-blue-400";
      case "avancé":
        return "bg-green-500/20 text-green-400";
      default:
        return "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className="mb-10 px-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300"
    >
      {/* Titre */}
      <motion.div variants={fadeInUp} className="flex flex-col w-full border-b-2 border-gray-300 dark:border-gray-700 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white tracking-tight leading-snug">
            Compétences
          </h1>
          <div className="flex gap-3">
            <span className="px-3 py-1 rounded-full bg-gray-300 dark:bg-gray-700 font-medium text-gray-800 dark:text-gray-200">Base</span>
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 font-medium">Bon</span>
            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 font-medium">Avancé</span>
          </div>
        </div>
      </motion.div>

      {/* Intro */}
      <motion.p
        variants={fadeInUp}
        className="text-center md:text-base text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
      >
        Voici un aperçu des compétences techniques que j’ai acquises au fil de mes expériences et de mes projets. 
        Chaque domaine regroupe les outils et technologies que je maîtrise à différents niveaux, allant des bases aux connaissances avancées.
      </motion.p>

      {/* Grille */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {competences.map((cat, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              {cat.title}
            </h2>
            <div className="flex flex-wrap gap-3">
              {cat.outils.map((outil, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-1 rounded-full text-sm font-medium ${getBadgeColor(outil.niveau)} transition-all duration-300 cursor-default`}
                >
                  {outil.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
