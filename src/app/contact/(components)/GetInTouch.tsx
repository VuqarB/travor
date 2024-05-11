import Image from "next/image";
import Link from "next/link";

export default function GetInTouch() {
    return (
        <div className="flex flex-col flex-1 cLg:max-w-[384px] w-full">
            <div>
                <div className='text-[#08ac9e] tracking-[.02px]'>Contact info</div>
                <h1 className="max-w-[371px] text-[36px] text-[#1f3347] mb-2.5 leading-1.38 font-bold">
                    Get in touch
                </h1>
                <p className="mt-[15px] text-[#595959] w-full">We’d love to hear from you. Our friendly team is always here to chat</p>
            </div>

            <ul className="flex flex-col gap-[45px] mt-[60px]">
                <li className="flex items-start gap-[15px]">
                    <Image src='/mail.svg' alt="mail" width={30} height={30} />

                    <div className="w-full">
                        <div className="text-[24px] leading-[1] text-[#08ac9e] font-bold">Chat to us</div>
                        <p className="mt-5 mb-[25px] text-[#595959] leading-[1]">Our friendly team is here to help</p>
                        <Link href='/' className="text-[#494949] hover:text-[#ff621f] leading-[1.55] tracking-[.8px] font-semibold transition-all duration-300 ease-linear block">info@example.com</Link>
                    </div>
                </li>
                <li className="flex items-start gap-[15px]">
                    <Image src='/location.svg' alt="mail" width={30} height={30} />

                    <div className="w-full">
                        <div className="text-[24px] leading-[1] text-[#08ac9e] font-bold">Office</div>
                        <p className="mt-5 mb-[25px] text-[#595959] leading-[1]">Come say hello at our office HQ.</p>
                        <div className="text-[#494949] leading-[1.55] tracking-[.8px] font-semibold">
                            842D, North Town, KB’s Tower Smith Manson, New York
                        </div>
                    </div>
                </li>
                <li className="flex items-start gap-[15px]">
                    <Image src='/phone.svg' alt="mail" width={30} height={30} />

                    <div className="w-full">
                        <div className="text-[24px] leading-[1] text-[#08ac9e] font-bold">Phone</div>
                        <p className="mt-5 mb-[25px] text-[#595959] leading-[1]">Our friendly team is here to help.</p>
                        <Link href='/' className="text-[#494949] hover:text-[#ff621f] leading-[1.55] tracking-[.8px] font-semibold transition-all duration-300 ease-linear block">+12345 678 984</Link>
                        <Link href='/' className="text-[#494949] hover:text-[#ff621f] leading-[1.55] tracking-[.8px] font-semibold transition-all duration-300 ease-linear block">+12345 678 984</Link>
                    </div>
                </li>
            </ul>
        </div>
    )
}
