import Section from "@/components/ui/Section";
import Subtitle from "@/components/ui/Subtitle";
import Image from "next/image";
import Link from "next/link";

export default function Recommend() {
    return (
        <Section padding='py-[60px] md:py-[80px] cLg:py-[100px] 2xl:py-[120px]'>
            <div className="max-container flex flex-col md:flex-row items-center gap-[45px] cLg:gap-[90px]">
                <div className="flex-1">
                    <Image src='/about-image.png' alt="about-image" width={630} height={581} />
                </div>

                <div className="flex-1 cLg:max-w-[450px]">
                    <Subtitle content='Welcome to Travor' img='/sunglass-icon.png' size={{ width: 42, height: 16 }} />
                    <h1 className="text-[32px] cLg:text-[36px] leading-[1.38] font-bold text-[#1f3347] mb-2.5">
                        We Recommend Beautiful <span className="text-[#ff621f]">Destination</span> every month
                    </h1>

                    <p className="my-[35px] text-[#595959]">
                        Travor is one of the most popular Travel agency for those who want to explore the wold and try to make adventure as well as we can provide beautiful &nbsp;destination around the world and make you trip
                    </p>

                    <div className="flex items-center gap-[25px] cLg:gap-[50px]">
                        <Link href="/" className="inline-block rounded-[200px] py-[7px] md:py-2.5 px-5 md:px-[25px] transition-all duration-200 ease-linear bg-[#ff621f] whitespace-nowrap text-[16px] md:text-[18px] text-white text-center font-bold cursor-pointer orange-shadow">
                            Learn More
                        </Link>
                        <div className="flex flex-col text-[#1f3347] font-bold">
                            <span>For more information</span> <Link href="/">+01234 567 890</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
