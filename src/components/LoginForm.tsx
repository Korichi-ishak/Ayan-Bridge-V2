import { useState } from 'react';
import { motion } from 'framer-motion';
import { AuthAPI, type LoginCredentials } from '../data/auth';
import { useModal } from '../contexts/ModalContext';
import { RegisterForm } from './RegisterForm';

const CreativePanel = () => (
  <div className="hidden md:flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-l-2xl">
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
      Bienvenue à nouveau !
    </motion.h2>
    <motion.p 
      className="text-center text-blue-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      Connectez-vous pour continuer votre aventure.
    </motion.p>
  </div>
);

export const LoginForm = () => {
  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { hideModal, showModal } = useModal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await AuthAPI.login(formData);
      if (response.success) {
        hideModal();
        window.location.reload();
      } else {
        setError(response.message || 'Erreur de connexion');
      }
    } catch (err) {
      setError('Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const switchToRegister = () => {
    showModal(<RegisterForm />);
  };

  return (
    <motion.div
      key="login"
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Connexion</h1>
          <p className="text-gray-600 mb-6">Accédez à votre compte</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-600 text-sm">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="email-login" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email" id="email-login" name="email" value={formData.email} onChange={handleChange} required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label htmlFor="password-login" className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
              <input
                type="password" id="password-login" name="password" value={formData.password} onChange={handleChange} required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Votre mot de passe"
              />
            </div>
            <button
              type="submit" disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold"
            >
              {loading ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Pas encore de compte ?{' '}
              <button onClick={switchToRegister} className="text-blue-600 hover:text-blue-700 font-semibold">
                S'inscrire
              </button>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center mb-3">Comptes de test :</p>
            <div className="space-y-2 text-xs">
              <div className="bg-gray-50 rounded-lg p-3">
                <strong>Créateur :</strong> sarah.johnson@email.com<br />
                <strong>Mot de passe :</strong> password123
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <strong>Étudiant :</strong> marc.dubois@email.com<br />
                <strong>Mot de passe :</strong> password123
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 