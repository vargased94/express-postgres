import { z } from 'zod';

export const customerSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }).min(2).max(255),
    phone: z.string({ required_error: 'Phone is required' }).min(2).max(255),
    email: z.string({ required_error: 'Email is required' }).email(),
  }),
});