export interface ServicePlan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}