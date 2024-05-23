"use client";

import Image from "next/image";
import Subtitle from "./ui/Subtitle";
import Section from "./ui/Section";
import useEmblaCarousel from "embla-carousel-react";
import SliderPrevBtn from "./ui/SliderPrevBtn";
import SliderNextBtn from "./ui/SliderNextBtn";
import { useCallback } from "react";

export default function Testimonals({
  children,
}: {
  children: React.ReactNode;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Section>
      <div className="max-container flex md:items-center flex-col-reverse md:flex-row gap-[90px] xl:gap-[60px] xs:px-10">
        <div className="flex-[1.25]">
          <Image
            src="/testimonial-img.png"
            alt="testimonial-img"
            width={600}
            height={638}
          />
        </div>

        <div className="flex-1 xl:max-w-[430px] w-full">
          <div className="md:max-w-[348px] w-full">
            <Subtitle
              content="Our Testimonals"
              img="/badge-icon.png"
              size={{ width: 24, height: 24 }}
            />
            <h1 className="text-[32px] cLg:text-[36px] text-[#1f3347] mb-2.5 font-bold leading-[1.38]">
              Happy <span className="text-[#ff621f]">Travelers</span>{" "}
              <span className="text-[#08ac9e]">expression</span>
            </h1>
          </div>

          <div className="mt-[45px] relative">
            <div className="embla">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">{children}</div>
              </div>
              <SliderPrevBtn
                onClick={scrollPrev}
                positions="right-[36px] bottom-[-40px]"
              />
              <SliderNextBtn
                onClick={scrollNext}
                positions="right-0 bottom-[-40px]"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
