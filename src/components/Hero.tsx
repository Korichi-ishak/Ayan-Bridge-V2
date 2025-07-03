import { motion } from 'framer-motion'
import { useModal } from '../contexts/ModalContext';
import { RegisterForm } from './RegisterForm';

export const Hero = () => {
  const { showModal } = useModal();

  const openRegisterModal = () => {
    showModal(<RegisterForm />);
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24">
      <div className="w-full px-6 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Apprends. Crée. Investis. Gagne.
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          La plateforme tout-en-un pour créer, apprendre et investir dans le monde numérique
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            onClick={openRegisterModal}
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Commencer maintenant
          </button>
        </motion.div>
      </div>
      
      {/* Decorative geometric shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Hexagon pattern */}
        <div className="absolute top-16 left-16 w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 opacity-20 transform rotate-45 rounded-lg"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-400 opacity-15 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-500 opacity-10 transform rotate-12 rounded-2xl"></div>
        <div className="absolute bottom-16 right-16 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 opacity-20 transform -rotate-12 rounded-xl"></div>
        
        {/* Dot pattern */}
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-white rounded-full opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-orange-300 rounded-full opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-blue-300 rounded-full opacity-30"></div>
        
        {/* Lines */}
        <div className="absolute top-24 right-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform rotate-45"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-40 transform -rotate-12"></div>
      </div>
    </section>
  )
} 