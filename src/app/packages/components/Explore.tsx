import Section from "@/components/ui/Section";
import Subtitle from "@/components/ui/Subtitle";
import Image from "next/image";
import React from "react";

type ExploreProps = {
  title: string;
  duration: string;
  averageRate: number;
  imgUrl: string;
  desc: string;
};

const Explore = ({
  title,
  duration,
  averageRate,
  imgUrl,
  desc,
}: ExploreProps) => {
  return (
    <>
      <Section padding="py-[60px] md:py-[80px] cLg:py-[100px] xl:py-[120px]">
        <div className="max-container flex flex-col md:flex-row items-center gap-[40px] xl:gap-[60px] 2xl:gap-[100px]">
          <div className="relative flex-1 w-full">
            <Image
              src={imgUrl}
              width={546}
              height={616}
              className="object-cover w-full h-full rounded-[30px]"
              alt="imgUrl"
            />
            <div className="hidden cLg:block absolute left-[-170px] top-[55%] py-[25px] px-[15px] rounded-[10px] bg-[#faf8fd] text-[#08ac9e] capitalize text-ceter tracking-[5px] -rotate-90 z-[-1]">
              Explore Destination
            </div>
          </div>

          <div className="flex-1 cLg:max-w-[524px] w-full">
            <Subtitle content={duration} className="mb-[20px]" />
            <div className="w-full max-w-[345px]">
              <h2 className="text-[28px] xs:text-[32px] cLg:text-[36px] text-[#1f3347] font-bold leading-[1.375] mb-2.5">
                Explore the Beauty of {title} and enjoy
              </h2>
            </div>
            <div className="flex gap-[5px] mt-[25px] mb-[20px] md:mb-[40px]">
              <Image src="/rating.svg" alt="rating" width={12} height={12} />
              <span className="text-[18px] leading-[1] text-[#1f3347]">
                {averageRate}
              </span>
            </div>
            <p>{desc}</p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Explore;
