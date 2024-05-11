import HeroWrapper from "@/components/HeroWrapper";
import Newsletter from "@/components/Newsletter";
import { Metadata } from "next";
import Register from "./(components)/Register";

export const metadata: Metadata = {
  title: "Register",
  description: "login description",
};

export default function page() {
  return (
    <>
      <HeroWrapper title="register" subtitle="sign up" />
      <Register />
      <Newsletter />
    </>
  );
}
