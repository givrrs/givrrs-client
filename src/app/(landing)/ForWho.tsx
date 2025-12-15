import { TrendingUp, Users, Zap } from 'lucide-react';
import { SectionHeading, SubHeading } from './components/typographys';

const ForWho = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <SectionHeading>Built for everyone</SectionHeading>
          <SubHeading>
            Whether you&apos;re a non-profit, crypto enthusiast, or corporate donor, givrrs has you
            covered
          </SubHeading>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="mb-3 font-semibold text-gray-900">Non-profits</h3>
            <p className="text-gray-600">
              Run transparent campaigns with milestone-based fund releases. Show donors exactly
              where their contributions go.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
              <Zap className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="mb-3 font-semibold text-gray-900">Crypto enthusiasts</h3>
            <p className="text-gray-600">
              Leverage blockchain technology for transparent giving. Accept crypto donations and
              offer NFT rewards to supporters.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="mb-3 font-semibold text-gray-900">Corporate donors</h3>
            <p className="text-gray-600">
              Make corporate giving transparent and efficient. Track every dollar and report impact
              with blockchain-verified records.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
