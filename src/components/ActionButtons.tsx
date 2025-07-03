import { motion } from 'framer-motion'

const LibraryIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="36" height="32" rx="4" fill="url(#library-gradient)"/>
    <rect x="12" y="14" width="24" height="2" rx="1" fill="white" opacity="0.8"/>
    <rect x="12" y="18" width="18" height="2" rx="1" fill="white" opacity="0.6"/>
    <rect x="12" y="22" width="20" height="2" rx="1" fill="white" opacity="0.4"/>
    <defs>
      <linearGradient id="library-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e40af"/>
        <stop offset="100%" stopColor="#3b82f6"/>
      </linearGradient>
    </defs>
  </svg>
)

const InvestIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" fill="url(#invest-gradient)"/>
    <path d="M16 28l6-6 4 4 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30 20h-4v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="invest-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#059669"/>
        <stop offset="100%" stopColor="#10b981"/>
      </linearGradient>
    </defs>
  </svg>
)

const LearnIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="12" width="32" height="24" rx="4" fill="url(#learn-gradient)"/>
    <circle cx="24" cy="24" r="6" fill="white" opacity="0.9"/>
    <circle cx="24" cy="24" r="3" fill="url(#learn-gradient)"/>
    <defs>
      <linearGradient id="learn-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7c3aed"/>
        <stop offset="100%" stopColor="#a855f7"/>
      </linearGradient>
    </defs>
  </svg>
)

const OperationsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="40" height="32" rx="6" fill="url(#ops-gradient)"/>
    <rect x="10" y="14" width="8" height="8" rx="2" fill="white" opacity="0.8"/>
    <rect x="20" y="14" width="8" height="8" rx="2" fill="white" opacity="0.6"/>
    <rect x="30" y="14" width="8" height="8" rx="2" fill="white" opacity="0.9"/>
    <rect x="10" y="26" width="8" height="8" rx="2" fill="white" opacity="0.5"/>
    <rect x="20" y="26" width="18" height="8" rx="2" fill="white" opacity="0.7"/>
    <defs>
      <linearGradient id="ops-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#dc2626"/>
        <stop offset="100%" stopColor="#ef4444"/>
      </linearGradient>
    </defs>
  </svg>
)

const LiveIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="12" width="36" height="24" rx="4" fill="url(#live-gradient)"/>
    <polygon points="20,18 20,30 30,24" fill="white"/>
    <circle cx="38" cy="16" r="4" fill="#ef4444"/>
    <circle cx="38" cy="16" r="2" fill="white"/>
    <defs>
      <linearGradient id="live-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f97316"/>
        <stop offset="100%" stopColor="#fb923c"/>
      </linearGradient>
    </defs>
  </svg>
)

export const ActionButtons = () => {
  const buttons = [
    {
      icon: <LibraryIcon />,
      title: 'Explorer la bibliothèque',
      description: 'Découvre des milliers de ressources éducatives premium',
      href: '#marketplace',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <InvestIcon />,
      title: 'Investir intelligemment',
      description: 'Investis dans des projets numériques à fort potentiel',
      href: '#invest',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <LearnIcon />,
      title: 'Ayan Learn Hub',
      description: 'Accède à nos formations et parcours d\'apprentissage',
      href: '#learn',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <OperationsIcon />,
      title: 'Salle d\'opérations',
      description: 'Pilote tes projets et investissements en temps réel',
      href: '#operations',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <LiveIcon />,
      title: 'Bridge Live',
      description: 'Participe à des événements exclusifs en direct',
      href: '#live',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Que souhaitez-vous faire ?
        </motion.h2>
        <motion.p 
          className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Choisissez votre chemin vers le succès numérique
        </motion.p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {buttons.map((button, index) => (
            <motion.a
              key={index}
              href={button.href}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {button.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-orange-500 transition-all duration-300">
                {button.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {button.description}
              </p>
              <div className={`w-full h-1 bg-gradient-to-r ${button.color} rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
} 