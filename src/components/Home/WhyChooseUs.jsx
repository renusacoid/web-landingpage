import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="relative pt-[10vh] md:pt-[30vh] w-full">
      <div className="flex flex-col md:flex-row items-end pl-4 md:pl-32">
        <div className="max-w-3xl md:w-4/12 self-center">
          <Image
            src="/assets/choose_us_assets.png"
            alt="Assets Wisata Nusantara"
            width={400}
            height={400}
            layout="responsive"
          />
        </div>
        <div className="md:w-8/12 md:ml-auto">
          <div className="text-center md:text-end pr-4 md:pr-[9rem]">
            <h1 className="font-bold text-6xl mb-14 bg-custom-gradient text-transparent bg-clip-text inline-block pb-3">
              “Why Choose Us?”
            </h1>
          </div>
          <div className="flex flex-col gap-y-8 overflow-hidden">
            <div className="p-4 rounded-l-[115px] border-4 border-[#DC602A] border-r-0">
              <p>Rencana Perjalanan yang Dirancang Sesuai dengan Keinginanmu</p>
            </div>
            <div className="p-4 rounded-l-[115px] border-4 border-[#DC602A] border-r-0 translate-x-16">
              <p>Pembuatan Open Trip yang Profesional</p>
            </div>
            <div className="p-4 rounded-l-[115px] border-4 border-[#DC602A] border-r-0 translate-x-6">
              <p>Pemandu Wisata Lokal yang Berdasarkan pada Preferensimu</p>
            </div>
            <div className="p-4 rounded-l-[115px] border-4 border-[#DC602A] border-r-0 translate-x-16">
              <p>Kemudahan Kustomisasi dan Berbagi Rencana Perjalanan</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute top-[75vh] -z-50">
        <img src="assets/choose_us_circle.svg" alt="" width="450" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
