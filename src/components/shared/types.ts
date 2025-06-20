// components/shared/types.ts

// This file centralizes the data shapes used across the frontend.
// It ensures consistency and makes it easy to update types in one place.

export interface Service {
  id: string;
  name: string;
  description: string | null;
  duration: number;
  price: string | number; // Prisma's Decimal type is often serialized as a string
  category: string | null;
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
}
