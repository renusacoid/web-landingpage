import Image from 'next/image';
import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="relative pt-[10vh] md:pt-[30vh] w-full">
      <div className="flex flex-col items-center lg:flex-row">
        <div className="w-full lg:w-1/2 px-0 md:px-32">
          <img
            className="mx-auto"
            src="/assets/choose_us_assets.png"
            alt="Assets Wisata Nusantara"
          />
          {/* <Image
            className="mx-auto"
            src="/assets/choose_us_assets.png"
            alt="Assets Wisata Nusantara"
            width={0}
            height={0}
            layout="responsive"
          /> */}
        </div>
        <div className="w-full lg:w-1/2 lg:ml-auto order-first lg:order-none">
          <div className="text-center lg:pr-32">
            <h1 className="font-bold text-6xl mb-14 bg-custom-gradient text-transparent bg-clip-text inline-block pb-3">
              “Why Choose Us?”
            </h1>
          </div>
          <div className="flex flex-col gap-y-8 overflow-hidden2">
            <div className="ml-4 p-4 rounded-l-[115px] border-4 border-[#DC602A] border-r-0 md:pr-32">
              <p className="montserrat">
                Rencana Perjalanan yang Dirancang Sesuai dengan Keinginanmu
              </p>
            </div>
            <div className="ml-14 p-4 rounded-l-[115px] border-4 border-[#DC602A] border-r-0 md:pr-32">
              <p className="montserrat">Pembuatan Open Trip yang Profesional</p>
            </div>
            <div className="ml-7 p-4 rounded-l-[115px] border-4 border-[#DC602A] border-r-0 md:pr-32">
              <p className="montserrat">
                Pemandu Wisata Lokal yang Berdasarkan pada Preferensimu
              </p>
            </div>
            <div className="ml-14 p-4 rounded-l-[115px] border-4 border-[#DC602A] border-r-0 md:pr-32">
              <p className="montserrat">
                Kemudahan Kustomisasi dan Berbagi Rencana Perjalanan
              </p>
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
