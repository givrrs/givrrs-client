import { Button } from '@/components/ui/button';
import { SectionHeading, SubHeading } from './components/typographys';
import { ArrowUpRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-neutral-950 py-20">
      <div className="mx-auto flex max-w-[960px] flex-col">
        <div className="">
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="flex flex-col gap-2 text-center">
              <SectionHeading className="text-white">Join the waitlist</SectionHeading>
              <SubHeading className="text-white">
                Be the first to experience the future of giving. Join the waitlist today.
              </SubHeading>
            </div>

            <Button size="lg">
              Join the Waitlist
              <ArrowUpRight className="size-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
