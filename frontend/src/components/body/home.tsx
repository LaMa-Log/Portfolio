import React from 'react';
import { motion } from 'framer-motion';
import Njeva_Linkedin from '../../assets/Njeva_Linkedin.jpg';

// Animation réutilisable
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="w-full min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 py-10">
        
        {/* Texte */}
        <motion.div
          variants={fadeInUp}
          className="text-center md:text-left w-full md:w-1/2 space-y-6"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight break-words"
          >
            <span className="text-indigo-500">Product Owner Senior</span>
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug tracking-tight"
          >
            RANDRIAMANANTENASOA Njeva
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            Product Owner Senior | Expert Agile / Scrum | Leader d’équipes de développement<br />
            Full Remote | Freelance
          </motion.p>

          {/* Boutons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 w-full"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 sm:flex-none min-w-[130px] sm:min-w-[150px] bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
            >
              Contact
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 sm:flex-none min-w-[130px] sm:min-w-[150px] bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
            >
              Télécharger CV
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={fadeInUp}
          className="flex justify-center md:justify-end w-full md:w-1/2"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-gray-400 dark:border-gray-600 shadow-lg ring-2 ring-indigo-300 dark:ring-indigo-500 transition-transform duration-300"
          >
            <img
              src={Njeva_Linkedin}
              alt="photo de profil"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}
