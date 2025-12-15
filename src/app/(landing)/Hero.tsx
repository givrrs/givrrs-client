import Image from 'next/image';
import HeroImage from '@/app/assets/people.png';
import { Badge } from '@/components/ui/badge';
import { SectionHeading, SubHeading } from './components/typographys';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="w-dvw pt-40">
      <section className="mx-auto flex h-4/5 w-[95vw] max-w-5xl flex-col items-center justify-center gap-6 text-center">
        <div className="w-full">
          <Badge className="rounded-full border border-green-300 bg-green-100 text-green-600">
            The Future of Fundraising
          </Badge>
          <SectionHeading>
            Fundraise without borders.
            <p className="text-green-600 italic">Crypto meets cash.</p>
          </SectionHeading>
          <SubHeading>
            givrrs combines the ease of traditional crowdfunding with the power of Web3 and AI.
            Accept fiat and crypto donations in a single, seamless campaign.
          </SubHeading>
        </div>

        <div className="mx-auto flex w-full flex-col gap-4 md:max-w-fit md:flex-row">
          <Button size="lg" className="w-full md:w-auto">
            Join waitlist
            <ArrowUpRight className="size-6" />
          </Button>

          <Button size="lg" variant="outline" className="w-full md:w-auto">
            Learn more
          </Button>
        </div>
      </section>

      <figure className="mx-auto mt-12 h-1/5 w-[90vw] max-w-5xl md:mt-24">
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
