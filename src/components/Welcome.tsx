import Image from "next/image";
import Link from "next/link";
import Subtitle from "./ui/Subtitle";
import Section from "./ui/Section";
import Button from "./ui/Button";

export default function Welcome() {
  return (
    <Section>
      <>
        <div className="hidden lg:block absolute top-0 right-0 z-[-1]">
          <Image
            src="/welcome-element.svg"
            alt="welcome"
            width={295}
            height={171}
          />
        </div>
        <div className="max-container">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 cLg:gap-[75px]">
            <div className="flex-1 relative">
              <Image
                src="/welcome-img.png"
                alt="welcome"
                width={654}
                height={501}
              />

              <div className="absolute right-[105px] bottom-[50px] hidden cLg:flex flex-col items-center py-4 px-2.5 border-[3px] border-[#f6fafb] rounded-lg recommendation-support-bg h-auto w-[122px]">
                <Image
                  src="/check-badge-icon.svg"
                  alt="check-badge"
                  width={39}
                  height={39}
                  className="mb-2.5"
                />
                <p className="text-[#08ac9e] font-bold">24/7</p>
                <p className="regular-14">Guide support</p>
              </div>
            </div>

            <div className="flex-1 xl:max-w-[441px] w-full">
              <Subtitle
                content="Welcome to Travor"
                img="/sunglass-icon.png"
                size={{ width: 42, height: 16 }}
              />
              <h1 className="text-[28px] xs:text-[32px] cLg:text-[36px] text-[#1f3347] mb-2.5 font-bold leading-[1.38]">
                We Recommend Beautiful{" "}
                <span className="text-[#ff621f]">Destination</span> every month
              </h1>
              <p className="my-[20px] md:my-[35px] text-[#595959]">
                Travor is one of the most popular Travel agency for those who
                want to explore the wold and try to make adventure as well as we
                can provide beautiful destination around the world and make you
                trip
              </p>

              <Button href="/about">Learn More</Button>
            </div>
          </div>
        </div>
      </>
    </Section>
  );
}
