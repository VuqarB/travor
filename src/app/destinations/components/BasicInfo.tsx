import Section from "@/app/components/ui/Section";

type BasicInfoArr = {
  title: string;
  info: string;
};

type BasicInfoProps = {
  title?: string;
  basicInfo: BasicInfoArr[];
};

export default function BasicInfo({ title, basicInfo }: BasicInfoProps) {
  return (
    <Section className="max-container">
      <div className="flex flex-col">
        <div className="max-w-[656px] w-full">
          <h1 className="text-[28px] xs:text-[32px] cLg:text-[36px] text-[#1f3347] leading-[1.38] font-bold">
            Basic <span className="text-[#ff621f] underline">Information</span>
          </h1>

          <p className="text-[#595959] mt-[15px]">
            Some Basic information about {title} that can help you a lot when
            you visit so check out all the information before starting your tour
          </p>
        </div>

        <div className="mt-[30px] md:mt-10 cLg:mt-[50px] py-10 px-10 md:px-[60px] cLg:pt-[54px] cLg:px-[90px] cLg:pb-[46px] rounded-[30px] bg-[#faf8fd]">
          <ul className="flex flex-col gap-y-5">
            {basicInfo.map((data) => (
              <li
                key={data.title}
                className="flex flex-col cLg:flex-row items-center pb-[17px] gap-x-[29px] md:gap-x-[200px] cLg:gap-x-[320px] gap-y-2.5 border-b border-dashed border-[#a9a9a9] text-center cLg:text-left"
              >
                <div className="w-full xs:w-[30%] cLg:w-[18%] text-[#1f3347] leading-[1.33] font-semibold">
                  {data.title}
                </div>
                <div className="regular-16 text-[#595959]">{data.info}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
