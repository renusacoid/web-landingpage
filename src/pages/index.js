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
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wisnu | Wisata Nusantara</title>
      </Head>
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
