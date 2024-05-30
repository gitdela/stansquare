import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='z-10 bg-[#04191c] py-4'>
      <div className='sticky w-full px-8 lg:px-0'>
        <div className='max-w-7xl mx-auto py-1 flex justify-between items-center text-white'>
          <Image
            src={'/assets/stan-square-logo.svg'}
            alt='logo'
            width={180}
            height={80}
          />
          {/* <Link href='/'>StanSquare</Link> */}
          <div className='flex items-center justify-between gap-4'>
            <Button
              asChild
              variant={'ghost'}
              className='hover:bg-transparent hover:text-[#1abead]'
            >
              <Link href='/sign-in'>Login</Link>
            </Button>
            <Button
              asChild
              variant={'default'}
              className='text-black bg-[#1abead] hover:bg-[#1abead] hover:text-white rounded-full py-2 px-6'
            >
              <Link href='/sign-up'>Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
