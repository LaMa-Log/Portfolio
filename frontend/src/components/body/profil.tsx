import React from 'react';
import StackedListBadgeActionButton from './profil_parcours';
import { FaAddressCard, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Langues from './profil_langues';

export default function Profil() {
  return (
    <section className="w-full min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-10 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full space-y-8">
        
        {/* Titre + Description */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Profil</h1>
          <p className="max-w-2xl leading-relaxed text-gray-700 dark:text-gray-300 max-w-5xl mx-auto px-2">
            Product Owner Senior avec plus de 5 ans d’expérience dans la conception et le pilotage de produits digitaux (logiciels, applications mobiles, plateformes web).
            Spécialiste des méthodologies Agile/Scrum, j’ai dirigé et accompagné des équipes de 1 à 6 développeurs. Véritable leader et motivateur, je transforme la vision business en solutions digitales concrètes et performantes.
            Passionné par la technologie et l’innovation, je recherche des missions freelance en remote au sein d’ESN francophones en Europe.
          </p>
        </div>

        {/* Grille Info + Parcours */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 items-start">
          
          {/* Info-contact + Langues */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className=" shadow-md rounded-2xl p-4 sm:p-2 transition-all duration-300 hover:shadow-lg">
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
            </div>
          </div>

          {/* Parcours Académiques */}
          <div className="w-full lg:w-3/4 space-y-8">
            <div className="bg-gray-800 shadow-md rounded-2xl p-4 sm:p-4 transition-all duration-300 hover:shadow-lg">
              <h2 className="text-xl sm:text-2xl text-center font-bold mb-6">Parcours Académiques</h2>
              <StackedListBadgeActionButton />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
