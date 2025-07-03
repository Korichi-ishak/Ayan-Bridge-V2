export interface Product {
  id: number;
  title: string;
  creator: string;
  price: string;
  originalPrice?: string;
  rating: number;
  category: string;
  description: string;
  imageUrl: string;
  bestseller?: boolean;
  live?: boolean;
}

export const popularProducts: Product[] = [
  {
    id: 1,
    title: 'Formation Trading Crypto Avancée',
    creator: 'Alex Martin',
    price: '$49',
    originalPrice: '$89',
    rating: 4.8,
    category: 'Finance',
    description: 'Maîtrisez les stratégies de trading crypto les plus rentables et analysez les marchés comme un pro.',
    imageUrl: '/images/crypto-trading.jpg',
    bestseller: true
  },
  {
    id: 2,
    title: 'Développement Web Full-Stack',
    creator: 'Sophie Dubois',
    price: '$89',
    originalPrice: '$149',
    rating: 4.9,
    category: 'Technologie',
    description: 'Créez des applications web complètes avec React, Node.js et MongoDB. Devenez développeur full-stack.',
    imageUrl: '/images/web-dev.jpg',
    bestseller: true
  },
  {
    id: 3,
    title: 'Marketing Digital & Growth Hacking',
    creator: 'Pierre Leroy',
    price: '$69',
    rating: 4.7,
    category: 'Marketing',
    description: 'Apprenez les techniques de growth hacking pour faire exploser votre business en ligne.',
    imageUrl: '/images/marketing.jpg',
    live: true
  },
  {
    id: 4,
    title: 'Investissement Immobilier Rentable',
    creator: 'Marie Durand',
    price: '$129',
    rating: 4.6,
    category: 'Immobilier',
    description: 'Découvrez comment investir dans l\'immobilier pour créer un patrimoine durable.',
    imageUrl: '/images/real-estate.jpg'
  },
  {
    id: 5,
    title: 'Entrepreneuriat Digital 2024',
    creator: 'Thomas Bernard',
    price: '$99',
    rating: 4.8,
    category: 'Business',
    description: 'Lancez votre business en ligne et générez vos premiers revenus en 30 jours.',
    imageUrl: '/images/business.jpg',
    bestseller: true
  },
  {
    id: 6,
    title: 'IA & Machine Learning Pratique',
    creator: 'Julie Moreau',
    price: '$149',
    rating: 4.9,
    category: 'IA',
    description: 'Maîtrisez l\'intelligence artificielle et créez vos propres modèles de machine learning.',
    imageUrl: '/images/ai.jpg',
    live: true
  },
  {
    id: 7,
    title: 'E-commerce Dropshipping Master',
    creator: 'David Chen',
    price: '$79',
    rating: 4.5,
    category: 'E-commerce',
    description: 'Créez une boutique e-commerce rentable avec le dropshipping et les meilleures stratégies.',
    imageUrl: '/images/ecommerce.jpg'
  },
  {
    id: 8,
    title: 'Photographie Professionnelle',
    creator: 'Emma Wilson',
    price: '$59',
    rating: 4.7,
    category: 'Créativité',
    description: 'Apprenez les techniques de photographie pro pour capturer des images époustouflantes.',
    imageUrl: '/images/photography.jpg'
  }
]

export const getProductById = (id: number): Product | undefined => {
  return popularProducts.find(product => product.id === id);
}

export const getProductsByCategory = (category: string): Product[] => {
  return popularProducts.filter(product => product.category === category);
}

export const getBestsellerProducts = (): Product[] => {
  return popularProducts.filter(product => product.bestseller);
}

export const getLiveProducts = (): Product[] => {
  return popularProducts.filter(product => product.live);
} 