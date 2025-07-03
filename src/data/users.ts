export type UserRole = 'Apprenant' | 'Créateur' | 'Investisseur' | 'Admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  purchasedProductIds?: string[];
  createdProductIds?: string[];
  investedProjectIds?: string[];
}

export const mockUsers: User[] = [
  {
    id: 'user_001',
    name: 'Alice Apprenante',
    email: 'alice@example.com',
    role: 'Apprenant',
    avatar: 'https://i.pravatar.cc/150?u=alice',
    purchasedProductIds: ['prod_001'],
  },
  {
    id: 'user_002',
    name: 'Bob Créateur',
    email: 'bob@example.com',
    role: 'Créateur',
    avatar: 'https://i.pravatar.cc/150?u=bob',
    createdProductIds: ['prod_002', 'prod_004'],
  },
  {
    id: 'user_003',
    name: 'Carole Investisseuse',
    email: 'carole@example.com',
    role: 'Investisseur',
    avatar: 'https://i.pravatar.cc/150?u=carole',
    investedProjectIds: ['inv_001'],
  },
]; 