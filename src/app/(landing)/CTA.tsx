'use client';
import { SectionHeading, SubHeading } from './components/typographys';
import WailtlistForm from './WailtlistForm';

const CTA = () => {
  return (
    <section id="waitlist" className="bg-neutral-950 py-20">
      <div className="z-10 mx-auto flex w-full max-w-240 flex-col items-center gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 text-center">
          <SectionHeading className="text-white">Join the waitlist</SectionHeading>
          <SubHeading className="text-white">
            Be the first to experience the future of giving. Join the waitlist today.
          </SubHeading>
        </div>

        {/* <div className='w-full mx-auto max-w-xl'>
          <WailtlistForm />
        </div> */}
      </div>
    </section>
  );
};

export default CTA;
