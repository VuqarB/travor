import Image from "next/image";
import Section from "./ui/Section";
import Button from "./ui/Button";
import Subtitle from "./ui/Subtitle";

export default function Discount() {
    return (
        <Section>
            <div className="max-container flex flex-col cLg:flex-row items-center cLg:items-start justify-center gap-4 w-full relative">
                <div className="hidden cLg:flex self-end flex-1 relative">
                    <Image src="/discount-img-1.png" alt="discount-img" width={430} height={518} />
                    <div className="absolute left-[-32%] top-1/2 z-[-1] translate-y-[-50%]">
                        <Image src="/discount-fly.svg" alt="flight" width={309} height={279} />
                    </div>
                </div>

                <div className="max-w-[470px] w-full">
                    <div className="text-center">
                        <Subtitle content='Avail your Discount offer now!' className='justify-center' />
                        <h1 className='text-[28px] xs:text-[32px] cLg:text-[36px] text-[#1f3347] mb-2.5 font-bold leading-[1.38]'>
                            Grab <span className='text-[#ff621f]'>up to 35% off</span> on your favorite Destination
                        </h1>
                        <p className="mt-[15px] text-[#595959]">Limited time offer, don’t miss the opportunity</p>

                        <Button href='/discount-packages' className='mt-[40px]' translate green>Book Now</Button>
                    </div>

                    <div className="absolute left-1/4 hidden cLg:block">
                        <Image src='/discount-1.png' alt="discount-2" width={228} height={143} />
                    </div>

                    <div className="absolute right-1/4 hidden cLg:block">
                        <Image src='/discount-2.png' alt="discount-1" width={225} height={157} />
                    </div>
                </div>

                <div className="flex-1">
                    <Image src="/discount-img-2.png" alt="discount-img" width={389} height={546} />
                </div>
            </div>
        </Section>
    )
}
