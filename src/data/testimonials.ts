export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  avatarUrl: string;
  location: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Entrepreneuse',
    company: 'TechStart Solutions',
    content: 'Ayan Bridge a révolutionné ma façon d\'apprendre et d\'investir. Les formations sont exceptionnelles et les opportunités d\'investissement vraiment prometteuses. Une plateforme complète qui m\'accompagne au quotidien dans ma croissance entrepreneuriale.',
    rating: 5,
    avatarUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
    location: 'Paris, France',
    verified: true
  },
  {
    id: 2,
    name: 'Marc Dubois',
    role: 'Développeur Full-Stack',
    company: 'Digital Innovations',
    content: 'Le studio intelligent est une véritable révolution ! J\'ai créé mon premier produit numérique en quelques heures. L\'interface est intuitive et les fonctionnalités sont puissantes. Je recommande vivement cette plateforme à tous les créateurs.',
    rating: 5,
    avatarUrl: 'https://randomuser.me/api/portraits/men/41.jpg',
    location: 'Lyon, France',
    verified: true
  },
  {
    id: 3,
    name: 'Lisa Chen',
    role: 'Investisseuse',
    company: 'Capital Ventures',
    content: 'Bridge Capital m\'a permis de diversifier intelligemment mon portefeuille avec des investissements numériques. Les rendements sont excellents et la transparence est totale. Une approche moderne et accessible de l\'investissement.',
    rating: 5,
    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    location: 'Montréal, Canada',
    verified: true
  },
  {
    id: 4,
    name: 'Antoine Moreau',
    role: 'Formateur Expert',
    company: 'Learn Academy',
    content: 'Je recommande Ayan Bridge à tous ceux qui veulent réussir dans le numérique. L\'écosystème est complet, la communauté bienveillante et les outils fournis sont de qualité professionnelle. Un vrai tremplin pour l\'avenir.',
    rating: 5,
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    location: 'Marseille, France',
    verified: true
  },
  {
    id: 5,
    name: 'Elena Rodriguez',
    role: 'Marketing Manager',
    company: 'Growth Labs',
    content: 'Grâce aux formations marketing d\'Ayan Bridge, j\'ai multiplié par 3 le ROI de mes campagnes. Les stratégies enseignées sont concrètes et immédiatement applicables. Une plateforme qui tient ses promesses.',
    rating: 5,
    avatarUrl: 'https://randomuser.me/api/portraits/women/33.jpg',
    location: 'Madrid, Espagne',
    verified: true
  },
  {
    id: 6,
    name: 'David Kim',
    role: 'Data Scientist',
    company: 'AI Solutions',
    content: 'Les formations en IA sont d\'un niveau exceptionnel. J\'ai pu implémenter des modèles de machine learning avancés dans mon travail. La qualité pédagogique est remarquable et les projets pratiques très formateurs.',
    rating: 5,
    avatarUrl: 'https://randomuser.me/api/portraits/men/86.jpg',
    location: 'Séoul, Corée du Sud',
    verified: true
  },
  {
    id: 7,
    name: 'Sophie Laurent',
    role: 'E-commerce Manager',
    company: 'Fashion Online',
    content: 'Le module e-commerce m\'a permis de doubler le chiffre d\'affaires de ma boutique en ligne. Les techniques de conversion et d\'optimisation SEO sont redoutables. Un investissement rentabilisé en quelques semaines.',
    rating: 5,
    avatarUrl: 'https://randomuser.me/api/portraits/women/76.jpg',
    location: 'Toulouse, France',
    verified: true
  },
  {
    id: 8,
    name: 'James Wilson',
    role: 'Photographe Professionnel',
    company: 'Creative Vision',
    content: 'Les formations créatives ont transformé ma pratique photographique. J\'ai appris des techniques avancées que j\'utilise quotidiennement. La communauté créative est inspirante et les échanges très enrichissants.',
    rating: 5,
    avatarUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
    location: 'Londres, UK',
    verified: true
  }
]

export const getTestimonialById = (id: number): Testimonial | undefined => {
  return testimonials.find(testimonial => testimonial.id === id);
}

export const getVerifiedTestimonials = (): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.verified);
}

export const getTestimonialsByRating = (minRating: number): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.rating >= minRating);
}

export const getRandomTestimonials = (count: number): Testimonial[] => {
  const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
} 