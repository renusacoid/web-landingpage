import AppCTA from "@/components/Home/AppCTA";
import AppShowcase from "@/components/Home/AppShowcase";
import DefinisiLogo from "@/components/Home/DefinisiLogo";
import SejarahWisnu from "@/components/Home/SejarahWisnu";
import TentangWisnu from "@/components/Home/TentangWisnu";
import TopTrip from "@/components/Home/TopTrip";
import VisiMisi from "@/components/Home/VisiMisi";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
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
