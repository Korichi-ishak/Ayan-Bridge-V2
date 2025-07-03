import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { AuthAPI, type User } from '../data/auth';
import { useModal } from '../contexts/ModalContext';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { showModal } = useModal();

  useEffect(() => {
    setUser(AuthAPI.getCurrentUser());
  }, []);

  const handleLogout = async () => {
    await AuthAPI.logout();
    setUser(null);
    navigate('/');
    setIsMenuOpen(false);
    window.location.reload();
  };

  const openLoginModal = () => {
    showModal(<LoginForm />);
    setIsMenuOpen(false);
  };

  const openRegisterModal = () => {
    showModal(<RegisterForm />);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-900 via-blue-700 to-orange-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 21.02L12 17.77L5.82 21.02L7 14.74L2 9L8.91 8.26L12 2Z" fill="white"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Ayan Bridge</h1>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-blue-900 transition-colors font-medium">
            Accueil
          </Link>
          <a href="#marketplace" className="text-gray-600 hover:text-blue-900 transition-colors font-medium">
            Marketplace
          </a>
          <a href="#learn" className="text-gray-600 hover:text-blue-900 transition-colors font-medium">
            Learn Hub
          </a>
          <a href="#operations" className="text-gray-600 hover:text-blue-900 transition-colors font-medium">
            Studio
          </a>
          {user?.role === 'investor' || user?.role === 'admin' ? (
            <a href="#invest" className="text-gray-600 hover:text-blue-900 transition-colors font-medium">
              Bridge Capital
            </a>
          ) : null}
        </nav>

        {/* Auth Buttons / User Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                  </span>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-gray-900">{user.firstName} {user.lastName}</p>
                  <p className="text-gray-500 capitalize">{user.role}</p>
                </div>
              </div>
              <button 
                onClick={handleLogout}
                className="text-gray-600 hover:text-blue-900 transition-colors font-medium"
              >
                Déconnexion
              </button>
            </div>
          ) : (
            <>
              <button onClick={openLoginModal} className="text-gray-600 hover:text-blue-900 transition-colors font-medium">
                Se connecter
              </button>
              <button onClick={openRegisterModal} className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg">
                S'inscrire
              </button>
            </>
          )}
        </div>

        {/* Menu Mobile Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-600 hover:text-blue-900 transition-colors"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-gray-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-gray-600 hover:text-blue-900 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <a 
              href="#marketplace" 
              className="block text-gray-600 hover:text-blue-900 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Marketplace
            </a>
            <a 
              href="#learn" 
              className="block text-gray-600 hover:text-blue-900 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Learn Hub
            </a>
            <a 
              href="#operations" 
              className="block text-gray-600 hover:text-blue-900 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Studio
            </a>
            {user?.role === 'investor' || user?.role === 'admin' ? (
              <a 
                href="#invest" 
                className="block text-gray-600 hover:text-blue-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Bridge Capital
              </a>
            ) : null}
            
            {/* Auth Mobile */}
            <div className="pt-4 border-t border-gray-200">
              {user ? (
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">
                        {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{user.firstName} {user.lastName}</p>
                      <p className="text-gray-500 capitalize text-sm">{user.role}</p>
                    </div>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left text-red-600 hover:text-red-700 transition-colors font-medium"
                  >
                    Déconnexion
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <button onClick={openLoginModal} className="block text-gray-600 hover:text-blue-900 transition-colors font-medium">
                    Se connecter
                  </button>
                  <button onClick={openRegisterModal} className="block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg text-center w-full">
                    S'inscrire
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
} 