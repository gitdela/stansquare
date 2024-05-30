import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className='max-w-screen relative h-[750px] bg-[url("/assets/hero-image-ss.webp")] bg-cover bg-center bg-no-repeat'>
      <div className='absolute w-full lg:w-[80%] xl:w-[60%] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-white p-8 flex flex-col justify-center items-center rounded-xl z-50'>
        <h1 className='text-4xl md:text-6xl font-bold text-center mb-4 leading-snug'>
          Sell a contract with your skill set
        </h1>
        <p className='text-center md:text-xl'>
          We help buyers or developers get the best target
        </p>
        <div className='flex flex-col gap-4 mt-6 lg:flex-row'>
          <Button
            variant={'default'}
            className='text-sm py-6 lg:text-base rounded-full px-8 bg-[#1b5861] hover:bg-[#1b5861] hover:bg-opacity-80 hover:text-white'
          >
            Sell a Contract
          </Button>
          <Button
            variant={'default'}
            className='text-white rounded-full py-6 px-8 bg-opacity-50 bg-gray-600 hover:bg-gray-700 hover:bg-opacity-50 hover:text-white'
          >
            Buy a Contract
          </Button>
          <Button
            variant={'default'}
            className='text-whitet rounded-full py-6 px-8 bg-white text-black hover:bg-white'
          >
            Pay Bill
          </Button>
        </div>
      </div>
      <div className='absolute inset-0 bg-gradient-to-t from-black from-[-30%] z-30'></div>
      <div className='absolute inset-0 bg-gradient-to-b from-black from-[-60%] z-30'></div>
    </div>
  );
};

export default Hero;
