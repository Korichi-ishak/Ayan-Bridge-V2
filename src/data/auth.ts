export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: 'student' | 'creator' | 'investor' | 'admin';
  joinedDate: string;
  verified: boolean;
  subscriptions: string[];
  investmentPortfolio?: {
    totalInvested: number;
    currentValue: number;
    projects: number;
  };
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
  message?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  role: 'creator' | 'student';
}

// Utilisateurs mockés pour la simulation
const mockUsers: User[] = [
  {
    id: 1,
    email: 'sarah.johnson@email.com',
    firstName: 'Sarah',
    lastName: 'Johnson',
    avatar: '/images/avatars/sarah.jpg',
    role: 'creator',
    joinedDate: '2023-01-15',
    verified: true,
    subscriptions: ['trading-crypto', 'marketing-digital'],
    investmentPortfolio: {
      totalInvested: 2500,
      currentValue: 3200,
      projects: 5
    }
  },
  {
    id: 2,
    email: 'marc.dubois@email.com',
    firstName: 'Marc',
    lastName: 'Dubois',
    avatar: '/images/avatars/marc.jpg',
    role: 'student',
    joinedDate: '2023-03-20',
    verified: true,
    subscriptions: ['web-development', 'ai-machine-learning']
  },
  {
    id: 3,
    email: 'admin@ayanbridge.com',
    firstName: 'Admin',
    lastName: 'Ayan Bridge',
    role: 'admin',
    joinedDate: '2022-01-01',
    verified: true,
    subscriptions: []
  }
];

// Simulation de stockage local
class AuthStorage {
  private static readonly AUTH_KEY = 'ayan_bridge_auth';
  private static readonly USER_KEY = 'ayan_bridge_user';

  static saveAuth(token: string, user: User): void {
    localStorage.setItem(this.AUTH_KEY, token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  static getAuth(): { token: string | null; user: User | null } {
    const token = localStorage.getItem(this.AUTH_KEY);
    const userStr = localStorage.getItem(this.USER_KEY);
    const user = userStr ? JSON.parse(userStr) : null;
    return { token, user };
  }

  static clearAuth(): void {
    localStorage.removeItem(this.AUTH_KEY);
    localStorage.removeItem(this.USER_KEY);
  }
}

// API simulée
export class AuthAPI {
  private static delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static async login(credentials: LoginCredentials): Promise<AuthResponse> {
    await this.delay(1000); // Simulation délai réseau

    const user = mockUsers.find(u => u.email === credentials.email);
    
    if (!user) {
      return {
        success: false,
        message: 'Utilisateur non trouvé'
      };
    }

    // Simulation validation mot de passe (accepte tous les mots de passe)
    if (credentials.password.length < 6) {
      return {
        success: false,
        message: 'Mot de passe incorrect'
      };
    }

    const token = `mock_token_${user.id}_${Date.now()}`;
    AuthStorage.saveAuth(token, user);

    return {
      success: true,
      user,
      token,
      message: 'Connexion réussie'
    };
  }

  static async register(data: RegisterData): Promise<AuthResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const existingUser = mockUsers.find(u => u.email === data.email);
        if (existingUser) {
          return resolve({ success: false, message: 'Cet email est déjà utilisé' });
        }

        const newUser: User = {
          id: mockUsers.length + 1,
          email: data.email,
          firstName: data.username,
          lastName: '',
          role: data.role,
          joinedDate: new Date().toISOString(),
          verified: true,
          subscriptions: []
        };

        mockUsers.push(newUser);
        const token = `mock_token_${newUser.id}_${Date.now()}`;
        AuthStorage.saveAuth(token, newUser);
        
        resolve({
          success: true,
          user: newUser,
          token,
          message: 'Inscription réussie !'
        });
      }, 500);
    });
  }

  static async logout(): Promise<void> {
    await this.delay(500);
    AuthStorage.clearAuth();
  }

  static getCurrentUser(): User | null {
    const { user } = AuthStorage.getAuth();
    return user;
  }

  static isAuthenticated(): boolean {
    const { token, user } = AuthStorage.getAuth();
    return !!(token && user);
  }

  static async verifyToken(): Promise<boolean> {
    await this.delay(300);
    const { token } = AuthStorage.getAuth();
    return !!token && token.startsWith('mock_token_');
  }
}

// Le hook useAuth sera créé dans un fichier séparé avec les imports React appropriés 