export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

export type User = {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt: Date;
};

export type Blog = {
  id: number;
  title: string;
  content: string | null;
  createdAt: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string | null;
  image: string | null;
  createdAt: string;
};
