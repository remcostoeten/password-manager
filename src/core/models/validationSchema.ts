import * as z from 'zod';

export const passwordSchema = z.object({
  website: z.string().min(1, 'Website is required'),
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export type PasswordFormData = z.infer<typeof passwordSchema>;
