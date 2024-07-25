import { z } from 'zod';

export const orderSchema = z.object({
  body: z.object({
    user_id: z.number({ required_error: 'User ID is required' }).min(1).max(255),
    customer_id: z.number({ required_error: 'Customer ID is required' }).min(1).max(255),
    products: z.array(z.object({
      product_id: z.number({ required_error: 'Product ID is required' }).min(1).max(255),
      quantity: z.number({ required_error: 'Quantity is required' }).min(1).max(255),
    }), { required_error: 'Products array is required' }).min(1),
  }),
});