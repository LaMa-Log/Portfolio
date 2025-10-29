import React from 'react';
import { motion } from 'framer-motion';
import website from '../../assets/website.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const projects = [
  {
    title: "Creative Branding",
    image: website,
    description: "Maecenas ante magna. Suspendisse potenti. Curabitur eleifend nisi non magna vulputate.",
    link: "/projects/branding",
    date: "Janvier 2023 - Présent",
  },
  {
    title: "Web Development",
    image: website,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/projects/web-development",
    date: "Février 2023 - Présent",
  },
  {
    title: "Design Systems",
    image: website,
    description: "Praesent euismod varius tellus, vel bibendum nunc interdum at. Donec vehicula diam vel metus.",
    link: "/projects/design-systems",
    date: "Mars 2023 - Présent",
  },
];

export default function Project() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className="px-6 mt-40 md:mt-40 lg:mt-0  bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300"
    >
      <motion.h1
        variants={fadeInUp}
        className="text-4xl font-bold text-center mb-12"
      >
        Projets
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            className="relative group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-gray-200 transition-all duration-300"
          >
            {/* Hover button */}
            <motion.a
              href={project.link}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute top-4 right-4 z-10 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-blue-600 hover:text-white"
            >
              Visiter
            </motion.a>

            {/* Image */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover bg-gray-100 dark:bg-gray-700"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <motion.div className="p-6">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
              <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">{project.date}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

