'use client';
import { useEffect, useRef, useState } from 'react';
import { Award, DollarSign, Globe, Shield, TrendingUp, Wallet } from 'lucide-react';
import { SectionHeading, SubHeading } from './components/typographys';
import Section from './components/Section';

export const features = [
  {
    title: 'Complete Transparency',
    description:
      'Track every donation on the blockchain. Donors can see exactly where their money goes with immutable records.',
    icon: Shield,
    bg: 'bg-green-100',
    color: 'text-green-600'
  },
  {
    title: 'Lower Fees',
    description:
      'Only 1–3% transaction fees compared to traditional platforms. More money goes directly to your cause.',
    icon: DollarSign,
    bg: 'bg-blue-100',
    color: 'text-blue-600'
  },
  {
    title: 'Flexible Payments',
    description:
      'Accept both fiat (credit cards, PayPal) and crypto (BTC, ETH, USDT). Reach more donors globally.',
    icon: Wallet,
    bg: 'bg-purple-100',
    color: 'text-purple-600'
  },
  {
    title: 'Smart Contracts',
    description:
      'Automate fund release based on milestones. Funds are distributed transparently as goals are achieved.',
    icon: TrendingUp,
    bg: 'bg-orange-100',
    color: 'text-orange-600'
  },
  {
    title: 'Global Reach',
    description:
      'Cross-border fundraising made easy. Accept donations from anywhere in the world without restrictions.',
    icon: Globe,
    bg: 'bg-pink-100',
    color: 'text-pink-600'
  },
  {
    title: 'NFT Rewards',
    description:
      'Offer unique NFT rewards to donors. Create memorable experiences and incentivize larger contributions.',
    icon: Award,
    bg: 'bg-yellow-100',
    color: 'text-yellow-600'
  }
];

const Features = () => {
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
    <Section ref={ref} id="features" className="bg-muted py-20">
      <div ref={containerRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-inview={isInView} className="mb-16 text-center">
          <SectionHeading>What can givrrs do?</SectionHeading>
          <SubHeading>seamlessly combines traditional and blockchain-based giving.</SubHeading>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
                data-inview={isInView}
                className="translate-y-12 transform rounded-xl border border-gray-200 bg-white p-8 opacity-0 transition-all duration-500 ease-out hover:shadow-lg data-[inview=true]:translate-y-0 data-[inview=true]:opacity-100"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-full ${feature.bg}`}
                >
                  <Icon className={`h-7 w-7 ${feature.color}`} />
                </div>

                <h3 className="mb-3 font-semibold text-gray-900">{feature.title}</h3>

                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Features;
