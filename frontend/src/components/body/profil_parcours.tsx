import React from "react";
import { DotFilledIcon } from "@radix-ui/react-icons";

const StackedListBadgeActionButton = () => {
  const array = [
    {
      name: "Doctorat en Sciences et Technologies",
      status: "Diplome",
      desc: "École Doctorale Thématique, Antsiranana",
      start_date: "2018",
      end_date: "2022",
    },
    {
      name: "Diplôme d’Ingénieur en Informatique Industrielle",
      status: "Diplome",
      desc: "École Supérieure Polytechnique d’Antsiranana",
      start_date: "2010",
      end_date: "2017",
    },
  ];

  return (
    <ul role="list" className="space-y-2 sm:space-y-4">
      {array.map((item, index) => (
        <li
          key={index}
          className="border border-gray-200 dark:border-gray-700 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300"
        >
          {/* Titre + Statut */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-2">
            <h3 className="text-base sm:text-lg md:text-2xl font-bold text-gray-900 dark:text-white leading-snug">
              {item.name}
            </h3>

            <span
              className={`mt-2 sm:mt-0 self-start sm:self-auto px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                item.status === "Diplome"
                  ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100"
                  : item.status === "Certificat"
                  ? "bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-100"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-100"
              }`}
            >
              {item.status}
            </span>
          </div>

          {/* Séparateur */}
          <div className="w-full h-px bg-gray-300 dark:bg-gray-600 mb-3 sm:mb-2" />

          {/* Description + Dates */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
            <p className="sm:w-3/4  text-xs md:text-sm lg:text-base leading-relaxed">{item.desc}</p>
            <p className="sm:w-1/4 font-medium text-xs sm:text-sm text-gray-700 dark:text-gray-400 text-end">
              {item.start_date} – {item.end_date}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StackedListBadgeActionButton;
