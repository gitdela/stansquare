import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';

const FAQ = () => {
  return (
    <div className='max-w-7xl mx-auto py-20 px-4 lg:px-0'>
      <div className='flex flex-wrap justify-center items-center gap-20'>
        <div className='w-full'>
          <h1 className='header pb-10 mb-4'>
            Your Questions <span className='text-[#1abead]'>Answered!</span>
          </h1>
          <Accordion
            type='multiple'
            className='w-full flex flex-col gap-4 items-start'
          >
            <AccordionItem value='item-1' className='w-full py-2 md:px-4'>
              <AccordionTrigger className='text-start text-base font-semibold hover:no-underline md:text-lg'>
                How does StanSquare work?
              </AccordionTrigger>
              <AccordionContent className='leading-loose text-sm md:text-base text-gray-700'>
                StanSquare functions as a marketplace where users can post tasks
                or projects they need assistance with. Skilled professionals
                then bid on these tasks, and the user selects the best fit based
                on factors such as price, expertise, and reviews.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2' className='w-full py-2 md:px-4'>
              <AccordionTrigger className='text-start text-base font-semibold hover:no-underline md:text-lg'>
                What types of services are available on StanSquare?
              </AccordionTrigger>
              <AccordionContent className='leading-loose text-sm md:text-base text-gray-700'>
                StanSquare offers a wide range of services, including but not
                limited to graphic design, writing, programming, marketing, home
                repairs, tutoring, and more. If you need help with a task,
                chances are you can find the right expert on StanSquare.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3' className='w-full py-2 md:px-4'>
              <AccordionTrigger className='text-start text-base font-semibold hover:no-underline md:text-lg'>
                How does the automated bill pay service work?
              </AccordionTrigger>
              <AccordionContent className='leading-loose text-sm md:text-base text-gray-700'>
                Our automated bill pay service allows users to schedule and pay
                bills electronically through the StanSquare platform. Simply
                input your bill details, set a payment schedule, and let our
                system take care of the rest. It's a hassle-free way to stay on
                top of your finances and ensure your bills are paid on time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4' className='w-full py-2 md:px-4'>
              <AccordionTrigger className='text-start text-base font-semibold hover:no-underline md:text-lg'>
                Is StanSquare secure and reliable?
              </AccordionTrigger>
              <AccordionContent className='leading-loose text-sm md:text-base text-gray-700'>
                Yes, StanSquare prioritizes the security and reliability of our
                platform. We use advanced encryption technology to protect user
                data and transactions, and we thoroughly vet all service
                providers to ensure they meet our high standards of quality and
                professionalism.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-5' className='w-full py-2 md:px-4'>
              <AccordionTrigger className='text-start text-base font-semibold hover:no-underline md:text-lg'>
                How can I get started with StanSquare?
              </AccordionTrigger>
              <AccordionContent className='leading-loose text-sm md:text-base text-gray-700'>
                Getting started with StanSquare is easy! Simply create an
                account on our website, post your task or project, and start
                receiving bids from skilled professionals. If you're interested
                in using our automated bill pay service, you can also set up
                your bill payment preferences within your account settings.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
