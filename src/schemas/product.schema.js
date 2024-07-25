import { z } from 'zod';

export const productSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }).min(2).max(255),
    price: z.number({ required_error: 'Price is required' }).min(0),
  }),
});