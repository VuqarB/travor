import Section from "@/components/ui/Section";
import Image from "next/image";

type Highlights = {
  desc: string;
  list: string[];
};

type HighlightsProps = {
  desc: string;
  imgUrl: string;
  highlights: Highlights;
};

const Highlights = ({ desc, imgUrl, highlights }: HighlightsProps) => {
  return (
    <Section>
      <div className="max-container flex flex-col md:flex-row items-center justify-center gap-[40px] xl:gap-[70px]">
        <div className="flex-1 cLg:max-w-[524px] w-full">
          <h2 className="text-[28px] xs:text-[32px] cLg:text-[36px] text-[#1f3347] font-bold leading-[1.375] mb-[35px]">
            Package Details
          </h2>
          <p className="mb-[65px] text-[#595959]">{desc}</p>

          <h2 className="text-[22px] cLg:text-[24px] text-[#1f3347] font-bold leading-[1.375] mb-[30px] mt-[20px]">
            Highlights
          </h2>
          <p className="mb-[33px] text-[#595959]">{highlights.desc}</p>

          <ul className="flex flex-col gap-5">
            {highlights.list.map((item) => (
              <li
                key={item}
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

        <div className="relative flex-1 w-full rounded-[25px] flex-center">
          <div className="relative max-w-[469px] max-h-[576px]">
            <Image src={imgUrl} className="rounded-[25px]" width={469} height={576} alt={imgUrl} />
            <div className="hidden sm:block absolute inset-0 z-[-1] rounded-[10px] rotate-[-10deg] bg-[#faf8fd] w-full h-full" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Highlights;
