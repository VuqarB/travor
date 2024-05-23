import Section from "@/components/ui/Section";
import Image from "next/image";
import React from "react";

type TripProps = {
  title: string;
  subtitle?: string;
  desc: string;
  imgUrl: string;
};

const Trip = ({ title, subtitle, desc, imgUrl }: TripProps) => {
  return (
    <Section padding="py-[60px] md:py-[80px] cLg:py-[100px] xl:py-[120px]">
      <div
        className="max-container flex flex-col-reverse md:flex-row items-center gap-[25px] xl:gap-10"
      >
        <div className="flex-1 cLg:max-w-[524px] w-full">
          {subtitle && (
            <div className="mb-[26px] text-[#08ac9e] leading-[1] tracking-[.2px]">
              {subtitle}
            </div>
          )}
          <h1 className="text-[28px] xs:text-[32px] cLg:text-[36px] text-[#1f3347] leading-[1.38] font-bold mb-[35px]">
            {title}
          </h1>

          <div>
            <p className="text-[#595959] mb-[33px]">{desc}</p>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={imgUrl}
            className="object-cover w-full"
            width={621}
            height={568}
            alt={imgUrl}
          />
        </div>
      </div>
    </Section>
  );
};

export default Trip;
