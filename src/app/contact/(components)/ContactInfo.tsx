import Section from "@/components/ui/Section";
import ContactForm from "./ContactForm";
import GetInTouch from "./GetInTouch";

export default function ContactInfo() {
    return (
        <Section padding='py-[60px] md:py-[80px] cLg:py-[100px] 2xl:py-[120px]'>
            <div className="max-container flex flex-col md:flex-row gap-10 cLg:gap-[215px]">
                <GetInTouch />
                <ContactForm />
            </div>
        </Section>
    )
}
