import AuthForm from '@/components/authform';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SignUp = () => {
  return (
    <main className='relative w-[30%] bg-white mx-auto space-y-6 pt-8 pb-16 px-8 rounded-xl z-10'>
      <Link href={'/'} className='flex items-center justify-start'>
        <Image
          src={'/assets/stan-logo-black.svg'}
          alt='logo'
          width={180}
          height={100}
          className='flex items-center justify-center'
        />
      </Link>
      <div className='flex flex-col gap-2'>
        <h1 className='header text-3xl text-left'>Sign Up</h1>
        <p className='text-left text-muted-foreground'>
          Enter your details to create an account
        </p>
      </div>

      <AuthForm type='sign-up' />
    </main>
  );
};

export default SignUp;
