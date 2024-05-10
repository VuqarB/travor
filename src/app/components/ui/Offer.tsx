import Image from "next/image";
import Link from "next/link";

export default function Offer({ data }) {
    return (
        <div className='pt-[15px] px-[15px] pb-[30px] rounded-[10px] bg-[#faf8fd] transition-all duration-300 ease-linear offer-item-hover'>
            <Link href={data.href} className='relative block rounded-[8px] overflow-hidden'>
                <Image
                    src={data.img}
                    alt='image'
                    width={240}
                    height={210}
                    className='object-cover w-full h-[210px]'
                />
                <span className="inline-block absolute right-[15px] bottom-[15px] py-[3px] px-2.5 rounded-[200px] medium-14 text-white offer-discound-bg transition-all duration-200 ease-linear">{data.discount}</span>
            </Link>

            <div className='flex flex-col mt-2.5'>
                <span className="mb-[15px] regular-14 leading-[1] text-[#08ac9e]">{data.during}</span>
                <Link href={data.href} className='text-[#1f3347] text-[24px] font-bold transition-all duration-300 ease-linear offer-title-hover'>{data.title}</Link>
                <div className='flex items-center gap-[5px] mt-[-5px]'>
                    <Image src="/location-gray.svg" alt='location' width={14} height={14} />
                    <p className='regular-14 text-[#595959]'>{data.location}</p>
                </div>
                <div className='flexBetween mt-5'>
                    <div className='regular-14 text-[#595959]'>
                        <span className='text-[18px] text-[#1f3347] font-bold'>{data.newCost}</span> <span className="line-through">{data.cost}</span> /person
                    </div>

                    <Link href="/" className='regular-14 text-[#595959] rounded-[300px] border border-[#08ac9e] flexCenter py-[2.5px] px-[15px] transition-all duration-300 ease-linear offer-btn-hover'>
                        Book
                    </Link>
                </div>
            </div>
        </div>
    )
}
