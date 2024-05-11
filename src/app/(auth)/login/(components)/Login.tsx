import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
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
              Login
            </h1>
            <p className="mt-[15px] text-[#595959]">
              Travor is one of the most popular Travel agency explore the world
              and try to make adventure
            </p>
          </div>

          <div className="mt-[35px]">
            <form className="flex flex-col gap-[35px]">
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

              <div className="flex-between -mt-5">
                <label className="flex items-center gap-[5px] cursor-pointer regular-14 text-[#787878]">
                  <div className="w-[9px] h-[9px] border border-[#696969] transition-all duration-300 ease-linear rounded-full" />
                  {/* <input type="checkbox" className="opacity-0 z-[-1] absolute" /> */}
                  <span>Remember me</span>
                </label>
                <Link
                  href="/"
                  className="regular-14 leading-[1] text-[#08ac9e]"
                >
                  Forget Password
                </Link>
              </div>

              <Button padding="py-[7px] xs:py-[15px] px-5 md:px-[25px]">
                Submit
              </Button>
              <div className="my-[27px] text-center text-[#595959] leading-[1.77] tracking-[.2px]">
                Already have an account?
              </div>

              <Button
                href="/login"
                className="!shadow-none none mt-[-15px] bg-transparent border border-[#08ac9e] !text-[#08ac9e] hover:bg-[#08ac9e] hover:!text-white"
                padding="py-[7px] xs:py-[15px] px-5 md:px-[25px]"
              >
                Register
              </Button>
            </form>
          </div>

          <div className="my-[27px] text-center text-[#595959] leading-[1.77] tracking-[.2px]">
            or Sign in with
          </div>
          <Button
            href="/"
            className="flex-center gap-2.5 mb-[25px] border border-[#d1d1d1] !text-[#1f3347] !bg-transparent hover:border-[#ff621f]"
            padding="py-[7px] xs:py-[15px] px-5 md:px-[25px]"
          >
            <Image
              src="/google-icon.svg"
              alt="google-icon"
              width={20}
              height={20}
            />
            <span>Sign in with Google</span>
          </Button>
          <Button
            href="/"
            className="flex-center gap-2.5 mb-[25px] border border-[#d1d1d1] !text-[#1f3347] !bg-transparent hover:border-[#ff621f]"
            padding="py-[7px] xs:py-[15px] px-5 md:px-[25px]"
          >
            <Image
              src="/facebook-icon.svg"
              alt="google-icon"
              width={20}
              height={20}
            />
            <span>Sign in with Facebook</span>
          </Button>
        </div>
      </div>
    </Section>
  );
}
