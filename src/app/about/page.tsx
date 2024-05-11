import Discount from "@/components/Discount";
import HeroWrapper from "@/components/HeroWrapper";
import Newsletter from "@/components/Newsletter";
import Services from "@/components/Services";
import Testimonals from "@/components/Testimonals";
import TestimonalWrapper from "@/components/ui/TestimonalWrapper";
import React from "react";
import Recommend from "./(components)/Recommend";
import Funfact from "@/components/ui/Funfact";
import Team from "./(components)/Team";

const page = async () => {
  return (
    <>
      <HeroWrapper
        title="About us"
        subtitle="Explore the World"
        desc="Travor is one of the most popular Travel agency for those who want
            to explore the world and try to make adventure"
      />
      <Recommend />
      <Services padding="pb-[60px] md:pb-[80px] cLg:pb-[100px] xl:pb-[120px]" />
      <Team />
      <Discount />
      <Testimonals>
        <TestimonalWrapper />
      </Testimonals>
      <Newsletter />
      <Funfact />
    </>
  );
};

export default page;
