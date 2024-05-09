import Section from "../components/ui/Section";
import { DESTINATIONS } from "@/constants";
import Destination from "../components/ui/Destination";
import Newsletter from "../components/Newsletter";
import HeroWrapper from "../components/HeroWrapper";

export const metadata = {
  title: "Destinations",
  description: "destinations description",
};

export default function page() {
  return (
    <>
      <HeroWrapper title="Our Destinations" />
      <Section padding="py-[60px] md:py-[80px] cLg:py-[100px] 2xl:py-[120px]">
        <div className="max-container grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 cLg:grid-cols-4 gap-x-[30px] gap-y-[40px]">
          {DESTINATIONS.map((data) => (
            <Destination key={data.title} data={data} />
          ))}
        </div>
      </Section>
      <Newsletter />
    </>
  );
}
