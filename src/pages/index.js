import {
  TentangWisnu,
  VisiMisi,
  SejarahWisnu,
  DefinisiLogo,
  WhyChooseUs,
  TopTrip,
  AppShowcase,
  AppCTA,
} from "@/components/Home";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <TentangWisnu />
        <VisiMisi />
        <SejarahWisnu />
        <DefinisiLogo />
        <WhyChooseUs />
        <TopTrip />
        <AppShowcase />
        <AppCTA />
      </main>
      <Footer />
    </>
  );
}
