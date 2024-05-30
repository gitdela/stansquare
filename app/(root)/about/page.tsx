import FAQ from '@/app/components/faqs/faqs';
import { SquareCheckBig } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  return (
    <main className='w-full'>
      <div className='max-w-screen relative h-[400px] bg-[url("/assets/about-hero.jpg")] bg-contain bg-center bg-repeat'>
        <div className='max-w-7xl inset-0 mx-auto absolute text-white py-8 flex flex-col justify-center items-left rounded-xl pt-20 z-50'>
          <h1 className='text-4xl lg:text-6xl font-bold text-white text-left mb-4 leading-snug'>
            About Us
          </h1>
          <p className='text-left'>
            StanSquare is a dynamic online platform that connects individuals
            and businesses with skilled professionals to complete a wide range
            of tasks and projects. From graphic design to home repairs, our
            platform simplifies the process of finding the right talent for any
            job, making it easier and more convenient than ever before.
            Additionally, StanSquare offers an automated bill pay service,
            allowing users to schedule and pay bills electronically with ease
            and efficiency.
          </p>
        </div>
        <div className='absolute inset-0 bg-gradient-to-t from-black from-[-20%] z-30'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-black from-[-20%] z-30'></div>
      </div>
      <div className='max-w-7xl mx-auto py-32 px-8 lg:px-0'>
        <div className='flex flex-wrap lg:flex-nowrap justify-center items-start gap-12'>
          <div className='w-full lg:w-1/2 flex flex-col gap-4'>
            <h1 className='header text-left pb-4'>Our Vision</h1>
            <p>
              The go to destination for anyone seeking to outsource tasks or
              projects, as well as for skilled professionals looking to showcase
              their talents and grow their businesses by continually enhancing
              our platform and expanding our offerings.
            </p>
            <div className='flex flex-col gap-4 mt-6'>
              <span className='flex items-center justify-start gap-4'>
                <SquareCheckBig className='text-[#1abead]' />
                <p>
                  Prioritize the safety and security of your financial
                  information.
                </p>
              </span>
              <span className='flex items-center justify-start gap-4'>
                <SquareCheckBig className='text-[#1abead]' />
                <p>Believe in clear and upfront communication.</p>
              </span>
              <span className='flex items-center justify-start gap-4'>
                <SquareCheckBig className='text-[#1abead]' />
                <p>Constantly strive to develop new and improved solutions.</p>
              </span>
              <span className='flex items-center justify-start gap-4'>
                <SquareCheckBig className='text-[#1abead]' />
                <p>
                  Manage your finances anytime, anywhere with our user-friendly
                  platform.
                </p>
              </span>
            </div>
          </div>
          <Image
            src={'/assets/group-afro-about.webp'}
            width={400}
            height={400}
            alt='about-us'
            className='w-full lg:w-1/2 rounded-xl'
          />
        </div>
        <div className='flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-start gap-12 py-32'>
          <div className='w-full lg:w-1/2 flex flex-col gap-8'>
            <h1 className='header text-left'>Our Mission</h1>
            <p className=''>
              Our mission at StanSquare is to empower individuals and businesses
              by providing them with access to a vast network of skilled
              professionals. We strive to streamline the task outsourcing
              process, making it simple, efficient, and cost-effective for both
              clients and service providers.Through our platform, we aim to
              facilitate meaningful connections and foster success for all
              parties involved.
            </p>
          </div>
          <Image
            src={'/assets/shaking-hands.webp'}
            width={400}
            height={400}
            alt='about-us'
            className='w-full lg:w-1/2 rounded-xl'
          />
        </div>
        <div className='flex flex-wrap justify-center gap-8 pb-12 text-white font-bold'>
          <div className='bg-[#c9ad5c] flex flex-col gap-3 items-center p-16 rounded-3xl'>
            <span className='text-5xl'>30k+</span>
            <span>Worldwide Clients</span>
          </div>
          <div className='bg-[#5ca6c9] flex flex-col gap-3 items-center p-16 rounded-3xl'>
            <span className='text-5xl'>460+</span>
            <span>Succesful Projects</span>
          </div>
          <div className='bg-[#5bc9a0] flex flex-col gap-3 items-center p-16 rounded-3xl'>
            <span className='text-5xl'>30k+</span>
            <span>Worldwide Clients</span>
          </div>
          <div className='bg-[#b65cc9] flex flex-col gap-3 items-center p-16 rounded-3xl'>
            <span className='text-5xl'>30k+</span>
            <span>Worldwide Clients</span>
          </div>
        </div>
        <FAQ />
      </div>
    </main>
  );
};

export default About;
