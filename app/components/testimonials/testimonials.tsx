import { Wallet } from 'lucide-react';
import React from 'react';

const Testimonials = () => {
  return (
    <div className='py-20'>
      <div className='max-w-7xl mx-auto px-8 lg:px-0 flex flex-col gap-16 justify-center items-center'>
        <div className='flex flex-col gap-2'>
          <h1 className='header'>Trusted Happy Customer</h1>
          <p className='text-center text-lg'>
            Hear what our customers have to say about our services.
          </p>
        </div>
        <div className='w-full flex flex-wrap md:grid md:grid-cols-3 gap-4'>
          <div className='bg-[#f3f3f3] flex flex-col w-full space-y-4 px-6 py-8 rounded-md'>
            <div className='flex items-start justify-start gap-2'>
              <div className='size-4 bg-[#8a9962] rounded-full mt-1.5'></div>
              <div className='flex flex-col justify-start'>
                <span className='text-lg font-semibold'>Kenneth Okechuku</span>
                <span className='text-sm text-gray-700'>Home Developer</span>
              </div>
            </div>
            <p className='text-start'>
              "I used this service for the past few weeks as both online and
              on-side home teacher and i can testify the service met my needs."
            </p>
          </div>
          <div className='bg-[#f3f3f3] flex flex-col w-full space-y-4 px-6 py-8 rounded-md'>
            <div className='flex items-start justify-start gap-2'>
              <div className='size-4 bg-[#8a9962] rounded-full mt-1.5'></div>
              <div className='flex flex-col justify-start'>
                <span className='text-lg font-semibold'>
                  Olabanmi Fasusi Sunday
                </span>
                <span className='text-sm text-gray-700'>Backend Developer</span>
              </div>
            </div>
            <p className='text-start'>
              "I created a developer contract offer with ease. And I was paid
              immediately i finished working on the buyer's requirement. I think
              this is a good service for a start"
            </p>
          </div>
          <div className='bg-[#f3f3f3] flex flex-col w-full space-y-4 px-6 py-8 rounded-md'>
            <div className='flex items-start justify-start gap-2'>
              <div className='size-4 bg-[#8a9962] rounded-full mt-1.5'></div>
              <div className='flex flex-col justify-start'>
                <span className='text-lg font-semibold'>Mercy Yakabu</span>
                <span className='text-sm text-gray-700'>Interior Designer</span>
              </div>
            </div>
            <p className='text-start'>
              "I will recommend this service any day. I was paid immediate i
              completed my client tasks. Ensure you do exactly what the client
              specifies in the description page."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
