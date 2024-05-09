import HeroWrapper from "@/app/components/HeroWrapper";
import About from "../components/About";
import Trip from "../components/Trip";
import BasicInfo from "../components/BasicInfo";
import Newsletter from "@/app/components/Newsletter";
import Gallery from "../components/Gallery";

const page = () => {
  return (
    <>
      <HeroWrapper title="Maldives" />
      <About
        title="Explore the Beauty of Maldives adventure"
        subtitle="Maldives Trip"
        desc="Travor is one of the most popular Travel agency for those explore the world and try to make adventure as well as we can beautiful destination around the world and make you trip you explore the beautiful Maldives with great facilities Travor is one of the most popular Travel agency for those  explore the world and try to make adventure as we provide beautiful destination around the world and make you trip"
        imgUrl="/destination-maldive-top-image.png"
      />
      <Trip
        title="About Maldives"
        desc="Travor is one of the most popular Travel agency for those explore the world and try to make adventure as well as we can beautiful destination around the world and make you trip you explore the beautiful Maldives with great facilities Travor is one of the most popular Travel agency for those  explore the world and try to make adventure as we provide beautiful destination around the world and make you trip"
        imgUrl="/destination-about-image.png"
      />
      <BasicInfo title="Maldives" />
      <Gallery title="Maldives" />
      <Newsletter />
    </>
  );
};

export default page;
