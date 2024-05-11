import HeroWrapper from "@/components/HeroWrapper";
import Newsletter from "@/components/Newsletter";
import { Metadata } from "next";
import Login from "./(components)/Login";

export const metadata: Metadata = {
  title: "Login",
  description: "login description",
};

export default function page() {
  return (
    <>
      <HeroWrapper title="login" subtitle="Sign in" />
      <Login />
      <Newsletter />
    </>
  );
}
