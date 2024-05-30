'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import CustomFormItem from '@/components/custom-form-item';
import Link from 'next/link';
import { authFormSchema } from '@/lib/utils';

const AuthForm = ({ type }: { type: 'sign-in' | 'sign-up' }) => {
  const formSchema = authFormSchema(type);
  const route = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (type === 'sign-up') {
      route.push('/thankyou');
    }

    if (type === 'sign-in') {
      route.push('/dashboard');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-8'>
        {type === 'sign-up' && (
          <>
            <div className='w-full flex gap-2'>
              <CustomFormItem
                control={form.control}
                name='firstName'
                label='First Name'
                placeholder=''
              />
              <CustomFormItem
                control={form.control}
                name='lastName'
                label='Last Name'
                placeholder=''
              />
            </div>
            <CustomFormItem
              control={form.control}
              name='phone'
              label='Phone'
              placeholder='Enter your telephone'
            />
          </>
        )}
        <CustomFormItem
          control={form.control}
          name='email'
          label='Email'
          placeholder='Enter your email'
        />
        <CustomFormItem
          control={form.control}
          name='password'
          label='Password'
          placeholder='Enter your password'
        />
        {type === 'sign-up' && (
          <div className='relative'>
            <CustomFormItem
              control={form.control}
              name='confirmPassword'
              label='Confirm Password'
              placeholder='Retype Password'
            />
          </div>
        )}

        <div className='w-full flex flex-col'>
          <Button type='submit' className='bg-[#1da6b9] hover:bg-[#1da6b9]'>
            {type === 'sign-in' ? 'Log In' : 'Sign Up'}
          </Button>
        </div>
      </form>

      <footer className='mt-8 text-center'>
        {type === 'sign-up'
          ? `Already have an account?`
          : `Don't have an account?`}{' '}
        Click here to{' '}
        <Link
          href={type === 'sign-up' ? '/sign-in' : '/sign-up'}
          className='text-blue-500 underline'
        >
          {type === 'sign-up' ? 'sign in' : 'sign up'}
        </Link>
        .
      </footer>
    </Form>
  );
};

export default AuthForm;
