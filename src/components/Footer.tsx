import Image from "next/image";
import Link from "next/link";
import { FOOTER_SOCIALS, FOOTER_INFORMATION, FOOTER_SUPPORT } from "@/constants";

export default function Footer() {
    return (
        <footer>
            <div className="relative footer-bg">
                <div className="max-container grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 cLg:grid-cols-4 gap-y-4 gap-x-[40px] cLg:gap-x-[60px] xl:gap-x-[80px] 2xl:gap-x-[120px] py-[60px] md:py-[80px] lg:py-[100px] xl:py-[130px]">
                    <div className="min-w-[252px] w-full flex-1">
                        <Link href="/" className="inline-block mb-[25px]">
                            <Image src="/logo.png" alt="logo" width={140} height={39} />
                        </Link>
                        <p className="text-[#595959] mb-[25px] text-[16px] leading-[1.62]">
                            Travor is one of the most popular Travel agency for those who want to explore the wold
                        </p>
                        <nav className="flex gap-5">
                            {FOOTER_SOCIALS.map((social) => (
                                <Link key={social} href="/" className="flexCenter w-[27px] h-[27px] rounded-full bg-[#ff621f] hover:bg-[#08ac9e] transition-all duration-300 ease-linear">
                                    <Image src={social} alt={social} width={18} height={18} />
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="flex-1">
                        <div className="mt-[27px] mb-[25px] text-[#1f3347] leading-[1] font-bold">Information</div>

                        <ul className="flex flex-col gap-2.5">
                            {FOOTER_INFORMATION.map((data) => (
                                <li key={data}>
                                    <Link href="/" className="regular-16 leading-[1] text-[#595959] transition-all duration-300 ease-linear hover:text-[#ff621f]">
                                        {data}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1">
                        <div className="mt-[27px] mb-[25px] text-[#1f3347] leading-[1] font-bold">Support</div>

                        <ul className="flex flex-col gap-2.5">
                            {FOOTER_SUPPORT.map((data) => (
                                <li key={data}>
                                    <Link href="/" className="regular-16 leading-[1] text-[#595959] transition-all duration-300 ease-linear hover:text-[#ff621f]">
                                        {data}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 min-w-[220px]">
                        <div className="mt-[27px] mb-[25px] text-[#1f3347] leading-[1] font-bold">Contact</div>
                        <div className="flex flex-col gap-[25px]">
                            <p className="regular-16 text-[#595959]">842D North Town, KG Tower Smith Manson, New York</p>

                            <div>
                                <Link href="/" className="block text-[#595959] hover:text-[#1f3347] regular-16 tracking-[.04px] transition-all duration-300 ease-linear">+12345 678 984</Link>
                                <Link href="/" className="block text-[#595959] hover:text-[#1f3347] regular-16 tracking-[.04px] transition-all duration-300 ease-linear">+12345 678 984</Link>
                            </div>

                            <Link href="/" className="text-[16px] font-medium leading-[1] tracking-[1px] text-[#08ac9e] hover:text-[#ff621f] transition-all duration-300 ease-linear">www.example.com</Link>
                        </div>
                    </div>
                </div>

                <div className="hidden 3xl:block absolute top-[215px] left-[115px]">
                    <Image src='/footer-element-1.svg' alt="footer-element" width={60} height={45} />
                </div>
                <div className="hidden xl:block absolute bottom-[70px] right-[100px]">
                    <Image src='/footer-element-2.svg' alt="footer-element" width={50} height={52} />
                </div>
            </div>

            <div className="flexBetween flex-col-reverse md:flex-row-reverse cLg:flex-row gap-2.5 max-container py-5">
                <div className="text-[16px] font-medium text-center">
                    © 2023 design and developed by <Link href="/" className="text-[#08ac9e]">Brandbes</Link>. Powered by <Link href="/" className="text-[#08ac9e]">Webflow</Link>.
                </div>

                <div>
                    <Image src='/payment method.svg' alt="payment-methods" width={170} height={17} />
                </div>
            </div>
        </footer>
    )
}
