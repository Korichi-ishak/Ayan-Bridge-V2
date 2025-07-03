import { useState } from 'react';
import { motion } from 'framer-motion';
import { AuthAPI, type RegisterData } from '../data/auth';
import { useModal } from '../contexts/ModalContext';
import { LoginForm } from './LoginForm';

const CreativePanel = () => (
  <div className="hidden md:flex flex-col items-center justify-center p-8 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-l-2xl">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="w-24 h-24 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 21.02L12 17.77L5.82 21.02L7 14.74L2 9L8.91 8.26L12 2Z" fill="white"/>
        </svg>
      </div>
    </motion.div>
    <motion.h2 
      className="text-3xl font-bold text-center mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      Rejoignez-nous !
    </motion.h2>
    <motion.p 
      className="text-center text-orange-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      Créez un compte pour explorer un monde de possibilités.
    </motion.p>
  </div>
);

export const RegisterForm = () => {
  const [formData, setFormData] = useState<RegisterData>({
    username: '',
    email: '',
    password: '',
    role: 'creator'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { hideModal, showModal } = useModal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await AuthAPI.register(formData);
      if (response.success) {
        hideModal();
        window.location.reload();
      } else {
        setError(response.message || "Erreur d'inscription");
      }
    } catch (err) {
      setError('Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const switchToLogin = () => {
    showModal(<LoginForm />);
  };

  return (
    <motion.div
      key="register"
      className="grid grid-cols-1 md:grid-cols-2 min-h-[550px]"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ type: 'tween', ease: 'circOut', duration: 0.5 }}
    >
      <CreativePanel />

      {/* Form Panel */}
      <div className="p-8 flex flex-col justify-center">
        <div className="w-full">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Inscription</h1>
          <p className="text-gray-600 mb-6">Créez votre nouveau compte</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-600 text-sm">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">Nom d'utilisateur</label>
              <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500" placeholder="Votre nom d'utilisateur" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500" placeholder="votre@email.com" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500" placeholder="Votre mot de passe" />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">Je suis un...</label>
              <select id="role" name="role" value={formData.role} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 bg-white">
                <option value="creator">Créateur</option>
                <option value="student">Étudiant</option>
              </select>
            </div>
            <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold">
              {loading ? 'Création...' : "S'inscrire"}
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Déjà un compte ?{' '}
              <button onClick={switchToLogin} className="text-orange-600 hover:text-orange-700 font-semibold">
                Se connecter
              </button>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 