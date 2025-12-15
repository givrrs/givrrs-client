import { Button } from '@/components/ui/button'
import { SectionHeading, SubHeading } from './components/typographys'
import { ArrowUpRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-green-600 to-green-950">
      <div className="layout-content-container flex flex-col max-w-[960px] mx-auto">
        <div className="">
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="flex flex-col gap-2 text-center">
              <SectionHeading className='text-white'>Join the waitlist</SectionHeading>
              <SubHeading className='text-white'>
                Be the first to experience the future of giving. Join the waitlist today.
              </SubHeading>
            </div>

            <Button
              size="lg"
              variant="secondary"
            >
              Join the Waitlist
              <ArrowUpRight className="size-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
