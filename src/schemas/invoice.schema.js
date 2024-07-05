import { z } from 'zod';

export const invoiceSchema = z.object({
  body: z.object({
    customer_id: z.number().min(1).max(255),
    user_id: z.number().min(1).max(255),
    orders: z.array(z.object({
      invoice_id: z.number().min(1).max(255),
      order_id: z.number().min(1).max(255),
    })),
  })
});