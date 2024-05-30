import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='w-full bg-[#04191c]'>
      <div className='max-w-7xl mx-auto py-32 flex justify-around items-center flex-wrap text-white'>
        <div className=''>
          <h1 className='header'>StanSquare</h1>
        </div>
        <div className='flex flex-col gap-4'>
          <h4 className='uppercase font-semibold'>Pages</h4>
          <Link href={'/about'} className='capitalize text-sm text-gray-400'>
            about us
          </Link>
          <Link href={'/'} className='capitalize text-sm text-gray-400'>
            contact
          </Link>
        </div>
        <div className='flex flex-col gap-4'>
          <h4 className='uppercase font-semibold'>Utility Pages</h4>
          <Link href={'/'} className='capitalize text-sm text-gray-400'>
            privacy policy
          </Link>
          <Link href={'/'} className='capitalize text-sm text-gray-400'>
            terms of service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
