import { isValidPhoneNumber } from 'react-phone-number-input';
import z from 'zod';

export const lowerCaseRegex = /(?=.*[a-z])\w+/;
export const upperCaseRegex = /(?=.*[A-Z])\w+/;
export const numberRegex = /\d/;
export const specialCharcterRegex = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
export const handleCharcterRegex = /[`@?&=]/;

export const email = z
  .email({ error: 'Email is required.' })
  .toLowerCase()
  .transform((arg) => arg.toLowerCase());

export const name = z.string({ error: 'Name is required.' }).toLowerCase().trim();

export const phone_number = z
  .string({ error: 'Phone number is required.' })
  .trim()
  .refine(isValidPhoneNumber, { message: 'Invalid phone number' });

export const password = z
  .string({ error: 'Password is required.' })
  .min(8, {
    message: 'Must contain at least an uppercase, lowercase, special character and a number.'
  })
  .refine((value) => upperCaseRegex.test(value), 'Password must contain atleast an uppercase.')
  .refine((value) => numberRegex.test(value), 'Password must contain atleast a number.')
  .refine(
    (value) => specialCharcterRegex.test(value),
    'Password must contain at least a special character.'
  )
  .refine((value) => lowerCaseRegex.test(value), 'Password must contain atleast a lowercase.');
