import HeroWrapper from "@/components/HeroWrapper";
import ContactInfo from "./(components)/ContactInfo";
import Newsletter from "@/components/Newsletter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "contact description",
};

export default function page() {
  return (
    <>
      <HeroWrapper title="get connected" />
      <ContactInfo />
      <Newsletter />
    </>
  );
}
