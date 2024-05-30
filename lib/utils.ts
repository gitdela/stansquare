import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function authFormSchema(type: string) {
  const schema = z.object({
    firstName:
      type === 'sign-in'
        ? z.string().optional()
        : z.string().min(2, { message: 'First name is required' }),
    lastName:
      type === 'sign-in'
        ? z.string().optional()
        : z.string().min(2, { message: 'First name is required' }),
    phone: type === 'sign-in' ? z.string().optional() : z.string(),
    confirmPassword: type === 'sign-in' ? z.string().optional() : z.string(),
    // both forms
    email: type === 'sign-in' ? z.string().email() : z.string().email(),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' }),
  });

  // if it's a sign up form, check if the confirm password is indeed equal to password
  if (type === 'sign-up') {
    const refinedSchema = schema.refine(
      (data) => data.password === data.confirmPassword, // be careful here to not wrap the expression in a block. use a proper arrow function
      { message: 'Passwords do not match', path: ['confirmPassword'] }
    );

    // console.log('refine', refineSchema);
    return refinedSchema;
  }

  return schema;
}
