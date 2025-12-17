'use client';
import { useEffect, useRef, useState } from 'react';
import Section from './components/Section';
import { SectionHeading, SubHeading } from './components/typographys';

export const steps = [
  {
    step: 1,
    title: 'Create your campaign',
    description:
      'Set up your fundraising campaign in minutes. Add your story, goals, and milestones. Choose to accept fiat, crypto, or both.'
  },
  {
    step: 2,
    title: 'Receive donations',
    description:
      'Donors can contribute using credit cards, PayPal, or cryptocurrency. All transactions are recorded on blockchain for transparency.'
  },
  {
    step: 3,
    title: 'Achieve milestones',
    description:
      'Smart contracts automatically release funds as you hit milestones. Reward donors with exclusive NFTs and keep them updated.'
  }
];

const HowItWorks = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '-30% 0px -30% 0px', threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Section ref={ref} id="how-it-works">
      <div ref={containerRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-inview={isInView} className="mb-16 text-center">
          <SectionHeading>How givrrs works</SectionHeading>
          <SubHeading>
            Seamlessly bridging Web2 and Web3 for the best fundraising experience
          </SubHeading>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => (
            <div
              key={item.step}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
              data-inview={isInView}
              className="relative translate-y-12 transform opacity-0 transition-all duration-500 ease-out data-[inview=true]:translate-y-0 data-[inview=true]:opacity-100"
            >
              <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white">
                  {item.step}
                </div>

                <h3 className="mb-3 font-semibold text-gray-900">{item.title}</h3>

                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;
