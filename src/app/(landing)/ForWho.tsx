'use client';
import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Zap } from 'lucide-react';
import { SectionHeading, SubHeading } from './components/typographys';
import Section from './components/Section';

export const audiences = [
  {
    title: 'Non-profits',
    description:
      'Run transparent campaigns with milestone-based fund releases. Show donors exactly where their contributions go.',
    icon: Users,
    bg: 'bg-blue-100',
    color: 'text-blue-600'
  },
  {
    title: 'Crypto enthusiasts',
    description:
      'Leverage blockchain technology for transparent giving. Accept crypto donations and offer NFT rewards to supporters.',
    icon: Zap,
    bg: 'bg-purple-100',
    color: 'text-purple-600'
  },
  {
    title: 'Corporate donors',
    description:
      'Make corporate giving transparent and efficient. Track every dollar and report impact with blockchain-verified records.',
    icon: TrendingUp,
    bg: 'bg-orange-100',
    color: 'text-orange-600'
  }
];

const ForWho = () => {
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
    <Section ref={ref} id="for-who" className="bg-gray-50 py-20">
      <div ref={containerRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-inview={isInView} className="mb-16 text-center">
          <SectionHeading>Built for everyone</SectionHeading>
          <SubHeading>
            Whether you&apos;re a non-profit, crypto enthusiast, or corporate donor, givrrs has you
            covered
          </SubHeading>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;

            return (
              <div
                key={audience.title}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
                data-inview={isInView}
                className="translate-y-12 transform rounded-xl border border-gray-200 bg-white p-8 text-center opacity-0 transition-all duration-500 ease-out data-[inview=true]:translate-y-0 data-[inview=true]:opacity-100"
              >
                <div
                  className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full ${audience.bg}`}
                >
                  <Icon className={`h-8 w-8 ${audience.color}`} />
                </div>

                <h3 className="mb-3 font-semibold text-gray-900">{audience.title}</h3>

                <p className="text-gray-600">{audience.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default ForWho;
