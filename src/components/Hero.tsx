import Image from "next/image";
import Link from "next/link";
import Filter from "./ui/Filter";
import Section from "./ui/Section";
import Button from "./ui/Button";
import Subtitle from "./ui/Subtitle";

export default function Hero() {
  return (
    <>
      <Section
        className="hero-bg"
        padding="pt-[100px] pb-[140px] cLg:pt-[200px] 2xl:pb-[200px] 3xl:py-[250px]"
      >
        <>
          <div className="max-container flex flex-col-reverse items-center cLg:flex-row">
            <div className="flex flex-col gap-5 max-w-[540px] mx-auto cLg:mx-0">
              <Subtitle
                content="Explore the World"
                img="/earth-location.png"
                size={{ width: 28, height: 28 }}
                noMargin
              />
              <h1 className="text-[40px] xs:text-[46px] md:text-[54px] lg:text-[60px] text-[#1f3347] font-bold leading-[1.2]">
                {`Let’s`} find your dream{" "}
                <span className="text-[#ff621f]">Destination</span> make with
                enjoy
              </h1>
              <p className="mt-2.5 mb-[25px] text-[#494949]">
                Travor is one of the most popular Travel agency for those who
                want to explore the wold and try to make adventure
              </p>

              <div className="flex items-center gap-[35px] relative z-50">
                <Button href="/about">Plan a Trip</Button>
                <Link href="/" className="text-[#08ac9e] underline">
                  Get price
                </Link>
              </div>
            </div>

            <div className="static max-w-[500px] cLg:absolute cLg:right-[20px] cLg:top-[55%] cLg:translate-y-[-50%] xl:right-[100px] 2xl:right-[10%] 2xl:max-w-[550px] fullHD:top-[60%] fullHD:right-[220px] fullHD:max-w-[743px]">
              <Image
                src="/hero-img.png"
                alt="hero-img"
                width={743}
                height={749}
              />
            </div>
          </div>

          <div className="hidden cLg:block absolute top-[200px] left-[120px]">
            <Image
              src="/hero-element-1.svg"
              alt="hero-element"
              width={66}
              height={97}
            />
          </div>

          <div className="absolute left-0 bottom-[45px]">
            <Image
              src="/hero-element-2.svg"
              alt="hero-element"
              width={564}
              height={448}
            />
          </div>
        </>
      </Section>
      <Section className="relative z-50 mt-10 cLg:mt-[-66px]" padding="p-0">
        <Filter />
      </Section>
    </>
  );
}
