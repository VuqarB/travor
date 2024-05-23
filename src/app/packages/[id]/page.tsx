import HeroWrapper from "@/components/HeroWrapper";
import { getPackages } from "../../../../prisma/script";
import Explore from "../components/Explore";
import BasicInfo from "@/components/ui/BasicInfo";
import Gallery from "@/components/ui/Gallery";
import Highlights from "../components/Highlights";
import Services from "../components/Services";
import TourPlan from "../components/TourPlan";
import Newsletter from "@/components/Newsletter";

const page = async ({ params }: any) => {
  const packageId = params.id;
  const details = await getPackages(undefined, packageId);
  const { title, duration, averageRate, PackageDetails }: any = details;
  const countryName = title.split(" ")[0];

  return (
    <>
      <HeroWrapper title={title} desc={PackageDetails?.desc} />
      <Explore
        title={countryName}
        duration={duration}
        averageRate={averageRate}
        imgUrl={PackageDetails?.explore.imgUrl}
        desc={PackageDetails?.explore.desc}
      />
      <Highlights
        desc={PackageDetails?.packageDetails.desc}
        imgUrl={PackageDetails?.packageDetails.imgUrl}
        highlights={PackageDetails?.packageDetails.highlights}
      />
      <BasicInfo title={countryName} basicInfo={PackageDetails?.basicInfo} />
      <Services
        included={PackageDetails?.services.included}
        notIncluded={PackageDetails?.services.notIncluded}
      />
      <TourPlan plans={PackageDetails?.tourPlan} />
      <Gallery title={countryName} gallery={PackageDetails?.gallery} />
      <Newsletter />
    </>
  );
};

export default page;
