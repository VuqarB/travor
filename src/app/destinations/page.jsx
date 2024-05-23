import Section from "../../components/ui/Section";
import Destination from "../../components/ui/Destination";
import HeroWrapper from "../../components/HeroWrapper";
import Newsletter from "../../components/Newsletter"
import { getDestinations } from "../../../prisma/script";

export const metadata = {
  title: "Destinations",
  description: "destinations description",
};

export default async function page() {
  const destinations = await getDestinations();

  return (
    <>
      <HeroWrapper
        title="Our Destinations"
        desc="Travor is one of the most popular Travel agency for those who want
              to explore the world and try to make adventure"
      />
      <Section padding="py-[60px] md:py-[80px] cLg:py-[100px] 2xl:py-[120px]">
        <div className="max-container grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 cLg:grid-cols-4 gap-x-[30px] gap-y-[40px]">
          {destinations.map((data) => (
            <Destination key={data.id} data={data} />
          ))}
        </div>
      </Section>
      <Newsletter />
    </>
  );
}
