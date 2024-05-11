import Offer from "./ui/Offer";
import Subtitle from "./ui/Subtitle";
import { OFFERS_DATA } from "@/constants";
import Section from "./ui/Section";
import Button from "./ui/Button";

export default function Offers() {
    return (
        <Section>
            <div className='max-container flex gap-[50px] flex-col cLg:flex-row'>
                <div className='flex flex-col max-w-[250px] w-full'>
                    <Subtitle content='Discount offer' img='/suitcase-icon.png' size={{ width: 22, height: 22 }} />
                    <h1 className='text-[32px] cLg:text-[36px] text-[#1f3347] mb-2.5 font-bold leading-[1.38]'>
                        <span className='text-[#ff621f]'>Enjoy</span> the Trip with <span className="text-[#08ac9e] underline">exciting</span> Discount
                    </h1>
                    <Button href='/packages' className='mt-[30px] w-[140px]' padding='py-2.5 px-[25px]'>View All</Button>
                </div>

                <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
                        {OFFERS_DATA.map((data) => (
                                <Offer key={data.title} data={data} />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}
