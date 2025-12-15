'use client';
import Image from 'next/image';
import HeroImage from '@/app/assets/people.png';
import { Badge } from '@/components/ui/badge';
import { SectionHeading, SubHeading } from './components/typographys';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useEffectEvent, useState } from 'react';

const Hero = () => {
  const textOptions = ['Fee-free', 'Instant', 'Global', 'Transparent'];

  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadedState = useEffectEvent(() => {
    setIsLoaded(true);
  });

  useEffect(() => {
    handleLoadedState();
  }, []);

  return (
    <div id="home" className="w-dvw pt-40">
      <section className="mx-auto flex h-4/5 w-[95vw] max-w-5xl flex-col items-center justify-center gap-6 text-center">
        <div className="w-full">
          <Badge
            data-loaded={isLoaded}
            className="translate-y-6 rounded-full border border-green-300 bg-green-100 text-green-600 opacity-0 transition-all delay-300 duration-700 ease-out data-[loaded=true]:translate-y-0 data-[loaded=true]:opacity-100"
          >
            The Future of Fundraising
          </Badge>
          <SectionHeading
            data-loaded={isLoaded}
            className="translate-y-6 opacity-0 transition-all delay-300 duration-700 ease-out data-[loaded=true]:translate-y-0 data-[loaded=true]:opacity-100"
          >
            Fundraise without borders.
            <div className="relative flex h-[60px] w-full overflow-hidden text-green-600 italic sm:h-[80px]">
              <ul className="flip4 w-full">
                {textOptions.map((text) => (
                  <li key={text} className="h-[100px] w-full">
                    {text}.
                  </li>
                ))}
              </ul>
            </div>
          </SectionHeading>
          <SubHeading
            data-loaded={isLoaded}
            className="translate-y-6 opacity-0 transition-all delay-500 duration-500 ease-out data-[loaded=true]:translate-y-0 data-[loaded=true]:opacity-100"
          >
            givrrs combines the ease of traditional crowdfunding with the power of Web3 and AI.
            Accept fiat and crypto donations in a single, seamless campaign.
          </SubHeading>
        </div>

        <div
          data-loaded={isLoaded}
          className="mx-auto flex w-full translate-y-6 flex-col gap-4 opacity-0 transition-all delay-700 duration-700 ease-out data-[loaded=true]:translate-y-0 data-[loaded=true]:opacity-100 md:max-w-fit md:flex-row"
        >
          <Button size="lg" className="w-full md:w-auto">
            Join waitlist
            <ArrowUpRight className="size-6" />
          </Button>

          <Button size="lg" variant="outline" className="w-full md:w-auto">
            Learn more
          </Button>
        </div>
      </section>

      <figure
        data-loaded={isLoaded}
        className="mx-auto mt-12 h-1/5 w-[90vw] max-w-5xl translate-y-6 opacity-0 transition-all duration-1000 ease-out data-[loaded=true]:translate-y-0 data-[loaded=true]:opacity-100 md:mt-24"
      >
        <Image
          src={HeroImage}
          alt="illustration of people"
          className="object-center"
          sizes="100vw"
        />
      </figure>
    </div>
  );
};

export default Hero;
