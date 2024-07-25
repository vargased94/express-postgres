import { z } from 'zod';

export const invoiceSchema = z.object({
  body: z.object({
    customer_id: z.number({ required_error: 'Customer ID is required' }).min(1).max(255),
    user_id: z.number({ required_error: 'User ID is required' }).min(1).max(255),
    orders: z.array(z.object({
      invoice_id: z.number({ required_error: 'Invoice ID is required' }).min(1).max(255),
      order_id: z.number({ required_error: 'Order ID is required' }).min(1).max(255),
    }), { required_error: 'Orders array is required' }).min(1),
  })
});