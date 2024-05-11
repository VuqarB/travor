import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Image from "next/image";

export default function Register() {
  return (
    <Section padding="py-[60px] md:py-[80px] cLg:py-[100px] 2xl:py-[120px]">
      <div className="max-container flex flex-col md:flex-row items-center gap-10 cLg:gap-[60px] xl:gap-[100px] 2xl:gap-[122px]">
        <div className="flex-1">
          <Image
            src="/about-image.png"
            alt="about-image"
            width={636}
            height={586}
          />
        </div>

        <div className="flex-1 cLg:max-w-[412px] w-full">
          <div>
            <h1 className="text-[36px] text-[#1f3347] font-bold mb-2.5 max-w-[371px] w-full">
              Signup
            </h1>
            <p className="mt-[15px] text-[#595959]">
              Travor is one of the most popular Travel agency explore the world
              and try to make adventure
            </p>
          </div>

          <div className="mt-[35px]">
            <form className="flex flex-col gap-[35px]">
              <input
                type="text"
                placeholder="Name*"
                className="h-[50px] xs:h-[60px] w-full block py-3 px-5 border border-[#696969] rounded-[200px] bg-transparent regular-14 leading-[1.43] text-[#595959] outline-none transition-all duration-300 ease-linear focus:border-[#ff621f]"
                required
              />

              <input
                type="email"
                placeholder="Email*"
                className="h-[50px] xs:h-[60px] w-full block py-3 px-5 border border-[#696969] rounded-[200px] bg-transparent regular-14 leading-[1.43] text-[#595959] outline-none transition-all duration-300 ease-linear focus:border-[#ff621f]"
                required
              />

              <input
                type="password"
                placeholder="Password*"
                className="h-[50px] xs:h-[60px] w-full block py-3 px-5 border border-[#696969] rounded-[200px] bg-transparent regular-14 leading-[1.43] text-[#595959] outline-none transition-all duration-300 ease-linear focus:border-[#ff621f]"
                required
              />

              <input
                type="password"
                placeholder="Confirm Password*"
                className="h-[50px] xs:h-[60px] w-full block py-3 px-5 border border-[#696969] rounded-[200px] bg-transparent regular-14 leading-[1.43] text-[#595959] outline-none transition-all duration-300 ease-linear focus:border-[#ff621f]"
                required
              />

              <Button padding="py-[7px] xs:py-[15px] px-5 md:px-[25px]">
                Signup
              </Button>
              <div className="my-[27px] text-center text-[#595959] leading-[1.77] tracking-[.2px]">
                Already have an account?
              </div>

              <Button
                href="/login"
                className="!shadow-none none mt-[-15px] bg-transparent border border-[#08ac9e] !text-[#08ac9e] hover:bg-[#08ac9e] hover:!text-white"
                padding="py-[7px] xs:py-[15px] px-5 md:px-[25px]"
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
