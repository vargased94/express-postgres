import { z } from 'zod';

export const userSchema = z.object({
  body: z.object({
    name: z.string().min(2).max(255),
    email: z.string().email(),
  }),
});