import { SectionHeading, SubHeading } from './components/typographys';

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <SectionHeading>How givrrs works</SectionHeading>
          <SubHeading>
            Seamlessly bridging Web2 and Web3 for the best fundraising experience
          </SubHeading>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="relative">
            <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white">
                1
              </div>
              <h3 className="mb-3 font-semibold text-gray-900">Create your campaign</h3>
              <p className="text-gray-600">
                Set up your fundraising campaign in minutes. Add your story, goals, and milestones.
                Choose to accept fiat, crypto, or both.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white">
                2
              </div>
              <h3 className="mb-3 font-semibold text-gray-900">Receive donations</h3>
              <p className="text-gray-600">
                Donors can contribute using credit cards, PayPal, or cryptocurrency. All
                transactions are recorded on blockchain for transparency.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white">
              3
            </div>
            <h3 className="mb-3 font-semibold text-gray-900">Achieve milestones</h3>
            <p className="text-gray-600">
              Smart contracts automatically release funds as you hit milestones. Reward donors with
              exclusive NFTs and keep them updated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
