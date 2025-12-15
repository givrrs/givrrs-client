import { Award, DollarSign, Globe, Shield, TrendingUp, Wallet } from 'lucide-react'
import { SectionHeading, SubHeading } from './components/typographys'

const Features = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeading>What can givrrs do?</SectionHeading>
          <SubHeading>
            seamlessly combines traditional and blockchain-based giving.
          </SubHeading>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-gray-900 font-semibold mb-3">
              Complete Transparency
            </h3>
            <p className="text-gray-600">
              Track every donation on the blockchain. Donors can see exactly where their money goes with immutable records.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <DollarSign className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-gray-900 font-semibold mb-3">
              Lower Fees
            </h3>
            <p className="text-gray-600">
              Only 1-3% transaction fees compared to traditional platforms. More money goes directly to your cause.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Wallet className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-gray-900 font-semibold mb-3">
              Flexible Payments
            </h3>
            <p className="text-gray-600">
              Accept both fiat (credit cards, PayPal) and crypto (BTC, ETH, USDT). Reach more donors globally.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-orange-600" />
            </div>
            <h3 className="text-gray-900 font-semibold mb-3">
              Smart Contracts
            </h3>
            <p className="text-gray-600">
              Automate fund release based on milestones. Funds are distributed transparently as goals are achieved.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-pink-600" />
            </div>
            <h3 className="text-gray-900 font-semibold mb-3">
              Global Reach
            </h3>
            <p className="text-gray-600">
              Cross-border fundraising made easy. Accept donations from anywhere in the world without restrictions.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Award className="w-7 h-7 text-yellow-600" />
            </div>
            <h3 className="text-gray-900 font-semibold mb-3">
              NFT Rewards
            </h3>
            <p className="text-gray-600">
              Offer unique NFT rewards to donors. Create memorable experiences and incentivize larger contributions.
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Features
