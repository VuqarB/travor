import Hero from "@/components/Hero";
import Destinations from "../components/Destinations";
import Discount from "../components/Discount";
import Newsletter from "../components/Newsletter";
import Services from "../components/Services";
import Testimonals from "../components/Testimonals";
import Welcome from "../components/Welcome";
import TestimonalWrapper from "../components/ui/TestimonalWrapper";
import Packages from "@/components/Packages";
import PackagesWrapper from "@/components/ui/PackagesWrapper";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Destinations />
      <Welcome />
      <Packages>
        <PackagesWrapper />
      </Packages>
      <Discount />
      <Testimonals>
        <TestimonalWrapper />
      </Testimonals>
      <Newsletter />
    </>
  );
}
