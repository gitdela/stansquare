import { TerminalSquare } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const CoreBenefits = () => {
  return (
    <div className='py-20'>
      <div className='max-w-7xl px-8 lg:px-0 mx-auto flex flex-col gap-10 justify-center items-center'>
        <h1 className='header'>Core Benefits</h1>
        <div className='w-full flex flex-wrap md:grid md:grid-cols-3 gap-20'>
          <div className='flex flex-col w-full text-center space-y-4'>
            <div className='w-full flex items-center justify-center'>
              <Image
                src={'/assets/corebenefit1.svg'}
                width={70}
                height={70}
                alt='corebenefits'
              />
            </div>
            <h1 className='font-bold text-2xl'>Focus on what matters</h1>
            <p className='text-sm'>
              Prioritize your task with our well-vetted contractors (developers)
              by using our easy and intuitive interface. Create a contract for
              our trained professional and achieve your technological needs
            </p>
          </div>
          <div className='flex flex-col w-full text-center space-y-4'>
            <div className='w-full flex items-center justify-center'>
              <Image
                src={'/assets/corebenefit2.svg'}
                width={70}
                height={70}
                alt='corebenefits'
              />
            </div>
            <h1 className='font-bold text-2xl'>Reduce stress</h1>
            <p className='text-sm'>
              Stay organized and avoid overwhelmed with our trained contract
              task managers see your projects executed to the very best.
            </p>
          </div>
          <div className='flex flex-col w-full items-center text-center space-y-4'>
            <div className='w-full flex items-center justify-center'>
              <Image
                src={'/assets/corebenefit3.svg'}
                width={70}
                height={70}
                alt='corebenefits'
              />
            </div>
            <h1 className='font-bold text-2xl'>Get more done</h1>
            <p className='text-sm'>
              Achieve more task by contracting our trained professional do your
              job in a more effective and efficient way. Let get your job done
              your way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreBenefits;
