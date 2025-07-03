import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { popularProducts } from '../data/popularProducts'

import type { JSX } from 'react'

export const PopularProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    const maxSlide = popularProducts.length - 1
    setCurrentSlide(currentSlide === maxSlide ? 0 : currentSlide + 1)
    scrollToSlide(currentSlide === maxSlide ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    const maxSlide = popularProducts.length - 1
    setCurrentSlide(currentSlide === 0 ? maxSlide : currentSlide - 1)
    scrollToSlide(currentSlide === 0 ? maxSlide : currentSlide - 1)
  }

  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.children[0].clientWidth
      scrollRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      })
    }
  }

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: JSX.Element } = {
      'Finance': (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="48" height="48" rx="8" fill="url(#finance-gradient)"/>
          <path d="M16 36l8-8 6 6 10-10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="48" cy="20" r="4" fill="white"/>
          <defs>
            <linearGradient id="finance-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#059669"/>
              <stop offset="100%" stopColor="#047857"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      'Technologie': (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="48" height="48" rx="8" fill="url(#tech-gradient)"/>
          <rect x="14" y="14" width="36" height="4" rx="2" fill="white" opacity="0.8"/>
          <rect x="14" y="22" width="20" height="2" rx="1" fill="white" opacity="0.6"/>
          <rect x="14" y="26" width="24" height="2" rx="1" fill="white" opacity="0.4"/>
          <rect x="14" y="30" width="18" height="2" rx="1" fill="white" opacity="0.6"/>
          <circle cx="46" cy="46" r="6" fill="white"/>
          <path d="M44 46l2 2 4-4" stroke="url(#tech-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="tech-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6"/>
              <stop offset="100%" stopColor="#1e40af"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      'Marketing': (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="48" height="48" rx="8" fill="url(#marketing-gradient)"/>
          <circle cx="32" cy="32" r="12" fill="white" opacity="0.9"/>
          <circle cx="32" cy="32" r="8" fill="url(#marketing-gradient)"/>
          <circle cx="32" cy="32" r="4" fill="white"/>
          <rect x="20" y="14" width="24" height="4" rx="2" fill="white" opacity="0.7"/>
          <rect x="20" y="46" width="24" height="4" rx="2" fill="white" opacity="0.7"/>
          <defs>
            <linearGradient id="marketing-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316"/>
              <stop offset="100%" stopColor="#ea580c"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      'Immobilier': (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="48" height="48" rx="8" fill="url(#realestate-gradient)"/>
          <path d="M18 26l14-10 14 10v20H18V26z" fill="white" opacity="0.9"/>
          <rect x="28" y="36" width="8" height="10" fill="url(#realestate-gradient)"/>
          <rect x="22" y="30" width="4" height="4" fill="url(#realestate-gradient)"/>
          <rect x="38" y="30" width="4" height="4" fill="url(#realestate-gradient)"/>
          <defs>
            <linearGradient id="realestate-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed"/>
              <stop offset="100%" stopColor="#6d28d9"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      'Business': (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="48" height="48" rx="8" fill="url(#business-gradient)"/>
          <path d="M20 36l8-8 8 8 8-8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="20" r="6" fill="white"/>
          <path d="M30 20l2 2 4-4" stroke="url(#business-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="business-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dc2626"/>
              <stop offset="100%" stopColor="#b91c1c"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      'IA': (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="48" height="48" rx="8" fill="url(#ai-gradient)"/>
          <circle cx="32" cy="32" r="16" fill="white" opacity="0.9"/>
          <circle cx="32" cy="32" r="12" fill="url(#ai-gradient)"/>
          <circle cx="28" cy="28" r="2" fill="white"/>
          <circle cx="36" cy="28" r="2" fill="white"/>
          <path d="M28 36c0 0 2 2 4 2s4-2 4-2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <defs>
            <linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4"/>
              <stop offset="100%" stopColor="#0891b2"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      'E-commerce': (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="48" height="48" rx="8" fill="url(#ecommerce-gradient)"/>
          <path d="M16 24l4-4h24l4 4v24H16V24z" fill="white" opacity="0.9"/>
          <circle cx="26" cy="48" r="3" fill="url(#ecommerce-gradient)"/>
          <circle cx="38" cy="48" r="3" fill="url(#ecommerce-gradient)"/>
          <defs>
            <linearGradient id="ecommerce-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981"/>
              <stop offset="100%" stopColor="#059669"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      'Créativité': (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="48" height="48" rx="8" fill="url(#creative-gradient)"/>
          <circle cx="32" cy="32" r="16" fill="white" opacity="0.9"/>
          <circle cx="32" cy="32" r="12" fill="url(#creative-gradient)"/>
          <circle cx="32" cy="32" r="8" fill="white"/>
          <circle cx="32" cy="32" r="4" fill="url(#creative-gradient)"/>
          <defs>
            <linearGradient id="creative-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6"/>
              <stop offset="100%" stopColor="#7c3aed"/>
            </linearGradient>
          </defs>
        </svg>
      )
    }
    return icons[category] || icons['Business']
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="w-full px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Produits populaires</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Découvrez les formations les plus demandées par notre communauté</p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Carousel */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-hidden gap-8 pb-4 px-12"
          >
            {popularProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {getCategoryIcon(product.category)}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-1">
                        {product.bestseller && (
                          <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs px-2 py-1 rounded-full">
                            Bestseller
                          </span>
                        )}
                        {product.live && (
                          <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1 rounded-full">
                            Live
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">Par {product.creator}</p>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-3">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        {'★'.repeat(Math.floor(product.rating))}
                      </div>
                      <span className="text-gray-600 text-sm font-medium">{product.rating}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
                    Voir la formation
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {popularProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                  scrollToSlide(index)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
            Voir toutes les formations
          </button>
        </motion.div>
      </div>
    </section>
  )
} 