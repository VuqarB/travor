import Subtitle from "@/components/ui/Subtitle";
import TeamMember from "./TeamMember";
import Section from "@/components/ui/Section";
import { getTeam } from "../../../../prisma/script";

export default async function Team() {
  const team = await getTeam();

  return (
    <Section>
      <>
        <div className="max-container flex items-start md:items-center flex-col md:flex-row gap-4 md:gap-10 cLg:gap-20 w-full mb-[65px]">
          <div className="w-full md:max-w-[50%] cLg:max-w-[286px]">
            <Subtitle
              content="Travel Guide"
              img="/location.png"
              size={{ width: 20, height: 20 }}
            />
            <h1 className="text-[28px] xs:text-[32px] cLg:text-[36px] text-[#1f3347] mb-2.5 font-bold leading-[1.38]">
              Meet our <span className="text-[#ff621f]">Dedicated</span> Team
            </h1>
          </div>

          <div className="w-full md:max-w-[50%] cLg:max-w-[573px]">
            <p className="md:pl-10 cLg:pl-20 md:border-l md:border-[#08ac9e] text-[#595959]">
              Travor is one of the most popular Travel agency for those who want
              to explore the wold and try to make adventure
            </p>
          </div>
        </div>

        <div className="max-container grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 cLg:grid-cols-4 gap-[30px] mt-[45px]">
          {team.map((data) => (
            <TeamMember key={data.id} data={data} />
          ))}
        </div>
      </>
    </Section>
  );
}
