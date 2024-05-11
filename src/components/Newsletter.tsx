import Button from "./ui/Button";
import Section from "./ui/Section";
import Subtitle from "./ui/Subtitle";

export default function Newsletter() {
  return (
    <Section>
      <div className="max-container flex flex-col cLg:flex-row gap-10 cLg:gap-24 items-start cLg:items-center w-full bg-[#faf8fd] rounded-[30px] p-[30px] xs:py-[40px] md:py-[60px] xs:px-[40px] cLg:py-[75px] cLg:px-[60px] xl:pr-[105px] cLg:bg-newsletter-form cLg:bg-[110%_85%] xl:bg-[107%_85%] cLg:bg-no-repeat cLg:bg-auto">
        <div className="flex-1 cLg:max-w-[294px] w-full">
          <Subtitle
            content="Our Newsletter"
            img="/checklist-paper-icon.png"
            size={{ width: 20, height: 20 }}
          />
          <h1 className="text-[28px] xs:text-[32px] cLg:text-[36px] text-[#1f3347] mb-2.5 font-bold leading-[1.38]">
            Subscribe our{" "}
            <span className="text-[#ff621f] underline">Newsletter</span> now!
          </h1>
          <p className="mt-[15px] text-[#595959]">
            For latest updates & Promotions
          </p>
        </div>

        <div className="flex-1 w-full">
          <form className="relative h-[80px] flex flex-col gap-5">
            <input
              type="text"
              placeholder="Enter your mail here"
              className="py-[15px] px-[35px] xs:pr-[130px] border border-[#ff621f] bg-transparent regular-16 leading-[1.43] text-[#333] h-full w-full rounded-[500px] outline-none focus:border-[#08ac9e]"
            />

            <Button
              padding="py-2.5 px-[25px]"
              green
              translate
              className="static xs:absolute inset-y-[15px] right-[15px]"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}
