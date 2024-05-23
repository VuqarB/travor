import Section from "../../components/ui/Section";
import Destination from "../../components/ui/Destination";
import HeroWrapper from "../../components/HeroWrapper";
import Newsletter from "../../components/Newsletter";
import Filter from "@/components/ui/Filter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Package from "@/components/ui/Package";
import { getPackages } from "../../../prisma/script";

export const metadata = {
  title: "Packages",
  description: "packages description",
};

interface Packages {
  id: string;
  title: string;
  duration: string;
  averageRate: number;
  price: number;
  imgUrl: string;
}

export default async function page() {
  const packages: any = await getPackages(6);

  return (
    <>
      <HeroWrapper title="Our Package" />
      <Section padding="py-[60px] md:py-[80px] cLg:py-[100px] 2xl:py-[120px]">
        <div className="max-container">
          <Filter />
          <div className="grid grid-cols-1 xs:grid-cols-2 cLg:grid-cols-3 gap-x-[30px] gap-y-[40px] mt-20">
            {packages.map((data: Packages) => (
              <Package key={data.id} data={data} />
            ))}
          </div>
          <div className="flex-center mt-10">
            <button className="block py-[6px] px-5 mx-[10px] rounded-[5px] regular-14 text-[#1f3347] hover:text-white cursor-point bg-[#fafafa] hover:bg-[#08ac9e] border border-[#ccc] hover:border-[#08ac9e] outline-none transition-all duration-300 ease-linear">
              <span>More</span>
              <ExpandMoreIcon fontSize="small" className="ml-1" />
            </button>
          </div>
        </div>
      </Section>
      <Newsletter />
    </>
  );
}
