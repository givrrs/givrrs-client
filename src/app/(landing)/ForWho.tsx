import { TrendingUp, Users, Zap } from 'lucide-react'
import { SectionHeading, SubHeading } from './components/typographys'

const ForWho = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeading>Built for everyone</SectionHeading>
          <SubHeading>
            Whether you're a non-profit, crypto enthusiast, or corporate donor, givrrs has you covered
          </SubHeading>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-gray-900 mb-3 font-semibold">Non-profits</h3>
            <p className="text-gray-600">
              Run transparent campaigns with milestone-based fund releases. Show donors exactly where their contributions go.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-gray-900 mb-3 font-semibold">Crypto enthusiasts</h3>
            <p className="text-gray-600">
              Leverage blockchain technology for transparent giving. Accept crypto donations and offer NFT rewards to supporters.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-gray-900 mb-3 font-semibold">Corporate donors</h3>
            <p className="text-gray-600">
              Make corporate giving transparent and efficient. Track every dollar and report impact with blockchain-verified records.
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default ForWho
