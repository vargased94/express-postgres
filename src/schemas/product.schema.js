import { z } from 'zod';

export const productSchema = z.object({
  body: z.object({
    name: z.string().min(2).max(255),
    price: z.number().min(0),
  }),
});