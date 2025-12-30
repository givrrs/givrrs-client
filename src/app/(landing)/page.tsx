import CTA from './CTA';
import Features from './Features';
import ForWho from './ForWho';
import Hero from './Hero';
import HowItWorks from './HowItWorks';

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <Features />
      <HowItWorks />
      <ForWho />
      <CTA />
    </div>
  );
}
