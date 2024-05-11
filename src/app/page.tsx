import Hero from "@/components/Hero";
import Destinations from "../components/Destinations";
import Discount from "../components/Discount";
import Newsletter from "../components/Newsletter";
import Services from "../components/Services";
import Testimonals from "../components/Testimonals";
import Welcome from "../components/Welcome";
import TestimonalWrapper from "../components/ui/TestimonalWrapper";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Destinations />
      <Discount />
      <Welcome />
      <Testimonals>
        <TestimonalWrapper />
      </Testimonals>
      <Newsletter />
    </>
  );
}
