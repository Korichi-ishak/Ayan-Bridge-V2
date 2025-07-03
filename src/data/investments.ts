export interface InvestmentProject {
  id: string;
  productId: string;
  goal: number; // Montant à atteindre
  currentAmount: number;
  investors: number;
  estimatedReturn: number; // in percent
}

export const mockInvestmentProjects: InvestmentProject[] = [
  {
    id: 'inv_001',
    productId: 'prod_003', // Le produit "Session LIVE : Créer son business en ligne"
    goal: 500,
    currentAmount: 250,
    investors: 5,
    estimatedReturn: 15,
  },
  {
    id: 'inv_002',
    productId: 'prod_002', // Le produit "Masterclass : Le développement personnel"
    goal: 2000,
    currentAmount: 1800,
    investors: 22,
    estimatedReturn: 25,
  },
]; 