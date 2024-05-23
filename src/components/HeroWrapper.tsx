"use client";

import Image from "next/image";
import Section from "./ui/Section";
import { usePathname } from "next/navigation";

type HeroWrapperProps = {
  title?: string;
  subtitle?: string;
  desc?: string;
};

export default function HeroWrapper({
  title,
  subtitle,
  desc,
}: HeroWrapperProps) {
  const pathname = usePathname();
  const pathnameArr = pathname.split("/");

  return (
    <Section
      className="hero-bg relative"
      padding="pt-[140px] pb-[80px] xl:pt-[180px] xl:pb-[100px] cLg:pt-[200px] 2xl:pt-[240px] 2xl:pb-[185px]"
    >
      <>
        <div className="max-container flex-center">
          <div className="w-full flex-center flex-col">
            <div className="text-[#08ac9e] capitalize">
              {subtitle ? subtitle : pathnameArr[1]}
            </div>
            <h1 className="my-[25px] text-[#1f3347] text-[42px] xs:text-[48px] md:text-[52px] cLg:text-[60px] leading-[1.2] font-bold capitalize">
              {title}
            </h1>
            <p className="max-w-[565px] text-[#494949] text-center">
              {desc
                ? desc
                : "Travor is one of the most popular Travel agency for those who want to explore the world and try to make adventure"}
            </p>
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

        <div className="hidden xl:block absolute right-0 bottom-0">
          <Image
            src="/hero-element-2-reverse.svg"
            alt="hero-element"
            width={478}
            height={403}
          />
        </div>
      </>
    </Section>
  );
}
