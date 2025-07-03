import { motion } from 'framer-motion'

const LearnStepIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" fill="url(#learn-step-gradient)"/>
    <path d="M22 34l6 6 12-12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="32" cy="18" r="4" fill="white"/>
    <defs>
      <linearGradient id="learn-step-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6"/>
        <stop offset="100%" stopColor="#1e40af"/>
      </linearGradient>
    </defs>
  </svg>
)

const CreateStepIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" fill="url(#create-step-gradient)"/>
    <rect x="20" y="20" width="24" height="24" rx="4" fill="white" opacity="0.9"/>
    <rect x="24" y="24" width="4" height="4" rx="1" fill="url(#create-step-gradient)"/>
    <rect x="32" y="24" width="4" height="4" rx="1" fill="url(#create-step-gradient)"/>
    <rect x="24" y="32" width="4" height="4" rx="1" fill="url(#create-step-gradient)"/>
    <rect x="32" y="32" width="4" height="4" rx="1" fill="url(#create-step-gradient)"/>
    <defs>
      <linearGradient id="create-step-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f97316"/>
        <stop offset="100%" stopColor="#ea580c"/>
      </linearGradient>
    </defs>
  </svg>
)

const InvestStepIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" fill="url(#invest-step-gradient)"/>
    <path d="M20 40l8-8 4 4 8-8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M38 26h-4v4" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="44" cy="20" r="6" fill="white"/>
    <text x="44" y="24" textAnchor="middle" fill="url(#invest-step-gradient)" fontSize="8" fontWeight="bold">$</text>
    <defs>
      <linearGradient id="invest-step-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#059669"/>
        <stop offset="100%" stopColor="#047857"/>
      </linearGradient>
    </defs>
  </svg>
)

const EarnStepIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" fill="url(#earn-step-gradient)"/>
    <path d="M16 32l10-10 10 10 10-10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="32" cy="20" r="3" fill="white"/>
    <circle cx="22" cy="30" r="2" fill="white" opacity="0.8"/>
    <circle cx="42" cy="30" r="2" fill="white" opacity="0.8"/>
    <defs>
      <linearGradient id="earn-step-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7c3aed"/>
        <stop offset="100%" stopColor="#6d28d9"/>
      </linearGradient>
    </defs>
  </svg>
)

export const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Apprends',
      description: 'Accède à des formations de qualité dispensées par des experts reconnus',
      icon: <LearnStepIcon />
    },
    {
      number: '02', 
      title: 'Crée',
      description: 'Utilise notre studio intelligent pour créer tes produits numériques innovants',
      icon: <CreateStepIcon />
    },
    {
      number: '03',
      title: 'Investis',
      description: 'Investis dans des projets prometteurs et diversifie ton portefeuille',
      icon: <InvestStepIcon />
    },
    {
      number: '04',
      title: 'Gagne',
      description: 'Génère des revenus passifs grâce à tes créations et investissements',
      icon: <EarnStepIcon />
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="w-full px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Comment ça marche</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Un processus simple et efficace en 4 étapes pour transformer vos ambitions en succès</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 via-orange-500 to-purple-500 z-0 opacity-30"></div>
              )}
              
              {/* Step content */}
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  {step.icon}
                </div>
                <div className="text-sm font-bold text-orange-500 mb-2 tracking-wider">{step.number}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 