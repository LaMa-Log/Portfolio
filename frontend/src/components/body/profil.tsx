import React from 'react';
import { motion } from 'framer-motion';
import StackedListBadgeActionButton from './profil_parcours';
import { FaAddressCard, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Profil() {
  // Animation de base pour les blocs
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="w-full min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="max-w-7xl mx-auto w-full space-y-8">
        
        {/* Titre + Description */}
        <motion.div className="text-center space-y-2" variants={fadeInUp}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Profil</h1>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300 max-w-5xl mx-auto px-2">
            Product Owner Senior avec plus de 5 ans d’expérience dans la conception et le pilotage de produits digitaux (logiciels, applications mobiles, plateformes web).<br />
            Spécialiste des méthodologies Agile/Scrum, j’ai dirigé et accompagné des équipes de 1 à 6 développeurs. Véritable leader et motivateur, je transforme la vision business en solutions digitales concrètes et performantes.<br />
            Passionné par la technologie et l’innovation, je recherche des missions freelance en remote au sein d’ESN francophones en Europe.
          </p>
        </motion.div>

        {/* Grille Info + Parcours */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 items-start">

          {/* Info-contact + Langues */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6"
            variants={fadeInUp}
          >
            <motion.div
              className="shadow-md rounded-2xl p-4 sm:p-2 transition-all duration-300 hover:shadow-lg bg-white dark:bg-gray-800"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <h2 className="text-xl sm:text-2xl text-center font-bold mb-6">Info-contact</h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex flex-wrap sm:flex-nowrap items-center gap-3 text-sm sm:text-base">
                  <FaAddressCard className="text-indigo-500 text-lg sm:text-xl" />
                  <span>Product Owner Senior</span>
                </li>
                <li className="flex flex-wrap sm:flex-nowrap items-start gap-3 text-sm sm:text-base">
                  <FaMapMarkerAlt className="text-indigo-500 text-lg sm:text-xl mt-1" />
                  <span>P.O. Box 14, Ornella Center, Antalaha 206, Madagascar</span>
                </li>
                <li className="flex flex-wrap sm:flex-nowrap items-center gap-3 text-sm sm:text-base">
                  <FaPhone className="text-indigo-500 text-lg sm:text-xl" />
                  <span>+261 32 59 435 52</span>
                </li>
                <li className="flex flex-wrap sm:flex-nowrap items-center gap-3 text-sm sm:text-base">
                  <FaEnvelope className="text-indigo-500 text-lg sm:text-xl" />
                  <span>njeva@mahiratra-groupe.com</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Parcours Académiques */}
          <motion.div
            className="w-full lg:w-3/4 space-y-8"
            variants={fadeInUp}
          >
            <motion.div
              className="bg-gray-800 text-gray-100 shadow-md rounded-2xl p-4 sm:p-4 transition-all duration-300 hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <h2 className="text-xl sm:text-2xl text-center font-bold mb-6">Parcours Académiques</h2>
              <StackedListBadgeActionButton />
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </motion.section>
  );
}
