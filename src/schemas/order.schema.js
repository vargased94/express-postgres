import { z } from 'zod';

export const orderSchema = z.object({
  body: z.object({
    user_id: z.string().min(1).max(255),
    customer_id: z.string().min(1).max(255),
    products: z.array(z.object({
      product_id: z.string().min(1).max(255),
      quantity: z.number().int().positive(),
    })),
  }),
});