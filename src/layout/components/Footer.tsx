import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <footer className="aurora-footer relative overflow-hidden bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            Prêt à commencer votre voyage ?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez AyanBridge aujourd'hui et explorez un nouvel univers de création, d'apprentissage et d'investissement.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button size="lg" variant="primary" className="text-lg">
              S'inscrire gratuitement
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left border-t border-gray-700 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/marketplace" className="hover:text-primary transition-colors">Magasin</Link></li>
              <li><Link to="/learn" className="hover:text-primary transition-colors">Learn Hub</Link></li>
              <li><Link to="/invest" className="hover:text-primary transition-colors">Club Investisseur</Link></li>
              <li><Link to="/studio" className="hover:text-primary transition-colors">Studio</Link></li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">Communauté</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Événements</a></li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Aide & Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Partenaires</a></li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a></li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="mt-12 text-center border-t border-gray-700 pt-8">
          <p>&copy; {new Date().getFullYear()} AyanBridge. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 