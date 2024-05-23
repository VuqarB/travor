"use client";

import Section from "./ui/Section";
import Subtitle from "./ui/Subtitle";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import SliderPrevBtn from "./ui/SliderPrevBtn";
import SliderNextBtn from "./ui/SliderNextBtn";

export default function Packages({ children }: { children: React.ReactNode }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Section>
      <div className="max-container flex flex-col">
        <div className="flex-center flex-col max-w-[455px] w-full mx-auto">
          <Subtitle
            content="Tour Packages"
            img="/camera-icon.png"
            size={{ width: 26, height: 26 }}
            className="flex-center"
          />
          <h1 className="text-[32px] cLg:text-[36px] text-[#1f3347] mb-2.5 font-bold leading-[1.38]">
            Most <span className="text-[#ff621f] underline">Attractive</span>{" "}
            Packages
          </h1>
          <p className="mt-[15px] text-[#595959] text-center">
            Travor is one of the most popular Travel agency for who want to
            explore the wold with adventure
          </p>
        </div>

        <div className="mt-10 h-auto w-full">
          <div className="pt-5 px-[15px] relaive inset-x-0">
            <div className="embla-packages__slide">
              <div
                className="embla-packages__viewport pb-5 mb-[55px]"
                ref={emblaRef}
              >
                <div className="embla-packages__container">{children}</div>
              </div>
              <SliderPrevBtn
                onClick={scrollPrev}
                positions="left-1/2 right-auto"
              />
              <SliderNextBtn
                onClick={scrollNext}
                positions="left-1/2 right-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
