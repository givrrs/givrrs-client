import CTA from "./(landing)/CTA";
import Features from "./(landing)/Features";
import ForWho from "./(landing)/ForWho";
import Hero from "./(landing)/Hero";
import HowItWorks from "./(landing)/HowItWorks";

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
