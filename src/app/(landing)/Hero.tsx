import Image from "next/image"
import HeroImage from "@/app/assets/people.png"
import { Badge } from "@/components/ui/badge"
import { SectionHeading, SubHeading } from "./components/typographys"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

const Hero = () => {
  return (
    <div
      className="w-dvw pt-40"
    >
      <section className="flex h-4/5 mx-auto w-[95vw] max-w-5xl flex-col gap-6 justify-center text-center items-center">
        <div className="w-full">
          <Badge className="rounded-full bg-green-100 border border-green-300 text-green-600">
            The Future of Fundraising
          </Badge>
          <SectionHeading>
            Fundraise without borders.
            <p className="text-green-600 italic">Crypto meets cash.</p>
          </SectionHeading>
          <SubHeading>
            givrrs combines the ease of traditional crowdfunding with the power of Web3 and AI.
            Accept fiat and crypto donations in a single, seamless campaign.
          </SubHeading>

        </div>

        <div className="flex mx-auto md:max-w-fit flex-col md:flex-row gap-4 w-full">
          <Button
            size="lg"
            className="w-full md:w-auto"
          >
            Join waitlist
            <ArrowUpRight className="size-6" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full md:w-auto"
          >
            Learn more
          </Button>
        </div>

      </section>

      <figure
        className="mx-auto w-[90vw] mt-12 md:mt-24 max-w-5xl h-1/5"
      >
        <Image
          src={HeroImage}
          alt="illustration of people"
          className="object-center"
          sizes="100vw"
        />
      </figure>
    </div>
  )
}

export default Hero
