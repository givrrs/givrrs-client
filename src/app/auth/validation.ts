import { email, name, password, phone_number } from '@/lib/validations';
import z from 'zod';

export const loginSchema = z.object({
  email,
  password
});

export const createAccountSchema = z
  .object({
    first_name: name,
    last_name: name,
    email,
    phone_number,
    gender: z.string({ error: 'Gender is required.' }).toLowerCase().trim(),
    interests: z.string().array(),
    password,
    confirm_password: password
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Passwords do not match.',
    path: ['confirm_password']
  });

export const forgotPwdSchema = z.object({
  email
});

export type TLoginSchema = z.infer<typeof loginSchema>;
export type TCreateAccountSchema = z.infer<typeof createAccountSchema>;
export type TForgotPwdSchema = z.infer<typeof forgotPwdSchema>;
