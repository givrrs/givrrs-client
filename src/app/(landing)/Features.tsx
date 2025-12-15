import { Award, DollarSign, Globe, Shield, TrendingUp, Wallet } from 'lucide-react';
import { SectionHeading, SubHeading } from './components/typographys';

const Features = () => {
  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <SectionHeading>What can givrrs do?</SectionHeading>
          <SubHeading>seamlessly combines traditional and blockchain-based giving.</SubHeading>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <Shield className="h-7 w-7 text-green-600" />
            </div>
            <h3 className="mb-3 font-semibold text-gray-900">Complete Transparency</h3>
            <p className="text-gray-600">
              Track every donation on the blockchain. Donors can see exactly where their money goes
              with immutable records.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
              <DollarSign className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="mb-3 font-semibold text-gray-900">Lower Fees</h3>
            <p className="text-gray-600">
              Only 1-3% transaction fees compared to traditional platforms. More money goes directly
              to your cause.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
              <Wallet className="h-7 w-7 text-purple-600" />
            </div>
            <h3 className="mb-3 font-semibold text-gray-900">Flexible Payments</h3>
            <p className="text-gray-600">
              Accept both fiat (credit cards, PayPal) and crypto (BTC, ETH, USDT). Reach more donors
              globally.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
              <TrendingUp className="h-7 w-7 text-orange-600" />
            </div>
            <h3 className="mb-3 font-semibold text-gray-900">Smart Contracts</h3>
            <p className="text-gray-600">
              Automate fund release based on milestones. Funds are distributed transparently as
              goals are achieved.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-pink-100">
              <Globe className="h-7 w-7 text-pink-600" />
            </div>
            <h3 className="mb-3 font-semibold text-gray-900">Global Reach</h3>
            <p className="text-gray-600">
              Cross-border fundraising made easy. Accept donations from anywhere in the world
              without restrictions.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100">
              <Award className="h-7 w-7 text-yellow-600" />
            </div>
            <h3 className="mb-3 font-semibold text-gray-900">NFT Rewards</h3>
            <p className="text-gray-600">
              Offer unique NFT rewards to donors. Create memorable experiences and incentivize
              larger contributions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
