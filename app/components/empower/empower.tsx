import { Wallet } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Empower = () => {
  return (
    <div className='bg-[#eef8f5] py-20'>
      <div className='max-w-7xl px-8 lg:px-0 mx-auto flex flex-col gap-10 justify-center items-center'>
        <h1 className='header'>Empowering Your Future</h1>
        <p className='text-center max-w-4xl'>
          We provide innovative technological solutions that make managing your
          skills easier, faster and more secured. Our suite of services is
          designed to help individuals and businesses achieve their goals.
        </p>
        <div className='w-full flex flex-wrap md:grid md:grid-cols-2 gap-20'>
          <div className='bg-white flex flex-col w-full space-y-4 px-6 py-8 rounded-xl'>
            <Image
              src={'/assets/wallet-money.svg'}
              width={70}
              height={70}
              alt='wallet'
            />
            <h1 className='font-bold text-2xl'>Bill Payment</h1>
            <p>
              Simplify your bill payment with our automated bill pay service.
              Schedule and pay your bill electronically on time, and without any
              hassle.
            </p>
          </div>
          <div className='bg-white flex flex-col w-full space-y-4 px-6 py-8 rounded-xl'>
            <Image
              src={'/assets/shield.svg'}
              width={70}
              height={70}
              alt='wallet'
            />
            <h1 className='font-bold text-2xl'>Security Features</h1>
            <p>
              We prioritze the security of your information. We use
              industry-leading security measures to protect your data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empower;
