import Image from 'next/image';
import React from 'react';

const DefinisiLogo = () => {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 md:px-32 py-24 md:py-36">
        <div className="mb-3 text-center lg:text-right">
          <h1 className="font-bold mb-8 md:mb-14 text-6xl bg-custom-gradient text-transparent bg-clip-text inline-block">
            Definisi Logo
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-14 items-center content-center">
          <div className="">
            <img src="assets/logo_big.svg" width="500" />
          </div>
          <div className="lg:col-span-2">
            <p className="montserrat text-lg text-justify">
              <span className="text-[#DC602A] font-semibold montserrat">
                Logo Wisnu{' '}
              </span>
              terinspirasi oleh gambaran kompas, yang melambangkan peran Wisnu
              dalam membimbing para wisatawan untuk menemukan tujuan liburan
              terbaik mereka. Warna Oranye cerah mendominasi Wisnu dengan makna
              <span className="text-[#DC602A] font-semibold montserrat">
                {' '}
                "Full of Life"
              </span>
              . Makna ini menggambarkan semangat, kegembiraan, dan keceriaan
              dalam pengalaman liburan yang kami tawarkan. Logo ini mencerminkan
              komitmen kami untuk memberikan pengalaman liburan yang memenuhi
              kehidupan dengan kenangan yang penuh semangat dan kebahagiaan
              kepada setiap pengguna. Ini adalah simbol dari energi dan
              kegairahan dalam menjalani petualangan wisata, serta harapan kami
              agar setiap pelanggan merasa hidup dan bersemangat selama
              perjalanan mereka bersama kami.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute right-0 bottom-0 translate-y-[55vh]">
        <img src="assets/circle_vm_reverse.svg" width="300" />
      </div>
    </section>
  );
};

export default DefinisiLogo;
