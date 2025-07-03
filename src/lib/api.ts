import { products } from '../data/products';
import { testimonials } from '../data/testimonials';
import { mockCourses } from '../data/courses';
import { mockUsers } from '../data/users';
import { mockInvestmentProjects } from '../data/investments';

// Simule une latence réseau
const fakeNetworkDelay = (delay = 500) => new Promise(res => setTimeout(res, delay));

// --- API pour les Produits ---
export const getProducts = async () => {
  await fakeNetworkDelay();
  return products;
};

export const getProductById = (id: string) => {
  const product = products.find(p => p.id === id);
  return fakeNetworkDelay(500).then(() => product);
};

// --- API pour les Cours ---
export const getCourses = () => {
  return fakeNetworkDelay(500).then(() => mockCourses);
};

export const getCourseById = (id: string) => {
  const course = mockCourses.find(c => c.id === id);
  return fakeNetworkDelay(500).then(() => course);
};

// --- API pour les Utilisateurs ---
export const getUsers = () => {
  return fakeNetworkDelay(500).then(() => mockUsers);
};

export const getUserById = (id: string) => {
  const user = mockUsers.find(u => u.id === id);
  return fakeNetworkDelay(500).then(() => user);
};

// --- API pour les Investissements ---
export const getInvestmentProjects = () => {
  return fakeNetworkDelay(500).then(() => mockInvestmentProjects);
};

// --- API pour les Témoignages ---
export const getTestimonials = async () => {
  await fakeNetworkDelay();
  return testimonials;
}; 