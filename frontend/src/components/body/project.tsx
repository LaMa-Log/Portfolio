import { motion } from 'framer-motion';
import intranet from '../../assets/intranet.jpeg';
import saintJUD from '../../assets/sainJUD.jpeg'
import tily from '../../assets/tily.jpeg'
import promabio from '../../assets/promabio.jpeg'
import SupermarchePro from '../../assets/SupermrchePro.jpeg'
import grossiste from '../../assets/grossiste.jpeg'
import { FaGlobe } from 'react-icons/fa';


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const projects = [
      {
    title: "Promabio SARL: Site Web Institutionnel",
    image: promabio,
    description: "Une vitrine digitale claire et moderne pour présenter l’entreprise et crédibiliser son image auprès de ses partenaires.",
    link:"https://portfolio-six-theta-qsmr10tp8l.vercel.app/"
  },

    {
    title: "Logiciel de Gestion de Marchandises: Grossiste Multi-boutiques",
    image: SupermarchePro,
    description: "Optimisation du suivi de stock, des ventes et de l’approvisionnement pour une meilleure rentabilité.",
    link:"https://portfolio-six-theta-qsmr10tp8l.vercel.app/"
  },


  {
    title: "Plateforme Web & Mobile de Logistique Maritime",
    image: saintJUD,
    description: "Digitaliser le transport de marchandises pour améliorer la performance, la fiabilité et la visibilité en temps réel.",
    link:"https://portfolio-six-theta-qsmr10tp8l.vercel.app/"
  },

  {
    title: "Plateforme de Formation en Ligne",
    image: tily,
    description: "Solution digitale moderne pour transformer l’apprentissage à distance et valoriser le partage de compétences.",
    link: "/projects/web-development"
  },
        {
    title: "Transformation & Traçabilité Application Mobile de Traçabilité: Filière Vanille",
    image: grossiste,
    description: "Digitaliser la collecte terrain pour garantir transparence, certification et amélioration continue de la qualité.",
    link:"https://portfolio-six-theta-qsmr10tp8l.vercel.app/"
  },

  {
    title: "Intranet Collaboratif: Modernisation de la Communication Interne",
    image: intranet,
    description: "Un espace unifié pour fluidifier les échanges, centraliser les ressources et renforcer la collaboration d’équipe.",
    link: "/projects/web-development"
  }

];

export default function Project() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className=" min-h-screen px-6 my-30 lg:my-40 bg-gray-900 text-gray-100 transition-colors duration-300"
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
            className="relative group bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-gray-200 transition-all duration-300"
          >
            {/* Hover button */}
            <motion.a
              href={project.link}
              className="absolute top-2 right-2 z-10 hover:text-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold "
            >
              <FaGlobe className="text-3xl hover:text-4xl transition-all duration-300 " />
 
            </motion.a>

            {/* Image */}
            <div className="w-full h-60 bg-gray-900 flex items-center justify-center overflow-hidden rounded-t-xl">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain transition-transform duration-300"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            {/* Content */}
            <motion.div className="p-3">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-300">{project.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

