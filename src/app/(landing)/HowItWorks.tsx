import { SectionHeading, SubHeading } from "./components/typographys"


const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeading>How givrrs works</SectionHeading>
          <SubHeading>
            Seamlessly bridging Web2 and Web3 for the best fundraising experience
          </SubHeading>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                1
              </div>
              <h3 className="text-gray-900 mb-3 font-semibold">Create your campaign</h3>
              <p className="text-gray-600">
                Set up your fundraising campaign in minutes. Add your story, goals, and milestones. Choose to accept fiat, crypto, or both.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                2
              </div>
              <h3 className="text-gray-900 mb-3 font-semibold">Receive donations</h3>
              <p className="text-gray-600">
                Donors can contribute using credit cards, PayPal, or cryptocurrency. All transactions are recorded on blockchain for transparency.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
            <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
              3
            </div>
            <h3 className="text-gray-900 mb-3 font-semibold">Achieve milestones</h3>
            <p className="text-gray-600">
              Smart contracts automatically release funds as you hit milestones. Reward donors with exclusive NFTs and keep them updated.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
