"use client";

import Section from "@/components/ui/Section";
import Image from "next/image";
import { useState } from "react";

type Service = {
  text: string;
  list: string[];
};

type ServicesProps = {
  included: Service;
  notIncluded: Service;
};

type ShowState = {
  included: boolean;
  notIncluded: boolean;
};

const Services = ({ included, notIncluded }: ServicesProps) => {
  const [show, setShow] = useState<ShowState>({
    included: true,
    notIncluded: false,
  });

  const handleToggleShow = (included: boolean) => {
    setShow({ included: included, notIncluded: !included });
  };

  return (
    <Section>
      <div className="max-container grid grid-cols-1 cLg:grid-cols-2 gap-4">
        <div className="relative">
          <div className="flex mb-[25px] flex-wrap gap-[70px]">
            <div
              onClick={() => handleToggleShow(true)}
              className={`cursor-pointer bg-transparent ${
                show.included ? "!text-[#1f3347]" : "!text-[#cfcfcf]"
              } !text-[24px] !font-bold`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleToggleShow(true)}
            >
              Included
            </div>
            <div
              onClick={() => handleToggleShow(false)}
              className={`cursor-pointer bg-transparent ${
                show.notIncluded ? "!text-[#1f3347]" : "!text-[#cfcfcf]"
              } !text-[24px] !font-bold`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleToggleShow(false)}
            >
              Not Included
            </div>
          </div>

          <div className="relative overflow-hidden">
            {show.included && (
              <div>
                <p className="mb-[33px] text-[#595959]">{included.text}</p>

                <ul className="flex flex-col gap-5">
                  {included.list.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-[20px] text-[#595959]"
                    >
                      <Image
                        src="/check-mark.svg"
                        width={25}
                        height={23}
                        alt="check-mark"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {show.notIncluded && (
              <div>
                <p className="mb-[33px] text-[#595959]">{notIncluded.text}</p>

                <ul className="flex flex-col gap-5">
                  {notIncluded.list.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-[20px] text-[#595959]"
                    >
                      <Image
                        src="/check-mark.svg"
                        width={25}
                        height={23}
                        alt="check-mark"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex-center cLg:justify-normal">
          <Image
            src="/package-include-image.png"
            className=""
            width={577}
            height={475}
            alt="img"
          />
        </div>
      </div>
    </Section>
  );
};

export default Services;
