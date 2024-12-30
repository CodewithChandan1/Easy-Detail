export interface Category {
  id: string;
  name: string;
  icon: React.FC;
  endpoint: string;
}

export interface Item {
  id: string;
  name: string;
  image: string;
  description?: string;
  category: string;
  attributes?: Record<string, string>;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  replies?: Comment[];
}

export interface ApiResponse {
  data: Item[];
  loading: boolean;
  error: string | null;
}