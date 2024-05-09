import HeroWrapper from "@/app/components/HeroWrapper";
import About from "../components/About";
import Trip from "../components/Trip";
import BasicInfo from "../components/BasicInfo";
import Newsletter from "@/app/components/Newsletter";
import Gallery from "../components/Gallery";
import { getDestinationDetails } from "../../../../prisma/script";

const DestinationDetailsPage = async ({ params }: any) => {
  const destinationId = params.id;
  const details = await getDestinationDetails(destinationId);
  const { title, desc, trip, about, basicInfo, gallery }: any = details;

  return (
    <>
      <HeroWrapper title={title} desc={desc} />
      <Trip
        title={`Explore the Beauty of ${title} adventure`}
        subtitle={`${title} Trip`}
        desc={trip.desc}
        imgUrl={trip.imgUrl}
      />
      <About title={`About ${title}`} desc={about.desc} imgUrl={about.imgUrl} />
      <BasicInfo title={title} basicInfo={basicInfo} />
      <Gallery title={title} gallery={gallery} />
      <Newsletter />
    </>
  );
};

export default DestinationDetailsPage;
